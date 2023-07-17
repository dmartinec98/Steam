import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import WishlistScreen from "./screens/WishlistScreen";
import WalletScreen from "./screens/WalletScreen";
import HeaderComponent from "./components/HomeHeaderComponent";
import {
  BellIcon,
  EllipsisVerticalIcon,
  ShieldCheckIcon,
  Bars3Icon,
  NewspaperIcon,
  HomeIcon,
  ChatBubbleBottomCenterIcon,
} from "react-native-heroicons/outline";
import SettingsScreen from "./screens/SettingsScreen";
import NotificationScreen from "./screens/NotificationScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
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
          component={NotificationScreen}
          options={{
            tabBarIcon: () => <BellIcon color="#000000" size={20} />,
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: () => (
              <ChatBubbleBottomCenterIcon color="#000000" size={20} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
