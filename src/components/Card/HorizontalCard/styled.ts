import styled from 'styled-components';

interface StyledThumnailProps {
  thumbnail: string;
}

export const StyledHorizontalCard = styled.div`
  width: 20%;
  border: 1px solid #eee;
  border-radius: 0.2em;
`;

export const StyledThumbnail = styled.a<StyledThumnailProps>`
  display: block;
  background: url("${(props) => props.thumbnail}") no-repeat;
  background-size: cover;
  background-position: center center;
  width: 200px;
  height: 200px;
  overflow: hidden;
`;

export const StyledDescriptionArea = styled.div``;
