import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import MyComponent from './typing/typingAnimation';
//import { TypingAnimation } from 'react-native-typing-animation';
import AnimatedTyping from './typing/AnimatedTyping';
import { StatusBar } from 'expo-status-bar';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

/*
function TypingEffect({ text }) {
    const [visibleText, setVisibleText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        if (currentIndex < text.length) {
          setVisibleText(text.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          clearInterval(interval);
        }
      }, 50); // Adjust the typing speed by changing the interval duration (e.g., 100ms).
  
      return () => {
        clearInterval(interval); // Cleanup when the component unmounts.
      };
    }, [currentIndex, text]);
  
    return <Text>{visibleText}</Text>;
  }

  <TypingEffect text={content}/>

          <Card>
            <Card.Title>{content}</Card.Title>
        </Card>
*/
const ContentDisplay = ({ content, blankSlate, setBlankSlate }) => {

    return (
        <Card>
            <AnimatedTyping text={[content]} blankSlate={blankSlate}/>
            <StatusBar style="dark" />
        </Card>
    );
  };
export default ContentDisplay;
