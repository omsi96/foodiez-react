import styled from "styled-components";

const FoodCategoryCardStyled = styled.div`
  width: 400px;
  height: 220px;
  background-image: url(${(props) => props.image});
  /* background-color: #00cecb; */
  margin: 10px; ;
`;

export default FoodCategoryCardStyled;
