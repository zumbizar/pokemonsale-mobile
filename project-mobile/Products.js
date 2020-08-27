import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    Image
} from "react-native";


class Products extends Component {

    renderProducts = (products) => {
        console.log(products)
        return products.map((item, index) => {
            return (
                <View key={index} style={{ padding: 10}}>
                    <Text style={{color: '#000', fontSize: 25, fontWeight: 'bold'}}>{item.name}</Text>
                    <Image style={{width: 100, height: 100}} source={{uri: 'https://pokeres.bastionbot.org/images/pokemon/1.png'}} />

                    <Text style={{color: '#333', fontSize: 18, paddingTop: 5, paddingBottom: 10}}>R$: {item.price}</Text>

                    
                    <Button onPress={() => this.props.onPress(item)} title={'Adicionar ao carrinho'} />
                    
                   
                </View>
                
            )
        })
    }



    render() {
        return (
            <View style={styles.container}>
                {this.renderProducts(this.props.products)}
            </View>
        );
    }
}
export default Products;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    }
});