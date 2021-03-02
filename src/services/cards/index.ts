import api from "../api";

export const cardService = {
  async search(archetype: string, cardName?: string): Promise<any> {
    try {
      const response = await api.get("/cardinfo.php", {
        params: {
          archetype: archetype,
          cardName: cardName,
        },
      });
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  },
};
