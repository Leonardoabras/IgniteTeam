import React from 'react';
import styled from 'styled-components/native';

import Header from '@/components/Header';
import Highlight from '@/components/Highlight';
import GroupCard from '@/components/GroupCard';

const Login = () => {
  return (
    <StyledView>
      <Header />
      <Highlight title='Turmas' subtitle='Jogue com a sua turma' />
      <GroupCard title='Nome da Turma' />
    </StyledView>
  );
};
const StyledView = styled.View`
  flex: 1;
  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

const StyledTitleText = styled.Text`
  color: #ffffff;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export default Login;
