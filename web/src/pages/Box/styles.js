import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  background-color: white;
  height: 100%;
  flex-direction: column;
  align-items: center;

  h1 {
      margin-top: 20px;
  }

  ul {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      
      li {
        border: 1px solid #ddd;
        margin: 10px;
        width: 60%;
        display: flex;
        justify-content: space-between;

        a {
            text-decoration: none;
            margin: 0 10px;
            color: #120a8f;
        }
        
        span {
            margin-right: 10px;
        }
      }
  }
`;
