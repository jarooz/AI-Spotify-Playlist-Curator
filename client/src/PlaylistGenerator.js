import React, { useState } from 'react';

const PlaylistGenerator = () => {
  const [query, setQuery] = useState('');
  const [songs, setSongs] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`/api/search?query=${query}`);
    const data = await response.json();
    setSongs(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
        <button type="submit">Generate Playlist</button>
      </form>
      {songs.map((song) => (
        <div key={song.id}>
          <img src={song.album.images[0].url} alt={song.name} />
          <h3>{song.name}</h3>
          <p>{song.artists[0].name}</p>
          <a href={song.external_urls.spotify} target="_blank" rel="noopener noreferrer">
            Listen on Spotify
          </a>
        </div>
      ))}
    </div>
  );
};

export default PlaylistGenerator;