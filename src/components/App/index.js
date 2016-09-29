import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import DateRow from '../DateRow';
import styles from './styles';
import DATES from './dates';

const createDateRow = (date, i) => <DateRow key={i} gregDate={date[0]} badiDate={date[1]} type={date[2]} />;

class BahaiDateBookApp extends Component {
  render() {
    return (
      <View style={styles.appContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>Bahá’í Date Book</Text>
        </View>
        <View style={styles.yearContainer}>
          <Text style={styles.year}>2016 / 173 BE</Text>
        </View>
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <ScrollView
            ref={(scrollView) => { _scrollView = scrollView; }}
            automaticallyAdjustContentInsets={false}
            onScroll={() => { console.log('onScroll!'); }}
            scrollEventThrottle={200}
            style={{}}>
              {DATES.map(createDateRow)}
          </ScrollView>
        </View>
        <View style={styles.footerContainer} />
      </View>
    );
  }
}

export default BahaiDateBookApp;
