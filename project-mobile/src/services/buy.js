import React, { useState, useEffect, Component } from 'react';
import { View, StyleSheet, Text, StatusBar, SafeAreaView, Image } from 'react-native';
import { BorderlessButton, RectButton, ScrollView, TextInput, FlatList } from 'react-native-gesture-handler';
import Header from '../../src/components/Header';
import { product } from '../../Data';
import Products from '../../Products';
import { connect } from 'react-redux';



class Buy extends Component {

  
    render() {
        return (
            <View style={styles.container}>
            <Header title="Pokemon disponíveis" />

            <ScrollView> 
                <View>
                <Products products={product}  onPress={this.props.addItemToCart} />

                

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
    },
});
