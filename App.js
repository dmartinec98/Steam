import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import WishlistScreen from "./screens/WishlistScreen";
import WalletScreen from "./screens/WalletScreen";
import HeaderComponent from "./components/HeaderComponent";
import {
  BellIcon,
  EllipsisVerticalIcon,
  ShieldCheckIcon,
  Bars3Icon,
  NewspaperIcon,
  HomeIcon,
} from "react-native-heroicons/outline";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <HeaderComponent />
      <Tab.Navigator
        screenOptions={{ headerShown: false, tabBarShowLabel: false }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: () => <HomeIcon color="#000000" size={20} />,
          }}
        />
        <Tab.Screen
          name="Wishlist"
          component={WishlistScreen}
          options={{
            tabBarIcon: () => <NewspaperIcon color="#000000" size={20} />,
          }}
        />
        <Tab.Screen
          name="Wallet"
          component={WalletScreen}
          options={{
            tabBarIcon: () => <ShieldCheckIcon color="#000000" size={20} />,
          }}
        />
        <Tab.Screen
          name="Wallet2"
          component={WalletScreen}
          options={{
            tabBarIcon: () => <BellIcon color="#000000" size={20} />,
          }}
        />
        <Tab.Screen
          name="Wallet3"
          component={WalletScreen}
          options={{
            tabBarIcon: () => <Bars3Icon color="#000000" size={20} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
