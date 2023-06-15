import React, { useState } from "react";

const TwitterFollowCard = ({ userName, children, initialIsFollowing }) => {
  const [isFollowing, setIsFollow] = useState(initialIsFollowing);
  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw-followCard-button is--following"
    : "tw-followCard-button";

  const handleClick = () => {
    setIsFollow(!isFollowing);
  };

  return (
    <>
      <body className="tw-body">
        <article className="tw-followCard">
          <header className="tw-cardBody">
            <img
              className="tw-image"
              src={`https://unavatar.io/twitter/${userName}`}
              alt="Avatar del usuario"
            />
            <div className="tw-followCard-info">
              <strong>{children}</strong>
              <span className="tw-followCard-infoUserName">@{userName}</span>
            </div>
          </header>

          <aside>
          <button className={buttonClassName} onClick={handleClick}>
          <span className='tw-followCard-text'>{text}</span>
          <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
        </button>
          </aside>
        </article>
      </body>
    </>
  );
};

export default TwitterFollowCard;
