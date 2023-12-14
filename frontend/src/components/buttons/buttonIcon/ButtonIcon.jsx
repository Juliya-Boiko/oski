import { ButtonIconStyled } from "./ButtonIcon.styled";
import { IoIosArrowForward } from "react-icons/io";

export const ButtonIcon = ({ label, disabled, onClick }) => {
  console.log(disabled);
  
  return (
    <ButtonIconStyled
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      <span>{label}</span>
      <IoIosArrowForward fill="inherit" />
    </ButtonIconStyled>
  )
};