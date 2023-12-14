import styled from "styled-components";
import bgiUrl from "../../assets/thumbs/logo.svg";

export const LogoStyled = styled.div`
  width: ${({ $size }) => $size ? $size : '100px'};
  height: ${({ $size }) => $size ? $size : '100px'};
  background-image: url(${bgiUrl});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;