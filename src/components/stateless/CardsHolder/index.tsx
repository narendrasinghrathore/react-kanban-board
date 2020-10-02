import React from "react";
import uid from "uid";
// models

import { ICard } from "../../../models/ICard";

import LazyLoadingComponent from "../../shared/LazyLoading/LazyLoading";

// lazy imports
const Card = React.lazy(() => import("../Card/Card"));

const CardsHolder = React.memo(() => {
  const list: ICard[] = [
    {
      id: uid(),
      name: "Todo",
    },
    {
      id: uid(),
      name: "In-Progress",
    },
  ];
  return (
    <article>
      {list.map((item) => {
        return (

          <LazyLoadingComponent key={item.name}>
            <Card card={item} key={item.name} />
          </LazyLoadingComponent>

        );
      })}
    </article>
  );
});

export default CardsHolder;
