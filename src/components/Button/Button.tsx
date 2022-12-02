import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import styled, { css } from 'styled-components/native';

type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = TouchableOpacityProps & {
  buttonTitle?: string;
  type?: ButtonTypeStyleProps;
};

const Button = ({ buttonTitle, type = 'PRIMARY', ...rest }: Props) => {
  return (
    <StyledContainer type={type} {...rest}>
      <StyledTitle>{buttonTitle}</StyledTitle>
    </StyledContainer>
  );
};

const StyledContainer = styled(TouchableOpacity)<Props>`
  flex: 1;
  min-height: 56px;
  max-height: 56px;

  background-color: ${({ theme, type }) =>
    type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};
  border-radius: 6px;
  justify-content: center;
  align-items: center;
`;

const StyledTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;

export default Button;
