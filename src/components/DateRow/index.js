import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

// Since badiDate is returned by library in html, we need to convert it to
// a formatted <Text> element.
const getBadiDateTextFromHtml = (badiDateHtml) => {
  let badiDate = badiDateHtml;
  let badiDateSplits = badiDateHtml.split('<u>');
  if (badiDateSplits.length > 1) {
    badiDateSplits = [badiDateSplits[0]].concat(badiDateSplits[1].split('</u>'));
    badiDate = <Text>{badiDateSplits[0]}<Text style={styles.badiDateUnderline}>{badiDateSplits[1]}</Text>{badiDateSplits[2]}</Text>;
  }
  return badiDate;
}

class DateRow extends Component {
  render() {
    const color = (this.props.type === 'today') ? '#F13C2A' : '#000';
    const badiDate = getBadiDateTextFromHtml(this.props.badiDate);
    return (
      <View style={styles.dateRowContainer}>
        <View style={styles.gregorianDateContainer}>
          <Text style={styles.gregorianDate}>{this.props.gregDate}</Text>
        </View>
        <View style={styles.badiDateContainer}>
          <Text style={styles.badiDate}>{badiDate}</Text>
        </View>
      </View>
    );
  }
}

export default DateRow;
