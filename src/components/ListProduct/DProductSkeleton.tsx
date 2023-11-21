"use client";
import { Skeleton, Stack } from '@mui/material';

import { FC } from 'react';

const DProductSkeleton: FC<any> = () => {
  return (
    <Stack
      spacing={1}
      sx={{
        backgroundColor: 'rgba(255,255,255,0.5)',
        padding: '1rem',
        borderRadius: '15px',
      }}
    >
      <Skeleton variant="rectangular" width={'100%'} height={200} sx={{ borderRadius: '15px' }} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rounded" width={'90%'} height={60} />
    </Stack>
  );
};

export default DProductSkeleton;
