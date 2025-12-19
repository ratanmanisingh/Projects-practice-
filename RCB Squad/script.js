let users = [
  {
    name: "Rajat Patidar",
    pic: "https://documents.iplt20.com/ipl/IPLHeadshot2025/597.png",
    bio: "True Leader",
  },
  {
    name: "Virat Kohli",
    pic: "https://documents.iplt20.com/ipl/IPLHeadshot2025/2.png",
    bio: "World Best Batmens across all Format",
  },
  {
    name: "Devdutt Padikkal",
    pic: "https://documents.iplt20.com/ipl/IPLHeadshot2025/200.png",
    bio: "Stylish left-handed batsman with elegant stroke play",
  },
  {
    name: "Phil Salt",
    pic: "https://documents.iplt20.com/ipl/IPLHeadshot2025/1220.png",
    bio: "Explosive opening batsman from England",
  },
  {
    name: "Jitesh Sharma",
    pic: "https://documents.iplt20.com/ipl/IPLHeadshot2025/1000.png",
    bio: "Dynamic wicketkeeper-batsman with power-hitting skills",
  },
  {
    name: "Krunal Pandya",
    pic: "https://documents.iplt20.com/ipl/IPLHeadshot2025/17.png",
    bio: "All-rounder with exceptional spin bowling and batting",
  },
  {
    name: "Tim David",
    pic: "https://documents.iplt20.com/ipl/IPLHeadshot2025/636.png",
    bio: "Hard-hitting finisher known for big sixes",
  },
  {
    name: "Romario Shefard",
    pic: "https://documents.iplt20.com/ipl/IPLHeadshot2025/371.png",
    bio: "Fast bowler with exceptional pace and bounce",
  },
  {
    name: "Jacob Bathal",
    pic: "https://documents.iplt20.com/ipl/IPLHeadshot2025/869.png",
    bio: "Promising young all-rounder with great potential",
  },
  {
    name: "Josh Hazelwood",
    pic: "https://documents.iplt20.com/ipl/IPLHeadshot2025/36.png",
    bio: "World-class Australian fast bowler with precise line and length",
  },
  {
    name: "Suyash Sharma",
    pic: "https://documents.iplt20.com/ipl/IPLHeadshot2025/1932.png",
    bio: "Talented leg-spinner with tricky variations",
  },
  {
    name: "Bhuvneswar Kumar ",
    pic: "https://documents.iplt20.com/ipl/IPLHeadshot2025/15.png",
    bio: "Master of swing bowling and death overs specialist",
  },
  {
    name: "Nuwan Tushera",
    pic: "https://documents.iplt20.com/ipl/IPLHeadshot2025/813.png",
    bio: "Skilled bowler with great control and accuracy",
  },
  {
    name: "Yash Dayal",
    pic: "https://documents.iplt20.com/ipl/IPLHeadshot2025/978.png",
    bio: "Left-arm fast bowler with deadly yorkers",
  },
];

function showUsers(arr) {
  arr.forEach(function (user) {
    // Create outer card div
    const card = document.createElement("div");
    card.classList.add("card");

    // Create image
    const img = document.createElement("img");
    img.src = user.pic;
    img.classList.add("bg-img");

    // Create blurred-layer div
    const blurredLayer = document.createElement("div");
    blurredLayer.style.backgroundImage = `url(${user.pic})`;
    blurredLayer.classList.add("blurred-layer");

    // Create content div
    const content = document.createElement("div");
    content.classList.add("content");

    // Create h3 and paragraph
    const heading = document.createElement("h3");
    heading.textContent = user.name;

    const para = document.createElement("p");
    para.textContent = user.bio;

    // Append heading and paragraph to content
    content.appendChild(heading);
    content.appendChild(para);

    // Append all to card
    card.appendChild(img);
    card.appendChild(blurredLayer);
    card.appendChild(content);

    // Finally, append card to the body or any container
    document.querySelector(".cards").appendChild(card);
  });
}

showUsers(users);

let inp = document.querySelector(".inp");
inp.addEventListener("input", function () {
  let newUsers = users.filter((user) => {
    return user.name.startsWith(inp.value);
  });

  document.querySelector(".cards").innerHTML = "";
  showUsers(newUsers);
});