import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1d0aa4ca2552471caa23dda3748e86f2",
  },
});
