ServerEvents.recipes(event => {

//I dont currently know a better way to batch remove items, the tags work great only if there are tags to begin with, and while I could make my own tags the code size would be much the same.
let itemsToRemove = [
  /*
  'mythicmetals:banglum_helmet',
  'mythicmetals:banglum_chestplate',
  'mythicmetals:banglum_leggings',
  'mythicmetals:banglum_boots',
  'mythicmetals:banglum_sword',
  'mythicmetals:banglum_pickaxe',
  'mythicmetals:banglum_axe',
  'mythicmetals:banglum_shovel',
  'mythicmetals:banglum_hoe',
  'farmersknives:banglum_knife',
  'simplyswords:mythicmetals_compat/banglum/banglum_longsword',
  'simplyswords:mythicmetals_compat/banglum/banglum_twinblade',
  'simplyswords:mythicmetals_compat/banglum/banglum_rapier',
  'simplyswords:mythicmetals_compat/banglum/banglum_katana',
  'simplyswords:mythicmetals_compat/banglum/banglum_sai',
  'simplyswords:mythicmetals_compat/banglum/banglum_spear',
  'simplyswords:mythicmetals_compat/banglum/banglum_glaive',
  'simplyswords:mythicmetals_compat/banglum/banglum_warglaive',
  'simplyswords:mythicmetals_compat/banglum/banglum_cutlass',
  'simplyswords:mythicmetals_compat/banglum/banglum_claymore',
  'simplyswords:mythicmetals_compat/banglum/banglum_greathammer',
  'simplyswords:mythicmetals_compat/banglum/banglum_greataxe',
  'simplyswords:mythicmetals_compat/banglum/banglum_chakram',
  'simplyswords:mythicmetals_compat/banglum/banglum_scythe',
  'simplyswords:mythicmetals_compat/banglum/banglum_halberd',
  */
  
  '#mythicmetals:aquarium_gear', 'farmersknives:aquarium_knife',

  'mythicmetals:banglum_helmet',
  'mythicmetals:banglum_chestplate',
  'mythicmetals:banglum_leggings',
  'mythicmetals:banglum_boots',
  'mythicmetals:banglum_sword',
  'mythicmetals:banglum_pickaxe',
  'mythicmetals:banglum_axe',
  'mythicmetals:banglum_shovel',
  'mythicmetals:banglum_hoe',
  'farmersknives:banglum_knife',
  'simplyswords:mythicmetals_compat/banglum/banglum_longsword',
  'simplyswords:mythicmetals_compat/banglum/banglum_twinblade',
  'simplyswords:mythicmetals_compat/banglum/banglum_rapier',
  'simplyswords:mythicmetals_compat/banglum/banglum_katana',
  'simplyswords:mythicmetals_compat/banglum/banglum_sai',
  'simplyswords:mythicmetals_compat/banglum/banglum_spear',
  'simplyswords:mythicmetals_compat/banglum/banglum_glaive',
  'simplyswords:mythicmetals_compat/banglum/banglum_warglaive',
  'simplyswords:mythicmetals_compat/banglum/banglum_cutlass',
  'simplyswords:mythicmetals_compat/banglum/banglum_claymore',
  'simplyswords:mythicmetals_compat/banglum/banglum_greathammer',
  'simplyswords:mythicmetals_compat/banglum/banglum_greataxe',
  'simplyswords:mythicmetals_compat/banglum/banglum_chakram',
  'simplyswords:mythicmetals_compat/banglum/banglum_scythe',
  'simplyswords:mythicmetals_compat/banglum/banglum_halberd',

  '#mythicmetals:osmium_gear', 'farmersknives:osmium_knife',
  '#mythicmetals:kyber_gear', 'farmersknives:kyber_knife',
  '#mythicmetals:runite_gear', 'farmersknives:runite_knife',
  '#mythicmetals:stormyx_gear', 'farmersknives:stormyx_knife',
  '#mythicmetals:palladium_gear', 'farmersknives:palladium_knife',

  'mythicmetals:carmot_helmet',
  'mythicmetals:carmot_chestplate',
  'mythicmetals:carmot_leggings',
  'mythicmetals:carmot_boots',
  'mythicmetals:carmot_sword',
  'mythicmetals:carmot_pickaxe',
  'mythicmetals:carmot_axe',
  'mythicmetals:carmot_shovel',
  'mythicmetals:carmot_hoe',
  'farmersknives:carmot_knife',
  'simplyswords:mythicmetals_compat/carmot/carmot_longsword',
  'simplyswords:mythicmetals_compat/carmot/carmot_twinblade',
  'simplyswords:mythicmetals_compat/carmot/carmot_rapier',
  'simplyswords:mythicmetals_compat/carmot/carmot_katana',
  'simplyswords:mythicmetals_compat/carmot/carmot_sai',
  'simplyswords:mythicmetals_compat/carmot/carmot_spear',
  'simplyswords:mythicmetals_compat/carmot/carmot_glaive',
  'simplyswords:mythicmetals_compat/carmot/carmot_warglaive',
  'simplyswords:mythicmetals_compat/carmot/carmot_cutlass',
  'simplyswords:mythicmetals_compat/carmot/carmot_claymore',
  'simplyswords:mythicmetals_compat/carmot/carmot_greathammer',
  'simplyswords:mythicmetals_compat/carmot/carmot_greataxe',
  'simplyswords:mythicmetals_compat/carmot/carmot_chakram',
  'simplyswords:mythicmetals_compat/carmot/carmot_scythe',
  'simplyswords:mythicmetals_compat/carmot/carmot_halberd',

  '#mythicmetals:mythril_gear', 'farmersknives:mythril_knife',
  '#mythicmetals:orichalcum_gear', 'farmersknives:orichalcum_knife',
  '#mythicmetals:adamantite_gear', 'farmersknives:adamantite_knife',
  '#mythicmetals:star_platinum_gear', 'farmersknives:star_platinum_knife',

  '#mythicmetals:celestium_gear', 
  'mythicmetals:celestium_helmet',
  'mythicmetals:celestium_chestplate',
  'mythicmetals:celestium_leggings',
  'mythicmetals:celestium_boots',
  'mythicmetals:celestium_sword',
  'mythicmetals:celestium_pickaxe',
  'mythicmetals:celestium_axe',
  'mythicmetals:celestium_shovel',
  'mythicmetals:celestium_hoe',
  'farmersknives:celestium_knife',

  '#mythicmetals:metallurgium_gear', 'farmersknives:metallurgium_knife',
  Item.of('mythicmetals:metallurgium_sword', '{Damage:0}'),
  Item.of('mythicmetals:metallurgium_axe', '{Damage:0}'),
  Item.of('mythicmetals:metallurgium_pickaxe', '{Damage:0}'),
  Item.of('mythicmetals:metallurgium_shovel', '{Damage:0}'),
  Item.of('mythicmetals:metallurgium_hoe', '{Damage:0}'),
  Item.of('mythicmetals:metallurgium_helmet', '{Damage:0}'),
  Item.of('mythicmetals:metallurgium_chestplate', '{Damage:0}'),
  Item.of('mythicmetals:metallurgium_leggings', '{Damage:0}'),
  Item.of('mythicmetals:metallurgium_boots', '{Damage:0}')
//etc
].forEach(item => {
  event.remove({output: item})
})

})


