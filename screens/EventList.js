import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TouchableWithoutFeedback, Dimensions } from 'react-native';
import React from 'react';

const { width } = Dimensions.get('screen');

export default function EventList() {
    const [value, setValue] = React.useState(new Date());
    
    const dates = [
        { weekday: "Sun", date: new Date() },
        { weekday: "Mon", date: new Date() },
        { weekday: "Tues", date: new Date() },
        { weekday: "Wed", date: new Date() },
        { weekday: "Thur", date: new Date() },
        { weekday: "Fri", date: new Date() },
        { weekday: "Sat", date: new Date() },
    ];

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Task Scheduler</Text>
                </View>

                <View style={styles.picker}>
                    <View style={[styles.itemRow, {paddingHorizontal: 16}]}>
                        {dates.map((item, dateIndex) => {
                                const isActive = value.toDateString() === item.date.toDateString();

                                return (
                                    <TouchableWithoutFeedback key={dateIndex} onPress={() => setValue(item.date)}>
                                        <View style={[styles.item, isActive && {
                                            backgroundColor: "#111",
                                            borderColor: "#111",
                                        }]}>
                                            <Text style={[styles.itemWeekday, isActive && {color: "#fff"}]}>{item.weekday}</Text>
                                            <Text style={[styles.itemDate, isActive && {color: "#fff"}]}>{item.date.getDate()}</Text>
                                        </View>
                                    </TouchableWithoutFeedback>
                                );
                            })}
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 24,
    },
    header: {
        paddingHorizontal: 16,
        marginTop: 10,
    },
    title: {
        fontSize: 32,
        fontWeight: '700',
        color: "green",
        marginBottom: 12,
    },
    itemRow: {
        width,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginHorizontal: -4,
    },
    item: {
        flex: 1,
        height: 55,
        marginHorizontal: 4,
        paddingVertical: 6,
        paddingHorizontal: 4,
        borderWidth: 1,
        borderColor: "#e3e3e3",
        borderRadius: 8,
        alignItems: 'center',
        flexDirection: 'column',
    },
    itemWeekday: {
        fontSize: 13,
        fontWeight: '500',
        color: '#737373',
        marginBottom: 4,
    },
    itemDate: {
        fontSize: 15,
        fontWeight: '600',
        color: "#111",
    }
});
