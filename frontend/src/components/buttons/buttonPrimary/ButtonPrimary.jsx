import { ButtonPrimaryStyled } from "./ButtonPrimary.styled";

export const ButtonPrimary = ({ buttonType, label, disabled }) => (
  <ButtonPrimaryStyled
    type={buttonType}
    disabled={disabled}
  >
    {label}
  </ButtonPrimaryStyled>
);