import { WebView } from "react-native-webview";
import React, { useState, useEffect } from "react";
import { View, Linking, Pressable, StyleSheet, Button, SafeAreaView } from "react-native";
import {Colors} from '../../../Style';

const Auth = () => {
    Linking.addEventListener('url', handleUrl)

    function handleUrl(event: any) {
        console.log(event)
        Linking.removeAllListeners('url')
    }

    const openBrowser = (url: string) => {
        Linking.openURL(url)
      };

    return (
        <View>
            <Button
                title="google"
                onPress={() =>  openBrowser("http://area.eu-west-3.elasticbeanstalk.com/auth/google")}
            />
        </View>
    )
}

export default Auth;