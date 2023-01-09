import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet } from 'react-native';
import ImageFetcher from './components/ImageFetcher';
import Button from './components/Button';

const globeImage = 'https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'


// before running use "set NODE_OPTIONS=--openssl-legacy-provider" in cmd prompt
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageFetcher imageFetcherSource={globeImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Single Player" />
        <Button theme="primary" label="Multiplayer" />
      </View>
      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 2 / 3,
    alignItems: 'center'
  }
});
