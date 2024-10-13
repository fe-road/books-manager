import axios from 'axios';

export const searchBooks = async (authToken: string, query: string) => {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        },
    });
    return response;
};
