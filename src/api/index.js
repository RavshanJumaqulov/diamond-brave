import axios from "axios";

const getProducts = async () => {
  try {
    const data = await axios({
      method: "GET",
      url: "https://api.diamondbrave.uz/en/product/",
      timeout: 90000,
      headers: {
        Authorization: "Token f6cefd731a3d620d1a5a6f7e5a7e240e3a38f031",
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
      url: "https://api.diamondbrave.uz/en/category/",
      timeout: 90000,
      headers: {
        Authorization: "Token f6cefd731a3d620d1a5a6f7e5a7e240e3a38f031",
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
      url: `https://api.diamondbrave.uz/en/news/?page=${page}`,
      timeout: 90000,
      headers: {
        Authorization: "Token f6cefd731a3d620d1a5a6f7e5a7e240e3a38f031",
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
      url: `https://api.diamondbrave.uz/en/news/${id}/`,
      timeout: 90000,
      headers: {
        Authorization: "Token f6cefd731a3d620d1a5a6f7e5a7e240e3a38f031",
      },
    });
    return data;
  } catch (error) {
    return error;
  }
};

const getBestNews = async () => {
  try {
    const data = await axios({
      method: "GET",
      url: "https://api.diamondbrave.uz/en/manyreadnews/",
      timeout: 90000,
      headers: {
        Authorization: "Token f6cefd731a3d620d1a5a6f7e5a7e240e3a38f031",
      },
    });
    return data;
  } catch (error) {
    return error;
  }
};


const getBestNewsWithId = async (id) => {
  try {
    const data = await axios({
      method: "GET",
      url: `https://api.diamondbrave.uz/en/manyreadnews/${id}/`,
      timeout: 90000,
      headers: {
        Authorization: "Token f6cefd731a3d620d1a5a6f7e5a7e240e3a38f031",
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
      url: `https://api.diamondbrave.uz/en/news/${id}/`,
      timeout: 90000,
      data: { views: view + 1 },
      headers: {
        Authorization: "Token f6cefd731a3d620d1a5a6f7e5a7e240e3a38f031",
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
      url: `https://api.diamondbrave.uz/en/flayer?page=${page}`,
      timeout: 90000,
      headers: {
        Authorization: "Token f6cefd731a3d620d1a5a6f7e5a7e240e3a38f031",
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
  getBestNews,
  getBestNewsWithId,
  updateViews,
  getPhotoGalary,
};
