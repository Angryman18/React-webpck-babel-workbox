const { Workbox } = require("workbox-window");

const registerServiceWorker = () => {
  if (process.env.NODE_ENV === "development") {
    return;
  }
  if ("serviceWorker" in navigator) {
    const wb = new Workbox("./sw.js");
    wb.addEventListener("installed", (event) => {
      if (event.isUpdate) {
        window.location.reload();
      }
    });
    wb.register();
  }
};

export default registerServiceWorker;
