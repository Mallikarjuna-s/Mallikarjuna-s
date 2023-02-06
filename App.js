import React from 'react';
import {
  ScrollView,
  StyleSheet,
} from 'react-native';

import TabsRender from './src/screens/tabs';

const App = () => {
  return (
      <ScrollView>
        <TabsRender/>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
