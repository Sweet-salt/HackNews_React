import axios from "axios";

const BASE_URL = "https://hacker-news.firebaseio.com/v0/";
export const storyUrl = `${BASE_URL}item/`;

function News() {
  return axios.get(`${BASE_URL}newstories.json`);
}

function Jobs() {
  return axios.get(`${BASE_URL}jobstories.json`);
}

function Top_API() {
  return axios.get(`${BASE_URL}topstories.json`);
}

function Ask() {
  return axios.get(`${BASE_URL}askstories.json`);
}

function Show() {
  return axios.get(`${BASE_URL}showstories.json`);
}

function User() {
  return axios.get(`${BASE_URL}user`);
}
export { News, Jobs, Top_API, Ask, Show, BASE_URL, User };

// export const getStoryIds = async () => {
//   const res = await axios.get(News).then((d) => d);
//   return res;
// };

// export const getStory = async (storyId) => {
//   const res = await axios
//     .get(`${storyUrl + storyId}.json`)
//     .then(({ data }) => data);
//   return res;
// };
