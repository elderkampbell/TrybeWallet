import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email, currency, total } = this.props;

    return (
      <header>
        <div data-testid="email-field">
          Email:
          { email }
        </div>
        <div data-testid="header-currency-field">
          Moeda:
          { currency }
        </div>
        <div data-testid="total-field">
          Total:
          { total }
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  currency: state.wallet.currency,
  total: state.wallet.total,
});

export default connect(mapStateToProps)(Header);
