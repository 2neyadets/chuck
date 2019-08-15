import api from "../../api";

const state = {
    joke: {}
};

const getters = {
    joke: () => state.joke
};

const mutations = {
    setJoke(state, data) {
        state.joke = data;
    }
};

const actions = {
    async getJoke(store) {
        const res = await api.jokes.getRandomJoke();
        store.commit('setJoke', res.data);
    }
};

export default { state, getters, mutations, actions };
