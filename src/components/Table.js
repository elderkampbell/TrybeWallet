import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeItem } from '../redux/actions';

class Table extends Component {
  handleRemove = (id) => {
    const { expenses, cleanedArray } = this.props;
    const newArray = expenses.filter((e) => e.id !== id);
    cleanedArray(newArray);
  };

  render() {
    const { expenses } = this.props;
    return (
      <table id="expensesList">
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
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
                <td>
                  <button
                    type="button"
                    data-testid="delete-btn"
                    onClick={ () => this.handleRemove(id) }
                  >
                    Excluir
                  </button>
                </td>
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

const mapDispatchToProps = (dispatch) => ({
  cleanedArray: (expense) => dispatch(removeItem(expense)),
});

Table.propTypes = {
  cleanedArray: PropTypes.func.isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(Table);

// onClick={ ({ target }) => {
//   const tr = target.parentNode.parentNode;
//   tr.remove();
// }
