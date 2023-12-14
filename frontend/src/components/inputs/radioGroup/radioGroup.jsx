import {
  RadioGroupStyled,
  RadioGroupLabel,
  RadioGroupInput
} from "./RadioGroup.styled";

export const RadioGroup = ({ name, data }) => { 
  return (
    <RadioGroupStyled>
      {data.map((el) => {
        return (
          <RadioGroupLabel key={el}>
            <RadioGroupInput type="radio" name={name} value={el} />
            <span>{el}</span>
          </RadioGroupLabel>
        )
      })}
    </RadioGroupStyled>
  );
};