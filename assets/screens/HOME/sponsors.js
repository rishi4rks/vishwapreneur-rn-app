import * as React from 'react';
import {
    View,
    StyleSheet,
    Image,
    ScrollView,
    Text
} from 'react-native';


export default class Sponsors extends React.Component {
    render() {
        return (
            <View style={styles.horiscroll}>
                <ScrollView>
                    <View style={styles.childscroll}>
                        <View style={{ flex: 1, paddingRight: 5, backgroundColor: 'white' }}>
                            <Image source={this.props.imageUri} style={styles.sponsor} />
                        </View>
                        <View style={{ flex: 1, alignItems: 'center', marginTop: 10 }}>
                            <Text style={{ color: 'white', fontSize: 18 }}>{this.props.name}</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    horiscroll: {
        marginTop: 5,
        height: 270,
    },
    childscroll: {
        width: 250,
        height: 250,
        padding: 3,
    },
    sponsor: {
        flex: 1,
        width: null,
        height: null,
        alignSelf: 'stretch',
        resizeMode: 'contain'
    }
});