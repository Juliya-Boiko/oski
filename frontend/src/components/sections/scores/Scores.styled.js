import styled from "styled-components";

export const ScoresSection = styled.section`
  width: 100%;
`;

export const ScoresList = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const ScoresItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 12px;
  &:first-child {
    text-align: center;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.grayScale.gray20};
  }
`;

export const ScoresName = styled.div`
  padding: 4px;
  flex-grow: 1;
  border-right: 1px solid ${({ theme }) => theme.colors.grayScale.gray20};
`;

export const ScoresAmount = styled.div`
  width: 50px;
  text-align: center;
  padding: 4px;
`;