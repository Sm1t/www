---
to: ./components/<%= name %>/<%= name %>.tsx
---
import React from "react";
import styles from "./<%= name %>.module.css";

type <%= name %>Props = {};

export const <%= name %>: React.FC<<%= name %>Props> = () => {
  return null;
};