import React from "react";
import { useNavigate } from "react-router-dom";
import { Icon, Input, Label, Menu, Radio } from "semantic-ui-react";

const Navbar = ({ carts, isDarkThemes, setIsDarkThemes }) => {
  const navigate = useNavigate();
  // const searchProduct = (input) => {
  //   console.log(input);
  // };
  return (
    <Menu fluid inverted={isDarkThemes}>
      <Menu.Item
        style={{ cursor: "pointer" }}
        onClick={() => {
          navigate("/");
        }}
      >
        <Icon style={{ cursor: "pointer" }} name="home"></Icon>
      </Menu.Item>
      <Menu.Item>
        <Input
          inverted={isDarkThemes}
          icon={<Icon name="search" inverted={isDarkThemes} circular link />}
          placeholder="Search..."
        />
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate("/cart");
          }}
        >
          <Icon name="shopping cart"></Icon>
          <Label>{carts ? carts.length : 0}</Label>
        </Menu.Item>

        <Menu.Item>
          <Icon name={"sun"} />
          <Radio
            toggle
            checked={isDarkThemes}
            onClick={() => {
              setIsDarkThemes(!isDarkThemes);
            }}
          ></Radio>
          <Icon name={"moon"} />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default Navbar;
