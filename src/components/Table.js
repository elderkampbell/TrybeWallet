import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <table>
        <tbody>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>

          {expenses.map((e) => {
            const { currency, id, description, tag, value, method, exchangeRates } = e;
            return (
              <tr key={ id }>
                <td>
                  { description }
                </td>
                <td>
                  { tag }
                </td>
                <td>
                  { method }
                </td>
                <td>
                  { Number(value).toFixed(2) }
                </td>
                <td>
                  { exchangeRates[currency].name }
                </td>
                <td>
                  { Number(exchangeRates[currency].ask).toFixed(2) }
                </td>
                <td>
                  { Number(value * exchangeRates[currency].ask).toFixed(2) }
                </td>
                <td>
                  Real
                </td>
                <button
                  type="button"
                  data-testid="delete-btn"
                >
                  Excluir
                </button>
              </tr>
            );
          })}

        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Table.propTypes = {
  map: PropTypes.func.isRequired,
  expenses: PropTypes.shape.isRequired,
};

export default connect(mapStateToProps)(Table);
