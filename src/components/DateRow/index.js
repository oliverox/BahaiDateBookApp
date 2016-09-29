import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

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

export default DateRow;
