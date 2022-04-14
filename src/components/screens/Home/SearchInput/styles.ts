import styled from 'styled-components/native';

const Container = styled.View`
  flex-direction: row;
  align-items: center;

  margin-top: 16px;
  padding: 4px 8px;

  background: ${({ theme }) => theme.COLORS.WHITE};
  border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_GRAY};
  border-radius: 8px;
`;

const Input = styled.TextInput`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-left: 10px;
`;

export { Container, Input };
