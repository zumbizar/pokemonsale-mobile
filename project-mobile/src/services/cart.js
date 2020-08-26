import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from '../../src/components/Header';
import Products from '../../Products';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';

class Cart extends Component {
    render() {
        return (
            <View>
                <Header title="Seu carrinho" /> 

                <ScrollView>
                    <View>
                        {this.props.cartItems.length > 0?
                            <Products onPress={this.props.removeItem}
                             products={this.props.cartItems} />
                            : <Text>Sem items no carrinho..</Text>
                        }
                    </View>
                </ScrollView>
                
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      cartItems: state
    }
  }

  const mapDispatchToProps = (dispatch) => {
      return {
          removeItem:(product) => dispatch({ type: 'REMOVE_FROM_CART', payload: product})
      }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Cart);