import React from 'react';
import Users from "./Users";
import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC } from '../../Redux/users-reducer';

let mapStateToProps = (state) => {
return {
              users: state.usersPage.users
            };
          };
          
          let mapDispatchToProps = (dispatch) => {
            return {
              followUser: (userId) => {
                dispatch(followAC(userId));
              },
              unfollowUser: (userId) => {
                dispatch(unfollowAC(userId));
              },
              setUsers: (users) => {
                  dispatch(setUsersAC(users));
                }
            };
          };
          
          const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;