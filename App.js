import React from 'react';
import {TextInput, SafeAreaView} from 'react-native';

const App = () => {
  return (
 <SafeAreaView style={{flex:1,flexDirection:'column',marginHorizontal:20}}>
  <TextInput placeholder='search'/>

 </SafeAreaView>
  );
};

export default App;