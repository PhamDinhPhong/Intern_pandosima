import { SafeAreaView, View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import { useNavigation } from '@react-navigation/native';
import AppTextInput from "../components/AppTextInput";

const LoginScreen = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <View
                style={{
                    padding: Spacing * 2,
                }}
            >
                <View
                    style={{
                        alignItems: "center",
                    }}
                >
                    <Text
                        style={{
                            fontSize: FontSize.xLarge,
                            color: Colors.primary,
                            fontWeight: "bold",
                            marginVertical: Spacing * 3,

                        }}
                    >
                        Login Here
                    </Text>
                    <Text
                        style={{
                            fontWeight: "bold",
                            fontSize: FontSize.large,
                            maxWidth: "60%",
                            textAlign: "center"
                        }}
                    >
                        Welcome back you've been missed
                    </Text>
                </View>
                <View
                    style={{
                        marginVertical: Spacing * 3,
                    }}
                >
                    <AppTextInput placeholder={"Email"} />
                    <AppTextInput placeholder={"Password"} secureTextEntry={true} />
                </View>
                <View>
                    <Text
                        style={{
                            fontWeight: "bold",
                            fontSize: FontSize.small,
                            color: Colors.primary,
                            alignSelf: 'flex-end'
                        }}
                    >
                        Forgot your password
                    </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Home')}
                        style={{
                            padding: Spacing * 2,
                            backgroundColor: Colors.primary,
                            marginVertical: Spacing * 3,
                            borderRadius: Spacing,
                        }}
                    >
                        <Text
                            style={{
                                fontWeight: 'bold',
                                color: Colors.onPrimary,
                                textAlign: 'center',
                                fontSize: FontSize.large,
                                shadowColor: Colors.primary,
                                shadowOffset: {
                                    width: 0,
                                    height: Spacing,
                                },
                                shadowOpacity: 0.3,
                                shadowRadius: Spacing,
                            }}
                        >
                            Login
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Register')}
                        style={{
                            padding: Spacing,
                        }}
                    >
                        <Text
                            style={{
                                fontWeight: 'bold',
                                color: Colors.text,
                                textAlign: 'center',
                                fontSize: FontSize.small,
                            }}
                        >
                            Create a new account
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default LoginScreen;