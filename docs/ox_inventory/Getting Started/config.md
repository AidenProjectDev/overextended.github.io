---
sidebar_position: 2
---

# Configuration

You can add these settings directly to your 'server.cfg', or add them to a separate file (i.e. inventory.cfg) and call it with `exec`.

:::caution

Convars **must** be set before starting ox_inventory.
:::

The values below are _defaults_ and should not be explicitly set unless changing the value.

```yaml
### Shared

# Activate specific event handlers and functions (supported: ox, esx, qb, nd)
setr inventory:framework "esx"

# Number of slots for player inventories
setr inventory:slots 50

# Maximum carry capacity for players, in grams (frameworks may override this)
setr inventory:weight 30000

# Integrated support for qtarget/ox_target stashes, shops, etc
# Note: qtarget is deprecated, a future update may drop support (ox_target only, or gated features)
setr inventory:target false

# Jobs with access to police armoury, evidence lockers, etc
setr inventory:police ["police", "sheriff"]

### Client

# The URL to load item images from
setr inventory:imagepath "nui://ox_inventory/web/images"

# Weapons will reload after reaching 0 ammo
setr inventory:autoreload false

# Blur the screen while accessing the inventory
setr inventory:screenblur true

# Default hotkeys to access primary and secondary inventories, and hotbar
setr inventory:keys ["F2", "K", "TAB"]

# Enable control action when inventory is open
setr inventory:enablekeys [249]

# Weapons must be aimed before shooting
setr inventory:aimedfiring false

# Show a list of all nearby players when giving items
setr inventory:giveplayerlist true

# Toggle weapon draw/holster animations
setr inventory:weaponanims true

# Toggle item notifications (add/remove)
setr inventory:itemnotify true

# Disable drop markers and spawn a prop instead
setr inventory:dropprops true

# Disarm the player if an unexpected weapon is in use (i.e. did not use the weapon item)
setr inventory:weaponmismatch true

# Ignore weapon mismatch checks for the given weapon type (e.g. ['WEAPON_SHOVEL', 'WEAPON_HANDCUFFS'])
setr inventory:ignoreweapons []


### Server

# Compare current version to latest release on GitHub
set inventory:versioncheck true

# Stashes will be wiped after remaining unchanged for the given time
set inventory:clearstashes "6 MONTH"

# Discord webhook url, used for imageurl metadata content moderation (image embeds)
set inventory:webhook ""

# Logging via ox_lib (0: Disable, 1: Standard, 2: Include AddItem/RemoveItem, and all shop purchases)
set inventory:loglevel 1

# Item prices fluctuate in shops
set inventory:randomprices true

# Loot will randomly generate inside unowned vehicles and dumpsters
set inventory:randomloot true

# Minimum job grade to remove items from evidence lockers
set inventory:evidencegrade 2

# Trim whitespace from vehicle plates when checking owned vehicles
setr inventory:trimplate true

# Set the contents of randomly generated inventories
# [item name, minimum, maximum, loot chance]
set inventory:vehicleloot [
    ["cola", 1, 1],
    ["water", 1, 1],
    ["garbage", 1, 2, 50],
    ["panties", 1, 1, 5],
    ["money", 1, 50],
    ["money", 200, 400, 5],
    ["bandage", 1, 1]
]

set inventory:dumpsterloot [
    ["mustard", 1, 1],
    ["garbage", 1, 3],
    ["money", 1, 10],
    ["burger", 1, 1]
]
```
