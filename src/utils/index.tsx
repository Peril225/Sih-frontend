import styled from "styled-components";
export const Styles = styled.div`
padding: 1rem;
width: 1200px;
// border-radius: 300px;
table {
  border-spacing: 0;
  border: 1px solid #999999;

  tr {
    :last-child {
      td {
        border-bottom: 0;
        // border-radius: 300px;
      }
    }
  }

  th,
  td {
    margin: 0;
    padding: 0.5rem;
    border-bottom: 1px solid #999999;
    border-right: 1px solid #999999;

    :last-child {
      border-right: 0;
    }
  }
}
`;