/** @type {Detox.DetoxConfig} */
module.exports = {
  testRunner: {
    args: {
      '$0': 'jest',
      config: 'e2e/jest.config.js'
    },
    jest: {
      setupTimeout: 120000
    }
  },
	skipLegacyWorkersInjection: true,
	apps: {
		'ios.test': {
			type: 'ios.app',
			build:
				'xcodebuild -workspace ios/ACME.xcworkspace -scheme ACME -configuration Release -sdk iphonesimulator -arch x86_64 -derivedDataPath ios/build',
			binaryPath:
				'ios/build/Build/Products/Release-iphonesimulator/ACME.app',
		},
		'android.test': {
			type: 'android.apk',
			build:
				'cd android && ./gradlew :app:assembleRelease :app:assembleAndroidTest -DtestBuildType=release && cd ..',
			binaryPath: 'android/app/build/outputs/apk/release/app-release.apk',
		},
	},
	devices: {
		simulator: {
			type: 'ios.simulator',
			device: {
				type: 'iPhone 14',
			},
		},
		emulator: {
			type: 'android.emulator',
			device: {
				avdName: 'Pixel_3a_API_32',
			},
		},
	},
	configurations: {
		'ios.test': {
			device: 'simulator',
			app: 'ios.test',
		},
		'android.test': {
			device: 'emulator',
			app: 'android.test',
		},
	},
};
