import { createNamespacedHelpers } from "vuex-composition-helpers/dist";

export default function () {
  function getState(module, name) {
    const { useState } = createNamespacedHelpers(module);
    return useState([name]);
  }
  function getAction(module, name) {
    const { useActions } = createNamespacedHelpers(module);
    return useActions([name]);
  }
  function getMutations(module, name) {
    const { useMutations } = createNamespacedHelpers(module);
    return useMutations([name]);
  }
  function getGetters(module, name) {
    const { useGetters } = createNamespacedHelpers(module);
    return useGetters([name]);
  }
  return {
    getState,
    getAction,
    getMutations,
    getGetters,
  };
}
