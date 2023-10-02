import { useLayoutEffect, useRef } from 'react';
import { PixiRef, Sprite, useApp } from '@pixi/react';
import { useAppDispatch } from '@/shared/lib/redux';
import { setNewCurrentTodo } from '@/entities/todo/model/todoSlice';
import { Resource, Texture } from 'pixi.js';
import gsap from 'gsap';

interface BallProps {
  texture: Texture<Resource>;
}

export default function Ball({ texture }: BallProps) {
  const ballRef = useRef<PixiRef<typeof Sprite> | null>(null);
  const ctx = useRef<gsap.Context | null>(null);
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    ctx.current = gsap.context(() => {});

    return () => ctx.current?.revert();
  }, []);

  const handleFlowerClick = () => {
    const ball = ballRef.current;
    if (ball && ball.y === 560) {
      ctx.current?.add(() => {
        const animation = gsap.timeline();

        const animationSteps = [
          {
            y: ball.y - 200,
            duration: 0.5,
            yoyo: true,
            repeat: 1,
            onComplete() {
              dispatch(setNewCurrentTodo());
            },
          },

          {
            y: ball.y - 100,
            duration: 0.4,
            yoyo: true,
            repeat: 1,
            onComplete() {
              dispatch(setNewCurrentTodo());
            },
          },
          {
            y: ball.y - 50,
            duration: 0.3,
            yoyo: true,
            repeat: 1,
            onComplete() {
              dispatch(setNewCurrentTodo());
            },
          },
        ];

        animationSteps.forEach((step) => {
          animation.to(ball, step);
        });
      });
    }
  };

  return (
    <>
      <Sprite
        texture={texture}
        scale={1 / 4}
        x={400}
        y={560}
        ref={ballRef}
        anchor={{ x: 0.5, y: 0.5 }}
        interactive={true}
        click={handleFlowerClick}
        cursor='pointer'
      />
    </>
  );
}
