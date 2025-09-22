import styled from '@emotion/styled';
import { useCounter } from './hooks/useCounter';

function App() {
  const {
    count,
    inputNumber,
    handleInputChange,
    handleIncrement,
    handleDecrement,
    handleUndo,
    handleRedo,
    canUndo,
    canRedo
  } = useCounter();

  return (
    <AppContainer>
      <HeaderContainer>
        <Title>This is React Counter</Title>
      </HeaderContainer>
      <CounterContainer>
        <NumberText>{count}</NumberText>
        <StyledInput value={inputNumber} onChange={handleInputChange} />
      </CounterContainer>
      <FooterContainer>
        <CircleButton onClick={handleUndo} disabled={!canUndo}>
          <ActionText>⇦</ActionText>
        </CircleButton>
        <CircleButton onClick={handleIncrement}>
          <ActionText>+</ActionText>
        </CircleButton>
        <CircleButton onClick={handleDecrement}>
          <ActionText>-</ActionText>
        </CircleButton>
        <CircleButton onClick={handleRedo} disabled={!canRedo}>
          <ActionText>⇨</ActionText>
        </CircleButton>
      </FooterContainer>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  background-color: #e2dddd;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: bold;
`;

const CounterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

const NumberText = styled.span`
  font-size: 80px;
  font-weight: bold;
  color: #02621d;
`;

const StyledInput = styled.input`
  width: 300px;
  height: 50px;
  border: 1px solid #02621d;
  border-radius: 12px;
  text-align: center;
  font-size: 32px;
`;

const FooterContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

const CircleButton = styled.button`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #464cf0;
  color: white;
  cursor: pointer;
  border: none;
  &:hover:not(:disabled) {
    background-color: #6f73e4;
  }
  &:active:not(:disabled) {
    background-color: #464cf0;
  }
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

const ActionText = styled.span`
  font-size: 24px;
  font-weight: bold;
`;
