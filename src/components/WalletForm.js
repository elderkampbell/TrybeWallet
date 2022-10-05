import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencies, fetchexchangerate } from '../redux/actions';

class WalletForm extends Component {
  state = {
    id: 0,
    description: '',
    tag: 'Alimentação',
    method: 'Dinheiro',
    value: '',
    currency: 'USD',
  };

  componentDidMount() {
    const { dataCurrencies } = this.props;
    dataCurrencies();
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleClick = (() => {
    const { dispatchexchangerate } = this.props;
    dispatchexchangerate(this.state);
    const { id } = this.state;
    this.setState({
      id: id + 1,
      description: '',
      tag: 'Alimentação',
      method: 'Dinheiro',
      value: '',
      currency: 'USD' });
  });

  render() {
    const { wallet: { currencies } } = this.props;
    const { description, tag, method, value, currency } = this.state;
    return (
      <div>
        <input
          name="value"
          value={ value }
          type="number"
          placeholder="Valor"
          data-testid="value-input"
          onChange={ this.handleChange }
        />

        <select
          name="currency"
          value={ currency }
          data-testid="currency-input"
          onChange={ this.handleChange }
        >
          {currencies.map((curr) => (
            <option
              value={ curr }
              key={ curr }
            >
              {curr}
            </option>
          ))}
        </select>

        <input
          name="description"
          value={ description }
          type="text"
          placeholder="Descrição"
          data-testid="description-input"
          onChange={ this.handleChange }
        />

        <select
          name="method"
          value={ method }
          data-testid="method-input"
          onChange={ this.handleChange }
        >
          <option> Dinheiro </option>
          <option> Cartão de crédito </option>
          <option> Cartão de débito </option>
        </select>

        <select
          name="tag"
          value={ tag }
          data-testid="tag-input"
          onChange={ this.handleChange }
        >
          <option> Alimentação </option>
          <option> Lazer </option>
          <option> Trabalho </option>
          <option> Transporte </option>
          <option> Saúde </option>
        </select>

        <button
          type="button"
          onClick={ this.handleClick }
        >
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
  dispatchexchangerate: (state) => dispatch(fetchexchangerate(state)),
  dataCurrencies: () => dispatch(fetchCurrencies()),
});

WalletForm.propTypes = {
  dispatchexchangerate: PropTypes.func.isRequired,
  wallet: PropTypes.shape.isRequired,
  dataCurrencies: PropTypes.shape.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
