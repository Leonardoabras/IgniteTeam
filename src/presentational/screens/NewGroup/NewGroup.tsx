import React from 'react';
import styled from 'styled-components/native';

import Header from '@/components/Header';

import { UsersThree } from 'phosphor-react-native';

import Highlight from '@/components/Highlight';
import Button from '@/components/Button';
import Input from '@/components/Input';

const NewGroup = () => {
  return (
    <StyledContainer>
      <Header showBackButton />
      <StyledContent>
        <StyledIcon />
        <Highlight title='Nova Turma' subtitle='crie uma turma para adicionar pessoas' />
        <Input placeholder='Nome da Turma' />
        <Button buttonTitle='Criar' style={{ marginTop: 20 }} />
      </StyledContent>
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 24px;
`;

const StyledContent = styled.View`
  flex: 1;
  justify-content: center;
`;

const StyledIcon = styled(UsersThree).attrs(({ theme }) => ({
  size: 56,
  color: theme.COLORS.GREEN_700
}))`
  align-self: center;
`;

export default NewGroup;
