import React from "react";

type Props = {
  img: string;
  link: string;
};

const PortfolioItem = ({ img, link }: Props) => {
  return (
    <div className="p-item">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img" />
      </a>
    </div>
  );
};

export default PortfolioItem;
