import React, { useState, useEffect, Component } from 'react';
import { View, StyleSheet, Text, StatusBar, SafeAreaView, Image } from 'react-native';
import { BorderlessButton, RectButton, ScrollView, TextInput, FlatList } from 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import Header from '../../src/components/Header';
import { price } from '../../Data';
import Products from '../../Products';
import { connect } from 'react-redux';
import Sell from '../../src/services/sell'

class Buy extends Component {

    static navigationOptions = {
        headerTitle: 'Electronics'
    }
    render() {
        return (
            <View>

            <Header title="Pokemon disponíveis" />
            <ScrollView>
                <View>
                <Products products={price} onPress={this.props.addItemToCart} />
                </View>
            </ScrollView>

            </View>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart:(product) => dispatch({ type: 'ADD_TO_CART', payload: product})
    }
}
export default connect(null, mapDispatchToProps)(Buy);

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#e9e3ce',

    },
 

    teacherList: {
        marginTop: -40,
        
    },

    searchForm: {
        marginBottom: 24,
        marginTop: -18,
    },

    label: {
        color: '#333',
    },

    inputGroup:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    inputBlock: {
        width: '48%',
    },

    input: {
        height: 54,
        backgroundColor: '#FFF',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom: 16,
    },

    submitButton:{
        backgroundColor: '#04d361',
        height: 56,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    submitButtonText: {
        color: '#FFF',
        fontSize: 16,
    },

    container:{
        flex:1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        padding: 15,
        alignItems: 'center',
        paddingTop: 20,
        borderRadius: 8

        
    },

    image1: {
        width: 50,
        height: 50,
        padding: 55,
        
    },

    title1: {
        fontWeight: 'bold',
        fontSize: 25,
    },

    price:{
        fontSize: 14
    },
});
