import styled from 'styled-components';

const FooterWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333;
  border-bottom: green solid 0.4vh;
`;

FooterWrapper.LinksBar = styled.div`
  background-color: green;
  display: flex;
  justify-content: space-between;
  height: 50px;
  width: 132px;
  margin-bottom: -0.4vh;
`;

FooterWrapper.Icon = styled.a`
  margin: auto 16px;
`;

export default FooterWrapper;
