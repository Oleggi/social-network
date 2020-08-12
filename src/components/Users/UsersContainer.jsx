import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  checkIsFetching,
  checkIfFollowingActive,
  requestUsers
} from "../../Redux/users-reducer";
import Preloader from "../common/preloader/Preloader";
import { getUsers, getTotalUsersCount, getPageSize, getPage, getIsFetching, getIsFollowingActive, getPortionSize } from "../../Redux/users-selector";
class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.requestUsers(this.props.pageSize, this.props.currentPage)
  }

  onPageChange = (p) => {
    this.props.requestUsers(this.props.pageSize, p)
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
          portionSize={this.props.portionSize}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    totalUsersCount: getTotalUsersCount(state),
    pageSize: getPageSize(state),
    currentPage: getPage(state),
    isFetching: getIsFetching(state),
    isFollowingActive: getIsFollowingActive(state),
    portionSize: getPortionSize(state)
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  checkIsFetching,
  requestUsers,
  checkIfFollowingActive
})(UsersContainer);
