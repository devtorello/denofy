export enum CallMethod {
	GET = 'GET',
	POST = 'POST',
	PUT = 'PUT',
	DELETE = 'DELETE',
}

export interface CallOptions<T> {
	method: CallMethod;
	body?: T;
	token: string;
}

export async function makeApiCall<T, R>(baseUrl: string, opts: CallOptions<T>): Promise<R> {
	const response = await fetch(baseUrl, {
		method: opts.method,
		headers: {
			'Authorization': `Bearer ${opts.token}`,
			'Content-Type': 'application/json',
		},
		body: opts.body ?? undefined,
	});
	return await response.json();
}
