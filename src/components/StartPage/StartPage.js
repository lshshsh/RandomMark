import React from 'react';
import styled from 'styled-components';

const StartPage = () => {
  return (
    <>
      <Center>내용</Center>
    </>
  );
};

export default StartPage;

const Center = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: 0.5s;
`;
