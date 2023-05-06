'use client';

import { action } from './action';

const ButtonWithoutStartTransition = () => {
  return (
    <div>
      <button
        onClick={async () => {
          action();
        }}
      >
        click
      </button>
    </div>
  );
};

export default ButtonWithoutStartTransition;
