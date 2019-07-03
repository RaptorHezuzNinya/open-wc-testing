import { html, fixture, expect } from '@open-wc/testing';
import '../src/my-app.js';


describe('my filter app', () => {
	it('has heading and search filed', async () => {
		const el = (await fixture(html`
            <my-app .label=${'foo'}></my-app>
        `));
		expect(el).shadowDom.to.equal(`
            <h1>My Filter App</h1>
            <a11y-input></a11y-input>
        `, { ignoreChildren: ['a11y-input'] });
	});
});

