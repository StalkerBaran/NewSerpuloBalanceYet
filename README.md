# Changelog (by blackberry, aka me. Thanks for alpfha.) 

## Cores

**Core Armor Additions:**
- Shard: Health 1100 → 2000, Armor 0 → 3
- Foundation: Armor 0 → 5
- Nucleus: Health 6000 → 9000, Armor 0 → 8

## Walls

**Wall Health Increases:**
- Plastanium Wall: health: 125 → 160
- Plastanium Wall (Large): health: 2000 -> 2560
- Phase Wall: health: 150 → 180
- Phase Wall: health: 600 -> 720
- Surge Wall: health: 230 → 245
- Surge Wall (Large): health: 3680 -> 3920

## Other non-turret blocks (real)

**Ground Factory:**
- Requirements: Copper 50 → 120, Lead 120 → 70
- Adjusted production costs for Dagger, Crawler, Nova

**Air Factory:**
- Requirements: Titanium 0 → 35 added

**Reconstructors:**
- Additive Reconstructor: Reduced consumption (Silicon 40 → 30, Graphite 40 → 30)

**Repair Turret**
- repairSpeed: 180/sec -> 90/sec

**Overdrive Projector**
- requirements: Items.lead: 100 -> 210, Items.titanium: 75 (no changes), Items.silicon: 75 (no changes), Items.plastanium: 30 -> 35
             
**Overdrive Dome**
- requirements Items.lead: 200 -> 720, Items.titanium: 130 -> 210, Items.silicon: 130 -> 170, Items.plastanium: 80 -> 175, Items.surgeAlloy: 120 -> 275
- consumePower: 600 pu/sec -> 1500 pu/sec
            
**ShockMine**
- health: 50 -> 30
- tendrils: 4 -> 7
- damage: 25 -> 15


## Effects
**Burning:**
- Added reload multiplier: 0.9
- Added speed multiplier: 0.9
- Transition damage: 8 → 12

**Freezing:**
- Transition damage: 18 → 14

**Wet:**
- Transition damage: 14 → 13

**Freezing Status Effect:**
- Transition damage: 18 → 14

**Wet Status Effect:**
- Transition damage: 14 → 13
## Turrets

## Turrets
### Duo
- copper: damage: 9 -> 13
- graphite: damage: 18 -> 21, reloadMultiplier = 0.7x
- silicon: damage: 12 -> 15

- range: 20 -> 21

### Scatter
- scrap: splashDamage: 33 -> 25, splashDamageRadius: 3.0 -> 4.1
- lead: splashDamage: 40 -> 22, splashDamageRadius: 1.8 -> 3.3
- metaglass: splashDamage: 45 -> 15*1.5, splashDamageRadius: 2.5 -> 3.3, fragBullets: 6 -> 4, reloadMultiplier: 0.8x -> 0.7x
  
- increased coolant buff (water: 140% -> 160%; cryofluid: 190% -> 235%)

### Scorch
- pyratite: damage: 60 -> 35

- range: 7 -> 9

### Hail
- silicone: splashDamage: 33 -> 27
- pyratite: splashDamageRadius: 2.3 -> 2.6

### Wave
- slag: rangeChange = 24 (+3 range)
- oil: rangeChange = 24 (+3 range)

### Lancer
- damage: 140 -> 120

### Arc
- damage: 20 -> 13
- reload = 1.71 -> 1.87

### Parallax
No changes /shrug

### Swarmer
- blastCompound: damage: 10 -> 13; splashdamage: 45 -> 33; splashDamageRadius: 3.7 -> 5.2
- pyratite: damage: (no changes); splashdamage: 45 -> 32; splashDamageRadius: 2.5 -> 5.5
- surgeAlloy: damage: 18 -> 15; splashDamageRadius: 3.1 -> 3.2

### Salvo
- copper: damage: 11 -> 13
- graphite: damage: 20 -> 25, reloadMultiplier = 0.7x
- pyratite: damage: 18 -> 22, splashDamage = 12 -> 15, splashDamageRadius = 2.7 -> 2.8, pierceCap = 2, knockback = 0.7
- silicon: damage: 15 -> 18, reloadMultiplier = 1.5 -> 1.3, knockback = 0.3
- thorium: damage: 29 -> 27, reloadMultiplier = 0.7x, knockback = 1.5, pierceCap = 2

