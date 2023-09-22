import React, { useState } from 'react';
import { View,TouchableOpacity, Animated } from 'react-native';

const Bar = () => {
  const [isMovingRight, setIsMovingRight] = useState(true);
  const [animation] = useState(new Animated.Value(0));
  const [backgroundColor, setBackgroundColor] = useState('#5B5B62');
  const handlePress = () => {
    const toValue = isMovingRight ? 1 : 0;
    setIsMovingRight(!isMovingRight);
    Animated.timing(animation, {
      toValue,
      duration: 500,
      useNativeDriver: true,
    }).start();
    if (backgroundColor === '#5B5B62') {
      setBackgroundColor('#1AB65C');
    } else {
      setBackgroundColor('#5B5B62');
    }
  };

  const translateX = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 20],
  });

  return (
    <View className="w-10 h-5 rounded-full" backgroundColor={backgroundColor}>
      <TouchableOpacity onPress={handlePress}>
        <View>  
          <Animated.View className="w-5 h-5 rounded-full bg-white"
            style={{
              transform: [{ translateX }],
            }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Bar;