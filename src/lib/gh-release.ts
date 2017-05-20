interface GHRelease {
	url: string;
	assets_url: string;
	upload_url: string;
	html_url: string;
	id: number;
	tag_name: string;
	target_commitish: string;
	name: string;
	draft: boolean;
	author: object;
	prerelease: boolean;
	created_at: string;
	published_at: string;
	assets: object[];
	tarball_url: string;
	zipball_url: string;
	body: string;
}

export default GHRelease;
