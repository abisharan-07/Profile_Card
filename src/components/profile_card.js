import React, { useState } from 'react';
import "../components/profile_card.css";

const ProfileCard = ({ id, name, age, bio, image, role, isLiked, onLike }) => {
  const [localLiked, setLocalLiked] = useState(isLiked);
  
  const handleLikeClick = () => {
    const newLikedState = !localLiked;
    setLocalLiked(newLikedState);
    onLike(id);
  };

  // Get role-based color
  const getRoleColor = () => {
    switch(role) {
      case 'Batsman': return '#e63946';
      case 'Bowler': return '#457b9d';
      case 'All-rounder': return '#2a9d8f';
      case 'Wicketkeeper': return '#e9c46a';
      default: return '#6c757d';
    }
  };

  return (
    <div className="profile-card">
      <div className="card-header">
        <div className="image-container">
          <img src={image} alt={name} className="profile-image" />
          <div className="role-badge" style={{ backgroundColor: getRoleColor() }}>
            {role}
          </div>
        </div>
      </div>
      
      <div className="card-body">
        <div className="name-section">
          <h2 className="player-name">{name}</h2>
          <div className="like-button" onClick={handleLikeClick}>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24"
              fill={localLiked ? "#e63946" : "none"}
              stroke={localLiked ? "#e63946" : "#6c757d"}
              strokeWidth="2"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            <span className="like-text">{localLiked ? 'Liked' : 'Like'}</span>
          </div>
        </div>
        
        <div className="player-info">
          <div className="age-badge">Age: {age}</div>
          <p className="player-bio">{bio}</p>
        </div>
      </div>
      
      <div className="card-footer">
        <div className="player-stats">
          <span className="stat">🏏 International</span>
        </div>
      </div>
    </div>
  );
};

ProfileCard.defaultProps = {
  role: 'Player',
  isLiked: false,
  onLike: () => {}
};

export default ProfileCard;