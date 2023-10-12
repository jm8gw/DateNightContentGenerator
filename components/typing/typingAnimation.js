import React, { Component } from 'react';
import { View, Text, Animated, Easing } from 'react-native';

class MyComponent extends Component {
  constructor() {
    super();

    this.state = {
      type4Animation: new Animated.Value(0),
    };
  }

  componentDidMount() {
    this.animateTextWithBlink(this.state.type4Animation, 2000, 5500);
  }

  animateTextWithBlink(animation, duration, delay = 0) {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animation, {
          toValue: 1,
          duration,
          delay,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
        Animated.timing(animation, {
          toValue: 0,
          duration: 750, // Blink duration
          easing: Easing.linear,
          useNativeDriver: false,
        }),
      ]),
    ).start();
  }

  render() {
    const { textFed } = this.props;

    const type4Width = this.state.type4Animation.interpolate({
      inputRange: [0, 1],
      outputRange: ['0%', '100%'],
    });

    return (
      <View>
        <Text style={{ fontSize: 28, marginTop: '6%' }}>
          <Animated.View style={{ width: type4Width, overflow: 'hidden' }}>
            <Text>{textFed}</Text>
          </Animated.View>
        </Text>
      </View>
    );
  }
}

export default MyComponent;
