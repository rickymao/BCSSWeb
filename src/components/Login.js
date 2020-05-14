import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const LoginForm = styled.form`

height: 100%;
width: 100%;

`;


class Login extends React.Component {

constructor(props) {
super(props);

this.handleSubmit = this.handleSubmit.bind(this);
this.handleEmail = this.handleEmail.bind(this);
this.handlePassword = this.handlePassword.bind(this);

this.state = {

    email: '',
    password:'',

}

}

handleEmail = () => {
    console.log('email');
};

handlePassword = () => {
    console.log('password');
};

handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push('/dashboard');
    
    console.log('submit');
};


render() {

    return (

    <LoginForm onSubmit={this.handleSubmit}>

    <h2>Sign In</h2>
    <div className='email_input'>
    <label htmlFor="email">Email</label>
    <input type="email" id="email" onChange={this.handleEmail}/>
    </div>

    <div className='pass_input'>
    <label htmlFor="password">Password</label>
    <input type="password" id="password" onChange={this.handlePassword}/>
    </div>

    <input type='submit' value='Submit'/>

    </LoginForm>




    );
}


}

export default Login;