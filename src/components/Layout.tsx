import styled from "@emotion/styled";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 360px;
  @media (min-width: 1440px) {
    max-width: 1400px;
  } ;
`;
export default Layout;
