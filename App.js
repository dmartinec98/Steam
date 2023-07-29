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
import OwnedGamesScreen from "./screens/OwnedGamesScreen";
import FriendsListScreen from "./screens/FriendsListScreen";
import AddFriendScreen from "./screens/AddFriendScreen";
import ProfileScreen from "./screens/ProfileScreen";
import EditProfileScreen from "./screens/EditProfileScreen";
import OwnedItemsScreen from "./screens/OwnedItemsScreen";

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
        <Stack.Screen name="Wishlist" component={WishlistScreen}></Stack.Screen>
        <Stack.Screen name="Wallet" component={WalletScreen}></Stack.Screen>
        <Stack.Screen name="Game" component={GameScreen}></Stack.Screen>
        <Stack.Screen
          name="OwnedGames"
          component={OwnedGamesScreen}
        ></Stack.Screen>
        <Stack.Screen
          name="OwnedItems"
          component={OwnedItemsScreen}
        ></Stack.Screen>
        <Stack.Screen
          name="AddFriend"
          component={AddFriendScreen}
        ></Stack.Screen>
        <Stack.Screen
          name="Friends"
          component={FriendsListScreen}
        ></Stack.Screen>
        <Stack.Screen name="Profile" component={ProfileScreen}></Stack.Screen>
        <Stack.Screen
          name="EditProfile"
          component={EditProfileScreen}
        ></Stack.Screen>
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
          name="News"
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
