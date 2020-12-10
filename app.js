const warriorsGames = [{
    awayTeam: {
      team: 'Golden State',
      points: 119,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 106,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 105,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 127,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 126,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 85,
      isWinner: false
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 92,
      isWinner: false
    },
    awayTeam: {
      team: 'Houston',
      points: 95,
      isWinner: true
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 94,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 98,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 115,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 86,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 101,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 92,
      isWinner: false
    }
  }
]
////////////////////////////////////////////////////////////////////////
// STEP 1 - UGLY, UN-REFACTORED CODE! (but it works!)
////////////////////////////////////////////////////////////////////////

// const ulParent = document.createElement('ul');
// // //this is where we'll append a bunch of lis to

// for (let game of warriorsGames) {
//     const {
//       homeTeam,
//       awayTeam
//     } = game;
//   //for each game we want to extract the homeTeam and awayTeam
//   //game is each object in the array called warrirs games
  
//     const gameLi = document.createElement('li');
//     //we want an li for each game

//     const {team: hTeam, points: hPoints}= homeTeam;
//     const {team: aTeam, points:aPoints}= awayTeam;
//     //this is redundant so lets be more specific
//     const teamNames = `${aTeam} @ ${hTeam}`;
//     //we want to see the team names
//     let scoreLine; 
//     //making variable scoreLine set to empty for now

//     if(aPoints > hPoints) {
//          scoreLine = `<b>${aPoints}</b>-${hPoints}` 
//         //now we want to show the scores
//     } else {
//          scoreLine = `${aPoints}-<b>${hPoints}</b>` 
//     }
//     //here we want to make bold the winning team using an if statement
//     //problem is const scoreline is scoped to the if statement
//     //so we must change it to let

//     const warriors = hTeam === "Golden State" ? homeTeam : awayTeam;
//     //warriors name is referencing the warriors array of objects
//     gameLi.classList.add(warriors.isWinner ? "win":"loss")
//     //we will add win or loss as a class depening on if warrios is winner

//     gameLi.innerHTML = `${teamNames} ${scoreLine}`
//     //this gives me the innerHTML for the LIs
//     //we use innerHTML bc we want to add special text, not just plain text with innerText
//     //we want the scores added to the lis as well

//     ulParent.appendChild(gameLi);
//     //to append each li to the ul. 
//     //we still won't see aything bc we haven;t appended it to the page
//   }
  
//   document.body.prepend(ulParent);
// //now we prepend it to the body and it;ll show up in our webpage


///////////////////////////////////////////////////////////////////////
//REFACTORED CODE: SECTION 14: 151. NBA Scores Chart Refactor

const makeChart =(games, targetTeam)=> {
    const ulParent = document.createElement('ul');
    // //this is where we'll append a bunch of lis to
    
    for (let game of games) {
        const gameLi = document.createElement('li');
        //we want an li for each game
        gameLi.innerHTML = getScoreLine(game);
        gameLi.classList.add(isWinner(game,targetTeam) ? "win":"loss")
        //we will add win or loss as a class depening on if warrios is winner
    
        ulParent.appendChild(gameLi);
        //to append each li to the ul. 
        //we still won't see aything bc we haven;t appended it to the page

        const {
          homeTeam,
          awayTeam
        } = game;
      //for each game we want to extract the homeTeam and awayTeam
      //game is each object in the array called warrirs games

      }
    return ulParent;
    //this is where we return ulParent which contains all the daata
};
//we wrapped all this code into a function called makeChart

const isWinner = ({homeTeam, awayTeam}, targetTeam) => {
    const target = homeTeam.team === targetTeam ? homeTeam : awayTeam;
    //warriors name is referencing the warriors array of objects
    return target.isWinner;
    //this is to find the rigth team 
};
//we need to find where Golden State is if it's a or home and check
//if they are winner if is winner is true.

const getScoreLine = ({homeTeam, awayTeam}) => {
    const {team: hTeam, points: hPoints}= homeTeam;
    const {team: aTeam, points:aPoints}= awayTeam;
    //this is redundant so lets be more specific
    const teamNames = `${aTeam} @ ${hTeam}`;
    //we want to see the team names
    let scoreLine; 
    //making variable scoreLine set to empty for now

    if(aPoints > hPoints) {
         scoreLine = `<b>${aPoints}</b>-${hPoints}` 
        //now we want to show the scores
    } else {
         scoreLine = `${aPoints}-<b>${hPoints}</b>` 
    }
    //here we want to make bold the winning team using an if statement
    //problem is const scoreline is scoped to the if statement
    //so we must change it to let
    return `${teamNames} ${scoreLine}`
    //this gives me the innerHTML for the LIs
    //we use innerHTML bc we want to add special text, not just plain text with innerText
    //we want the scores added to the lis as well
}
//we're gonna make a function that determines the interiror text
//the innerHTML

const gsSection = document.getElementById("gs");
const hrSection = document.getElementById("hr");

const gsChart = makeChart(warriorsGames, "Golden State");
const hrChart = makeChart(warriorsGames, "Houston");
//this means for the team houston, it'll return green if they win 
//and red if they lose.
//by calling this function makeChart
//it will return the ulParent

gsSection.appendChild(gsChart);
hrSection.appendChild(hrChart);


// document.body.prepend(hrChart);

// document.body.prepend(gsChart);
// //now we prepend chart1 to the body and it;ll show up in our webpage

////////////////////////////////////////////////////
// we made a function called makeChart and put all the old code inside

// we made a function called getScoreLine and passed in
//the value for each entire game. it will unpack, extract the hometeam 
//and away team, also hteam and a team. hpoit, apoints
//t creats the team names string and scoreline string
//it returns both of team name and scores combined
//we use scoreline to send back up to the gameLi.innerHTML
//gameLI represents each LI





