console.log("Merhaba Dünya")
let userName=prompt("Kullanıcı adınızı giriniz: ")
document.write("Hoşgeldiniz " + userName + "!")
function myFunction() {
    document.querySelector("button").innerHTML="helloooo";
}
// console.log(userName.toUpperCase())
// console.log(userName.toLowerCase())


// let challenge = "30 Days of Javascript"
// console.log(challenge.substr(3))
// console.log(challenge.replace("Javascript", "Python"))
// console.log(challenge.charAt(15))
// console.log(challenge.indexOf("of")) // örnek yorum satırı 
// // ctrl+ö tüm satırı yorum satırına dönüştürme


// // uygulama-1
// let sayi= 15
// if (sayi>10 && sayi < 50) {
//     console.log("sayi 10 ve 50 arasıda")
// } else {
//     console.log("sayi 10 ve 50 arasında değil")
// }

// uygulama-2
// let sayi_2 =prompt("Bir sayı giriniz: ")
// if(sayi_2 %2==1) {
//     console.log("sayi negatif")
// } if(sayi_2 %2==0 && sayi_2 !=0) {
//     console.log("sayi pozitif")
// } if(sayi_2==0) {
//     console.log("sayı 0 a eşit")
// }

// uygulama-3 (else if kulla)
// let x=prompt("Birinci sayi: ")
// let y=prompt("İkinci sayi: ")
// let z=prompt("Üçüncü sayi: ")
// if(x>y && x>z ) {
//     console.log("en büyük sayı 1.")
// } else if(y>z && y>x) {
//     console.log("en büyük sayi 2")
// } else if(z>x && z>y) {
//     console.log("en büyük sayi 3.")
// } else {
//     console.log("geçerli değerler giriniz")
// }

// uygulama-4
// ort 50 den büyükse geçer, geçmek için final notu en az 50 olmalı,final 70 ve üstü ise her türlü geçer.
// let vize=prompt("vize notunuz: ")
// let final=prompt("final notunuz: ")
// let ort= vize * 0.3 + final * 0.7
// console.log("not ortalamanız: " +ort)
// if(ort<50 || final<70){
//     console.log("dersi geçemedin xD")
// } if(ort>50 && final>= 50) {
//     console.log("dersi geçtin aferin")
// }if (final>=70) {
//     console.log("geçtin")
// }


// STRINGS
// let url= "https://www.sadikturan.com/";
// let kursAdi= "Komple Web Geliştirme Kursu"
// let sonuc;

// uygulama-1
// console.log(url.length);

// uygulama-2
// sonuc=kursAdi.split(" ");
// sonuc=sonuc.length;
// console.log(sonuc);

// uygulama-3
// console.log(url.startsWith("https"));

// uygulama-4
// console.log(kursAdi.includes("Eğitimi"))

// uygulama-5
// sonuc=kursAdi.toLowerCase();
// sonuc=sonuc.replaceAll(" ", "-");
// console.log(sonuc);

// Date Object
// let simdi= new Date();
// sonuc= simdi.getDate();

// console.log(sonuc);


// DİZİLER
// let meyveler=["elma", "armut", "muz", "çilek"];
// let sonuc;
// sonuc=meyveler.length;
// sonuc=meyveler.pop();     // dizinin son elemanı kesildi.
// sonuc=meyveler.shift();   // dizinin ilk elemanı kesildi.
// sonuc=meyveler.includes("elma"); // "elma" kesildiği için false döner.
// sonuc=meyveler.push("kiraz"); // eklenen elemanla beraber kaç elemanlı oldu?
// sonuc=meyveler.splice(meyveler.length - 2, 2);   // son elemandan başla 2 eleman kes.

// console.log(sonuc);
// console.log(meyveler);
// // 
// let ogrenci1=["yiğit", "bilgi", 2010,[70, 80, 90]];
// let ogrenci2=["ada", "bilgi",2012, [80, 80, 90]];
// let ogrenci3=["ahmet", "turan", 2009,[60, 60, 70]];

// let year= new Date().getFullYear();

// let yigitYas= year - ogrenci1[2];
// let adaYas= year-ogrenci2[2];
// let ahmetYas=year-ogrenci3[2];

// console.log(yigitYas, adaYas, ahmetYas);

// let yigitOrt=(ogrenci1[3][0]+ogrenci1[3][1]+ogrenci1[3][2])/3;
// let adaOrt=(ogrenci2[3][0]+ ogrenci2[3][1]+ogrenci2[3][2])/3;
// let ahmetOrt=(ogrenci3[3][0]+ ogrenci3[3][1]+ ogrenci3[3][2])/3;
// console.log(yigitOrt.toFixed(1), adaOrt.toFixed(1), ahmetOrt.toFixed(1));

