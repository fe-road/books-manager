import axios from 'axios';

export const searchBooks = async (authToken: string, query: string, page: number, pageSize: number) => {
    const startIndex = (page - 1) * pageSize;
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=${startIndex}`, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        },
    });
    return response;
};