- reload: 31f -> 32f
- requirements: copper = 100, graphite = 80 -> copper = 125, graphite = 70

- added inaccuracy (real)

### Segment
No changes

## Tsunami
- slag: rangeChange = 32 (+4 range);
- cryofluid: rangeChange = 20 (+2.5 range);
- oil: rangeChange = 32 (+4 range);

### Fuse
No changes

## Ripple
- plastanium: splashDamage: 45 -> 32, pierceCap = 2, fragBullets: 10 -> 5, fragBulletDamage (idk how it names): 10 -> 12
- blastCompound: splashDamage: 55 -> 75, splashDamageRadius = 4.2 -> 5.2, reloadMultiplier: 0.7x
- pyratite: splashDamage: 45 -> 48, splashDamageRadius = 2.3 -> 4.7

- requirements: copper = 150, graphite = 135, titanium = 60 -> copper = 175, graphite = 90, titanium = 70

### Cyclone
- metaglass: damage: 6 -> 13, ammoMultiplier: 2x -> 5x, reloadMultiplier: 0.8x -> 1.2x, splashDamage: 45 -> 32, fragBullets: 4 -> 10
- blastCompound: damage: 8 -> 12, splashDamage: 45 -> 55
- plastanium: damage: 8 -> 15, splashDamage: 37 -> 35
- surgeAlloy: splashDamageRadius = 4.7 -> 4.3

