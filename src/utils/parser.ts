import GHRelease from '../lib/gh-release';
import Release from '../lib/release';

import { EOL } from 'os';

/**
 * GitHub releases parser.
 * Parse releases to markdown string.
 *
 * @class Parser
 */
class Parser {
	private _releases: Release[];
	private _epilogue: string;

	/**
	 * Markdown content epilogue.
	 *
	 * @type {string}
	 * @memberof Parser
	 */
	public get epilogue(): string {
		return this._epilogue;
	}
	public set epilogue(value: string) {
		this._epilogue = value;
	}

	/**
	 * Creates an instance of Parser.
	 * @param {GHRelease[]} [rawReleases=[]] Raw GitHub releases.
	 * @param {string} [epilogue=''] An epilogue in markdown content.
	 *
	 * @memberof Parser
	 */
	constructor(rawReleases: GHRelease[] = [], epilogue: string = '') {
		this._releases = [];
		this._epilogue = epilogue;

		if (Array.isArray(rawReleases) && (rawReleases.length > 0)) {
			this.init(rawReleases);
		}
	}

	/**
	 * Initialize releases data.
	 *
	 * @param {GHRelease[]} rawReleases Raw GitHub releases.
	 * @returns {Parser} The instance.
	 *
	 * @memberof Parser
	 */
	public init(rawReleases: GHRelease[]): Parser {
		rawReleases.forEach(rawRelease => {
			let release = new Release(rawRelease.tag_name, rawRelease.body);
			this._releases.push(release);
		});

		return this;
	}

	/**
	 * Add release data.
	 *
	 * @param {GHRelease} rawRelease A raw GitHub release.
	 * @returns {Parser} The instance.
	 *
	 * @memberof Parser
	 */
	public add(rawRelease: GHRelease): Parser {
		this._releases.push(new Release(rawRelease.tag_name, rawRelease.body));

		return this;
	}

	/**
	 * Parse releases data to markdown string.
	 *
	 * @returns {string} Parsed releases data as markdown string.
	 *
	 * @memberof Parser
	 */
	public parse(): string {
		let result = `# Changelog${EOL}${EOL}`;
		result += this._releases.map(release => release.toMDString()).join(EOL + EOL);
		if (this._epilogue.length > 0) {
			result += EOL + EOL;
			result += '---'; // Horizontal line
			result += EOL + EOL;
			result += this._epilogue;
		}
		result += EOL;

		return result;
	}
}

export default Parser;
