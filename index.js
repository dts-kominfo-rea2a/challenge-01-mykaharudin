// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

//warna tidak duplikat
const arrayColorMonica = ["Yellow", "Pink", "White", "Purple"], 
arrayColorWendy = ["Blue", "Black", "Grey"];

let setColorMonica = new Set(arrayColorMonica);

let setColorWendy = new Set(arrayColorWendy);

//restoran tidak duplikat
const arrayrestoranMonica = ["Bento", "Sushi", "Pancake", "Eggy", "Tempura", "Bento", "Eggy", "Padang", "Tteok", "Sushi", "Sushi"], arrayrestoranWendy = ["Tempura", "Bento", "Sushi", "Pancake", "Padang", "Katsu", "Geprek", "Pancake", "Eggy"];

let setRestoranMonica = new Set(arrayrestoranMonica);
let setRestoranWendy = new Set(arrayrestoranWendy);

const firstUser = {
    name: "Monica",
    gender: "Female",
    age: 17,
    email: "monica@dingdong.com",
    favoriteColor: [setColorMonica],
    isHavePet:"Yes",
    education: [{ name: "SD 01", city: "Jakarta", graduate: "2016" },
    { name: "SMP 02", city: "Jakarta", graduate: "2019" },
    { name: "SMA 03", city: "Tangerang" }],
    favoriteRestaurant: [setRestoranMonica]
};
const secondUser = {
    name: "Wendy",
    gender: "Male",
    age: 23,
    email: "wendy@dingdong.com",
    favoriteColor: [setColorWendy],
    isHavePet: "Yes",
    education: [
        { name: "SD 02", city: "Jakarta", graduate: "2010" },
        { name: "SMP 03", city: "Bogor", graduate: "2013" },
        { name: "SMA 01", city: "Surabaya", graduate: "2016" },
        { name: "Universitas Maju", city: "Tangerang" }],
    favoriteRestaurant: [setRestoranWendy]
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];
users.push(firstUser);
users.push(secondUser);

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};