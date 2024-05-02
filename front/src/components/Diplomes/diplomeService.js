import instanceAxios from "../../_utils/axios";

export const fetchDiplomes = async () => {

    try {
        const response = await instanceAxios.get('/diplomes')
        return response.data.data;
    } catch(error) {
        throw(error);
    }
}