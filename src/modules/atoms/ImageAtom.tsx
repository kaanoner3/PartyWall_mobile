import React, { FC } from 'react';
import {
  Image,
  StyleSheet,
  ImageStyle,
  ImageSourcePropType,
} from 'react-native';

interface ImageAtomProps {
  source: ImageSourcePropType;
  style?: ImageStyle;
}

const ImageAtom: FC<ImageAtomProps> = ({ source, style }) => {
  return <Image source={source} style={[styles.default, style]} />;
};

export default ImageAtom;

const styles = StyleSheet.create({
  default: {
    width: 28,
    height: 28,
    resizeMode: 'contain',

  },
});
