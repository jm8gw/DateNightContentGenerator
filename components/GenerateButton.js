import React from 'react';
import {Text, View} from 'react-native';
import { Button } from 'react-native-elements';
//import LinearGradient from 'react-native-linear-gradient';
import { fetchRandomFact } from '../api/facts';
import { fetchRandomJoke } from '../api/jokes';
import { fetchRandomQuote } from '../api/quotes';

const GenerateButton = ({ setContentData, contentType, blankSlate, setBlankSlate }) => {

    const getFact = async () => {
        try {
            setBlankSlate(false);
            //console.log(blankSlate, " should be false!");
            const factData = await fetchRandomFact();
            // Handle the factData, e.g., update state or display the fact on the screen
            console.log(factData);
            setContentData(factData[0].fact + '.');
            setBlankSlate(true);
            //console.log(blankSlate);
        } catch (error) {
            // Handle errors, such as network issues or API errors
            console.error('Error:', error);
        }
        };
    
    const getJoke = async () => {
        try {
            setBlankSlate(false);
            const jokeData = await fetchRandomJoke();
            // Handle the factData, e.g., update state or display the fact on the screen
            console.log(jokeData);
            setContentData(jokeData[0].joke.split(/(?<=[!?])\s+/).join('\n\n\n'));
            setBlankSlate(true);
        } catch (error) {
            // Handle errors, such as network issues or API errors
            console.error('Error:', error);
        }
        };
    const getQuote = async () => {
        try {
            setBlankSlate(false);
            const quoteData = await fetchRandomQuote();
            // Handle the factData, e.g., update state or display the fact on the screen
            console.log(quoteData);
            setContentData('"' + quoteData[0].quote + '"' + '\n\n' + '- ' + quoteData[0].author);
            setBlankSlate(true);
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