// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded startup scripts)')



ItemEvents.modification(event => {
    //event.modify('betterend:aeternium_sword', item => {item.attackDamage = 9})
    event.modify('knavesneeds:betterend/aeternium/longsword'  , item => {item.attackDamage = 9})
    event.modify('knavesneeds:betterend/aeternium/twinblade'    , item => {item.attackDamage = 9})
    event.modify('knavesneeds:betterend/aeternium/rapier', item => {item.attackDamage = 8})
    event.modify('knavesneeds:betterend/aeternium/katana', item => {item.attackDamage = 9})
    event.modify('knavesneeds:betterend/aeternium/sai', item => {item.attackDamage = 6})
    event.modify('knavesneeds:betterend/aeternium/spear', item => {item.attackDamage = 9})
    event.modify('knavesneeds:betterend/aeternium/glaive', item => {item.attackDamage = 9})
    event.modify('knavesneeds:betterend/aeternium/warglaive', item => {item.attackDamage = 9})
    event.modify('knavesneeds:betterend/aeternium/cutlass', item => {item.attackDamage = 9})
    event.modify('knavesneeds:betterend/aeternium/claymore', item => {item.attackDamage = 11})
    event.modify('knavesneeds:betterend/aeternium/greathammer' , item => {item.attackDamage = 13})
    event.modify('knavesneeds:betterend/aeternium/greataxe', item => {item.attackDamage = 12})
    event.modify('knavesneeds:betterend/aeternium/chakram', item => {item.attackDamage = 8})
    event.modify('knavesneeds:betterend/aeternium/scythe' , item => {item.attackDamage = 10})
    event.modify('knavesneeds:betterend/aeternium/halberd', item => {item.attackDamage = 12})

  })

  ItemEvents.modification(event => {
    event.modify('gobber2:gobber2_helmet_dragon',item => {item.armorProtection = 30    , item.armorToughness = 8, item.maxDamage = 4800})
    event.modify('gobber2:gobber2_chestplate_dragon',item => {item.armorProtection = 34, item.armorToughness = 8, item.maxDamage = 4800})
    event.modify('gobber2:gobber2_leggings_dragon',item => {item.armorProtection = 33  , item.armorToughness = 8, item.maxDamage = 4800})
    event.modify('gobber2:gobber2_boots_dragon',item => {item.armorProtection = 30     , item.armorToughness = 8, item.maxDamage = 4800})
  })

  ItemEvents.modification(event => {  
    event.modify('betterend:aeternium_sword', item => {item.attackDamage = 10})
    event.modify('gobber2:gobber2_sword',item => {item.attackDamage = 11})
    event.modify('gobber2:gobber2_sword_nether',item => {item.attackDamage = 12})
    event.modify('gobber2:gobber2_sword_end',item => {item.attackDamage = 13})
    /*
    event.modify('mythicmetals:aquarium_sword'                                             , item => {item.attackDamage = 14})
    event.modify('simplyswords:mythicmetals_compat/metallurgium/metallurgium_longsword'    , item => {item.attackDamage = 9})
    event.modify('simplyswords:mythicmetals_compat/metallurgium/metallurgium_twinblade'    , item => {item.attackDamage = 9})
    event.modify('simplyswords:mythicmetals_compat/metallurgium/metallurgium_rapier'       , item => {item.attackDamage = 8})
    event.modify('simplyswords:mythicmetals_compat/metallurgium/metallurgium_katana'       , item => {item.attackDamage = 9})
    event.modify('simplyswords:mythicmetals_compat/metallurgium/metallurgium_sai'          , item => {item.attackDamage = 6})
    event.modify('simplyswords:mythicmetals_compat/metallurgium/metallurgium_spear'        , item => {item.attackDamage = 9})
    event.modify('simplyswords:mythicmetals_compat/metallurgium/metallurgium_glaive'       , item => {item.attackDamage = 9})
    event.modify('simplyswords:mythicmetals_compat/metallurgium/metallurgium_warglaive'    , item => {item.attackDamage = 9})
    event.modify('simplyswords:mythicmetals_compat/metallurgium/metallurgium_cutlass'      , item => {item.attackDamage = 9})
    event.modify('simplyswords:mythicmetals_compat/metallurgium/metallurgium_claymore'     , item => {item.attackDamage = 11})
    event.modify('simplyswords:mythicmetals_compat/metallurgium/metallurgium_greathammer'  , item => {item.attackDamage = 13})
    event.modify('simplyswords:mythicmetals_compat/metallurgium/metallurgium_greataxe'     , item => {item.attackDamage = 12})
    event.modify('simplyswords:mythicmetals_compat/metallurgium/metallurgium_chakram'      , item => {item.attackDamage = 8})
    event.modify('simplyswords:mythicmetals_compat/metallurgium/metallurgium_scythe'       , item => {item.attackDamage = 10})
    event.modify('simplyswords:mythicmetals_compat/metallurgium/metallurgium_halberd'      , item => {item.attackDamage = 12})
    */



  })

  ItemEvents.modification(event => {  
    let materials = [
      { materialbase: 'aquarium'          , damagemod: 14},
      { materialbase: 'banglum'           , damagemod: 15},
      { materialbase: 'osmium'            , damagemod: 16},
      { materialbase: 'kyber'             , damagemod: 17},
      { materialbase: 'runite'            , damagemod: 18},
      { materialbase: 'stormyx'           , damagemod: 19},
      { materialbase: 'palladium'         , damagemod: 20},
      { materialbase: 'carmot'            , damagemod: 22},
      { materialbase: 'mythril'           , damagemod: 24},
      { materialbase: 'orichalcum'        , damagemod: 25},
      { materialbase: 'adamantite'        , damagemod: 26},
      { materialbase: 'star_platinum'     , damagemod: 27},
      { materialbase: 'celestium'         , damagemod: 28},
      { materialbase: 'metallurgium'      , damagemod: 29},
      //{ upgrademat: 'another_material', outputmat: 'gold' },
      // Add more materials as needed
    ];
    
    materials.forEach(material => {
      let { materialbase, damagemod } = material;
      event.modify(`mythicmetals:${materialbase}_sword`                                            , item => {item.attackDamage = damagemod  })
      event.modify(`simplyswords:mythicmetals_compat/${materialbase}/${materialbase}_longsword`    , item => {item.attackDamage = damagemod  })
      event.modify(`simplyswords:mythicmetals_compat/${materialbase}/${materialbase}_twinblade`    , item => {item.attackDamage = damagemod  })
      event.modify(`simplyswords:mythicmetals_compat/${materialbase}/${materialbase}_rapier`       , item => {item.attackDamage = damagemod-1})
      event.modify(`simplyswords:mythicmetals_compat/${materialbase}/${materialbase}_katana`       , item => {item.attackDamage = damagemod  })
      event.modify(`simplyswords:mythicmetals_compat/${materialbase}/${materialbase}_sai`          , item => {item.attackDamage = damagemod-3})
      event.modify(`simplyswords:mythicmetals_compat/${materialbase}/${materialbase}_spear`        , item => {item.attackDamage = damagemod  })
      event.modify(`simplyswords:mythicmetals_compat/${materialbase}/${materialbase}_glaive`       , item => {item.attackDamage = damagemod  })
      event.modify(`simplyswords:mythicmetals_compat/${materialbase}/${materialbase}_warglaive`    , item => {item.attackDamage = damagemod  })
      event.modify(`simplyswords:mythicmetals_compat/${materialbase}/${materialbase}_cutlass`      , item => {item.attackDamage = damagemod  })
      event.modify(`simplyswords:mythicmetals_compat/${materialbase}/${materialbase}_claymore`     , item => {item.attackDamage = damagemod+2})
      event.modify(`simplyswords:mythicmetals_compat/${materialbase}/${materialbase}_greathammer`  , item => {item.attackDamage = damagemod+4})
      event.modify(`simplyswords:mythicmetals_compat/${materialbase}/${materialbase}_greataxe`     , item => {item.attackDamage = damagemod+3})
      event.modify(`simplyswords:mythicmetals_compat/${materialbase}/${materialbase}_chakram`      , item => {item.attackDamage = damagemod-1})
      event.modify(`simplyswords:mythicmetals_compat/${materialbase}/${materialbase}_scythe`       , item => {item.attackDamage = damagemod+1})
      event.modify(`simplyswords:mythicmetals_compat/${materialbase}/${materialbase}_halberd`      , item => {item.attackDamage = damagemod+3})
    
    })
  })

  
  ItemEvents.modification(event => {  
    let materials = [
      { materialbase: ''             , damagemod: 11},
      { materialbase: '_nether'      , damagemod: 12},
      { materialbase: '_end'         , damagemod: 13},
      //{ upgrademat: 'another_material', outputmat: 'gold' },
      // Add more materials as needed
    ];
    
    materials.forEach(material => {
      let { materialbase, damagemod } = material;
      event.modify(`gobber2:gobber2_sword`                                                               , item => {item.attackDamage = damagemod  })
      event.modify(`simplyswords:gobber_compat/gobber${materialbase}/gobber${materialbase}_longsword`    , item => {item.attackDamage = damagemod  })
      event.modify(`simplyswords:gobber_compat/gobber${materialbase}/gobber${materialbase}_twinblade`    , item => {item.attackDamage = damagemod  })
      event.modify(`simplyswords:gobber_compat/gobber${materialbase}/gobber${materialbase}_rapier`       , item => {item.attackDamage = damagemod-1})
      event.modify(`simplyswords:gobber_compat/gobber${materialbase}/gobber${materialbase}_katana`       , item => {item.attackDamage = damagemod  })
      event.modify(`simplyswords:gobber_compat/gobber${materialbase}/gobber${materialbase}_sai`          , item => {item.attackDamage = damagemod-3})
      event.modify(`simplyswords:gobber_compat/gobber${materialbase}/gobber${materialbase}_spear`        , item => {item.attackDamage = damagemod  })
      event.modify(`simplyswords:gobber_compat/gobber${materialbase}/gobber${materialbase}_glaive`       , item => {item.attackDamage = damagemod  })
      event.modify(`simplyswords:gobber_compat/gobber${materialbase}/gobber${materialbase}_warglaive`    , item => {item.attackDamage = damagemod  })
      event.modify(`simplyswords:gobber_compat/gobber${materialbase}/gobber${materialbase}_cutlass`      , item => {item.attackDamage = damagemod  })
      event.modify(`simplyswords:gobber_compat/gobber${materialbase}/gobber${materialbase}_claymore`     , item => {item.attackDamage = damagemod+2})
      event.modify(`simplyswords:gobber_compat/gobber${materialbase}/gobber${materialbase}_greathammer`  , item => {item.attackDamage = damagemod+4})
      event.modify(`simplyswords:gobber_compat/gobber${materialbase}/gobber${materialbase}_greataxe`     , item => {item.attackDamage = damagemod+3})
      event.modify(`simplyswords:gobber_compat/gobber${materialbase}/gobber${materialbase}_chakram`      , item => {item.attackDamage = damagemod-1})
      event.modify(`simplyswords:gobber_compat/gobber${materialbase}/gobber${materialbase}_scythe`       , item => {item.attackDamage = damagemod+1})
      event.modify(`simplyswords:gobber_compat/gobber${materialbase}/gobber${materialbase}_halberd`      , item => {item.attackDamage = damagemod+3})
    })
  })
  

  ItemEvents.modification(event => {
    let armval = 3
    let tougval = 1
    event.modify('minecraft:diamond_helmet',item => {item.armorProtection = armval, item.armorToughness = tougval-1})
    event.modify('minecraft:diamond_chestplate',item => {item.armorProtection = armval+4, item.armorToughness = tougval})
    event.modify('minecraft:diamond_leggings',item => {item.armorProtection = armval+3, item.armorToughness = tougval-1})
    event.modify('minecraft:diamond_boots',item => {item.armorProtection = armval, item.armorToughness = tougval-1})

  })

  ItemEvents.modification(event => {
    let armval = 4
    let tougval = 1
    event.modify('minecraft:netherite_helmet',item => {item.armorProtection = armval, item.armorToughness = tougval-1})
    event.modify('minecraft:netherite_chestplate',item => {item.armorProtection = armval+4, item.armorToughness = tougval})
    event.modify('minecraft:netherite_leggings',item => {item.armorProtection = armval+3, item.armorToughness = tougval})
    event.modify('minecraft:netherite_boots',item => {item.armorProtection = armval, item.armorToughness = tougval-1})

  })

  ItemEvents.modification(event => {
    let armval = 5
    let tougval = 1
    event.modify('betternether:nether_ruby_helmet',item => {item.armorProtection = armval, item.armorToughness = tougval})
    event.modify('betternether:nether_ruby_chestplate',item => {item.armorProtection = armval+4, item.armorToughness = tougval})
    event.modify('betternether:nether_ruby_leggings',item => {item.armorProtection = armval+3, item.armorToughness = tougval})
    event.modify('betternether:nether_ruby_boots',item => {item.armorProtection = armval, item.armorToughness = tougval-1})

  })

  ItemEvents.modification(event => {
    let armval = 6
    let tougval = 1
    event.modify('betterend:aeternium_helmet',item => {item.armorProtection = armval, item.armorToughness = tougval})
    event.modify('betterend:aeternium_chestplate',item => {item.armorProtection = armval+4, item.armorToughness = tougval})
    event.modify('betterend:aeternium_leggings',item => {item.armorProtection = armval+3, item.armorToughness = tougval})
    event.modify('betterend:aeternium_boots',item => {item.armorProtection = armval, item.armorToughness = tougval})

  })

  ItemEvents.modification(event => {
    let armval = 7
    let tougval = 2
    event.modify('gobber2:gobber2_helmet',item => {item.armorProtection = armval, item.armorToughness = tougval-1})
    event.modify('gobber2:gobber2_chestplate',item => {item.armorProtection = armval+4, item.armorToughness = tougval})
    event.modify('gobber2:gobber2_leggings',item => {item.armorProtection = armval+3, item.armorToughness = tougval-1})
    event.modify('gobber2:gobber2_boots',item => {item.armorProtection = armval, item.armorToughness = tougval-1})
   
  })

  ItemEvents.modification(event => {
    let armval = 8
    let tougval = 2
    event.modify('gobber2:gobber2_helmet_nether',item => {item.armorProtection = armval, item.armorToughness = tougval-1})
    event.modify('gobber2:gobber2_chestplate_nether',item => {item.armorProtection = armval+4, item.armorToughness = tougval})
    event.modify('gobber2:gobber2_leggings_nether',item => {item.armorProtection = armval+3, item.armorToughness = tougval})
    event.modify('gobber2:gobber2_boots_nether',item => {item.armorProtection = armval, item.armorToughness = tougval-1})
   
  })

  ItemEvents.modification(event => {
    let armval = 9
    let tougval = 2
    event.modify('gobber2:gobber2_helmet_end',item => {item.armorProtection = armval, item.armorToughness = tougval})
    event.modify('gobber2:gobber2_chestplate_end',item => {item.armorProtection = armval+4, item.armorToughness = tougval})
    event.modify('gobber2:gobber2_leggings_end',item => {item.armorProtection = armval+3, item.armorToughness = tougval})
    event.modify('gobber2:gobber2_boots_end',item => {item.armorProtection = armval, item.armorToughness = tougval-1})
   
  })

  ItemEvents.modification(event => {
    let armval = 10
    let tougval = 2
    event.modify('mythicmetals:aquarium_helmet',item => {item.armorProtection = armval, item.armorToughness = tougval})
    event.modify('mythicmetals:aquarium_chestplate',item => {item.armorProtection = armval+4, item.armorToughness = tougval})
    event.modify('mythicmetals:aquarium_leggings',item => {item.armorProtection = armval+3, item.armorToughness = tougval})
    event.modify('mythicmetals:aquarium_boots',item => {item.armorProtection = armval, item.armorToughness = tougval})
   
  })

  ItemEvents.modification(event => {
    let armval = 11
    let tougval = 3
    event.modify('mythicmetals:banglum_helmet',item => {item.armorProtection = armval, item.armorToughness = tougval-1})
    event.modify('mythicmetals:banglum_chestplate',item => {item.armorProtection = armval+4, item.armorToughness = tougval})
    event.modify('mythicmetals:banglum_leggings',item => {item.armorProtection = armval+3, item.armorToughness = tougval-1})
    event.modify('mythicmetals:banglum_boots',item => {item.armorProtection = armval, item.armorToughness = tougval-1})
   
  })

  ItemEvents.modification(event => {
    let armval = 12
    let tougval = 3
    event.modify('mythicmetals:osmium_helmet',item => {item.armorProtection = armval, item.armorToughness = tougval-1})
    event.modify('mythicmetals:osmium_chestplate',item => {item.armorProtection = armval+4, item.armorToughness = tougval})
    event.modify('mythicmetals:osmium_leggings',item => {item.armorProtection = armval+3, item.armorToughness = tougval})
    event.modify('mythicmetals:osmium_boots',item => {item.armorProtection = armval, item.armorToughness = tougval-1})
   
  })

  ItemEvents.modification(event => {
    let armval = 13
    let tougval = 3
    event.modify('mythicmetals:kyber_helmet',item => {item.armorProtection = armval, item.armorToughness = tougval})
    event.modify('mythicmetals:kyber_chestplate',item => {item.armorProtection = armval+4, item.armorToughness = tougval})
    event.modify('mythicmetals:kyber_leggings',item => {item.armorProtection = armval+3, item.armorToughness = tougval})
    event.modify('mythicmetals:kyber_boots',item => {item.armorProtection = armval, item.armorToughness = tougval-1})
   
  })

  ItemEvents.modification(event => {
    let armval = 14
    let tougval = 3
    event.modify('mythicmetals:runite_helmet',item => {item.armorProtection = armval, item.armorToughness = tougval})
    event.modify('mythicmetals:runite_chestplate',item => {item.armorProtection = armval+4, item.armorToughness = tougval})
    event.modify('mythicmetals:runite_leggings',item => {item.armorProtection = armval+3, item.armorToughness = tougval})
    event.modify('mythicmetals:runite_boots',item => {item.armorProtection = armval, item.armorToughness = tougval})
   
  })

  ItemEvents.modification(event => {
    let armval = 15
    let tougval = 4
    event.modify('mythicmetals:stormyx_helmet',item => {item.armorProtection = armval, item.armorToughness = tougval-1})
    event.modify('mythicmetals:stormyx_chestplate',item => {item.armorProtection = armval+4, item.armorToughness = tougval})
    event.modify('mythicmetals:stormyx_leggings',item => {item.armorProtection = armval+3, item.armorToughness = tougval-1})
    event.modify('mythicmetals:stormyx_boots',item => {item.armorProtection = armval, item.armorToughness = tougval-1})
   
  })

  ItemEvents.modification(event => {
    let armval = 16
    let tougval = 4
    event.modify('mythicmetals:palladium_helmet',item => {item.armorProtection = armval, item.armorToughness = tougval-1})
    event.modify('mythicmetals:palladium_chestplate',item => {item.armorProtection = armval+4, item.armorToughness = tougval})
    event.modify('mythicmetals:palladium_leggings',item => {item.armorProtection = armval+3, item.armorToughness = tougval})
    event.modify('mythicmetals:palladium_boots',item => {item.armorProtection = armval, item.armorToughness = tougval-1})
   
  })

  ItemEvents.modification(event => {
    let armval = 17
    let tougval = 4
    event.modify('mythicmetals:carmot_helmet',item => {item.armorProtection = armval, item.armorToughness = tougval})
    event.modify('mythicmetals:carmot_chestplate',item => {item.armorProtection = armval+4, item.armorToughness = tougval})
    event.modify('mythicmetals:carmot_leggings',item => {item.armorProtection = armval+3, item.armorToughness = tougval})
    event.modify('mythicmetals:carmot_boots',item => {item.armorProtection = armval, item.armorToughness = tougval-1})
   
  })

  ItemEvents.modification(event => {
    let armval = 18
    let tougval = 4
    event.modify('mythicmetals:mythril_helmet',item => {item.armorProtection = armval, item.armorToughness = tougval})
    event.modify('mythicmetals:mythril_chestplate',item => {item.armorProtection = armval+4, item.armorToughness = tougval})
    event.modify('mythicmetals:mythril_leggings',item => {item.armorProtection = armval+3, item.armorToughness = tougval})
    event.modify('mythicmetals:mythril_boots',item => {item.armorProtection = armval, item.armorToughness = tougval})
   
  })

  ItemEvents.modification(event => {
    let armval = 19
    let tougval = 5
    event.modify('mythicmetals:orichalcum_helmet',item => {item.armorProtection = armval, item.armorToughness = tougval-1})
    event.modify('mythicmetals:orichalcum_chestplate',item => {item.armorProtection = armval+4, item.armorToughness = tougval})
    event.modify('mythicmetals:orichalcum_leggings',item => {item.armorProtection = armval+3, item.armorToughness = tougval-1})
    event.modify('mythicmetals:orichalcum_boots',item => {item.armorProtection = armval, item.armorToughness = tougval-1})
   
  })

  ItemEvents.modification(event => {
    let armval = 20
    let tougval = 5
    event.modify('mythicmetals:adamantite_helmet',item => {item.armorProtection = armval, item.armorToughness = tougval-1})
    event.modify('mythicmetals:adamantite_chestplate',item => {item.armorProtection = armval+4, item.armorToughness = tougval})
    event.modify('mythicmetals:adamantite_leggings',item => {item.armorProtection = armval+3, item.armorToughness = tougval})
    event.modify('mythicmetals:adamantite_boots',item => {item.armorProtection = armval, item.armorToughness = tougval-1})
   
  })

  ItemEvents.modification(event => {
    let armval = 21
    let tougval = 5
    event.modify('mythicmetals:star_platinum_helmet',item => {item.armorProtection = armval, item.armorToughness = tougval})
    event.modify('mythicmetals:star_platinum_chestplate',item => {item.armorProtection = armval+4, item.armorToughness = tougval})
    event.modify('mythicmetals:star_platinum_leggings',item => {item.armorProtection = armval+3, item.armorToughness = tougval})
    event.modify('mythicmetals:star_platinum_boots',item => {item.armorProtection = armval, item.armorToughness = tougval-1})
   
  })

  ItemEvents.modification(event => {
    let armval = 22
    let tougval = 5
    event.modify('mythicmetals:celestium_helmet',item => {item.armorProtection = armval, item.armorToughness = tougval})
    event.modify('mythicmetals:celestium_chestplate',item => {item.armorProtection = armval+4, item.armorToughness = tougval})
    event.modify('mythicmetals:celestium_leggings',item => {item.armorProtection = armval+3, item.armorToughness = tougval})
    event.modify('mythicmetals:celestium_boots',item => {item.armorProtection = armval, item.armorToughness = tougval})
   
  })

  ItemEvents.modification(event => {
    let armval = 24
    let tougval = 6
    event.modify('mythicmetals:metallurgium_helmet',item => {item.armorProtection = armval, item.armorToughness = tougval})
    event.modify('mythicmetals:metallurgium_chestplate',item => {item.armorProtection = armval+4, item.armorToughness = tougval})
    event.modify('mythicmetals:metallurgium_leggings',item => {item.armorProtection = armval+3, item.armorToughness = tougval})
    event.modify('mythicmetals:metallurgium_boots',item => {item.armorProtection = armval, item.armorToughness = tougval})
   
  })

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
  
*/