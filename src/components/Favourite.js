//FavoriteButton.js
import React, {useState} from 'react';
import {Pressable, View, StyleSheet, Image} from 'react-native';


const FavoriteButton = () => {
	const [isFavorite, setIsFavorite] = useState(false);
	
	const handlePress = () => {
    setIsFavorite(!isFavorite);
  };

	return (
    <View>
      <Pressable style={styles.button} onPress={() => handlePress()}>
        {isFavorite ? (
          <Image
            source={require('../../assets/ActiveStar.png')}
            style={styles.star}
          />
        ) : (
          <Image
            source={require('../../assets/InactiveStar.png')}
            style={styles.star}
          />
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginRight: 8,
  },
});

export default FavoriteButton;