import React from 'react';
import { Text, View } from 'react-native';
import { Container, Header, Left, Right, Body, Title, Content, Button, Icon, Tabs, Tab, TabHeading } from 'native-base';

import TvShows from '../TV Shows';
import TodoApp from '../Todo';
import More from '../More';

class Home extends React.Component {
    constructor() {
        super();
        this.state = { selectedTab: 0 };
        this.selectTab = this.selectTab.bind(this);
    }

    selectTab(x) {
        this.setState({ selectedTab: x });
    }

    render() {
        return (

            <Container>

                <Header hasTabs>
                    <Left>
                        <Button transparent onPress={this.props.openDrawer}>
                            <Icon name="ios-menu" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Tabs</Title>
                    </Body>
                    <Right />
                </Header>


                <Tabs>
                    <Tab heading={<TabHeading><Text> TV Shows </Text></TabHeading>}>
                        <TvShows />
                    </Tab>
                    <Tab heading={<TabHeading><Text> Todo App </Text></TabHeading>}>
                        <TodoApp />
                    </Tab>
                    <Tab heading={<TabHeading><Icon name="apps" /></TabHeading>}>
                        <More />
                    </Tab>
                </Tabs>

            </Container>

        )
    }
}

export default Home;