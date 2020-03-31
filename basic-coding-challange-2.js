/**************************
 * Coding Challange 2
 */

 /* John and Mike both play basketball in different teams.
  In the latest 3 games, John's team scored 89, 120 and 103 points, while Mikes's Team scored 116, 94 and 123 points.

  1. Calculate the average score for each team
  2. Decide which teams wins in average (highest average score),
  and print the winner to the console.
  3. Then change the scores to show different winners.
  4. Extra: Mary also plays basketball, and her team socored 97,
  134 and 105 points. Like before, log the average winner to the
  console. Hint: you will need the && operator to take the
  decision.
  5. Like, befoer, change the scores to gemerate different winners, keeping in the mind there might be draws.

  Good Luck!

  */ 

  var johnsTeamScoreAvg = (99 + 120 + 103) / 3 ;
  var MikesTeamScoreAvg = (118 + 94 + 123) / 3 ;
  var MerysTeamScoreAvg = (97 + 134 + 105) / 3 ;

  console.log(`John's Point: ${johnsTeamScoreAvg} \nMike's Point: ${MikesTeamScoreAvg} \nMery's Point: ${MerysTeamScoreAvg}`);

// Solution using The Ternary Operator
/*  johnsTeamScoreAvg > MikesTeamScoreAvg ? console.log('John\'s Team Own The Series with: '+ johnsTeamScoreAvg +' points') : console.log('Mike\'s Team Own The Series with: ' + MikesTeamScoreAvg +' points'); */

// Solution using if-else | else-if

if(johnsTeamScoreAvg > MikesTeamScoreAvg && johnsTeamScoreAvg > MerysTeamScoreAvg){
    console.log('John\'s Team Own The Series with: '+ johnsTeamScoreAvg +' points');
}else if(MikesTeamScoreAvg > johnsTeamScoreAvg && MikesTeamScoreAvg > MerysTeamScoreAvg) {
    console.log('Mike\'s Team Own The Series with: '+ MikesTeamScoreAvg +' points')
}else if(MerysTeamScoreAvg > johnsTeamScoreAvg && MerysTeamScoreAvg > MikesTeamScoreAvg) {
    console.log('Mery\'s Team Own The Series with: '+ MerysTeamScoreAvg +' points')
}else{
    console.log('The Series is a draw!')
}