import { usersAPI, followAPI } from "../components/API/api"
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const CHECK_IS_FETCHING = "CHECK_IS_FETCHING"; 
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"; 
const TOGGLE_FOLLOWING_PROCESS = "TOGGLE_FOLLOWING_PROCESS"; 

let initialState = {
  totalUsersCount: 0,
  pageSize: 30,
  page: 1,
  users: [],

  isFetching: false,
  isFollowingActive: []
};


const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userID) {
            return { ...u, followed: true};
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userID) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };

    case SET_USERS: {
      return { ...state, users: [...action.users] };
    }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        page: action.page
      }
     case CHECK_IS_FETCHING:
       return {
         ...state,
           isFetching: action.isFetching
         } 
      case SET_TOTAL_USERS_COUNT:
        return {
          ...state,
          totalUsersCount: action.totalCount
        }
      case TOGGLE_FOLLOWING_PROCESS:
        return {
          ...state,
          isFollowingActive: action.isFetching ? [...state.isFollowingActive, action.userId] : state.isFollowingActive.filter(id => id !== action.userId )
        }
    default:
      return state;
  }
};

export const followUser = (userID) => {
  return {
    type: FOLLOW,
    userID: userID,
  };
};

export const unfollowUser = (userID) => {
  return {
    type: UNFOLLOW,
    userID: userID,
  };
};

export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};

export const setCurrentPage = (page) => {
  return {
    type: SET_CURRENT_PAGE,
    page
  }
}

export const setTotalUsersCount = (totalCount) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    totalCount
  }
}

export const checkIsFetching = (fetching) => {
  return {
    type: CHECK_IS_FETCHING,
    isFetching: fetching
  }
}

export const checkIfFollowingActive = (isFetching, userId) => ({
  type: TOGGLE_FOLLOWING_PROCESS,
  isFetching,
  userId
})

export const requestUsers = (pageSize, currentPage) => {
  return (dispatch) => {
    dispatch(checkIsFetching(true));
   usersAPI.getUsers(pageSize, currentPage)
      .then((data) => {
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
      dispatch(checkIsFetching(false));
      dispatch(setCurrentPage(currentPage));
    });
  }
}

export const follow = (id) => {
  return (dispatch) => {
   dispatch(checkIfFollowingActive(true, id)); 
    followAPI.followUser(id).then((data) => {
      if (data.resultCode === 0) {
         dispatch(followUser(id));
      }
      dispatch(checkIfFollowingActive(false, id))
    });
  }
}

export const unfollow = (id) => {
  return (dispatch) => {
   dispatch(checkIfFollowingActive(true, id)); 
    followAPI.unfollowUser(id).then((data) => {
      if (data.resultCode === 0) {
        dispatch(unfollowUser(id));
      }
      dispatch(checkIfFollowingActive(false, id));
    });
  }
}


export default usersReducer;
