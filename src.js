const worker = new Worker(new URL("./worker", import.meta.url), {
  name: "worker",
});

const runInWorker = () =>
  new Promise((resolve) => {
    worker.postMessage({ task: "task" });

    worker.addEventListener("message", () => resolve(), { once: true });
  });

export default runInWorker;
