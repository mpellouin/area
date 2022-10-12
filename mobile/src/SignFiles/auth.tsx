import { WebView } from "react-native-webview";
import React, { useState, useEffect } from "react";
import { View, Linking, Pressable, StyleSheet, Button, SafeAreaView } from "react-native";
import {Colors} from '../../Style';

const Auth = () => {
    const [uri, setURL] = useState("")

    useEffect(() => {

        Linking.addEventListener("url", (url) => handleOpenUrl(url.url));
        Linking.getInitialURL().then((url: any) => {
        if (url) {
            console.log(url);
        }
        });
        return () => {
        Linking.removeAllListeners("url");
        };
    }, []);

    const handleOpenUrl = (url: string) => {
        console.log(url)
    }

    const openURL = (url: string) => {
        setURL(url)
    }

    return (
        <>
        {uri != "" ? (
            <SafeAreaView style={{ flex: 1 }}>
            <WebView
                originWhitelist={['*']}
                source={{ uri }}
            />
            </SafeAreaView>
        ) : (
            <View>
                <Button
                    title="google"
                    onPress={() => openURL("http://51.178.29.26:8080/auth/google")}
                />
            </View>
        )}
    </>
    )
}
export default Auth;