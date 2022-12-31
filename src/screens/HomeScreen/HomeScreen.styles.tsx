import { StyleSheet } from 'react-native'
import Animated from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native'

import { Button as DSButton } from '../../ds';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #f8f8f8;
`

export const Title = styled.Text`
font-family: 'Avenir';
font-weight: 800;
font-size: 20px;
line-height: 27px;
`
export const Subtitle = styled.Text`
font-family: 'Avenir';
font-weight: 400;
font-size: 12px;
line-height: 16px;
`
export const Label = styled.Text`
font-family: 'Avenir';
font-weight: 800;
font-size: 14px;
line-height: 19px;
margin-vertical: 20px;

color: #9B9898;
`

export const PointsCard = styled.View`
background: #334FFA;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
border-radius: 20px;
margin-horizontal: 34px;
`
export const PointsCardLabel = styled.Text`
left: 19px;
top: 21px;
position: absolute;
font-family: 'Avenir';
font-weight: 800;
font-size: 16px;
line-height: 22px;
color: #FFFFFF;

`
export const Points = styled.Text`
font-family: 'Avenir';
font-weight: 800;
font-size: 32px;
line-height: 44px;
color: #FFFFFF;
align-self: center;
margin-vertical: 50px;
margin-horizontal: 50px;
`

export const Footer = styled.View`
position: absolute;
bottom: 0;
right: 0;
left: 0;
bottom: 20px;
margin-horizontal: 20px;
flex-direction: row;
align-selft: stretch;
`
export const Button = styled(DSButton)`
flex: 1;
`

export const Gap = styled.View`
width: 13px;
`

export const ItemPoints = styled.Text`
font-family: 'Avenir';
font-weight: 800;
font-size: 16px;
line-height: 22px;
align-self: center;
color: #000000;
flex: 1;
text-align: right;
flex-basis: 80px;
margin-left: 8px;
`
export const Positive = styled.Text`
color: #00B833;
`

export const Negative = styled.Text`
color: #FF0000;
`

export const AllButton = styled(DSButton)`
position: absolute;
bottom: 0;
right: 0;
left: 0;
bottom: 20px;
margin-horizontal: 20px;
flex-direction: row;
align-self: stretch;
flex: 1;
`

export const FloatingPoints = styled(Animated.View)`
position: absolute;
top: 24px;
background-color: #334FFA;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
border-radius: 20px;
padding-vertical: 8px;
padding-horizontal: 12px;
align-self: center;
elevation: 4;
`
export const FloatingPointsText = styled(Title)`
color: white;
`

export const styles = StyleSheet.create({
  firstItem: {
    paddingTop: 16,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  lastItem: {
    paddingBottom: 16,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    overflow: 'hidden',
    marginBottom: 120,
  },
  flatlist: {
    flex: 1,
    padding: 20,
  },
})