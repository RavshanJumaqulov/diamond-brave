import axios from "axios";

const getProducts = async () => {
  try {
    const data = await axios({
      method: "GET",
      url: "https://nisbot.uz/en/product/",
      timeout: 30000,
      headers: {
        Authorization: 'Token 4813a5c55632002fdd65034cac3aaa198d417670'
      }
    });
    return data
  } catch (error) {
    console.log(error)
  }
};

const getCatalog = async () => {
  try {
    const data = await axios({
      method: "GET",
      url: "https://nisbot.uz/en/category/",
      timeout: 30000,
      headers: {
        Authorization: 'Token 4813a5c55632002fdd65034cac3aaa198d417670'
      }
    });
    return data
  } catch (error) {
    console.log(error)
  }
};

export { getProducts, getCatalog };
