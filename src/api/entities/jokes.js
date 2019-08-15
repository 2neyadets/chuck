import apiInstance from '../instance'

export default {

  getRandomJoke: async () => {
    try {
      return await apiInstance.get(`jokes/random`);
    } catch (e) {
      throw new Error(e);
    }
  }

}
