# Mindustry Custom Balance Mod

This project serves as documentation for a custom balance modification for Mindustry. The current rebalance mod is outdated. For playtesting, please use the custom JAR rebalance available at: https://github.com/StalkerBaran/Mindustry/releases/tag/mindustry

This document details the balance changes between version 152.2 and the custom balance implementation.

## Overview

This custom balance mod focuses on rebalancing several key aspects of Mindustry gameplay:

- **Defense Structures**: Wall health increases, support structure adjustments
- **Turrets**: Damage, reload, and ammo type modifications
- **Units**: Speed, health, armor, and weapon adjustments
- **Factories**: Production cost and requirement adjustments
- **Status Effects**: Damage modifications

## Quick Reference

For detailed changes, see:

- **[Turret Changes](docs/turrets-changes.md)**
- **[Unit Changes](docs/units-changes.md)**
- **[Wall Changes](docs/walls-changes.md)**

## Highlights

### Defense Structures

**Wall Health Increases:**
- Plastanium Wall: health 125 → 160
- Phase Wall: health 150 → 180
- Surge Wall: health 230 → 245

**Support Structures:**
- Overdrive Projector: Lead requirement 100 → 210
- Overdrive Dome: Power consumption increases
- Shock Mine: Health 50 → 30, Tendrils 4 → 7

**Core Armor Additions:**
- Shard: Health 1100 → 2000, Armor 0 → 3
- Foundation: Armor 0 → 5
- Nucleus: Health 6000 → 9000, Armor 0 → 8

### Turret Changes

**Light Turrets:**
- Duo: Copper ammo damage 9 → 13
- Scatter: Rebalanced splash damage and effectiveness
- Arc: Lightning damage 20 → 13

**Medium Turrets:**
- Lancer: Damage 140 → 120
- Salvo: Various ammo types rebalanced
- Swarmer: Improved ammo types

**Heavy Turrets:**
- Ripple: Cost adjustments, improved Pyratite ammo
- Cyclone: Major Metaglass ammo improvements
- Spectre: Damage increases across all ammo types

**Super Heavy Turrets:**
- Meltdown: Damage 936/sec → 1560/sec, Building damage multiplier 0.2x → 0.5x
- Foreshadow: Improved coolant effectiveness, Range 260 → 273

### Unit Changes

**Ground Units:**
- Generally increased speed and rotation speed
- Armor additions to most units
- Dagger: Speed 0.5 → 0.64, Armor added 2
- Reign: Armor 18 → 27, Health 24000 → 25000

**Air Units:**
- Health rebalancing
- Improved rotation speeds across the board
- Eclipse: Significant improvements (Damage 115 → 130)

**Naval Units:**
- Improved rotation speeds for all naval units
- Navanax: Armor 16 → 23, Health 20000 → 27000
- Corvus: Health 18000 → 15000

**Support Units:**
- Nova: Improved build speed (0.3 → 0.5), expanded repair field range
- Poly: Health 400 → 170, improved repair field cooldown

### Factory and Production Changes

**Ground Factory:**
- Requirements: Copper 50 → 120, Lead 120 → 70
- Adjusted production costs for Dagger, Crawler, Nova

**Air Factory:**
- Requirements: Titanium 0 → 35 added

**Reconstructors:**
- Additive Reconstructor: Reduced consumption (Silicon 40 → 30, Graphite 40 → 30)
- Repair Point: Repair speed 3 → 1.5

### Status Effects

**Burning:**
- Added reload multiplier: 0.9
- Added speed multiplier: 0.9
- Transition damage: 8 → 12

**Freezing:**
- Transition damage: 18 → 14

**Wet:**
- Transition damage: 14 → 13

## Implementation Notes

All changes have been carefully balanced to:
- Improve late-game unit viability
- Increase turret effectiveness against heavier units
- Make support structures more impactful but costlier
- Enhance unit mobility and responsiveness
- Create more meaningful ammo type choices

## Backup

A backup of the original README is available as README.backup.md

---
- Thorium ammo: added pierce cap of 2 (cannot pierce buildings)
- Thorium ammo: reload multiplier 0.7x
- Thorium ammo: knockback 1.5
- Reload time: 31 → 32
- Added inaccuracy: 5

