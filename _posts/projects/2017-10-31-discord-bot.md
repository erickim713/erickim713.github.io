---
layout: post
title:  "Arirang Bot on Discord"
date:   2017-10-31 14:05:14 +0900
categories: project
author: 'Eric Kim'
image: images/pubg.jpg
---

_Tech/Tools used_: Javascript, Firebase, Heroku, discord.js, pubgtracker

Playing [PlayerUnknown Battleground](https://playbattlegrounds.com/main.pu) introduced me to a new VoIP platform called Discord. This neat program allows the users to create a private or public server quickly and to connect to other users via voice with ease. If you are an experienced FPS gamer, then you should know that information regarding enemy's location and status are essential. 

Anyways, I came across a bot that allowed the users to look up their in-game statistics in Discord Chat. I became interested in bots and started looking around and realized I can manage a clan of mine (cute, I know) using the bot. I started making a discord bot using discord.js in Javascript and hosted on Heroku.

Some of its functionalities:
* Cleaning up users that are past _n days_ past their last activity in the clan.
* Looking up current server status of PUBG via HTTP request to [Dak.gg's service](https://dak.gg/statistics/server)
* Welcoming Message / PUBG nickname of clan members / clan Leaderboard with PUBG rank scores

What have I learned:
* CORS, Cron Jobs, Heroku Hosting, HTTP Request, Promise, async/await, 

Repo:
* [Arirang Bot](https://github.com/erickim713/discordBot)
