import React, {Component} from 'react';
import { Container, Header, Left, Body, Right, Title } from 'native-base';

type Props = {};
export default class List extends Component<Props> {
  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>リスト</Title>
          </Body>
          <Right />
        </Header>
      </Container>
    );
  }
}