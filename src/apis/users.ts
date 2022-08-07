import { User } from './contracts.ts';
import { CallMethod, makeApiCall } from 'src/caller.ts';

export class SpotifyUser {
	private BASE_URL = 'https://api.spotify.com/v1';

	private token: string;

	constructor(token: string) {
		this.token = token;
	}

	/**
	 * Get detailed profile information about the current user.
	 *
	 * @returns An user private data representation (User)
	 */
	public async getCurrentProfile(): Promise<User> {
		const response = await makeApiCall<void, User>(`${this.BASE_URL}/me`, {
			method: CallMethod.GET,
			token: this.token,
		});
		return response;
	}
}
