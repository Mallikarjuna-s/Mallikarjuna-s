import * as React from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import Service from '../networking/service';
import { endpoints } from '../networking/urls';
import observable$ from '../rxjs/seviec';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

// import App from './drag';
const ListView = () => {
  React.useEffect(() => {
    getListApi();
    subscription();
  }, []);

  React.useEffect(() => {
    GoogleSignin.configure({
     scopes: ['email'],
     webClientId: '58346678539-ejrj6r0bkaqr33859lfkkdnpp50nqa06.apps.googleusercontent.com',
     iosClientId: '',
     forceCodeForRefreshToken: true,
     offlineAccess: true,
    });
   }, []);

  const [listdata, setListData] = React.useState([]);


  const openGoogleSignin = async () => {
    try {
     await GoogleSignin.hasPlayServices();
     const userInfo = await GoogleSignin.signIn();
     console.log(userInfo,"userInfo");
     const _authToken = userInfo.idToken ? userInfo.idToken : '';
     console.log('Google-Access-Token===>', _authToken);
    //  doGoogleLogin(_authToken.toString());
    } catch (error) {
     if (error?.code === statusCodes.SIGN_IN_CANCELLED) {
      // showToastInBottom(Title.LOGIN_CANCELLED);
      console.log(statusCodes.SIGN_IN_CANCELLED,"statusCodes.SIGN_IN_CANCELLED");
     } else if (error?.code === statusCodes.IN_PROGRESS) {
      // showToastInBottom(Title.LOGIN_IN_PROGRESS);
      console.log(statusCodes.IN_PROGRESS,"statusCodes.IN_PROGRESS");

     } else if (error?.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // showToastInBottom(Title.PLAY_SERVICES_NOT_AVAILABLE);
      console.log(statusCodes.PLAY_SERVICES_NOT_AVAILABLE,"statusCodes.PLAY_SERVICES_NOT_AVAILABLE");

     } else {
      console.log("statusCodes.SOMETHING_WENT_WRONG");

      // showToastInBottom(Title.SOMETHING_WENT_WRONG);
     }
    }
   };
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

      <TouchableOpacity onPress={openGoogleSignin}>
        <View>
          <Text>
            hi google  
          </Text>
        </View>
      </TouchableOpacity>
      {/* <App/> */}
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
