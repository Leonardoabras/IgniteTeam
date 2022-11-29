import React from 'react';
import styled from 'styled-components/native';

const Loading = () => {
  return (
    <StyledContainer>
      <LoadIndicator />
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

const LoadIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.GREEN_700
}))``;

export default Loading;
