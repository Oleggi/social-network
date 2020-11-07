import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
    "API-KEY": "69c2d3f8-422e-47c6-92c0-73bcd72b1d10",
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

export const authAPI = {
  getAuthUserData() {
    return instance.get("auth/me").then((response) => {
      return response.data;
    });
  },
  login(email, password, rememberMe, captcha) {
    return instance.post("auth/login", {email, password, rememberMe, captcha}).then(response => {
    return response;
    })
  },
  logout() {
    return instance.delete("auth/login").then(response => {
      return response;
    })
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`).then((response) => {
      return response.data;
    });
  },
  getUserStatus(userId) {
    return instance.get(`profile/status/${userId}`).then((response) => {
      return response.data;
    });
  },

  setUserStatus(statusData) {
    return instance
      .put("profile/status", { status: statusData })
      .then((response) => {
        return response.data;
      });
  },
  setPhoto(photoFile) {
    const formData = new FormData();
  formData.append("image", photoFile);
    return instance.put("profile/photo", formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(response => {
      return response;
    })
  },
  setUserInfo(userData) {
    return instance.put("profile", userData).then(response => {
      return response;
    })
  }
};

export const secureAPI = {
  getCaptchaUrl() {
    return instance.get("security/get-captcha-url").then(response => {
      return response;
    })
  }
};
