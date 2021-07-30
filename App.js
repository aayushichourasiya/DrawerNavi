import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native'

//Navigation
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer'

//Screens
const Home = ({navigation}) =>{
  return(
    <View style={styles.container}>
      <Text style={styles.txt}>Home Screen</Text>
      <Button
        title='Open Drawer'
        onPress={()=>navigation.openDrawer()}
      />
    </View>
  )
}

const Notification = ()=>{
  return(
    <View style={styles.container}>
      <Text style={styles.txt}>Notification Screen</Text>
    </View>
  )
}

const Draw = createDrawerNavigator()

export default class App extends Component{
  render(){
    return(
      <NavigationContainer>
        <Draw.Navigator>
          <Draw.Screen
            name='Home'
            component={Home}
          />
          <Draw.Screen
            name='Notification'
            component={Notification}
          />
        </Draw.Navigator>
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txt: {
    fontSize: 20,
    textTransform: 'uppercase',
    fontWeight: 'bold'
  }
})