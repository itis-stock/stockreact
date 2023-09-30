import React from 'react';
import ContentLoader from 'react-content-loader';
type SkeletonPropsType = {
  width: number;
  height: number;
  radius: number;
};
export default function Skeleton({ width, height, radius }: SkeletonPropsType) {
  return (
    <ContentLoader
      speed={2}
      width={width}
      height={height}
      viewBox={'0 0 ' + width + ' ' + height}
      backgroundColor="#1c1c1e"
      foregroundColor="#fff"
    >
      <rect x="0" y="0" rx={radius} ry={radius} width={width} height={height} />
    </ContentLoader>
  );
}
