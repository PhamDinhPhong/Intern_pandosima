import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from '@expo/vector-icons/Entypo';
import { useNavigation, useRoute } from '@react-navigation/native';

const Detail = () => {
    const [quantity, setQuantity] = useState(0);
    const navigation = useNavigation();
    const route = useRoute();
    const { id, name, price, description, image } = route.params;

    const addQuantity = () => {
        setQuantity(quantity + 1);
    };

    const subtractQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <View style={{ backgroundColor: "#FFF" }}>
            <ScrollView>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 40,
                    marginHorizontal: 20
                }}>
                    <View style={{ width: "10%" }}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image
                                source={require('../images/2.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: "80%", alignItems: "center" }}>
                        <View style={{
                            flexDirection: "row",
                            alignItems: "center",
                            alignSelf: "center"
                        }}>
                            <Image
                                source={require('../images/3.png')}
                                style={{ height: 25, width: 20 }}
                            />
                            <Text style={{
                                paddingHorizontal: 10,
                                fontWeight: "bold",
                                fontSize: 16
                            }}>290 Calories</Text>
                        </View>
                    </View>
                    <View style={{
                        height: 50,
                        width: 50,
                        alignItems: "center",
                        justifyContent: "center",
                        alignSelf: "center",
                    }}>
                        <Icon
                            name="shopping-cart"
                            size={30}
                            color="#000"
                        />
                    </View>
                </View>
                <Image
                    source={{ uri: image }}
                    style={{
                        height: 300,
                        width: 300,
                        alignSelf: "center"
                    }}
                />
                <View
                    style={{
                        flexDirection: "row",
                        alignSelf: "center",
                        alignItems: "center",
                        backgroundColor: "#f6f3fb",
                        paddingHorizontal: 20,
                        paddingVertical: 8,
                        borderRadius: 20
                    }}
                >
                    <TouchableOpacity onPress={subtractQuantity}>
                        <Text style={{
                            fontWeight: "bold",
                            fontSize: 18
                        }}>-</Text>
                    </TouchableOpacity>
                    <Text style={{
                        fontSize: 18,
                        fontWeight: "bold",
                        paddingHorizontal: 20
                    }}>
                        {quantity}
                    </Text>
                    <TouchableOpacity onPress={addQuantity}>
                        <Text style={{
                            fontWeight: "bold",
                            fontSize: 18
                        }}>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginHorizontal: 20,
                    marginTop: 30
                }}>
                    <View>
                        <Text style={{
                            fontWeight: "bold",
                            fontSize: 25
                        }}>{name}</Text>
                        <Text style={{
                            fontWeight: "bold",
                            fontSize: 15,
                            color: "#a4a4a9"
                        }}>
                            Beef burger
                        </Text>
                    </View>
                    <Text style={{
                        fontWeight: "bold",
                        fontSize: 28,
                        marginLeft: 80
                    }}>${price}</Text>
                </View>
                <Text style={{
                    fontWeight: "bold",
                    fontSize: 20,
                    marginTop: 30,
                    marginHorizontal: 20
                }}>
                    Ingredients
                </Text>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ marginTop: 20, marginHorizontal: 20 }}
                >
                    <View style={{
                        borderRadius: 15,
                        borderWidth: 0.1,
                        paddingHorizontal: 12,
                        paddingVertical: 8,
                        marginRight: 10
                    }}>
                        <Image
                            source={require('../images/11.png')}
                            style={{ height: 30, width: 30 }}
                        />
                    </View>
                    <View style={{
                        borderRadius: 15,
                        borderWidth: 0.1,
                        paddingHorizontal: 12,
                        paddingVertical: 8,
                        marginRight: 10
                    }}>
                        <Image
                            source={require('../images/13.png')}
                            style={{ height: 30, width: 30 }}
                        />
                    </View>
                    <View style={{
                        borderRadius: 15,
                        borderWidth: 0.1,
                        paddingHorizontal: 12,
                        paddingVertical: 8,
                        marginRight: 10
                    }}>
                        <Image
                            source={require('../images/12.png')}
                            style={{ height: 30, width: 30 }}
                        />
                    </View>
                    <View style={{
                        borderRadius: 15,
                        borderWidth: 0.1,
                        paddingHorizontal: 12,
                        paddingVertical: 8,
                        marginRight: 10
                    }}>
                        <Image
                            source={require('../images/8.png')}
                            style={{ height: 30, width: 30 }}
                        />
                    </View>
                    <View style={{
                        borderRadius: 15,
                        borderWidth: 0.1,
                        paddingHorizontal: 12,
                        paddingVertical: 8,
                        marginRight: 10
                    }}>
                        <Image
                            source={require('../images/bl.png')}
                            style={{ height: 30, width: 30 }}
                        />
                    </View>
                    <View style={{
                        borderRadius: 15,
                        borderWidth: 0.1,
                        paddingHorizontal: 12,
                        paddingVertical: 8,
                        marginRight: 10
                    }}>
                        <Image
                            source={require('../images/7.png')}
                            style={{ height: 30, width: 30 }}
                        />
                    </View>
                </ScrollView>
                <Text style={{
                    fontWeight: "bold",
                    fontSize: 20,
                    marginTop: 30,
                    marginHorizontal: 20
                }}>
                    Description
                </Text>
                <Text style={{
                    color: "#a4a4a9",
                    fontWeight: "bold",
                    fontSize: 15,
                    marginTop: 10,
                    marginHorizontal: 20,
                    textAlign: "justify",
                    marginBottom: 20
                }}>
                    {description}
                </Text>
            </ScrollView>
        </View>
    );
};

export default Detail;
