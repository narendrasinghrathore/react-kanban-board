import React from "react";
import LazyLoadingComponent from "../../shared/LazyLoading/LazyLoading";

const CardsHolder = React.lazy(() => import("../../stateless/CardsHolder"));
export default function Dashboard() {
  return (
    <div>
      <LazyLoadingComponent>
        <CardsHolder />
      </LazyLoadingComponent>
    </div>
  );
}
