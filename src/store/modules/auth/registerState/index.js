const state = {
    stepOneToken: null,
    stepTwoToken: null,
    stepThreeToken: null,
}
const getters = {
    isStepOne: state => !!state.stepOneToken,
    isStepTwo: state => !!state.stepTwoToken,
    isStepThree: state => !!state.stepThreeToken,
}

const actions = {
    stepOne({ commit }) {
        commit('setStepOne', 'true')
    },
    stepTwo({ commit }) {
        commit('setStepTwo', 'true')
    },
    stepThree({ commit }) {
        commit('setStepThree', 'true')
    },
}

// mutations
const mutations = {
    setStepOne(state, stepOneToken) {
        state.stepOneToken = stepOneToken
    },
    setStepTwo(state, stepTwoToken) {
        state.stepTwoToken = stepTwoToken
    },
    setStepThree(state, stepThreeToken) {
        state.stepThreeToken = stepThreeToken
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}