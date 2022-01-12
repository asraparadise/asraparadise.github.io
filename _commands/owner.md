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
| dm                   | Dm a user through the bot with a message                      | `/dm [user] [message]`                 |
| purge                | Purge chat messages                                           | `/purge [amount] (flag)`               |
| say                  | Get the bot to say a message in the selected channel          | `/say [channel] [message]`             |
| settings             | List or adjust the server's settings for the bot              | `/settings ...`                        |
| toggle command       | Toggle a command on or off                                    | `/toggle [state] [command]`            |
| toggle setting       | Enable or disable a feature of the bot in this server         | `/toggle [state] [setting]`            |


## Server Settings

Before many features can be used in your server, you must set them up using the settings command.

Here are the server settings commands:

**List All Settings**<br/>
Lists all of the current settings for your server.<br/>
`/settings list`<br/>


**Welcome Message**<br/>
Set the welcome message you would like the bot to send when a new user joins.<br/>
`/settings setwelcomemessage [channel] [message] (imagelink)`

**Leave Message**<br/>
Set the leave message you would like the bot to send when a user leaves.<br/>
`/settings setleavemessage [channel] [message]`

**Join Autorole**<br/>
Set a role to be automatically given to any new user that joins.<br/>
`/settings setautorole [role]`

**Suggestions**<br/>
Set the channel Suggestions for your server from your members will be sent in.<br/>
`/settings setsuggestionchannel [channel]`

**Moderation Log Channel**<br/>
Set the channel Moderator actions will be logged in.<br/>
`/settings setmoderationlogchannel [channel]`

**Automod Log Channel**<br/>
Set the channel Automod actions will be logged in.<br/>
`/settings setautomodlogchannel [channel]`

**Action Log Channel**<br/>
Set the channel where events such as create or delete channel/role will be logged.<br/>
`/settings setactionlogchannel [channel]`

**Message Log Channel**<br/>
Set the channel where message events (edit/delete) will be logged.<br/>
`/settings setmessagelogchannel [channel]`

**Muted Role**<br/>
Set a role to be given to a muted member.<br/>
`/settings setmutedrole [role]`

**QOTD**<br/>
Set the qotd channel, the role that can create them and the role to be pinged whenever one is created.<br/>
`/settings setupqotd [channel] [role] (pingrole)`

**Staff Warn Role**<br/>
Set the staff roles which should be allowed to warn, view warnings and delete warnings for server members.<br/>
`/settings setstaffwarnrole [role1] (role2) ...`

**Staff Mute Role**<br/>
Set the staff roles which should be allowed to mute, and unmute server members.<br/>
`/settings setstaffmuterole [role1] (role2) ...`

**Staff Kick Role**<br/>
Set the staff roles which should be allowed to kick server members.<br/>
`/settings setstaffkickrole [role1] (role2) ...`

**Staff Ban Role**<br/>
Set the staff roles which should be allowed to ban, view all bans and unban server members.<br/>
`/settings setstaffbanrole [role1] (role2) ...`

> **Warning:** Using the settings command requires administrator perms to execute.
