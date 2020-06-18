import React from "react";

class Music extends React.Component {
  render() {
    return (
      <div>
        <h2>Music</h2>
        <div>
          <audio
            controls
            src="https://freeplaymusic.com/#/album/840"
            type="audio/mpeg"
          ></audio>
        </div>
        <div>
          <audio
            controls
            src="https://soundcloud.com/levipatel/as-she-passes"
            type="audio/mpeg"
          ></audio>
        </div>
        <div>
          <audio
            controls
            src="https://soundcloud.com/levipatel/as-she-passes"
            type="audio/mpeg"
          ></audio>
        </div>
        <div>
          <audio
            controls
            src="https://soundcloud.com/levipatel/as-she-passes"
            type="audio/mpeg"
          ></audio>
        </div>
      </div>
    );
  }
}

export default Music;
