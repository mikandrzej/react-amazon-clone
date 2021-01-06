import axios from "axios";

const instance = axios.create({
  // baseURL: `http://localhost:5001/clone-d33ee/us-central1/api`,
  baseURL: `https://us-central1-clone-d33ee.cloudfunctions.net/api`,
});

export default instance;
