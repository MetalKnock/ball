import { Sprite } from '@pixi/react';
import { Resource, Texture } from 'pixi.js';

interface PlatformProps {
  texture: Texture<Resource>;
}

export default function Platform({ texture }: PlatformProps) {
  return (
    <>
      <Sprite texture={texture} width={450} height={300} scale={0.5} x={270} y={570} />
    </>
  );
}
