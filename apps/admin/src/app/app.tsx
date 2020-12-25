import React from 'react';
import { Common } from '@new-commerce/common';

import styles from './app.module.scss';

export function App() {
  return (
    <div className={styles.app}>
      <Common title="Admin" />
    </div>
  );
}

export default App;
