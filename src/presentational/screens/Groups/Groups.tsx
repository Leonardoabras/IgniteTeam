import React, { useState } from 'react';
import styled from 'styled-components/native';
import { FlatList } from 'react-native';

import Header from '@/components/Header';
import Highlight from '@/components/Highlight';
import GroupCard from '@/components/GroupCard';
import ListEmpty from '@/components/ListEmpty';
import Button from '@/components/Button';

const Groups = () => {
  const [groups, setGroups] = useState<string[]>([
    'Galera da iOasys',
    'Amigos',
    'Mentoria com o Brabo',
    'Grupo 2'
  ]);

  return (
    <StyledView>
      <Header />
      <Highlight title='Turmas' subtitle='Jogue com a sua turma' />

      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => <ListEmpty message='Que tal cadastrar a primeira turma?' />}
      />
      <Button buttonTitle='Criar nova turma' />
    </StyledView>
  );
};
const StyledView = styled.View`
  flex: 1;
  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export default Groups;
