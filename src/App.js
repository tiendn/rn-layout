/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Animated,
    // SegmentedControlIOS,
    Dimensions,
    StatusBar,
    TouchableOpacity,
    FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Card } from './components';
import { Colors, Font } from './theme';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
        'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};

const { height, width } = Dimensions.get("screen");

const data = [
    {
        order_number: 'SP-21',
        received_time: 1524989637934,
        staff_name: "John Smith",
        number_of_guests: 3,
        menu: [
            {
                id: 'SP-21.1',
                quantity: 3,
                name: "Yogust",
                checked: true,
                option: "No Sugar"
            }
        ]
    },
    {
        order_number: 'SP-22',
        received_time: 1524989637934,
        staff_name: "John Smith",
        number_of_guests: 3,
        menu: [
            {
                id: 'SP-22.1',
                quantity: 2,
                name: "Yogus Potato Mango asdkha",
                option: "Large"
            }
        ]
    },
    {
        order_number: 'SP-1',
        received_time: 1524989637934,
        staff_name: "John Smith",
        number_of_guests: 3,
        menu: [
            {
                id: 'SP-1.1',
                quantity: 3,
                name: "Yogust",
                checked: true,
                option: "No Sugar"
            }
        ]
    },
    {
        order_number: 'SP-2',
        received_time: 1524989637934,
        staff_name: "John Smith",
        number_of_guests: 3,
        menu: [
            {
                id: 'SP-2.1',
                quantity: 2,
                name: "Yogus Potato Mango asdkha",
                option: "Large"
            }
        ]
    },
    {
        order_number: 'SP-3',
        received_time: 1524989637934,
        staff_name: "John Smith",
        number_of_guests: 3,
        menu: [
            {
                id: 'SP-3.1',
                quantity: 3,
                name: "Yogust",
                checked: true,
                option: "No Sugar"
            }
        ]
    },
    {
        order_number: 'SP-4',
        received_time: 1524989637934,
        staff_name: "John Smith",
        number_of_guests: 3,
        menu: [
            {
                id: 'SP-4.1',
                quantity: 2,
                name: "Yogus Potato Mango",
                option: "Large"
            }
        ]
    },
    {
        order_number: 'SP-5',
        received_time: 1524989637934,
        staff_name: "John Smith",
        number_of_guests: 3,
        menu: [
            {
                id: 'SP-5.1',
                quantity: 3,
                name: "Yogust",
                checked: true,
                option: "No Sugar"
            }
        ]
    },
    {
        order_number: 'SP-6',
        received_time: 1524989637934,
        staff_name: "John Smith",
        number_of_guests: 3,
        menu: [
            {
                id: 'SP-6.1',
                quantity: 2,
                name: "Yogus Potato Mango asdkha",
                option: "Large"
            }
        ]
    },
    {
        order_number: 'SP-7',
        received_time: 1524989637934,
        staff_name: "John Smith",
        number_of_guests: 3,
        menu: [
            {
                id: 'SP-7.1',
                quantity: 3,
                name: "Yogust",
                checked: true,
                option: "No Sugar"
            }
        ]
    },
    {
        order_number: 'SP-8',
        received_time: 1524989637934,
        staff_name: "John Smith",
        number_of_guests: 3,
        menu: [
            {
                id: 'SP-8.1',
                quantity: 2,
                name: "Yogus Potato Mango asdkha",
                option: "Large"
            }
        ]
    },
    {
        order_number: 'SP-9',
        received_time: 1524989637934,
        staff_name: "John Smith",
        number_of_guests: 3,
        menu: [
            {
                id: 'SP-9.1',
                quantity: 3,
                name: "Yogust",
                checked: true,
                option: "No Sugar"
            }
        ]
    },
    {
        order_number: 'SP-10',
        received_time: 1524989637934,
        staff_name: "John Smith",
        number_of_guests: 3,
        menu: [
            {
                id: 'SP-2.1',
                quantity: 2,
                name: "Yogus Potato Mango asdkha",
                option: "Large"
            }
        ]
    },
    {
        order_number: 'SP-23',
        received_time: 1524989637934,
        staff_name: "John Smith",
        number_of_guests: 3,
        menu: [
            {
                id: 'SP-23.1',
                quantity: 3,
                name: "Yogust"
            },
            {
                id: 'SP-23.2',
                quantity: 3,
                name: "Yogust"
            },
            {
                id: 'SP-23.3',
                quantity: 3,
                name: "Yogust"
            },
            {
                id: 'SP-23.4',
                quantity: 3,
                name: "Yogust"
            },
            {
                id: 'SP-23.5',
                quantity: 3,
                name: "Yogust"
            },
            {
                id: 'SP-23.6',
                quantity: 3,
                name: "Yogust"
            },
            {
                id: 'SP-23.7',
                quantity: 3,
                name: "Yogust"
            },
            {
                id: 'SP-23.8',
                quantity: 3,
                name: "Yogust"
            },
            {
                id: 'SP-23.9',
                quantity: 3,
                name: "Yogust"
            },
            {
                id: 'SP-23.10',
                quantity: 3,
                name: "Yogust"
            },
            {
                id: 'SP-23.11',
                quantity: 3,
                name: "Yogust"
            },
            {
                id: 'SP-23.12',
                quantity: 3,
                name: "Yogust"
            },
            {
                id: 'SP-23.13',
                quantity: 3,
                name: "Yogust"
            },
            {
                id: 'SP-23.14',
                quantity: 3,
                name: "Yogust"
            }
        ]
    },
    {
        order_number: 'SP-24',
        received_time: 1524989637934,
        staff_name: "John Smith",
        number_of_guests: 3,
        menu: [
            {
                id: 'SP-24.1',
                quantity: 3,
                name: "Yogust",
                checked: true,
                option: "No Sugar"
            }
        ]
    },
    {
        order_number: 'SP-25',
        received_time: 1524989637934,
        staff_name: "John Smith",
        number_of_guests: 3,
        menu: [
            {
                id: 'SP-25.1',
                quantity: 2,
                name: "Yogus Potato Mango asdkha",
                option: "Large"
            }
        ]
    },
    {
        order_number: 'SP-27',
        received_time: 1524989637934,
        staff_name: "John Smith",
        number_of_guests: 3,
        menu: [
            {
                id: 'SP-27.1',
                quantity: 2,
                name: "Yogus Potato Mango asdkha",
                option: "Large"
            }
        ]
    },
    {
        order_number: 'SP-28',
        received_time: 1524989637934,
        staff_name: "John Smith",
        number_of_guests: 3,
        menu: [
            {
                id: 'SP-28.1',
                quantity: 2,
                name: "Yogus Potato Mango asdkha",
                option: "Large"
            }
        ]
    },
    {
        order_number: 'SP-26',
        received_time: 1524989637934,
        staff_name: "John Smith",
        number_of_guests: 3,
        menu: [
            {
                id: 'SP-26.1',
                quantity: 3,
                name: "Yogust"
            },
            {
                id: 'SP-26.2',
                quantity: 3,
                name: "Yogust"
            },
            {
                id: 'SP-26.3',
                quantity: 3,
                name: "Yogust"
            },
            {
                id: 'SP-26.4',
                quantity: 3,
                name: "Yogust"
            },
            {
                id: 'SP-26.5',
                quantity: 3,
                name: "Yogust"
            },
            {
                id: 'SP-26.6',
                quantity: 3,
                name: "Yogust"
            },
            {
                id: 'SP-26.7',
                quantity: 3,
                name: "Yogust"
            },
            {
                id: 'SP-26.8',
                quantity: 3,
                name: "Yogust"
            },
            {
                id: 'SP-26.9',
                quantity: 3,
                name: "Yogust"
            },
            {
                id: 'SP-26.10',
                quantity: 3,
                name: "Yogust"
            },
            {
                id: 'SP-26.11',
                quantity: 3,
                name: "Yogust"
            },
            {
                id: 'SP-26.12',
                quantity: 3,
                name: "Yogust"
            },
            {
                id: 'SP-26.13',
                quantity: 3,
                name: "Yogust"
            },
            {
                id: 'SP-26.14',
                quantity: 3,
                name: "Yogust"
            }
        ]
    }
]

