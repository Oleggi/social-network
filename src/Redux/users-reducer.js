import { updateObjInArray } from "../Utils/objMapHelper";
import { usersAPI, followAPI } from "../components/API/api"
const FOLLOW = "social-network/users/FOLLOW";
const UNFOLLOW = "social-network/users/UNFOLLOW";
const SET_USERS = "social-network/users/SET_USERS";
const SET_CURRENT_PAGE = "social-network/users/SET_CURRENT_PAGE";
const CHECK_IS_FETCHING = "social-network/users/CHECK_IS_FETCHING"; 
const SET_TOTAL_USERS_COUNT = "social-network/users/SET_TOTAL_USERS_COUNT"; 
const TOGGLE_FOLLOWING_PROCESS = "social-network/users/TOGGLE_FOLLOWING_PROCESS"; 

let initialState = {
  totalUsersCount: 0,
  pageSize: 30,
  page: 1,
  users: [],
  portionSize: 7,
  isFetching: false,
  isFollowingActive: []
};


const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjInArray(state.users, action.userID, "id", {followed: true})
      };
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjInArray(state.users, action.userID, "id", {followed: false})
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
  return async (dispatch) => {
    dispatch(checkIsFetching(true));
   const data = await usersAPI.getUsers(pageSize, currentPage)
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
      dispatch(checkIsFetching(false));
      dispatch(setCurrentPage(currentPage));
  }
}

const followUnfollowUser = async (dispatch, id, apiMethod, actionCreator ) => {
    dispatch(checkIfFollowingActive(true, id)); 
     const data = await apiMethod(id);
       if (data.resultCode === 0) {
          dispatch(actionCreator(id));
       }
       dispatch(checkIfFollowingActive(false, id));
   }

export const follow = (id) => {
  return async (dispatch) => {
    const apiMethod = followAPI.followUser.bind(followAPI);
    followUnfollowUser(dispatch, id, apiMethod, followUser);
  }

}

export const unfollow = (id) => {
  return async (dispatch) => {
    const apiMethod = followAPI.unfollowUser.bind(followAPI);
    followUnfollowUser(dispatch, id, apiMethod, unfollowUser);
  } 
}


export default usersReducer;
