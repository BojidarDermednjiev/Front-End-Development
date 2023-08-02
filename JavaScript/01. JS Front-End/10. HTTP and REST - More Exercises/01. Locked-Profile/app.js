const API_URL = `http://localhost:3030/jsonstore/advanced/profiles`;
let main = document.getElementById("main");
function lockedProfile() {
  getProfiles();
  async function getProfiles() {
    let data = await (await fetch(API_URL)).json();
    Object.values(data).forEach((x) => {
      let profile = document.createElement("div");
      profile.className = "profile";
      profile.innerHTML = `
            <img src="./iconProfile2.png" class="userIcon" />
            <label>Lock</label>
            <input type="radio" name="${x._id}" value="lock" checked>
            <label>Unlock</label>
            <input type="radio" name="${x._id}" value="unlock"><br>
            <hr>
            <label>Username</label>
            <input type="text" name="user1Username" value="${x.username}" disabled readonly />            
     `;
      main.appendChild(profile);
      let hiddenContent = document.createElement("div");
      hiddenContent.className = "user1Username";
      hiddenContent.style.display = "none";
      hiddenContent.innerHTML = `
             <hr>
            <label>Email:</label>
            <input type="email" name="user1Email" value="${x.email}" disabled readonly />
            <label>Age:</label>
            <input type="text" name="user1Age" value="${x.age}" disabled readonly />`;
      profile.appendChild(hiddenContent);
      let btn = document.createElement("button");
      btn.textContent = "Show more";
      profile.appendChild(btn);
    });
    loadProfiles();
  }
  function loadProfiles() {
    const buttons = Array.from(document.querySelectorAll("button"));

    buttons.forEach((button) => {
      button.addEventListener("click", handleClick);
    });

    function handleClick(event) {
      const lockedRadioButton = event.currentTarget.parentElement.querySelector(
        'input[type="radio"]'
      );

      if (lockedRadioButton.checked) {
        return;
      }

      const isHidden = event.currentTarget.textContent === "Show more";
      const hiddenInfo = event.currentTarget.parentElement.querySelector("div");

      hiddenInfo.style.display = isHidden ? "block" : "none";
      event.currentTarget.textContent = isHidden ? "Hide it" : "Show more";
    }
  }
}
