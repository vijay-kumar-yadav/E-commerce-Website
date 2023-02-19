import React from "react";
import { Icon, Image, Label, List } from "semantic-ui-react";

const Carts = ({ carts, isDarkThemes, addCart, incCarts, decCarts }) => {
  console.log("hello");
  return carts.length === 0 ? (
    "No item in cart"
  ) : (
    <List divided verticalAlign="middle">
      {carts.map((cart) => (
        <List.Item key={cart.id}>
          <Image avatar src={cart.image} />
          <List.Content>
            <List.Header>{cart.title}</List.Header>
            <List.Description>{cart.category}</List.Description>
          </List.Content>
          <List.Content floated="right">
            <Icon name="add" onClick={() => incCarts(cart)} />
            <Label>{cart.quantity}</Label>
            <Icon name="minus" onClick={() => decCarts(cart)} />
          </List.Content>
        </List.Item>
      ))}
    </List>
  );
};

export default Carts;
