import { useEffect, useState } from "react";
import styled from "styled-components";
import {Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import { Link } from "react-router-dom";

function Popular() {

    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getPopular()
    },[])

    const getPopular = async () => {

        const check = localStorage.getItem('popular');

        if(check){
          setPopular(JSON.parse(check));
        } else{
          const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
          const data = await api.json();
          localStorage.setItem('popular', JSON.stringify(data.recipes));
          setPopular(data.recipes);
          console.log(data.recipes);
        }

        
    }

  return (
    <div>
            <Wrapper>
              <h3>Popular Picks</h3>
                {/* <p>{recipe.title}</p> */}
                <Splide options={{
                  perPage: 4,
                  drag: "free",
                  gap: "40px",
                  pagination: false,
                  arrows: false
                }}>
                {popular.map((recipe) => {
                  return (
                    <SplideSlide key={recipe.id}>
                    <Card>
                      <Link to={'/recipe/' + recipe.id}>
                        <p>{recipe.title}</p>
                        <img src={recipe.image} alt={recipe.title}/>
                      </Link>
                    </Card>
                    <Gradient/>
                    </SplideSlide>
                  );
                })}
                </Splide>
            </Wrapper>
        
      
    </div>
  )
}

const Wrapper = styled.div`
margin:50px 0px;

h3{
  padding-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
`;

const Card = styled.div`
min-height: 400px;
border-radius: 32px; 
overflow: hidden;
position: relative;

img{
  border-radius: 32px;
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

p{
  position: absolute;
  z-index: 10;
  left: 50%;
  bottom: 0%;
  transform: translate(-50%, 0%);
  color: white;
  width: 100%;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
}
`;

const Gradient = styled.div`
z-index: 3;
position: absoulte;
width: 100%;
height: 100%;
background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;
export default Popular
