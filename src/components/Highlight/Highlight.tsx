import React from 'react';
import styled from 'styled-components/native';

type Props = {
  title: string;
  subtitle: string;
};

const Highlight = ({ title, subtitle }: Props) => {
  return (
    <StyledContainer>
      <StyledTitle>{title} </StyledTitle>
      <StyledSubtitle>{subtitle}</StyledSubtitle>
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  width: 100%;
  margin: 32px 0;
`;

const StyledTitle = styled.Text`
  text-align: center;
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

const StyledSubtitle = styled.Text`
  text-align: center;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
`;

export default Highlight;
