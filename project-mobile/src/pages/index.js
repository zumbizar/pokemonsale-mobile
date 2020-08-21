import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import heartIcon from '../../assets/heart1.png';
import logo from '../../assets/logo1.png'

import { RectButton } from 'react-native-gesture-handler';




function Home() {

    const { navigate } = useNavigation();

    function handleNavigateToBuy() {
        navigate('Buy');
    }

    function handleNavigateToSell(){
        navigate('Sell');
    }


    return(
        <View style={styles.container}>
            <Image style={styles.logo} source={logo}/>
        <Text style={styles.title}>
        Seja bem-vindo, {'\n'}
        <Text style={styles.titleBold}>O que deseja fazer?</Text>
        </Text>

        <View style={styles.buttonsContainer}>
            <RectButton onPress={handleNavigateToBuy} style={[styles.button, styles.buttonPrimary]}>

            <Text style={styles.buttonText}>Comprar</Text>
            </RectButton>

            <RectButton onPress={handleNavigateToSell} style={[styles.button, styles.buttonSecondary]}>
            <Image/>

            <Text style={styles.buttonText}>Vender</Text>
            </RectButton>

        </View>
        <Text style={styles.totalConnections}>
            Total de 212 pokemon já vendidos {' '}
            <Image style={styles.heart} source={heartIcon}/>
        </Text>
    </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#EEE4BF',
        justifyContent: 'center',
        padding: 40,
    },

    logo: {
        width: '100%',
        height: 110,
        marginLeft: -14,
        marginTop: -100

    },

    banner: {
        width: '50%',
        resizeMode: 'contain',
    },

    title: {
        color: '#333',
        fontSize: 30,
        lineHeight: 40,
        marginTop: 80,
        fontWeight: 'bold',
           
    },


    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'space-between',
        

    },

    button: {
        
        height: 50,
        width: '48%',
        backgroundColor: '#333',
        borderRadius: 8,
        padding: 24,
        alignItems: 'center',
        justifyContent: 'center',

    },

    buttonPrimary: {
        backgroundColor: '#04d361',
    },

    buttonSecondary: {
        backgroundColor: '#AF0F0F',
        
    },

    buttonText: {
        color: '#fff',
        fontSize: 20,
        alignItems: 'center',
        justifyContent: 'center',
        lineHeight: 25,
        fontWeight: 'bold',


    },

    totalConnections: {
        color: '#333',
        fontSize: 12,
        lineHeight: 100,
        maxHeight: 200,
        marginTop: 40,
    },

    heart: {
        width: 50,
        height: 50
    }
  
});
export default Home;