import React from 'react';
import SectionListHeader from './sectionListHeader'
import SectionListItems from './sectionListItems'
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
} from 'react-native';



const DATA = 
    [
        {
          "cat_name":"Fruits",
          
          "Quantity":"5",
          "Title":"Mango"
        },
        {
          "cat_name":"Fruits",
          
          "Quantity":"20",
          "Title":"Banana"
        },
        {
          "cat_name":"Vegetables",
         
          "Quantity":"15",
          "Title":"Brinjal"
        },
        {
          "cat_name":"Vegetables",
          
          "Quantity":"08",
          "Title":"Potato"
        }
        
      ];

      function groupBy(y, s) {
        var i = 0, val, index,
            values = [], result = [];
        for (; i < y.length; i++) {
            val = y[i][s];
            index = values.indexOf(val);
            if (index > -1)
                result[index].push(y[i]);
            else {
                values.push(val);
                result.push([y[i]]);
            }
        }
        return result;
    }
    var category_wise_array = groupBy(DATA,'cat_name')    



    var output=category_wise_array.map(item=>{
                        
        var obj= item.reduce((acc, item1)=>{  var n=item1.data
                                                acc.data.push(n)
                        return acc
                            },{data:[]}) 
                            return {...obj.Quantity,
                                    ...obj.Title,
                                    ...obj}}
)




function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}


        renderItem={({ item }) => ( <SectionListItems itemlist={item} />)}


        renderSectionHeader={( {section}) => (
         <SectionListHeader title={section.title}/>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
  },
  title: {
    fontSize: 24,
  },
});