#### Wave Turret
- Slag ammo: lifetime 49 → 58
- Slag ammo: added range change +32
- Cryofluid ammo: lifetime 49 → 56
- Cryofluid ammo: added range change +20
- Oil ammo: lifetime 49 → 58
- Oil ammo: added range change +32

#### Ripple Turret
- Build cost: copper 150 → 175, graphite 135 → 90, titanium 60 → 70
- Graphite ammo: knockback 0.8 → 1.2
- Graphite ammo: projectile size 11 → 16
- Pyratite ammo: projectile size 13 → 17
- Pyratite ammo: splash damage radius 18.75 → 38
- Pyratite ammo: splash damage 45 → 48


### Foreshadow Turret Changes

**Blast Compound Ammo:**
- Projectile size: width/height 14 → 18
- Splash damage radius: 33.75 (45 × 0.75) → 42
- Splash damage: 55 → 75
- Added reload multiplier: 0.7×

**Plastanium Ammo:**
- Splash damage: 45 → 32
- Fragment bullet damage: 10 → 12
- Fragment bullets: 10 → 5

### Cyclone Turret Changes

**Metaglass Ammo:**
- Direct damage: 6 → 13
- Ammo multiplier: 2× → 5×
- Reload multiplier: 0.8× → 1.2×
- Splash damage: 45 → 32
- Fragment bullet damage: 12 → 8
- Fragment bullets: 4 → 10
- Added building damage multiplier: 0.3× (for fragments)

**Blast Compound Ammo:**
- Direct damage: 8 → 12
- Splash damage: 45 → 55

**Plastanium Ammo:**
- Direct damage: 8 → 15
- Splash damage: 37.5 → 35

**Surge Alloy Ammo:**
- Splash damage radius: 38 → 35
- Lightning bolts: 2 → 3
- Added lightning damage: 12



## Spectre Turret (Continued)

**Surge Alloy Ammo:**
- Added reload multiplier: 0.8×

**Base Stats:**
- Rotate speed: 10 → 7
- Coolant consumption: 0.3 → 0.2

**Meltdown Turret:**
- Building damage multiplier: 0.2× → 0.5×
- Rotate speed: 2 → 1.3
- Reload time: 200 → 270
- Coolant multiplier: 0.4× → 1×

**Spectre Turret (Ammo Changes):**

**Graphite Ammo:**
- Damage: 50 → 75
- Ammo multiplier: 4× → 3×
- Knockback: 0.3 → 1

**Thorium Ammo:**
- Damage: 80 → 120
- Knockback: 0.7 → 1.3
- Added ammo multiplier: 2×

**Pyratite Ammo:**
- Damage: 70 → 110
- Knockback: 0.6 → 0.7
- Splash damage: 20 → 32

**Base Stats:**
- Reload time: 7 → 7.5
- Rotate speed: Added 1.4

### Turret Changes (Continued)

**Foreshadow:**
- coolantMultiplier: 0.5 → 1
- range: 260 → 273
- maxAmmo: added (90)

**Meltdown:**
- rotateSpeed: added (1.3)
- reload: 90 → 170
- damage: 78 → 130

### Factory and Unit Production Changes

**Ground Factory:**
- requirements: copper 50 → 120, lead 120 → 70
- Dagger production cost: silicon 10 → 15
- Crawler production cost: silicon 8 → 10, coal 10 → 8
- Nova production cost: silicon 30 → 25, lead 20 → 10, titanium unchanged at 20, metaglass 15 added

**Air Factory:**
- requirements: copper 60 → 110, lead 70 → 80, titanium 35 added

**Naval Factory:**
- Retusa production cost: metaglass 25 added (silicon 15, titanium 20 unchanged)

**Additive Reconstructor:**
- consumeItems: silicon 40 → 30, graphite 40 → 30

**Repair Point:**
- repairSpeed: 3 → 1.5

### Status Effect Changes

**Burning:**
- reloadMultiplier: 0.9 added
- speedMultiplier: 0.9 added
- transitionDamage: 8 → 12


### Status Effects

**Freezing Status Effect:**
- Transition damage: 18 → 14

**Wet Status Effect:**
- Transition damage: 14 → 13

