import api from "../api";

export const cardService = {
  async search(name: string): Promise<any> {
    try {
      const response = await api.get("/cardinfo.php", {
        params: {
          archetype: name,
        },
      });
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  },
};