- coolant: 0.3f -> 0.2f ((decreased coolant buff (water: 160% -> 140%; cryofluid: 235% -> 190%))

### Foreshadow
- reload: 0.3 -> 0.22 /todo
- increased coolant buff (water: 116% -> 140%; cryofluid: 136% -> 190%)

### Spectre
- graphite: damage: 50 -> 75, ammoMultiplier: 4 -> 3, knockback: 0.3 -> 1
- thorium: damage: 80 -> 120, knockback: 0.7 -> 1.3, ammoMultiplier: 4 -> 2
- pyratite: damage: 70 -> 110, splashDamage: 20 -> 32, knockback: 0.6 -> 0.7

- reload: 8.57 -> 8
- increased coolant buff (water: 116% -> 140%; cryofluid: 136% -> 190%)
- maxAmmo: 30 -> 90
- range: 32.5 -> 34.1

### Meltdown
- damage: 936/sec -> 1560/sec
- reload: 90f -> 170f,
- firerate: 0.666 -> 0.352

---

## Units (headpain)
### Dagger
- Speed: 0.5 → 0.64
- Health: 150 → 120
- Armor: added 2
- Weapon reload: 13 → 20
- Weapon bullet damage: 9 → 12
- Weapon bullet lifetime: 60 → 56

### Mace
- Speed: 0.5 → 0.61
- Health: 550 → 510
- Armor: 4 → 5
- Flamethrower bullet damage: 37 → 27

### Fortress
- Speed: 0.43 → 0.5
- Health: 900 → 910
- Armor: 9 → 10
- Artillery bullet speed: 2 → 2.5
- Artillery bullet lifetime: 120 → 94.8
- Artillery splash damage: 80 → 70

### Scepter
- Speed: 0.36 → 0.52
- Health: 9000 → 9100
- Armor: 10 → 14
- Small bullet damage: 10 → 23
- Small bullet lifetime: 50 → 55
- Main bullet damage: 80 → 70
- Main bullet lifetime: 27 → 22

### Reign
- Speed: 0.4 → 0.48
- Health: 24000 → 25000
- Armor: 18 → 27
- Main bullet lifetime: 15 → 17.1
- Fragment bullet lifetime: 20 → 17

---------------------------

### Nova
- Speed: 0.55 → 0.68
- Health: 120 → 90
- Build speed: 0.3 → 0.5
- Armor: 1 → 3
- Repair field range: 60 → 90
- Repair field: added same type heal multiplier 0.5
- Weapon bullet damage: 13 → 15

### Pulsar
- Speed: 0.7 → 0.732
- Health: 320 → 290
- Mine speed: 3 → 3.5
- Heal shotgun weapon bullet:
  - Heal percent: 5% → 1%
  - Added heal amount: 10
- Lightning bullet:
  - Damage: 15 → 13
  - Lightning length: 8 → 7
  - Heal percent: 1.6% → 0.75%

### Quasar
- Boost multiplier: 2 → 1.9
- Health: 640 → 750
- Armor: 9 → 8
- Speed: 0.5 → 0.535
- Added rotate speed: 5
- Mine speed: 4
- Force Field Ability:
  - Regen: 0.4 → 0.3
  - Max: 400 → 512
  - Cooldown: 360 seconds → 180 seconds
- Beam weapon laser bullet:
  - Damage: 45 → 52
  - Heal percent: 10% → 5%
  - Added heal amount: 35
  - Length: 150 → 135

### Vela
- Speed: 0.44 → 0.56
- Boost multiplier: 2.4 → 1.6
- Health: 8200 → 7800
- Armor: 9 → 13
- Repair beam speed: 1.4 → 1.94

### Corvus
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

---------------------------

### Crawler
- Health: 150 → 110

### Atrax**
- Speed: 0.6 → 0.84
- Health: 600 → 370
- Weapon damage: 13 → 12

### Spiroct
- Speed: 0.54 → 0.828
- Health: 1000 → 1100
- Armor: 5 → 7

### Arkyid
- Speed: 0.62 → 0.92
- Health: 8000 → 7800
- Armor: 6 → 12
- Artillery weapon splash damage: 65 → 75

### Toxopid
- Speed: 0.5 → 0.68
- Health: 22000 → 21000
- Armor: 13 → 18
- Shrapnel weapon damage: 110 → 180
- Artillery weapon damage: 50 → 110

---------------------------

### Flare
- Projectile lifetime: 80 → 73
- Health: 70 → 35
- Weapon reload: 20 → 15
- Bullet damage: 9 → 10

### Horizon
- Health: 340 → 240
- Speed: 1.65 → 2.2
- Bomb projectile speed: 27 → 23

### Zenith
- Health: 700 → 510
- Drag: 0.016 → 0.043
- Missile lifetime: 50 → 55

### Antumbra
- Speed: 0.8 → 0.72
- Health: 7200 → 8100
- Armor: 9 → 8
- Missile damage: 18 → 23
- Missile width: 8 → 8.5
- Missile height: 8 → 8.5
- Missile splash radius: 20 → 33

### Eclipse
- Speed: 0.54 → 0.66
- Armor: 13 → 17
  
**Flak bullet**:
- Damage: 15 → 35
- Lifetime: 47 → 65

**Laser weapon**:
- Damage: 115 → 130
- Length: 230 → 257

---------------------------

### Mono
no changes

### Poly
- Health: 400 → 170
- Armor: 0 → 1
- Build speed: 0.5 → 0.3
- Repair field ability cooldown: 480 → 112
- Heal percent: 5.5% → 3%
- healAmount: added 7.5

### Mega
- Health: 460 → 380
- Armor: 3 → 2
- Speed: 2.5 → 2.56
- Drag: 0.017 → 0.04
- Healing laser bolt: healPercent 3% → 2%, healAmount added 5.5

### Quad
- Build speed: 2.5 → 3.5

### Oct
- Armor: 16 → 15
- Health: 24000 → 18000
- Force field ability: regen 4 → 10, max 7000 → 12000
- Repair field ability: amount 130 → 700

---------------------------

### Risso
- Speed:
- Health: 280 -> 220

### Minke
- Health: 600 -> 370
- Speed: 0.9 -> 0.82
- Range: 31 -> 24.6

### Bryde
- Health: 600 -> 370
- Speed: 0.9 -> 0.82
- Range: 31 -> 29.5

### Sei
- Armor: 12 -> 15
- Range: 35.2 -> 31.4

### Omura
- Health: 22000 -> 21000
- Ramge: 62 -> 50.7
---------------------------

### Retusa
Returned metaglass in its cost

### Oxynoe
Decreased segment-like attack

### Cyerce
- Health: 870 -> 720
- Armor: 6 -> 8
- RepairSpeed: 42 * 2 -> 34 * 2
- Speed: 6.45 -> 5.81
  
### Aegires
- Health: 12000 -> 9000
- Speed: 5.25 -> 5.62
  
### Navanax
- Health: 20000 -> 23000
- Armor: 16 -> 23
- Speed: 4.87 -> 5.55

- Removed EMP ally building boost (I mean overdrive-like boost when navanax shooting to buildings)
- Increased firerate (0.46 -> 0.81), damage  cannon 
