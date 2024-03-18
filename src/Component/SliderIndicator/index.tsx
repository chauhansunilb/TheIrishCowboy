import React, {FC} from 'react';
import AnimatedDotsCarousel from 'react-native-animated-dots-carousel';
import {theme} from '../../Shared/theme';

interface SlidetIndicator {
  currentIndex: number;
  size: number;
  length: number;
}
export const SlidetIndicator: FC<SlidetIndicator> = ({
  currentIndex,
  size,
  length,
}) => {
  return (
    <AnimatedDotsCarousel
      length={length}
      currentIndex={currentIndex}
      maxIndicators={4}
      interpolateOpacityAndColor={true}
      activeIndicatorConfig={{
        color: theme.color.primary2,
        margin: 3,
        opacity: 1,
        size: size,
      }}
      inactiveIndicatorConfig={{
        color: '#EFEFEF',
        margin: 3,
        opacity: 1,
        size: size,
      }}
      decreasingDots={[
        {
          config: {color: '#EFEFEF', margin: 3, opacity: 0.5, size: 6},
          quantity: 1,
        },
        {
          config: {color: '#EFEFEF', margin: 3, opacity: 0.5, size: 4},
          quantity: 1,
        },
      ]}
    />
  );
};
