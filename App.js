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
import ChatScreen from "./screens/ChatScreen";
import NewsScreen from "./screens/NewsScreen";
import GameInfo from "./components/GameInfo";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  const HomeStack = () => {
    return (
      <Stack.Navigator
        screenOptions={{ headerShown: false, tabBarShowLabel: false }}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen}></Stack.Screen>
        <Stack.Screen name="Settings" component={SettingsScreen}></Stack.Screen>
        <Stack.Screen name="Wallet" component={WalletScreen}></Stack.Screen>
        <Stack.Screen name="Game" component={GameScreen}></Stack.Screen>
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{ headerShown: false, tabBarShowLabel: false }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarIcon: () => <HomeIcon color="#000000" size={20} />,
          }}
        />
        <Tab.Screen
          name="Wishlist"
          component={NewsScreen}
          options={{
            tabBarIcon: () => <NewspaperIcon color="#000000" size={20} />,
          }}
        />
        <Tab.Screen
          name="Notification"
          component={NotificationScreen}
          options={{
            tabBarIcon: () => <BellIcon color="#000000" size={20} />,
          }}
        />
        <Tab.Screen
          name="Chat"
          component={ChatScreen}
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
