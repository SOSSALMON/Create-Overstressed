// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded startup scripts)')
StartupEvents.registry('item', e => {
    e.create('smile', 'sword').displayName("Smile").tier('netherite').attackDamageBonus(28).speed(1)
    e.create('justitia', 'sword').displayName("Justitia").tier('netherite').attackDamageBonus(26).speed(1.4)
    e.create('twilight', 'sword').displayName("Twilight").tier('netherite').attackDamageBonus(28).speed(1.6)
    e.create('paralost', 'sword').displayName("Paradise Lost").tier('netherite')

})

StartupEvents.registry('item', e =>{
  e.create('polypropylene_greatsword', 'sword').displayName("Practice Claymore")
  e.create('polypropylene_chakram', 'sword').displayName("Practice Chakram")
  e.create('polypropylene_cutlass', 'sword').displayName("Practice Cutlass")
  e.create('polypropylene_glaive', 'sword').displayName("Practice Glaive")
  e.create('polypropylene_greataxe', 'sword').displayName("Practice Greataxe")
  e.create('polypropylene_mace', 'sword').displayName("Practice Greathammer")
  e.create('polypropylene_halberd', 'sword').displayName("Practice Halberd")
  e.create('polypropylene_katana', 'sword').displayName("Practice Katana")
  e.create('polypropylene_longsword', 'sword').displayName("Practice Longsword")
  e.create('polypropylene_rapier', 'sword').displayName("Practice Rapier")
  e.create('polypropylene_sai', 'sword').displayName("Practice Sai")
  e.create('polypropylene_scythe', 'sword').displayName("Practice Scythe")
  e.create('polypropylene_spear', 'sword').displayName("Practice Spear")
  e.create('polypropylene_twinblade', 'sword').displayName("Practice Twinblade")
  e.create('polypropylene_warglaive', 'sword').displayName("Practice Warglaive")
})

StartupEvents.registry('sound_event', e =>{
    e.create('kubejs:mimicry_hit')
    e.create('kubejs:mimicry_swing')
    e.create('kubejs:smile_hit')
    e.create('kubejs:smile_swing')
    e.create('kubejs:peace_for_all')
})

/*
const $UUID = Java.loadClass("java.util.UUID")
const $AM$Operation = Java.loadClass("net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation")
// https://lexxie.site/forge/1.19.2/net/minecraft/world/entity/ai/attributes/AttributeModifier.Operation.html
ItemEvents.modification((event) => {
  event.modify("kubejs:paralost", (item) => {
    item.addAttribute(
      "reach-entity-attributes:attack_reach",
      $UUID.randomUUID(),
      "Weapon modifier",
      1,
      $AM$Operation.ADDITION
    );
    item.rarity = "EPIC";
  });
});
*/

/*
  //ForgeEvents.onEvent('net.minecraftforge.event.entity.player.AttackEntityEvent', (event) => {
    //if (event.item.id != "kubejs:mimicry_scythe") return
    //event.server.runCommandSilent(`playsound kubejs:mimicry_hit player @a ${x} ${y} ${z} 1 1`);
    //event.server.runCommandSilent(`effect give @p minecraft:slow_falling 2 1 true`)
  //})
  //ItemEvents.modification(event => {
  //  event.modify('minecraft:iron_sword', (item) => {
  //    item.sound = {
  //      swing: ('kubejs:smile_swing'),
  //      hit: ('kubejs:smile_hit'),
  //      miss: ('kubejs:smile_swing')
  //    };
  //  })
  //})

  StartupEvents.registry('mob_effect', event => {
    event.create('hemorrhage')
      .effectTick((entity, lvl) => {
        if (!entity.server) return
        apply: (entity, amplifier) => {
           entity.hurt(4*amplifier);
        }
      }) 
      .color(Color.GREEN)
  }) 
  */