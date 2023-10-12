// jokes.js

// Import necessary libraries
import axios from 'axios';

// Define the API endpoint for fetching random jokes
const limit = 1;
const apiURL = 'https://api.api-ninjas.com/v1/jokes?limit=' + limit;
const apiKey = 'WpsGcjjqLuD3PRKZtKHMOg==mELG22v2zdUFUd0M';

// Function to fetch a random joke
export const fetchRandomJoke = async () => {
    try {
        // Make a GET request to the API endpoint
        const response = await axios.get(apiURL, {
            headers: { 'X-Api-Key': apiKey },
            contentType: 'application/json',
        });

        // Check if the request was successful
        if (response.status === 200) {
        // Parse the JSON response
        const jokeData = response.data;

        // Return the joke data
        return jokeData;
        
        } else {
        // Handle any other status codes or errors here
        throw new Error('Failed to fetch a random joke');
        }
    } catch (error) {
        // Handle network errors or other exceptions
        throw new Error('Failed to fetch a random joke: ' + error.message);
    }
};

