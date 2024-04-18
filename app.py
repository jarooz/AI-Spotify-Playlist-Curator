from flask import Flask, request, render_template, jsonify
import os
import spotipy
from spotipy.oauth2 import SpotifyClientCredentials
import json

app = Flask(__name__)

# Load Spotify API credentials from environment variables
SPOTIFY_CLIENT_ID = os.getenv('bb9a445f87544418882cc545bb30b730')
SPOTIFY_CLIENT_SECRET = os.getenv('93d0579b77e24271877e850de003571d')

# Set up Spotify API client
client_credentials_manager = SpotifyClientCredentials(client_id=SPOTIFY_CLIENT_ID, client_secret=SPOTIFY_CLIENT_SECRET)
sp = spotipy.Spotify(client_credentials_manager=client_credentials_manager)

# Index route renders the main page with the form
@app.route('/')
def index():
    return render_template('index.html')

# Generate playlist route receives a POST request with text input
@app.route('/generate_playlist', methods=['POST'])
def generate_playlist():
    # Get text input from form
    input_text = request.form['text_input']

    # Search Spotify for tracks
    results = sp.search(q=input_text, limit=10)
    tracks = results['tracks']['items']

    # Create playlist JSON from track data
    playlist = [{'name': track['name'], 'artist': track['artists'][0]['name']} for track in tracks]

    # Return JSON playlist data
    return jsonify(playlist)

if __name__ == '__main__':
    app.run(debug=True)

