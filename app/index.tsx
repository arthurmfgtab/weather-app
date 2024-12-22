import { useState } from "react";
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import { colors } from "@/constants";
import { useWeather } from "@/hooks/useWeather";
import styles, { ICON_SIZE } from "./styles";

export default function Index() {
  const [location, setLocation] = useState("");

  const query = useWeather(location);

  function onPress() {
    query.refetch();
  }

  function getIconUrl(icon: string) {
    return `https:${icon}`;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weather App</Text>

      <View style={styles.inputContainer}>
        <TextInput
          value={location}
          onChangeText={setLocation}
          placeholder="Enter location"
          style={styles.input}
        />
        <TouchableOpacity
          activeOpacity={0.75}
          style={styles.iconContainer}
          onPress={onPress}
        >
          <Ionicons name="search" size={ICON_SIZE} color={colors.grey} />
        </TouchableOpacity>
      </View>

      {query.data && (
        <View style={styles.weatherContainer}>
          <View style={styles.locationInfo}>
            <Text style={styles.cityName}>{query.data.location.name}</Text>
            <Text style={styles.countryName}>
              {query.data.location.country}
            </Text>
          </View>

          <View style={styles.weatherInfo}>
            <Image
              source={{
                uri: getIconUrl(query.data.current.condition.icon),
              }}
              style={styles.weatherIcon}
            />
            <Text style={styles.weatherCondition}>
              {query.data.current.condition.text}
            </Text>
            <Text style={styles.temperature}>
              {query.data.current.temp_c}°C
            </Text>
          </View>

          <View style={styles.additionalInfo}>
            <View style={styles.infoItem}>
              <Ionicons
                name="water-outline"
                size={ICON_SIZE}
                color={colors.grey}
              />
              <Text style={styles.infoText}>
                {query.data.current.humidity}%
              </Text>
            </View>
            <View style={styles.infoItem}>
              <Ionicons
                name="speedometer-outline"
                size={ICON_SIZE}
                color={colors.grey}
              />
              <Text style={styles.infoText}>
                {query.data.current.pressure_mb} mb
              </Text>
            </View>
            <View style={styles.infoItem}>
              <Feather name="wind" size={ICON_SIZE} color={colors.grey} />
              <Text style={styles.infoText}>
                {query.data.current.wind_kph} km/h
              </Text>
            </View>
          </View>

          <View style={styles.forecastContainer}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={query.data.forecast.forecastday}
              horizontal
              renderItem={({ item }) => (
                <View key={item.date} style={styles.forecastItem}>
                  <Text style={styles.forecastLabel}>{item.date}</Text>
                  <Image
                    source={{ uri: getIconUrl(item.day.condition.icon) }}
                    style={styles.forecastIcon}
                  />
                  <Text style={styles.forecastLabel}>
                    {item.day.condition.text}
                  </Text>
                  <Text style={styles.forecastLabel}>
                    {item.day.avgtemp_c}°C
                  </Text>
                </View>
              )}
            />
          </View>
        </View>
      )}
    </View>
  );
}
