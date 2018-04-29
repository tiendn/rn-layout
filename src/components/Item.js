import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors, Font } from '../theme';

export const Item = ({ quantity, name, option, checked, noBorderBottom }) => (
	<View style={[styles.itemContainer, noBorderBottom && styles.noBorderBottomWidth]}>
		<View style={styles.itemContentWrapper}>
			<Text style={styles.itemContent} numberOfLines={3}>{quantity} x {name}</Text>
			<Icon
				size={30}
				style={styles.itemChecked}
				color={checked ? Colors.active : Colors.disable}
				name="md-checkmark"
			/>
		</View>
		{option && <Text style={styles.option}>{option}</Text>}
	</View>
);

const styles = StyleSheet.create({
	itemContainer: {
		borderBottomWidth: StyleSheet.hairlineWidth * 2,
		borderColor: Colors.borderColor,
		paddingVertical: 10,
	},
	itemContentWrapper: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	itemContent: {
		flex: 5,
		color: Colors.mainColor,
		fontSize: Font.FontSize.BIG
	},
	itemChecked: {
		flex: 1,
		textAlign: 'right'
	},
	option: {
		color: 'red',
		fontSize: Font.FontSize.MEDIUM
	},
	noBorderBottomWidth: {
		borderBottomWidth: 0
	}
})