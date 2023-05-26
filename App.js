import { Alert } from 'react-native';
import * as Location from 'expo-location';
import React from 'react';
import axios from 'axios';

import Weather from './Weather';
import Loading from './Loading';

const API_KEY = '86ff8e669e0c0a365eeb739f2d218069';

export default class extends React.Component {
  state = {
    isLoading: true,
  };

  getWeather = async (latitude, longitude) => {
    try {
      const { data: { weather, main: { temp }, } } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);

      this.setState({
        temp: temp,
        condition: weather[0].main,
        isLoading: false,
      });

    } catch (error) {
      console.log(error.response.data);

    };
  }
  getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();

      const { coords: { latitude, longitude, } } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);


    } catch (error) {
      Alert.alert("Can not return location", "Problem")
    }

  };
  componentDidMount() {
    this.getLocation();
  };

  render() {
    const { isLoading, temp, condition } = this.state;
    return (
      isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />
    );
  };
}

