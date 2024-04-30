// Soru 1
// const birthDay = [[11,11,1985],[25,11,1999], [8,4,1992],[30,4,1978]]
// const today = [30,4,2024]

// Böyle iki arrayimiz var. buradaki 3 lü grup halinde olan arrayler doğum günlerini temsil ediyor.
// istenenler,
// - birthDay arrayinin içine 5 doğum tarihi arrayi daha eklemelisiniz.
// - today araiyini baz alarak kaç yaşında olduklarını, aşağıdaki şekilde çıktısını alabilmeliyiz.
// // output
// 11 Kasım 1985 doğumlu kişi 38 yaşında.
// 25 Kasım 1999 doğumlu kişi 24 yaşında.
// 8 Nisan 1992 doğumlu kişi 32 yaşında.
// 30 Nisan 1978 doğumlu kişi 46 yaşında...

const birthDay = [
  [11, 11, 1985],
  [25, 11, 1999],
  [8, 4, 1992],
  [30, 4, 1978],
];
const today = [30, 4, 2024];

for (let i = 0; i < birthDay.length; i++) {
  const age = today[2] - birthDay[i][2];

  //Switch ile ayları string'e çevirme
  switch (birthDay[i][1]) {
    case 1:
      month = "Ocak";
      break;

    case 2:
      month = "Şubat";
      break;

    case 3:
      month = "Mart";
      break;

    case 4:
      month = "Nisan";
      break;

    case 5:
      month = "Mayıs";
      break;

    case 6:
      month = "Haziran";
      break;

    case 7:
      month = "Temmuz";
      break;

    case 8:
      month = "Ağustos";
      break;

    case 9:
      month = "Eylül";
      break;

    case 10:
      month = "Ekim";
      break;

    case 11:
      month = "Kasım";
      break;

    case 12:
      month = "Aralık";
      break;

    default:
      console.log("invalid month");
      break;
  }
  //Ay ve Gün olarak tam yaşını doldurdu mu kontrol ediyor
  if (
    today[1] > birthDay[i][1] ||
    (today[1] === birthDay[i][1] && today[0] >= birthDay[i][0])
  ) {
    const list = document.createElement("li");
    list.textContent = `${birthDay[i][0]} ${month} ${birthDay[i][2]} doğumlu kişi ${age} yaşında.`;
    document.getElementById("age-list").appendChild(list);
  } else {
    //Doldurmadıysa yaşını 1 azaltıp yazdırıyor
    const list = document.createElement("li");
    list.textContent = `${birthDay[i][0]} ${month} ${
      birthDay[i][2]
    } doğumlu kişi ${age - 1} yaşında.`;
    document.getElementById("age-list").appendChild(list);
  }
}
//Submit buttonun varsayılan davranışını engelliyor
document
  .getElementById("submit-button")
  .addEventListener("click", (event) => event.preventDefault());

const createAgeList = () => {
  //İnputa girilen verileri bir array şeklinde birthDay dizisine pushluyor
  birthDay.push([
    parseInt(document.getElementsByClassName("birthday-input")[0].value),
    parseInt(document.getElementsByClassName("birthday-input")[1].value),
    parseInt(document.getElementsByClassName("birthday-input")[2].value),
  ]);

  const newAge = today[2] - birthDay[birthDay.length - 1][2];
  let newMonth;
  //Switch ile ayları string'e çevirme
  switch (birthDay[birthDay.length - 1][1]) {
    case 1:
      newMonth = "Ocak";
      break;

    case 2:
      newMonth = "Şubat";
      break;

    case 3:
      newMonth = "Mart";
      break;

    case 4:
      newMonth = "Nisan";
      break;

    case 5:
      newMonth = "Mayıs";
      break;

    case 6:
      newMonth = "Haziran";
      break;

    case 7:
      newMonth = "Temmuz";
      break;

    case 8:
      newMonth = "Ağustos";
      break;

    case 9:
      newMonth = "Eylül";
      break;

    case 10:
      newMonth = "Ekim";
      break;

    case 11:
      newMonth = "Kasım";
      break;

    case 12:
      newMonth = "Aralık";
      break;

    default:
      console.log("invalid month");
      break;
  }
  //İnputlardan biri boş mu kontrol ediyor boşsa hata veriyor
  if (
    document.getElementsByClassName("birthday-input")[0].value === "" ||
    document.getElementsByClassName("birthday-input")[1].value === "" ||
    document.getElementsByClassName("birthday-input")[2].value === ""
  ) {
    alert("Please fill the blanks");
    //İnputlara girilen verileri Ay ve Gün olarak tam yaşını doldurdu mu kontrol ediyor
  } else if (
    today[1] >
      parseInt(document.getElementsByClassName("birthday-input")[1].value) ||
    (today[1] ===
      parseInt(document.getElementsByClassName("birthday-input")[1].value) &&
      today[0] >=
        parseInt(document.getElementsByClassName("birthday-input")[0].value))
  ) {
    const list = document.createElement("li");
    list.textContent = `${birthDay[birthDay.length - 1][0]} ${newMonth} ${
      birthDay[birthDay.length - 1][2]
    } doğumlu kişi ${newAge} yaşında.`;
    document.getElementById("age-list").appendChild(list);
    //Doldurmadıysa yaşından 1 azaltıp ekrana yazıyor
  } else if (
    today[1] >
    parseInt(document.getElementsByClassName("birthday-input")[1].value)
  ) {
  } else {
    const list = document.createElement("li");
    list.textContent = `${birthDay[birthDay.length - 1][0]} ${newMonth} ${
      birthDay[birthDay.length - 1][2]
    } doğumlu kişi ${newAge - 1} yaşında.`;
    document.getElementById("age-list").appendChild(list);
  }
};
//Submit buttonunu dinliyor, Click olursa createAgeList fonksiyonu çalışıyor
document
  .getElementById("submit-button")
  .addEventListener("click", createAgeList);
