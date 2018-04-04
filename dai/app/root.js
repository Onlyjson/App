/**
 * desc：root
 * author：yanshu lee
 * date： 2018/4/3
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import App from './app'

export default class Root extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }



    render() {
        return (
            <App/>
        );
    }
}

const styles = StyleSheet.create({});