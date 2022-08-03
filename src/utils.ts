import { encode } from 'src/deps.ts';

export function encodeToBase64(content: string): string {
	return encode(content);
}

export function stringify(content: Record<string, unknown>): string {
	return JSON.stringify(content);
}
