import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  padding-horizontal: 10px;
  padding-vertical: 4px;
  background-color: #FFFFFF;
  align-self: stretch;
`;

export const Avatar = styled.Image`
width: 55px;
height: 55px;
border-radius: 10px;
background-color: #D0D0D0;
margin-right: 11px;
`;

export const MainTextContainer = styled.View`
flex-shrink: 10;

`;

export const Title = styled.Text`
font-family: 'Avenir';
font-weight: 800;
font-size: 14px;
line-height: 19px;
margin-top: 5px;
margin-bottom: 7px;
color: #000000;
`;
export const Description = styled.Text`
font-family: 'Avenir';
font-weight: 400;
font-size: 12px;
line-height: 16px;
color: #000000;
`;

export const Chevron = styled.Image`
align-self: center;
position: absolute;
right: 0;
width: 8px;
height: 8px;
`;
