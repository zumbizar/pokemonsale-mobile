export default function Pokemon1 () {

    
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



export const price = [
    

    {

        id: 1,
        name: 'pokemon',
        price: 200,
        
    },

    {
        id: 2,
        name: 'Fifa 20',
        price: 199
    },

    {
        id: 3,
        name: 'Fifa 21',
        price: 300
    },
    
]
