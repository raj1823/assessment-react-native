import React from 'react';

import {
  ActivityIndicator,
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  SectionList,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

function Item({title}) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default class ApiFetching extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isLoading: true};
  }

  componentDidMount() {
    return fetch('https://api.myjson.com/bins/oylfu')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
          dataSource: responseJson
            .map(obj => {
              return {...obj, ...obj.primaryCategory};
            })
            .map(({categoryName, ...data1}) => ({categoryName, data1}))
            .map(object => {
              object['title'] = object['categoryName'];
              delete object['categoryName'];
              return object;
            })
            .map(item1 => {
              var UpdatedData = [];
              UpdatedData.push(item1.data1.productName);
              UpdatedData.push(item1.data1.volume);
              UpdatedData.push(item1.data1.price);
              UpdatedData.push(item1.data1.measurementUnit.unitId);
              item1.data = UpdatedData;
              delete item1['data1'];
              return item1;
            }),
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 30,
          }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => {
            return (
              <View style={styles.flatViewStyling}>
                <Text style={{fontSize: 24, margin: 5}}>{item.title}</Text>
                <View style={styles.itemStyling}>
                  <Text style={{fontSize: 15}}>{item.data[0]}</Text>
                  <View>
                    <Text style={styles.textStyling}>
                      {' '}
                      Unit Id: {'  ' + item.data[3]}
                    </Text>
                    <Text style={{fontSize: 15}}> Volume: {item.data[2]}</Text>
                    <Text style={{fontSize: 15}}>
                      {' '}
                      Price: {'    ' + item.data[1]}
                    </Text>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',

    marginHorizontal: 16,
  },

  flatViewStyling: {
    backgroundColor: 'cyan',
    margin: 6,
    borderRadius: 5,
  },

  itemStyling: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
  },

  textStyling: {
    fontSize: 15,
  },
});
