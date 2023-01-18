import { by, element, device, expect } from 'detox';

describe('App', () => {
	beforeAll(async () => {
		await device.launchApp();
	});

	beforeEach(async () => {
		await device.reloadReactNative();
	});

	it('Text should be visible', async () => {
		await expect(element(by.text('ACME'))).toBeVisible();
	});
});
