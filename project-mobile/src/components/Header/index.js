import React, { ReactNode } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import back from '../../../assets/backicon.png';
import logoImg from '../../../assets/logo1.png';
import { useNavigation } from '@react-navigation/native';

interface PageHeaderProps {
    title: string;
    headerRight?:ReactNode;
}

const Header: React.FC <PageHeaderProps> = ({ title,headerRight, children }) => {
    const {navigate} = useNavigation();

    function handleGoBack(){
        navigate('Home');

    }
    
    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <BorderlessButton onPress={handleGoBack}>
                <Image style={styles.backicon} source={back} resizeMode="contain" />
                </BorderlessButton>

            <Image style={styles.logotype} source={logoImg} resizeMode="contain" />


            </View>
            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>
                {headerRight}
                
            </View>
                {children}        
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 40,
        backgroundColor: '#EEE4BF',
        
    },
    
    topBar:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        
    
    },

    logotype: {
        width: 100,
        marginBottom: -700,
        marginTop: -690

    },

    header:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    title: {
        color: '#000',
        fontSize: 24,
        lineHeight: 32,
        maxWidth: 200,
        marginVertical: 40,
        fontWeight: 'bold',

    },

    backicon: {
        width: 30,
        height: 30,
    }
});


export default Header;