import baseUrl from "./baseUrl";

const AUTH_API_URL = `${baseUrl}/auth/`;
const USERS_API_URL = `${baseUrl}/users/`;
const POSTS_API_URL = `${baseUrl}/posts/`;

const GENERATE_API_URL = {
  //auth
  auth: {
    register: () => AUTH_API_URL + "register",
    signin: () => AUTH_API_URL + "signin",
  },
  //user
  users: {
    get: (userId) => USERS_API_URL + userId,
    delete: (userId) => USERS_API_URL + userId,
    update: (userId) => USERS_API_URL + userId,
    follow: (userId) => USERS_API_URL + userId + "/folow",
    unfollow: (userId) => USERS_API_URL + userId + "/unfolow",
  },
  //posts
  posts: {
    get: (postId) => POSTS_API_URL + postId,
    getTimeline: (userId) => POSTS_API_URL + userId + "/timeline/all",
    create: () => POSTS_API_URL,
    delete: (postId) => POSTS_API_URL + postId,
    update: (postId) => POSTS_API_URL + postId,
    like: (postId) => POSTS_API_URL + postId + "/like",
  },
};
export default GENERATE_API_URL;
