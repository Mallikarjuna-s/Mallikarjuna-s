import React, { FC } from "react";
import { View,Text } from 'react-native';
import { TouchableOpacity } from 'react-native';

const Tabs = ({
  tabs = [],
  selectedTab = 0,
  onPress,
}) => {
  const Panel = tabs && tabs.find((tab, index) => index === selectedTab);

  return (
    <View>
      <View>
        {tabs.map((tab, index) => (
          <TouchableOpacity
            // style={{  }}
            onPress={() => onPress(index)}
            key={index}
            tabIndex={selectedTab === index ? 0 : -1}
          >
           <Text>{tab.label}</Text> 
          </TouchableOpacity>
        ))}
      </View>
      <View style={{flex:1}}>
      {Panel && <Panel.Component index={selectedTab} />}
      </View>
    </View>
  );
};
export default Tabs;
