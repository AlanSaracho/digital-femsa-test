import React from "react";
import { Pressable, ViewStyle, View } from "react-native"
import { Container, Label, LabelWrapper } from "./Button.styles";

type Props = {
  onPress: () => void;
  children: string;
  style?: ViewStyle;
}

export const Button: React.FunctionComponent<Props> = ({ children, onPress, style }) => {
  return (
    <Container style={style}>
      <Pressable style={{ flex: 1 }} onPress={onPress}>
        <LabelWrapper>
          <Label>{children}</Label>
        </LabelWrapper>
      </Pressable>
    </Container>
  );
};
