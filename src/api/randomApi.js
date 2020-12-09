import axios from "axios";

// Url for generating random contact:
const baseURL = "https://randomuser.me/api";

export default axios.create({
  baseURL
}) 