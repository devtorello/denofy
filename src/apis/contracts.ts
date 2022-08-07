export interface ExternalUrls {
	spotify: string;
}

export interface Followers {
	href: string;
	total: number;
}

export interface Images {
	url: string;
	height: number;
	width: number;
}

export interface Owner {
	external_urls: ExternalUrls;
	followers: Followers;
	href: string;
	id: string;
	type: string;
	uri: string;
	display_name: string;
}

export interface UserContentSettings {
	filter_enabled: boolean;
	filter_locked: boolean;
}

export interface User {
	country: string;
	display_name: string;
	email: string;
	explict_content: UserContentSettings;
	external_urls: ExternalUrls;
	followers: Followers;
	href: string;
	id: string;
	product: string;
	type: string;
	uri: string;
}

export interface Tracks {
	href: string;
	items: Array<Record<string, string>>;
	limit: number;
	next: string;
	offset: number;
	previous: string;
	total: number;
}

export interface Playlist {
	collaborative: boolean;
	description: string | null;
	external_urls: ExternalUrls;
	followers: Followers;
	href: string;
	id: string;
	images: Images;
	name: string;
	owner: Owner;
	public: boolean;
	snapshot_id: string;
	tracks: Tracks[];
	type: string;
	uri: string;
}
