const initValues = {
  items: [
    {
      id: 1,
      provider: "Crown Genetics",
      title: "Crown og",
      price$: 30,
      weight: "1.75g"
    },
    {
      id: 2,
      provider: "Cali Connection Seeds",
      title: "King Louis XIII",
      price$: 20,
      weight: "1g"
    },
    {
      id: 3,
      provider: "Crown Genetics",
      title: "Crown og",
      price$: 30,
      weight: "1.75g"
    },
    {
      id: 4,
      provider: "Eden Extracts",
      title: "Underdawg og",
      price$: 30,
      weight: "0.5g"
    },
    {
      id: 5,
      provider: "MR. Sherbinski",
      title: "Acai berry gelato",
      price$: 60,
      weight: "3.5g"
    }
  ]
};

// only for test purpose store products in redux.
export default function cartReducer(state = initValues, action) {
  switch (action.type) {
    default:
      return state;
  }
}
