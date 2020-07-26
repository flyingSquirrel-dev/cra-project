import React, { FC } from 'react';
import { BaseWrap } from '../styled';

const NotFound: FC = () => (
  <BaseWrap data-testid="404-notfound">주소를 확인해주세요! 잘못된 접근입니다 {'\u{1F622}'}</BaseWrap>
);

export default NotFound;
