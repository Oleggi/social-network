import MyPosts from "./MyPosts";
import React from "react";
import Preloader from "../../common/preloader/Preloader";
import {
  addPost,
  deletePost,
  setPosts,
  setCurrentPage,
  checkIsFetching,
} from "../../../Redux/profile-reducer";
import { connect } from "react-redux";
// import Axios from "axios";

class MyPostsAPI extends React.Component {
  // componentDidMount() {
  //   this.props.checkIsFetching(true);
  //   Axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
  //     this.props.setPosts(response.data);
  //     debugger;
  //     this.props.checkIsFetching(false);
  //   });
  // }

  onPageChange = (p) => {
    this.props.setCurrentPage(p);
  };
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <MyPosts
          posts={this.props.posts}
          totalPostsCount={this.props.totalPostsCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChange={this.onPageChange}
          addPost={this.props.addPost}
          deletePost = {this.props.deletePost}
          setCurrentPage={this.props.setCurrentPage}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    totalPostsCount: state.profilePage.totalPostsCount,
    pageSize: state.profilePage.pageSize,
    currentPage: state.profilePage.currentPage,
    isFetching: state.profilePage.isFetching,
  };
};

const MyPostsContainer = connect(mapStateToProps, {
  addPost,
  deletePost,
  setPosts,
  setCurrentPage,
  checkIsFetching,
})(MyPostsAPI);

export default MyPostsContainer;
