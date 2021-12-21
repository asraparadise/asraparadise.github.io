---
title: "Owner"
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

**Welcome Message**
Set the welcome message you would like the bot to send when a new user joins
`/settings setwelcomemessage [channel] [message] (imagelink)`

**Leave Message**
Set the leave message you would like the bot to send when a user leaves
`/settings setleavemessage [channel] [message]`

**Join Autorole**
Set a role to be automatically given to any new user that joins
`/settings setautorole [role]`

**Moderation Log Channel**
Set the channel Moderator actions will be logged in.
`/settings setmoderationlogchannel [channel]`

**Automod Log Channel**
Set the channel Automod actions will be logged in.
`/settings setautomodlogchannel [channel]`

**Action Log Channel**
Set the channel where events such as create or delete channel/role will be logged.
`/settings setactionlogchannel [channel]`

**Message Log Channel**
Set the channel where message events (edit/delete) will be logged.
`/settings setmessagelogchannel [channel]`

**Muted Role**
Set a role to be given to a muted member
`/settings setmutedrole [role]`

**QOTD**
Set the qotd channel, the role that can create them and the role to be pinged whenever one is created
`/settings setupqotd [channel] [role] (pingrole)`

**Staff Warn Role**
Set the staff roles which should be allowed to warn, view warnings and delete warnings for server members
`/settings setstaffwarnrole [role1] (role2) ...`

**Staff Mute Role**
Set the staff roles which should be allowed to mute, and unmute server members
`/settings setstaffmuterole [role1] (role2) ...`

**Staff Kick Role**
Set the staff roles which should be allowed to kick server members
`/settings setstaffkickrole [role1] (role2) ...`

**Staff Ban Role**
Set the staff roles which should be allowed to ban, view all bans and unban server members
`/settings setstaffbanrole [role1] (role2) ...`

> **Warning:** Using the settings command requires administrator perms to execute.
