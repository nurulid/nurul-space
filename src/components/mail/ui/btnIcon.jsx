import React from "react";
import { Tooltip } from "@nextui-org/react";

export const BtnIcon = ({ Icon, title }) => {
  return (
    <li className="cursor-pointer hover:opacity-80">
      <Tooltip content={title} delay={0} closeDelay={0}>
        <Icon />
      </Tooltip>
    </li>
  );
};
