import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import styled, { css } from 'styled-components/native';
import { UsersThree } from 'phosphor-react-native';

type Props = TouchableOpacityProps & {
  title: string;
};

const GroupCard = ({ title, ...rest }: Props) => {
  return (
    <StyledContainer {...rest}>
      <StyledIcon />
      <StyledTitle>{title}</StyledTitle>
    </StyledContainer>
  );
};

const StyledContainer = styled(TouchableOpacity)`
  width: 100%;
  height: 90px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  padding: 24px;
  margin-bottom: 12px;
`;

const StyledTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
`;

const StyledIcon = styled(UsersThree).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.GREEN_700,
  weight: 'fill'
}))`
  margin-right: 20px;
`;

export default GroupCard;
