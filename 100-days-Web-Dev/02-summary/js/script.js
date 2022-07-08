// function printFunc() {
//   for (let count = 0; count <= 10; count++) {
//     console.log(count);
//     console.log("Hello f* world!");
//     console.log("Olá mundo!");
//   }
// }

// printFunc();

const changeThemeBtn = document.querySelector("#change-theme");

changeThemeBtn.addEventListener("change", function () {
  document.body.classList.toggle("dark");
});