export default class App extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            tabIndex: 1,
            pageIndex: 0,
            translateX: new Animated.Value(0),
            // pageIndex: 
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.pageIndex !== prevState.pageIndex)
            this.setAnimation();
    }

    setAnimation() {
        Animated.spring(
            this.state.translateX,
            {
                toValue: width * this.state.pageIndex,
                duration: 500,
                useNativeDriver: true
            }
        ).start();
    }

    onHeaderChange(tabIndex) {
        this.setState({ tabIndex });
    }

    onNext() {
        this.setState((prevState) => ({
            pageIndex: prevState.pageIndex + 1
        }));
    }

    onPrev() {
        this.setState((prevState) => ({
            pageIndex: prevState.pageIndex - 1
        }));
    }

    render() {
        return (
            <View style={styles.container}>
                <HeaderTab
                    tabIndex={this.state.tabIndex}
                    pageIndex={this.state.pageIndex}
                    onChange={(index) => this.onHeaderChange(index)}
                    onNext={() => this.onNext()}
                    onPrev={() => this.onPrev()}
                    numberOfCompletedOrders={14}
                    numberOfCurrentOrders={data.length}
                />
                <Animated.View style={[styles.listCards, {
                    transform: [{
                        translateX: this.state.translateX.interpolate({
                            inputRange: [0, 1],
                            outputRange: [1, 0]
                        }),
                    }]
                }]}>
                    {data.map((item, index) => <Card
                        key={item.order_number}
                        data={item}
                        firstLeft={index % 8 <= 1}
                        lastRight={index % 8 >= 7}
                    />)}
                </Animated.View>
            </View>
        );
    }
}

