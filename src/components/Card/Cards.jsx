import React from "react";
import { Button, Grid, Header, Image, Segment } from "semantic-ui-react";

const Cards = ({ products, addCart, carts, isDarkThemes }) => {
  const addToCart = (product) => {
    const checkProduct = carts.filter((data) => data.id === product.id);
    if (checkProduct.length === 0) {
      addCart([
        ...carts,
        {
          id: product.id,
          image: product.image,
          title: product.title,
          price: product.price,
          category: product.category,
          quantity: 1,
        },
      ]);
    } else {
      const findProductIndex = carts.findIndex(
        (data) => data.id === product.id
      );
      carts[findProductIndex].quantity += 1;
      addCart(carts);
    }
  };
  return products.map((product, index) => {
    return (
      <Grid.Column mobile={16} tablet={8} computer={4} key={index}>
        <Segment as={Grid} inverted={isDarkThemes} padded>
          <Grid.Row>
            <Grid.Column width={16}>
              <Image
                style={{ height: "300px", width: "100%" }}
                src={product.image}
                centered
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row verticalAlign="bottom">
            <Grid.Column width={8}>
              <Header inverted={isDarkThemes} as={"h5"} textAlign="center">
                {product.title}
              </Header>
            </Grid.Column>
            <Grid.Column width={8} textAlign="right">
              <Header inverted={isDarkThemes} as="h4">
                ${product.price}
              </Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row verticalAlign="bottom">
            <Grid.Column width={16}>
              <Button
                fluid
                basic
                positive
                onClick={() => addToCart(product)}
                inverted={isDarkThemes}
              >
                Add to cart
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Segment>
      </Grid.Column>
    );
  });
};

export default Cards;
