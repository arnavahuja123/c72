import React from 'react';
import { Text, View, Image, StyleSheet, Header, TextInput } from 'react-native';
import {createAppContaiener} from 'react-navigation'
import {createBottomTabNavigation} from 'react-navigation-tabs'
import ReadStoryScreen from './screens/ReadStoryScreen'
import WriteStoryScreen from './Screens/WriteStoryScreen'
import keyAvoidingView from 'reactToastAndroid-native'

export default class TransactionScreen extends React.Component {
    render(){
        return(
            <KeyAvoidingView styles={styles.comtainer}>
                 window.alert"Story is submited"
                <Text>Read Story</Text>
                <Header>Story Hub</Header>
                <KeyAvoidingView style={styles.input<KeyAvoidingView}>
                 
          <TextInput
          style={styles.inputBox}
        
         
          
          />
          
             
          </KeyAvoidingView>
          <View style={styles.inputView}>
           <TextInput
          style={styles.inputBox}
        
          
          
          />
            </KeyAvoidingView>

        )
    }
}
    