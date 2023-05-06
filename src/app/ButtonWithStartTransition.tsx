'use client';

import { useTransition } from 'react';

import { action } from './action';

const ButtonWithStartTransition = () => {
  const [, startTransition] = useTransition();
  return (
    <div>
      <button onClick={() => startTransition(() => action())}>click</button>
    </div>
  );
};

export default ButtonWithStartTransition;