### Ground Units - Continued

**Dagger:**
- Speed: 0.5 → 0.64
- Rotate speed: added 7
- Health: 150 → 120
- Armor: added 2
- Weapon reload: 13 → 20
- Weapon bullet damage: 9 → 12
- Weapon bullet lifetime: 60 → 56

**Mace:**
- Speed: 0.5 → 0.61
- Rotate speed: added 4
- Health: 550 → 510
- Armor: 4 → 5
- Flamethrower bullet damage: 37 → 27

**Fortress:**
- Speed: 0.43 → 0.5
- Rotate speed: 3 → 3.2
- Health: 900 → 910
- Armor: 9 → 10
- Artillery bullet speed: 2 → 2.5
- Artillery bullet lifetime: 120 → 94.8
- Artillery splash damage: 80 → 70

**Scepter:**
- Speed: 0.36 → 0.52
- Rotate speed: 2.1 → 3
- Health: 9000 → 9100
- Armor: 10 → 14
- Small bullet damage: 10 → 23
- Small bullet lifetime: 50 → 55
- Main bullet damage: 80 → 70
- Main bullet lifetime: 27 → 22

**Reign:**
- Speed: 0.4 → 0.48
- Rotate speed: 1.65 → 2.6
- Health: 24000 → 25000
- Armor: 18 → 27
- Main bullet lifetime: 15 → 17.1
- Fragment bullet lifetime: 20 → 17

**Nova:**
- Speed: 0.55 → 0.68
- Rotate speed: added 7
- Health: 120 → 90
- Build speed: 0.3 → 0.5
- Armor: 1 → 3
- Repair field range: 60 → 90
- Repair field: added same type heal multiplier 0.5
- Weapon bullet damage: 13 → 15

**Pulsar Unit Changes:**
- Speed: 0.7 → 0.732
- Health: 320 → 290
- Mine speed: 3 → 3.5
- Shield Regen Field Ability: range 30 seconds → 150 seconds
- Heal shotgun weapon bullet:
  - Heal percent: 5% → 1%
  - Added heal amount: 10
- Lightning bullet:
  - Damage: 15 → 13
  - Lightning length: 8 → 7
  - Heal percent: 1.6% → 0.75%

**Quasar Unit Changes:**
- Boost multiplier: 2 → 1.9
- Health: 640 → 750
- Armor: 9 → 8
- Speed: 0.5 → 0.535
- Added rotate speed: 5
- Mine speed: 4
- Force Field Ability:
  - Regen: 0.4 → 0.3
  - Max: 500 → 512
  - Cooldown: 360 seconds → 180 seconds
- Beam weapon laser bullet:
  - Damage: 45 → 52
  - Heal percent: 10% → 5%
  - Added heal amount: 35
  - Length: 150 → 135

**Vela Unit Changes:**
- Rotate speed: 1.8 → 3.2


## Naval Unit Changes - Part 1

### Heavy Air/Naval Units

**Unnamed Heavy Unit (Lines 471-535)**
- Speed: 0.44 → 0.56
- Boost multiplier: 2.4 → 1.6
- Health: 8200 → 7800
- Armor: 9 → 13
- Repair beam speed: 1.4 → 1.94

**Corvus**
- Health: 18000 → 15000
- Armor: 9 → 12
- Speed: 0.3 → 0.36
- Main weapon reload time: 350 → 540
- Weapon now fires 3 shots with 30-frame delay between shots
- Shoot status duration: 120 frames → 144 frames
- Laser length: 460 → 415
- Laser damage: 560 → 74
- Laser lifetime: 65 → 47
- Added building damage multiplier: 3x
- Lightning damage: 50 → 17
- Heal percentage: 25% → 18%

### Light Naval Units

**Unnamed Light Unit (Line 627)**
- Health: 150 → 110


## Naval Unit Changes - Part 2

### Spider Units (Ground/Naval)

**Atrax**
- Speed: 0.6 → 0.84
- Rotate speed: 3 → 7.5
- Health: 600 → 370
- Weapon damage: 13 → 12

**Spiroct**
- Speed: 0.54 → 0.828
- Rotate speed: 3 → 7
- Health: 1000 → 1100
- Armor: 5 → 7

