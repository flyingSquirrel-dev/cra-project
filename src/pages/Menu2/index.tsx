import React, { FC } from 'react';
import CustomTextArea from '../../components/CustomTextArea';
import { customInputTypes } from '../../misc';
import { StyledWrapMenu2 } from './styled';

const Menu2: FC = () => (
  <StyledWrapMenu2>
    {customInputTypes.map((elem, index) => (
      <CustomTextArea
        key={`customInput-${index}`}
        isDisable={elem.isDisable}
        isReadOnly={elem.isReadOnly}
        isButtonNecessary={elem.isButtonNecessary}
        maxTextLength={elem.maxTextLength}
        buttonCtx={elem.buttonCtx}
        placeholder={elem.placeholder}
      />
    ))}
  </StyledWrapMenu2>
);

export default Menu2;
