import React from 'react'
import { View, Image, TouchableOpacity, Text, Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native';
const { width } = Dimensions.get('window');

const Product = ({ id, name, price, image, description }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('Detail', { id, image, price, name, description })}
            style={{
                backgroundColor: "#f5f5fa",
                height: 250,
                width: width * 0.45,
                borderRadius: 20,
                marginTop: 10,
                marginRight: 10
            }}
        >
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                alignSelf: "center",
                marginTop: 20
            }}>
                <Image
                    source={require('../images/3.png')}
                    style={{ height: 25, width: 20 }}
                />
                <Text style={{
                    paddingHorizontal: 10,
                    fontWeight: "bold",
                    fontSize: 16
                }}>
                    {name}
                </Text>
            </View>
            <Image
                style={{
                    height: 105,
                    alignSelf: "center",
                    width: 130,
                    marginTop: 15,
                    marginBottom: 15
                }}
                source={{ uri: image }}
            />
            <Text style={{
                fontSize: 18,
                fontWeight: "bold",
                paddingHorizontal: 10
            }}>
                290 Calories
            </Text>
            <Text style={{
                fontSize: 15,
                fontWeight: "bold",
                paddingHorizontal: 10,
                color: "#848385"
            }}>
                ${price}
            </Text>
        </TouchableOpacity>
    );
};

export default Product;
