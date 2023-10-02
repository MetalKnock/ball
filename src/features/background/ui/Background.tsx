import { Sprite } from '@pixi/react';
import { Resource, Texture } from 'pixi.js';

interface BackgroundProps {
  texture: Texture<Resource>;
}

export default function Background({ texture }: BackgroundProps) {
  return (
    <>
      <Sprite texture={texture} width={1600} height={900} x={0} y={0} />
    </>
  );
}
