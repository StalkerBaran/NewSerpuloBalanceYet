//dagger
UnitTypes.dagger.weapons.get(0).reload = 15; 
UnitTypes.dagger.weapons.get(0).bullet.damage = 14;
UnitTypes.dagger.speed = 0.58;
UnitTypes.dagger.health = 180;
UnitTypes.dagger.armor = 1;
UnitTypes.dagger.rotateSpeed = 8;

//mace
UnitTypes.mace.speed = 0.57;
UnitTypes.mace.armor = 5;

//fortress
UnitTypes.fortress.speed = 0.52;

//scepter
UnitTypes.scepter.speed = 0.51;
UnitTypes.scepter.armor = 11;
UnitTypes.scepter.health = 11000;
UnitTypes.scepter.weapons.get(1).bullet.lifetime = 55;
UnitTypes.scepter.weapons.get(0).bullet.lifetime = 22;

//reign
UnitTypes.reign.speed = 0.5;
UnitTypes.reign.armor = 20;
UnitTypes.reign.health = 27000;


//nova
UnitTypes.nova.weapons.get(0).bullet.damage = 21;
UnitTypes.nova.weapons.get(0).reload = 18;
UnitTypes.nova.speed = 0.59;
UnitTypes.nova.health = 200;
UnitTypes.nova.armor = 3;
UnitTypes.nova.abilities.get(0).reload = 90;
UnitTypes.nova.rotateSpeed = 7.5;

//pulsar
UnitTypes.pulsar.speed = 0.62;

//quasar
UnitTypes.quasar.speed = 0.53;
UnitTypes.quasar.weapons.get(0).reload = 32; 
UnitTypes.quasar.health = 830;

//vela
UnitTypes.vela.health = 8900;
UnitTypes.vela.speed = 0.64;
UnitTypes.vela.armor = 11;

//corvus (my changes)
UnitTypes.corvus.speed = 0.29;
UnitTypes.corvus.armor = 13;
UnitTypes.corvus.weapons.get(0).reload = 510;
UnitTypes.corvus.weapons.get(0).shoot.shots = 7;
UnitTypes.corvus.weapons.get(0).shoot.shotDelay = 14;
UnitTypes.corvus.weapons.get(0).bullet.damage = 52;
UnitTypes.corvus.weapons.get(0).bullet.lightningDamage = 18;


//crawler. Nope

// Атрах. Реал
UnitTypes.atrax.speed = 0.95;
UnitTypes.atrax.health = 520;

//spiroct
UnitTypes.spiroct.speed = 0.89;
UnitTypes.spiroct.armor = 4;
UnitTypes.spiroct.health = 1100;
UnitTypes.spiroct.weapons.get(1).reload = 9;

//arkyid
UnitTypes.arkyid.speed = 0.87;
UnitTypes.arkyid.armor = 8;
UnitTypes.arkyid.weapons.get(3).bullet.splashDamage = 75;

//toxopидор
UnitTypes.toxopid.speed = 0.93;
UnitTypes.toxopid.health = 18000;
UnitTypes.toxopid.weapons.get(1).bullet.damage = 130;
UnitTypes.toxopid.weapons.get(0).bullet.damage = 170;


//flare
UnitTypes.flare.speed = 2.5;
UnitTypes.flare.weapons.get(0).reload = 16;
UnitTypes.flare.drag = 0.07;
UnitTypes.flare.rotateSpeed = 9;
UnitTypes.flare.weapons.get(0).bullet.damage = 7;
UnitTypes.flare.crashDamageMultiplier = 0.75;

//horizon
UnitTypes.horizon.speed = 2.2;
UnitTypes.horizon.health = 470;
UnitTypes.horizon.armor = 2;
UnitTypes.horizon.itemCapacity = 30;

//zenith
UnitTypes.zenith.speed = 1.41;
UnitTypes.zenith.health = 790;
UnitTypes.zenith.armor = 3;
UnitTypes.zenith.weapons.get(0).bullet.lifetime = 57;
UnitTypes.zenith.crashDamageMultiplier = 0.7;

//antumbra
UnitTypes.antumbra.health = 9100;
UnitTypes.antumbra.speed = 0.87;
UnitTypes.antumbra.weapons.get(0).bullet.splashDamage = 63;
UnitTypes.antumbra.weapons.get(0).bullet.splashDamageRadius = 32;
UnitTypes.antumbra.crashDamageMultiplier = 0.9;

