const products = [{
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

function existPhoto(element) {
    if (element.hasOwnProperty("photos") && element.photos.length > 0) {
        return true;
    } else {
        return false
    }
}

function sortingPrice(a, b) {
    if (a.price - b.price < 0) {
        return -1;
    } else return 1;

}

let itemWithPhoto = products.filter(existPhoto);
console.log(itemWithPhoto);
// itemWithPhoto.sort(sortingPrice);
// console.log(itemWithPhoto);
let sortedFromLowPriceToHigh = products.sort(sortingPrice);
console.log(sortedFromLowPriceToHigh);