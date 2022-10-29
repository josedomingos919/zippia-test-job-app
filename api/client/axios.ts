import axios from "axios";

const instance = axios.create({
  baseURL: "https://www.zippia.com/api/",
});

export { instance as axios };
