import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Item } from './Item';
import { Colors } from '../theme';

export const Body = ({ data }) => (
	<View style={styles.bodyStyle}>
		{
			data.map((item, index) => (
				<Item {...item} key={item.id} noBorderBottom={index === data.length - 1} />
			))
		}
	</View>
)

const styles = StyleSheet.create({
	bodyStyle: {
		flex: 1,
		overflow: "hidden",
		paddingHorizontal: 20,
		borderLeftWidth: StyleSheet.hairlineWidth * 2,
		borderRightWidth: StyleSheet.hairlineWidth * 2,
		borderColor: Colors.borderColor
	}
})