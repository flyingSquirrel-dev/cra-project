import styled from 'styled-components';
import { StyledThumbnailProps } from '../../../interfaces';

export const StyledHorizonCard = styled.li`
  position: relative;
  display: inline-block;
  width: 30%;
  margin: 0.6em 0 0 0.6em;
  text-align: left;
  vertical-align: top;
  border-radius: 0.3em;

  @media (min-width: 320px) and (max-width: 768px) and (orientation: portrait) {
    width: 100%;
    margin: 0;
  }

  @media (min-width: 320px) and (max-width: 812px) and (orientation: landscape) {
    width: 50%;
  }
`;

export const StyledWrapThumbnail = styled.div`
  width: 35%;
  border: 1px solid #eee;
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

export const StyledContentArea = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  top: 0;
  right: 0;
  width: 65%;
  height: 100%;
  padding: 1em;
  box-sizing: border-box;
  border: 1px solid #eee;
  border-left: none;

  @media (min-width: 320px) and (max-width: 768px) and (orientation: portrait) {
    padding: 0.7em 0.8em;
  }
`;

export const StyledTitle = styled.div`
  width: 100%;
  min-height: 1em;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding: 0.1em 0;
  font-weight: bold;

  @media (min-width: 320px) and (max-width: 768px) and (orientation: portrait) {
    padding: 0.2em 0;
  }
`;

export const StyledDescription = styled.div`
  height: 2.2em;
  line-height: 1.2;
  word-break: break-all;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: #939393;
`;

export const StyledWrapStarsAndAuthor = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const StyledAuthor = styled.div`
  margin-left: 0.5em;
  padding-left: 0.5em;
  border-left: 2px solid #eee;
  color: #939393;
`;
