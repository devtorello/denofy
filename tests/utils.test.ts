import { encodeToBase64, stringify } from 'src/utils.ts';
import { assertEquals } from 'src/deps.ts';

Deno.test('should encode string to base64', () => {
	const encodeOne = encodeToBase64('test');
	assertEquals(encodeOne, 'dGVzdA==');
});

Deno.test('should stringify object', () => {
	const stringified = stringify({ any: true });
	assertEquals(stringified, '{"any":true}');
});
