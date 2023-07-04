import styled from "styled-components";

export const SectionContianer = styled.section`
  background-color: #fff;
  width: 100%;
  box-shadow: 0 0 4px 0 #d7d3d312;
  margin-bottom: 10px;
`;

export const SectionTitle = styled.h2`
  padding: 20px 20px 20px 0;
  margin: 0;
`;

export const SectionHeader = styled.header`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;
  grid-gap: 20px;
  border-bottom: 2px solid ${({ theme }) => theme.color.Seashell};
  padding: 0 20px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;
