export default {
    namespace: 'common',
    state: {
        commonMain: {
            show: 'commonShow',
        },
    },
    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
    },
    effects: {},
    subscriptions: {},
};
