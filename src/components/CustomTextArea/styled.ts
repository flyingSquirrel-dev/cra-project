import styled from 'styled-components';
import { defaultCoral } from '../../baseStyled';
import { StyledButtonProps } from '../../interfaces';

export const StyledWrapCustomTextArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  width: 40vw;
  margin: 1em 0;

  @media (min-width: 320px) and (max-width: 768px) and (orientation: portrait) {
    width: 90vw;
  }
`;

export const StyledCustomTextArea = styled.div`
  position: relative;
  width: 100%;
  flex: 1 1 100%;
  border: 1px solid #c0c0c0;
  border-radius: 0.3em;
  overflow: hidden;
  textarea {
    width: calc(100% + 20px);
    height: 100%;
    padding: 0.5em 4em 0.5em 0.5em;
    border: none;
    resize: none;
    &:focus {
      outline: none;
    }
    &:disabled {
      color: #cfcfcf;
    }
    &:read-only {
      outline: none;
    }
  }
  span {
    position: absolute;
    right: 0.3em;
    bottom: 0.3em;
    color: #9e9e9e;
  }
`;

export const StyledButton = styled.button<StyledButtonProps>`
  width: 8em;
  margin-left: 0.5em;
  background: ${(props) => (props.isButtonActive ? defaultCoral : '#eee')};
  color: #fff;
  border: none;
  border-radius: 0.3em;
  &:disabled {
    color: #cfcfcf;
  }
  &:focus {
    outline: none;
  }
  &:hover {
    opacity: ${(props) => (props.isButtonActive ? 0.7 : 1)};
  }
`;
