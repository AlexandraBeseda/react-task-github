import React from 'react';
import styled, { css } from 'styled-components';
import { redirect } from '../../bll/redirect';

const Container = styled.div<{ bg: string }>`
  background-color: ${(props) => props.bg};
  border-radius: 5px;
`;
interface TitleProps {
  weight: 200 | 300 | 400 | 500 | 600 | 700;
}
const Title = styled.h1<TitleProps>`
  font-weight: ${({ weight = 200 }) => weight};
`;
interface TextProps {
  primary: boolean;
}
const fontStyles = css`
  line-height: 14px;
  font-weight: 700;
`;
const Text = styled.p<TextProps>`
  font-size: ${({ primary }) => (primary ? '12px' : '52px')};
  ${fontStyles}
`;

export const Profile: React.FC = () => {
  redirect();
  return (
    <Container bg="beige">
      <Title weight={700}>Styled Component</Title>
      <Text primary>Profile Component</Text>
    </Container>
  );
};