**Arkyid**
- Speed: 0.62 → 0.92
- Health: 8000 → 7800
- Armor: 6 → 12
- Rotate speed: 2.7 → 4
- Artillery weapon splash damage: 65 → 75

**Toxopid**
- Speed: 0.5 → 0.68
- Health: 22000 → 21000
- Armor: 13 → 18
- Rotate speed: 1.9 → 1.8
- Shrapnel weapon damage: 110 → 180
- Artillery weapon damage: 50 → 110


## Support and Utility Unit Changes

### Flare
- Projectile lifetime: 80 → 73

### Mono
- Health: 70 → 35
- Rotation speed: added 9
- Weapon reload: 20 → 15
- Bullet damage: 9 → 10

### Horizon
- Health: 340 → 240
- Rotation speed: added 7
- Speed: 1.65 → 2.2
- Bomb projectile speed: 27 → 23

### Zenith
- Health: 700 → 510
- Rotation speed: added 5.2
- Drag: 0.016 → 0.043
- Missile lifetime: 50 → 55

### Antumbra
- Speed: 0.8 → 0.72
- Rotation speed: 1.9 → 2.2
- Health: 7200 → 8100
- Armor: 9 → 8
- Missile damage: 18 → 23
- Missile width: 8 → 8.5
- Missile height: 8 → 8.5
- Missile splash radius: 20 → 33

### Antumbra Changes

**Antumbra** (Heavy bomber aircraft):
- Speed: 0.8 → 0.72
- Rotation speed: 1.9 → 2.2
- Health: 7200 → 8100
- Armor: 9 → 8

**Missile weapon**:
- Damage: 18 → 23
- Width: 8 → 8.5
- Height: 8 → 8.5
- Splash damage radius: 20 → 33
- Lifetime: 50 → 62

**Artillery weapon**:
- Lifetime: 25 → 32.5

### Eclipse Changes

**Eclipse** (Flagship bomber):
- Speed: 0.54 → 0.66
- Rotation speed: 1.0 → 1.9
- Armor: 13 → 17

**Flak bullet**:
- Damage: 15 → 35
- Lifetime: 47 → 65

**Laser weapon**:
- Damage: 115 → 130
- Length: 230 → 257

### Poly Changes

**Poly** (Support/builder unit):
- Health: 400 → 170
- Armor: 0 → 1
- Build speed: 0.5 → 0.3
- Repair field ability cooldown: 480 → 112
- Heal percent: 5.5% → 3%

### Mega Changes

**Mega** (Advanced support unit):
- Health: 460 → 380
- Armor: 3 → 2
- Rotation speed: added at 7
- Speed: 2.5 → 2.56
- Drag: 0.017 → 0.04



## Support Unit Healing Changes

### Poly Healing Weapon
- Healing laser bolt: healPercent 5.5% → 3%, healAmount added 7.5

### Mega Healing Weapon
- Healing laser bolt: healPercent 3% → 2%, healAmount added 5.5

### Quad Support Unit
- Rotate speed: 2 → 3
- Build speed: 2.5 → 3.5

### Oct Heavy Support Unit
- Armor: 16 → 15
- Health: 24000 → 18000
- Rotate speed: 1 → 3
- Force field ability: regen 4 → 10, max 7000 → 12000
- Repair field ability: amount 130 → 700

## Naval Unit Changes

### Risso Light Naval Unit
- Speed: 1.1 → 1.03
- Health: 280 → 220
- Rotate speed: 3.3 → 8
- Main weapon bullet lifetime: 60 → 48

### Minke Medium Naval Unit
- Health: 600 → 370
- Speed: 0.9 → 0.82
- Rotate speed: 2.6 → 7

### Sei (Naval Unit)

**Core Stats:**
- Armor: 12 → 15
- Speed: 0.73 → 0.76
- Rotate Speed: 1.3 → 3.2

**Weapon Changes:**
- Artillery weapon lifetime: 62 → 56
- Point defense weapon lifetime: 35 → 32

### Omura (Naval Unit)

**Core Stats:**
- Health: 22000 → 21000
- Speed: 0.62 → 0.53
- Armor: 16 (unchanged)
- Rotate Speed: 0.9 → 2.4

