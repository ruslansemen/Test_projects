Vue.component("todo-item0", {
  template: "<li>Это одна задача в списке</li>",
});

Vue.component("todo-item1", {
  template: "<li>Это вторая задача в списке</li>",
});

Vue.component("todo-item2", {
  template: "<li>Это третья задача в списке</li>",
});

let app = new Vue({
  el: "#app",
  data: {
    name: "hgjhghj",
  },
});
