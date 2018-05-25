import { Action, Reducer, createStore, Store, combineReducers, ReducersMapObject } from "redux";
enum actionTypes {
    ADD,
    SUBSTRACT
}

// interface
interface CalcAction extends Action {
    value: number
}

// delegate
const createAddAction: (value: number) => CalcAction = (value) => ({
    type: actionTypes.ADD,
    value
});

// delegate
const createSubstractAction: (value: number) => CalcAction = (value) => ({
    type: actionTypes.SUBSTRACT,
    value
})

interface AppState {
    sum: number,
    history: string[]
}

const sumReducer: Reducer<number> = (state: number = 0, action: CalcAction) => {
    switch (action.type) {
        case actionTypes.ADD:
            return state + action.value;
        case actionTypes.SUBSTRACT:
            return state - action.value;
        default:
            return state;
    }
};

const historyReducer: Reducer<string[]> = (state: string[] = [], action: CalcAction) => {

    switch (action.type) {
        case actionTypes.ADD:
            return state.concat(`op: add, value: ${action.value}`);
        case actionTypes.SUBSTRACT:
            return state.concat(`op: subtract, value: ${action.value}`);
        default:
            return state;
    }
};

const reducersMap: ReducersMapObject = {
    sum: sumReducer,
    history: historyReducer
}

// there would be less js if you use vanilla.js
// but strongly typed is awesome and TypeScript as well!
const appStore: Store<AppState> = createStore<AppState>(combineReducers<AppState>(reducersMap));

appStore.subscribe(() => {
    console.log("action was dispatched, state was reduced. ");
    console.log(appStore.getState());
});

appStore.dispatch(createAddAction(2));
appStore.dispatch(createSubstractAction(4));
appStore.dispatch(createAddAction(3));
appStore.dispatch(createSubstractAction(7));
appStore.dispatch(createAddAction(1));