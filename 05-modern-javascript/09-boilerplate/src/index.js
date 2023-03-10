const printTeam = (
  teamName,
  coach,
  /* ...players */ firstPlayer,
  secondPlayer
) => {
  console.log(teamName);
  console.log(coach);
  //   console.log(players.join(", "));
  console.log(firstPlayer, secondPlayer);
};

const team = {
  name: "Libery",
  coach: "Casey Penn",
  players: ["Goksen", "Eren", "Enes", "Erva"],
};

printTeam(team.name, team.coach, ...team.players);

const cities = ["Barcelona", "Istanbul", "Bordeaux"];
const citiesCopy = ["Santiago", ...cities];

console.log(citiesCopy);

let house = {
    bedrooms: 2,
    bathrooms: 1.5,
    yearBuilt: 2017,
}

let newHouse = {
    ...house
}

console.log(newHouse)