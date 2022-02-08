---
title: "Reaction Roles - Asra"
header: "Reaction Roles"
date: 2021-08-25T15:14:39+10:00
featured: false
description: Reaction roles allows you to add reactions to a message that members can react to to get or remove a role(s).
show: true
weight: 11
layout: command
permalink: "/commands/asra/reactionrole/"
---

## Overview 

_________________

Reaction roles allows you to add reactions to a message that members can react to to get or remove a role(s).

> #### Permissions Check
>
> - Make sure Asra has this permission in your server: `Manage Roles`
> - Make sure Asra has these permissions in your Reaction Roles channel(s): 
> `View Channel`, `Send Messages`, `Embed Links`, `Add Reactions`
>
> ***Limits to keep in mind:***
>
> - All servers can have a max of 20 reactions/buttons/dropdowns per message.

## How to set up Reaction Roles with Asra

_________________

View what reaction roles have been set up in your server using `/reactionrole list`.

To setup a new reaction role, use the command `/reactionrole add [channel] [messageid] [emoji] [role]`.

> 💡 **Tip:** To get a message ID, right click the message on Discord, then click Copy ID. If you don’t see the copy ID option, make sure you have developer mode on. You can find it in your User Settings -> Advanced.


## Editing/Deleting a Reaction Role

_________________

To edit a reaction role, re-run the `/reactionrole add [channel] [messageid] [emoji] [role]` command and it will overwrite any changes made.

<br>
To delete a reaction role, use the command `/reactionrole remove [channel] [messageid] [emoji]`.

Note: Asra will not delete the message or remove the reactions from the reaction role message when deleted.

> ⚠️ **Warning:** Manually deleting the reaction role message will not remove it from the reaction role list, make sure to delete it using the remove command for it to truly be deleted.