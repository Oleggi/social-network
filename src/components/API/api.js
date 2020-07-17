import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "069ca66f-4179-499c-bd9a-4842578eef4f",
  },
});

export const usersAPI = {
  getUsers(pageSize, currentPage) {
    return instance
      .get(`users?count=${pageSize}&page=${currentPage}`)
      .then((response) => {
        return response.data;
      });
  },
   getProfile(userId) {
    return instance.get(`profile/${userId}`).then((response) => {
        return response.data;
  });
}
};

export const followAPI = {
  followUser(id) {
    return instance.post(`follow/${id}`).then((response) => {
      return response.data;
    });
  },
  unfollowUser(id) {
    return instance.delete(`follow/${id}`).then((response) => {
      return response.data;
    });
  },
};

export const authMeAPI = {
  getAuthUserData() {
    return instance.get("auth/me").then((response) => {
      return response.data;
    });
  },
};
