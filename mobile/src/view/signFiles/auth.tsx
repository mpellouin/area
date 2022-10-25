import { WebView } from "react-native-webview";
import React, { useState, useEffect } from "react";
import { View, Linking, Button, Alert} from "react-native";
import { URL, URLSearchParams } from 'react-native-url-polyfill';
import {Colors} from '../../../Style';
import { useNavigation } from "@react-navigation/native";

const Auth = () => {
    const navigation = useNavigation()

    Linking.addEventListener('url', handleUrl)

    async function handleUrl(event: any) {
        try {
            const accessToken = await getSearchParamFromURL(event.url, "token")
            if(accessToken != null) {
                navigation.navigate('User')
                Linking.removeAllListeners('url')
            } else {
                Alert.alert("An error occured while signin you")
            }
        } catch (err) {
            throw("An error occured: " + err)
        }
    }

    const openBrowser = (url: string) => {
        Linking.openURL(url)
    };

    const getSearchParamFromURL = (url: string, param: string) => {
        const include = url.includes(param)
        if (!include) return null
        const params = url.split(/([?,=])/)
        const index = params.indexOf(param)
        const value = params[index + 2]
        return value
    }

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