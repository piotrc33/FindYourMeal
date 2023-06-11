import * as React from 'react';

import ScreensContainer from './app/components/ScreensContainer';
import setupDatabase from './app/utils/database';

export default function App() {
  React.useEffect(() => {
    setupDatabase();
  }, [])

  return (
    <ScreensContainer />
  )
}
