import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Font, Colors } from '../theme';

const HeaderRow = ({ style, bold, titleLeft, titleRight }) => (
	<View style={[styles.headerRow, style]}>
		<Text style={[styles.headerRowText, styles.headerRowLeft, bold && styles.headerRowBold]}>{titleLeft}</Text>
		<Text style={[styles.headerRowText, styles.headerRowRight, bold && styles.headerRowBold]}>{titleRight}</Text>
	</View>
)

export const Header = ({ order_number, received_time, staff_name, number_of_guests }) => (
	<View style={styles.header}>
		<HeaderRow style={{ paddingBottom: 10 }} bold titleLeft={order_number} titleRight={`${Math.floor(Math.abs(received_time - new Date().getTime()) / 60000)} min`} />
		<HeaderRow titleLeft={staff_name} titleRight={`${number_of_guests} guests`} />
	</View>
)

const styles = StyleSheet.create({
	header: {
		borderWidth: StyleSheet.hairlineWidth * 2,
		borderColor: Colors.borderColor,
		height: 80,
		paddingHorizontal: 20,
		justifyContent: 'center',
	},
	headerRow: {
		flexDirection: 'row',
		justifyContent: 'center',
	},
	headerRowText: {
		textAlign: 'center',
		color: Colors.defaultText,
		fontSize: Font.FontSize.MEDIUM
	},
	headerRowBold: {
		color: Colors.mainColor,
		fontWeight: '700',
		fontSize: Font.FontSize.VERY_BIG
	},
	headerRowLeft: {
		flex: 1,
		textAlign: 'left',
		alignItems: 'flex-start'
	},
	headerRowRight: {
		flex: 1,
		textAlign: 'right',
		alignItems: 'flex-end'
	}
})