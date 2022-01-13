---
title: FAQ - Asra
header: FAQ
layout: page
description: Asra is a fully customizable, multipurpose discord bot for your Discord server. With a global economy system, custom welcome messages, giveaways, moderation, anti-spam, auto roles, tickets, and much more!
bodyClass: page-faq
---

# General Frequently Asked Questions

Here you can find some of the most frequently asked questions from our support channels.

If you don’t know how to use a command, you can run `/help (commandname)` and Asra will respond with info about that command. For usage, see the commands list on the Asra website.

If you can’t find the answer you’re looking for here or have a feature request, join us in the [Asra Support Server](https://discord.com/invite/qwCzwBvRn9) and ask!


## 👋 Who is behind Asra?

Asra was created by Disguised#4241 on the and was orginally intended as a bot solely for the Asra Paradise Community Server which opened on the 18th January 2021.

You can read more about us on our [Team page](https://asraparadise.github.io/team).


## Asra is not responding to commands, what do I do?

If Asra is online, try the following:

- First type `@Asra` and see if the bot responds.
- Make sure Asra has the Administrator permission.
- Check whether the command you’re trying to use is enabled by seeing if the response `This command has been disabled` appears or alternatively use `/settings list` to check if the feature has been disabled. If disabled, you can enable them using the command `/toggle command [state] [command]` or `/settings` depending on whether it is a command or feature that has been disabled.

If none of these work or if Asra is offline, please head over to our [support server](https://discord.com/invite/qwCzwBvRn9).


## Logs aren’t working on my server, what do I do?

- Check if the feature is disabled in your server by doing `/settings list`
- If the feature is enabled and a channel has been set, check if Asra can Read Messages and Send Messages in the log channel, as well as Embed Links.

If none of these work, don’t hesitate to join our [support server](https://discord.com/invite/qwCzwBvRn9).

> ℹ️ **Note:** This applies to all logging modules including actionlogs, moderation logs, and automod logs.


## Asra won’t give roles or autoroles, how can I fix this?
For Asra to be able to manage or moderate any role, it has to be higher then the role you want it to give or remove in the role settings screen of your discord. Otherwise, Asra will not be able to manage users who have the role.

Drag the role above any roles you want it to manage, as shown above. To learn more about role hierarchy, [click here](https://support.discord.com/hc/en-us/articles/214836687-Role-Management-101).


## 👨‍💻 How can I request features?

Request features or commands for the bot with the following command:

`/botsuggest [suggestion]`



## How can I get Asra premium? 
You can get Asra premium [here](https://www.patreon.com/asraparadise)!

# Moderation Frequently Asked Questions

## Why can users send messages when they have the muted role?
This is most likely due to channel permissions. Configure your channel’s send message perms to be neutral for all roles (which includes everyone role) and deny it for the muted role.


## Why can’t I purge messages older than 14 days in a channel?
Discord doesn’t allow bots to purge (bulk delete) messages that are older than 14 days old.

If you would like to completely purge a channel, you can right click on the channel and select “Clone Channel”. This will create a new channel with the exact same settings as the old. You can then delete or archive the old channel.


## How do I unban someone?
You need to use the user's ID to unban them since they won't be in the server. Use the command `/unban [userID] [reason]`

To get a user’s ID, right click their profile anywhere on Discord, then click Copy ID.

> ℹ️ **Note:** If you don’t see the copy ID option, make sure you have developer mode on. You can find it in your User Settings -> Advanced.