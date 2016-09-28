/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import DateRow from './src/components/DateRow';

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

const createDateRow = (date, i) => <DateRow key={i} gregDate={date[0]} badiDate={date[1]} type={date[2]} />;

const DATES = [
  ['Wednesday 28 September', '19 Might', ''],
  ['Thursday 29 September', '1 Will', ''],
  ['Friday 30 September', '2 Will', ''],
  ['Saturday 1 October', '3 Will', ''],
  ['Sunday 2 October', '4 Will', 'today'],
  ['Monday 3 October', '5 Will', ''],
  ['Tuesday 4 October', '6 Will', ''],
  ['Wednesday 5 October', '7 Will', ''],
  ['Thursday 6 October', '8 Will', '']
];

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFF',
  },
  header: {
    flex: 0,
    height: 70,
    justifyContent: 'center',
    backgroundColor: '#FAFAFA',
  },
  title: {
    fontSize: 17,
    color: '#000',
    paddingTop: 10,
    fontWeight: '600',
    textAlign: 'center',
  },
  yearContainer: {
    flex: 0,
    height: 80,
    borderBottomWidth: 1,
    borderBottomColor: '#C8C7CC',
    justifyContent: 'center',
    backgroundColor: '#FAFAFA',
  },
  year: {
    fontSize: 20,
    letterSpacing: 2,
    fontWeight: '200',
    textAlign: 'center',
  },
  footerContainer: {
    flex: 0,
    height: 44,
    borderTopWidth: 1,
    borderTopColor: '#C8C7CC',
    backgroundColor: '#FAFAFA',
  }
});

AppRegistry.registerComponent('BahaiDateBookApp', () => BahaiDateBookApp);
