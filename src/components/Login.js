import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Title = styled.div`
    width: 100%;

    font-family: SF Pro Text;
    font-size: 36px;
    line-height: 40px;
    text-align: center;
    margin-top: 15px;

    color: rgba(0,0,0,0.75);
    text-shadow: 0px 4px 10px rgba(0,0,0,0.25);
`;

const Subtitle = styled.div`
    width: 100%;

    font-family: SF Pro Text;
    font-size: 18px;
    line-height: 40px;
    text-align: center;

    color: rgba(0,0,0,0.75);
    text-shadow: 0px 4px 10px rgba(0,0,0,0.25);
`;

const EmailInput = styled.input`
    width: 100%;
    height: 30px;
    margin: 15px 0;
    background: #FFFFFF;
`;

const PassInput = styled.input`
    width: 100%;
    height: 30px;
    background: #FFFFFF;
`;

const LoginButton = styled.input`
    display: block;
    width: 100px;
    height: 46px;
    margin: 10px auto;

    background: #771F1F; //#C2C0C0 for grey
    color: #FFFFFF;
    border-radius: 29px;
    font-family: SF Pro Text;
    font-size: 24px;
    text-align: center;
`;

const App = styled.div`
    display: flex;
    width: 65%;
    margin: 0 auto;
`;

const Form = styled.form`
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

    <App>
        <Form onSubmit={this.handleSubmit}>

            <Title>Burnaby Central</Title>
            <Subtitle>Secondary School</Subtitle>

            <div>
                <EmailInput type="email" id="email" placeholder="Email:" onChange={this.handleEmail}/>
            </div>

            <div>
                <PassInput type="password" id="password" placeholder="Password:" onChange={this.handlePassword}/>
            </div>

            <LoginButton type='submit' value='Login'/>
    

        </Form>
    </App>

    );
}


}

export default Login;
