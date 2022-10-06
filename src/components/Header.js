import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  totalConversion = () => {
    let total = 0;
    const { expenses } = this.props;
    expenses.forEach((expense) => {
      total += expense.value * expense.exchangeRates[expense.currency].ask;
    });
    return total.toFixed(2);
  };

  render() {
    const { email, currency } = this.props;

    return (
      <header>
        <div data-testid="email-field">
          <p>
            Email:
          </p>
          { email }
        </div>
        <div data-testid="header-currency-field">
          <p>
            Moeda:
          </p>
          { currency }
        </div>
        <div data-testid="total-field">
          { this.totalConversion() }
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      method: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  currency: state.wallet.currency,
  total: state.wallet.total,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
