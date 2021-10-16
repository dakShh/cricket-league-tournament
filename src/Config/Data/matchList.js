import { Images } from "../../Config/Images";
const MatchList = [
  {
    id: 1,
    team1: {
      id: 3,
      name: "Mumbai Indians",
      tag: "mi",
      img: Images.mi,
    },

    team2: {
      id: 2,
      name: "Chennai Super Kings",
      tag: "csk",
      img: Images.csk,
    },
    status: 0,
    date: "Thursday, 15th April 2021",
    time: "19:30 IST (14:00 GMT), 18:00 LOCAL",
    venue: "Dubai International Stadium, Dubai",
    matchSummary: "",
  },
  {
    id: 2,
    team1: {
      id: 1,
      name: "Royal Challengers Banglore",
      tags: "rcb",
      img: Images.rcb,
    },

    team2: {
      id: 8,
      name: "Punjab Kings",
      tags: "pk",
      img: Images.pk,
    },
    status: 0,
    date: "Wednesday, 14th April 2021",
    time: "16:45 IST (11:30 GMT), 22:30 LOCAL",
    venue: "Rajiv Gandhi International Cricket Stadium",
    matchSummary: "",
  },
  {
    id: 3,
    team1: {
      id: 5,
      name: "Delhi Capitals",
      tags: "dc",
      img: Images.dc,
    },

    team2: {
      id: 6,
      name: "Sunrisers Hydrabad",
      tags: "sh",
      img: Images.sh,
    },
    status: 1,
    date: "Friday, 08th December 2021",
    time: "08:30 IST (09:30 GMT), 22:30 LOCAL",
    venue: "Rajiv Gandhi International Cricket Stadium",
    matchSummary: {
      summary: "Delhi Capitals won by 27 runs",
      man_of_the_match: "Rishabh Pant",
      bowler_of_the_match: "Amit Mishra",
      best_fielder: "Axax patel",
      winning_team: {
        id: 5,
        name: "Delhi Capitals",
        tags: "dc",
        img: Images.dc,
        runs: {
          run: 190,
          wickets: 3,
        },
        overs: 20,
      },
      loosing_team: {
        id: 6,
        name: "Sunrisers Hydrabad",
        tags: "sh",
        img: Images.sh,
        runs: {
          run: 165,
          wickets: 9,
        },
        overs: 20,
      },
    },
  },
];
export default MatchList;
