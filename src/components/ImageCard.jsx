/* eslint-disable react/prop-types */
import "../style/ImageGrid.css";
import { memo } from "react";

const ImageCard = memo(function ImageCard({ id, urls, user, links }) {
  return (
    <div className="item">
      <img src={urls.small} alt={id} />
      <span>
        <span>
          <img src={user.profile_image.medium} alt={id} />
          <p>{user.name}</p>
        </span>
        <a href={links.html} target="_blank" rel="noreferrer">visit</a>
      </span>
    </div>
  );
});

export default ImageCard;
