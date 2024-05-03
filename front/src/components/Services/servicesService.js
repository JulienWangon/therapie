import instanceAxios from "../../_utils/axios";

export const fetchServices = async () => {

  try {
      const response = await instanceAxios.get('/services')
      console.log(response.data.data);
      return response.data.data;
     
  } catch(error) {
      throw(error);
  }
}