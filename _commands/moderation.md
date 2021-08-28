---
title: "Moderation"
date: 2021-08-25T15:14:39+10:00
featured: false
weight: 9
layout: command
---

The Moderation Module houses a range of basic moderation commands to take control of the server.

## Auto-Moderator

[Click here](https://asraparadise.github.io/commands/automoderator) to view info on how the auto-moderation module behaves in Asra.


## How to Enable/Disable Commands

To enable or disable a command use the following command:

`a!toggle on/off [command name]`

> **Warning:** This requires administrator perms to execute.


## Commands

| Command      | Role Required | Usage                           |
| ------------ | ------------- | ------------------------------- |
| rule         | None          | `a!rule [num]`                  |
| who is       | None          | `a!whois [user]`                |
| report       | None          | `a!report [user] [reason]`      |
| warn         | Staff         | `a!warn [user] [reason]`        |
| warnings     | Staff         | `a!warnings [user]`             |
| mute         | Staff         | `a!mute [user] [time] [reason]` |
| unmute       | Staff         | `a!unmute [user] (reason)`      |
| afk clear    | Moderator     | `a!afk clear [user]`            |
| kick         | Senior Mod    | `a!kick [user] [reason]`        |
| delete warn  | Senior Mod    | `a!delwarn [user] [warnID]`     |
| ban          | Admin         | `a!ban [user] [limit] [reason]` |
| unban        | Admin         | `a!unban [user id] [reason]`    |
| slowmode     | Admin         | `a!slowmode [time] (channel)`   |
| lock         | Admin         | `a!lock [channel] (reason)`     |
| unlock       | Admin         | `a!unlock [channel] (reason)`   |
| lockdown     | Admin         | `a!lockdown (end) (reason)`     |