"use client";
import { Box, Chip, styled } from '@mui/material';
import BazaarCard from './BazaarCard';
import BazaarRating from './BazaarRating';
import LazyImage from './LazyImage';
import { H3, Span } from './Typography';
import Link from 'next/link';
import { FC } from 'react';
import FlexBox from './FlexBox';
import { formatCurrency } from './utils';

const StyledBazaarCard = styled(BazaarCard)(({ theme }: { theme: any }) => ({
  height: '100%',
  margin: 'auto',
  display: 'flex',
  overflow: 'hidden',
  borderRadius: '8px',
  position: 'relative',
  flexDirection: 'column',
  // justifyContent: 'space-between',
  transition: 'all 250ms ease-in-out',
  '&:hover': {
    boxShadow: theme.shadows[2],
    // "& .controller": { display: "flex", bottom: 20 },
  },
}));

const ImageWrapper = styled(Box)(({ theme }: { theme: any }) => ({
  overflow: 'hidden',
  textAlign: 'center',
  position: 'relative',
  padding: 0,
  background: '#efefef',
  display: 'inline-block',
  [theme.breakpoints.down('sm')]: { display: 'block' },
}));
const Wrapper = styled(Box)(() => ({
  width: '100%',
  overflow: 'hidden',
  position: 'relative',
  height: '100%',
  zIndex: 1,
}));
const ContentWrapper = styled(Box)(() => ({
  minHeight: 110,
  padding: '1rem 0.5rem',
  '.title, .categories': {
    '-webkit-line-clamp': '2',
    overflow: 'hidden',
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
  },
}));

const StyledChip = styled(Chip)(() => ({
  zIndex: 11,
  top: '15px',
  left: '15px',
  paddingLeft: 3,
  paddingRight: 3,
  fontWeight: 600,
  fontSize: '10px',
  position: 'absolute',
}));

const StyledChipOutOfStock = styled(Chip)(() => ({
  zIndex: 11,
  width: '100%',
  borderRadius: 0,
  transform: 'rotate(-45deg)',
  left: 'calc(-50% + 25px)',
  top: '10px',
  height: '30px',
  fontWeight: 600,
  fontSize: '10px',
  position: 'absolute',
  backgroundColor: '#F79009c7',
}));

// ===============================================================
type DProductCardType2Props = {
  product: any;
  hoverEffect?: boolean;
  hideRating?: boolean;
};
// ===============================================================

const DProductCardType2: FC<DProductCardType2Props> = props => {
  const { hoverEffect, product } = props;
  const {
    productId,
    name,
    minPrice,
    imageUrl,
    isNew,
    // totalSold,
    productType,
    outOfStock,
    avgRating,
    totalRating,
    slug,
  } = product;


  return (
    <Wrapper>
      <StyledBazaarCard hoverEffect={hoverEffect}>
        <ImageWrapper>
  
         
          
            <a href={`/product/${slug}?id=${productId}&type=${productType}`}>
              <LazyImage
                alt={name}
                width={190}
                src={imageUrl}
                height={190}
                layout="responsive"
                objectFit="contain"
              />
            </a>
          
        </ImageWrapper>

        <ContentWrapper>
          <FlexBox>
            <Box flex="1 1 0" minWidth="0px" mr={1}>
              <Box minHeight={50}>
                
                  <a href={`/product/${slug}?id=${productId}&type=${productType}`}>
                    <H3
                      mb={1}
                      title={name}
                      fontSize="14px"
                      textAlign="left"
                      fontWeight="600"
                      className="title"
                      color="text.secondary"
                    >
                      {name}
                    </H3>
                  </a>
                
              </Box>

              <FlexBox gap={1} alignItems="center" mt={0.5}>
                <Box fontWeight={600} color="primary.main">
                  {formatCurrency(minPrice)}
                </Box>
              </FlexBox>

              {avgRating ? (
                <FlexBox gap={1} alignItems="center">
                  <BazaarRating value={avgRating} color="warn" readOnly />
                  <Span color="grey.600" fontSize="14px">{`(${totalRating})`}</Span>
                </FlexBox>
              ) : (
                <></>
              )}

            </Box>

            
          </FlexBox>
        
        </ContentWrapper>
      </StyledBazaarCard>
    </Wrapper>
  );
};

export default DProductCardType2;
