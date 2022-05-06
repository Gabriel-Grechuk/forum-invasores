import styled from 'styled-components';
import { CardContent } from '@mui/material';

export const BannerImage = styled.img`
  height: 100%;
  min-width: 400px !important;
  max-width: 400px !important;
  object-fit: cover;
`;

export const StyledCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`;

export const StyledCardDescription = styled(CardContent)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  align-items: center;
  overflow: hidden;
`;
