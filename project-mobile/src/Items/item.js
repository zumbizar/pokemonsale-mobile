import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import heartOutLineIcon from '../../assets/heart-outline.png';
import whatsappIcon from '../../assets/whatsapp.png';




function Items(){
    return(
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image style={styles.avatar}
                source={{ uri: 'https://github.com/zumbizar.png' }}
                />
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Fernando Henrique</Text>
                    <Text style={styles.subject}>Química</Text>

                </View>
            </View>

            <Text style={styles.bio}>
                Entusiasta das melhores tecnologias e games.
                {'\n'}  {'\n'}
                Apaixonado por ganhar todas as partidas de League of Legends, Valorant e Overwatch.
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/Hora  {'   '}
                    <Text style={styles.priceValue}>R$ 80,00</Text>
                </Text>
                
                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton]}>
                    <Image source={heartOutLineIcon} /> 
                  
                    </RectButton>

                    <RectButton style={styles.contactButton}>
                    <Image source={whatsappIcon} />
                    <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#e6e6f0',
        borderRadius: 8,
        marginBottom: 16,
        overflow: 'hidden',
    },
    
    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 24,
    },

    avatar: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#eee',
    },

    profileInfo: {
        marginLeft: 16,
    },

    name: {
        color: '#32264d',
        fontSize: 20,
    },

    subject: {
        color: '#6a6180',
        fontSize: 12,
        marginTop: 4,
    },

    bio: {
        marginHorizontal: 24,
        fontSize: 14,
        lineHeight: 24,
        color: '#6a6180',
    },

    footer:{
        backgroundColor: '#fafafc',
        padding: 24,
        alignItems: 'center',
        marginTop: 24,
    },

    price: {
        color: '#6a6180',
        fontSize: 14,
    },

    priceValue: {
        color: '#8257e5',
        fontSize: 16,
    },

    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 16,
    },

    favoriteButton: {
        backgroundColor: '#8257e5',
        width: 56,
        height: 56,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
    },

    contactButton: {
        backgroundColor: '#04d361',
        flex: 1,
        height: 56,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
    },

    contactButtonText:{
        color: '#FFF',
        fontSize: 16,
        marginLeft: 16,
    }
});

export default Items;


