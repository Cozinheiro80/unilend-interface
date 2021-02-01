import { initStore } from "./store";

const configureCrrStore = () => {
  const actions = {
    LIST_CURRENCY: (curState: any, payload: any) => {
      return { currency: payload.updatedState };
    },
  };
  initStore(actions, {
    currency: [
      {
        id: 1,
        name: "eth",
        desc: "Ether",
      },
      {
        id: 2,
        name: "aave",
        desc: "aave",
      },
    ],
  });
};

export default configureCrrStore;
