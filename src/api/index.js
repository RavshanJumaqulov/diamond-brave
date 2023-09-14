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
    return error
  }
};

const getCatalogs = async () => {
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
    return error
  }
};

const getNews = async (page) => {
  try {
    const data = await axios({
      method: "GET",
      url: `https://nisbot.uz/en/news/?page=${page}`,
      timeout: 30000,
      headers: {
        Authorization: 'Token 4813a5c55632002fdd65034cac3aaa198d417670'
      }
    });
    return data
  } catch (error) {
    return error
  }
};

const getNewsWithId = async (id) => {
  try {
    const data = await axios({
      method: "GET",
      url: `https://nisbot.uz/en/news/${id}/`,
      timeout: 30000,
      headers: {
        Authorization: 'Token 4813a5c55632002fdd65034cac3aaa198d417670'
      }
    });
    return data
  } catch (error) {
    return error
  }
};

export { getProducts, getCatalogs, getNews, getNewsWithId };
