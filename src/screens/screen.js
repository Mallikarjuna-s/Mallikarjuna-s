import * as React from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import Service from '../networking/service';
import { endpoints } from '../networking/urls';
import observable$ from '../rxjs/seviec';

const ListView = () => {
  React.useEffect(() => {
    getListApi();
    subscription();
  }, []);

  const [listdata, setListData] = React.useState([]);
  const getListApi = async () => {
    try {
      let response = await Service.getAnswers(endpoints.answers);
      if (response) {
        console.log(response, 'getListApi');
        setListData(response);
      } else {
        setListData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const subscription = () => {
    observable$.subscribe({
      next: data => console.log('[data] => ', data),
      complete: data => console.log('[complete]'),
    })
  };


  function Item({ item }) {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>user Id : {item.userId}</Text>
        <Text style={styles.title}>Title : {item.title}</Text>
      </View>
    );
  }
  const renderItem = ({ item }) => <Item item={item} />;
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={listdata}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
export default ListView;
