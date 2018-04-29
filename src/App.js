/**
 * 
 * https://github.com/tiendn/rn-layout
 * @author: Dao Nam Tien
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Animated,
    Dimensions,
    StatusBar,
    TouchableOpacity,
    FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Card } from './components';
import { Colors, Font } from './theme';
import data from './data/data.json';

type Props = {};

const { height, width } = Dimensions.get("screen");

export default class App extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            tabIndex: 1,
            pageIndex: 0,
            translateX: new Animated.Value(0),
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.pageIndex !== prevState.pageIndex)
            this.setAnimation();
    }

    // Set animation
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
    // Next page
    onNext() {
        this.setState((prevState) => ({
            pageIndex: prevState.pageIndex + 1
        }));
    }
    // Previous page
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
        {(pageIndex + 1) * 8 < data.length && <HeaderButton onPress={onNext} title="Next" iconName="ios-arrow-forward" />}
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
