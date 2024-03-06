import "./rightBar.scss";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggested For You</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://lh3.googleusercontent.com/a/ACg8ocITKKVSH5wTImuW2RL0d_Pwfuq5xVPDSKCl0T1z437rir0=s360-c-no"
                alt="" />
              <span>ak</span>
            </div>
            <div className="buttons">
              <button>add friend</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://lh3.googleusercontent.com/a/ACg8ocITKKVSH5wTImuW2RL0d_Pwfuq5xVPDSKCl0T1z437rir0=s360-c-no"
                alt="" />
              <span>ak</span>
            </div>
            <div className="buttons">
              <button>add friend</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://lh3.googleusercontent.com/a/ACg8ocITKKVSH5wTImuW2RL0d_Pwfuq5xVPDSKCl0T1z437rir0=s360-c-no"
                alt="" />
              <p>
                <span>ak </span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://lh3.googleusercontent.com/a/ACg8ocITKKVSH5wTImuW2RL0d_Pwfuq5xVPDSKCl0T1z437rir0=s360-c-no"
                alt="" />
              <p>
                <span>ak </span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://lh3.googleusercontent.com/a/ACg8ocITKKVSH5wTImuW2RL0d_Pwfuq5xVPDSKCl0T1z437rir0=s360-c-no"
                alt="" />
              <p>
                <span>ak </span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://lh3.googleusercontent.com/a/ACg8ocITKKVSH5wTImuW2RL0d_Pwfuq5xVPDSKCl0T1z437rir0=s360-c-no"
                alt="" />
              <p>
                <span>ak </span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>

        </div>
        <div className="item">
          <span>Online</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://lh3.googleusercontent.com/a/ACg8ocITKKVSH5wTImuW2RL0d_Pwfuq5xVPDSKCl0T1z437rir0=s360-c-no"
                alt="" />
              <div className="online" />
              <span>ak </span>
            </div>

          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://lh3.googleusercontent.com/a/ACg8ocITKKVSH5wTImuW2RL0d_Pwfuq5xVPDSKCl0T1z437rir0=s360-c-no"
                alt="" />
              <div className="online" />
              <span>ak </span>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default RightBar