import MyPosts from "./MyPosts";
import React from "react";
import Preloader from "../../common/preloader/Preloader";
import {
  addPost,
  updateBodyText,
  updateTitleText,
  setPosts,
  setCurrentPage,
  checkIsFetching,
} from "../../../Redux/profile-reducer";
import { connect } from "react-redux";
import Axios from "axios";

class MyPostsAPI extends React.Component {
  componentDidMount() {
    this.props.checkIsFetching(true);
    Axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      this.props.setPosts(response.data);
      this.props.checkIsFetching(false);
    });
  }

  onPageChange = (p) => {
    this.props.setCurrentPage(p);
  };
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <MyPosts
          posts={this.props.posts}
          inputDataBody={this.props.inputDataBody}
          inputDataTitle={this.props.inputDataTitle}
          totalPostsCount={this.props.totalPostsCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChange={this.onPageChange}
          addPost={this.props.addPost}
          onBodyChange={this.props.updateBodyText}
          onTitleChange={this.props.updateTitleText}
          setCurrentPage={this.props.setCurrentPage}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    inputDataBody: state.profilePage.inputDataBody,
    inputDataTitle: state.profilePage.inputDataTitle,
    totalPostsCount: state.profilePage.totalPostsCount,
    pageSize: state.profilePage.pageSize,
    currentPage: state.profilePage.currentPage,
    isFetching: state.profilePage.isFetching,
  };
};

const MyPostsContainer = connect(mapStateToProps, {
  addPost,
  updateBodyText,
  updateTitleText,
  setPosts,
  setCurrentPage,
  checkIsFetching,
})(MyPostsAPI);

export default MyPostsContainer;
