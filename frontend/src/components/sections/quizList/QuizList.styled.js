import styled from "styled-components";

export const QuizListSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const QuizListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const QuizListItem = styled.li`
  min-width: 150px;
  border-radius: 8px;
  padding: 24px;
  text-align: center;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.brand.cyanDark};
  background-color: ${({ theme, $active }) => $active ? 'rgba(255, 255, 255, 0.5)' : theme.colors.brand.white};
  box-shadow: ${({ $active }) => $active ? 'none' : '0px 22.898px 45.796px -11.449px rgba(52, 41, 39, 0.08)'};
  cursor: ${({ $active }) => $active ? 'not-allowed' : 'pointer'};
`;
