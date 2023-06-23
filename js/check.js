// 데이터 생성
var dataFile = [
  { name: "권지민", phone: "010-2260-0952", pass: 1 },
  { name: "홍민우", phone: "010-8947-0574", pass: 1 },
  { name: "박주희", phone: "010-2371-0240", pass: 1 },
  { name: "김소영", phone: "010-9150-5193", pass: 1 },
  { name: "이세민", phone: "010-3666-9401", pass: 1 },
  { name: "김서진", phone: "010-8406-8995", pass: 1 },
  { name: "오승연", phone: "010-5824-9132", pass: 1 },
  { name: "박소정", phone: "010-5616-7839", pass: 1 },
  { name: "김솜솜", phone: "010-1111-2222", pass: 0 },
];

let elButton = document.getElementById("btn");

function checkPass() {
  let elName = document.getElementById("name").value;
  let elTel = document.getElementById("tel").value;
  console.log(elName);

  for (let i = 0; i < dataFile.length; i++) {
    if (
      elName == dataFile[i].name &&
      elTel == dataFile[i].phone &&
      dataFile[i].pass == 1
    ) {
      window.location.href =
        "file:///C:/Users/spah7/OneDrive/%EB%B0%94%ED%83%95%20%ED%99%94%EB%A9%B4/lionhw0505/js_session/pages/pass.html?${elName}";
      break;
    } else if (
      elName == dataFile[i].name &&
      elTel == dataFile[i].phone &&
      dataFile[i].pass == 0
    ) {
      window.location.href =
        "file:///C:/Users/spah7/OneDrive/%EB%B0%94%ED%83%95%20%ED%99%94%EB%A9%B4/lionhw0505/js_session/pages/fail.html";
      break;
    } else if (i == dataFile.length - 1) {
      alert();
      break;
    }
  }
}
elButton.addEventListener("click", checkPass);
