import API from "./Rule_API";
// const formData = new FormData();
// formData.append("img", fileInput.files[0]);

export const propiedades = async () => {
  let url = "/api/propiedades";
  return await API.get(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      throw error.response.data.error || "Error precesando la solicitud";
    });
};

export const filtrarPropiedades = async (params) => {
  let url = "/api/propiedades/buscar";
  return await API.get(url, { params })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      throw error.response.data.error || "Error precesando la solicitud";
    });
};

export const nuevaPubli = async (propiedad) => {
  return await API.post("/api/propiedades/add", propiedad)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error.response.data.error;
    });
};

export const addFoto = async (formData) => {
  return await API.post("/api/propiedades/add/foto", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error.response.data.error;
    });
};

export const deleteProp = async (id) => {
  let url = "/api/propiedades/delete/" + id;
  return await API.delete(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      throw error.response.data.error || "Error precesando la solicitud";
    });
};

export const modify = async (params, id) => {
  console.log(params);
  let url = "/api/propiedades/editar/" + id;
  return await API.patch(url, params)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      throw error.response.data.error || "Error precesando la solicitud";
    });
};
