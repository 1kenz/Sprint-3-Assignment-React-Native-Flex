import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={[styles.top, {flex: 1}]}>
        <View style={[styles.top_container, {flex: 1, flexDirection: 'row'}]}>
          <View style={[styles.orange_circle, {flex: 1}]}>
            <Text style={styles.orange_circle_text}>Orange Circle</Text>
          </View>
          <View style={[styles.yellow_box, {flex: 1}]}>
            <Text style={styles.yellow_box_text}>Yellow Box</Text>
          </View>
        </View>
      </View>
      <View style={[styles.bottom, {flex: 2, flexDirection: 'row'}]}>
        <View style={[styles.black_box, {flex: 3}]}>
          <Text style={styles.black_box_text}>Black Box</Text>
        </View>
        <View style={[styles.brown_box, {flex: 1}]}>
          <Text style={[styles.brown_box_text, {}]}>Brown</Text>
          <Text style={[styles.brown_box_text, {}]}>Box</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  top: {
    backgroundColor: 'red',
  },
  bottom: {
    backgroundColor: 'pink',
  },
  top_container: {
    backgroundColor: 'gray',
    margin: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  orange_circle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  orange_circle_text: {
    backgroundColor: 'orange',
    width: 100,
    height: 100,
    borderRadius: 100,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  yellow_box: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  yellow_box_text: {
    backgroundColor: 'yellow',
    borderRadius: 20,
    width: 100,
    height: 50,
    alignItems: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  black_box: {
    flex: 3,
    backgroundColor: 'black',
    borderRadius: 20,
    margin: 30,
    justifyContent: 'center',
  },
  black_box_text: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  brown_box: {
    backgroundColor: 'brown',
    borderRadius: 80,
    margin: 20,
    // flex:1,
    flexDirection: 'row',
  },
  brown_box_text: {
    // flex:1,
    color: 'white',
    textAlign: 'left',
    transform: [{rotate: '270deg'}],
    textAlignVertical: 'center',
    fontSize: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
