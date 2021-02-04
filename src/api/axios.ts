import axios from "axios";

const instance = axios.create({
  baseURL: "https://www.omdbapi.com",
  params: {
    apikey: process.env.REACT_APP_AUTH_KEY,
  },
});

export default instance;
