import axios from 'axios';
import { BASE_URL } from '../constants/api-constants';

export const searchBooks = async (authToken: string, query: string, page: number, pageSize: number) => {
    const startIndex = (page - 1) * pageSize;
    const response = await axios.get(`${BASE_URL}/volumes?q=${query}&startIndex=${startIndex}`, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        },
    });
    return response;
};

export const searchBookshelves = async (authToken: string) => {
    const response = await axios.get(`${BASE_URL}/mylibrary/bookshelves`, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        },
    });
    return response;
};
