import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { CustomInputTypesProps } from '../../interfaces';
import { StyledButton, StyledCustomTextArea, StyledWrapCustomTextArea } from './styled';

const CustomTextArea: FC<CustomInputTypesProps> = React.memo(
  ({ isDisable, isReadOnly, isButtonNecessary, maxTextLength, buttonCtx, placeholder }) => {
    const [context, setContext] = useState<string | undefined>(placeholder);
    const [isButtonActive, setButtonActivity] = useState<boolean>(false);

    useEffect(() => {
      if ((context?.length || 0) > maxTextLength) {
        alert(`최대 ${maxTextLength}자 까지만 입력할 수 있습니다.`);
      }
      setButtonActivity(placeholder !== context && (context?.length || 0) <= maxTextLength);
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
            rows={5}
            cols={50}
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
