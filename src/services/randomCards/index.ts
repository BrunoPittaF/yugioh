import api from '../api';


export const randomService = {
    async randomCard(): Promise<any>{
        try {
            const response = await api.get("/randomcard.php");
            return response;
        } catch (error) {
            return Promise.reject(error);
        }
    }
}