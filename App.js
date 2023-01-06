import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet } from 'react-native';
import ImageFetcher from './components/ImageFetcher';

const globeImage = 'https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageFetcher imageFetcherSource={globeImage} />
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
});
