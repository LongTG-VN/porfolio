import axios from "axios";

const AxiosClient = axios.create({
  baseURL: "https://69d4c48ad396bd74235d91f7.mockapi.io/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default AxiosClient;