//eclipse
UnitTypes.eclipse.health = 23000;
UnitTypes.eclipse.speed = 0.78;
UnitTypes.eclipse.armor = 18;


//mono
UnitTypes.mono.speed = 1.7;

//poly. Everything is fine

//mega
UnitTypes.mega.speed = 2.54;
UnitTypes.mega.health = 510;
UnitTypes.mega.crashDamageMultiplier = 0.8;

//quad
UnitTypes.quad.speed = 1.4;
UnitTypes.quad.buildSpeed = 3.5;
UnitTypes.quad.crashDamageMultiplier = 0.9;

//oct
UnitTypes.oct.speed = 0.94;
UnitTypes.oct.armor = 18;
UnitTypes.oct.crashDamageMultiplier = 0.7;
UnitTypes.oct.crashDamageMultiplier = 0.9;

//risso
UnitTypes.risso.speed = 1.06;
UnitTypes.risso.weapons.get(0).bullet.lifetime = 50;

//minke
UnitTypes.minke.speed = 0.84;
UnitTypes.minke.weapons.get(1).bullet.lifetime = 63;


//bryde
UnitTypes.bryde.speed = 0.79;
UnitTypes.bryde.weapons.get(0).bullet.lifetime = 79;

//sei
UnitTypes.sei.speed = 0.77;
UnitTypes.sei.weapons.get(0).bullet.lifetime = 58;
UnitTypes.sei.weapons.get(1).bullet.lifetime = 33;
UnitTypes.sei.armor = 13;

//omura
UnitTypes.omura.speed = 0.42;
UnitTypes.omura.weapons.get(0).bullet.length = 470;


//retusa. Its fine

//oxynoe
UnitTypes.oxynoe.weapons.get(0).reload = 18

//cyerce
UnitTypes.cyerce.speed = 0.795;
UnitTypes.cyerce.health = 810;
UnitTypes.cyerce.weapons.get(0).repairSpeed = 0.57;

//aegires 
UnitTypes.aegires.speed = 0.76;
UnitTypes.aegires.armor = 11;

//navanax
UnitTypes.navanax.speed = 0.43;
UnitTypes.navanax.health = 26000;



// Turret rework



//duo
Blocks.duo.ammoTypes.get(Items.copper).damage = 10;

//scatter

//scorch
Blocks.scorch.ammoTypes.get(Items.coal).damage = 13;
Blocks.scorch.ammoTypes.get(Items.pyratite).damage = 47;

//hail
Blocks.hail.ammoTypes.get(Items.pyratite).splashDamage = 55;
Blocks.hail.ammoTypes.get(Items.pyratite).splashDamageRadius = 31;

//lancer
Blocks.lancer.shootType.pierceCap = 6;
Blocks.lancer.shootType.damage = 90;

//arc
Blocks.arc.shootType.damage = 11;
Blocks.arc.reload = 31;

//swarmer
Blocks.swarmer.ammoTypes.get(Items.blastCompound).splashDamage = 23;
Blocks.swarmer.ammoTypes.get(Items.blastCompound).splashDamageRadius = 41;
Blocks.swarmer.ammoTypes.get(Items.blastCompound).ammoMultiplier = 5;

Blocks.swarmer.ammoTypes.get(Items.pyratite).splashDamage = 22;
Blocks.swarmer.ammoTypes.get(Items.pyratite).splashDamageRadius = 43;
Blocks.swarmer.ammoTypes.get(Items.pyratite).ammoMultiplier = 5;

Blocks.swarmer.ammoTypes.get(Items.surgeAlloy).splashDamage = 29;
Blocks.swarmer.ammoTypes.get(Items.surgeAlloy).splashDamageRadius = 17;
Blocks.swarmer.ammoTypes.get(Items.surgeAlloy).reloadMultiplier = 0.65;
Blocks.swarmer.ammoTypes.get(Items.surgeAlloy).ammoMultiplier = 3;
Blocks.swarmer.ammoTypes.get(Items.surgeAlloy).lightningDamage = 9;
Blocks.swarmer.ammoTypes.get(Items.surgeAlloy).lightning = 3

