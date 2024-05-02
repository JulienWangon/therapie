import instanceAxios from "../../_utils/axios";

export const fetchContactInfo = async () => {

    try {
      console.log("Making request to:", instanceAxios.defaults.baseURL + '/contact-info');

        const response = await instanceAxios.get('/contact-info');
       
        if (response.data.status === "success") {
          return response.data.data;  // Accès aux données de contact
      } 

    } catch (error) {

        throw(error);
    }
}