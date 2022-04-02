import styled from 'styled-components/native';

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

const DataContainer = styled.View`
  padding: 10px 30px;
`;

const MiddleDataContainer = styled.View`
  padding: 10px 30px;

  border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_GRAY};
  border-top-color: #fff;
  border-bottom-color: #fff;
`;

const DataField = styled.View`
  flex-direction: row;
  align-items: center;
`;

const MovesText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: 10px;
  color: ${({ theme }) => theme.COLORS.DARK_GRAY};
`;

const Data = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: 10px;
  color: ${({ theme }) => theme.COLORS.DARK_GRAY};
  text-align: center;

  margin-top: 3px;
  margin-left: 10px;
`;

const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: 8px;
  color: ${({ theme }) => theme.COLORS.MEDIUM_GRAY};
  text-align: center;

  margin-top: 5px;
`;

export { Container, DataContainer, MiddleDataContainer, DataField, MovesText, Data, Title };
