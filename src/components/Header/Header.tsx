import React from 'react';
import styled from 'styled-components/native';

import { CaretLeft } from 'phosphor-react-native';

import logoImg from '@/assets/logo.png';

type Props = {
  showBackButton?: boolean;
};

const Header = ({ showBackButton = false }: Props) => {
  return (
    <StyledContainer>
      {showBackButton && (
        <StyledBackButton>
          <StyledBackIcon />
        </StyledBackButton>
      )}
      <StyledLogo source={logoImg} />
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const StyledLogo = styled.Image`
  width: 46px;
  height: 55px;
`;

const StyledBackButton = styled.TouchableOpacity`
  flex: 1;
`;

const StyledBackIcon = styled(CaretLeft).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.WHITE
}))``;

export default Header;
