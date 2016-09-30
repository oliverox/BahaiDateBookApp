import { StyleSheet } from 'react-native';

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
    color: '#FF3366',
  },
  badiDateUnderline: {
    textDecorationLine: 'underline',
  }
});

export default styles;
