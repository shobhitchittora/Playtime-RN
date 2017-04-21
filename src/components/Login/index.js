import React from 'react';
import { Alert } from 'react-native';
import { Container, Header, Content, Footer, Form, Item, Input, Text, Label, Left, Button, Icon, Title, Right, Body } from 'native-base';
import { Actions } from 'react-native-router-flux';

import styles from './styles';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = { username: '', password: '' };
        this.handleUserName = this.handleUserName.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
    }

    handleUserName(text) {
        this.setState({ username: text });
    }

    handlePassword(text) {
        this.setState({ password: text });
    }

    handleSubmit() {
        if (this.state.username.toLowerCase().trim() === 'a' && this.state.password.toLowerCase().trim() === 'a') {
            Alert.alert(
                'Login In',
                'Success',
                [
                    {
                        text: 'OK', onPress: () => { }
                    },
                ]);
            this.setState({ username: '', password: '' });
            this.handleLogin();

        } else {
            Alert.alert(
                'Login In',
                'Invalid username or password.',
                [
                    { text: 'OK', onPress: () => { } },
                ]);
        }
    }

    handleLogin() {
        Actions.home();
    }

    handleRegister() {
        Actions.register();
    }

    render() {
        return (

            <Container>
                <Content >
                    <Form style={styles.formContainer}>
                        <Item fixedLabel style={styles.inputStyle}>
                            <Label> UserName</Label>
                            <Input value={this.state.username} onChangeText={this.handleUserName} />
                        </Item>

                        <Item fixedLabel style={styles.inputStyle}>
                            <Label> Password </Label>
                            <Input value={this.state.password} onChangeText={this.handlePassword} />
                        </Item>


                        <Button full bordered={true} style={styles.loginBtn} onPress={this.handleSubmit}>
                            <Text> LogIn! </Text>
                        </Button>


                        <Button full bordered={true} style={styles.loginBtn} onPress={this.handleRegister}>
                            <Text> Register Now </Text>
                        </Button>

                    </Form>
                </Content>
            </Container>
            /*<View style={styles.container}>
                <Text style={styles.welcome}>asdfsadf</Text>
            </View>*/
        )
    }
}


export default Login;