**Weapon Changes:**
- Rail weapon length: 500 → 410

### Cyerce (Support Unit)

**Core Stats:**
- Rotate Speed: 5 → 9


### Naval Unit Changes (Continued)

**Cyerce (Support Naval Unit)**
- Health: 870 → 720
- Speed: 0.86 → 0.775
- Rotation speed: 2.6 → 6.5
- Armor: 6 → 8
- Repair speed: 0.7 → 0.57

**Aegires (Heavy Naval Unit)**
- Health: 12000 → 9000
- Speed: 0.7 → 0.75
- Rotation speed: 1.4 → 3

**Navanax (Flagship Naval Unit)**
- Health: 20000 → 27000
- Speed: 0.65 → 0.74
- Armor: 16 → 23
- Rotation speed: 1.1 → 3.3
- Weapon reload: 170 → 110
- Weapon beam length: 95 → 170
- Secondary weapon reload: 65 → 37
- Secondary weapon damage: 60 → 70
- Secondary weapon lifetime: 60 → 35
- Secondary weapon speed: 5 → 9

---

## Real Changelog

### Cores

**Shard**
- Health: 1100 → 2000
- Armor: 0 → 3

**Foundation**
- Health: 3500 (no changes)
- Armor: 0 → 5

**Nucleus**
- Health: 6000 → 9000
- Armor: 0 → 8

### Walls

**Plastanium Wall**
- Health: 500 → 620

**Plastanium Wall (Large)**
- Health: 2000 → 2560

**Phase Wall**
- Health: 600 → 720

**Phase Wall (Large)**
- Health: 2400 → 2880

**Surge Wall**
- Health: 920 → 980

**Surge Wall (Large)**
- Health: 3680 → 3920

### Other Non-Turret Blocks

**Ground Factory**
- Requirements: Copper 50 → 120, Lead 120 → 70, Silicon (no changes)
- Dagger production: Silicon 10 → 15, Lead 10 (no changes), Time 15 minutes
- Crawler production: Silicon 10, Coal 8, Time 10 minutes
- Nova production: Silicon 30 → 25, Lead 20 → 10, Titanium 20 → 15, Time 40 minutes

**Air Factory**
- Requirements: Copper 60 → 110, Lead 70 → 80, Titanium 0 → 35

**Naval Factory**
- Retusa production: Silicon 15, Titanium 20, Metaglass 0 → 25, Time 35 minutes

**Additive Reconstructor**
- Consume Items: Silicon 40 → 30, Graphite 40 → 30

**Repair Turret**
- Repair Speed: 180/sec → 90/sec

**Overdrive Projector**
- Requirements: Lead 100 → 210, Titanium 75 (no changes), Silicon 75 (no changes), Plastanium 30 → 35

**Overdrive Dome**
- Requirements: Lead 200 → 720, Titanium 130 → 210, Silicon 130 → 170, Plastanium 80 → 175, Surge Alloy 120 → 275
- Power Consumption: 600 pu/sec → 1500 pu/sec

**Shock Mine**
- Health: 50 → 30
- Tendrils: 4 → 7
- Damage: 25 → 15

### Turrets

**Duo**
- Copper ammo: Damage 9 → 13
- Graphite ammo: Damage 18 → 21, Reload multiplier 0.7x
- Silicon ammo: Damage 12 → 15

### Scatter
- **Scrap ammo**: splash damage 33 → 25, splash damage radius 3.0 → 4.1
- **Lead ammo**: splash damage 40 → 22, splash damage radius 1.8 → 3.3
- **Metaglass ammo**: splash damage 45 → 22.5, splash damage radius 2.5 → 3.3, fragment bullets 6 → 4, reload multiplier 0.8× → 0.7×
- **Rotate speed**: 15 → 12
- **Coolant multiplier**: added 7.5× (increased coolant effectiveness: water 140% → 160%, cryofluid 190% → 235%)

### Scorch
- **Pyratite ammo**: damage 60 → 35
- **Range**: approximately 7 → 9

### Hail
- **Silicon ammo**: splash damage 33 → 27
- **Pyratite ammo**: splash damage radius 2.3 → 2.6

