---
title: "Moderation"
date: 2021-08-25T15:14:39+10:00
featured: false
description: The Moderation Module houses a range of basic moderation commands to take control of the server.
show: true
weight: 9
layout: command
---

The Moderation Module houses a range of basic moderation commands to take control of the server.

## Auto-Moderator

**[Click here](https://asraparadise.github.io/commands/automoderator) to view info on how the auto-moderation module behaves in Asra.**


## Setting Roles which are allowed to use Moderation commands

Before moderation commands can be used in a server, you must set the roles which are allowed to use the warn, mute, kick and ban commands.

You can do this using the server settings command:
`/settings setwarnrole`
`/settings setmuterole`
`/settings setkickrole`
`/settings setbanrole`

> **Warning:** This requires administrator perms to execute.


## Commands

| Command             | Description                                                   | Usage                         |
| ------------------- | ------------------------------------------------------------- | ----------------------------- |
| ban                 | Ban a user                                                    | `/ban [user] [reason]`        |
| bans                | Displays all the banned users in a server                     | `/bans`                       |
| delete warn         | Delete a warn for a user                                      | `/delwarn [user] [warnID]`    |
| kick                | Kick a user                                                   | `/kick [user] [reason]`       |
| mute                | Mute a user permanently or for a given time                   | `/mute [user] [reason] (time)`|
| report              | Report a user (No perms required)                             | `/report [user] [reason]`     |
| rules               | Display the rules or a specific rule (No perms required)      | `/rules (rule)`               |
| slowmode            | Enables slowmode for a channel                                | `/slowmode [time] [channel]`  |
| unban               | Unban a user                                                  | `/unban [userID] [reason]`    |
| unmute              | Unmute a user                                                 | `/unmute [user] [reason]`     |
| warn                | Warn a user                                                   | `/warn [user] [reason]`       |
| warnings            | Get all the warnings for a user                               | `/warnings [user]`            |