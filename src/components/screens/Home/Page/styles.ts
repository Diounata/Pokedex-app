import styled from 'styled-components/native';

const PageContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  margin-top: 20px;
`;

const Button = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

const Text = styled.Text`
  font-size: 12px;
  color: #000;
  opacity: 0.7;
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  text-align: center;

  margin: 0 8px;
`;

export { PageContainer, Button, Text };