//HOLY FUCK AM I PROUD OF GETTING THIS TO WORK! 
//thanks to liopyu for telling me how 'template literals' work this saved hours of boring work (on my end atleast I know that SOSSALMON was attempting to do this manually for days!) 
ServerEvents.recipes(event => {
  // Define an array of materials
  let materials = [
    { upgrademat: 'aquarium', outputmat: 'banglum' ,materialused: 'kubejs:blazing_banglum_plate'},
    { upgrademat: 'banglum', outputmat: 'osmium' ,materialused: 'kubejs:osmium_parts'},
    { upgrademat: 'osmium', outputmat: 'kyber' ,materialused: 'kubejs:pure_kyber_crystal'},
    { upgrademat: 'kyber', outputmat: 'runite' ,materialused: 'kubejs:runite_scales'},
    { upgrademat: 'runite', outputmat: 'stormyx' ,materialused: 'kubejs:polished_stormyx_shell'},
    { upgrademat: 'stormyx', outputmat: 'palladium' ,materialused: 'kubejs:liquid_palladium_smart_metal'},
    { upgrademat: 'palladium', outputmat: 'carmot' ,materialused: 'kubejs:carmot_forged_plate'},
    { upgrademat: 'carmot', outputmat: 'mythril' ,materialused: 'kubejs:enchanted_mythril_slate'},
    { upgrademat: 'mythril', outputmat: 'orichalcum' ,materialused: 'kubejs:magically_reinforced_orichalcum'},
    { upgrademat: 'orichalcum', outputmat: 'adamantite' ,materialused: 'kubejs:hellforged_adamantite'},
    { upgrademat: 'adamantite', outputmat: 'star_platinum' ,materialused: 'kubejs:hamon_laced_star_platinum_plate'},
    { upgrademat: 'star_platinum', outputmat: 'celestium' ,materialused: 'kubejs:startouched_celestium_crystal'},
    { upgrademat: 'celestium', outputmat: 'metallurgium' ,materialused: 'kubejs:charged_metallurgium'},
    //{ upgrademat: 'another_material', outputmat: 'gold' },
    // Add more materials as needed
  ];

  let upgrade = (output, upgradeInput, materialused) => {
    event.shaped(output, [
      ' A ',
      'ABA',
      ' A '
    ], {
      A: `${materialused}`,
      B: `${upgradeInput}`
    })
  }

  // Loop through the materials array and generate recipes
  materials.forEach(material => {
    let { upgrademat, outputmat, materialused } = material;
    /*
    upgrade(`kubejs:armor_${outputmat}_helmet`, `${upgrademat}`);
    upgrade(`kubejs:armor_${outputmat}_chestplate`, `${upgrademat}`);
    upgrade(`kubejs:armor_${outputmat}_leggings`, `${upgrademat}`);
    */

    upgrade(`mythicmetals:${outputmat}_helmet`                                            ,`mythicmetals:${upgrademat}_helmet`                                          ,`${materialused}`              );
    upgrade(`mythicmetals:${outputmat}_chestplate`                                        ,`mythicmetals:${upgrademat}_chestplate`                                      ,`${materialused}`              );
    upgrade(`mythicmetals:${outputmat}_leggings`                                          ,`mythicmetals:${upgrademat}_leggings`                                        ,`${materialused}`              );
    upgrade(`mythicmetals:${outputmat}_boots`                                             ,`mythicmetals:${upgrademat}_boots`                                           ,`${materialused}`              );
    upgrade(`mythicmetals:${outputmat}_sword`                                             ,`mythicmetals:${upgrademat}_sword`                                           ,`${materialused}`              );
    upgrade(`mythicmetals:${outputmat}_pickaxe`                                           ,`mythicmetals:${upgrademat}_pickaxe`                                         ,`${materialused}`              );
    upgrade(`mythicmetals:${outputmat}_axe`                                               ,`mythicmetals:${upgrademat}_axe`                                             ,`${materialused}`              );
    upgrade(`mythicmetals:${outputmat}_shovel`                                            ,`mythicmetals:${upgrademat}_shovel`                                          ,`${materialused}`              );
    upgrade(`mythicmetals:${outputmat}_hoe`                                               ,`mythicmetals:${upgrademat}_hoe`                                             ,`${materialused}`              );
    upgrade(`farmersknives:${outputmat}_knife`                                            ,`farmersknives:${upgrademat}_knife`                                          ,`${materialused}`              );
    upgrade(`simplyswords:mythicmetals_compat/${outputmat}/${outputmat}_longsword`        ,`simplyswords:mythicmetals_compat/${upgrademat}/${upgrademat}_longsword`     ,`${materialused}`              );
    upgrade(`simplyswords:mythicmetals_compat/${outputmat}/${outputmat}_twinblade`        ,`simplyswords:mythicmetals_compat/${upgrademat}/${upgrademat}_twinblade`     ,`${materialused}`              );
    upgrade(`simplyswords:mythicmetals_compat/${outputmat}/${outputmat}_rapier`           ,`simplyswords:mythicmetals_compat/${upgrademat}/${upgrademat}_rapier`        ,`${materialused}`              );
    upgrade(`simplyswords:mythicmetals_compat/${outputmat}/${outputmat}_katana`           ,`simplyswords:mythicmetals_compat/${upgrademat}/${upgrademat}_katana`        ,`${materialused}`              );
    upgrade(`simplyswords:mythicmetals_compat/${outputmat}/${outputmat}_sai`              ,`simplyswords:mythicmetals_compat/${upgrademat}/${upgrademat}_sai`           ,`${materialused}`              );
    upgrade(`simplyswords:mythicmetals_compat/${outputmat}/${outputmat}_spear`            ,`simplyswords:mythicmetals_compat/${upgrademat}/${upgrademat}_spear`         ,`${materialused}`              );
    upgrade(`simplyswords:mythicmetals_compat/${outputmat}/${outputmat}_glaive`           ,`simplyswords:mythicmetals_compat/${upgrademat}/${upgrademat}_glaive`        ,`${materialused}`              );
    upgrade(`simplyswords:mythicmetals_compat/${outputmat}/${outputmat}_warglaive`        ,`simplyswords:mythicmetals_compat/${upgrademat}/${upgrademat}_warglaive`     ,`${materialused}`              );
    upgrade(`simplyswords:mythicmetals_compat/${outputmat}/${outputmat}_cutlass`          ,`simplyswords:mythicmetals_compat/${upgrademat}/${upgrademat}_cutlass`       ,`${materialused}`              );
    upgrade(`simplyswords:mythicmetals_compat/${outputmat}/${outputmat}_claymore`         ,`simplyswords:mythicmetals_compat/${upgrademat}/${upgrademat}_claymore`      ,`${materialused}`              );
    upgrade(`simplyswords:mythicmetals_compat/${outputmat}/${outputmat}_greathammer`      ,`simplyswords:mythicmetals_compat/${upgrademat}/${upgrademat}_greathammer`   ,`${materialused}`              );
    upgrade(`simplyswords:mythicmetals_compat/${outputmat}/${outputmat}_greataxe`         ,`simplyswords:mythicmetals_compat/${upgrademat}/${upgrademat}_greataxe`      ,`${materialused}`              );
    upgrade(`simplyswords:mythicmetals_compat/${outputmat}/${outputmat}_chakram`          ,`simplyswords:mythicmetals_compat/${upgrademat}/${upgrademat}_chakram`       ,`${materialused}`              );
    upgrade(`simplyswords:mythicmetals_compat/${outputmat}/${outputmat}_scythe`           ,`simplyswords:mythicmetals_compat/${upgrademat}/${upgrademat}_scythe`        ,`${materialused}`              );
    upgrade(`simplyswords:mythicmetals_compat/${outputmat}/${outputmat}_halberd`          ,`simplyswords:mythicmetals_compat/${upgrademat}/${upgrademat}_halberd`       ,`${materialused}`              );




  });
});

