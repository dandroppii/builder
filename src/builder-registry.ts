"use client";
import { Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import ListProduct from "./components/ListProduct/ListProduct";

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
      friendlyName: "initialCount5",
    },
  ],
});


Builder.registerComponent(ListProduct, {
  name: "ListProduct",
  inputs: [
    {
      name: "numberOfItems",
      type: "number",
      friendlyName: "Number of items to display",
    },
    {
      name: "pdpId",
      type: "string",
      friendlyName: "PDP ID",
    }
  ],
});
