import { SpotifyUser } from './apis/users.ts';

export class SpotifyClient {
	constructor() {}

	/**
	 * Method that should allow the access to Users API.
	 *
	 * @param token Generated token by DenofiyAuthentication;
	 * @returns Returns an instance of SpotifyUser wrappers
	 */
	public user(token: string): SpotifyUser {
		return new SpotifyUser(token);
	}
}
