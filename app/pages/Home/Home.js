import React from 'react';
import {View,Text} from 'react-native';
import styles from './styles';
import VERSION from '../../constants/version';

class Home extends React.Component{
  static route = {
        navigationBar: {
            title: 'Home',
            backgroundColor: '#05A5D1',
            tintColor: '#fff',
        }
    }
	render(){
		return(
			<View style={styles.container}>
				<Text style={styles.homeText}>Welcome to the React Native Starter with MOBX and Ex-navigation version is </Text>
				<Text style={styles.version}> {VERSION}</Text>
			</View>
			);
	}
}
export default Home;
