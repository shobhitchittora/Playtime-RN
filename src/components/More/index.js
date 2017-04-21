import React from 'react';
import { Container, Content, List, ListItem, Text } from 'native-base';
import {Actions} from 'react-native-router-flux';

class More extends React.Component{
    
    logout(){
        Actions.pop();
    }

    render() {
        return (
            <Container>
                <Content>
                    <List>
                        <ListItem onPress={this.logout}>
                            <Text> Logout </Text>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        )
    }
}

export default More;