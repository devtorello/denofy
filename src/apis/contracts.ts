export interface UserContentSettings {
	filter_enabled: boolean;
	filter_locked: boolean;
}

export interface UserExternalUrls {
	spotify: string;
}

export interface UserFollowers {
	href: string;
	total: integer;
}

export interface UserImages {
	url: string;
	height: integer;
	width: integer;
}

export interface User {
	country: string;
	display_name: string;
	email: string;
	explict_content: UserContentSettings;
	external_urls: UserExternalUrls;
	followers: UserFollowers;
	href: string;
	id: string;
	product: string;
	type: string;
	uri: string;
}
