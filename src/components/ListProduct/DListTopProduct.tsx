"use client";
import { Grid, useMediaQuery, useTheme } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';
import DProductCardType2 from './DProductCardType2';
import Carousel from './Carousel';

// =========================================================
type Props = {
  productsData: any[];
  title: string;
  id: string;
  desktopItem?: number;
  loading?: boolean;
  seeMoreLink?: string;
};
// =========================================================

const DListTopProduct: FC<Props> = ({
  productsData,
  title,
  id,
  desktopItem,
  seeMoreLink = '#',
  loading,
}) => {
  const width = 1800;
  const { palette, shadows, breakpoints } = useTheme();
  const [visibleSlides, setVisibleSlides] = useState(desktopItem || 4);
  const isMobile = useMediaQuery(breakpoints.down('sm'));
  useEffect(() => {
    if (width < 500) setVisibleSlides(2);
    else if (width < 650) setVisibleSlides(2);
    else if (width < 950) setVisibleSlides(desktopItem || 4);
    else setVisibleSlides(desktopItem || 4);
  }, [width, desktopItem]);

  const arrayLoading = new Array(visibleSlides);

  return (<Carousel
    infinite={true}
    visibleSlides={visibleSlides}
    totalSlides={productsData.length || 4}
    spacing={isMobile ? '0.5rem' : '1rem'}
    sx={{
      '& .carousel__slider': { paddingBottom: '15px' },
      '& #backArrowButton, #backForwardButton': {
        width: 35,
        height: 35,
        borderRadius: 35,
        boxShadow: shadows[2],
        color: '#F79009',
        background: '#FFF5E6',
        '&:hover': { background: '#FFE2B8' },
      },
    }}
  >
    {productsData.map((item, idx) => (
      <DProductCardType2 key={`${id}_${item.productId}_${idx}`} product={item} />
    ))}
  </Carousel>)
};

export default DListTopProduct;
