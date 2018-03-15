/**
 * Get GitHub access token from `CHANGELOG_GH_TOKEN` environment variable.
 *
 * @export
 * @returns {string}
 */
export default function getTokenEnv(): string {
	let ghToken: string = process.env.CHANGELOG_GH_TOKEN;
	return (typeof ghToken !== 'undefined') ? ghToken : null;
}
