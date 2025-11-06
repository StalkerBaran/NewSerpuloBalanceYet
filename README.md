# eeeeeeee

This project serves as documentation for a custom balance modification for Mindustry. The current rebalance mod is outdated. For playtesting, please use the custom JAR rebalance available at: https://github.com/StalkerBaran/Mindustry/releases/tag/mindustry

This document details the balance changes between version 152.2 and the custom balance implementation


## Changedlog (in github way, thanks to Eggo (justacommonegg). Idk how it can be readable, but I wont redact it and do it in my way below)

 plastaniumWall = new Wall("plastanium-wall"){{
             requirements(Category.defense, with(Items.plastanium, 5, Items.metaglass, 2));
-            health = 125 * wallHealthMultiplier;
+            health = 160 * wallHealthMultiplier;
             insulated = true;
             absorbLasers = true;
             schematicPriority = 10;
@@ -1714,7 +1714,7 @@ public class Blocks{
 
         plastaniumWallLarge = new Wall("plastanium-wall-large"){{
             requirements(Category.defense, ItemStack.mult(plastaniumWall.requirements, 4));
-            health = 125 * wallHealthMultiplier * 4;
+            health = 160 * wallHealthMultiplier * 4;
             size = 2;
             insulated = true;
             absorbLasers = true;
@@ -1734,14 +1734,14 @@ public class Blocks{
 
         phaseWall = new Wall("phase-wall"){{
             requirements(Category.defense, with(Items.phaseFabric, 6));
-            health = 150 * wallHealthMultiplier;
+            health = 180 * wallHealthMultiplier;
             chanceDeflect = 10f;
             flashHit = true;
         }};
 
         phaseWallLarge = new Wall("phase-wall-large"){{
             requirements(Category.defense, ItemStack.mult(phaseWall.requirements, 4));
-            health = 150 * 4 * wallHealthMultiplier;
+            health = 180 * 4 * wallHealthMultiplier;
             size = 2;
             chanceDeflect = 10f;
             flashHit = true;
@@ -1749,13 +1749,13 @@ public class Blocks{
 
         surgeWall = new Wall("surge-wall"){{
             requirements(Category.defense, with(Items.surgeAlloy, 6));
-            health = 230 * wallHealthMultiplier;
+            health = 245 * wallHealthMultiplier;
             lightningChance = 0.05f;
         }};
 
         surgeWallLarge = new Wall("surge-wall-large"){{
             requirements(Category.defense, ItemStack.mult(surgeWall.requirements, 4));
-            health = 230 * 4 * wallHealthMultiplier;
+            health = 245 * 4 * wallHealthMultiplier;
             size = 2;
             lightningChance = 0.05f;
         }};
@@ -1920,15 +1920,15 @@ public class Blocks{
         }};
 
         overdriveProjector = new OverdriveProjector("overdrive-projector"){{
-            requirements(Category.effect, with(Items.lead, 100, Items.titanium, 75, Items.silicon, 75, Items.plastanium, 30));
+            requirements(Category.effect, with(Items.lead, 210, Items.titanium, 75, Items.silicon, 75, Items.plastanium, 35));
             consumePower(3.50f);
             size = 2;
             consumeItem(Items.phaseFabric).boost();
         }};
 
         overdriveDome = new OverdriveProjector("overdrive-dome"){{
-            requirements(Category.effect, with(Items.lead, 200, Items.titanium, 130, Items.silicon, 130, Items.plastanium, 80, Items.surgeAlloy, 120));
-            consumePower(10f);
+            requirements(Category.effect, with(Items.lead, 720, Items.titanium, 210, Items.silicon, 170, Items.plastanium, 175, Items.surgeAlloy, 275));
+            consumePower(25f);
             size = 3;
             range = 200f;
             speedBoost = 2.5f;
@@ -1954,11 +1954,11 @@ public class Blocks{
         shockMine = new ShockMine("shock-mine"){{
             requirements(Category.effect, with(Items.lead, 25, Items.silicon, 12));
             hasShadow = false;
-            health = 50;
-            damage = 25;
+            health = 30;
+            damage = 15;
             tileDamage = 7f;
             length = 10;
-            tendrils = 4;
+            tendrils = 7;
         }};
 
         radar = new Radar("radar"){{
@@ -3102,7 +3102,8 @@ public class Blocks{
 
             isFirstTier = true;
             unitType = UnitTypes.alpha;
-            health = 1100;
+            health = 2000;
+            armor = 3;
             itemCapacity = 4000;
             size = 3;
             buildCostMultiplier = 2f;
@@ -3115,6 +3116,7 @@ public class Blocks{
 
             unitType = UnitTypes.beta;
             health = 3500;
+            armor = 5f;
             itemCapacity = 9000;
             size = 4;
             thrusterLength = 34/4f;
@@ -3127,7 +3129,8 @@ public class Blocks{
             requirements(Category.effect, with(Items.copper, 8000, Items.lead, 8000, Items.silicon, 5000, Items.thorium, 4000));
 
             unitType = UnitTypes.gamma;
-            health = 6000;
+            health = 9000;
+            armor = 8f;
             itemCapacity = 13000;
             size = 5;
             thrusterLength = 40/4f;
@@ -3237,7 +3240,7 @@ public class Blocks{
         duo = new ItemTurret("duo"){{
             requirements(Category.turret, with(Items.copper, 35));
             ammo(
-                Items.copper,  new BasicBulletType(2.5f, 9){{
+                Items.copper,  new BasicBulletType(2.5f, 13){{
                     width = 7f;
                     height = 9f;
                     lifetime = 60f;
@@ -3247,9 +3250,10 @@ public class Blocks{
                     hitColor = backColor = trailColor = Pal.copperAmmoBack;
                     frontColor = Pal.copperAmmoFront;
                 }},
-                Items.graphite, new BasicBulletType(3.5f, 18){{
+                Items.graphite, new BasicBulletType(3.5f, 21){{
                     width = 9f;
                     height = 12f;
+                    reloadMultiplier = 0.7f;
                     ammoMultiplier = 4;
                     lifetime = 60f;
                     rangeChange = 16f;
@@ -3258,7 +3262,7 @@ public class Blocks{
                     hitColor = backColor = trailColor = Pal.graphiteAmmoBack;
                     frontColor = Pal.graphiteAmmoFront;
                 }},
-                Items.silicon, new BasicBulletType(3f, 12){{
+                Items.silicon, new BasicBulletType(3f, 15){{
                     width = 7f;
                     height = 9f;
                     homingPower = 0.2f;
@@ -3293,7 +3297,7 @@ public class Blocks{
             recoil = 0.5f;
             shootY = 3f;
             reload = 20f;
-            range = 160;
+            range = 168;
             shootCone = 15f;
             ammoUseEffect = Fx.casing1;
             health = 250;
@@ -3316,8 +3320,8 @@ public class Blocks{
                     width = 6f;
                     height = 8f;
                     hitEffect = Fx.flakExplosion;
-                    splashDamage = 22f * 1.5f;
-                    splashDamageRadius = 24f;
+                    splashDamage = 17f * 1.5f;
+                    splashDamageRadius = 33f;
 
                     frontColor = Pal.scrapAmmoFront;
                     backColor = hitColor = Pal.scrapAmmoBack;
@@ -3330,8 +3334,8 @@ public class Blocks{
                     width = 6f;
                     height = 8f;
                     hitEffect = Fx.flakExplosion;
-                    splashDamage = 27f * 1.5f;
-                    splashDamageRadius = 15f;
+                    splashDamage = 12f * 1.5f;
+                    splashDamageRadius = 28f;
                 }},
                 Items.metaglass, new FlakBulletType(4f, 3){{
                     backColor = trailColor = Pal.glassAmmoBack;
@@ -3341,13 +3345,13 @@ public class Blocks{
                     lifetime = 60f;
                     ammoMultiplier = 5f;
                     shootEffect = Fx.shootSmall;
-                    reloadMultiplier = 0.8f;
+                    reloadMultiplier = 0.7f;
                     width = 6f;
                     height = 8f;
                     hitEffect = Fx.flakExplosion;
-                    splashDamage = 30f * 1.5f;
-                    splashDamageRadius = 20f;
-                    fragBullets = 6;
+                    splashDamage = 15f * 1.5f;
+                    splashDamageRadius = 27f;
+                    fragBullets = 4;
                     fragBullet = new BasicBulletType(3f, 5){{
                         width = 5f;
                         height = 12f;
@@ -3378,13 +3382,14 @@ public class Blocks{
             shoot.shots = 2;
 
             recoil = 1f;
-            rotateSpeed = 15f;
+            rotateSpeed = 12f;
             inaccuracy = 17f;
             shootCone = 35f;
 
             scaledHealth = 200;
             shootSound = Sounds.shootSnap;
             coolant = consumeCoolant(0.2f);
+            coolantMultiplier = 7.5f;
             researchCostMultiplier = 0.05f;
 
             limitRange(2);
@@ -3407,7 +3412,7 @@ public class Blocks{
                     keepVelocity = false;
                     hittable = false;
                 }},
-                Items.pyratite, new BulletType(4f, 60f){{
+                Items.pyratite, new BulletType(4f, 35f){{
                     ammoMultiplier = 6f;
                     hitSize = 7f;
                     lifetime = 18f;
@@ -3424,7 +3429,7 @@ public class Blocks{
             recoil = 0f;
             reload = 6f;
             coolantMultiplier = 1.5f;
-            range = 60f;
+            range = 72.5f;
             shootY = 3;
             shootCone = 50f;
             targetAir = false;
@@ -3455,7 +3460,7 @@ public class Blocks{
                     width = height = 11f;
                     collidesTiles = false;
                     splashDamageRadius = 25f * 0.75f;
-                    splashDamage = 33f;
+                    splashDamage = 27f;
                     reloadMultiplier = 1.2f;
                     ammoMultiplier = 3f;
                     homingPower = 0.08f;
@@ -3472,9 +3477,9 @@ public class Blocks{
                     hitEffect = Fx.blastExplosion;
                     knockback = 0.8f;
                     lifetime = 80f;
-                    width = height = 13f;
+                    width = height = 14f;
                     collidesTiles = false;
-                    splashDamageRadius = 25f * 0.75f;
+                    splashDamageRadius = 28f * 0.75f;
                     splashDamage = 45f;
                     status = StatusEffects.burning;
                     statusDuration = 60f * 12f;
@@ -3509,6 +3514,8 @@ public class Blocks{
                 Liquids.slag, new LiquidBulletType(Liquids.slag){{
                     damage = 4;
                     drag = 0.01f;
+                    rangeChange = 24;
+                    lifetime = 44;
                 }},
                 Liquids.cryofluid, new LiquidBulletType(Liquids.cryofluid){{
                     drag = 0.01f;
@@ -3516,6 +3523,8 @@ public class Blocks{
                 Liquids.oil, new LiquidBulletType(Liquids.oil){{
                     drag = 0.01f;
                     layer = Layer.bullet - 2f;
+                    rangeChange = 24;
+                    lifetime = 44;
                 }}
             );
             size = 2;
@@ -3538,6 +3547,7 @@ public class Blocks{
             shoot.firstShotDelay = 40f;
 
             recoil = 2f;
+            rotateSpeed = 4f;
             reload = 80f;
             shake = 2f;
             shootEffect = Fx.lancerLaserShoot;
@@ -3553,7 +3563,7 @@ public class Blocks{
 
             consumePower(6f);
 
-            shootType = new LaserBulletType(140){{
+            shootType = new LaserBulletType(120){{
                 colors = new Color[]{Pal.lancerLaser.cpy().a(0.4f), Pal.lancerLaser, Color.white};
                 //TODO merge
                 chargeEffect = new MultiEffect(Fx.lancerLaserCharge, Fx.lancerLaserChargeBegin);
@@ -3573,7 +3583,7 @@ public class Blocks{
         arc = new PowerTurret("arc"){{
             requirements(Category.turret, with(Items.copper, 50, Items.lead, 50));
             shootType = new LightningBulletType(){{
-                damage = 20;
+                damage = 13f;
                 lightningLength = 25;
                 collidesAir = false;
                 ammoMultiplier = 1f;
@@ -3593,7 +3603,7 @@ public class Blocks{
                     shieldDamageMultiplier = 0.2f;
                 }};
             }};
-            reload = 35f;
+            reload = 32f;
             shootCone = 40f;
             rotateSpeed = 8f;
             targetAir = false;
@@ -3626,12 +3636,12 @@ public class Blocks{
         swarmer = new ItemTurret("swarmer"){{
             requirements(Category.turret, with(Items.graphite, 35, Items.titanium, 35, Items.plastanium, 45, Items.silicon, 30));
             ammo(
-                Items.blastCompound, new MissileBulletType(3.7f, 10){{
+                Items.blastCompound, new MissileBulletType(3.7f, 13){{
                     width = 8f;
                     height = 8f;
                     shrinkY = 0f;
-                    splashDamageRadius = 30f;
-                    splashDamage = 30f * 1.5f;
+                    splashDamageRadius = 42f;
+                    splashDamage = 33f;
                     ammoMultiplier = 5f;
                     hitEffect = Fx.blastExplosion;
                     despawnEffect = Fx.blastExplosion;
@@ -3648,19 +3658,19 @@ public class Blocks{
                     height = 8f;
                     shrinkY = 0f;
                     homingPower = 0.08f;
-                    splashDamageRadius = 20f;
-                    splashDamage = 30f * 1.5f;
+                    splashDamageRadius = 44f;
+                    splashDamage = 32f;
                     makeFire = true;
                     ammoMultiplier = 5f;
                     hitEffect = Fx.blastExplosion;
                     status = StatusEffects.burning;
                 }},
-                Items.surgeAlloy, new MissileBulletType(3.7f, 18){{
+                Items.surgeAlloy, new MissileBulletType(3.7f, 15){{
                     width = 8f;
                     height = 8f;
                     shrinkY = 0f;
-                    splashDamageRadius = 25f;
-                    splashDamage = 25f * 1.4f;
+                    splashDamageRadius = 26f;
+                    splashDamage = 35f;
                     hitEffect = Fx.blastExplosion;
                     despawnEffect = Fx.blastExplosion;
                     ammoMultiplier = 4f;
@@ -3668,6 +3678,8 @@ public class Blocks{
                     lightning = 2;
                     lightningLength = 10;
 
+                    reloadMultiplier = 0.8f;
+
                     hitColor = backColor = trailColor = Pal.surgeAmmoBack;
                     frontColor = Pal.surgeAmmoFront;
                 }}
@@ -3692,29 +3704,34 @@ public class Blocks{
             scaledHealth = 300;
             shootSound = Sounds.missile;
             envEnabled |= Env.space;
-
+            rotateSpeed = 4f;
+            
             limitRange(5f);
             coolant = consumeCoolant(0.3f);
         }};
 
         salvo = new ItemTurret("salvo"){{
-            requirements(Category.turret, with(Items.copper, 100, Items.graphite, 80, Items.titanium, 50));
+            requirements(Category.turret, with(Items.copper, 125, Items.graphite, 70, Items.titanium, 50));
             ammo(
-                Items.copper,  new BasicBulletType(2.5f, 11){{
+                Items.copper,  new BasicBulletType(2.5f, 13){{
                     width = 7f;
                     height = 9f;
                     lifetime = 60f;
                     ammoMultiplier = 2;
+                    knockback = 0.6f;
 
                     hitEffect = despawnEffect = Fx.hitBulletColor;
                     hitColor = backColor = trailColor = Pal.copperAmmoBack;
                     frontColor = Pal.copperAmmoFront;
                 }},
-                Items.graphite, new BasicBulletType(3.5f, 20){{
+                Items.graphite, new BasicBulletType(3.5f, 25){{
                     width = 9f;
                     height = 12f;
                     ammoMultiplier = 4;
                     lifetime = 60f;
+                    
+                    reloadMultiplier = 0.7f;
+                    knockback = 1.2f;
 
                     rangeChange = 4f * 8f;
 
@@ -3722,7 +3739,7 @@ public class Blocks{
                     hitColor = backColor = trailColor = Pal.graphiteAmmoBack;
                     frontColor = Pal.graphiteAmmoFront;
                 }},
-                Items.pyratite, new BasicBulletType(3.2f, 18){{
+                Items.pyratite, new BasicBulletType(3.2f, 22){{
                     width = 10f;
                     height = 12f;
                     frontColor = hitColor = Pal.lightishOrange;
@@ -3732,27 +3749,34 @@ public class Blocks{
 
                     ammoMultiplier = 5;
 
-                    splashDamage = 12f;
-                    splashDamageRadius = 22f;
+                    pierceCap = 2;
+                    pierceBuilding = false;
+
+                    knockback = 0.7f;
+                    
+                    splashDamage = 15f;
+                    splashDamageRadius = 23f;
 
                     makeFire = true;
                     lifetime = 60f;
                 }},
-                Items.silicon, new BasicBulletType(3f, 15, "bullet"){{
+                Items.silicon, new BasicBulletType(3f, 18, "bullet"){{
                     width = 8f;
                     height = 10f;
                     homingPower = 0.2f;
-                    reloadMultiplier = 1.5f;
+                    reloadMultiplier = 1.3f;
                     ammoMultiplier = 5;
                     lifetime = 60f;
 
+                    knockback = 0.3f;
+
                     trailLength = 5;
                     trailWidth = 1.5f;
                     hitEffect = despawnEffect = Fx.hitBulletColor;
                     hitColor = backColor = trailColor = Pal.siliconAmmoBack;
                     frontColor = Pal.siliconAmmoFront;
                 }},
-                Items.thorium, new BasicBulletType(4f, 29, "bullet"){{
+                Items.thorium, new BasicBulletType(4f, 27, "bullet"){{
                     width = 8f;
                     height = 13f;
                     shootEffect = Fx.shootBig;
@@ -3760,6 +3784,12 @@ public class Blocks{
                     ammoMultiplier = 4;
                     lifetime = 60f;
 
+                    pierceCap = 2;
+                    pierceBuilding = false;
+
+                    reloadMultiplier = 0.7f;
+                    knockback = 1.5f;
+                    
                     hitEffect = despawnEffect = Fx.hitBulletColor;
                     backColor = hitColor = trailColor = Pal.thoriumAmmoBack;
                     frontColor = Pal.thoriumAmmoFront;
@@ -3782,9 +3812,10 @@ public class Blocks{
 
             size = 2;
             range = 190f;
-            reload = 31f;
+            reload = 32f;
             consumeAmmoOnce = false;
             ammoEjectBack = 3f;
+            inaccuracy = 5f;
             recoil = 0f;
             shake = 1f;
             shoot.shots = 4;
@@ -3828,7 +3859,7 @@ public class Blocks{
                     layer = Layer.bullet - 2f;
                 }},
                 Liquids.slag,  new LiquidBulletType(Liquids.slag){{
-                    lifetime = 49f;
+                    lifetime = 58f;
                     speed = 4f;
                     knockback = 1.3f;
                     puddleSize = 8f;
@@ -3837,9 +3868,10 @@ public class Blocks{
                     drag = 0.001f;
                     ammoMultiplier = 0.4f;
                     statusDuration = 60f * 4f;
+                    rangeChange = 32f;
                 }},
                 Liquids.cryofluid, new LiquidBulletType(Liquids.cryofluid){{
-                    lifetime = 49f;
+                    lifetime = 56f;
                     speed = 4f;
                     knockback = 1.3f;
                     puddleSize = 8f;
@@ -3848,9 +3880,10 @@ public class Blocks{
                     ammoMultiplier = 0.4f;
                     statusDuration = 60f * 4f;
                     damage = 0.2f;
+                    rangeChange = 20f;
                 }},
                 Liquids.oil, new LiquidBulletType(Liquids.oil){{
-                    lifetime = 49f;
+                    lifetime = 58f;
                     speed = 4f;
                     knockback = 1.3f;
                     puddleSize = 8f;
@@ -3860,6 +3893,7 @@ public class Blocks{
                     statusDuration = 60f * 4f;
                     damage = 0.2f;
                     layer = Layer.bullet - 2f;
+                    rangeChange = 32f;
                 }}
             );
             size = 3;
@@ -3915,12 +3949,12 @@ public class Blocks{
         }};
 
         ripple = new ItemTurret("ripple"){{
-            requirements(Category.turret, with(Items.copper, 150, Items.graphite, 135, Items.titanium, 60));
+            requirements(Category.turret, with(Items.copper, 175, Items.graphite, 90, Items.titanium, 70));
             ammo(
                 Items.graphite, new ArtilleryBulletType(3f, 20){{
-                    knockback = 0.8f;
+                    knockback = 1.2f;
                     lifetime = 80f;
-                    width = height = 11f;
+                    width = height = 16f;
                     collidesTiles = false;
                     splashDamageRadius = 25f * 0.75f;
                     splashDamage = 33f;
@@ -3952,10 +3986,10 @@ public class Blocks{
                     hitEffect = Fx.blastExplosion;
                     knockback = 0.8f;
                     lifetime = 80f;
-                    width = height = 13f;
+                    width = height = 17f;
                     collidesTiles = false;
-                    splashDamageRadius = 25f * 0.75f;
-                    splashDamage = 45f;
+                    splashDamageRadius = 38f;
+                    splashDamage = 48f;
                     status = StatusEffects.burning;
                     statusDuration = 60f * 12f;
                     frontColor = Pal.lightishOrange;
@@ -3969,11 +4003,13 @@ public class Blocks{
                     hitEffect = Fx.blastExplosion;
                     knockback = 0.8f;
                     lifetime = 80f;
-                    width = height = 14f;
+                    width = height = 18f;
                     collidesTiles = false;
                     ammoMultiplier = 4f;
-                    splashDamageRadius = 45f * 0.75f;
-                    splashDamage = 55f;
+                    splashDamageRadius = 42f;
+                    splashDamage = 75f;
+
+                    reloadMultiplier = 0.7f;
 
                     status = StatusEffects.blasted;
 
@@ -3988,8 +4024,8 @@ public class Blocks{
                     width = height = 13f;
                     collidesTiles = false;
                     splashDamageRadius = 35f * 0.75f;
-                    splashDamage = 45f;
-                    fragBullet = new BasicBulletType(2.5f, 10, "bullet"){{
+                    splashDamage = 32f;
+                    fragBullet = new BasicBulletType(2.5f, 12, "bullet"){{
                         width = 10f;
                         height = 12f;
                         shrinkY = 1f;
@@ -3999,7 +4035,7 @@ public class Blocks{
                         despawnEffect = Fx.none;
                         collidesAir = false;
                     }};
-                    fragBullets = 10;
+                    fragBullets = 5;
                     backColor = Pal.plastaniumBack;
                     frontColor = Pal.plastaniumFront;
                 }}
@@ -4028,16 +4064,16 @@ public class Blocks{
         cyclone = new ItemTurret("cyclone"){{
             requirements(Category.turret, with(Items.copper, 200, Items.titanium, 125, Items.plastanium, 80));
             ammo(
-                Items.metaglass, new FlakBulletType(4f, 6){{
-                    ammoMultiplier = 2f;
+                Items.metaglass, new FlakBulletType(4f, 13){{
+                    ammoMultiplier = 5f;
                     shootEffect = Fx.shootSmall;
-                    reloadMultiplier = 0.8f;
+                    reloadMultiplier = 1.2f;
                     width = 6f;
                     height = 11f;
                     hitEffect = Fx.flakExplosion;
-                    splashDamage = 45f;
+                    splashDamage = 32f;
                     splashDamageRadius = 25f;
-                    fragBullet = new BasicBulletType(3f, 12, "bullet"){{
+                    fragBullet = new BasicBulletType(3f, 8, "bullet"){{
                         width = 5f;
                         height = 12f;
                         shrinkY = 1f;
@@ -4045,8 +4081,9 @@ public class Blocks{
                         backColor = Pal.gray;
                         frontColor = Color.white;
                         despawnEffect = Fx.none;
+                        buildingDamageMultiplier = 0.3f;
                     }};
-                    fragBullets = 4;
+                    fragBullets = 10;
                     explodeRange = 20f;
                     collidesGround = true;
 
@@ -4054,10 +4091,10 @@ public class Blocks{
                     frontColor = Pal.glassAmmoFront;
                     despawnEffect = Fx.hitBulletColor;
                 }},
-                Items.blastCompound, new FlakBulletType(4f, 8){{
+                Items.blastCompound, new FlakBulletType(4f, 12){{
                     shootEffect = Fx.shootBig;
                     ammoMultiplier = 5f;
-                    splashDamage = 45f;
+                    splashDamage = 55f;
                     splashDamageRadius = 60f;
                     collidesGround = true;
 
@@ -4067,10 +4104,10 @@ public class Blocks{
                     frontColor = Pal.blastAmmoFront;
                     despawnEffect = Fx.hitBulletColor;
                 }},
-                Items.plastanium, new FlakBulletType(4f, 8){{
+                Items.plastanium, new FlakBulletType(4f, 15){{
                     ammoMultiplier = 4f;
                     splashDamageRadius = 40f;
-                    splashDamage = 37.5f;
+                    splashDamage = 35f;
                     fragBullet = new BasicBulletType(2.5f, 12, "bullet"){{
                         width = 10f;
                         height = 12f;
@@ -4092,13 +4129,16 @@ public class Blocks{
                 Items.surgeAlloy, new FlakBulletType(4.5f, 13){{
                     ammoMultiplier = 5f;
                     splashDamage = 50f * 1.5f;
-                    splashDamageRadius = 38f;
-                    lightning = 2;
+                    splashDamageRadius = 35f;
+                    lightning = 3;
                     lightningLength = 7;
+                    lightningDamage = 12;
                     shootEffect = Fx.shootBig;
                     collidesGround = true;
                     explodeRange = 20f;
 
+                    reloadMultiplier = 0.8f;
+                    
                     backColor = hitColor = trailColor = Pal.surgeAmmoBack;
                     frontColor = Pal.surgeAmmoFront;
                     despawnEffect = Fx.hitBulletColor;
@@ -4132,11 +4172,11 @@ public class Blocks{
             size = 3;
             recoil = 1.5f;
             recoilTime = 10;
-            rotateSpeed = 10f;
+            rotateSpeed = 7f;
             inaccuracy = 10f;
             shootCone = 30f;
             shootSound = Sounds.shootSnap;
-            coolant = consumeCoolant(0.3f);
+            coolant = consumeCoolant(0.2f);
 
             scaledHealth = 145;
             limitRange();
@@ -4156,7 +4196,7 @@ public class Blocks{
                     despawnEffect = Fx.instBomb;
                     pointEffectSpace = 20f;
                     damage = 1350;
-                    buildingDamageMultiplier = 0.2f;
+                    buildingDamageMultiplier = 0.5f;
                     maxDamageFraction = 0.6f;
                     pierceDamageFactor = 1f;
                     length = brange;
@@ -4167,8 +4207,8 @@ public class Blocks{
 
             maxAmmo = 40;
             ammoPerShot = 5;
-            rotateSpeed = 2f;
-            reload = 200f;
+            rotateSpeed = 1.3f;
+            reload = 270f;
             ammoUseEffect = Fx.casing3Double;
             recoil = 5f;
             cooldownTime = reload;
@@ -4179,7 +4219,7 @@ public class Blocks{
             unitSort = UnitSorts.strongest;
             envEnabled |= Env.space;
 
-            coolantMultiplier = 0.4f;
+            coolantMultiplier = 1f;
             scaledHealth = 150;
 
             coolant = consumeCoolant(1f);
@@ -4189,32 +4229,33 @@ public class Blocks{
         spectre = new ItemTurret("spectre"){{
             requirements(Category.turret, with(Items.copper, 900, Items.graphite, 300, Items.surgeAlloy, 250, Items.plastanium, 175, Items.thorium, 250));
             ammo(
-                Items.graphite, new BasicBulletType(7.5f, 50){{
+                Items.graphite, new BasicBulletType(7.5f, 75){{
                     hitSize = 4.8f;
                     width = 15f;
                     height = 21f;
                     shootEffect = Fx.shootBig;
-                    ammoMultiplier = 4;
+                    ammoMultiplier = 3;
                     reloadMultiplier = 1.7f;
-                    knockback = 0.3f;
+                    knockback = 1f;
 
                     hitEffect = despawnEffect = Fx.hitBulletColor;
                     hitColor = backColor = trailColor = Pal.graphiteAmmoBack;
                     frontColor = Pal.graphiteAmmoFront;
                 }},
-                Items.thorium, new BasicBulletType(8f, 80){{
+                Items.thorium, new BasicBulletType(8f, 120){{
                     hitSize = 5;
                     width = 16f;
                     height = 23f;
                     shootEffect = Fx.shootBig;
                     pierceCap = 2;
                     pierceBuilding = true;
-                    knockback = 0.7f;
+                    knockback = 1.3f;
+                    ammoMultiplier = 2;
 
                     backColor = hitColor = trailColor = Pal.thoriumAmmoBack;
                     frontColor = Pal.thoriumAmmoFront;
                 }},
-                Items.pyratite, new BasicBulletType(7f, 70){{
+                Items.pyratite, new BasicBulletType(7f, 110){{
                     hitSize = 5;
                     width = 16f;
                     height = 21f;
@@ -4226,17 +4267,18 @@ public class Blocks{
                     makeFire = true;
                     pierceCap = 2;
                     pierceBuilding = true;
-                    knockback = 0.6f;
+                    knockback = 0.7f;
                     ammoMultiplier = 3;
-                    splashDamage = 20f;
+                    splashDamage = 32f;
                     splashDamageRadius = 25f;
                 }}
             );
-            reload = 7f;
+            reload = 7.5f;
+            rotateSpeed = 1.4f;
             recoilTime = reload * 2f;
-            coolantMultiplier = 0.5f;
+            coolantMultiplier = 1f;
             ammoUseEffect = Fx.casing3;
-            range = 260f;
+            range = 273f;
             inaccuracy = 3f;
             recoil = 3f;
             shoot = new ShootAlternate(8f);
@@ -4245,6 +4287,8 @@ public class Blocks{
             shootCone = 24f;
             shootSound = Sounds.shootBig;
 
+            maxAmmo = 90;
+
             scaledHealth = 160;
             coolant = consumeCoolant(1f);
 
@@ -4255,11 +4299,12 @@ public class Blocks{
             requirements(Category.turret, with(Items.copper, 1200, Items.lead, 350, Items.graphite, 300, Items.surgeAlloy, 325, Items.silicon, 325));
             shootEffect = Fx.shootBigSmoke2;
             shootCone = 40f;
+            rotateSpeed = 1.3f;
             recoil = 4f;
             size = 4;
             shake = 2f;
             range = 195f;
-            reload = 90f;
+            reload = 170f;
             firingMoveFract = 0.5f;
             shootDuration = 230f;
             shootSound = Sounds.laserbig;
@@ -4267,7 +4312,7 @@ public class Blocks{
             loopSoundVolume = 2f;
             envEnabled |= Env.space;
 
-            shootType = new ContinuousLaserBulletType(78){{
+            shootType = new ContinuousLaserBulletType(130){{
                 length = 200f;
                 hitEffect = Fx.hitMeltdown;
                 hitColor = Pal.meltdownHit;
@@ -6145,11 +6190,11 @@ public class Blocks{
         //region units
 
         groundFactory = new UnitFactory("ground-factory"){{
-            requirements(Category.units, with(Items.copper, 50, Items.lead, 120, Items.silicon, 80));
+            requirements(Category.units, with(Items.copper, 120, Items.lead, 70, Items.silicon, 80));
             plans = Seq.with(
-                new UnitPlan(UnitTypes.dagger, 60f * 15, with(Items.silicon, 10, Items.lead, 10)),
-                new UnitPlan(UnitTypes.crawler, 60f * 10, with(Items.silicon, 8, Items.coal, 10)),
-                new UnitPlan(UnitTypes.nova, 60f * 40, with(Items.silicon, 30, Items.lead, 20, Items.titanium, 20))
+                new UnitPlan(UnitTypes.dagger, 60f * 15, with(Items.silicon, 15, Items.lead, 10)),
+                new UnitPlan(UnitTypes.crawler, 60f * 10, with(Items.silicon, 10, Items.coal, 8)),
+                new UnitPlan(UnitTypes.nova, 60f * 40, with(Items.silicon, 25, Items.lead, 10, Items.titanium, 15))
             );
             size = 3;
             consumePower(1.2f);
@@ -6157,7 +6202,7 @@ public class Blocks{
         }};
 
         airFactory = new UnitFactory("air-factory"){{
-            requirements(Category.units, with(Items.copper, 60, Items.lead, 70));
+            requirements(Category.units, with(Items.copper, 110, Items.lead, 80, Items.titanium, 35));
             plans = Seq.with(
                 new UnitPlan(UnitTypes.flare, 60f * 15, with(Items.silicon, 15)),
                 new UnitPlan(UnitTypes.mono, 60f * 35, with(Items.silicon, 30, Items.lead, 15))
@@ -6171,7 +6216,7 @@ public class Blocks{
             requirements(Category.units, with(Items.copper, 150, Items.lead, 130, Items.metaglass, 120));
             plans = Seq.with(
                 new UnitPlan(UnitTypes.risso, 60f * 45f, with(Items.silicon, 20, Items.metaglass, 35)),
-                new UnitPlan(UnitTypes.retusa, 60f * 35f, with(Items.silicon, 15, Items.titanium, 20))
+                new UnitPlan(UnitTypes.retusa, 60f * 35f, with(Items.silicon, 15, Items.metaglass, 25, Items.titanium, 20))
             );
             size = 3;
             consumePower(1.2f);
@@ -6183,7 +6228,7 @@ public class Blocks{
 
             size = 3;
             consumePower(3f);
-            consumeItems(with(Items.silicon, 40, Items.graphite, 40));
+            consumeItems(with(Items.silicon, 30, Items.graphite, 30));
 
             constructTime = 60f * 10f;
 
@@ -6275,7 +6320,7 @@ public class Blocks{
             requirements(Category.units, with(Items.silicon, 90, Items.thorium, 80, Items.plastanium, 60));
             size = 2;
             length = 6f;
-            repairSpeed = 3f;
+            repairSpeed = 1.5f;
             repairRadius = 145f;
             powerUse = 5f;
             beamWidth = 1.1f;
diff --git a/core/src/mindustry/content/StatusEffects.java b/core/src/mindustry/content/StatusEffects.java
index 7e9466f2d..8d0cb7495 100644
--- a/core/src/mindustry/content/StatusEffects.java
+++ b/core/src/mindustry/content/StatusEffects.java
@@ -20,8 +20,10 @@ public class StatusEffects{
         burning = new StatusEffect("burning"){{
             color = Color.valueOf("ffc455");
             damage = 0.167f;
+            reloadMultiplier = 0.9f;
+            speedMultiplier = 0.9f;
             effect = Fx.burning;
-            transitionDamage = 8f;
+            transitionDamage = 12;
 
             init(() -> {
                 opposite(wet, freezing);
@@ -38,7 +40,7 @@ public class StatusEffects{
             speedMultiplier = 0.6f;
             healthMultiplier = 0.8f;
             effect = Fx.freezing;
-            transitionDamage = 18f;
+            transitionDamage = 14;
 
             init(() -> {
                 opposite(melting, burning);
@@ -76,7 +78,7 @@ public class StatusEffects{
             speedMultiplier = 0.94f;
             effect = Fx.wet;
             effectChance = 0.09f;
-            transitionDamage = 14;
+            transitionDamage = 13;
 
             init(() -> {
                 affinity(shocked, (unit, result, time) -> {
diff --git a/core/src/mindustry/content/UnitTypes.java b/core/src/mindustry/content/UnitTypes.java
index 90d83fb03..ac10a9935 100644
--- a/core/src/mindustry/content/UnitTypes.java
+++ b/core/src/mindustry/content/UnitTypes.java
@@ -99,28 +99,31 @@ public class UnitTypes{
 
         dagger = new UnitType("dagger"){{
             researchCostMultiplier = 0.5f;
-            speed = 0.5f;
+            speed = 0.64f;
             hitSize = 8f;
-            health = 150;
+            rotateSpeed = 7f;
+            health = 120;
+            armor = 2f;
             weapons.add(new Weapon("large-weapon"){{
-                reload = 13f;
+                reload = 20f;
                 x = 4f;
                 y = 2f;
                 top = false;
                 ejectEffect = Fx.casing1;
-                bullet = new BasicBulletType(2.5f, 9){{
+                bullet = new BasicBulletType(2.5f, 12){{
                     width = 7f;
                     height = 9f;
-                    lifetime = 60f;
+                    lifetime = 56f;
                 }};
             }});
         }};
 
         mace = new UnitType("mace"){{
-            speed = 0.5f;
+            speed = 0.61f;
             hitSize = 10f;
-            health = 550;
-            armor = 4f;
+            rotateSpeed = 4f;
+            health = 510;
+            armor = 5f;
             ammoType = new ItemAmmoType(Items.coal);
 
             immunities.add(StatusEffects.burning);
@@ -132,7 +135,7 @@ public class UnitTypes{
                 reload = 11f;
                 recoil = 1f;
                 ejectEffect = Fx.none;
-                bullet = new BulletType(4.2f, 37f){{
+                bullet = new BulletType(4.2f, 27f){{
                     ammoMultiplier = 3f;
                     hitSize = 7f;
                     lifetime = 13f;
@@ -151,12 +154,12 @@ public class UnitTypes{
         }};
 
         fortress = new UnitType("fortress"){{
-            speed = 0.43f;
+            speed = 0.5f;
             hitSize = 13f;
-            rotateSpeed = 3f;
+            rotateSpeed = 3.2f;
             targetAir = false;
-            health = 900;
-            armor = 9f;
+            health = 910;
+            armor = 10f;
             mechFrontSway = 0.55f;
             ammoType = new ItemAmmoType(Items.graphite);
 
@@ -169,15 +172,15 @@ public class UnitTypes{
                 shake = 2f;
                 ejectEffect = Fx.casing2;
                 shootSound = Sounds.artillery;
-                bullet = new ArtilleryBulletType(2f, 20, "shell"){{
+                bullet = new ArtilleryBulletType(2.5f, 20, "shell"){{
                     hitEffect = Fx.blastExplosion;
                     knockback = 0.8f;
-                    lifetime = 120f;
+                    lifetime = 94.8f;
                     width = height = 14f;
                     collides = true;
                     collidesTiles = true;
                     splashDamageRadius = 35f;
-                    splashDamage = 80f;
+                    splashDamage = 70f;
                     backColor = Pal.bulletYellowBack;
                     frontColor = Pal.bulletYellow;
                 }};
@@ -185,11 +188,11 @@ public class UnitTypes{
         }};
 
         scepter = new UnitType("scepter"){{
-            speed = 0.36f;
+            speed = 0.52f;
             hitSize = 22f;
-            rotateSpeed = 2.1f;
-            health = 9000;
-            armor = 10f;
+            rotateSpeed = 3f;
+            health = 9100;
+            armor = 14f;
             mechFrontSway = 1f;
             ammoType = new ItemAmmoType(Items.thorium);
 
@@ -200,10 +203,10 @@ public class UnitTypes{
 
             abilities.add(new ShieldRegenFieldAbility(25f, 250f, 60f * 1, 60f));
 
-            BulletType smallBullet = new BasicBulletType(3f, 10){{
+            BulletType smallBullet = new BasicBulletType(3f, 23){{
                 width = 7f;
                 height = 9f;
-                lifetime = 50f;
+                lifetime = 55f;
             }};
 
             weapons.add(
@@ -222,10 +225,10 @@ public class UnitTypes{
                 shoot.shots = 3;
                 shoot.shotDelay = 4f;
 
-                bullet = new BasicBulletType(8f, 80){{
+                bullet = new BasicBulletType(8f, 70){{
                     width = 11f;
                     height = 20f;
-                    lifetime = 27f;
+                    lifetime = 22f;
                     shootEffect = Fx.shootBig;
                     lightning = 2;
                     lightningLength = 6;
@@ -255,11 +258,11 @@ public class UnitTypes{
         }};
 
         reign = new UnitType("reign"){{
-            speed = 0.4f;
+            speed = 0.48f;
             hitSize = 30f;
-            rotateSpeed = 1.65f;
-            health = 24000;
-            armor = 18f;
+            rotateSpeed = 2.6f;
+            health = 25000;
+            armor = 27f;
             mechStepParticles = true;
             stepShake = 0.75f;
             drownTimeMultiplier = 1.6f;
@@ -284,7 +287,7 @@ public class UnitTypes{
                     pierceCap = 10;
                     width = 14f;
                     height = 33f;
-                    lifetime = 15f;
+                    lifetime = 17.1f;
                     shootEffect = Fx.shootBig;
                     fragVelocityMin = 0.4f;
 
@@ -303,7 +306,7 @@ public class UnitTypes{
                         pierceBuilding = true;
                         pierceCap = 3;
 
-                        lifetime = 20f;
+                        lifetime = 17f;
                         hitEffect = Fx.flakExplosion;
                         splashDamage = 15f;
                         splashDamageRadius = 10f;
@@ -320,13 +323,17 @@ public class UnitTypes{
         nova = new UnitType("nova"){{
             canBoost = true;
             boostMultiplier = 1.5f;
-            speed = 0.55f;
+            speed = 0.68f;
+            rotateSpeed = 7f;
             hitSize = 8f;
-            health = 120f;
-            buildSpeed = 0.3f;
-            armor = 1f;
+            health = 90f;
+            buildSpeed = 0.5f;
+            armor = 3f;
 
-            abilities.add(new RepairFieldAbility(10f, 60f * 4, 60f));
+            abilities.add(new RepairFieldAbility(10f, 90f, 60f){{
+                sameTypeHealMult = 0.5f;
+            }});
+            
             ammoType = new PowerAmmoType(1000);
 
             weapons.add(new Weapon("heal-weapon"){{
@@ -339,9 +346,10 @@ public class UnitTypes{
                 recoil = 2f;
                 shootSound = Sounds.lasershoot;
 
-                bullet = new LaserBoltBulletType(5.2f, 13){{
+                bullet = new LaserBoltBulletType(5.2f, 15){{
                     lifetime = 30f;
-                    healPercent = 5f;
+                    healPercent = 1f;
+                    healAmount = 10f;
                     collidesTeam = true;
                     backColor = Pal.heal;
                     frontColor = Color.white;
@@ -352,17 +360,17 @@ public class UnitTypes{
         pulsar = new UnitType("pulsar"){{
             canBoost = true;
             boostMultiplier = 1.6f;
-            speed = 0.7f;
+            speed = 0.732f;
             hitSize = 11f;
-            health = 320f;
+            health = 290f;
             buildSpeed = 0.5f;
             armor = 4f;
             riseSpeed = 0.07f;
 
             mineTier = 2;
-            mineSpeed = 3f;
+            mineSpeed = 3.5f;
 
-            abilities.add(new ShieldRegenFieldAbility(20f, 40f, 60f * 5, 60f));
+            abilities.add(new ShieldRegenFieldAbility(20f, 40f, 30f * 5, 60f));
             ammoType = new PowerAmmoType(1300);
 
             weapons.add(new Weapon("heal-shotgun-weapon"){{
@@ -384,8 +392,8 @@ public class UnitTypes{
 
                 bullet = new LightningBulletType(){{
                     lightningColor = hitColor = Pal.heal;
-                    damage = 15f;
-                    lightningLength = 8;
+                    damage = 13f;
+                    lightningLength = 7;
                     lightningLengthRand = 7;
                     shootEffect = Fx.shootHeal;
                     //Does not actually do anything; Just here to make stats work
@@ -398,7 +406,7 @@ public class UnitTypes{
                         status = StatusEffects.shocked;
                         statusDuration = 10f;
                         hittable = false;
-                        healPercent = 1.6f;
+                        healPercent = 0.75f;
                         collidesTeam = true;
                     }};
                 }};
@@ -407,24 +415,25 @@ public class UnitTypes{
 
         quasar = new UnitType("quasar"){{
             mineTier = 3;
-            boostMultiplier = 2f;
-            health = 640f;
+            boostMultiplier = 1.9f;
+            health = 750f;
             buildSpeed = 1.1f;
             canBoost = true;
-            armor = 9f;
+            armor = 8f;
             mechLandShake = 2f;
             riseSpeed = 0.05f;
 
             mechFrontSway = 0.55f;
             ammoType = new PowerAmmoType(1500);
 
-            speed = 0.5f;
+            speed = 0.535f;
             hitSize = 13f;
+            rotateSpeed = 5f;
 
             mineSpeed = 4f;
             drawShields = false;
 
-            abilities.add(new ForceFieldAbility(60f, 0.4f, 500f, 60f * 6));
+            abilities.add(new ForceFieldAbility(60f, 0.3f, 512f, 180f));
 
             weapons.add(new Weapon("beam-weapon"){{
                 top = false;
@@ -436,14 +445,15 @@ public class UnitTypes{
                 shootSound = Sounds.laser;
 
                 bullet = new LaserBulletType(){{
-                    damage = 45f;
+                    damage = 52f;
                     recoil = 0f;
                     sideAngle = 45f;
                     sideWidth = 1f;
                     sideLength = 70f;
-                    healPercent = 10f;
+                    healPercent = 5f;
+                    healAmount = 35f;
                     collidesTeam = true;
-                    length = 150f;
+                    length = 135f;
                     colors = new Color[]{Pal.heal.cpy().a(0.4f), Pal.heal, Color.white};
                 }};
             }});
@@ -452,7 +462,7 @@ public class UnitTypes{
         vela = new UnitType("vela"){{
             hitSize = 24f;
 
-            rotateSpeed = 1.8f;
+            rotateSpeed = 3.2f;
             mechFrontSway = 1f;
             buildSpeed = 3f;
 
@@ -461,15 +471,15 @@ public class UnitTypes{
             ammoType = new PowerAmmoType(2500);
             drownTimeMultiplier = 1.3f;
 
-            speed = 0.44f;
-            boostMultiplier = 2.4f;
+            speed = 0.56f;
+            boostMultiplier = 1.6f;
             engineOffset = 12f;
             engineSize = 6f;
             lowAltitude = true;
             riseSpeed = 0.02f;
 
-            health = 8200f;
-            armor = 9f;
+            health = 7800f;
+            armor = 13f;
             canBoost = true;
             mechLandShake = 4f;
             immunities = ObjectSet.with(StatusEffects.burning);
@@ -525,7 +535,7 @@ public class UnitTypes{
                 y = -30f / 4f;
                 shootY = 6f;
                 beamWidth = 0.8f;
-                repairSpeed = 1.4f;
+                repairSpeed = 1.94f;
 
                 bullet = new BulletType(){{
                     maxRange = 120f;
@@ -535,8 +545,8 @@ public class UnitTypes{
 
         corvus = new UnitType("corvus"){{
             hitSize = 29f;
-            health = 18000f;
-            armor = 9f;
+            health = 15000f;
+            armor = 12f;
             stepShake = 1.5f;
             rotateSpeed = 1.5f;
             drownTimeMultiplier = 1.6f;
@@ -551,7 +561,7 @@ public class UnitTypes{
             ammoType = new PowerAmmoType(4000);
             groundLayer = Layer.legUnit;
 
-            speed = 0.3f;
+            speed = 0.36f;
 
             drawShields = false;
 
@@ -564,35 +574,40 @@ public class UnitTypes{
                 shake = 14f;
                 shootY = 5f;
                 x = y = 0;
-                reload = 350f;
+                reload = 540f;
                 recoil = 0f;
 
+                shoot.shots = 3;
+                shoot.shotDelay = 30f;
+                
                 cooldownTime = 350f;
 
-                shootStatusDuration = 60f * 2f;
+                shootStatusDuration = 72f * 2f;
                 shootStatus = StatusEffects.unmoving;
                 shoot.firstShotDelay = Fx.greenLaserCharge.lifetime;
                 parentizeEffects = true;
 
                 bullet = new LaserBulletType(){{
-                    length = 460f;
-                    damage = 560f;
+                    length = 415f;
+                    damage = 74f;
                     width = 75f;
 
-                    lifetime = 65f;
+                    lifetime = 47f;
+
+                    buildingDamageMultiplier = 3f;
 
                     lightningSpacing = 35f;
                     lightningLength = 5;
                     lightningDelay = 1.1f;
                     lightningLengthRand = 15;
-                    lightningDamage = 50;
+                    lightningDamage = 17;
                     lightningAngleRand = 40f;
                     largeHit = true;
                     lightColor = lightningColor = Pal.heal;
 
                     chargeEffect = Fx.greenLaserCharge;
 
-                    healPercent = 25f;
+                    healPercent = 18f;
                     collidesTeam = true;
 
                     sideAngle = 15f;
@@ -612,7 +627,7 @@ public class UnitTypes{
 
             speed = 1f;
             hitSize = 8f;
-            health = 150;
+            health = 110;
             mechSideSway = 0.25f;
             range = 40f;
             ammoType = new ItemAmmoType(Items.coal);
@@ -645,12 +660,12 @@ public class UnitTypes{
         }};
 
         atrax = new UnitType("atrax"){{
-            speed = 0.6f;
+            speed = 0.84f;
             drag = 0.4f;
             hitSize = 13f;
-            rotateSpeed = 3f;
+            rotateSpeed = 7.5f;
             targetAir = false;
-            health = 600;
+            health = 370;
             immunities = ObjectSet.with(StatusEffects.burning, StatusEffects.melting);
 
             legCount = 4;
@@ -674,7 +689,7 @@ public class UnitTypes{
                 shootSound = Sounds.flame;
 
                 bullet = new LiquidBulletType(Liquids.slag){{
-                    damage = 13;
+                    damage = 12;
                     speed = 2.5f;
                     drag = 0.009f;
                     shootEffect = Fx.shootSmall;
@@ -685,18 +700,18 @@ public class UnitTypes{
         }};
 
         spiroct = new UnitType("spiroct"){{
-            speed = 0.54f;
+            speed = 0.828f;
             drag = 0.4f;
             hitSize = 15f;
-            rotateSpeed = 3f;
-            health = 1000;
+            rotateSpeed = 7f;
+            health = 1100;
             legCount = 6;
             legLength = 13f;
             legForwardScl = 0.8f;
             legMoveSpace = 1.4f;
             legBaseOffset = 2f;
             hovering = true;
-            armor = 5f;
+            armor = 7f;
             ammoType = new PowerAmmoType(1000);
 
             shadowElevation = 0.3f;
@@ -749,12 +764,12 @@ public class UnitTypes{
 
         arkyid = new UnitType("arkyid"){{
             drag = 0.1f;
-            speed = 0.62f;
+            speed = 0.92f;
             hitSize = 23f;
-            health = 8000;
-            armor = 6f;
+            health = 7800;
+            armor = 12f;
 
-            rotateSpeed = 2.7f;
+            rotateSpeed = 4f;
 
             legCount = 6;
             legMoveSpace = 1f;
@@ -833,7 +848,7 @@ public class UnitTypes{
                     collidesTiles = true;
                     ammoMultiplier = 4f;
                     splashDamageRadius = 70f;
-                    splashDamage = 65f;
+                    splashDamage = 75f;
                     backColor = Pal.sapBulletBack;
                     frontColor = lightningColor = Pal.sapBullet;
                     lightning = 3;
@@ -849,13 +864,13 @@ public class UnitTypes{
 
         toxopid = new UnitType("toxopid"){{
             drag = 0.1f;
-            speed = 0.5f;
+            speed = 0.68f;
             hitSize = 26f;
-            health = 22000;
-            armor = 13f;
+            health = 21000;
+            armor = 18f;
             lightRadius = 140f;
 
-            rotateSpeed = 1.9f;
+            rotateSpeed = 1.8f;
 
             legCount = 8;
             legMoveSpace = 0.8f;
@@ -894,7 +909,7 @@ public class UnitTypes{
 
                 bullet = new ShrapnelBulletType(){{
                     length = 90f;
-                    damage = 110f;
+                    damage = 180f;
                     width = 25f;
                     serrationLenScl = 7f;
                     serrationSpaceOffset = 60f;
@@ -923,10 +938,10 @@ public class UnitTypes{
 
                 rotationLimit = 80f;
 
-                bullet = new ArtilleryBulletType(3f, 50){{
+                bullet = new ArtilleryBulletType(3f, 110){{
                     hitEffect = Fx.sapExplosion;
                     knockback = 0.8f;
-                    lifetime = 80f;
+                    lifetime = 73f;
                     width = height = 25f;
                     collidesTiles = collides = true;
                     ammoMultiplier = 4f;
@@ -982,7 +997,8 @@ public class UnitTypes{
             accel = 0.08f;
             drag = 0.04f;
             flying = true;
-            health = 70;
+            health = 35;
+            rotateSpeed = 9f;
             engineOffset = 5.75f;
             //TODO balance
             //targetAir = false;
@@ -993,9 +1009,9 @@ public class UnitTypes{
             weapons.add(new Weapon(){{
                 y = 0f;
                 x = 2f;
-                reload = 20f;
+                reload = 15f;
                 ejectEffect = Fx.casing1;
-                bullet = new BasicBulletType(2.5f, 9){{
+                bullet = new BasicBulletType(2.5f, 10){{
                     width = 7f;
                     height = 9f;
                     lifetime = 45f;
@@ -1008,8 +1024,9 @@ public class UnitTypes{
         }};
 
         horizon = new UnitType("horizon"){{
-            health = 340;
-            speed = 1.65f;
+            health = 240;
+            rotateSpeed = 7f;
+            speed = 2.2f;
             accel = 0.08f;
             drag = 0.016f;
             flying = true;
@@ -1035,7 +1052,7 @@ public class UnitTypes{
                 inaccuracy = 15f;
                 ignoreRotation = true;
                 shootSound = Sounds.none;
-                bullet = new BombBulletType(27f, 25f){{
+                bullet = new BombBulletType(23f, 25f){{
                     width = 10f;
                     height = 14f;
                     hitEffect = Fx.flakExplosion;
@@ -1050,10 +1067,11 @@ public class UnitTypes{
         }};
 
         zenith = new UnitType("zenith"){{
-            health = 700;
+            health = 510;
             speed = 1.7f;
+            rotateSpeed = 5.2f;
             accel = 0.04f;
-            drag = 0.016f;
+            drag = 0.043f;
             flying = true;
             range = 140f;
             hitSize = 20f;
@@ -1085,7 +1103,7 @@ public class UnitTypes{
                     keepVelocity = false;
                     splashDamageRadius = 25f;
                     splashDamage = 15f;
-                    lifetime = 50f;
+                    lifetime = 55f;
                     trailColor = Pal.unitBack;
                     backColor = Pal.unitBack;
                     frontColor = Pal.unitFront;
@@ -1098,29 +1116,29 @@ public class UnitTypes{
         }};
 
         antumbra = new UnitType("antumbra"){{
-            speed = 0.8f;
+            speed = 0.72f;
             accel = 0.04f;
             drag = 0.04f;
-            rotateSpeed = 1.9f;
+            rotateSpeed = 2.2f;
             flying = true;
             lowAltitude = true;
-            health = 7200;
-            armor = 9f;
+            health = 8100;
+            armor = 8f;
             engineOffset = 21;
             engineSize = 5.3f;
             hitSize = 46f;
             targetFlags = new BlockFlag[]{BlockFlag.generator, BlockFlag.core, null};
             ammoType = new ItemAmmoType(Items.thorium);
 
-            BulletType missiles = new MissileBulletType(2.7f, 18){{
-                width = 8f;
-                height = 8f;
+            BulletType missiles = new MissileBulletType(2.7f, 23){{
+                width = 8.5f;
+                height = 8.5f;
                 shrinkY = 0f;
                 drag = -0.01f;
-                splashDamageRadius = 20f;
+                splashDamageRadius = 33f;
                 splashDamage = 37f;
                 ammoMultiplier = 4f;
-                lifetime = 50f;
+                lifetime = 62f;
                 hitEffect = Fx.blastExplosion;
                 despawnEffect = Fx.blastExplosion;
 
@@ -1165,7 +1183,7 @@ public class UnitTypes{
                 bullet = new BasicBulletType(7f, 55){{
                     width = 12f;
                     height = 18f;
-                    lifetime = 25f;
+                    lifetime = 32.5f;
                     shootEffect = Fx.shootBig;
                 }};
             }}
@@ -1173,27 +1191,27 @@ public class UnitTypes{
         }};
 
         eclipse = new UnitType("eclipse"){{
-            speed = 0.54f;
+            speed = 0.66f;
             accel = 0.04f;
             drag = 0.04f;
-            rotateSpeed = 1f;
+            rotateSpeed = 1.9f;
             flying = true;
             lowAltitude = true;
             health = 22000;
             engineOffset = 38;
             engineSize = 7.3f;
             hitSize = 58f;
-            armor = 13f;
+            armor = 17f;
             targetFlags = new BlockFlag[]{BlockFlag.reactor, BlockFlag.battery, BlockFlag.core, null};
             ammoType = new ItemAmmoType(Items.thorium);
 
-            BulletType fragBullet = new FlakBulletType(4f, 15){{
+            BulletType fragBullet = new FlakBulletType(4f, 35){{
                 shootEffect = Fx.shootBig;
                 ammoMultiplier = 4f;
                 splashDamage = 65f;
                 splashDamageRadius = 25f;
                 collidesGround = true;
-                lifetime = 47f;
+                lifetime = 65f;
 
                 status = StatusEffects.blasted;
                 statusDuration = 60f;
@@ -1213,12 +1231,12 @@ public class UnitTypes{
                 rotate = true;
 
                 bullet = new LaserBulletType(){{
-                    damage = 115f;
+                    damage = 130f;
                     sideAngle = 20f;
                     sideWidth = 1.5f;
                     sideLength = 80f;
                     width = 25f;
-                    length = 230f;
+                    length = 257f;
                     shootEffect = Fx.shockwave;
                     colors = new Color[]{Color.valueOf("ec7458aa"), Color.valueOf("ff9c5a"), Color.white};
                 }};
@@ -1282,8 +1300,9 @@ public class UnitTypes{
             rotateSpeed = 15f;
             accel = 0.1f;
             range = 130f;
-            health = 400;
-            buildSpeed = 0.5f;
+            health = 170;
+            armor = 1f;
+            buildSpeed = 0.3f;
             engineOffset = 6.5f;
             hitSize = 9f;
             lowAltitude = true;
@@ -1292,7 +1311,7 @@ public class UnitTypes{
             mineTier = 2;
             mineSpeed = 3.5f;
 
-            abilities.add(new RepairFieldAbility(5f, 60f * 8, 50f));
+            abilities.add(new RepairFieldAbility(5f, 112f, 50f));
 
             weapons.add(new Weapon("poly-weapon"){{
                 top = false;
@@ -1318,7 +1337,7 @@ public class UnitTypes{
                     frontColor = Color.white;
                     hitSound = Sounds.none;
 
-                    healPercent = 5.5f;
+                    healPercent = 3f;
                     collidesTeam = true;
                     reflectable = false;
                     backColor = Pal.heal;
@@ -1332,11 +1351,12 @@ public class UnitTypes{
 
             mineTier = 3;
             mineSpeed = 4f;
-            health = 460;
-            armor = 3f;
-            speed = 2.5f;
+            health = 380;
+            armor = 2f;
+            rotateSpeed = 7f;
+            speed = 2.56f;
             accel = 0.06f;
-            drag = 0.017f;
+            drag = 0.04f;
             lowAltitude = true;
             flying = true;
             engineOffset = 10.5f;
@@ -1358,7 +1378,8 @@ public class UnitTypes{
                 rotate = true;
                 bullet = new LaserBoltBulletType(5.2f, 10){{
                     lifetime = 35f;
-                    healPercent = 5.5f;
+                    healPercent = 3f;
+                    healAmount = 7.5f;
                     collidesTeam = true;
                     backColor = Pal.heal;
                     frontColor = Color.white;
@@ -1372,7 +1393,8 @@ public class UnitTypes{
                 rotate = true;
                 bullet = new LaserBoltBulletType(5.2f, 8){{
                     lifetime = 35f;
-                    healPercent = 3f;
+                    healPercent = 2f;
+                    healAmount = 5.5f;
                     collidesTeam = true;
                     backColor = Pal.heal;
                     frontColor = Color.white;
@@ -1384,7 +1406,7 @@ public class UnitTypes{
             armor = 8f;
             health = 6000;
             speed = 1.2f;
-            rotateSpeed = 2f;
+            rotateSpeed = 3f;
             accel = 0.05f;
             drag = 0.017f;
             lowAltitude = false;
@@ -1396,7 +1418,7 @@ public class UnitTypes{
             faceTarget = false;
             hitSize = 36f;
             payloadCapacity = (3 * 3) * tilePayload;
-            buildSpeed = 2.5f;
+            buildSpeed = 3.5f;
             buildBeamOffset = 23;
             range = 140f;
             targetAir = false;
@@ -1456,10 +1478,10 @@ public class UnitTypes{
         oct = new UnitType("oct"){{
             aiController = DefenderAI::new;
 
-            armor = 16f;
-            health = 24000;
+            armor = 15f;
+            health = 18000;
             speed = 0.8f;
-            rotateSpeed = 1f;
+            rotateSpeed = 3f;
             accel = 0.04f;
             drag = 0.018f;
             flying = true;
@@ -1474,19 +1496,19 @@ public class UnitTypes{
             buildBeamOffset = 43;
             ammoCapacity = 1;
 
-            abilities.add(new ForceFieldAbility(140f, 4f, 7000f, 60f * 8, 8, 0f), new RepairFieldAbility(130f, 60f * 2, 140f));
+            abilities.add(new ForceFieldAbility(140f, 10f, 12000f, 60f * 8, 8, 0f), new RepairFieldAbility(700f, 60f * 2, 140f));
         }};
 
         //endregion
         //region naval attack
 
         risso = new UnitType("risso"){{
-            speed = 1.1f;
+            speed = 1.03f;
             drag = 0.13f;
             hitSize = 10f;
-            health = 280;
+            health = 220;
             accel = 0.4f;
-            rotateSpeed = 3.3f;
+            rotateSpeed = 8f;
             faceTarget = false;
 
             armor = 2f;
@@ -1501,7 +1523,7 @@ public class UnitTypes{
                 bullet = new BasicBulletType(2.5f, 9){{
                     width = 7f;
                     height = 9f;
-                    lifetime = 60f;
+                    lifetime = 48f;
                     ammoMultiplier = 2;
                 }};
             }});
@@ -1536,13 +1558,13 @@ public class UnitTypes{
         }};
 
         minke = new UnitType("minke"){{
-            health = 600;
-            speed = 0.9f;
+            health = 370;
+            speed = 0.82f;
             drag = 0.15f;
             hitSize = 13f;
             armor = 4f;
             accel = 0.3f;
-            rotateSpeed = 2.6f;
+            rotateSpeed = 7f;
             faceTarget = false;
             ammoType = new ItemAmmoType(Items.graphite);
 
@@ -1561,7 +1583,7 @@ public class UnitTypes{
                 ejectEffect = Fx.casing1;
                 shootSound = Sounds.shoot;
                 bullet = new FlakBulletType(4.2f, 3){{
-                    lifetime = 60f;
+                    lifetime = 46f;
                     ammoMultiplier = 4f;
                     shootEffect = Fx.shootSmall;
                     width = 6f;
@@ -1585,7 +1607,7 @@ public class UnitTypes{
                 bullet = new ArtilleryBulletType(3f, 20, "shell"){{
                     hitEffect = Fx.flakExplosion;
                     knockback = 0.8f;
-                    lifetime = 80f;
+                    lifetime = 67f;
                     width = height = 11f;
                     collidesTiles = false;
                     splashDamageRadius = 30f * 0.75f;
@@ -1595,13 +1617,13 @@ public class UnitTypes{
         }};
 
         bryde = new UnitType("bryde"){{
-            health = 910;
-            speed = 0.85f;
+            health = 730;
+            speed = 0.78f;
             accel = 0.2f;
-            rotateSpeed = 1.8f;
+            rotateSpeed = 5.5f;
             drag = 0.17f;
             hitSize = 20f;
-            armor = 7f;
+            armor = 9f;
             faceTarget = false;
             ammoType = new ItemAmmoType(Items.graphite);
 
@@ -1632,7 +1654,7 @@ public class UnitTypes{
                     trailMult = 0.8f;
                     hitEffect = Fx.massiveExplosion;
                     knockback = 1.5f;
-                    lifetime = 84f;
+                    lifetime = 75f;
                     height = 15.5f;
                     width = 15f;
                     collidesTiles = false;
@@ -1692,13 +1714,13 @@ public class UnitTypes{
 
         sei = new UnitType("sei"){{
             health = 11000;
-            armor = 12f;
+            armor = 15f;
 
-            speed = 0.73f;
+            speed = 0.76f;
             drag = 0.17f;
             hitSize = 39f;
             accel = 0.2f;
-            rotateSpeed = 1.3f;
+            rotateSpeed = 3.2f;
             faceTarget = false;
             ammoType = new ItemAmmoType(Items.thorium);
 
@@ -1743,7 +1765,7 @@ public class UnitTypes{
                     keepVelocity = false;
                     splashDamageRadius = 35f;
                     splashDamage = 45f;
-                    lifetime = 62f;
+                    lifetime = 56f;
                     trailColor = Pal.bulletYellowBack;
                     backColor = Pal.bulletYellowBack;
                     frontColor = Pal.bulletYellow;
@@ -1776,19 +1798,19 @@ public class UnitTypes{
                     width = 13f;
                     height = 19f;
                     shootEffect = Fx.shootBig;
-                    lifetime = 35f;
+                    lifetime = 32f;
                 }};
             }});
         }};
 
         omura = new UnitType("omura"){{
-            health = 22000;
-            speed = 0.62f;
+            health = 21000;
+            speed = 0.53f;
             drag = 0.18f;
             hitSize = 58f;
             armor = 16f;
             accel = 0.19f;
-            rotateSpeed = 0.9f;
+            rotateSpeed = 2.4f;
             faceTarget = false;
             ammoType = new PowerAmmoType(4000);
 
@@ -1819,7 +1841,7 @@ public class UnitTypes{
 
                 bullet = new RailBulletType(){{
                     shootEffect = Fx.railShoot;
-                    length = 500;
+                    length = 410;
                     pointEffectSpace = 60f;
                     pierceEffect = Fx.railHit;
                     pointEffect = Fx.railTrail;
@@ -1839,7 +1861,7 @@ public class UnitTypes{
             hitSize = 11f;
             health = 270;
             accel = 0.4f;
-            rotateSpeed = 5f;
+            rotateSpeed = 9f;
             trailLength = 20;
             waveTrailX = 5f;
             trailScl = 1.3f;
@@ -1945,7 +1967,7 @@ public class UnitTypes{
             hitSize = 14f;
             armor = 4f;
             accel = 0.4f;
-            rotateSpeed = 4f;
+            rotateSpeed = 8f;
             faceTarget = false;
 
             trailLength = 22;
@@ -2001,7 +2023,7 @@ public class UnitTypes{
                 mirror = false;
                 x = 0f;
                 y = 1f;
-                reload = 9f;
+                reload = 16f;
                 targetInterval = 10f;
                 targetSwitchInterval = 15f;
 
@@ -2016,13 +2038,13 @@ public class UnitTypes{
         }};
 
         cyerce = new UnitType("cyerce"){{
-            health = 870;
-            speed = 0.86f;
+            health = 720;
+            speed = 0.775f;
             accel = 0.22f;
-            rotateSpeed = 2.6f;
+            rotateSpeed = 6.5f;
             drag = 0.16f;
             hitSize = 20f;
-            armor = 6f;
+            armor = 8f;
             faceTarget = false;
             ammoType = new ItemAmmoType(Items.graphite);
 
@@ -2039,7 +2061,7 @@ public class UnitTypes{
                 y = -10f;
                 shootY = 6f;
                 beamWidth = 0.8f;
-                repairSpeed = 0.7f;
+                repairSpeed = 0.57f;
 
                 bullet = new BulletType(){{
                     maxRange = 130f;
@@ -2153,14 +2175,14 @@ public class UnitTypes{
         }};
 
         aegires = new UnitType("aegires"){{
-            health = 12000;
+            health = 9000;
             armor = 12f;
 
-            speed = 0.7f;
+            speed = 0.75f;
             drag = 0.17f;
             hitSize = 44f;
             accel = 0.2f;
-            rotateSpeed = 1.4f;
+            rotateSpeed = 3f;
             faceTarget = false;
             ammoType = new PowerAmmoType(3500);
             ammoCapacity = 40;
@@ -2203,13 +2225,13 @@ public class UnitTypes{
         }};
 
         navanax = new UnitType("navanax"){{
-            health = 20000;
-            speed = 0.65f;
+            health = 27000;
+            speed = 0.74f;
             drag = 0.17f;
             hitSize = 58f;
-            armor = 16f;
+            armor = 23f;
             accel = 0.2f;
-            rotateSpeed = 1.1f;
+            rotateSpeed = 3.3f;
             faceTarget = false;
             ammoType = new PowerAmmoType(4500);
 
@@ -2238,7 +2260,7 @@ public class UnitTypes{
                         targetSwitchInterval = 35f;
 
                         rotateSpeed = 3.5f;
-                        reload = 170f;
+                        reload = 110f;
                         recoil = 1f;
                         shootSound = Sounds.beam;
                         continuous = true;
@@ -2248,7 +2270,7 @@ public class UnitTypes{
                         bullet = new ContinuousLaserBulletType(){{
                             maxRange = 90f;
                             damage = 27f;
-                            length = 95f;
+                            length = 170f;
                             hitEffect = Fx.hitMeltHeal;
                             drawSize = 200f;
                             lifetime = 155f;
@@ -2284,7 +2306,7 @@ public class UnitTypes{
                 x = 70f/4f;
                 y = -26f/4f;
 
-                reload = 65f;
+                reload = 37f;
                 shake = 3f;
                 rotateSpeed = 2f;
                 shadow = 30f;
@@ -2304,24 +2326,24 @@ public class UnitTypes{
                     timeIncrease = 3f;
                     timeDuration = 60f * 20f;
                     powerDamageScl = 3f;
-                    damage = 60;
+                    damage = 70;
                     hitColor = lightColor = Pal.heal;
                     lightRadius = 70f;
                     clipSize = 250f;
                     shootEffect = Fx.hitEmpSpark;
                     smokeEffect = Fx.shootBigSmoke2;
-                    lifetime = 60f;
+                    lifetime = 35f;
                     sprite = "circle-bullet";
                     backColor = Pal.heal;
                     frontColor = Color.white;
                     width = height = 12f;
                     shrinkY = 0f;
-                    speed = 5f;
+                    speed = 9f;
                     trailLength = 20;
                     trailWidth = 6f;
                     trailColor = Pal.heal;
                     trailInterval = 3f;
-                    splashDamage = 70f;
+                    splashDamage = 210f;
                     splashDamageRadius = rad;
                     hitShake = 4f;
                     trailRotation = true;

--------------------------------------

# Real changelog (by blackberry, aka me. Thanks for alpfha.) 

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
- Repair Point: Repair speed 3 → 1.5

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

### Duo

- copper: damage: 9 -> 13
- graphite: damage: 18 -> 21, reloadMultiplier = 0.7x
- silicon: damage: 12 -> 15

- range: 20 -> 21

### Scatter
- scrap: splashDamage: 33 -> 25, splashDamageRadius: 3.0 -> 4.1
- lead: splashDamage: 40 -> 22, splashDamageRadius: 1.8 -> 3.3
- metaglass: splashDamage: 45 -> 15*1.5, splashDamageRadius: 2.5 -> 3.3, fragBullets: 6 -> 4, reloadMultiplier: 0.8x -> 0.7x
  
- rotateSpeed: 15f -> 12f
- added: coolantMultiplier = 7.5f (increased coolant buff (water: 140% -> 160%; cryofluid: 190% -> 235%))

### Scorch
- pyratite: damage: 60 -> 35

- range: ~7 -> ~9

### Hail
- silicone: splashDamage: 33 -> 27
- pyratite: splashDamageRadius: 2.3 -> 2.6

### Wave
- slag: rangeChange = 24 (+3 range); lifetime = 44
- oil: rangeChange = 24 (+3 range); lifetime = 44

### Lancer
- damage: 140 -> 120
- rotateSpeed = 4f

### Arc
- damage: 20 -> 13
- reload = 1.71 -> 1.87

### Parallax
No changes /shrug

### Swarmer
- blastCompound: damage: 10 -> 13; splashdamage: 45 -> 33; splashDamageRadius: 3.7 -> 5.2
- pyratite: damage: (no changes); splashdamage: 45 -> 32; splashDamageRadius: 2.5 -> 5.5
- surgeAlloy: damage: 18 -> 15; splashDamageRadius: 3.1 -> 3.2

- rotarespeed: default -> 4f

### Salvo
- copper: damage: 11 -> 13
- graphite: damage: 20 -> 25, reloadMultiplier = 0.7x
- pyratite: damage: 18 -> 22, splashDamage = 12 -> 15, splashDamageRadius = 2.7 -> 2.8, pierceCap = 2, knockback = 0.7
- silicon: damage: 15 -> 18, reloadMultiplier = 1.5 -> 1.3, knockback = 0.3
- thorium: damage: 29 -> 27, reloadMultiplier = 0.7x, knockback = 1.5, pierceCap = 2

- reload: 31f -> 32f
- inaccuracy: 7.74 -> 7.5
- requirements: copper = 100, graphite = 80 -> copper = 125, graphite = 70

### Segment
No changes

## Tsunami
- slag: rangeChange = 32 (+4 range); lifetime: 49 -> 58
- cryofluid: rangeChange = 20 (+2.5 range); lifetime: 49 -> 56
- oil: rangeChange = 32 (+4 range); lifetime: 49 -> 58

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

- rotateSpeed: 10f -> 7f
- coolant: 0.3f -> 0.2f ((decreased coolant buff (water: 160% -> 140%; cryofluid: 235% -> 190%))

### Foreshadow
- reload: 0.3 -> 0.22 /todo
- rotateSpeed: 2f -> 1.3f
- coolantMultiplier: 0.4f -> 1f (increased coolant buff (water: 116% -> 140%; cryofluid: 136% -> 190%))

### Spectre
- graphite: damage: 50 -> 75, ammoMultiplier: 4 -> 3, knockback: 0.3 -> 1
- thorium: damage: 80 -> 120, knockback: 0.7 -> 1.3, ammoMultiplier: 4 -> 2
- pyratite: damage: 70 -> 110, splashDamage: 20 -> 32, knockback: 0.6 -> 0.7

- reload: 8.57 -> 8
- rotateSpeed: default -> 1.4f
- coolantMultiplier: 0.5f -> 1f (increased coolant buff (water: 116% -> 140%; cryofluid: 136% -> 190%))
- maxAmmo: 30 -> 90
- range: 32.5 -> 34.1

### Meltdown
- damage: 936/sec -> 1560/sec
- reload: 90f -> 170f,
- shootType: ContinuousLaserBulletType(78) -> (130) (firerate: 0.666 -> 0.352)
- rotateSpeed: default -> 1.3f

---


## Units (headpain)
### Dagger
- Speed: 0.5 → 0.64
- Rotate speed: added 7
- Health: 150 → 120
- Armor: added 2
- Weapon reload: 13 → 20
- Weapon bullet damage: 9 → 12
- Weapon bullet lifetime: 60 → 56

### Mace
- Speed: 0.5 → 0.61
- Rotate speed: added 4
- Health: 550 → 510
- Armor: 4 → 5
- Flamethrower bullet damage: 37 → 27

### Fortress
- Speed: 0.43 → 0.5
- Rotate speed: 3 → 3.2
- Health: 900 → 910
- Armor: 9 → 10
- Artillery bullet speed: 2 → 2.5
- Artillery bullet lifetime: 120 → 94.8
- Artillery splash damage: 80 → 70

### Scepter
- Speed: 0.36 → 0.52
- Rotate speed: 2.1 → 3
- Health: 9000 → 9100
- Armor: 10 → 14
- Small bullet damage: 10 → 23
- Small bullet lifetime: 50 → 55
- Main bullet damage: 80 → 70
- Main bullet lifetime: 27 → 22

### Reign
- Speed: 0.4 → 0.48
- Rotate speed: 1.65 → 2.6
- Health: 24000 → 25000
- Armor: 18 → 27
- Main bullet lifetime: 15 → 17.1
- Fragment bullet lifetime: 20 → 17

---------------------------

### Nova
- Speed: 0.55 → 0.68
- Rotate speed: added 7
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
- Shield Regen Field Ability: range 30 seconds → 150 seconds
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
- Rotate speed: 1.8 → 3.2
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
- Rotate speed: 3 → 7.5
- Health: 600 → 370
- Weapon damage: 13 → 12

### Spiroct
- Speed: 0.54 → 0.828
- Rotate speed: 3 → 7
- Health: 1000 → 1100
- Armor: 5 → 7

### Arkyid
- Speed: 0.62 → 0.92
- Health: 8000 → 7800
- Armor: 6 → 12
- Rotate speed: 2.7 → 4
- Artillery weapon splash damage: 65 → 75

### Toxopid
- Speed: 0.5 → 0.68
- Health: 22000 → 21000
- Armor: 13 → 18
- Rotate speed: 1.9 → 1.8
- Shrapnel weapon damage: 110 → 180
- Artillery weapon damage: 50 → 110

---------------------------

### Flare
- Projectile lifetime: 80 → 73
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

### Eclipse
- Speed: 0.54 → 0.66
- Rotation speed: 1.0 → 1.9
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
- Rotation speed: added at 7
- Speed: 2.5 → 2.56
- Drag: 0.017 → 0.04
- Healing laser bolt: healPercent 3% → 2%, healAmount added 5.5

### Quad
- Rotate speed: 2 → 3
- Build speed: 2.5 → 3.5

### Oct
- Armor: 16 → 15
- Health: 24000 → 18000
- Rotate speed: 1 → 3
- Force field ability: regen 4 → 10, max 7000 → 12000
- Repair field ability: amount 130 → 700

---------------------------

### Risso
- Speed:
- Health: 280 -> 220
- RotateSpeed: 3.3f -> 8f

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

- Removed EMP ally building boost (I mean 200% building boost)
- Increased firerate (0.46 -> 0.81), damage  cannon 
