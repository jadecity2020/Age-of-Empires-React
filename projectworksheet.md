# Project Overview

## Project Links

- https://github.com/adgreenie/react.git
- [add your deployment link]()

## Project Description

For this project, I plan to make a multiple-choice trivia game. I will use React's Link and Source to provide access to instructions, the game itself, and a leaderboard. The questions and possible answers will be populated using an API call. The leaderboard will be stored on a Google Sheet and also viewed through an API call.

## API

https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations


```
{
"civilizations": [
{
"id": 1,
"name": "Aztecs",
"expansion": "The Conquerors",
"army_type": "Infantry and Monk",
"unique_unit": [
"https://age-of-empires-2-api.herokuapp.com/api/v1/unit/jaguar_warrior"
],
"unique_tech": [
"https://age-of-empires-2-api.herokuapp.com/api/v1/technology/garland_wars"
],
"team_bonus": "Relics generate +33% gold",
"civilization_bonus": [
"Villagers carry +5",
"Military units created 15% faster",
"+5 Monk hit points for each Monastery technology",
"Loom free"
]
},
```


## Wireframes




### MVP/PostMVP - 5min


#### MVP EXAMPLE
- Detailed Introduction on the game "Age of Empires II" 
- Navbar with options that link to their corresponding pages
- Implementing at least 10 civilizations (out of a total of 18)
- Application of API calls on the corresponding pages


#### PostMVP EXAMPLE

- Implement all 18 civilizations


## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.
Haven't edit this portion but left here as reference
Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | Sets up app with React Router | 
| Header | Renders the header, including the nav | 
| Footer | Renders the footer |
| Main | Contains Switch/Routes for content |
| Gameboard | Renders the trivia game, contains score as state |
| Question | Renders current question via API call and Answer components |
| Answer | Renders a possible answer using props from Question |
| Score | Renders player's score received through props |
| HighScore | Form that renders at end of game if the player achieves a high score |
| Options | Renders a form of selectable game options |
| Instructions | Renders rules and info about the game |
| Leaderboard | Renders list of top scorers via API call |

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.


	Priority	Time estimated (Hours)	Time Spent (Hours)	Description
initial page layout	High	1		to include basic layout of the webpage
Navigation bar	High	1		Nav bar creation to show all links (unclickable at the moment)
API call to all pages	High	10		there are 4 different API locations to call from 
API call to main page	High	1		API call for civilization list, tech list, unit list, building list etc. 
Applying Router	Medium	3		make each item in shown clickable
Applying Context/props	Medium	5		identifying and applying calling/passing data
Inidividual Unit Call	Medium	8		API call for individual properties, for example, properties for a Castle
additional CSS	Medium	4		
Manually writing Introduction/About/Ages	Low	5		
Additional Time 	Low	10		To include time spent on things not on this list
				
				
Total proposed time		48		

## Additional Libraries


## Code Snippet


