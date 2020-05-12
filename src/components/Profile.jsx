import React, { Component } from "react";

class Profile extends Component {
  render() {
    return (
      <div className="content">
        <div>
          <img
            src="https://s2.best-wallpaper.net/wallpaper/3840x1200/1802/Watchtower-moon-mountains-forest-art-picture_3840x1200.jpg"
            alt=""
            width="100%"
            height="500px"
          />
        </div>
        <div>Avatar + description</div>
        <div>
          My Posts
          <div>New Post</div>
        </div>
        <div>
          <div>Post 1</div>
          <div>Post2</div>
        </div>
      </div>
    );
  }
}

export default Profile;
