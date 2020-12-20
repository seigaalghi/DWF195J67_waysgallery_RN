import React from 'react';
import { View, Text, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';

const Home = () => {
  return (
    <Card>
      <Card.Title>HELLO WORLD</Card.Title>
      <Card.Divider />
      <Card.Image source={require('../images/assets.png')}></Card.Image>
      <Card.Title>Seiga</Card.Title>
    </Card>
  );
};

export default Home;
