import { StyleSheet } from 'react-native';

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

export default styles;
