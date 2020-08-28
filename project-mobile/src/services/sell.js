import React, { useEffect, useState} from 'react';
import { View, StyleSheet, Text, SafeAreaView, Image, Button } from 'react-native';
import { FlatList, ScrollView, RectButton } from 'react-native-gesture-handler';
import Header from '../../src/components/Header';



export default function Sell () {

    
    const [pokemons, setPokemon] = useState([])
    

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon',{
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(Response => Response.json())
        .then(data => {
            setPokemon(data.results)
        })
    }, [])

    return (
        <Header title="Seus Pokemon para a venda" >
        
        <SafeAreaView>
          <FlatList 
            data={pokemons}
            keyExtractor={(shoe) => shoe.name}
            contentContainerStyle={{ flexDirection: 'column-reverse'}}
            renderItem={PokemonShow}
            />
        </SafeAreaView>
        </Header>
        
    );
}



function PokemonShow (item) {

    const { name, url } = item.item

    const pokemonNumber = url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '')

    const imageUrl = 'https://pokeres.bastionbot.org/images/pokemon/'+pokemonNumber+'.png'

    return(

        <ScrollView
        contentContainerStyle={{
            paddingBottom: 16,
        }}>
        <View style={styles.container}>

        <View>
            <Image style={styles.image1} source={{uri: imageUrl}}/>
            <Text style={styles.title1}>
                {name} 
            </Text>
            <Text style={styles.price}> Preço: ****</Text>
            

            </View>

        </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
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