//salvo 
Blocks.salvo.ammoTypes.get(Items.copper).damage = 13;
Blocks.salvo.ammoTypes.get(Items.graphite).damage = 23;
Blocks.salvo.ammoTypes.get(Items.pyratite).damage = 22;
Blocks.salvo.ammoTypes.get(Items.pyratite).splashDamage = 27;
Blocks.salvo.ammoTypes.get(Items.silicon).splashDamageRadius = 23;
Blocks.salvo.reload = 26

//fuse
Blocks.fuse.reload = 43

//ripple
Blocks.ripple.ammoTypes.get(Items.graphite).splashDamageRadius = 33;
Blocks.ripple.ammoTypes.get(Items.graphite).knockback = 1.2;
Blocks.ripple.ammoTypes.get(Items.graphite).width = 16;
Blocks.ripple.ammoTypes.get(Items.graphite).height = 16;

Blocks.ripple.ammoTypes.get(Items.plastanium).fragBullets = 4;

Blocks.ripple.ammoTypes.get(Items.pyratite).splashDamage = 55;
Blocks.ripple.ammoTypes.get(Items.pyratite).splashDamageRadius = 37;
Blocks.ripple.ammoTypes.get(Items.pyratite).width = 17;
Blocks.ripple.ammoTypes.get(Items.pyratite).height = 17;

Blocks.ripple.ammoTypes.get(Items.blastCompound).width = 16;
Blocks.ripple.ammoTypes.get(Items.blastCompound).height = 16;
Blocks.ripple.ammoTypes.get(Items.blastCompound).splashDamageRadius = 35;
Blocks.ripple.ammoTypes.get(Items.blastCompound).splashDamage = 65;
Blocks.ripple.ammoTypes.get(Items.blastCompound).reloadMultiplier = 0.9;

//cyclone
Blocks.cyclone.reload = 12;

Blocks.cyclone.ammoTypes.get(Items.metaglass).damage = 13;
Blocks.cyclone.ammoTypes.get(Items.metaglass).splashDamage = 27;
Blocks.cyclone.ammoTypes.get(Items.metaglass).reloadMultiplier = 1.2;
Blocks.cyclone.ammoTypes.get(Items.metaglass).fragBullets = 9;
Blocks.cyclone.ammoTypes.get(Items.metaglass).fragBullet.damage = 8;

Blocks.cyclone.ammoTypes.get(Items.plastanium).splashDamage = 34;
Blocks.cyclone.ammoTypes.get(Items.plastanium).damage = 11;

Blocks.cyclone.ammoTypes.get(Items.blastCompound).damage = 12;

Blocks.cyclone.ammoTypes.get(Items.surgeAlloy).reloadMultiplier = 0.65;
Blocks.cyclone.ammoTypes.get(Items.surgeAlloy).splashDamageRadius = 31;

//spectre
Blocks.spectre.reload = 6.7;
Blocks.spectre.rotateSpeed = 1.3;
Blocks.spectre.range = 270;

Blocks.spectre.ammoTypes.get(Items.graphite).ammoMultiplier = 3;
Blocks.spectre.ammoTypes.get(Items.graphite).damage = 80;
Blocks.spectre.ammoTypes.get(Items.graphite).knockback = 1.1;

Blocks.spectre.ammoTypes.get(Items.thorium).damage = 120;
Blocks.spectre.ammoTypes.get(Items.thorium).ammoMultiplier = 2;
Blocks.spectre.ammoTypes.get(Items.thorium).knockback = 1.2;

Blocks.spectre.ammoTypes.get(Items.pyratite).damage = 110;
Blocks.spectre.ammoTypes.get(Items.pyratite).ammoMultiplier = 3;
Blocks.spectre.ammoTypes.get(Items.pyratite).splashDamage = 30;
Blocks.spectre.ammoTypes.get(Items.pyratite).knockback = 0.7;

//meltdown
Blocks.meltdown.rotateSpeed = 1.4;
Blocks.meltdown.reload = 110;
Blocks.meltdown.shootType.damage = 180;



//Effect rework



//shocked
StatusEffects.wet.transitionDamage = 12;

//freezing
StatusEffects.freezing.transitionDamage = 15;

//burning
StatusEffects.burning.reloadMultiplier = 0.9;
StatusEffects.burning.speedMultiplier = 0.9;



//Reconstructors fr



//Blocks.additiveReconstructor.consumeItems.UnitTypes i cant understand how change cost production
Blocks.exponentialReconstructor.constructTime = 7200; //very test feature. Idk how good or bad is it
