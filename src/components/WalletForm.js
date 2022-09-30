import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencies } from '../redux/actions';

class WalletForm extends Component {
  componentDidMount() {
    const { dataCurrencies } = this.props;
    dataCurrencies();
  }

  render() {
    const { wallet: { currencies } } = this.props;
    return (
      <div>
        <input
          type="text"
          placeholder="Valor"
          data-testid="value-input"
        />

        <select data-testid="currency-input">
          {currencies.map((currency) => (
            <option
              value={ currency }
              key={ currency }
            >
              {currency}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Descrição"
          data-testid="description-input"
        />

        <select data-testid="method-input">
          <option> Dinheiro </option>
          <option> Cartão de crédito </option>
          <option> Cartão de débito </option>
        </select>

        <select data-testid="tag-input">
          <option> Alimentação </option>
          <option> Lazer </option>
          <option> Trabalho </option>
          <option> Transporte </option>
          <option> Saúde </option>
        </select>

        <button type="button">
          Adicionar despesa
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  dataCurrencies: () => dispatch(fetchCurrencies()),
});

WalletForm.propTypes = {
  wallet: PropTypes.shape.isRequired,
  dataCurrencies: PropTypes.shape.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
