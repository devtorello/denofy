import { assertEquals, assertExists, assertInstanceOf, assertRejects } from 'src/deps.ts';
import { DenofyAuthentication } from 'src/authentication.ts';
import { env } from 'src/config/env.ts';

const { CLIENT_ID, CLIENT_SECRET } = env;

Deno.test('should be instance of class', () => {
	const authOne = new DenofyAuthentication();
	assertInstanceOf(authOne, DenofyAuthentication);
});

Deno.test('should return undefined if user is not authenticated', () => {
	const auth = new DenofyAuthentication();
	const token = auth.getToken();
	assertEquals(token, undefined);
});

Deno.test('should generate token when trying to authenticate with client credentials', async () => {
	const auth = new DenofyAuthentication();
	await auth.clientCredentials(CLIENT_ID, CLIENT_SECRET);
	const token = auth.getToken();
	assertExists(token);
});

Deno.test('should throw if an error is returned', async () => {
	const auth = new DenofyAuthentication();
	await assertRejects(
		async () => await auth.clientCredentials('any_credential', 'any_credential'),
		Error,
		'Invalid client',
	);
});
