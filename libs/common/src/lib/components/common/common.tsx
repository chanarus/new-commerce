import React from 'react';

import './common.module.scss';

export interface CommonProps {
  title: string;
}

export function Common({ title }: CommonProps) {
  return (
    <div>
      <h1>Welcome to common! from {title}</h1>
    </div>
  );
}

export default Common;
