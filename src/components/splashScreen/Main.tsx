import React, { useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, Image, StyleSheet, View } from 'react-native';

const { width } = Dimensions.get('window');

const SplashScreen: React.FC = () => {
  const [isSplashAnimationFinished, setIsSplashAnimationFinished] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start(() => {
      setIsSplashAnimationFinished(true);
    });
  }, [fadeAnim]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.fadeContainer, { opacity: fadeAnim }]}>
        <View style={styles.imageContainer}>
          <Image source={require('../../../assets/splash-logo.png')} style={styles.logo} />
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    flex: 1,
    resizeMode: 'contain',
  },
  fadeContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
});

export default SplashScreen;
