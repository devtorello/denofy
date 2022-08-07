import { DenofyAuthentication, SpotifyClient } from 'src/mod.ts';

const CLIENT_ID = '49093dd97fb34cb2a1aa18f0b71b032c';
const CLIENT_SECRET = 'c66c537d989543bdb23f03fff0b90834';

const auth = new DenofyAuthentication();

await auth.clientCredentials(CLIENT_ID, CLIENT_SECRET);

const token = auth.getToken();

const spotify = new SpotifyClient();

if (!token) {
	throw new Error();
}

const user = await spotify.user(token).getCurrentProfile();

console.log(user);
