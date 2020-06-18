import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  checkIsFetching,
} from "../../Redux/users-reducer";
import * as axios from "axios";
import Preloader from "../common/preloader/Preloader";

class UsersAPI extends React.Component {
  componentDidMount() {
    this.props.checkIsFetching(true);
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      this.props.setUsers(response.data);
      this.props.checkIsFetching(false);
    });
  }
  onPageChange = (p) => {
    this.props.setCurrentPage(p);
  };
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader/> : null}
        <Users
          users={this.props.users}
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          followUser={this.props.follow}
          unfollowUser={this.props.unfollow}
          setCurrentPage={this.props.setCurrentPage}
          onPageChange={this.onPageChange}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};


const UsersContainer = connect(mapStateToProps,{follow, unfollow, setUsers, setCurrentPage, checkIsFetching})(UsersAPI);

export default UsersContainer;
