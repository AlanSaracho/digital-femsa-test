import React from "react"
import { Pressable, Image, ViewStyle } from "react-native"
import { Container, Avatar, MainTextContainer, Title, Description, Chevron } from "./ListItem.styles"

type Props = {
  title: string;
  description: string;
  onPress?: () => void;
  avatarSource: string;
  style?: ViewStyle | ViewStyle[];
  children?: React.ReactNode;
};

export const ListItem: React.FunctionComponent<Props> = ({
   children,
   title,
   description,
   onPress,
   avatarSource,
   style,
  }) => {
  return (
    <Pressable onPress={onPress}>
      <Container style={style}>
        <Avatar source={{ uri: avatarSource }} />
        <MainTextContainer>
          <Title children={title} ellipsizeMode="tail" numberOfLines={1} />
          <Description children={description} />
        </MainTextContainer>
        {children}
      </Container>
    </Pressable>
  )
}