const HeaderButton = ({ isLeft, iconName, title, onPress }) => (
    <TouchableOpacity onPress={onPress} style={[styles.headerBtn, isLeft ? styles.headerLeftBtn : styles.headerRightBtn]}>
        <Icon
            name={iconName}
            color={Colors.defaultText}
            size={25}
        />
        <Text style={styles.headerBtnTitle}>{title}</Text>
    </TouchableOpacity>
)

const SegmentControl = ({ titleSegmentControl, onPress, active, radiusLeft, radiusRight }) => (
    <TouchableOpacity
        style={[styles.segmentControl, active && styles.segmentControlActive, radiusLeft && styles.radiusLeft, radiusRight && styles.radiusRight]}
        onPress={onPress}
    >
        <Text style={[styles.titleSegmentControl, active && styles.titleSegmentControlActive]} numberOfLines={1}>{titleSegmentControl} </Text>
    </TouchableOpacity>
)

const HeaderTab = ({ numberOfCompletedOrders, numberOfCurrentOrders, onChange, onPrev, onNext, tabIndex, pageIndex }) => (
    <View style={styles.headerTab}>
        {pageIndex !== 0 && <HeaderButton onPress={onPrev} title="Prev" iconName="ios-arrow-back" isLeft />}
        <SegmentControl key={`tab0`} radiusLeft active={tabIndex === 0} titleSegmentControl={`Completed Orders (${numberOfCompletedOrders})`} onPress={() => onChange(0)} />
        <SegmentControl key={`tab1`} radiusRight active={tabIndex === 1} titleSegmentControl={`Current Orders (${numberOfCurrentOrders})`} onPress={() => onChange(1)} />
        <HeaderButton onPress={onNext} title="Next" iconName="ios-arrow-forward" />
    </View>
)

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flex: 1,
        backgroundColor: '#F5FCFF'
    },
    headerTab: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderBottomWidth: 1,
        flexDirection: 'row',
        borderColor: Colors.borderColor
    },
    headerBtn: {
        position: 'absolute',
        alignItems: 'center',
    },
    headerBtnTitle: {
        paddingHorizontal: 5,
        color: Colors.defaultText
    },
    headerLeftBtn: {
        flexDirection: 'row',
        left: 15
    },
    headerRightBtn: {
        flexDirection: 'row-reverse',
        right: 15
    },
    segmentControl: {
        width: 200,
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderColor: Colors.mainColor,
        borderWidth: 1,
        backgroundColor: "white"
    },
    segmentControlActive: {
        backgroundColor: Colors.mainColor,
    },
    radiusLeft: {
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    },
    radiusRight: {
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5
    },
    titleSegmentControl: {
        textAlign: 'center',
        fontSize: Font.FontSize.SMALL,
        color: Colors.mainColor
    },
    titleSegmentControlActive: {
        color: "white"
    },
    listCards: {
        flexWrap: 'wrap'
    },
});
