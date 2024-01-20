import { useState } from "react";
import { useLoaderData } from "react-router-dom";

import { formatPrice, generateAmountOptions } from "../../utils";

const Description = () => {
  const { product } = useLoaderData();
  const { image, title, price, description, colors, company } =
    product.attributes;

  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  return (
    <section className="grid gap-8 lg:grid-cols-2 mt-8">
      <img
        src={image}
        alt={title}
        className="w-96 h-96 object-cover rounded-lg lg:w-full"
      />

      <div>
        <h1 className="capitalize text-3xl font-bold">{title}</h1>
        <h4 className="text-xl font-semibold mt-2 mb-4">{company}</h4>
        <p className="text-xl text-accent">{formatPrice(price)}</p>

        <p className="my-6">{description}</p>

        <div>
          <h4 className="text-md font-medium">Colors</h4>
          <div className="mt-2 space-x-2">
            {colors.map(color => {
              return (
                <button
                  key={color}
                  type="button"
                  style={{ backgroundColor: color }}
                  className={`w-6 h-6 badge ${
                    color === productColor && "border-2 border-gray-200"
                  }`}
                  onClick={() => setProductColor(color)}
                ></button>
              );
            })}
          </div>
        </div>

        <div className="form-control w-full max-w-xs my-6">
          <label htmlFor="amount" className="label">
            <h4 className="text-md font-medium">Amount</h4>
          </label>
          <select
            name="amount"
            className="select select-secondary select-bordered"
            value={amount}
            onChange={e => setAmount(Number(e.target.value))}
          >
            {generateAmountOptions(9)}
          </select>
        </div>

        <button className="btn btn-secondary">Add to bag</button>
      </div>
    </section>
  );
};

export default Description;
