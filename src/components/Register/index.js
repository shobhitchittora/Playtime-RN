import React from 'react';
import { View } from 'react-native';
import { Container, Header, Content, List, ListItem, InputGroup, Input, Icon, Button, Text } from 'native-base';
import {Actions} from 'react-native-router-flux';

class Register extends React.Component {

    register(){
        Actions.pop();
    }

    render() {
        return (
            <Container>
                <Header />
                <Content>
                    <List>
                        <ListItem>
                            <InputGroup>
                                <Input inlineLabel label="First Name" placeholder="John" />
                            </InputGroup>
                        </ListItem>
                        <ListItem>
                            <InputGroup>
                                <Input inlineLabel label="Last Name" placeholder="Doe" />
                            </InputGroup>
                        </ListItem>

                        <ListItem>
                            <InputGroup>
                                <Icon name="ios-person" style={{ color: '#0A69FE' }} />
                                <Input placeholder="EMAIL" />
                            </InputGroup>
                        </ListItem>
                        <ListItem>
                            <InputGroup>
                                <Icon name="ios-unlock" style={{ color: '#0A69FE' }} />
                                <Input placeholder="PASSWORD" secureTextEntry />
                            </InputGroup>
                        </ListItem>
                        <ListItem>
                            <InputGroup>
                                <Icon name="ios-call" style={{ color: '#0A69FE' }} />
                                <Input
                                    placeholder="PHONE"
                                    keyboardType="numeric"
                                />
                            </InputGroup>
                        </ListItem>

                        <ListItem>
                            <InputGroup >
                                <Input stackedLabel label="Permanent Address" placeholder="Address" />
                            </InputGroup>
                        </ListItem>
                    </List>

                    <Button style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }} onPress={this.register}>
                        <Text> Sign Up </Text>
                    </Button>

                </Content>
            </Container>
        )
    }
}

export default Register;