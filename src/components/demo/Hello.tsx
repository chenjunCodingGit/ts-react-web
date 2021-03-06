import React from "react";
import { Button } from "antd";

interface Greeting {
    name: string;
}

const Hello = (props: Greeting) => <Button type="primary">hello {props.name}</Button>;

export default Hello;

