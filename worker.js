import * as R from "ramda";

globalThis.addEventListener("message", () => {
  globalThis.postMessage({ methods: Object.keys(R).length });
});
