import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles, GiChopsticks} from 'react-icons/gi';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

function Category() {
  return (
    <List>
      <SLink to={'/cuisine/Italian'}>
        <FaPizzaSlice/>
        <h3>Italian</h3>
      </SLink>
      <SLink to={'/cuisine/American'}>
        <FaHamburger/>
        <h3>American</h3>
      </SLink>
      <SLink to={'/cuisine/Thai'}>
        <GiNoodles/>
        <h3>Thai</h3>
      </SLink>
      <SLink to={'/cuisine/Chinese'}>
        <GiChopsticks/>
        <h3>Chinese</h3>
      </SLink>
    </List> 
  )
}

const List=styled.div`
display: flex;
justify-content: center;
margin: 32px 0;
`;

const SLink = styled(NavLink)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 50%;
margin-right: 16px;
text-decoration: none;
background: linear-gradient(35deg, #494949, #313131);
width: 96px;
height: 96px;
cursor: pointer;
transform: scale(0.8);
h3{
  color: white;
  font-size: 14px;
}
svg{
  color: white;
  font-size: 24px;
}
&.active{
  background: linear-gradient(to right, #4a4a8a, #559de6);
}
`

export default Category
