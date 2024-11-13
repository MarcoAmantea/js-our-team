const teamMembers = [
    {
        name: "Marco Bianchi",
        role: "Designer",
        email: "marcobianchi@team.com",
        img: "img/male1.png"
    },
    {
        name: "Laura Rossi",
        role: "Front-end Developer",
        email: "laurarossi@team.com",
        img: "img/female1.png"
    },
    {
        name: "Giorgio Verdi",
        role: "Back-end Developer",
        email: "giorgioverdi@team.com",
        img: "img/male2.png"
    },
    {
        name: "Marta Ipsum",
        role: "SEO Specialist",
        email: "martarossi@team.com",
        img: "img/female2.png"
    },
    {
        name: "Roberto Lorem",
        role: "SEO Specialist",
        email: "robertolorem@team.com",
        img: "img/male3.png"
    },
    {
        name: "Daniela Amet",
        role: "Analyst",
        email: "danielaamet@team.com",
        img: "img/female3.png"
    },
    {
      name: "Marco Amantea",
      role: "FAKE WEB DEVELOPER",
      email: "marcoamantea18@gmail.com",
      img: "img/me.png"
  }
];

const teamContainer = document.getElementById("team-container")
const memberForm = document.getElementById("member-form");
const nameInput = document.getElementById("name");
const roleInput = document.getElementById("role");
const imageInput = document.getElementById("image");
const emailInput = document.getElementById("email")

function member(teams){
    const { name, role, email, img } = teams;
    return `
    <div class="card mb-3 col-lg-4 col-md-12 col-sm-12 bg-dark">
      <div class="row">
        <div class="col-6">
          <img src="./${img}" class="img-fluid rounded-start" alt="${name}">
        </div>
        <div class="col-6">
          <div class="card-body">
            <h5 class="card-title text-white">${name}</h5>
            <p class="card-text text-white">${role}</p>
            <p class="card-text text-info">${email}<small class="text-body-secondary"></small></p>
          </div>
        </div>
      </div>
    </div>
  `
};


const renderTeam = () => {
    let items = "";
    for (let i = 0; i < teamMembers.length; i++) {
        const card = member(teamMembers[i]);        
        items += card;
    }
    teamContainer.innerHTML = items;
};

const handleSubmit = (event) => {
    event.preventDefault();
    const name = nameInput.value.trim();
    const role = roleInput.value.trim();
    const img = imageInput.value.trim();  
    const email = emailInput.value.trim();
    const newMember = {
      name,
      role,
      email,
      img
    }
  
    teamMembers.push(newMember);
    console.log(teamMembers);
  
    renderTeam();  
    memberForm.reset();
  };

renderTeam()
memberForm.addEventListener("submit", handleSubmit);

