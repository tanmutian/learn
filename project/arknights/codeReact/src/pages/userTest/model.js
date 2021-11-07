export default {
    namespace: 'userTest',
    state: {
        userMain: {
            show: 'userTestShow',
        },
    },
    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
    },
    effects: {
        *getTopOrderDetail(action, { call, put, select }) {
            const { OrderNo } = yield select(state => state.user);
        },
    },
    subscriptions: {},
};