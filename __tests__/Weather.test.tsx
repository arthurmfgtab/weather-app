import { render, screen } from "@testing-library/react-native";
import WeatherScreen from "@/app/index";
import "@testing-library/jest-native/";

jest.mock("@expo/vector-icons/Ionicons", () => {
  return {
    __esModule: true,
    default: "Ionicons",
  };
});

jest.mock("@expo/vector-icons/Feather", () => {
  return {
    __esModule: true,
    default: "Feather",
  };
});

jest.mock("@tanstack/react-query", () => {
  const originalModule = jest.requireActual("@tanstack/react-query");
  return {
    ...originalModule,
    useQuery: jest.fn(() => ({
      data: {
        location: {
          name: "Olivais",
          country: "Portugal",
        },
        current: {
          temp_c: 20,
          condition: {
            text: "Sunny",
            icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
          },
          humidity: 50,
          pressure_mb: 1012,
          wind_kph: 15,
        },
        forecast: {
          forecastday: [
            {
              date: "2023-10-01",
              day: {
                avgtemp_c: 18,
                condition: {
                  text: "Partly cloudy",
                  icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
                },
              },
            },
          ],
        },
      },
      isLoading: false,
      error: null,
      refetch: jest.fn(),
    })),
  };
});

describe("<HomeScreen />", () => {
  test("Text renders correctly on HomeScreen", () => {
    render(<WeatherScreen />);

    expect(screen.getByText("Olivais")).toBeDefined();
  });
});
