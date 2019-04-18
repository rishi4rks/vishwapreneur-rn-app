import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    ImageBackground,
    StatusBar,
    ScrollView
} from 'react-native';
import {
    Content,
    Container,
    H1,
    H2,
    H3,
    Button,
    Card,
    Header,
    Icon
} from 'native-base';
import { Constants, Font } from 'expo';
import Sponsors from './sponsors'


export default class Edc extends React.Component {

    state = {
        fontLoaded: false,
    };

    async componentDidMount() {
        await Font.loadAsync({
            'Batmanforever': require('../../fonts/batmfa.ttf'),
            'Raleway': require('../../fonts/Raleway-Bold.ttf'),
        });

        this.setState({ fontLoaded: true });
    }
    static navigationOptions = { header: null };

    render() {
        return (
            <Container
                style={{
                    backgroundColor: '#282828',
                    flex: 1,
                    FlexDirection: 'column',
                    justifyContent: 'center',
                    paddingTop: Constants.statusBarHeight,
                }}>

                <Header style={{ backgroundColor: '#555656', elevation: 10 }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <StatusBar
                            barStyle='light-content'
                            translucent={false}
                        />
                        {
                            this.state.fontLoaded ? (
                                <Text style={{ fontFamily: 'Batmanforever', fontSize: 25, color: 'white' }}>
                                    VISHWAPRENEUR
                                </Text>
                            ) : null
                        }
                    </View>
                </Header>

                <Content padder style={{ paddingTop: 20 }}>
                    <View
                        style={{
                            flex: 1,
                            alignItems: 'center',
                        }}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 10 }}>
                            {
                                this.state.fontLoaded ? (
                                    <Text style={{ fontFamily: 'Raleway', fontSize: 30, color: '#fff', textAlign: 'center' }}>
                                        Entrepreneurship Development Cell, VIIT
                                    </Text>
                                ) : null
                            }
                        </View>
                    </View>

                    <Text>{'\n'}</Text>

                    <View style={{ alignItems: 'center', paddingBottom: 15 }}>
                        {
                            this.state.fontLoaded ? (
                                <Text style={styles.inststyle}>
                                    A little bit about us...
                                </Text>
                            ) : null
                        }
                    </View>
                    <View style={{ paddingHorizontal: 15, borderBottomColor: '#aaaaaa', borderBottomWidth: 1, alignSelf: 'stretch' }}>
                        <Text style={{ fontSize: 18, textAlign: 'center', paddingBottom: 15, color: 'white' }}>
                            EDC is a family of more than 200 like minded and strongly willed people, who are not afraid to voice their ideas and bring their talents to the table. We are a free-spirited group of individuals, with a desire to make our presence known by changing the world.
                        </Text>
                    </View>

                    <View style={{ alignItems: 'center', paddingVertical: 25 }}>
                        <View style={{ alignItems: 'center', paddingBottom: 15 }}>
                            {
                                this.state.fontLoaded ? (
                                    <Text style={styles.inststyle}>
                                        Our Initiatives
                                </Text>
                                ) : null
                            }
                        </View>
                        <Text style={{ fontSize: 18, textAlign: 'center', paddingBottom: 15, color: 'white' }}>
                            We at EDC, love doing things our own way.
                        </Text>
                    </View>

                    <Card style={styles.cardstyle}>
                        <View style={{ alignItems: 'center', backgroundColor: '#BDBDBD' }}>
                            <Image
                                source={require('../../images/corpstrata.png')}
                                style={{
                                    height: 200,
                                    width: 200,
                                    flex: 1,
                                    justifyContent: 'center',
                                    padding: 10,
                                    resizeMode: 'contain',
                                }} />
                            <Text
                                style={styles.textWithShadow}>
                                CorpStrata
                            </Text>
                        </View>
                        <View style={{ padding: 5, paddingBottom: 25, backgroundColor: '#BDBDBD' }}>
                            <Text style={styles.contentFont}>
                                The first year members of EDC host CorpStrata, to kick off their first term as engineers with a bang.
                            </Text>
                        </View>
                    </Card>

                    <Card style={styles.cardstyle}>
                        <View style={{ alignItems: 'center', backgroundColor: '#BDBDBD' }}>
                            <Image
                                source={require('../../images/12345.png')}
                                style={{
                                    height: 200,
                                    width: 200,
                                    flex: 1,
                                    justifyContent: 'center',
                                    padding: 10,
                                    resizeMode: 'contain'
                                }} />
                            <Text
                                style={styles.textWithShadow}>
                                Vishwapreneur
                            </Text>
                        </View>
                        <View style={{ padding: 5, paddingBottom: 25, backgroundColor: '#BDBDBD' }}>
                            <Text style={styles.contentFont}>
                                Vishwapreneur, is a national level entrepreneurial convention that is organized by EDC every year.
                            </Text>
                        </View>
                    </Card>
                    <Card style={styles.cardstyle}>
                        <View style={{ alignItems: 'center', backgroundColor: '#BDBDBD' }}>
                            <Image
                                source={require('../../images/sfc.png')}
                                style={{
                                    height: 200,
                                    width: 200,
                                    flex: 1,
                                    justifyContent: 'center',
                                    padding: 10,
                                    resizeMode: 'contain'
                                }} />
                            <Text
                                style={styles.textWithShadow}>
                                SFC
                            </Text>
                        </View>
                        <View style={{ padding: 5, paddingBottom: 25, backgroundColor: '#BDBDBD' }}>
                            <Text style={styles.contentFont}>
                                SFC, EDC's own creation, aims at providing easy purchase of engineering necessities.
                            </Text>
                        </View>
                    </Card>

                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    venueDetails: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white'
    },
    textWithShadow: {
        textShadowColor: 'rgba(60, 60, 60, .6)',
        textShadowOffset: { width: 2, height: 2 },
        fontSize: 30,
        color: '#000',
    },
    contentFont: {
        textShadowColor: 'rgba(60, 60, 60, .3)',
        textShadowOffset: { width: 1, height: 1 },
        fontSize: 17,
        color: '#212121',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttons: {
        backgroundColor: 'rgb(0,40,180)',
        borderRadius: 15,
        padding: 7,
        textAlign: 'center',
        alignItems: 'center'
    },
    cardstyle: {
        marginBottom: 20,
        borderRadius: 8,
        height: null,
        width: null,
        flex: 1,
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#BDBDBD'
    },
    inststyle: {
        fontSize: 25,
        fontFamily: 'Raleway',
        color: 'white'
    },
});