// OBJECTS
// let siparisler= {
//     "siparis1":{
//         "siparis_id":"101",
//         "siparis_tarihi": "31.12.22",
//         "odeme sekli":"kredi kartı",
//         "kargo adresi":"Bursa MKP",
//         "Satın Alınan Urunler": {
//             "Urun 1":{
//                 "id":"5",
//                 "baslik":"iphone 13 pro",
//                 "fiyat":22000,
//             },
//             "Urun 2":{
//                 "id":"6",
//                 "baslik":"iphone 13 pro max",
//                 "fiyat": 25000
//             }
//         },
//         "musteri id":"12",
//         "satici firma": {
//             "id":"34",
//             "ad":"apple"
//         }
//     },
//     "siparis2":{
//         "siparis_id":"101",
//         "siparis_tarihi":"30.12.22",
//         "odeme sekli":"kredi karti",
//         "Kargo adresi":"bursa mkp",
//         "satin alinan urunler":{
//             "urun1": {
//                 "id":"6",
//                 "baslik":"iphone 13 pro max",
//                 "fiyat":25000,
//             }
//         },
//         "musteri id":"12",
//         "satici": {
//             "id":"34",
//             "ad":"apple"
//         }
//     }
// }

// let urun1_fiyat=siparisler.siparis1["Satın Alınan Urunler"]["Urun 1"].fiyat;
// let urun2_fiyat=siparisler.siparis1["Satın Alınan Urunler"]["Urun 2"].fiyat;
// let urun3_fiyat=siparisler.siparis2["satin alinan urunler"].urun1.fiyat;
// let siparis_1_toplam=(urun1_fiyat*0.18+urun1_fiyat)+(urun2_fiyat*0.18+urun2_fiyat);
// let siparisToplam=siparis_1_toplam+(urun3_fiyat*0.18+urun3_fiyat);
// console.log(siparisToplam);

// console.log(sonuc);


// DÖNGÜLER
// let sayilar= [1, 5, 7, 15, 3, 25, 6, 8];

// for(let sayi of sayilar) {
//     let kare=sayi**2;
//     console.log(kare);
// }

// for(i=0; i<sayilar.length; i++) {
//     if (sayilar[i] % 5==0) {
//         console.log(sayilar[i]);
//     }
// }

// toplam=0;
// for(let sayi of sayilar) {
//     if(sayi%2==0) {
//         toplam += sayi;
//     }
// }
// console.log(toplam)

// let urunler=["iphone 12" , "samsung s22", "iphone 13", "samsung s23 "]

// for(let i in urunler) {
//     console.log(urunler[i].toUpperCase())
// }

// toplam=0;
// for(let urun of urunler) {
//     if(urun.includes("samsung")) {
//         toplam++;
//     }
// }
// console.log(toplam)

// let ogrenciler = [
//     {"ad":"Yiğit", "soyad":"Bilgi", "notlar":[60,70,60]},
//     {"ad":"Ada", "soyad":"Bilgi", "notlar": [80,70,80]},
//     {"ad":"Çınar", "soyad":"Turan", "notlar": [30,10,60]}
// ]

// for(let ogrenci of ogrenciler) {
//     let toplam=0;
//     let adet=0;
//     for (let not of ogrenci.notlar) {
//         toplam += not;
//         adet ++
//     }
//     let ort=toplam/adet;
//     if(ort>= 50){
//         console.log(`${ogrenci.ad} ${ogrenci.soyad} adlı öğrencinin notu: ${ort.toPrecision(2)} Başarılı`);
//     }
//     else{
//         console.log(`${ogrenci.ad} ${ogrenci.soyad} adlı öğrencinin notu: ${ort.toPrecision(2)} Başarısız`);
//     }
// }

// FONKSİYONLAR
// function kelimeYazdir(kelime, adet) {
//     for(i=0; i<adet; i++) {
//         console.log(kelime)
//     }
// }

// kelimeYazdir("sema",6);

// function alanVeCevre(buyukKenar, kucukKenar){
//     let alan=buyukKenar*kucukKenar;
//     let cevre=buyukKenar*2+kucukKenar*2;
//     console.log(`Alan: ${alan} Çevre: ${cevre}`);
// }

// alanVeCevre(6,5);

// function yaziTura () {
//     Math.random();
//     let sonuc=Math.floor(Math.random() *2);
//     if (sonuc==1){
//         console.log("yazı")
//     }else {console.log("tura")};
// }
// yaziTura();

function tamBolenler (sayi) {
    for(let i=1; i++;) {
        if(sayi%i==0) {
            console.log(i);
        }
    }
}
console.log(tamBolenler(10));