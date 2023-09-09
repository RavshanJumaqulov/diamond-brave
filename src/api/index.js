import axios from "axios";

const getProducts = async () => {
  try {
    const data = await axios({
      method: "GET",
      url: "http://localhost:8000/products",
      timeout: 30000,
    });
    return data
  } catch (error) {
    console.log(error)
  }
};

export { getProducts };
