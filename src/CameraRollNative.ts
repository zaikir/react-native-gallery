import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-gallery' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

export const RNCameraroll = NativeModules.Cameraroll
  ? NativeModules.Cameraroll
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      },
    );

export const RNSimilarImageDetector = NativeModules.SimilarImageDetector
  ? NativeModules.SimilarImageDetector
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      },
    );

export const RNBlurryImageDetector = NativeModules.BlurryImageDetector
  ? NativeModules.BlurryImageDetector
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      },
    );
