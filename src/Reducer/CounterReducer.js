export function counterReducer(state, action) {
  if (action.type == "incremented_age") {
    return {
      age: state.age + 1,
    };
  }
  throw Error("Unknown action");
}
