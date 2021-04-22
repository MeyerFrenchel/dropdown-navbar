import React from 'react';

import styled from 'styled-components';

const Button = styled.button`
background-color: salmon;
width:120px;
height: 50px;
border:none;
border-radius: 10px;
color: white;
text-align:center;
text-decoration:none;
display:inline-block;
font-size: 1rem;
margin-top:5px;
`

export function TestButton({ children, className, type, onClick }) {
  return (
    
      <Button className={className} type={type} onClick={onClick}>
        { children }
      </Button>
    
  );
}
