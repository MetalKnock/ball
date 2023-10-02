import { ReactNode, useEffect, useState } from 'react';
import { fetchTodos } from '@/entities/todo/model/todoServices';
import { useAppDispatch } from '@/shared/lib/redux';
import { Assets, Resource, Sprite, Texture } from 'pixi.js';
import { setTexture } from '@/entities/pixi/model/pixiSlice';
import { PixiAssets } from '@/shared/constants/pixi';
import Image from 'next/image';
import spinner from '@/shared/assets/spinner.svg';
import ball from '@/shared/assets/ball.png';
import background from '@/shared/assets/background.jpg';
import platform from '@/shared/assets/platform.png';
import styles from './PreloadLayout.module.scss';

interface PreloadLayoutProps {
  children: ReactNode;
}

export default function PreloadLayout({ children }: PreloadLayoutProps) {
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();

  const loadAssets = async () => {
    const texture = await Assets.load<Texture<Resource>>(ball);

    dispatch(setTexture({ name: PixiAssets.BALL, texture }));
    const textureBackground = await Assets.load<Texture<Resource>>(background);
    dispatch(setTexture({ name: PixiAssets.BACKGROUND, texture: textureBackground }));
    const texturePlatform = await Assets.load<Texture<Resource>>(platform);
    dispatch(setTexture({ name: PixiAssets.PLATFORM, texture: texturePlatform }));
  };

  useEffect(() => {
    dispatch(fetchTodos());

    loadAssets();
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  if (loading) {
    return <Image className={styles.loader} src={spinner} alt='loader' />;
  }

  return <>{children}</>;
}
