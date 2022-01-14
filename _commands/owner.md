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
| modules              | Lists whether server modules are enabled or disabled          | `/modules`                             |
| purge                | Purge chat messages                                           | `/purge [amount] (flag)`               |
| settings             | List or adjust the server's settings for the bot              | `/settings ...`                        |
| toggle command       | Toggle a command on or off                                    | `/toggle command [state] [command]`    |
| toggle module        | Enable or disable a module of the bot in this server          | `/toggle module [state] [module]`      |

## Modules

Below are the modules which are customisable and can be setup in your server.

- Action Logs
- Automod
- Autoroles
- Counting
- Giveaways
- Leave Message
- Message Logs
- Moderation Logs
- Moderation - Warn
- Moderation - Mute
- Moderation - Kick
- Moderation - Ban
- Moderation - Muted Role
- QOTD
- Suggestions
- Welcome Message

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

#### Counting<br/>
Setup a counting channel in your server.<br/>
`/settings setupcounting [channel]`

#### Giveaways<br/>
Setup giveaways in your server by setting a role which can manage and create giveaways.<br/>
`/settings setupgiveaways [role]`

#### Leave Message<br/>
Set the leave message you would like the bot to send when a user leaves.<br/>
`/settings setleavemessage [channel] [message]`

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
Set the welcome message you would like the bot to send when a new user joins.<br/>
`/settings setwelcomemessage [channel] [message] (imagelink)`
