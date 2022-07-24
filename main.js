console.log(
  "Pozdrowienia od osoby, która dopiero co zaczeła programować." +
    "Jeśli to czytasz to uważam cię za tajniaka, bo znaleść tą" +
    "informacje dla mnie jest trudno :D"
);

function checkPassword() {
  const isLogged = sessionStorage.getItem("isLogged");
  if (isLogged) {
    document.body.classList.remove("locked");
    return;
  }
  let password = prompt("Jak nazywa się Przedwieczny mieszkający w Głębinach?");
  if (password.toLowerCase() === "cthulhu") {
    alert("Zgadłeś hasło! Cthulhu jest zadowolony!");
    document.body.classList.remove("locked");
    sessionStorage.setItem("isLogged", "yes");
  } else {
    alert("Niepoprawne hasło! Przedwieczni się gniewają.");
  }
}

window.onload = checkPassword;
