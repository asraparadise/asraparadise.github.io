---
title: "Auto Moderator - Asra"
header: "Auto-Moderator"
date: 2021-08-25T15:14:39+10:00
featured: false
description: The Auto-Moderator will automatically moderate your server and includes several different modules including word and link blacklist and mention spam detection.
show: false
weight: 13
layout: command
permalink: "/commands/asra/automoderator"
---

The Auto-Moderator will automatically moderate the text channels in Asra Paradise. It includes a number of different modules including a word blacklist, mention spam and links/server invite detector.

> **Be Aware:** Automod needs setting up in a server before it will work! Use the command `/settings setupautomod (channel)`. The channel is optional and is where automod actions will be logged.

## Banned Words

The Bad Words module blacklists certain words from being said in the discord server. 

#### Punishment

Messages that go against the blacklist are automatically deleted and logged in \#🚫│moderation-log.

## Server Invites

The Server Invites module will automatically stop people from sending server invites in Asra.

#### Punishment

Messages that contain a server invite link are automatically deleted and logged in \#🚫│moderation-log.

## Mass Mentions

The mass mentions will delete any message that is greater than or equal to 5 mentions. 

#### Punishment

Messages that contain mass mention spam are automatically deleted and logged in \#🚫│moderation-log. 

The user will also be muted.

## Fast Message Spam

The Antispam module will automatically stop people from spamming messages in most text channels in Asra.

#### Punishment

Spammed messages are automatically deleted. This is not logged in a channel.

## Duplicate Text

Duplicate Text detects a message that contains repeated text, as well as repeated newlines and deletes it.

#### Punishment

Messages containing duplicated text are deleted automatically and logged in \#🚫│moderation-log.  

> **Danger:** The Duplicate Text Module is currently disabled.

