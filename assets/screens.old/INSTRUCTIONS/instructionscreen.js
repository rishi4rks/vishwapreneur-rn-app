import React, { Component } from 'react';
import {
  Container,
  Header,
  Content,
  H1,
  H2,
  H3,
  Text,
  ListItem,
  List,
} from 'native-base';
export default class InstructionsScreen extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <List>
            <ListItem>
              <Text>»Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
            </ListItem>
            <ListItem>
              <Text>»It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </Text>
            </ListItem>
            <ListItem>
              <Text>» It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
            </ListItem>
            <ListItem>
              <Text>»It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</Text>
            </ListItem>
            <ListItem>
              <Text>»The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</Text>
            </ListItem>
            <ListItem>
              <Text>»Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </Text>
            </ListItem>
            <ListItem>
              <Text>»Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
