import React, { useState } from 'react';
import ProfileCard from './components/profile_card'
import './App.css';
import dhoni from "../src/assets/dhoni.jpg";
import kohli from "../src/assets/kohli.jpeg"
import smith from "../src/assets/smith.jpeg";
import stokes from "../src/assets/stokes.jpeg";
import williamson from "../src/assets/williamson.jpeg";

function App() {
  const [likedPlayers, setLikedPlayers] = useState({});

  const handleLike = (player) => {
    setLikedPlayers(prev => ({
      ...prev,
      [player]: !prev[player]
    }));
  };

  // Cricket players data
  const cricketPlayers = [
    {
      name: "MS Dhoni",
      age: 42,
      bio: "Legendary Indian captain and wicketkeeper, led India to 3 ICC trophies. Known as 'Captain Cool'.",
      image: dhoni,
      role: "Wicketkeeper, Batsman"
    },
    {
      name: "Virat Kohli",
      age: 35,
      bio: "Former Indian captain, regarded as one of the greatest batsmen of all time.",
      image: kohli,
      role: "Batsman"
    },
    {
      name: "Steve Smith",
      age: 34,
      bio: "Australian batsman known for his unorthodox technique and incredible test match record.",
      image: smith,
      role: "Batsman"
    },
    {
      name: "Ben Stokes",
      age: 32,
      bio: "English all-rounder, captain of the Test team, known for his match-winning performances.",
      image: stokes,
      role: "All-rounder"
    },
    {
      name: "Kane Williamson",
      age: 33,
      bio: "New Zealand captain, elegant batsman with superb technique across all formats.",
      image: williamson,
      role: "Batsman"
    },
    {
      name: "Jasprit Bumrah",
      age: 30,
      bio: "Indian fast bowler with unique bowling action, deadly yorkers and exceptional control.",
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=400&fit=crop",
      role: "Bowler"
    },
    {
      name: "Babar Azam",
      age: 29,
      bio: "Pakistani captain, elegant right-handed batsman with classical technique.",
      image: "https://images.unsplash.com/photo-1519861531473-920034658307?w=400&h=400&fit=crop",
      role: "Batsman"
    },
    {
      name: "Pat Cummins",
      age: 31,
      bio: "Australian captain and fast bowler, known for pace, bounce and leadership.",
      image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=400&h=400&fit=crop",
      role: "Bowler"
    },
    {
      name: "Rashid Khan",
      age: 25,
      bio: "Afghan leg-spinner, one of the best T20 bowlers with exceptional control and variations.",
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=400&fit=crop",
      role: "Bowler"
    },
    {
      name: "Jos Buttler",
      age: 33,
      bio: "English wicketkeeper-batsman, explosive striker and finisher in limited overs cricket.",
      image: "https://images.unsplash.com/photo-1519861531473-920034658307?w=400&h=400&fit=crop",
      role: "Batsman"
    },
    {
      name: "Trent Boult",
      age: 34,
      bio: "New Zealand left-arm fast bowler, known for swinging the ball and death bowling.",
      image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=400&h=400&fit=crop",
      role: "Bowler"
    },
    {
      name: "Rohit Sharma",
      age: 36,
      bio: "Indian captain, explosive opening batsman with multiple double centuries in ODIs.",
      image: "https://images.unsplash.com/photo-1626248801379-9d0e86a1225c?w=400&h=400&fit=crop",
      role: "Batsman"
    }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Cricket Players Profiles</h1>
      </header>
      
      <main className="profiles-container">
        <div className="profiles-grid">
          {cricketPlayers.map(player => (
            <ProfileCard
              name={player.name}
              age={player.age}
              bio={player.bio}
              image={player.image}
              role={player.role}
              onLike={handleLike}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
