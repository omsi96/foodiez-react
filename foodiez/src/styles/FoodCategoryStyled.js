import styled from "styled-components";

const FoodCategoryCardStyled = styled.div`
  display: flex;
  width: 400px;
  height: 220px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  /* background-color: #00cecb; */
  margin: 10px;
  padding: 10px;
  text-decoration: none;
`;

export default FoodCategoryCardStyled;
