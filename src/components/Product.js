import React from 'react'
import { View, Image, TouchableOpacity, Text, Dimensions } from 'react-native'

const { width } = Dimensions.get('window');

export default class Product extends React.Component {
    render() {
        return (
            <TouchableOpacity
                onPress={this.props.onPress}
                style={{
                    backgroundColor: "#f5f5fa",
                    height: 250,
                    width: "49%",
                    borderRadius: 20,
                    marginTop: this.props.marginTop,
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
                        290 Calories
                    </Text>
                </View>
                <Image
                    source={this.props.image}
                    style={{
                        height: 105,
                        alignSelf: "center",
                        width: 130,
                        marginTop: 15,
                        marginBottom: 15
                    }}
                />
                <Text style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    paddingHorizontal: 10
                }}>
                    {this.props.title}
                </Text>
                <Text style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    paddingHorizontal: 10,
                    color: "#848385"
                }}>
                    ${this.props.price}
                </Text>
            </TouchableOpacity>
        )
    }
}