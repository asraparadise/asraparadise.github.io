---
title: "Owner Commands - Asra"
header: "Owner"
date: 2021-08-25T15:14:39+10:00
featured: false
description: The Owner Module houses commands to adjust the settings of the server and the way the bot behaves.
show: true
weight: 10
layout: command
---

The Owner Module houses commands to adjust the settings of the server and the way the bot behaves.


## Commands

| Command              | Description                                                   | Usage                                  |
| -------------------- | ------------------------------------------------------------- | -------------------------------------- |
| modules              | Lists which server modules are enabled and disabled           | `/modules`                             |
| purge                | Purge chat messages                                           | `/purge [amount] (flag)`               |
| settings             | List or adjust the server's settings for the bot              | `/settings ...`                        |
| toggle command       | Toggle a command on or off                                    | `/toggle command [state] [command]`    |
| toggle module        | Enable or disable a module of the bot in this server          | `/toggle module [state] [module]`      |

## Modules

Below are the modules which are customisable and can be setup in your server.

- [Action Logs](https://asraparadise.github.io/commands/owner/#action-logs)
- [Automod](https://asraparadise.github.io/commands/owner/#automod)
- [Autoroles](https://asraparadise.github.io/commands/owner/#autoroles)
- [Chatbot](https://asraparadise.github.io/commands/owner/#chatbot)
- [Counting](https://asraparadise.github.io/commands/owner/#counting)
- [Giveaways](https://asraparadise.github.io/commands/owner/#giveaways)
- [Leave Message](https://asraparadise.github.io/commands/owner/#leave-message)
- [Member Counter](https://asraparadise.github.io/commands/owner/#member-counter)
- [Message Logs](https://asraparadise.github.io/commands/owner/#message-logs)
- [Moderation Logs](https://asraparadise.github.io/commands/owner/#moderation-logs)
- [Moderation - Warn](https://asraparadise.github.io/commands/owner/#moderation---warn)
- [Moderation - Mute](https://asraparadise.github.io/commands/owner/#moderation---mute)
- [Moderation - Kick](https://asraparadise.github.io/commands/owner/#moderation---kick)
- [Moderation - Ban](https://asraparadise.github.io/commands/owner/#moderation---ban)
- [Moderation - Muted Role](https://asraparadise.github.io/commands/owner/#moderation---muted-role)
- [QOTD](https://asraparadise.github.io/commands/owner/#qotd)
- [Suggestions](https://asraparadise.github.io/commands/owner/#suggestions)
- [Welcome Message](https://asraparadise.github.io/commands/owner/#welcome-message)

> **Be Aware:** Before many features can be used in your server, you must set them up using the settings command. Using the settings command requires administrator perms to execute.

To list all of the current settings for your server, use the command `/settings list`

To view a summary of which modules are enabled and disabled in your server, use the command `/modules`


#### Action Logs<br/>
Set the channel where events such as create or delete channel/role will be logged.<br/>
`/settings setactionlogchannel [channel]`

#### Automod<br/>
Setup automod. You can set an optional channel which Automod actions will be logged in.<br/>
`/settings setupautomod (channel)`

#### Autoroles<br/>
Set the roles to be automatically given to any new user that joins. (Max 10)<br/>
`/settings setupautoroles [role1] (role2) ...`

#### Chatbot<br/>
Setup a channel where Asra will respond to all messages sent in using AI.<br/>
`/settings setupchatbot [channel]`

#### Counting<br/>
Setup a counting channel in your server.<br/>
`/settings setupcounting [channel]`

#### Giveaways<br/>
Setup giveaways in your server by setting a role which can manage and create giveaways.<br/>
`/settings setupgiveaways [role]`

#### Leave Message<br/>
Set the leave message you would like the bot to send when a user leaves. Click [here](https://asraparadise.github.io/commands/owner/#variables-for-welcome-and-leave-messages) to see the variables you can use in the leave message.<br/>
`/settings setleavemessage [channel] [message]`

#### Member Counter<br/>
Setup a channel which will have the member count of the server as the name and will update whenever a user joins or leaves.<br/>
`/settings setupmembercounter [channel]`

#### Message Logs<br/>
Set the channel where message events (edit/delete) will be logged.<br/>
`/settings setmessagelogchannel [channel]`

#### Moderation Logs<br/>
Set the channel Moderator actions will be logged in.<br/>
`/settings setmoderationlogchannel [channel]`

#### Moderation - Warn<br/>
Set the staff roles which should be allowed to warn, view warnings and delete warnings for server members. (Max 10)<br/>
`/settings setstaffwarnrole [role1] (role2) ...`

#### Moderation - Mute<br/>
Set the staff roles which should be allowed to mute, and unmute server members. (Max 10)<br/>
`/settings setstaffmuterole [role1] (role2) ...`

#### Moderation - Kick<br/>
Set the staff roles which should be allowed to kick server members. (Max 10)<br/>
`/settings setstaffkickrole [role1] (role2) ...`

#### Moderation - Ban<br/>
Set the staff roles which should be allowed to ban, view all bans and unban server members. (Max 10)<br/>
`/settings setstaffbanrole [role1] (role2) ...`

#### Moderation - Muted Role<br/>
Set the role which should be given to a muted member.<br/>
`/settings setmutedrole [role]`

#### QOTD<br/>
Set the qotd channel, the role that can create them and the role to be pinged whenever one is created.<br/>
`/settings setupqotd [channel] [role] (pingrole)`

#### Suggestions<br/>
Set the channel Suggestions for your server from your members will be sent in.<br/>
`/settings setupsuggestions [channel] [role]`

#### Welcome Message<br/>
Set the welcome message you would like the bot to send when a new user joins. The image link you provide should be to an online image hosting service such as imgur. Click [here](https://asraparadise.github.io/commands/owner/#variables-for-welcome-and-leave-messages) to see the variables you can use in the welcome message.<br/>
`/settings setwelcomemessage [channel] [message] (imagelink)`


## Variables for welcome and leave messages

{user} - The mention of the user calling the command. Eg: Hello {user}!<br/>
{username} - The username of the user. Eg: Hello {username}!<br/>
{server} - The server name<br/>
{channel} - The current channel's name<br/>
{@user} - Mention a specific user by replacing 'user' with the id of the user. Eg: {@728625544547008522}<br/>
{@&role} - Mention a role by replacing 'role' with the role id. Eg: {@&800664298829250581}, We're streaming now!<br/>
{#channel} - Mention a channel by replacing 'channel' with the id of the channel you want to link. Eg: Use {#808397725573447711} for all bot testing.<br/>
{everyone} - @ everyone<br/>
{here} - @ here<br/>
{newline} - Add a newline<br/>



