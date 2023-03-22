import API from "./Rule_API";

export const login = async (usuario) => {
  console.log("login", usuario);
  return await API.post("/auth/login", usuario)
    .then((response) => {
      localStorage.setItem("token", response.data.token);
      return response.data;
    })
    .catch((error) => {
      throw error.response.data.error;
    });
};

export const registerUser = async (usuario) => {
  return await API.post("/auth/register", usuario)
    .then((response) => {
      console.log(usuario);
      return response.data;
    })
    .catch((error) => {
      throw error.response.data.error;
    });
};
