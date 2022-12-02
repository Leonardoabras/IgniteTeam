import React from 'react';
import styled from 'styled-components/native';

type Props = {
  message: string;
};

const ListEmpty = ({ message }: Props) => {
  return (
    <StyledContainer>
      <StyledMessage>{message} </StyledMessage>
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const StyledMessage = styled.Text`
  text-align: center;

  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
`;

export default ListEmpty;
