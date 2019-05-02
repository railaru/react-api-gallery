import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

function CircularUnderLoad() {
  return <CircularProgress className='spinner' disableShrink />;
}

export default CircularUnderLoad;