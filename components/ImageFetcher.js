import { StyleSheet, Image } from "react-native";

export default function ImageFetcher({ imageFetcherSource }) {
    return (
        <Image source={{uri:imageFetcherSource}} style={styles.image} />
    );
}

const styles = StyleSheet.create({
    image: {
        width: 500,
        height: 500,
        borderRadius: 18,
    },
})
