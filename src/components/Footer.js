import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Colors } from '../theme';

export const Footer = ({ title, onPress }) => (
	<TouchableOpacity
		onPress={onPress}
		style={styles.btnFooter}
	>
		<Text style={styles.textFooter} numberOfLines={1}>{title}</Text>
	</TouchableOpacity>
)

const styles = StyleSheet.create({
	btnFooter: {
		height: 40,
		backgroundColor: Colors.mainColor,
		justifyContent: 'center'
	},
	textFooter: {
		color: 'white',
		textAlign: 'center'
	}
})