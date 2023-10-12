// facts.js

// Import necessary libraries
import axios from 'axios';

// Define the API endpoint for fetching random facts
const limit = 1;
const apiURL = 'https://api.api-ninjas.com/v1/quotes?category=happiness';
const apiKey = 'WpsGcjjqLuD3PRKZtKHMOg==mELG22v2zdUFUd0M';

// Function to fetch a random fact
export const fetchRandomQuote = async () => {
    try {
        // Make a GET request to the API endpoint
        const response = await axios.get(apiURL, {
            headers: { 'X-Api-Key': apiKey },
            contentType: 'application/json',
        });

        // Check if the request was successful
        if (response.status === 200) {
        // Parse the JSON response
        const quoteData = response.data;

        // Return the fact data
        return quoteData;
        
        } else {
        // Handle any other status codes or errors here
        throw new Error('Failed to fetch a random quote');
        }
    } catch (error) {
        // Handle network errors or other exceptions
        throw new Error('Failed to fetch a random quote: ' + error.message);
    }
};

// Additional functions for fetching facts by category, etc. can be added here
