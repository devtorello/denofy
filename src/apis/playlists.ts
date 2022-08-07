import { Playlist } from 'src/apis/contracts.ts';
import { CallMethod, makeApiCall } from 'src/caller.ts';

export class SpotifyPlaylist {
	private BASE_URL = 'https://api.spotify.com/v1/playlists';

	private token: string;

	constructor(token: string) {
		this.token = token;
	}

	/**
	 * Get a playlist owned by a Spotify user.
	 *
	 * @returns A playlist (Playlist)
	 */
	public async get(playlistId: string): Promise<Playlist> {
		const response = await makeApiCall<void, Playlist>(`${this.BASE_URL}/${playlistId}`, {
			method: CallMethod.GET,
			token: this.token,
		});
		return response;
	}
}
