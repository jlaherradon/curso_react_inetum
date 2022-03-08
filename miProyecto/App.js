import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
const Button = () => (
<TouchableHighlight>
<Text>Hello World</Text>
</TouchableHighlight>
)
const YourApp = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>
        Try editing me! 🎉
      </Text>
      <Button/>
    </View>
  );
}

export default YourApp;