import { colors } from "@/constants";
import { StyleSheet } from "react-native";

export const ICON_SIZE = 24;

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: colors.white,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 32,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: colors.lightGrey,
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  iconContainer: {
    marginLeft: 12,
    width: 40,
    height: 40,
    backgroundColor: colors.light,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  weatherContainer: {
    width: "100%",
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 24,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  locationInfo: {
    alignItems: "center",
  },
  cityName: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
  },
  countryName: {
    fontSize: 18,
    color: colors.grey,
  },
  weatherInfo: {
    alignItems: "center",
    marginBottom: 10,
  },
  weatherIcon: {
    width: 100,
    height: 100,
  },
  weatherCondition: {
    fontSize: 24,
    color: colors.darkGrey,
    marginBottom: 8,
  },
  temperature: {
    fontSize: 48,
    fontWeight: "bold",
    color: colors.darkGrey,
  },
  additionalInfo: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopWidth: 1,
    borderTopColor: colors.lightGrey,
    paddingTop: 24,
  },
  infoItem: {
    alignItems: "center",
  },
  infoText: {
    marginTop: 8,
    fontSize: 16,
    color: colors.grey,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.black,
    marginBottom: 16,
  },

  forecastContainer: {
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: colors.lightGrey,
    paddingTop: 24,
  },
  forecastItem: {
    alignItems: "center",
  },
  forecastLabel: {
    color: colors.grey,
    fontSize: 12,
  },
  forecastIcon: {
    width: 120,
    height: 120,
  },
});
