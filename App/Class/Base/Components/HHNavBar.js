import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Platform
} from 'react-native'

import NavigationBar from 'react-native-navbar'
import HHIconfontConf from './HHIconfontConf';



export default class HHNavbar extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    _leftButton() {
        return _renderBarButton('uniE617', () => this.props.navigator.pop(), true)

    }

    _rightButton() {
      return _renderBarButton('uniE617', () => this.props.navigator.pop(), true)
    }

    _title() {
        return (
                <Text >asdasds</Text>
        )
    }

    render() {
        let style = {
            paddingTop: Platform.OS === 'android' ? 0 : 20,
            height: Platform.OS === 'android' ? 56 : 64
        }
        return (
            <NavigationBar
                style={[styles.navbar, style]}
                tintColor={'#f7f7f8'}
                statusBar={{
                    hidden: true
                }}
                leftButton={this._leftButton()}
                rightButton={this._rightButton()}
                title={this._title()}
            />
        )
    }
}
const styles = {
    navbar: {
        alignItems: 'center',
        borderColor: '#e1e1e1',
        borderBottomWidth: 1
    },
    title: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5
    },
    titleText: {
        fontSize: 18
    },
    button: {
        flex: 1,
        width: 35,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 16,
        color: '#333'
    },
    buttonIconFontText: {
        fontSize: 26,
        fontFamily: 'iconfont'
    }
}

function _renderBarButton(text, handler, icon = false, buttonStyle = {}, buttonTextStyle = {}) {
    let buttonText = [styles.buttonText, buttonTextStyle]
    if(icon) {
        text = HHIconfontConf(text)
        buttonText = [buttonText, styles.buttonIconFontText]
    }
    return (
        <TouchableOpacity
            onPress={handler}
            style={[styles.button, buttonStyle]}>
            <Text style={buttonText}>{text}</Text>
        </TouchableOpacity>
    )
}
