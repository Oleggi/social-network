import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  checkIsFetching,
  checkIfFollowingActive,
  getUsers
} from "../../Redux/users-reducer";
import Preloader from "../common/preloader/Preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.pageSize, this.props.currentPage)
  }

  onPageChange = (p) => {
    this.props.getUsers(this.props.pageSize, p)
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          users={this.props.users}
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          onPageChange={this.onPageChange}
          checkIfFollowingActive={this.props.checkIfFollowingActive}
          isFollowingActive={this.props.isFollowingActive}
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
    isFollowingActive: state.usersPage.isFollowingActive
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  checkIsFetching,
  getUsers,
  checkIfFollowingActive
})(UsersContainer);
