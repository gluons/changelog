import { equal } from 'assert';
import { spawn } from 'child_process';
import { existsSync, readFileSync, unlinkSync } from 'fs';
import { platform } from 'os';
import { resolve } from 'path';

const cliPath = resolve(__dirname, '../dist/changelog.js');
const fixturePath = resolve(__dirname, './fixtures/CHANGELOG.md');
const generatedFilePath = resolve(__dirname, 'CHANGELOG.md');
const cwd = resolve(__dirname);

let fixtureContent = stripCarriageReturn(readFileSync(fixturePath, 'utf8'));

/**
 * Strip carriage return (`\r`) on Windows.
 *
 * @param {string} content Content.
 * @returns {string}
 */
function stripCarriageReturn(content: string): string {
	if (platform() === 'win32') {
		return content ? content.replace(/\r/g, '') : content;
	} else {
		return content;
	}
}

/**
 * Clean generated changelog file.
 *
 */
function cleanFile(): void {
	if (existsSync(generatedFilePath)) {
		unlinkSync(generatedFilePath);
	}
}

describe('CLI', () => {
	before(function (done) {
		this.timeout(5000);

		cleanFile();
		let child = spawn('node', [cliPath, 'gluons/changelog-test'], {
			cwd,
			env: process.env
		});
		child.on('close', code => {
			if (code === 0) {
				done();
			} else {
				done(code);
			}
		});
	});

	it('should generate expected changelog file', () => {
		let generatedFileContent = stripCarriageReturn(readFileSync(generatedFilePath, 'utf8'));
		equal(generatedFileContent, fixtureContent);
	});

	after(() => { cleanFile(); });
});
