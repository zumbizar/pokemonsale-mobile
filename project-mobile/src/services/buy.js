import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, StatusBar, SafeAreaView, Image } from 'react-native';
import { BorderlessButton, RectButton, ScrollView, TextInput, FlatList } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import Header from '../../src/components/Header';
import Items from '../Items/item';




export default function Buy () {

    const [isFiltersVisible, setIsFiltersVisible] = useState(false);

    function handleToggleFiltersVisible() {
        setIsFiltersVisible(!isFiltersVisible);
    }

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

        <Header
            title="Pokemon disponíveis" 
            headerRight={(
                <BorderlessButton onPress={handleToggleFiltersVisible}>
                    <Feather name="filter" size={23} color="#333" />
                </BorderlessButton>
            )}>
           {isFiltersVisible && (  
                <View style={styles.searchForm}>
                        <Text style={styles.label}>Qual o pokemon:</Text>
                        <TextInput style={styles.input} 
                        placeholder="Escolha o seu pokemon?" 
                        placeholderTextColor="#c1bccc" />
                    
                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                            <Text style={styles.label}>Elemento:</Text>
                        <TextInput style={styles.input}
                        placeholder="Qual o elemento?" 
                        placeholderTextColor="#c1bccc"/>
                    
                            </View>

                            <View style={styles.inputBlock}>
                            <Text style={styles.label}>Preço:</Text>
                        <TextInput style={styles.input}
                        placeholder="Escolha um valor?" 
                        placeholderTextColor="#c1bccc"/>
                    
                            </View>

                        </View>

                        <RectButton onPress={handleToggleFiltersVisible} style={styles.submitButton}>
                            <Text style={styles.submitButtonText}>Filtrar</Text>
                        </RectButton>
                        </View>
           )}
        <SafeAreaView>
          <FlatList 
            data={pokemons}
            keyExtractor={(shoe) => shoe.name}
            contentContainerStyle={{ flexDirection: 'column'}}
            renderItem={PokemonShow}
            />
        </SafeAreaView>
        </Header>
        
    );

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

    
    
}



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

