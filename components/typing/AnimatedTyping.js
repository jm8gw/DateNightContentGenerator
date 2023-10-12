import { useRef, useState, useEffect } from 'react';
import {StyleSheet, Text } from 'react-native';

export default function AnimatedTyping(props) {
    let [text, setText] = useState("");
    let [cursorColor, setCursorColor] = useState("transparent");
    let [messageIndex, setMessageIndex] = useState(0);
    let [textIndex, setTextIndex] = useState(0);
    let [timeouts, setTimeouts] = useState({
        cursorTimeout: undefined,
        typingTimeout: undefined,
        firstNewLineTimeout: undefined,
        secondNewLineTimeout: undefined,
    });

    let textRef = useRef(text);
    textRef.current = text;

    let cursorColorRef = useRef(cursorColor);
    cursorColorRef.current = cursorColor;

    let messageIndexRef = useRef(messageIndex);
    messageIndexRef.current = messageIndex;

    let textIndexRef = useRef(textIndex);
    textIndexRef.current = textIndex;

    let timeoutsRef = useRef(timeouts);
    timeoutsRef.current = timeouts;


    let typingAnimation = () => {
        if (textIndexRef.current < props.text[messageIndexRef.current].length) {
            
            setText(textRef.current + props.text[messageIndexRef.current].charAt(textIndexRef.current));
            setTextIndex(textIndexRef.current + 1);

            let character = props.text[messageIndexRef.current].charAt(textIndexRef.current);

            if (character === '\n' && props.text[messageIndexRef.current].charAt(textIndexRef.current + 1) === '\n') {
              // Delay for double newline ("\n\n")
              let updatedTimeouts = { ...timeoutsRef.current };
              updatedTimeouts.typingTimeout = setTimeout(typingAnimation, 1000);
              setTimeouts(updatedTimeouts);
            }else{
                let updatedTimeouts = { ...timeoutsRef.current };
                updatedTimeouts.typingTimeout = setTimeout(typingAnimation, 25);
                setTimeouts(updatedTimeouts);
            }
        } else if (messageIndexRef.current + 1 < props.text.length) {
            setMessageIndex(messageIndexRef.current + 1);
            setTextIndex(0);

            let updatedTimeouts = {...timeoutsRef.current};
            updatedTimeouts.firstNewLineTimeout = setTimeout(newLineAnimation, 120);
            updatedTimeouts.secondNewLineTimeout = setTimeout(newLineAnimation, 200);
            updatedTimeouts.typingTimeout = setTimeout(typingAnimation, 280);
            setTimeouts(updatedTimeouts);
        } else {
            clearInterval(timeoutsRef.current.cursorTimeout);
            setCursorColor("transparent");

            if (props.onComplete) {
                props.onComplete();
            }
        }
    };

    let newLineAnimation = () => {
        setText(textRef.current + "\n");
    };

    let cursorAnimation = () => {
        if (cursorColorRef.current === "transparent") {
            setCursorColor("#9b34eb");
        } else {
            setCursorColor("transparent");
        }
    };

      // State variable to track changes in props.text
    const [textPropChanged, setTextPropChanged] = useState(false);

    useEffect(() => {
        
        
        if ((props.text !== textRef.current) && (props.blankSlate === false)) {
            setTextPropChanged(true);
            // Reset the animation state when props.text changes
            setText('');
            setCursorColor('transparent');
            setMessageIndex(0);
            setTextIndex(0);
        
            // Clear any existing timeouts and intervals
            clearTimeout(timeoutsRef.current.typingTimeout);
            clearTimeout(timeoutsRef.current.firstNewLineTimeout);
            clearTimeout(timeoutsRef.current.secondNewLineTimeout);
            clearInterval(timeoutsRef.current.cursorTimeout);

            // Start the animation again
            let updatedTimeouts = { ...timeoutsRef.current };
            updatedTimeouts.typingTimeout = setTimeout(typingAnimation, 500);
            updatedTimeouts.cursorTimeout = setInterval(cursorAnimation, 250);
            setTimeouts(updatedTimeouts);
        } else if (props.blankSlate === true) {
            let updatedTimeouts = { ...timeoutsRef.current };
            updatedTimeouts.typingTimeout = setTimeout(typingAnimation, 500);
            updatedTimeouts.cursorTimeout = setInterval(cursorAnimation, 250);
            setTimeouts(updatedTimeouts);
        }
        
       /*
        let updatedTimeouts = { ...timeoutsRef.current };
        updatedTimeouts.typingTimeout = setTimeout(typingAnimation, 500);
        updatedTimeouts.cursorTimeout = setInterval(cursorAnimation, 250);
        setTimeouts(updatedTimeouts);
        */
    
        return () => {
          // Clear timeouts and intervals when the component unmounts
          clearTimeout(timeoutsRef.current.typingTimeout);
          clearTimeout(timeoutsRef.current.firstNewLineTimeout);
          clearTimeout(timeoutsRef.current.secondNewLineTimeout);
          clearInterval(timeoutsRef.current.cursorTimeout);
        };
      }, [props.text, props.blankSlate]); // Add props.text as a dependency

    return (
        <Text style={styles.text}>
            {text}
            <Text style={{color: cursorColor, fontSize: 35}}>|</Text>
        </Text>
    )
};

let styles = StyleSheet.create({
    text: {
        color: "#000000",
        fontSize: 30,
        alignSelf: "stretch"
    }
})