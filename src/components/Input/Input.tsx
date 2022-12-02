import React from 'react';

import { TextInput, TextInputProps } from 'react-native';
import styled, { useTheme, css } from 'styled-components/native';

const Input = ({ ...rest }: TextInputProps) => {
  const { COLORS } = useTheme();
  return <StyledContainer {...rest} placeholderTextColor={COLORS.GRAY_300} />;
};

const StyledContainer = styled(TextInput)`
  flex: 1;
  padding: 16px;
  min-height: 56px;
  max-height: 56px;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_700};
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`;

export default Input;
