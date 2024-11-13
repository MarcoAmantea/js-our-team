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
    }
];

const teamContainer = document.getElementById("team-container")

const createCard = (teams) => {
    const { name, role, email, img } = teams;
    return `
    <div class="card mb-3 col-4 bg-dark">
      <div class="row g-0">
        <div class="col-4">
          <img src="./${img}" class="img-fluid rounded-start" alt="${name}">
        </div>
        <div class="col-4">
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
        const card = createCard(teamMembers[i]);
        items += card;
    }
    teamContainer.innerHTML = items;
};

renderTeam()
