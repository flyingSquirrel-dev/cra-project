import React, { FC, useEffect, useState } from 'react';
import { CustomInputTypesProps } from '../../interfaces';
import { StyledButton, StyledCustomTextArea, StyledWrapCustomTextArea } from './styled';
import { AVAILABLE_TEXTAREA, DISABLE_TEXTAREA, READONLY_TEXTAREA } from '../../misc';

const CustomTextArea: FC<CustomInputTypesProps> = React.memo(
  ({ isDisable, isReadOnly, isButtonNecessary, maxTextLength, buttonCtx, placeholder }) => {
    const [context, setContext] = useState<string | undefined>(placeholder);
    const [isButtonActive, setButtonActivity] = useState<boolean>(false);
    const [remainContextLength, setRemainContextLength] = useState<number>(0);

    useEffect(() => {
      if ((context?.length || 0) > maxTextLength) {
        alert(`최대 ${maxTextLength}자 까지만 입력할 수 있습니다.`);
      }
      setButtonActivity(placeholder !== context && (context?.length || 0) <= maxTextLength);
      setRemainContextLength(maxTextLength - (context?.length || 0));
    }, [context]);

    const handleSubmit = (): void => {
      return alert('저장했습니다.');
    };

    return (
      <StyledWrapCustomTextArea tabIndex={0}>
        <StyledCustomTextArea>
          <textarea
            rows={5}
            cols={50}
            disabled={isDisable}
            readOnly={isReadOnly}
            placeholder={placeholder}
            maxLength={maxTextLength}
            value={context}
            onChange={(e) => setContext(e.target.value)}
            tabIndex={0}
            aria-label={isDisable ? DISABLE_TEXTAREA : isReadOnly ? READONLY_TEXTAREA : AVAILABLE_TEXTAREA}
          />
          <span tabIndex={-1} aria-label={`현재 입력 가능한 남은 글자 수는 ${remainContextLength}자 입니다.`}>
            {remainContextLength}
          </span>
        </StyledCustomTextArea>
        {isButtonNecessary && (
          <StyledButton
            isButtonActive={isButtonActive}
            disabled={!isButtonActive}
            onClick={handleSubmit}
            aria-label={buttonCtx}
          >
            {buttonCtx}
          </StyledButton>
        )}
      </StyledWrapCustomTextArea>
    );
  },
);

export default CustomTextArea;
