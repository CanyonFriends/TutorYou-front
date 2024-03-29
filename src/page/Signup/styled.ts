import styled from '@emotion/styled';
import MaterialTextField from '@mui/material/TextField';
import MaterialInput from '@mui/material/Input';
import MaterialButton from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import MUIRadio from '@mui/material/Radio';

export const TextField = styled(MaterialTextField)`
  width: 500px;
  align: left;
  margin-top: 20px;
`;

export const Input = styled(MaterialInput)`
  width: 500px;
  font-size: 3rem;
  align: left;
  margin-top: 20px;
`;

export const MUIFormControlLabel = styled(FormControlLabel)`
  font-size: 2rem;
`;

export const Div = styled.div`
  text-align: center;
  margin-top: 2rem;
  justify: center;
`;

export const Aligndiv = styled.div`
  position: relative;
  margin: 0 auto !important;
  width: 500px !important;
`;

export const Label = styled.label`
  font-size: 2rem;
  font-weight: bold;
  position: absolute;
  top: 0;
  left: 0;
`;
export const CareerUl = styled.ul`
  position: relative;
`;

export const CareerDiv = styled.div``;

export const CareerItem = styled.li``;

export const Button = styled(MaterialButton)`
  width: 30rem;
  height: 4rem;
  color: white;
  font-size: 2rem;
`;

export const Radio = styled(MUIRadio)`
  font-size: 2rem;
`;
