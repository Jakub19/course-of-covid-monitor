import axios from "axios";

const API_URL = "http://localhost:8080/api/authenticate/";

const register = (Name, Surname, Password, Email, PhoneNumber, Address, City, PostalCode) => {
  return axios.post(API_URL + "register", {
    Name,
    Surname,
    Password,
    Email,
    PhoneNumber,
    Address,
    City,
    PostalCode
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  register,
  login,
  logout,
  getCurrentUser,
};