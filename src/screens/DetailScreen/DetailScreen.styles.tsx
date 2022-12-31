import styled from 'styled-components/native';
import { Dimensions, ScrollView } from 'react-native';

const { width } = Dimensions.get('window');

export const Container = styled(ScrollView)`
flex: 1;
background-color: #f8f8f8;
`;

export const TitleContainer = styled.View`
background-color: #CFD6FF;
padding-top: 64px;
padding-horizontal: 20px;
padding-bottom: 16px;
`;

export const Title = styled.Text`
font-family: 'Avenir';
font-style: normal;
font-weight: 800;
font-size: 24px;

color: #000000;

`;
export const Body = styled.View`
padding-horizontal: 20px;
margin-bottom: 47px;
flex: 1;
`;

export const Picture = styled.Image`
width: ${width - 20 * 2}px;
height: ${width - 20 * 2}px;
border-radius: 10px;
background-color: white;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
margin-top: 20px;
`;

export const Label = styled.Text`
margin-top: 20px;
margin-bottom: 20px;
font-family: 'Avenir';
font-weight: 800;
font-size: 14px;
line-height: 19px;

color: #9B9898;

`;
export const Date = styled.Text`
font-family: 'Avenir';
font-weight: 800;
font-size: 16px;
line-height: 22px;
color: #000000;
`;

export const Points = styled.Text`
font-family: 'Avenir';
font-weight: 800;
font-size: 24px;
line-height: 33px;
color: #000000;
`;

export const Footer = styled.View`
position: absolute;
bottom: 40px;
left: 20px;
right: 20px;
`;
