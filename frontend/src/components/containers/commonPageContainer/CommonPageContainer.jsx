import { CommonPageContainerStyled, CommonPageTitle } from "./CommonPageContainer.styled";

export const CommonPageContainer = ({ title, children }) => (
  <CommonPageContainerStyled>
    <CommonPageTitle>{title}</CommonPageTitle>
    {children}
  </CommonPageContainerStyled>
);