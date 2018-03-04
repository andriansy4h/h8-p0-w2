LOOPING

1. Looping WHILE
var i = 2; // looping pertama
var j = 20; // looping kedua

Looping pertama
console.log('looping pertama')
while(i <= 20){
    console.log(i + ' - I love coding')
    i += 2;
}

Looping kedua
console.log('looping kedua')
while(j >= 1){
    console.log(j + ' - I will become a fullstack developer')
    j -= 2;
}

2. Looping FOR

looping pertama
console.log('looping pertama')
for (ii = 1; ii <= 20; ii++){
    console.log(ii + ' - I love coding')
}

looping kedua
console.log('looping kedua')
for (jj = 20; jj >= 1; jj--){
    console.log(jj + ' - I will become a fullstack developer')
}

3. Angka Ganjil Genap

Counter ganjil genap
for (a = 1; a <= 100; a++){
    if (a % 2 === 0) {
        console.log(a + ' Genap');
    }
    else {
        console.log(a + ' Ganjil');
    }
}

Counter 2 kelipatan 3
for (b = 1; b <= 100; b+=2){
    if (b % 3 === 0) {
        console.log(b + ' Kelipatan 3');
    }
    else {
        console.log(b);
    }
}

Counter 5 kelipatan 6
for (c = 1; c <= 100; c+=5){
    if (c % 6 === 0) {
        console.log(c + ' Kelipatan 6');
    }
    else {
        console.log(c);
    }
}

Counter 9 kelipatan 10
for (d = 1; d <= 100; d+=9){
    if (d % 10 === 0) {
        console.log(d + ' Kelipatan 10');
    }
    else {
        console.log(d);
    }
}