import "./leftBar.scss"
import Friends from "../../assets/friend.png";

const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            {/* <img src="https://lh3.googleusercontent.com/a/ACg8ocITKKVSH5wTImuW2RL0d_Pwfuq5xVPDSKCl0T1z437rir0=s360-c-no" 
            alt="" /> */}
            <span>ak</span>
          </div>
          <div className="item">
            <img src={Friends} alt="" />
            <span>Friends</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftBar