const axios = require('axios');

const getAccessToken = async () => {
  const response = await axios.post('https://accounts.spotify.com/api/token', null, {
    params: {
      grant_type: 'client_credentials'
    },
    headers: {
      'Authorization': `Basic ${Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`).toString('base64')}`
    },
    json: true
  });

  return response.data.access_token;
};

const searchSongs = async (query) => {
  const accessToken = await getAccessToken();
  const response = await axios.get(`https://api.spotify.com/v1/search?q=${query}&type=track&limit=10`, {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  });

  return response.data.tracks.items;
};