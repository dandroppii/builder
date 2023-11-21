"use client";
import { Rating } from '@mui/material';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import { compose, spacing, styled, typography } from '@mui/system';

const BazaarRating = styled(Rating)(compose(spacing, typography));

BazaarRating.defaultProps = {
  fontSize: '10px',
  precision: 0.5,
  icon: <StarRoundedIcon sx={{fontSize: '20px'}}></StarRoundedIcon>,
  emptyIcon: <StarOutlineRoundedIcon sx={{fontSize: '20px'}}></StarOutlineRoundedIcon>,
};

export default BazaarRating;
