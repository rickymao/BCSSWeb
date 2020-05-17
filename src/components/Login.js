import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Title = styled.div`
    width: 357px;
    height: 120px;

    font-family: SF Pro Text;
    font-size: 36px;
    line-height: 40px;
    text-align: center;

    color: rgba(0,0,0,0.75);
    text-shadow: 0px 4px 10px rgba(0,0,0,0.25);
`;

const EmailInput = styled.input`
    width: 392.1px;
    height: 35px;
    background: #FFFFFF;
`;

const PassInput = styled.input`
    width: 392.47px;
    height: 33.19px;
    background: #FFFFFF;
`;

const LoginButton = styled.input`
    width: 106px;
    height: 46px;
    background: #771F1F; //#C2C0C0 for grey
    color: #FFFFFF;
    border-radius: 29px;
    font-family: SF Pro Text;
    font-size: 24px;
    text-align: center;
    margin-left: 125px;
    
`;

const App = styled.div`
    width: 409.7px;
    height: 207.77px;
    position: fixed;
    bottom: 365.23px;
    right: 1368.3px;
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

    <App>
        <form onSubmit={this.handleSubmit}>

            <Title>Burnaby Central Secondary School</Title>

            <div>
                <EmailInput type="email" id="email" placeholder="Email:" onChange={this.handleEmail}/>
            </div>

            <div>
                <PassInput type="password" id="password" placeholder="Password:" onChange={this.handlePassword}/>
            </div>

            <LoginButton type='submit' value='Login'/>
    

        </form>
    </App>

    );
}


}

export default Login;