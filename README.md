# Spotify Playlist Creator

This is a Python-based full-stack web application that integrates with the Spotify Web API to create music playlists based on user input. The application uses Flask as the web framework and has a responsive front end created with HTML, CSS, and JavaScript.

## Setup

To run this application, you'll need to set up Spotify API credentials and install the required Python packages.

1. Create a Spotify developer account and register a new app.
2. Set the redirect URI to `http://localhost:5000/callback`.
3. Copy the client ID and client secret to the environment variables `SPOTIFY_CLIENT_ID` and `SPOTIFY_CLIENT_SECRET` respectively.
4. Install the required Python packages by running `pip install -r requirements.txt`.
5. Run the application by executing `python app.py`.

## Usage

1. Open the application in your browser at `http://localhost:5000`.
2. Enter a song name or a descriptive text in the input field.
3. Click the "Create Playlist" button to generate a playlist.

## Contributing

This application is a proof-of-concept and not intended for production use. If you'd like to contribute, please feel free to fork the repository and submit a pull request.

## License

This application is licensed under the MIT License.