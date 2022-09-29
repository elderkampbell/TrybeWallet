import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getLoginAction } from '../redux/actions/index';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    isDisabled: true,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState(
      { [name]: value },
      () => this.inputValidation(),
    );
  };

  loginDispatch = () => {
    const { dispatch, history } = this.props;
    dispatch(getLoginAction(
      this.state,
    ));
    history.push('/carteira');
  };

  inputValidation = () => {
    const { email, password } = this.state;
    const minLenght = 5;
    const testValidation = /\S+@\S+\.\S+/;
    const emailValidation = testValidation.test(email);
    if (emailValidation && password.length > minLenght) {
      this.setState({ isDisabled: false });
    } else {
      this.setState({ isDisabled: true });
    }
  };

  render() {
    const { email, password, isDisabled } = this.state;
    return (
      <div>
        <input
          name="email"
          type="email"
          onChange={ this.handleChange }
          value={ email }
          data-testid="email-input"
          placeholder="Email"
          required
        />
        <input
          name="password"
          type="password"
          onChange={ this.handleChange }
          value={ password }
          data-testid="password-input"
          placeholder="Senha"
          required
        />
        <button
          type="submit"
          disabled={ isDisabled }
          onClick={ this.loginDispatch }
        >
          Entrar
        </button>

      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape.isRequired,
};

export default connect()(Login);
