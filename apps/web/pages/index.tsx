import React from 'react';
import { Common } from '@new-commerce/common';

import styles from './index.module.scss';

export function Index() {
  return (
    <div className={styles.page}>
      <Common title="Web" />
    </div>
  );
}

export default Index;
