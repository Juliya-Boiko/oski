import {
  AuthPageContainerStyled,
  AuthPageContent,
  AuthPageTitle,
  AuthPageImage
} from "./AuthPageContainer.styled";

export const AuthPageContainer = ({ children }) => (
  <AuthPageContainerStyled>
    <AuthPageContent>
      <AuthPageTitle>welcome!</AuthPageTitle>
      {children}
    </AuthPageContent>
    <AuthPageImage />
  </AuthPageContainerStyled>
);