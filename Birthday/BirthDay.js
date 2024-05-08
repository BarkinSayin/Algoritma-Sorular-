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

const getMonthName = (monthNumber) => {
  switch (monthNumber) {
    case 1:
      return "Ocak";
    case 2:
      return "Şubat";
    case 3:
      return "Mart";
    case 4:
      return "Nisan";
    case 5:
      return "Mayıs";
    case 6:
      return "Haziran";
    case 7:
      return "Temmuz";
    case 8:
      return "Ağustos";
    case 9:
      return "Eylül";
    case 10:
      return "Ekim";
    case 11:
      return "Kasım";
    case 12:
      return "Aralık";
    default:
      return "Invalid month";
  }
};

for (let i = 0; i < birthDay.length; i++) {
  const age = today[2] - birthDay[i][2];

  //Switch ile ayları string'e çevirme
  const month = getMonthName(birthDay[i][1]);
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

  //Switch ile ayları string'e çevirme
  const birthMonth = parseInt(
    document.getElementsByClassName("birthday-input")[1].value
  );
  const newMonth = getMonthName(birthMonth);
  //İnputlardan biri boş mu kontrol ediyor boşsa hata veriyor
  if (
    document.getElementsByClassName("birthday-input")[0].value === "" ||
    document.getElementsByClassName("birthday-input")[1].value === "" ||
    document.getElementsByClassName("birthday-input")[2].value === ""
  ) {
    alert("Please fill the blanks");
    //İnputlara girilen verileri Ay ve Gün olarak tam yaşını doldurdu mu kontrol ediyor
  } else if (
    parseInt(document.getElementsByClassName("birthday-input")[1].value) > 12
  ) {
    alert("Invalid Month");
  } else if (
    parseInt(document.getElementsByClassName("birthday-input")[2].value) >=
    today[2]
  ) {
    alert("Invalid Year");
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
