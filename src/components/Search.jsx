import {useState} from 'react';
import styled from 'styled-components';
import {FaSearch} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';

function Search() {

  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate('/searched/' + input)
  }

  return (
    <FormStyle onChange={submitHandler}>
        <FaSearch></FaSearch>
        <input onChange={(e) => setInput(e.target.value)} type="text" value={input}/>
    </FormStyle>
  )
}

const FormStyle = styled.form`
display: flex;
justify-content: center;
align-items: center;
position: relative;
width: 100%;
input{
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    outline: none;
    border-radius: 16px;
    color: white;
    font-size: 24px;
    padding: 16px 48px;
    width: 50%;
}
svg{
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(2100%, -50%);
    color: white;
    margin-right: 10px;
}
`

export default Search
