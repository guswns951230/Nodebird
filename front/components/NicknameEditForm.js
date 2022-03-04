import React, { useMemo } from 'react';
import { Input, Form } from 'antd';
import styled from 'styled-components';

const FormWrapper = styled(Form)`
  margin-bottom: 20px;
  border: 1px solid #d9d9d9;
  padding: 20px;
`

const NicknameEditForm = () => {
  // const style = useMemo(() => ({ marginBottom: '20px', border: '1px solid #d9d9d9', padding: '20px' }), []);
  return (
    <FormWrapper>
      <Input.Search addonBefore="Nickname" enterButton="수정" />
    </FormWrapper>
  )
};

export default NicknameEditForm;