import axios from "axios";

// const API_KEY = "563492ad6f91700001000001ddfed4927d0344d59cba5ca24dabaa1e";
const API_KEY = "563492ad6f917000010000010a6883ac8ca04bc4943e6d1afe9d43dd";
export default axios.create({
  baseURL: `https://api.pexels.com`,
  headers: {
    Authorization: API_KEY,
  },
});
