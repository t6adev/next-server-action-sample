'use client';

import { action } from './action';

const ButtonWithoutStartTransition = () => {
  return (
    <div>
      <button
        onClick={async () => {
          action('from without startTransition');
        }}
      >
        click
      </button>
    </div>
  );
};

export default ButtonWithoutStartTransition;
