// const renderGoodsList = (list) => {
//         let goodsList = list.map(item => renderGoodsItem(item.title, item.price));

//         for (let i = 0; i < goodsList.length; i++) {
//             document.querySelector(".goods-list").innerHTML += goodsList[i];
//         }
//     }

let arr = [1, 2, 3, 4, 5];
let multyArr = arr.map(item => item * 2);
console.log(arr);
console.log(multyArr);