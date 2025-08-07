import React from "react";
import CardProduct from "../../components/card/card-product";
import { useGetProductsQuery } from "../../features/product/productSlice2";

export default function Product() {
  const { data, isLoading, isError } = useGetProductsQuery();

  return (
    <main className="max-w-screen-xl mx-auto">
      <section className="grid grid-cols-4 gap-5">
        {data?.map((p, index) => (
          <CardProduct key={index} thumbnail={p.images[0]} title={p.title} id={p.id} />
        ))}
      </section>
    </main>
  );
}
