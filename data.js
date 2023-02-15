const GAMES = Object.freeze([
    //Pack 1
    {name:"Drawful",url:"steam://run/331670//-launchTo games%2FDrawful%2FDrawful.swf ", pack:"1",min:3,max:8},
    {name:"Fibbage XL",url:"steam://run/331670//-launchTo games%2FFibbage%2FFibbage.swf ", pack:"1",min:2,max:8},
    {name:"Lie Swatter",url:"steam://run/331670//-launchTo games%2FLieSwatterParty%2FLieSwatterParty.swf ", pack:"1",min:1,max:100},
    {name:"Word Spud",url:"steam://run/331670//-launchTo games%2FWordSpud%2FWordSpud.swf ", pack:"1",min:2,max:8},
    {name:"You dont know Jack 2015",url:"steam://run/331670//-launchTo games%2FYDKJ2015%2FYDKJ2015.swf ", pack:"1",min:1,max:4},
    //Pack 2
    {name:"Bidiots ",url:"steam://run/397460//-launchTo games%2FAuction%2FAuction.swf", pack:"2",min:3,max:6},
    {name:"Bomb Corp",url:"steam://run/397460//-launchTo games%2FBombInterns%2FBombInterns.swf", pack:"2",min:1,max:4},
    {name:"Earwax ",url:"steam://run/397460//-launchTo games%2FEarwax%2FEarwax.swf ", pack:"2",min:3,max:8},
    {name:"Fibbage 2",url:"steam://run/397460//-launchTo games%2FFibbage2%2FFibbage2.swf ", pack:"2",min:2,max:8},
    {name:"Quiplash XL",url:"steam://run/397460//-launchTo games%2FQuiplash%2FQuiplash.swf ", pack:"2",min:3,max:8},
    //Pack 3
    {name:"Quiplash 2 ",url:"steam://run/434170//-launchTo games%2FQuiplash2%2FQuiplash2.swf ", pack:"3",min:3,max:8},
    {name:"Trivia Murder Party",url:"steam://run/434170//-launchTo games%2FTriviaDeath%2FTriviaDeath.swf ", pack:"3",min:1,max:8},
    {name:"Guesspionage  ",url:"steam://run/434170//-launchTo games%2FPollPosition%2FPollPosition.swf ", pack:"3",min:2,max:8},
    {name:"Tee K.O.",url:"steam://run/434170//-launchTo games%2FAwShirt%2FAwShirt.swf ", pack:"3",min:3,max:8},
    {name:"Fakin' It",url:"steam://run/434170//-launchTo games%2FFakinIt%2FFakinIt.swf ", pack:"3",min:3,max:6},
    //Pack 4
    {name:"Bracketeering",url:"steam://run/610180//-launchTo games%2FBracketeering%2FBracketeering.swf ", pack:"4",min:3,max:16},
    {name:"Civic Doodle",url:"steam://run/610180//-launchTo games%2FOverdrawn%2FOverdrawn.swf ", pack:"4",min:3,max:8},
    {name:"Fibbage 3",url:"steam://run/610180//-launchTo games%2FFibbage3%2FFibbage3.swf ", pack:"4",min:2,max:8},
    {name:"Monster Seeking Monster",url:"steam://run/610180//-launchTo games%2FMonsterMingle%2FMonsterMingle.swf ", pack:"4",min:3,max:7},
    {name:"Survive the Internet",url:"steam://run/610180//-launchTo games%2FSurviveTheInternet%2FSurviveTheInternet.swf ", pack:"4",min:3,max:8},
    //Pack 5
    {name:"YOU DON’T KNOW JACK",url:"steam://run/774461//-launchTo games%2FYDKJ2018%2FYDKJ2018.swf ", pack:"5",min:1,max:8},
    {name:"Split the Room",url:"steam://run/774461//-launchTo games%2FSplitTheRoom%2FSplitTheRoom.swf ", pack:"5",min:3,max:8},
    {name:"Mad Verse City",url:"steam://run/774461//-launchTo games%2FRapBattle%2FRapBattle.swf ", pack:"5",min:3,max:8},
    {name:"Patently Stupid",url:"steam://run/774461//-launchTo games%2FPatentlyStupid%2FPatentlyStupid.swf ", pack:"5",min:3,max:8},
    {name:"Zeeple Doom",url:"steam://run/774461//-launchTo games%2FSlingShoot%2FSlingShoot.swf ", pack:"5",min:1,max:6},
    //Pack 6
    {name:"Dictionarium",url:"steam://run/1005300//-launchTo games%2FRidictionary%2FRidictionary.swf ", pack:"6",min:3,max:8},
    {name:"Joke Boat",url:"steam://run/1005300//-launchTo games%2FJokeBoat%2FJokeBoat.swf ", pack:"6",min:3,max:8},
    {name:"Push The Button",url:"steam://run/1005300//-launchTo games%2FPushTheButton%2FPushTheButton.swf ", pack:"6",min:4,max:10}, 
    {name:"Role Models",url:"steam://run/1005300//-launchTo games%2FRoleModels%2FRoleModels.swf ", pack:"6",min:3,max:6},
    {name:"Trivia Murder Party 2",url:"steam://run/1005300//-launchTo games%2FTriviaDeath2%2FTriviaDeath2.swf ", pack:"6",min:1,max:8},
    //Pack 7
    {name:"Blather 'Round",url:"steam://run/1211630//-launchTo games%2FBlankyBlank%2FBlankyBlank.swf ", pack:"7",min:2,max:6},
    {name:"Champ’d Up",url:"steam://run/1211630//-launchTo games%2FWorldChampions%2FWorldChampions.swf", pack:"7",min:3,max:8},
    {name:"Quiplash 3",url:"steam://run/1211630//-launchTo games%2FQuiplash3%2FQuiplash3.swf ", pack:"7",min:3,max:8},
    {name:"Talking Points",url:"steam://run/1211630//-launchTo games%2FJackboxTalks%2FJackboxTalks.swf ", pack:"7",min:3,max:8},
    {name:"The Devils and the Details",url:"steam://run/1211630//-launchTo games%2FEveryday%2FEveryday.swf ", pack:"7",min:3,max:8},
    //Pack 8
    {name:"Drawful Animate",url:"steam://run/1552350//-launchTo games%2FDrawfulAnimate%2FDrawfulAnimate.swf", pack:"8",min:3,max:10},
    {name:"The Wheel of Enormous Proportions",url:"steam://run/1552350//-launchTo games%2FTheWheel%2FTheWheel.swf ", pack:"8",min:2,max:8},
    {name:"Job Job",url:"steam://run/1552350//-launchTo games%2FJobGame%2FJobGame.swf ", pack:"8",min:3,max:10},
    {name:"The Poll Mine",url:"steam://run/1552350//-launchTo games%2FSurveyBomb%2FSurveyBomb.swf ", pack:"8",min:2,max:10},
    {name:"Weapons Drawn",url:"steam://run/1552350//-launchTo games%2FMurderDetectives%2FMurderDetectives.swf", pack:"8",min:4,max:8},
    //Pack 9
    {name:"Fibbage 4",url:"steam://run/1850960//-launchTo games%2FFibbage4%2FFibbage4.swf ", pack:"9",min:2,max:8},
    {name:"Quixort",url:"steam://run/1850960//-launchTo games%2FLineup%2FLineup.swf ", pack:"9",min:1,max:10},
    {name:"Junktopia",url:"steam://run/1850960//-launchTo games%2FAntiqueGame%2FAntiqueGame.swf ", pack:"9",min:3,max:8},
    {name:"Nonsensory",url:"steam://run/1850960//-launchTo games%2FRangeGame%2FRangeGame.swf ", pack:"9",min:3,max:8},
    {name:"Roomerang",url:"steam://run/1850960//-launchTo games%2FMakeFriends%2FMakeFriends.swf ", pack:"9",min:4,max:9},
])

const Header = Object.freeze({name:"Name",url:"", pack:"Pack",min:"Min",max:"Max"})