### Wave
- **Slag ammo**: range change +3 (24 tiles), lifetime 44
- **Oil ammo**: range change +3 (24 tiles), lifetime 44

### Lancer
- **Damage**: 140 → 120
- **Rotate speed**: 4

### Arc
- **Damage**: 20 → 13
- **Reload**: 1.71 → 1.87

### Parallax
No changes

### Swarmer
- **Blast compound ammo**: damage 10 → 13, splash damage 45 → 33, splash damage radius 3.7 → 5.2
- **Pyratite ammo**: splash damage 45 → 32, splash damage radius 2.5 → 5.5
- **Surge alloy ammo**: damage 18 → 15, splash damage radius 3.1 → 3.2
- **Rotate speed**: 4

### Salvo
- **Copper ammo**: damage 11 → 13
- **Graphite ammo**: damage 20 → 25, reload multiplier 0.7×
- **Pyratite ammo**: damage 18 → 22, splash damage 12 → 15, splash damage radius 2.7 → 2.8, pierce cap 2, knockback 0.7
- **Silicon ammo**: damage 15 → 18, reload multiplier 1.5× → 1.3×, knockback 0.3
- **Thorium ammo**: damage 29 → 27, reload multiplier 0.7×, knockback 1.5, pierce cap 2
- **Reload**: 31 → 32
- **Inaccuracy**: 7.74 → 7.5
- **Requirements**: copper 100 → 125, graphite 80 → 70

### Segment
No changes

### Tsunami
- **Slag ammo**: range change +4 (32 tiles), lifetime 49 → 58
- **Cryofluid ammo**: range change +2.5 (20 tiles), lifetime 49 → 56
- **Oil ammo**: range change +4 (32 tiles), lifetime 49 → 58

### Fuse
No changes

### Ripple
- **Plastanium ammo**: splash damage 45 → 32, pierce cap 2, fragment bullets 10 → 5, fragment bullet damage 10 → 12
- **Blast compound ammo**: splash damage 55 → 75, splash damage radius 4.2 → 5.2, reload multiplier 0.7×
- **Pyratite ammo**: splash damage 45 → 48, splash damage radius 2.3 → 4.7
- **Requirements**: copper 150 → 175, graphite 135 → 90, titanium 60 → 70

### Cyclone
- **Metaglass ammo**: damage 6 → 13, ammo multiplier 2× → 5×, reload multiplier 0.8× → 1.2×, splash damage 45 → 32, fragment bullets 4 → 10
- **Blast compound ammo**: damage 8 → 12, splash damage 45 → 55
- **Plastanium ammo**: damage 8 → 15, splash damage 37 → 35
- **Surge alloy ammo**: splash damage radius 4.7 → 4.3
- **Rotate speed**: 10 → 7
- **Coolant**: 0.3 → 0.2 (decreased coolant effectiveness: water 160% → 140%, cryofluid 235% → 190%)

### Foreshadow
- **Reload**: 0.3 → 0.22
- **Rotate speed**: 2 → 1.3
- **Coolant multiplier**: 0.4 → 1.0 (increased coolant effectiveness: water 116% → 140%, cryofluid 136% → 190%)

### Spectre
- **Graphite ammo**: damage 50 → 75, ammo multiplier 4× → 3×, knockback 0.3 → 1.0
- **Thorium ammo**: damage 80 → 120, knockback 0.7 → 1.3, ammo multiplier 4× → 2×
- **Pyratite ammo**: damage 70 → 110, splash damage 20 → 32, knockback 0.6 → 0.7
- **Reload**: 8.57 → 8
- **Rotate speed**: 1.4
- **Coolant multiplier**: 0.5 → 1.0 (increased coolant effectiveness: water 116% → 140%, cryofluid 136% → 190%)
- **Max ammo**: 30 → 90
- **Range**: 32.5 → 34.1

### Meltdown
- **Damage**: 936/sec → 1560/sec
- **Reload**: 90 → 170
- **Continuous laser damage**: 78 → 130 (fire rate 0.666 → 0.352)
- **Rotate speed**: 1.3

---

This document provides a comprehensive overview of all balance changes made to the custom Mindustry mod. All modifications have been carefully documented to maintain transparency and allow players to understand how gameplay has been adjusted from the base game.
