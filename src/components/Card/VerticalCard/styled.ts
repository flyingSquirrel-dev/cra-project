import styled from 'styled-components';
import { defaultCoral } from '../../../baseStyled';
import { StyledThumbnailProps } from '../../../interfaces';

export const StyledVerticalCard = styled.li`
  display: inline-block;
  width: 15%;
  margin: 0.6rem 0 0 0.6rem;
  text-align: left;
  vertical-align: top;
  border-radius: 0.3rem;

  @media (min-width: 320px) and (max-width: 768px) and (orientation: portrait) {
    display: inline-flex;
    width: 50%;
    justify-content: flex-start;
    flex-direction: column;
    margin: 0;
    box-sizing: border-box;
  }

  @media (min-width: 320px) and (max-width: 812px) and (orientation: landscape) {
    width: 30%;
  }
`;

export const StyledThumbnail = styled.a<StyledThumbnailProps>`
  position: relative;
  display: block;
  width: 100%;
  padding-top: 100%;
  border: 1px solid #eee;
  overflow: hidden;
  
  &:before {
    position: absolute;
    top: 0;
    left: 0;
    content: " ";
    width: 100%;
    height: 100%;
    background-color: #e5e5e5;
  }
  
  &:after {
    position: absolute;
    left: 0;
    top: 0;
    content: " ";
    width: 100%;
    height: 100%;
    background: url("${(props) => props.thumbnail}") no-repeat;
    background-size: cover;
    background-position: center center;
  }
`;

export const StyledDescriptionArea = styled.div`
  padding: 1rem 0.5rem;
  border: 1px solid #eee;
  border-top: none;
`;

export const StyledLabel = styled.p`
  margin-bottom: 1rem;
  font-size: 12px;
  color: #7f7f7f;
`;

export const StyledTitle = styled.p`
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding: 0.1rem 0;
  font-weight: 400;
`;

export const StyledWrapHighLight = styled.div`
  margin-top: 1.5rem;
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding: 0.1rem 0;
`;

export const StyledHighLight = styled.span`
  color: ${defaultCoral};
`;

export const StyledCrossOut = styled.span`
  margin-left: 0.5rem;
  font-size: 12px;
  color: #b0b0b0;
  text-decoration: line-through;
`;

export const StyledWrapStarsAndDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 5rem;
  padding: 1rem 0.5rem;
  border: 1px solid #eee;
  border-top: none;
`;

export const StyledSubDescription = styled.div`
  width: 100%;
  margin-top: 0.5rem;
  padding: 0.1rem 0;
  font-size: 12px;
  white-space: nowrap;
  text-overflow: ellipsis;
  box-sizing: border-box;
  overflow: hidden;
`;
