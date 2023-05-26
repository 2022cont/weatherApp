import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstorm: {
        iconName: 'weather-lightning',
        gradient: ['#141E30', '#243B55']
    },
    Drizzle: {
        iconName: 'weather-rainy',
        gradient: ['#3a7bd5', '#3a6073']
    },
    Rain: {
        iconName: 'weather-pouring',
        gradient: ['#000046', '#1CB5E0']
    },
    Snow: {
        iconName: 'snowflake',
        gradient: ['#83a4d4', '#b6fbff']
    },
    Dust: {
        iconName: 'weather-windy-variant',
        gradient: ['#B79891', '#94716B']
    },
    Smoke: {
        iconName: 'weather-windy',
        gradient: ['#56CCF2', '#2F80ED']
    },
    Mist: {
        iconName: 'weather-fog',
        gradient: ['#606c88', '#3f4c6b']
    },
    Haze: {
        iconName: 'weather-hazy',
        gradient: ['#3E5151', '#DECBA4']
    },
    Clear: {
        iconName: 'weather-sunny',
        gradient: ['#56CCF2', '#2F80ED']
    },
    Clouds: {
        iconName: 'weather-cloudy',
        gradient: ["#757F9A", "#D7DDE8"],
        title: "Сьогодні похмура погода",
        subtitle: "Можливо парасолька стане в нагоді",
    },

};

export default function Weather({ temp, condition }) {

    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.halhContainer}>
                <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={96} color="white" />
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={{...styles.halhContainer, ...styles.textContainer}}>

                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>

    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Dust", "Smoke", "Mist", "Haze", "Fog", "Clear", "Clouds"]).isRequired,
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    halhContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: 'flex-start',
    },
    temp: {
        color: 'white',
        fontSize: 42,
    },
    title: {
        color: 'white',
        fontSize: 24,
        fontWeight: 300,
        marginBottom: 10,
    },
    subtitle: {
        color: 'white',
        fontWeight: 600,
        fontSize: 20,
    },
});