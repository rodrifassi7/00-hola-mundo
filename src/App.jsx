import React from "react";
import TwitterFollowCard from "./TwitterFollowCard";
import "./index.css";
import Title from "./Title";

const users = [
  {
    userName: "rodrigofassi7",
    name: "Rodri Fassi",
    isFollowing: true,
  },
  {
    userName: "jorgecano",
    name: "Jorge Cano",
    isFollowing: false,
  },
  {
    userName: "midudev",
    name: "Miguel Ángel Durán",
    isFollowing: true,
  },
  {
    userName: "d4nidev",
    name: "Daniel de la Cruz",
    isFollowing: false,
  },
  {
    userName: "JoaMinari",
    name: "Joaquin Minari",
    isFollowing: true,
  },
  {
    userName: "temarisnt",
    name: "Temari",
    isFollowing: false,
  },
];

const App = () => {
  return (
    <>
      <Title />
      {
      users.map(({userName, name, isFollowing} ) => (
        <TwitterFollowCard
          key={userName}
          userName={userName}
          initialIsFollowing={isFollowing}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </>
  );
};

export default App;
