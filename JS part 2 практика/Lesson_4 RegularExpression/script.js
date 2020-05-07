const API_URL =
  "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";

function makeGETRequest(url, callback) {
  var promise = new Promise((resolve) => {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        console.log(xhr.responseType);
        console.log(xhr.response);
        var resp = xhr.responseText;
        console.log(resp);
        resolve(resp);
      }
    };
    xhr.open("GET", url, true);
    xhr.send();
  });
  promise.then(callback);
}

class GoodsItem {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }
  render() {
    return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p></div>`;
  }
}

class GoodsList {
  constructor() {
    this.goods = [];
    this.filteredGoods = [];
  }
  fetchGoods(cb) {
    makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
      this.goods = JSON.parse(goods);
      this.filteredGoods = JSON.parse(goods);
      cb();
      this.sumPrises();
    });
  }
  render() {
    let listHtml = "";
    this.filteredGoods.forEach((good) => {
      const goodItem = new GoodsItem(good.product_name, good.price);
      listHtml += goodItem.render();
    });
    document.querySelector(".goods-list").innerHTML = listHtml;
  }
  // ДЗ по методичке 2
  sumPrises() {
    let summ = 0;
    this.goods.forEach((good) => {
      summ += good.price;
    });
    console.log(summ);
  }

  filterGoods(value) {
    const regexp = new RegExp(value, "i");
    this.filteredGoods = this.goods.filter((good) =>
      regexp.test(good.product_name)
    );
    this.render();
  }
}

// мои 2 строки:
let searchButton = document.getElementsByClassName("search-button")[0];
let searchInput = document.getElementsByClassName("goods-search")[0];

searchButton.addEventListener("click", (e) => {
  const value = searchInput.value;
  list.filterGoods(value);
});

// ------------------
class Basket {
  constructor() {}
}

class ItemOfBasket {
  constructor() {}
}
// ---------------------------
const list = new GoodsList();

list.fetchGoods(() => {
  list.render();
});

// list.sumPrises();
//----------------------------------------------
