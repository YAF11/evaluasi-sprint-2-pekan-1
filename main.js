// soal 1
// Jelaskan perbedaan (==) dan (===) dalam operator perbandingan!
/*
    perbedaan (==) dan (===) adalah, (==) untuk sama dengan tetapi tidak melihat tipe nya, 
    sedangkan (===) untuk sama dengan dan melihat tipe nya juga
*/

//soal 2
//Buatlah Operator Ternary untuk menyebutkan angka ganjil atau genap!

let x = prompt("Masukkan Angka") 
    
 2%2 == 0 || 2%2 != 0? alert("ganjil"):alert("Genap");

 
   


let datafilm = [
    
    {
        id: 1,
        title: 'Tragedi Atap Jebol',
        genre: ["Action", "Romance", "Comedy", "Horor"],
        actor: ["Indra", "ipul", "David", "Moezha", "Arul"],
        ratting: 9.05,
        synopsis: 'lorem ipsum dolor sit amet, consectetur adipiscing elit',
        type: 'Movie', // Movie || TV
        producer: ["PIT Movic", "Indra Music Live"],
        studio: 'PesantrenIT',
        status: true // true => sudah rilis || false => belum rilis
    },
]

//a. Tambahkan data film kalian ke dalam array dataFilm di awal elemen array dengan format data seperti diatas.
datafilm.unshift(["Untuk Dewasa"])

//b. Hapus data film dari array dataFilm berdasarkan index.
delete datafilm[0][0]

//c. Ubahlah properti status menjadi true atau false berdasarkan index dan buatlah menjadi lebih dinamis.


datafilm[1][3]
console.log(datafilm)

