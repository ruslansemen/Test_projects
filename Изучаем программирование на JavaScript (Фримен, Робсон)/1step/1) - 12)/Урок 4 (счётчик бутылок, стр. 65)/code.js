var word = 'bottles';
var count = 99;
while (count > 0) {
    if (count == 1) {
        console.log(count + ' ' + 'bottle' + ' of beer on the wall');
        console.log(count + ' ' + 'bottle' + ' of beer');
        console.log('Take one down, pass it around,');
        count = count - 1;
    } else {
        console.log(count + ' ' + word + ' of beer on the wall');
        console.log(count + ' ' + word + ' of beer');
        console.log('Take one down, pass it around,');
        count = count - 1;
    }
    if (count > 0) {
        if (count == 1) {
            console.log(count + ' ' + 'bottle' + ' of beer on the wall.');
        } else {
            console.log(count + ' ' + word + ' of beer on the wall.');
        }
    } else {
        console.log('No more ' + word + ' of beer on the wall.')
    }
}
