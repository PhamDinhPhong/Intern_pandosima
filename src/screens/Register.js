import { SafeAreaView, View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import { useNavigation } from '@react-navigation/native';
import AppTextInput from "../components/AppTextInput";

const RegisterScreen = () => {
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
                        Create account
                    </Text>
                    <Text
                        style={{
                            fontWeight: "bold",
                            fontSize: FontSize.large,
                            maxWidth: "60%",
                            textAlign: "center"
                        }}
                    >
                        Create an account so you can explore all the existing jobs
                    </Text>
                </View>
                <View
                    style={{
                        marginVertical: Spacing * 3,
                    }}
                >
                    <AppTextInput placeholder={"Email"} />
                    <AppTextInput placeholder={"Password"} secureTextEntry={true} />
                    <AppTextInput placeholder={"Confirm Password"} secureTextEntry={true} />
                </View>
                <View>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Home')}
                        style={{
                            padding: Spacing * 2,
                            backgroundColor: Colors.primary,
                            marginVertical: Spacing,
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
                            Register
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Login')}
                        style={{
                            padding: Spacing,
                            marginVertical: Spacing,
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
                            Already have an account
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default RegisterScreen;