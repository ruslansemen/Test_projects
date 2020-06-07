const goods = [{
    title: "Shirt",
    price: 150
}, {
    title: "Socks",
    price: 50
}, {
    title: "Jacket",
    price: 350
}, {
    title: "Shoes",
    price: 250
}];

const renderGoodsItem = (title, price) => {
    return `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`
};

// старый код из методички
// const renderGoodsList = (list) => {
//     let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
//     document.querySelector(".goods-list").innerHTML = goodsList;
//     console.log(goodsList); // для отладки - моя команда
// };

// новый код - убрал вывод запятых на экране после каждой позиции
const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price));

    for (let i = 0; i < goodsList.length; i++) {
        document.querySelector(".goods-list").innerHTML += goodsList[i];
    }

    console.log(goodsList); // для отладки - моя команда
};

renderGoodsList(goods);