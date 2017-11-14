const charactersAPI = new APIHandler(
  "http://ih-crud-api.herokuapp.com/characters"
);

function addCharacter(char) {
  document.getElementsByClassName("characters-container")[0].innerHTML += `
    <div class="character-info">
    <div class="name">ID: ${char.id}</div>
    <div class="name">Name: ${char.name}</div>
    <div class="occupation">Occupation: ${char.occupation}</div>
    <div class="debt">Debt: ${char.debt}</div>
    <div class="weapon">Weapon: ${char.weapon}</div>
  </div>
    `;
}
document.getElementById("fetch-all").addEventListener("click", () => {
  charactersAPI.getFullList(response => {
    document.getElementsByClassName("characters-container")[0].innerHTML = "";
    response.data.forEach(character => addCharacter(character));
  });
});

document.getElementById("fetch-one").addEventListener("click", () => {
  const charId = document.getElementById("character-id").value;
  charactersAPI.getOneRegister(charId, response => {
    document.getElementsByClassName("characters-container")[0].innerHTML = "";
    addCharacter(response.data);
  });
});

document.getElementById("delete-one").addEventListener("click", () => {
  const charId = document.getElementById("character-id-delete").value;
  charactersAPI.deleteOneRegister(charId, response => {
    if (response.error) {
      document.getElementById("delete-one").style.backgroundColor = "red";
    } else {
      document.getElementById("delete-one").style.backgroundColor = "green";
    }
  });
});

document.getElementById("btn-update").addEventListener("click", e => {
  e.preventDefault();
  const charId = document.getElementById("chr-id").value;
  const char = {
    name: document.getElementById("name-update").value,
    occupation: document.getElementById("occupation-update").value,
    weapon: document.getElementById("weapon-update").value,
    debt: document.getElementById("debt-update").checked
  };
  charactersAPI.updateOneRegister(charId, char, response => {
    if (response.error) {
      document.getElementById("btn-update").style.backgroundColor = "red";
    } else {
      document.getElementById("btn-update").style.backgroundColor = "green";
      document.getElementsByClassName("characters-container")[0].innerHTML = "";
      addCharacter(response.data);
    }
  });
});

document.getElementById("btn-create").addEventListener("click", e => {
  e.preventDefault();
  const characterInfo = {
    name: document.getElementById("name-new").value,
    occupation: document.getElementById("occupation-new").value,
    weapon: document.getElementById("weapon-new").value,
    debt: document.getElementById("debt-new").checked
  };
  charactersAPI.createOneRegister(characterInfo, response => {
    if (response.error) {
      document.getElementById("btn-create").style.backgroundColor = "red";
    } else {
      document.getElementById("btn-create").style.backgroundColor = "green";
      document.getElementsByClassName("characters-container")[0].innerHTML = "";
      addCharacter(response.data);
    }
  });
});
