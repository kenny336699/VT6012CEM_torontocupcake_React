import React from "react";
import { Button } from "@/components/ui/button";
import productPackage from "@/assets/productPackage.png";
const ViewProduct = () => {
  return (
    <div className="flex flex-col items-center bg-white p-6 rounded-lg max-w-sm mx-auto">
      <img
        src={productPackage}
        alt="Toronto Cupcake boxes"
        className="w-full h-auto mb-4 rounded-md"
      />

      <Button>View Product</Button>
    </div>
  );
};

export default ViewProduct;
