import { ButtonSecondaryStyled } from "./ButtonSecondary.styled";

export const ButtonSecondary = ({ buttonType, label, onClick, width }) => (
  <ButtonSecondaryStyled
    type={buttonType}
    onClick={onClick}
    $width={width}
  >
    {label}
  </ButtonSecondaryStyled>
);