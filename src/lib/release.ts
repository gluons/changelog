import { EOL } from 'os';

/**
 * GitHub release data.
 *
 * @class Release
 */
class Release {
	public tag: string;
	public body: string;

	/**
	 * Creates an instance of Release.
	 * @param {string} [tag=''] GitHub release tag.
	 * @param {string} [body=''] GitHub release body.
	 *
	 * @memberof Release
	 */
	constructor(tag: string = '', body: string = '') {
		this.tag = tag;
		this.body = body;
	}

	/**
	 * Get a GitHub release as markdown string.
	 *
	 * @returns {string}
	 *
	 * @memberof Release
	 */
	public toMDString(): string {
		return `## ${this.tag}${EOL}${this.body}`;
	}
}

export default Release;
