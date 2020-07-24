import React, { FC, useEffect, useState } from 'react';
import { CustomInputTypesProps } from '../../interfaces';
import { StyledButton, StyledCustomTextArea, StyledWrapCustomTextArea } from './styled';

const CustomTextArea: FC<CustomInputTypesProps> = React.memo(
  ({ isDisable, isReadOnly, isButtonNecessary, maxTextLength, buttonCtx, placeholder }) => {
    const [context, setContext] = useState<string | undefined>(placeholder);
    const [isButtonActive, setButtonActivity] = useState<boolean>(false);

    useEffect(() => {
      setButtonActivity(placeholder !== context);
    }, [context, placeholder]);

    const handleSubmit = (): null | void => {
      if (!isButtonActive) return null;
      return alert('저장했습니다.');
    };

    return (
      <StyledWrapCustomTextArea>
        <StyledCustomTextArea>
          <textarea
            disabled={isDisable}
            readOnly={isReadOnly}
            placeholder={placeholder}
            maxLength={maxTextLength}
            value={context}
            onChange={(e) => setContext(e.target.value)}
          />
          <span>{maxTextLength - (context?.length || 0)}</span>
        </StyledCustomTextArea>
        {isButtonNecessary && (
          <StyledButton isButtonActive={isButtonActive} onClick={handleSubmit}>
            {buttonCtx}
          </StyledButton>
        )}
      </StyledWrapCustomTextArea>
    );
  },
);

export default CustomTextArea;
