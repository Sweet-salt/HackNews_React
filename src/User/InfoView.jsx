import axios from "axios";
import { BASE_URL } from "../api";

function fetchUserInfo(userName) {
  return axios.get(`${BASE_URL}user/${userName}.json`);
}
export default fetchUserInfo;
