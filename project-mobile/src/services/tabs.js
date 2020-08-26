import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Buy from './buy';
import Cart from './cart';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';


const Tab = createBottomTabNavigator();

function Appp(props) {
  return (
    
            <Tab.Navigator>
              <Tab.Screen name="Buy" component={Buy}
              options={{
                tabBarLabel: 'Pokemon',
                tabBarIcon: ({ color, size, focused }) => {
                    return (
                        <Ionicons name="ios-bug" size={size} color={focused ? '#333' : color} />
                    );
                }
                
            }} />
              <Tab.Screen name="Cart" component={Cart}
              options={{
                tabBarLabel: 'Carrinho',
                tabBarIcon: ({ color, size, focused }) => {
                    return (
                      <View>
                        <Ionicons name="ios-cart" size={size} color={focused ? '#333' : color} />

                        <View style={{position: 'absolute', 
                            height: 25, width: 25, borderRadius: 15, backgroundColor: 'rgba(95,197,123,0.8)',
                            left: 25, top: 7, alignItems: 'center', justifyContent: 'center', zIndex: 2000}}>
                          <Text style={{ color: '#333', fontWeight: 'bold'}}>{props.cartItems.length}</Text>
                        </View>
                        </View>
                    );
                }
                
            }} />
            </Tab.Navigator>
  )
}

const mapStateToProps = (state) => {
  return {
    cartItems: state
  }
}

export default connect(mapStateToProps)(Appp);