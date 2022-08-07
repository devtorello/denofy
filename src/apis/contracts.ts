export interface UserContentSettings {
	filter_enabled: boolean;
	filter_locked: boolean;
}

export interface UserExternalUrls {
	spotify: string;
}

export interface UserFollowers {
	href: string;
	total: number;
}

export interface UserImages {
	url: string;
	height: number;
	width: number;
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
