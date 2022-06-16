import { createHelpers } from "vuex-map-fields";

export const customHelper = createHelpers({
  getterType: "getField",
  mutationType: "updateField",
});

// export default function () {
//   function getState(module, name) {
//     const { useState } = createNamespacedHelpers(module);
//     return useState([name]);
//   }
//   function getAction(module, name) {
//     const { useActions } = createNamespacedHelpers(module);
//     return useActions([name]);
//   }
//   return {
//     getState,
//     getAction,
//   };
// }
