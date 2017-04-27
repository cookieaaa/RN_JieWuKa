import React, { Component } from 'react';
import {
    Navigator,
    Platform,
    View
} from 'react-native'

import HHNavbar from './HHNavBar'
import HHStyleSheet from './../StyleSheet/HHStyleSheet'
import MineView from './../../ProModules/Home/Mine/MineView'

// import MessageView from '../../ProModules/Home/Message/MessageView'
// import MineView from '../../ProModules/Home/Mine/MineView'
// import MovieView from '../../ProModules/Home/Movies/MovieView'
// import NearlyView from '../../ProModules/Home/Nearly/NearlyView'
// import OnLineView from '../../ProModules/Home/OnLine/OnLineView'

export default class HHNavigator extends Component {
    constructor(props) {
       super(props)

    }
    render() {
        return (
            <View style={styles.container}>
                <Navigator
                    initialRoute={{name: 'MineView', index: 0, id: 'MineView'}}
                    configureScene={this._configureScene}
                    renderScene={this._renderScene}
                />
            </View>
        )
    }

    _renderScene(route, navigator) {
        switch (route.id) {
        case 'MineView':
            return (
                <MineView navigator={navigator} route={route}/>
            )

        default:
            break
        }
    }

    _configureScene(route, routeStack) {
        switch (route.id) {
        case 'about':
        case 'webview':
        case 'photoBrowser':
            return Navigator.SceneConfigs.FloatFromBottom
        default:
            return Navigator.SceneConfigs.FloatFromRight
        }
    }
}

const styles = {
    container: {
        flex: 1
    }
}
