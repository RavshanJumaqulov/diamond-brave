import axios from "axios";

const getProducts = async () => {
  try {
    const data = await axios({
      method: "GET",
      url: "https://nisbot.uz/en/product/",
      timeout: 30000,
      headers: {
        Authorization: "Token 71d9d155d63688c827e0b6e241d7788d45f97372",
      },
    });
    return data;
  } catch (error) {
    return error;
  }
};

const getCatalogs = async () => {
  try {
    const data = await axios({
      method: "GET",
      url: "https://nisbot.uz/en/category/",
      timeout: 30000,
      headers: {
        Authorization: "Token 71d9d155d63688c827e0b6e241d7788d45f97372",
      },
    });
    return data;
  } catch (error) {
    return error;
  }
};

const getNews = async (page) => {
  try {
    const data = await axios({
      method: "GET",
      url: `https://nisbot.uz/en/news/?page=${page}`,
      timeout: 30000,
      headers: {
        Authorization: "Token 71d9d155d63688c827e0b6e241d7788d45f97372",
      },
    });
    return data;
  } catch (error) {
    return error;
  }
};

const getNewsWithId = async (id) => {
  try {
    const data = await axios({
      method: "GET",
      url: `https://nisbot.uz/en/news/${id}/`,
      timeout: 30000,
      headers: {
        Authorization: "Token 71d9d155d63688c827e0b6e241d7788d45f97372",
      },
    });
    return data;
  } catch (error) {
    return error;
  }
};
const updateViews = async (id, view) => {
  try {
    const data = await axios({
      method: "PATCH",
      url: `https://nisbot.uz/en/news/${id}/`,
      timeout: 30000,
      data: { views: view + 1 },
      headers: {
        Authorization: "Token 71d9d155d63688c827e0b6e241d7788d45f97372",
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
const getPhotoGalary = async (page) => {
  try {
    const data = await axios({
      method: "GET",
      url: `https://nisbot.uz/en/flayer?page=${page}`,
      timeout: 30000,
      headers: {
        Authorization: "Token 71d9d155d63688c827e0b6e241d7788d45f97372",
      },
    });
    return data;
  } catch (error) {
    return error;
  }
};

export {
  getProducts,
  getCatalogs,
  getNews,
  getNewsWithId,
  updateViews,
  getPhotoGalary,
};
