import React from 'react';
import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

export const Container = styled(Animated.View)`
  background-color: #334FFA;
  border-radius: 10px;
  min-height: 50px;
  padding: 8px;
`;

export const Label = styled.Text`
font-family: 'Avenir';
font-weight: 800;
font-size: 16px;
line-height: 22px;
color: #FFFFFF;
`;

export const LabelWrapper = styled.View`
flex: 1;
align-self: stretch;
justify-content: center;
align-items: center;
`
