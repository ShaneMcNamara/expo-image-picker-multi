import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View } from 'react-native';

import * as ImagePicker from 'expo-image-picker';

export default function App() {
  const open = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) {
      return;
    }
    const res = await ImagePicker.launchImageLibraryAsync({ allowsMultipleSelection: true });
    console.log(res);
  }
  return (
    <View style={styles.container}>
      <Button onPress={open} title="Open Library"/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
