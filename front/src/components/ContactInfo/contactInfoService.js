import instanceAxios from "../../_utils/axios";

export const fetchContactInfo = async () => {

    try {
        const response = await instanceAxios.get('/contact-info');
        return response.data.data;       
    } catch (error) {
        throw(error);
    }
}