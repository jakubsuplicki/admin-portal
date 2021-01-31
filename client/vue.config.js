module.exports = {
    "css": {
      "loaderOptions": {
        "sass": {
          "prependData": `
            @import "@/assets/styles/variables.scss";
            @import "@/assets/styles/mixins.scss";
            @import "@/assets/styles/main.scss";`,
        }
      }
    }
  }