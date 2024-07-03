import React, { useEffect, useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { View, Image, Text, ScrollView, RefreshControl } from 'react-native';
import Icon from "@expo/vector-icons/Entypo";
import ProductList from '../components/ProductList';

const Home = () => {
    const [city, setCity] = useState("Los Angeles");
    const [data, setData] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            setRefreshing(true); // Bắt đầu refresh, hiển thị indicator loading

            console.log("TEST")
            const response = await fetch("http://10.0.2.2:8000/api/Food/");
            console.log(response);
            const data = await response.json();
            console.log(data);

            setData(data);
            setRefreshing(false); // Hoàn thành refresh, ẩn indicator loading
        } catch (error) {
            console.error('Error fetching data:', error);
            setRefreshing(false); // Đảm bảo rằng khi có lỗi cũng dừng indicator loading
        }
    };

    return (
        <ScrollView
            style={{ backgroundColor: "#FFF" }}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={fetchData}
                />
            }
        >
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 40,
                marginHorizontal: 20
            }}>
                <View style={{ width: "10%" }}>
                    <Image
                        source={require('../images/1.png')}
                    />
                </View>
                <View style={{
                    width: "80%",
                    alignItems: "center"
                }}>
                    <Picker
                        selectedValue={city}
                        style={{ height: 50, width: 160 }}
                        onValueChange={(itemValue) => setCity(itemValue)}
                    >
                        <Picker.Item
                            label="Hà Nội"
                            value="Hà Nội"
                            style={{ fontWeight: "bold" }}
                        />
                        <Picker.Item
                            label="Đà Nẵng"
                            value="Đà Nẵng"
                            style={{ fontWeight: "bold" }}
                        />
                        <Picker.Item
                            label="Thành phố Hồ Chí Minh"
                            value="Thành phố Hồ Chí Minh"
                            style={{ fontWeight: "bold" }}
                        />
                    </Picker>
                </View>
                <View style={{ width: "10%" }}>
                    <Icon name="magnifying-glass" size={30} />
                </View>
            </View>

            <View style={{
                paddingHorizontal: 20,
                marginTop: 50
            }}>
                <Text style={{
                    fontSize: 30,
                    fontWeight: "bold"
                }}>Food that</Text>
                <Text style={{
                    fontSize: 30,
                    fontWeight: "bold"
                }}>meets your needs</Text>
            </View>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ marginTop: 40 }}
            >
                <View style={{
                    alignItems: "center",
                    flexDirection: "row",
                    backgroundColor: "#f9dd7a",
                    marginHorizontal: 15,
                    borderRadius: 25,
                    paddingVertical: 5,
                    paddingHorizontal: 15
                }}>
                    <Image
                        source={require('../images/5.png')}
                        style={{ height: 40, width: 40 }}
                    />
                    <Text style={{
                        fontWeight: "bold",
                        fontSize: 18,
                        paddingLeft: 10
                    }}>
                        Burgers
                    </Text>
                </View>

                <View style={{
                    alignItems: "center",
                    flexDirection: "row",
                    backgroundColor: "#e5e4eb",
                    marginHorizontal: 15,
                    borderRadius: 25,
                    paddingVertical: 5,
                    paddingHorizontal: 15
                }}>
                    <Image
                        source={require('../images/10.png')}
                        style={{ height: 40, width: 40 }}
                    />
                    <Text style={{
                        fontWeight: "bold",
                        fontSize: 18,
                        paddingLeft: 10
                    }}>
                        Burrito
                    </Text>
                </View>

                <View style={{
                    alignItems: "center",
                    flexDirection: "row",
                    backgroundColor: "#e5e4eb",
                    marginHorizontal: 15,
                    borderRadius: 25,
                    paddingVertical: 5,
                    paddingHorizontal: 15
                }}>
                    <Image
                        source={require('../images/7.png')}
                        style={{ height: 40, width: 40 }}
                    />
                    <Text style={{
                        fontWeight: "bold",
                        fontSize: 18,
                        paddingLeft: 10
                    }}>
                        Salads
                    </Text>
                </View>

                <View style={{
                    alignItems: "center",
                    flexDirection: "row",
                    backgroundColor: "#e5e4eb",
                    marginHorizontal: 15,
                    borderRadius: 25,
                    paddingVertical: 5,
                    paddingHorizontal: 15
                }}>
                    <Image
                        source={require('../images/6.png')}
                        style={{ height: 40, width: 40 }}
                    />
                    <Text style={{
                        fontWeight: "bold",
                        fontSize: 18,
                        paddingLeft: 10
                    }}>
                        Pizza
                    </Text>
                </View>
            </ScrollView>
            <View style={{
                alignItems: "center",
                marginHorizontal: 20,
                flexDirection: "row",
                marginTop: 40
            }}>
                <View style={{
                    width: "50%"
                }}>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: "bold"
                    }}>New Products</Text>
                </View>
                <View style={{
                    width: "50%",
                    alignItems: "flex-end"
                }}>
                    <Icon
                        name="dots-three-horizontal"
                        size={25}
                        color="#848385"
                    />
                </View>
            </View>
            <View style={{
                flexDirection: "row",
                marginHorizontal: 15,
                marginTop: 30,
            }}>
                <ProductList data={data} />
            </View>

            <View style={{ marginBottom: 20 }} />
        </ScrollView>
    );
};

export default Home;
