import React from "react";
import { useSelector } from "react-redux";
import LIkedCard from "../../components/cards/liked-card";

const Likes = () => {
  const { likes } = useSelector((state) => state.cart);

  return (
    <div className="px-1 md:px-10">
      liked
      <div className="grid grid-cols-2 md:grid-cols-3 md:gap-5">
        {likes.map((item) => (
          <LIkedCard {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Likes;
