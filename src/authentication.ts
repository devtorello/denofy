import { encodeToBase64 } from 'src/utils.ts';

export interface Authentication {
	clientCredentials: (clientId: string, clientSecret: string) => Promise<void>;
	getToken: () => string | undefined;
}

export class DenofyAuthentication implements Authentication {
	private TOKEN_URL = 'https://accounts.spotify.com/api/token';

	private token: string | undefined;

	constructor() {}

	/**
	 * Authenticate with Spotify API using Client Credentials Flow.
	 * @param clientId Client ID generated from the app created on spotify.
	 * @param clientSecret Client Secret generated from the app created on spotify.
	 */
	public async clientCredentials(clientId: string, clientSecret: string): Promise<void> {
		const response = await fetch(this.TOKEN_URL, {
			method: 'POST',
			headers: {
				'Authorization': `Basic ${encodeToBase64(`${clientId}:${clientSecret}`)}`,
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: new URLSearchParams({ grant_type: 'client_credentials' }),
		});
		const data = await response.json();
		console.log(data);
		if (data.error) {
			throw new Error(data.error_description || data.error);
		}
		this.token = data.access_token;
	}

	/**
	 * Returns the generated token from authentication methods.
	 * @returns Returns the token if it exists and undefined if it does not.
	 */
	public getToken(): string | undefined {
		return this.token;
	}
}
