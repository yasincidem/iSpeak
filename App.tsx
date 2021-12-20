import React from 'react';
import { StatusBar } from 'react-native';
import styled from 'styled-components/native';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Router from './App.Router';

const StyledScreenContainer = styled(SafeAreaProvider)({
  flex: 1,
  backgroundColor: '#ffffff'
})

const App = () => {

  return (
    <StyledScreenContainer>
      <StatusBar />
      {Router}
    </StyledScreenContainer>
  );
};

export default App;