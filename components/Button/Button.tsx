import {Button as AntButton, ButtonProps as AntButtonProps} from "antd"
import React from "react";

interface ButtonProps extends AntButtonProps {
  children: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  return (
    <AntButton {...props}>
      {props.children}
    </AntButton>
  )
}

export default Button