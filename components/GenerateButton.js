import React from 'react';
import {Text, View} from 'react-native';
import { Button } from 'react-native-elements';
//import LinearGradient from 'react-native-linear-gradient';
import { fetchRandomFact } from '../api/facts';
import { fetchRandomJoke } from '../api/jokes';
import { fetchRandomQuote } from '../api/quotes';

const GenerateButton = ({ setContentData, contentType }) => {

    const getFact = async () => {
        try {
            const factData = await fetchRandomFact();
            // Handle the factData, e.g., update state or display the fact on the screen
            console.log(factData);
            setContentData(factData[0].fact + '.');
        } catch (error) {
            // Handle errors, such as network issues or API errors
            console.error('Error:', error);
        }
        };
    
    const getJoke = async () => {
        try {
            const jokeData = await fetchRandomJoke();
            // Handle the factData, e.g., update state or display the fact on the screen
            console.log(jokeData);
            setContentData(jokeData[0].joke);
        } catch (error) {
            // Handle errors, such as network issues or API errors
            console.error('Error:', error);
        }
        };
    const getQuote = async () => {
        try {
            const quoteData = await fetchRandomQuote();
            // Handle the factData, e.g., update state or display the fact on the screen
            console.log(quoteData);
            setContentData('"' + quoteData[0].quote + '"');
        } catch (error) {
            // Handle errors, such as network issues or API errors
            console.error('Error:', error);
        }
        };
    

    return (
        
        <Button
        /*
        ViewComponent={LinearGradient} // Don't forget this!
        linearGradientProps={{
            colors: ['red', 'pink'],
            start: { x: 0, y: 0.5 },
            end: { x: 1, y: 0.5 },
        }}
        */
        title="Generate"
        onPress={() => {
            if (contentType === 'Fact') {
            getFact();
            } else if (contentType === 'Joke') {
            getJoke();
            } else if (contentType === 'Quote') {
            getQuote();
            }
        }}
        />
    );
};
export default GenerateButton;