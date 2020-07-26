import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import CustomTextArea from './index';

afterEach(cleanup);

describe('<CustomTextArea />', () => {
  test('쓰기 가능한 <CustomTextArea /> 렌더가 잘 되는가?', () => {
    const placeholder = '초기값이 입력되어 있습니다.';
    const { getByTestId } = render(
      <CustomTextArea
        isDisable={false}
        isReadOnly={false}
        isButtonNecessary={true}
        maxTextLength={500}
        placeholder={placeholder}
      />,
    );

    expect(getByTestId('textarea').placeholder).toMatch(placeholder);
    expect(getByTestId('textarea').disabled).toBeFalsy();
    expect(getByTestId('textarea').readOnly).toBeFalsy();
  });

  test('disabled 속성으로 렌더가 잘 되는가?', () => {
    const placeholder = '비활성화 상태입니다.';
    const { getByTestId } = render(
      <CustomTextArea
        isDisable={true}
        isReadOnly={false}
        isButtonNecessary={false}
        maxTextLength={400}
        placeholder={placeholder}
      />,
    );

    expect(getByTestId('textarea').placeholder).toMatch(placeholder);
    expect(getByTestId('textarea').disabled).toBeTruthy();
    expect(getByTestId('textarea').readOnly).toBeFalsy();
  });

  test('readOnly속성으로 렌더가 잘 되는가?', () => {
    const placeholder = '읽기 전용 상태입니다.';
    const { getByTestId } = render(
      <CustomTextArea
        isDisable={false}
        isReadOnly={true}
        isButtonNecessary={false}
        maxTextLength={300}
        placeholder={placeholder}
      />,
    );

    expect(getByTestId('textarea').placeholder).toMatch(placeholder);
    expect(getByTestId('textarea').disabled).toBeFalsy();
    expect(getByTestId('textarea').readOnly).toBeTruthy();
  });
});

describe('쓰기 가능한 <CustomTextArea /> Testing', () => {
  test('초기값과 같은 상태에서는 save 버튼이 비활성화인가?', () => {
    const initContext = '초기값이 입력되어 있습니다.';
    const { getByTestId } = render(
      <CustomTextArea
        isDisable={false}
        isReadOnly={false}
        isButtonNecessary={true}
        buttonCtx={'Save'}
        maxTextLength={500}
        placeholder={initContext}
      />,
    );

    const textAreaContext = getByTestId('textarea');
    const saveButton = getByTestId('CustomTextArea-button');

    expect(textAreaContext.value).toMatch(initContext);
    expect(saveButton).toBeInTheDocument();
    expect(saveButton.disabled).toBeTruthy();

    // 초기값에서 다른 값으로 변경했을 때 save버튼 활성화되는가?
    const trialContext = '초기값을 바꿔봄!';

    fireEvent.change(textAreaContext, { target: { value: trialContext } });

    expect(textAreaContext.value).toMatch(trialContext);
    expect(saveButton.disabled).toBeFalsy();

    // 다시 원래 값으로 변경하면 save버튼 비활성화되는가?
    fireEvent.change(textAreaContext, { target: { value: initContext } });

    expect(textAreaContext.value).toMatch(initContext);
    expect(saveButton.disabled).toBeTruthy();
  });

  test('textarea 값 변경하고 save 버튼 클릭했을 때 저장되었다는 메시지가 떠야함', async () => {
    const initContext = '초기값이 입력되어 있습니다.';
    jest.spyOn(window, 'alert').mockImplementation(() => {});

    const { getByTestId } = render(
      <CustomTextArea
        isDisable={false}
        isReadOnly={false}
        isButtonNecessary={true}
        buttonCtx={'Save'}
        maxTextLength={500}
        placeholder={initContext}
      />,
    );

    const textAreaContext = getByTestId('textarea');
    const saveButton = getByTestId('CustomTextArea-button');

    // save 시도를 위해 value 변경
    const trialContext = '아주 아주 맛있는 초콜렛 아이스크림!';

    fireEvent.change(textAreaContext, { target: { value: trialContext } });
    fireEvent.click(saveButton);

    expect(getByTestId('resultOfSave').value).toMatch(JSON.stringify(true));
  });

  test('save 버튼이 비활성화된 상태에서 버튼 클릭시 저장되었다는 메시지가 뜨면 안됨', async () => {
    const initContext = '초기값이 입력되어 있습니다.';
    jest.spyOn(window, 'alert').mockImplementation(() => {});

    const { getByTestId } = render(
      <CustomTextArea
        isDisable={false}
        isReadOnly={false}
        isButtonNecessary={true}
        buttonCtx={'Save'}
        maxTextLength={500}
        placeholder={initContext}
      />,
    );

    const saveButton = getByTestId('CustomTextArea-button');

    fireEvent.click(saveButton);

    expect(saveButton.disabled).toBeTruthy();
    expect(getByTestId('resultOfSave').value).toMatch(JSON.stringify(false));
  });

  test('500자까지 입력이 가능한가?', async () => {
    const initContext = '초기값이 입력되어 있습니다.';
    jest.spyOn(window, 'alert').mockImplementation(() => {});

    const { getByTestId } = render(
      <CustomTextArea
        isDisable={false}
        isReadOnly={false}
        isButtonNecessary={true}
        buttonCtx={'Save'}
        maxTextLength={500}
        placeholder={initContext}
      />,
    );

    const textAreaContext = getByTestId('textarea');
    const saveButton = getByTestId('CustomTextArea-button');

    // save 시도를 위해 value 변경
    let trialContext = '';

    let i = 0;
    while (i < 500) {
      trialContext += '가';
      ++i;
    }

    fireEvent.change(textAreaContext, { target: { value: trialContext } });
    fireEvent.click(saveButton);

    expect(getByTestId('resultOfSave').value).toMatch(JSON.stringify(true));
  });

  test('501자는 save버튼 비활성화되어야하고, 저장 성공하면 안됨', async () => {
    const initContext = '초기값이 입력되어 있습니다.';
    jest.spyOn(window, 'alert').mockImplementation(() => {});

    const { getByTestId } = render(
      <CustomTextArea
        isDisable={false}
        isReadOnly={false}
        isButtonNecessary={true}
        buttonCtx={'Save'}
        maxTextLength={500}
        placeholder={initContext}
      />,
    );

    const textAreaContext = getByTestId('textarea');
    const saveButton = getByTestId('CustomTextArea-button');

    // save 시도를 위해 value 변경
    let trialContext = '';

    let i = 0;
    while (i < 501) {
      trialContext += '가';
      ++i;
    }

    fireEvent.change(textAreaContext, { target: { value: trialContext } });
    fireEvent.click(saveButton);

    expect(getByTestId('resultOfSave').value).toMatch(JSON.stringify(false));
  });
});
