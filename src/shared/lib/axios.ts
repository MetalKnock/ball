import axios from 'axios';

export const dummyApiInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_DUMMY_API_URL,
});

export const jsonPlaceholderApiInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_JSON_PLACEHOLDER_API_URL,
});
