const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const CHECK_IS_FETCHING = "CHECK_IS_FETCHING"; 

let initialState = {
  totalUsersCount: 100,
  pageSize: 20,
  currentPage: 1,
  users: [],
  isFetching: false,
};


const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userID) {
            return { ...u, followed: true };
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
      return { ...state, users: [...state.users, ...action.users] };
    }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.page
      }
     case CHECK_IS_FETCHING:
       return {
         ...state,
           isFetching: action.isFetching
         } 
    default:
      return state;
  }
};

export const follow = (userID) => {
  return {
    type: FOLLOW,
    userID: userID,
  };
};

export const unfollow = (userID) => {
  return {
    type: UNFOLLOW,
    userID: userID,
  };
};

export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users: users,
  };
};

export const setCurrentPage = (page) => {
  return {
    type: SET_CURRENT_PAGE,
    page: page
  }
}

export const checkIsFetching = (fetching) => {
  return {
    type: CHECK_IS_FETCHING,
    isFetching: fetching
  }
}

export default usersReducer;
