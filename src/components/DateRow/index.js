import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class DateRow extends Component {
  render() {
    const color = (this.props.type === 'today') ? '#F13C2A' : '#000';
    return (
      <View style={styles.dateRowContainer}>
        <View style={styles.gregorianDateContainer}>
          <Text style={styles.gregorianDate}>{this.props.gregDate}</Text>
        </View>
        <View style={styles.badiDateContainer}>
          <Text style={styles.badiDate}>{this.props.badiDate}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  dateRowContainer: {
    flex: 1,
    flexDirection: 'column',
    height: 70,
    borderBottomWidth: 1,
    borderBottomColor: '#C8C7CC',
  },
  gregorianDateContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gregorianDate: {
    fontSize: 18,
  },
  badiDateContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badiDate: {
    fontSize: 14,
  }
});


export default DateRow;
