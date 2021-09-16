import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import LinearGradient from 'react-native-linear-gradient';
import { Fontisto } from '@expo/vector-icons';


function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
function SettingsScreen1() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings1!</Text>
    </View>
  );
}function SettingsScreen2() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings2!</Text>
    </View>
  );
}
function SettingsScreen3() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings3!</Text>
    </View>
  );
}
const Tab = createBottomTabNavigator();
const logo = require('./assets/logo/242205494_4354687317943702_3490003505236085121_n.png');

function MyTabs() {
  return (
    <Tab.Navigator
    
    // style={style.navi}
    screenOptions={({ route }) => ({
      tabBarStyle: styles.tab,
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Đăng bài') {
          return (
            <MaterialIcons name="post-add" size={30} color={focused ? 'rgb(66, 230, 149)' : 'white'} />
          )
        } else if (route.name === 'Hoạt động') {
          return <Fontisto name="checkbox-active" size={24} color={focused ? 'rgb(66, 230, 149)' : 'white'} />
        }else if (route.name === 'Trang chủ') {
          return <View style={styles.containerLogo}>
            <Image
          style={styles.Logo}
          source={require('./assets/logo/242205494_4354687317943702_3490003505236085121_n.png')}
        />
          </View>
          
        }else if (route.name === 'Tin tức') {
          return <FontAwesome name="newspaper-o" size={24}color={focused ? 'rgb(66, 230, 149)' : 'white'} />
        }else if (route.name === 'Thông tin') {
          return <MaterialCommunityIcons name="human-child" size={24} color={focused ? 'rgb(66, 230, 149)' : 'white'} />
        }
      },
      tabBarActiveTintColor: 'rgb(66, 230, 149)',
      tabBarInactiveTintColor: 'white',
    })}
    >
      <Tab.Screen name="Đăng bài" component={HomeScreen} />
      <Tab.Screen name="Hoạt động" component={SettingsScreen} />
      <Tab.Screen name="Trang chủ" component={SettingsScreen1} />
      <Tab.Screen name="Tin tức" component={SettingsScreen2} />
      <Tab.Screen name="Thông tin" component={SettingsScreen3} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
        <MyTabs/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tab:{
    height: 60,
    backgroundColor:'#143444'
  }
  ,containerLogo:{
    padding: 3,
    backgroundColor:'#143444',
    borderRadius: 50
    
  },
  Logo:{
    height : 80,
    width: 80,
    marginBottom: 30
  }
})