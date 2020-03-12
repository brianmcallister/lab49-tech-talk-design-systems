import React from 'react';
// import { Button } from '@storybook/react/demo';
import { Button } from './Button';

export default { title: 'Base Components/Button' };

export const withText = () => <Button>Hello Button</Button>;

export const withEmoji = () => (
  <Button>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
