import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Container, Header, Content, Footer, Body, Left, Right, Title, Card, CardItem, Icon, Spinner } from 'native-base';
import genres from '../../assets/data/genres';
import api_key from '../../assets/data/api_key'

class TvShows extends React.Component {
    state = { shows: [], imageBaseURI: 'https://image.tmdb.org/t/p/w780' };

    componentWillMount() {
        fetch('https://api.themoviedb.org/3/tv/top_rated?api_key=' + api_key)
            .then(res => res.json())
            .then(res => { console.log(res.results); this.setState({ shows: res.results }) })
            .catch(err => console.log(err));
    }

    render() {

        let spinner = this.state.shows.length ? null : <Spinner />;

        return (
            <Container>
                <Content>
                    <ScrollView>
                        {
                            this.state.shows.map((show) =>
                                <Card key={show.id}>
                                    <TvShowDetails show={show} imageBaseURI={this.state.imageBaseURI} />
                                </Card>
                            )
                        }
                        {spinner}
                    </ScrollView>
                </Content>

            </Container>

        )
    }
}


class TvShowDetails extends React.Component {

    getGenre(ids) {
        let genre = '';
        ids.map(id => {
            genres.map(gen => {
                if (gen.id === id) {
                    genre = gen.name;
                }
            });
        });
        return genre;
    }

    render() {
        let imageUri = this.props.imageBaseURI + this.props.show.backdrop_path;
        return (
            <View>
                <CardItem>
                    <Image resizeMode="contain" style={{ flex: 1, height: 200 }} source={{ uri: imageUri }} />
                </CardItem>
                <CardItem >
                    <Left style={tvItem.leftContainer}>
                        <View>
                            <Text>{this.props.show.name}</Text>
                            <View style={tvItem.dateContainer}>
                                <Icon name='calendar' />
                                <Text style={tvItem.date}>{this.props.show.first_air_date.slice(0, 4)}</Text>
                            </View>
                        </View>

                    </Left>

                    <Right style={tvItem.rightContainer}>
                        <View>
                            <View style={tvItem.ratingsContainer}>
                                <Text> {this.props.show.vote_average} </Text>
                                <Icon name='md-star' />
                            </View>

                            <Text style={tvItem.genre}>{this.getGenre(this.props.show.genre_ids)}</Text>
                        </View>
                    </Right>
                </CardItem>

                <CardItem>

                    <Body>
                        <Text numberOfLines={5}>{this.props.show.overview}</Text>
                    </Body>

                </CardItem>
            </View>
        )
    }
}

const tvItem = {
    leftContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    rightContainer: {
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    name: {
        alignSelf: 'flex-start'
    },
    date: {
        marginLeft: 10,
        alignSelf: 'center'
    },
    dateContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        alignSelf: 'flex-start'
    },
    ratingsContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    genre: {
        alignSelf: 'flex-end'
    }
};
export default TvShows;