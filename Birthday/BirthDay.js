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
}

const createAgeList = () => {
  const list = document.createElement("li");
  list.textContent = `${birthDay[i][0]} ${month} ${birthDay[i][2]} doğumlu kişi ${age} yaşında.`;
  document.getElementById("age-list").appendChild(list);
};

document
  .getElementById("submit-button")
  .addEventListener("click", createAgeList);
