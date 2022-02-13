---
title: "Owner Commands - Asra"
header: "Owner"
date: 2021-08-25T15:14:39+10:00
featured: false
description: The Owner Module houses commands to adjust the settings of the server and the way the bot behaves.
show: true
weight: 10
layout: command
permalink: "/commands/asra/owner/"
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

To list all of the current settings for your server, use the command `/settings list`

To view a summary of which modules are enabled and disabled in your server, use the command `/modules`

- [Action Logs](https://asraparadise.github.io/commands/asra/owner/#action-logs)
- [Automod](https://asraparadise.github.io/commands/asra/owner/#automod)
- [Autoroles](https://asraparadise.github.io/commands/asra/owner/#autoroles)
- [Bump Reminders](https://asraparadise.github.io/commands/asra/owner/#bump-reminders)
- [Chatbot](https://asraparadise.github.io/commands/asra/owner/#chatbot)
- [Counting](https://asraparadise.github.io/commands/asra/owner/#counting)
- [Giveaways](https://asraparadise.github.io/commands/asra/owner/#giveaways)
- [Leave Message](https://asraparadise.github.io/commands/asra/owner/#leave-message)
- [Member Counter](https://asraparadise.github.io/commands/asra/owner/#member-counter)
- [Message Logs](https://asraparadise.github.io/commands/asra/owner/#message-logs)
- [Moderation Logs](https://asraparadise.github.io/commands/asra/owner/#moderation-logs)
- [Moderation - Warn](https://asraparadise.github.io/commands/asra/owner/#moderation---warn)
- [Moderation - Mute](https://asraparadise.github.io/commands/asra/owner/#moderation---mute)
- [Moderation - Kick](https://asraparadise.github.io/commands/asra/owner/#moderation---kick)
- [Moderation - Ban](https://asraparadise.github.io/commands/asra/owner/#moderation---ban)
- [Moderation - Muted Role](https://asraparadise.github.io/commands/asra/owner/#moderation---muted-role)
- [QOTD](https://asraparadise.github.io/commands/asra/owner/#qotd)
- [Suggestions](https://asraparadise.github.io/commands/asra/owner/#suggestions)
- [Welcome Message](https://asraparadise.github.io/commands/asra/owner/#welcome-message)

> **Be Aware:** Before many features can be used in your server, you must set them up using the settings command. Using the settings command requires administrator perms to execute.

#### Action Logs<br/>
Set the channel where events such as create or delete channel/role will be logged.<br/>
`/settings actionlog [channel]`

#### Automod<br/>
Setup automod. You can set an optional channel which Automod actions will be logged in.<br/>
`/settings automod (channel)`

#### Autoroles<br/>
Set the roles to be automatically given to any new user that joins. (Max 10)<br/>
`/settings autoroles [role1] (role2) ...`

#### Bump Reminders<br/>
Turn on bump reminders for the server and have an optional ping role. Bump reminders work with the DISBOARD bot.<br/>
`/settings bumpreminders (pingrole)`

#### Chatbot<br/>
Setup a channel where Asra will respond to all messages sent in using AI.<br/>
`/settings chatbot [channel]`

#### Counting<br/>
Setup a counting channel in your server.<br/>
`/settings counting [channel]`

#### Giveaways<br/>
Setup giveaways in your server by setting a role which can manage and create giveaways.<br/>
`/settings giveaways [role]`

#### Leave Message<br/>
Set the leave message you would like the bot to send when a user leaves. Click [here](https://asraparadise.github.io/commands/asra/owner/#variables-for-welcome-and-leave-messages) to see the variables you can use in the leave message.<br/>
`/settings leavemessage [channel] [message]`

#### Member Counter<br/>
Setup a channel which will have the member count of the server as the name and will update whenever a user joins or leaves.<br/>
The text parameter allows you to enter the text which should appear as the Discord channel name using the variable {count} E.g: Members: {count}
`/settings membercounter [type] [name]`

#### Message Logs<br/>
Set the channel where message events (edit/delete) will be logged.<br/>
`/settings messagelog [channel]`

#### Moderation Logs<br/>
Set the channel Moderator actions will be logged in.<br/>
`/settings moderationlog [channel]`

#### Moderation - Warn<br/>
Set the staff roles which should be allowed to warn, view warnings and delete warnings for server members. (Max 10)<br/>
`/settings warnmanagers [role1] (role2) ...`

#### Moderation - Mute<br/>
Set the staff roles which should be allowed to mute, and unmute server members. (Max 10)<br/>
`/settings mutemanagers [role1] (role2) ...`

#### Moderation - Kick<br/>
Set the staff roles which should be allowed to kick server members. (Max 10)<br/>
`/settings kickmanagers [role1] (role2) ...`

#### Moderation - Ban<br/>
Set the staff roles which should be allowed to ban, view all bans and unban server members. (Max 10)<br/>
`/settings banmanagers [role1] (role2) ...`

#### Moderation - Muted Role<br/>
Set the role which should be given to a muted member.<br/>
`/settings mutedrole [role]`

#### QOTD<br/>
Set the qotd channel, the role that can create them and the role to be pinged whenever one is created.<br/>
`/settings qotd [channel] [role] (pingrole)`

#### Suggestions<br/>
Set the channel Suggestions for your server from your members will be sent in.<br/>
`/settings suggestions [channel] [role]`

#### Welcome Message<br/>
Set the welcome message you would like the bot to send when a new user joins. The image link you provide should be to an online image hosting service such as imgur. Click [here](https://asraparadise.github.io/commands/asra/owner/#variables-for-welcome-and-leave-messages) to see the variables you can use in the welcome message.<br/>
`/settings welcomemessage [channel] [message] (imagelink)`


## Variables for welcome and leave messages

- {user} - The mention of the user calling the command. E.g: Hello {user}!
- {username} - The username of the user. E.g: Hello {username}!
- {server} - The server name
- {channel} - The current channel's name
- {@user} - Mention a specific user by replacing 'user' with the id of the user. E.g: {@728625544547008522}
- {@&role} - Mention a role by replacing 'role' with the role id. E.g: {@&800664298829250581}, We're streaming now!
- {#channel} - Mention a channel by replacing 'channel' with the id of the channel you want to link. E.g: Use {#800664365820936213} for all bot testing.
- {everyone} - @everyone
- {here} - @here
- {newline} - Add a newline



