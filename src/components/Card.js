import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Header } from './Header';
import { Body } from './Body';
import { Footer } from './Footer';

const { width, height } = Dimensions.get("screen");

// export class Card extends React.PureComponent {
// 	onLayout(e) {
// 		console.log(e.nativeEvent.layout);
// 	}
// 	render() {
// 		const { data } = this.props;
// 		return (
// 			<View style={[styles.cardContainer, firstLeft && styles.cardFirst, lastRight && styles.cardLast]} onLayout={(e) => this.onLayout(e)}>
// 				<Header number_of_guests={data.number_of_guests} order_number={data.order_number} staff_name={data.staff_name} received_time={data.received_time} />
// 				<Body data={data.menu} />
// 				<Footer title="Bump" onPress={() => alert("Press")} />
// 			</View>
// 		);
// 	}
// }


export const Card = ({ data, firstLeft, lastRight }) => (
	<View style={[styles.cardContainer, firstLeft && styles.cardFirst, lastRight && styles.cardLast]}>
		<Header number_of_guests={data.number_of_guests} order_number={data.order_number} staff_name={data.staff_name} received_time={data.received_time} />
		<Body data={data.menu} />
		<Footer title="Bump" onPress={() => alert("Press")} />
	</View>
);

const styles = StyleSheet.create({
	cardContainer: {
		minHeight: (height - 20 - 50 - 30) * 0.5, // 20: status height, 50: tabbar height, 30: space vertical between card.
		width: (width - 100) / 4, // 100: space horizontal between card, 4: number of card in a row
		marginHorizontal: 10,
		marginBottom: 10
	},
	cardFirst: {
		marginLeft: 20
	},
	cardLast: {
		marginRight: 20
	}
});
