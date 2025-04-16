// React Component!
// Follow <-> following
function FollowButton() {
    // Follow 상태를 위해 state 선언 및 저장
    const [following, setFollowing] = React.useState(false);
  
    // 스타일링 추가
    const commonBtnStyle = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      top: "12px",
      right: "16px",
      width: "100px",
      height: "36px",
      borderRadius: "9999px",
      fontWeight: "bold",
    };
  
    const followBtnStyle = {
      ...commonBtnStyle,
      backgroundColor: "black",
      color: "white",
    }
  
    const followingBtnStyle = {
      ...commonBtnStyle,
      backgroundColor: "white",
      color: "black",
      border: "1px solid #cfd9de",
    }
  
    // JavaScript로 DOM을 생성하는 방법
    // return React.createElement(
    //   "div",
    //   {
    //     onClick: () => setFollowing(!following),
    //     style: following ? followingBtnStyle : followBtnStyle,
    //   },
    //   following ? "following" : "Follow"
    // );

    // JSX로 DOM을 생성하는 방법
    return (
        <div
            onClick={() => setFollowing(!following)}
            style={following ? followingBtnStyle : followBtnStyle}
        >
            {following ? "following" : "Follow"}
        </div>
    )
  }

  