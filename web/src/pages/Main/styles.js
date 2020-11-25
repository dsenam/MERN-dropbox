import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
      display: flex;
      width: 300px;
      flex-direction: column;
      align-items: center;

      svg {
        font-size: 100px;
        color: #120a8f;
        margin-bottom: 10px;
      }

      input {
        padding: 0 15px;
        width: 100%;
        height: 48px;
        border: 1px solid #ddd;
        border-radius: 5px;
        font-size: 16px
      }

      button {
        background-color: #120a8f;
        width: 100%;
        color: white;
        height: 48px;
        border-radius: 4px;
        font-size: 16px;
        padding: 0 20px;
        margin-top:10px;
        color: #fff;
        font-weight: bold;
      }
    }
`;