ServerEvents.recipes(e => {
  let aqua = (output, aquaInput) => {
    e.shaped(output, [
      ' A ',
      'AIA',
      ' A '
    ], {
      A: 'kubejs:aquarium_nexus_pearl',
      I: aquaInput
    })
  }

  //Used for Ruby Item Crafting
  aqua(Item.of('mythicmetals:aquarium_chestplate', '{Damage:0}'), Item.of('gobber2:gobber2_chestplate_end', '{Damage:0}'))
  aqua(Item.of('mythicmetals:aquarium_helmet', '{Damage:0}'),    Item.of('gobber2:gobber2_helmet_end', '{Damage:0}'))
  aqua(Item.of('mythicmetals:aquarium_boots', '{Damage:0}'),      Item.of('gobber2:gobber2_boots_end', '{Damage:0}'))
  aqua(Item.of('mythicmetals:aquarium_leggings', '{Damage:0}'),   Item.of('gobber2:gobber2_leggings_end', '{Damage:0}'))
  aqua(Item.of('mythicmetals:aquarium_sword', '{Damage:0}'),      Item.of('gobber2:gobber2_sword_end', '{Damage:0}'))
  aqua(Item.of('mythicmetals:aquarium_shovel', '{Damage:0}'),     Item.of('gobber2:gobber2_shovel_end', '{Damage:0}'))
  aqua(Item.of('mythicmetals:aquarium_axe', '{Damage:0}'),        Item.of('gobber2:gobber2_axe_end', '{Damage:0}'))
  aqua(Item.of('mythicmetals:aquarium_pickaxe', '{Damage:0}'),    Item.of('gobber2:gobber2_pickaxe_end', '{Damage:0}'))
  aqua(Item.of('mythicmetals:aquarium_hoe', '{Damage:0}'),        Item.of('gobber2:gobber2_hoe_end', '{Damage:0}'))
  aqua(Item.of('farmersknives:aquarium_knife', '{Damage:0}'),  Item.of('farmersknives:end_gobber_knife', '{Damage:0}'))
  aqua(Item.of('simplyswords:mythicmetals_compat/aquarium/aquarium_longsword'),    Item.of('simplyswords:gobber_compat/gobber_end/gobber_end_longsword', '{Damage:0}'))
  aqua(Item.of('simplyswords:mythicmetals_compat/aquarium/aquarium_twinblade'),    Item.of('simplyswords:gobber_compat/gobber_end/gobber_end_twinblade', '{Damage:0}'))
  aqua(Item.of('simplyswords:mythicmetals_compat/aquarium/aquarium_rapier'),       Item.of('simplyswords:gobber_compat/gobber_end/gobber_end_rapier', '{Damage:0}'))
  aqua(Item.of('simplyswords:mythicmetals_compat/aquarium/aquarium_katana'),       Item.of('simplyswords:gobber_compat/gobber_end/gobber_end_katana', '{Damage:0}'))
  aqua(Item.of('simplyswords:mythicmetals_compat/aquarium/aquarium_sai'),          Item.of('simplyswords:gobber_compat/gobber_end/gobber_end_sai', '{Damage:0}'))
  aqua(Item.of('simplyswords:mythicmetals_compat/aquarium/aquarium_spear'),        Item.of('simplyswords:gobber_compat/gobber_end/gobber_end_spear', '{Damage:0}'))
  aqua(Item.of('simplyswords:mythicmetals_compat/aquarium/aquarium_glaive'),       Item.of('simplyswords:gobber_compat/gobber_end/gobber_end_glave', '{Damage:0}'))
  aqua(Item.of('simplyswords:mythicmetals_compat/aquarium/aquarium_warglaive'),    Item.of('simplyswords:gobber_compat/gobber_end/gobber_end_warglaive', '{Damage:0}'))
  aqua(Item.of('simplyswords:mythicmetals_compat/aquarium/aquarium_cutlass'),      Item.of('simplyswords:gobber_compat/gobber_end/gobber_end_cutlass', '{Damage:0}'))
  aqua(Item.of('simplyswords:mythicmetals_compat/aquarium/aquarium_claymore'),     Item.of('simplyswords:gobber_compat/gobber_end/gobber_end_claymore', '{Damage:0}'))
  aqua(Item.of('simplyswords:mythicmetals_compat/aquarium/aquarium_greathammer'),  Item.of('simplyswords:gobber_compat/gobber_end/gobber_end_greathammer', '{Damage:0}'))
  aqua(Item.of('simplyswords:mythicmetals_compat/aquarium/aquarium_greataxe'),     Item.of('simplyswords:gobber_compat/gobber_end/gobber_end_greataxe', '{Damage:0}'))
  aqua(Item.of('simplyswords:mythicmetals_compat/aquarium/aquarium_chakram'),      Item.of('simplyswords:gobber_compat/gobber_end/gobber_end_chakram', '{Damage:0}'))
  aqua(Item.of('simplyswords:mythicmetals_compat/aquarium/aquarium_scythe'),       Item.of('simplyswords:gobber_compat/gobber_end/gobber_end_scythe', '{Damage:0}'))
  aqua(Item.of('simplyswords:mythicmetals_compat/aquarium/aquarium_halberd'),      Item.of('simplyswords:gobber_compat/gobber_end/gobber_end_halberd', '{Damage:0}'))

})