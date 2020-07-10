import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  checkIsFetching,
  setTotalUsersCount,
  checkIfFollowingActive
} from "../../Redux/users-reducer";
import Preloader from "../common/preloader/Preloader";
import { usersAPI } from "../API/api";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.checkIsFetching(true);
   usersAPI.getUsers(this.props.pageSize, this.props.currentPage).then((data) => {
      this.props.setUsers(data.items);
      this.props.setTotalUsersCount(data.totalCount);
      this.props.checkIsFetching(false);
    });
  }

  onPageChange = (p) => {
    this.props.setCurrentPage(p);
    usersAPI.getUsers(this.props.pageSize, this.props.currentPage).then(data => {
      this.props.setUsers(data.items);
  })
  };

  onClickChange = (id) => {
    this.props.getUserId(id);
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
          followUser={this.props.follow}
          unfollowUser={this.props.unfollow}
          setCurrentPage={this.props.setCurrentPage}
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
  setUsers,
  setCurrentPage,
  checkIsFetching,
  setTotalUsersCount,
  checkIfFollowingActive
})(UsersContainer);
