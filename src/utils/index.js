import axios from "axios";

const url = "https://strapi-store-server.onrender.com/api";

export const customFetch = axios.create({
  baseURL: url,
});

export const formatPrice = price => {
  const formatter = new Intl.NumberFormat("ne-NP", {
    style: "currency",
    currency: "NPR",
  });

  return formatter.format(price);
};
