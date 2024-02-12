//fym nuh uh?
ServerEvents.recipes(event => {
  //Aeternium vanilla recipe removal
  event.remove({ output: Item.of('betterend:aeternium_helmet', '{Damage:0}')     })
  event.remove({ output: Item.of('betterend:aeternium_chestplate', '{Damage:0}') })
  event.remove({ output: Item.of('betterend:aeternium_leggings', '{Damage:0}')   })
  event.remove({ output: Item.of('betterend:aeternium_boots', '{Damage:0}')      })
  event.remove({ output: Item.of('betterend:aeternium_sword', '{Damage:0}')      })
  event.remove({ output: Item.of('betterend:aeternium_shovel', '{Damage:0}')     })
  event.remove({ output: Item.of('betterend:aeternium_axe', '{Damage:0}')        })
  event.remove({ output: Item.of('betterend:aeternium_pickaxe', '{Damage:0}')    })
  event.remove({ output: Item.of('betterend:aeternium_hoe', '{Damage:0}')        })
  event.remove({ output: Item.of('farmersknives:aeternium_knife', '{Damage:0}')  })
  event.remove({ output: Item.of('knavesneeds:betterend/aeternium/longsword')    })
  event.remove({ output: Item.of('knavesneeds:betterend/aeternium/twinblade')    })
  event.remove({ output: Item.of('knavesneeds:betterend/aeternium/rapier')       })
  event.remove({ output: Item.of('knavesneeds:betterend/aeternium/katana')       })
  event.remove({ output: Item.of('knavesneeds:betterend/aeternium/sai')          })
  event.remove({ output: Item.of('knavesneeds:betterend/aeternium/spear')        })
  event.remove({ output: Item.of('knavesneeds:betterend/aeternium/glaive')       })
  event.remove({ output: Item.of('knavesneeds:betterend/aeternium/warglaive')    })
  event.remove({ output: Item.of('knavesneeds:betterend/aeternium/cutlass')      })
  event.remove({ output: Item.of('knavesneeds:betterend/aeternium/claymore')     })
  event.remove({ output: Item.of('knavesneeds:betterend/aeternium/greathammer')  })
  event.remove({ output: Item.of('knavesneeds:betterend/aeternium/greataxe')     })
  event.remove({ output: Item.of('knavesneeds:betterend/aeternium/chakram')      })
  event.remove({ output: Item.of('knavesneeds:betterend/aeternium/scythe')       })
  event.remove({ output: Item.of('knavesneeds:betterend/aeternium/halberd')      })

  //Nether Ruby vanilla recipe removal

  event.remove({ output: Item.of('betternether:nether_ruby_chestplate')                          })
  event.remove({ output: Item.of('betternether:nether_ruby_helmet').enchant('betternether:ruby_fire', 1)                                 })
  event.remove({ output: Item.of('betternether:nether_ruby_boots').enchant('betternether:ruby_fire', 1)                                  })
  event.remove({ output: Item.of('betternether:nether_ruby_leggings').enchant('betternether:ruby_fire', 1)                               })
  event.remove({ output: Item.of('betternether:nether_ruby_sword').enchant('betternether:ruby_fire', 1)                                  })
  event.remove({ output: Item.of('betternether:nether_ruby_shovel').enchant('betternether:ruby_fire', 1)                                 })
  event.remove({ output: Item.of('betternether:nether_ruby_axe').enchant('betternether:ruby_fire', 1)                                    })
  event.remove({ output: Item.of('betternether:nether_ruby_pickaxe').enchant('betternether:ruby_fire', 1).enchant('betternether:obsidian_breaker', 2)})
  event.remove({ output: Item.of('betternether:nether_ruby_hoe').enchant('betternether:ruby_fire', 1)                                    })
  event.remove({ output: Item.of('farmersknives:nether_ruby_knife')                                 })
  event.remove({ output: Item.of('knavesneeds:betternether/nether_ruby/longsword')                  })
  event.remove({ output: Item.of('knavesneeds:betternether/nether_ruby/twinblade')                  })
  event.remove({ output: Item.of('knavesneeds:betternether/nether_ruby/rapier')                     })
  event.remove({ output: Item.of('knavesneeds:betternether/nether_ruby/katana')                     })
  event.remove({ output: Item.of('knavesneeds:betternether/nether_ruby/sai')                        })
  event.remove({ output: Item.of('knavesneeds:betternether/nether_ruby/spear')                      })
  event.remove({ output: Item.of('knavesneeds:betternether/nether_ruby/glaive')                     })
  event.remove({ output: Item.of('knavesneeds:betternether/nether_ruby/warglaive')                  })
  event.remove({ output: Item.of('knavesneeds:betternether/nether_ruby/cutlass')                    })
  event.remove({ output: Item.of('knavesneeds:betternether/nether_ruby/claymore')                   })
  event.remove({ output: Item.of('knavesneeds:betternether/nether_ruby/greathammer')                })
  event.remove({ output: Item.of('knavesneeds:betternether/nether_ruby/greataxe')                   })
  event.remove({ output: Item.of('knavesneeds:betternether/nether_ruby/chakram')                    })
  event.remove({ output: Item.of('knavesneeds:betternether/nether_ruby/scythe')                     })
  event.remove({ output: Item.of('knavesneeds:betternether/nether_ruby/halberd')                    })

  //Gobber vanilla recipe removal

  event.remove({ output: Item.of('gobber2:gobber2_helmet', '{Damage:0}'),                 })
  event.remove({ output: Item.of('gobber2:gobber2_chestplate', '{Damage:0}'),             })
  event.remove({ output: Item.of('gobber2:gobber2_leggings', '{Damage:0}'),               })
  event.remove({ output: Item.of('gobber2:gobber2_boots', '{Damage:0}'),                  })
  event.remove({ output: Item.of('gobber2:gobber2_sword', '{Damage:0}'),                  })
  event.remove({ output: Item.of('gobber2:gobber2_shovel', '{Damage:0}'),                 })
  event.remove({ output: Item.of('gobber2:gobber2_axe', '{Damage:0}'),                    })
  event.remove({ output: Item.of('gobber2:gobber2_pickaxe', '{Damage:0}'),                })
  event.remove({ output: Item.of('gobber2:gobber2_hoe', '{Damage:0}'),                    })
  event.remove({ output: Item.of('farmersknives:gobber_knife', '{Damage:0}'),             })
  event.remove({ output: Item.of('simplyswords:gobber_compat/gobber/gobber_longsword'),   })
  event.remove({ output: Item.of('simplyswords:gobber_compat/gobber/gobber_twinblade'),   })
  event.remove({ output: Item.of('simplyswords:gobber_compat/gobber/gobber_rapier'),      })
  event.remove({ output: Item.of('simplyswords:gobber_compat/gobber/gobber_katana'),      })
  event.remove({ output: Item.of('simplyswords:gobber_compat/gobber/gobber_sai'),         })
  event.remove({ output: Item.of('simplyswords:gobber_compat/gobber/gobber_spear'),       })
  event.remove({ output: Item.of('simplyswords:gobber_compat/gobber/gobber_glaive'),      })
  event.remove({ output: Item.of('simplyswords:gobber_compat/gobber/gobber_warglaive'),   })
  event.remove({ output: Item.of('simplyswords:gobber_compat/gobber/gobber_cutlass'),     })
  event.remove({ output: Item.of('simplyswords:gobber_compat/gobber/gobber_claymore'),    })
  event.remove({ output: Item.of('simplyswords:gobber_compat/gobber/gobber_greathammer'), })
  event.remove({ output: Item.of('simplyswords:gobber_compat/gobber/gobber_greataxe'),    })
  event.remove({ output: Item.of('simplyswords:gobber_compat/gobber/gobber_chakram'),     })
  event.remove({ output: Item.of('simplyswords:gobber_compat/gobber/gobber_scythe'),      })
  event.remove({ output: Item.of('simplyswords:gobber_compat/gobber/gobber_halberd'),     })

  //Nether Gobber vanilla recipe removal

  event.remove({ output: Item.of('gobber2:gobber2_helmet_nether', '{Damage:0}'),                         })
  event.remove({ output: Item.of('gobber2:gobber2_chestplate_nether', '{Damage:0}'),                     })
  event.remove({ output: Item.of('gobber2:gobber2_leggings_nether', '{Damage:0}'),                       })
  event.remove({ output: Item.of('gobber2:gobber2_boots_nether', '{Damage:0}'),                          })
  event.remove({ output: Item.of('gobber2:gobber2_sword_nether', '{Damage:0}'),                          })
  event.remove({ output: Item.of('gobber2:gobber2_shovel_nether', '{Damage:0}'),                         })
  event.remove({ output: Item.of('gobber2:gobber2_axe_nether', '{Damage:0}'),                            })
  event.remove({ output: Item.of('gobber2:gobber2_pickaxe_nether', '{Damage:0}'),                        })
  event.remove({ output: Item.of('gobber2:gobber2_hoe_nether', '{Damage:0}'),                            })
  event.remove({ output: Item.of('farmersknives:nether_gobber_knife', '{Damage:0}'),                     })
  event.remove({ output: Item.of('simplyswords:gobber_compat/gobber_nether/gobber_nether_longsword'),    })
  event.remove({ output: Item.of('simplyswords:gobber_compat/gobber_nether/gobber_nether_twinblade'),    })
  event.remove({ output: Item.of('simplyswords:gobber_compat/gobber_nether/gobber_nether_rapier'),       })
  event.remove({ output: Item.of('simplyswords:gobber_compat/gobber_nether/gobber_nether_katana'),       })
  event.remove({ output: Item.of('simplyswords:gobber_compat/gobber_nether/gobber_nether_sai'),          })
  event.remove({ output: Item.of('simplyswords:gobber_compat/gobber_nether/gobber_nether_spear'),        })
  event.remove({ output: Item.of('simplyswords:gobber_compat/gobber_nether/gobber_nether_glaive'),       })
  event.remove({ output: Item.of('simplyswords:gobber_compat/gobber_nether/gobber_nether_warglaive'),    })
  event.remove({ output: Item.of('simplyswords:gobber_compat/gobber_nether/gobber_nether_cutlass'),      })
  event.remove({ output: Item.of('simplyswords:gobber_compat/gobber_nether/gobber_nether_claymore'),     })
  event.remove({ output: Item.of('simplyswords:gobber_compat/gobber_nether/gobber_nether_greathammer'),  })
  event.remove({ output: Item.of('simplyswords:gobber_compat/gobber_nether/gobber_nether_greataxe'),     })
  event.remove({ output: Item.of('simplyswords:gobber_compat/gobber_nether/gobber_nether_chakram'),      })
  event.remove({ output: Item.of('simplyswords:gobber_compat/gobber_nether/gobber_nether_scythe'),       })
  event.remove({ output: Item.of('simplyswords:gobber_compat/gobber_nether/gobber_nether_halberd'),      })

    //Create Recipe removal

    event.remove({ output: 'create:andesite_alloy'})
  

    //End Gobber vanilla recipe removal

  event.remove({ output: Item.of('gobber2:gobber2_helmet_end', '{Damage:0}'),                     })
  event.remove({ output: Item.of('gobber2:gobber2_chestplate_end', '{Damage:0}'),                 })
  event.remove({ output: Item.of('gobber2:gobber2_leggings_end', '{Damage:0}'),                   })
  event.remove({ output: Item.of('gobber2:gobber2_boots_end', '{Damage:0}'),                      })
  event.remove({ output: Item.of('gobber2:gobber2_sword_end', '{Damage:0}'),                      })
  event.remove({ output: Item.of('gobber2:gobber2_shovel_end', '{Damage:0}'),                     })
  event.remove({ output: Item.of('gobber2:gobber2_axe_end', '{Damage:0}'),                        })
  event.remove({ output: Item.of('gobber2:gobber2_pickaxe_end', '{Damage:0}'),                    })
  event.remove({ output: Item.of('gobber2:gobber2_hoe_end', '{Damage:0}'),                        })
  event.remove({ output: Item.of('farmersknives:end_gobber_knife', '{Damage:0}'),                 })
  event.remove({ output: Item.of('simplyswords:gobber_compat/gobber_end/gobber_end_longsword'),   })
  event.remove({ output: Item.of('simplyswords:gobber_compat/gobber_end/gobber_end_twinblade'),   })
  event.remove({ output: Item.of('simplyswords:gobber_compat/gobber_end/gobber_end_rapier'),      })
  event.remove({ output: Item.of('simplyswords:gobber_compat/gobber_end/gobber_end_katana'),      })
  event.remove({ output: Item.of('simplyswords:gobber_compat/gobber_end/gobber_end_sai'),         })
  event.remove({ output: Item.of('simplyswords:gobber_compat/gobber_end/gobber_end_spear'),       })
  event.remove({ output: Item.of('simplyswords:gobber_compat/gobber_end/gobber_end_glaive'),      })
  event.remove({ output: Item.of('simplyswords:gobber_compat/gobber_end/gobber_end_warglaive'),   })
  event.remove({ output: Item.of('simplyswords:gobber_compat/gobber_end/gobber_end_cutlass'),     })
  event.remove({ output: Item.of('simplyswords:gobber_compat/gobber_end/gobber_end_claymore'),    })
  event.remove({ output: Item.of('simplyswords:gobber_compat/gobber_end/gobber_end_greathammer'), })
  event.remove({ output: Item.of('simplyswords:gobber_compat/gobber_end/gobber_end_greataxe'),    })
  event.remove({ output: Item.of('simplyswords:gobber_compat/gobber_end/gobber_end_chakram'),     })
  event.remove({ output: Item.of('simplyswords:gobber_compat/gobber_end/gobber_end_scythe'),      })
  event.remove({ output: Item.of('simplyswords:gobber_compat/gobber_end/gobber_end_halberd'),     })

  event.remove({ output: 'toms_storage:ts.storage_terminal'         })
  event.remove({ output: 'toms_storage:ts.crafting_terminal'        })
  event.remove({ output: 'toms_storage:ts.inventory_connector'      })
  event.remove({ output: 'toms_storage:ts.inventory_cable'          })
  event.remove({ output: 'toms_storage:ts.wireless_terminal'        })
  event.remove({ output: 'toms_storage:ts.adv_wireless_terminal'    })
  event.remove({ output: 'toms_storage:ts.inventory_cable_connector'})

  event.remove({output: 'gobber2:gobber2_helmet_dragon'       })
  event.remove({output: 'gobber2:gobber2_chestplate_dragon'   })
  event.remove({output: 'gobber2:gobber2_leggings_dragon'     })
  event.remove({output: 'gobber2:gobber2_boots_dragon'        })
  event.remove({output: 'gobber2:dragon_star'                 })
  event.remove({output: 'gobber2:dragon_elytra'               })

  event.remove({output: 'gobber2:gobber2_ring'                  })
  event.remove({output: 'gobber2:gobber2_ring_nether'           })
  event.remove({output: 'gobber2:gobber2_ring_end'              })
  event.remove({output: 'gobber2:gobber2_medallion'             })
  event.remove({output: 'gobber2:gobber2_medallion_nether'      })
  event.remove({output: 'gobber2:gobber2_medallion_end'         })

  event.remove({output: 'gobber2:gobber2_links_end'})

})

ServerEvents.recipes(event => {
  //REMEMBER THIS FUCKING METHOD WE NEED TO REMOVE A SHIT LOAD OF ITEMS
  [
      'things:hardening_catalyst'

  ].forEach((itemID) => event.remove({output: itemID}));

})


ServerEvents.recipes(e =>{
  e.custom({
  type: "create_new_age:energising",
  "energy_needed": 1000000,
  "ingredients": [
    {
      "item": "mythicmetals:metallurgium_ingot"
    }
  ],
  "results": [
    {
      "item": "kubejs:charged_metallurgium"
    }
  ]})

  e.custom({
    type: "createaddition:rolling",
    "input": 
    {
      "item": "mythicmetals:durasteel_ingot"
    },
    "result": 
    {
      "item": "kubejs:rubberhose",
      "count": 2
    }
    })

})




//yes
  ServerEvents.recipes(e => {
    e.recipes.create.crushing([Item.of('kubejs:netherite_fragment').withChance(0.12),], 'compressed:netherrack_ii').processingTime(50)
    e.recipes.create.crushing(['betterend:ender_dust', Item.of('betterend:ender_dust').withChance(0.73)], 'minecraft:ender_pearl').processingTime(200)
    e.recipes.create.crushing('kubejs:aurora_coating',['betterend:crystal_shards']) .processingTime(20)
    e.recipes.create.crushing('kubejs:sand_chunks', ['minecraft:sand']) .processingTime(80)

    e.recipes.create.milling('kubejs:sand_chunks', ['minecraft:sand']) .processingTime(100)
  })





  ServerEvents.recipes(e => {
    e.recipes.create.item_application('kubejs:aeternium_casing', ['#c:stripped_logs', 'betterend:aeternium_ingot'])
    e.recipes.create.item_application('kubejs:heavy_machinery_casing', ['create:brass_casing', 'createbigcannons:nethersteel_ingot'])
    e.recipes.create.item_application('kubejs:steel_casing', ['#c:stripped_logs', 'mythicmetals:steel_ingot'])
    e.recipes.create.item_application('kubejs:heavy_durasteel_casing', ['kubejs:steel_casing', 'mythicmetals:durasteel_ingot'])
    e.recipes.create.item_application('kubejs:steel_fluid_tank', ['ae2:sky_stone_tank', 'mythicmetals:steel_ingot'])
  })




//yes
  ServerEvents.recipes(e => {
    e.recipes.create.pressing('betterend:aeternium_forged_plate', 'betterend:aeternium_ingot')
    e.recipes.create.pressing('betterend:terminite_forged_plate', 'betterend:terminite_ingot')
    e.recipes.create.pressing('kubejs:silicon_plate', 'kubejs:silicon')
  })





//SALMON WTF IS YOUR CODE?! WHY WAS IT A FUICKING MESS! (you are lucky I had to fix it, remind me later to fix this recipe stuff up so that its not a huge fucking mess!)
  ServerEvents.recipes(e => {
    e.recipes.create.sandpaper_polishing('kubejs:polished_aurora_crystal', 'betterend:crystal_shards')
  })





  ServerEvents.recipes(e => {
    e.recipes.create.mixing('kubejs:honey_roll', [Fluid.of('create:honey',12500), 'create:dough']).processingTime(20) .heated()
    e.recipes.create.mixing('kubejs:aurora_roll', [Item.of('kubejs:polished_aurora_crystal',4), 'create:dough']).processingTime(20) .heated()
    e.recipes.create.mixing('kubejs:polished_rose_quartz_roll', [Item.of('create:polished_rose_quartz',3), 'create:dough']).processingTime(20) .heated()
    e.recipes.create.mixing('kubejs:aeter_ruby_compound', ['kubejs:ruby_cluster', 'betterend:aeternium_ingot']).processingTime(120) .superheated()
    e.recipes.create.mixing('kubejs:undercharged_alloy', ['betterend:terminite_ingot', Item.of('create:chromatic_compound',2)]).processingTime(200) .superheated()
    e.recipes.create.mixing('create:chromatic_compound', ['create:polished_rose_quartz', Item.of('minecraft:glowstone_dust',3), Item.of('create:powdered_obsidian',3), Fluid.of('minecraft:lava',81000)]).processingTime(200) .superheated()
    e.recipes.create.mixing('kubejs:liquid_palladium_smart_metal', [Item.of('mythicmetals:palladium_ingot',4),Item.of('mythicmetals:silver_ingot',2),'kubejs:aeter_ruby_compound']).processingTime(240).heated()
    e.recipes.create.mixing('kubejs:polished_stormyx_shell',['mythicmetals:stormyx_shell',Item.of('mythicmetals:stormyx_ingot',4),Item.of('create:sand_paper',4)])
    e.recipes.create.mixing('kubejs:hamon_laced_star_platinum_plate',['mythicmetals:star_platinum',Item.of('minecraft:sunflower',4),Fluid.of('respitecreators:strong_yellow_tea',20250),Fluid.of('respitecreators:strong_green_tea',20250),Fluid.of('respitecreators:strong_rose_hip_tea',20250),Fluid.of('respitecreators:strong_purulent_tea',20250)])
    e.recipes.create.mixing('kubejs:silicon_compound', [Item.of('kubejs:sand_chunks',4), 'minecraft:clay']).processingTime(100)
    e.recipes.create.mixing('kubejs:solenoid', [Item.of('kubejs:wiring',4), 'createaddition:iron_rod']).processingTime(100)
    e.recipes.create.mixing('kubejs:paste', ['minecraft:honeycomb', 'minecraft:slime_ball', 'minecraft:honey_bottle', 'mythicmetals:morkite']).processingTime(100)
    e.recipes.create.mixing('kubejs:artificialmuscle', [Fluid.of('create_enchantment_industry:ink',40500), Item.of('kubejs:paste',2), Item.of('kubejs:myofiber',4)]).processingTime(20)
    e.recipes.create.mixing('kubejs:lvcapacitor', ['ae2:fluix_crystal', 'kubejs:silicon', 'create_new_age:copper_wire', 'kubejs:paste']).processingTime(100)
    e.recipes.create.mixing('kubejs:lvbattery', ['ae2:fluix_crystal', 'create:zinc_ingot', 'create_new_age:copper_wire', 'kubejs:paste']).processingTime(100)
    e.recipes.create.mixing('kubejs:mvbattery', ['kubejs:polished_aurora_crystal', 'create:zinc_ingot', 'create_new_age:overcharged_iron_wire', 'kubejs:paste']).processingTime(100)
    e.recipes.create.mixing('kubejs:mvcapacitor', ['kubejs:polished_aurora_crystal', 'kubejs:silicon', 'create_new_age:overcharged_iron_wire', 'kubejs:paste']).processingTime(100)
    e.recipes.create.mixing('kubejs:crystalcapacitor', ['kubejs:overcharged_alloy', 'create:zinc_ingot', 'create_new_age:overcharged_golden_wire', 'kubejs:paste']).processingTime(100)
    e.recipes.create.mixing('kubejs:hvcapacitor', ['kubejs:overcharged_alloy', 'kubejs:silicon', 'create_new_age:overcharged_golden_wire', 'kubejs:paste']).processingTime(100)



  })





  ServerEvents.recipes(e => {
    e.recipes.create.filling('kubejs:striped_delight', [Fluid.of('create:chocolate',12500), 'create:sweet_roll']).processingTime(20)
    e.recipes.create.filling('kubejs:charm_base', [Fluid.of('create_enchantment_industry:hyper_experience',162000), 'compressed:quartz_block_ii']).processingTime(20)
    e.recipes.create.filling('kubejs:magically_reinforced_orichalcum',[Fluid.of('create_enchantment_industry:hyper_experience',9000), 'mythicmetals:orichalcum_ingot']).processingTime(240)
    e.recipes.create.filling('kubejs:hellforged_adamantite',[Fluid.of('createbigcannons:molten_nethersteel',18000), 'mythicmetals:adamantite_ingot']).processingTime(240)
  })





  ServerEvents.recipes(e => {
    e.recipes.create.compacting('kubejs:silicon', 'kubejs:silicon_compound').heated()
    e.recipes.create.compacting('kubejs:aeternium_sheet', 'betterend:aeternium_ingot').heated()
    e.recipes.create.compacting('kubejs:gobber_compound', ['gobber2:gobber2_ingot', 'gobber2:gobber2_glob']).processingTime(120) .superheated()
    e.recipes.create.compacting('kubejs:gobber_n_compound', ['gobber2:gobber2_glob_nether', 'gobber2:gobber2_ingot_nether']).processingTime(120) .superheated()
    e.recipes.create.compacting('kubejs:gobber_e_compound', ['gobber2:gobber2_glob_end', 'gobber2:gobber2_ingot_end', 'gobber2:gobber2_links_end']).processingTime(120) .superheated()
    e.recipes.create.compacting('kubejs:runite_scales', ['minecraft:dragon_breath','mythicmetals:runite_ingot',Item.of('betterend:dragon_tree_log',32)]).processingTime(240)
    e.recipes.create.compacting('kubejs:carmot_forged_plate', ['kubejs:blazing_banglum_plate', 'mythicmetals:carmot_block', 'farmersrespite:blazing_chili']).processingTime(240).heated()
    e.recipes.create.compacting('kubejs:enchanted_mythril_slate', ['compressed:deepslate_ii',Item.of('mythicmetals:mythril_ingot',4)]).processingTime(360)
    e.recipes.create.compacting('kubejs:startouched_celestium_crystal', ['mythicmetals:celestium_ingot', 'minecraft:nether_star', Item.of('minecraft:end_crystal',2)]).processingTime(640) .superheated()
    e.recipes.create.compacting('kubejs:microbattery', ['createdeco:zinc_coin','minecraft:redstone','createdeco:copper_coin'])
    e.recipes.create.compacting('kubejs:soul_crystal', ['compressed:soul_sand_iv','minecraft:diamond', 'mythicupgrades:aquamarine', 'minecraft:amethyst_shard','minecraft:quartz','betterend:eternal_crystal','minecraft:emerald','mythicupgrades:ruby','mythicupgrades:topaz','mythicupgrades:sapphire','betterend:crystal_shards','mythicupgrades:ametrine','betternether:nether_ruby','mythicupgrades:jade']).processingTime(1200) .superheated()
  
  })

ServerEvents.recipes(event => {
  event.shapeless('minecraft:netherite_scrap', ['kubejs:netherite_fragment','kubejs:netherite_fragment','kubejs:netherite_fragment','kubejs:netherite_fragment','kubejs:netherite_fragment','kubejs:netherite_fragment','kubejs:netherite_fragment','kubejs:netherite_fragment','kubejs:netherite_fragment',])
  event.shapeless('kubejs:empty_vial',['minecraft:glass_bottle','minecraft:honeycomb'])
})

ServerEvents.recipes(e => {
  e.smithing(
    'kubejs:ruby_cluster',  // arg 1: output
    'betternether:nether_ruby', // arg 2: the item to be upgraded
    'betternether:cincinnasite_forged'   // arg 3: the upgrade item
  )
  e.smithing(
    Item.of('kubejs:smile'),  // arg 1: output
    Item.of('simplyswords:mythicmetals_compat/metallurgium/metallurgium_greathammer'), // arg 2: the item to be upgraded
    'kubejs:t_star'   // arg 3: the upgrade item
  )
  e.smithing(
    Item.of('kubejs:justitia'),  // arg 1: output
    Item.of('simplyswords:mythicmetals_compat/metallurgium/metallurgium_claymore'), // arg 2: the item to be upgraded
    'kubejs:t_star'   // arg 3: the upgrade item
  )
  e.smithing(
    Item.of('kubejs:paralost'),  // arg 1: output
    Item.of('kubejs:clockwork_lifeforce_reactor', '{TrinketAttributeModifiers:[{Amount:40,AttributeName:"generic.max_health",Name:"generic.max_health",Operation:0,UUID:[I;42853,1689024593,-201178,-1559272105]}]}'), // arg 2: the item to be upgraded
    'kubejs:heart'   // arg 3: the upgrade item
  )
  e.smithing(
    Item.of('kubejs:twilight'),  // arg 1: output
    Item.of('kubejs:justitia'), // arg 2: the item to be upgraded
    'kubejs:research_notes'   // arg 3: the upgrade item
  )
})


  

 

  

ServerEvents.recipes(e => {

  e.shaped('kubejs:nexuscrystal', [
    ' A ',
    ' B ',
    'CDC'
  ],{
        A: 'kubejs:soul_crystal',
        B: 'kubejs:charm_base',
        C: 'kubejs:fieldemitter',
        D: 'kubejs:advancedplating2',


  })

  e.shaped('kubejs:spacetime_equalizer', [
    ' BD',
    'CAC',
    'DB '
  ],{
        A: 'kubejs:machine_casing',
        B: 'kubejs:me_conversion_matrix',
        C: 'ae2:cell_component_1k',
        D: 'ae2:spatial_cell_component_2',


  })

  e.shaped('kubejs:me_conversion_matrix', [
    'ACB',
    'FDF',
    'GEG'
  ],{
        A: 'ae2:formation_core',
        B: 'ae2:annihilation_core',
        C: 'ae2:condenser',
        D: 'kubejs:machine_casing',
        E: 'kubejs:heatresistantplating2',
        F: 'ae2:logic_processor',
        G: 'ae2:calculation_processor',

  })

  e.shaped('kubejs:fieldemitter', [
    'BAB',
    'CAC',
    'DED'
  ],{
        A: 'kubejs:crystalcapacitor',
        B: 'kubejs:hologramemitter',
        C: 'kubejs:liquid_palladium_smart_metal',
        D: 'kubejs:kineticgen',
        E: 'kubejs:hamon_laced_star_platinum_plate',

  })

  e.shaped('kubejs:kineticgen', [
    'ABC',
    'E D',
    'ABC'
  ],{
        A: 'kubejs:servo',
        B: 'kubejs:solenoid',
        C: 'create:shadow_steel',
        D: 'kubejs:machine_casing',
        E: 'createbigcannons:steel_autocannon_recoil_spring',

  })

  e.shaped('kubejs:pattern_drive', [
    ' A ',
    'BBB',
    ' C '
  ],{
        A: 'ae2:blank_pattern',
        B: 'kubejs:overclocked_tube',
        C: 'kubejs:computerchip',

  })

  e.shaped('kubejs:hologramemitter', [
    ' B ',
    'ADA',
    'CEC'
  ],{
        A: 'kubejs:silicon_plate',
        B: 'kubejs:overclocked_tube',
        C: 'kubejs:computerchip',
        D: 'kubejs:controlcircuit',
        E: 'kubejs:mvbattery',

  })

  e.shaped('kubejs:coolingsystem', [
    'FAF',
    'DDD',
    'EBE'
  ],{
        A: 'minecraft:packed_ice',
        B: 'minecraft:water_bucket',
        D: 'kubejs:mvbattery',
        E: 'kubejs:heatresistantplating2',
        F: 'kubejs:wiring',

  }).keepIngredient('water_bucket')

  e.shaped('kubejs:heatgenerator', [
    'FAF',
    'CDC',
    'EBE'
  ],{
        A: 'minecraft:packed_ice',
        B: 'minecraft:lava_bucket',
        C: 'kubejs:hvcapacitor',
        D: 'kubejs:crystalcapacitor',
        E: 'kubejs:heatresistantplating2',
        F: 'kubejs:wiring',

  }).keepIngredient('lava_bucket')

  e.shaped('kubejs:ionthruster', [
    'BCD',
    'EAE',
    'DCB'
],{
    A: 'mythicmetals:durasteel_ingot',
    B: 'gobber2:gobber2_rod',
    C: 'gobber2:gobber2_ring',
    D: 'kubejs:mvcapacitor',
    E: 'kubejs:solenoid',
})

  e.shaped('kubejs:gravitydrive', [
    'ADA',
    'BCB',
    'ADA'
],{
    A: 'kubejs:ionthruster',
    B: 'kubejs:gliderwing',
    C: 'kubejs:magnetmodule',
    D: 'kubejs:crystalcapacitor',
})

  e.shaped('kubejs:machine_casing', [
    ' A ',
    ' B ',
    ' C '
],{
    A: 'kubejs:tachyonic_mechanism',
    B: 'kubejs:mvbattery',
    C: 'kubejs:basicplating2',
})

  e.shaped(Item.of('kubejs:lifeforce_berry', `{TrinketAttributeModifiers: [{AttributeName: 'generic.max_health',   Name: 'generic.max_health', Amount: 20, Operation: 0, UUID: [I; 42853, 1689024593, -201178, -1559272105]}]}`), [
    'ABA',
    'CDC',
    'AEA'
],{
    A: 'ecologics:surface_moss',
    B: 'betterend:sweet_berry_jelly',
    C: 'betterend:raw_amber',
    D: 'artifacts:crystal_heart',
    E: 'minecraft:enchanted_golden_apple'
})

e.shaped('4x create:andesite_alloy', [
  'AB ',
  'BA ',
  '   '
],{
  A: 'minecraft:andesite',
  B: 'create:zinc_ingot',
})

e.shaped('kubejs:auric_electron_tube', [
    ' A ',
    ' B ',
    '   '
],{
    A: 'kubejs:polished_aurora_crystal',
    B: 'kubejs:aeternium_sheet',
})

e.shaped(Item.of('kubejs:exo_gauntlet', `{TrinketAttributeModifiers: [{AttributeName: 'generic.attack_damage',   Name: 'generic.attack_damage', Amount: 8, Operation: 0, UUID: [I; 1561088066, 2141800799, -1303046299, 692194761]},{AttributeName: 'generic.attack_speed',   Name: 'generic.attack_speed', Amount: 4, Operation: 0, UUID: [I; 973381748, 42879359, -1405446379, -80184484]},{AttributeName: 'generic.attack_speed',   Name: 'generic.attack_speed', Amount: 4, Operation: 0, UUID: [I; 1517400900, 1597654445, -1916448288, 1218812680]},{AttributeName: 'generic.attack_damage',   Name: 'generic.attack_damage', Amount: 8, Operation: 0, UUID: [I; 2145348242, 1121337601, -1706345273, 1303810952]}]}`), [
    'ABA',
    'CDE',
    'ABA'
],{
    A: 'betterend:terminite_forged_plate',
    B: 'createdeco:netherite_sheet',
    C: 'artifacts:feral_claws',
    D: 'kubejs:aeternium_inlaid_precision_mechanism',
    E: 'artifacts:power_glove'
})

e.shaped(Item.of('kubejs:clockwork_lifeforce_reactor', `{TrinketAttributeModifiers: [{AttributeName: 'generic.max_health',   Name: 'generic.max_health', Amount: 40, Operation: 0, UUID: [I; 42853, 1689024593, -201178, -1559272105]}`), [
  'ABA',
  'CDC',
  'ABA'
],{
  A: 'artifacts:crystal_heart',
  B: 'kubejs:aeternium_inlaid_precision_mechanism',
  C: 'betterend:aeternium_ingot',
  D: 'kubejs:lifeforce_berry'
})

e.shaped('things:hardening_catalyst', [
    'ABA',
    'CDC',
    'AEA'
],{
    A: 'create:powdered_obsidian',
    B: 'betterend:eternal_crystal',
    C: 'betterend:aeternium_forged_plate',
    D: 'minecraft:nether_star',
    E: 'create:sturdy_sheet'
})

e.shaped('artifacts:crystal_heart', [
  'ABA',
  'BCB',
  'ABA'
],{
  A: 'minecraft:amethyst_shard',
  B: 'betternether:nether_ruby',
  C: 'kubejs:dwellersheart'
})

  e.shaped('toms_storage:ts.inventory_connector', [
    'AEA',
    'DBD',
    'ACA'
  ],{
        A: 'create:brass_casing',
        B: 'create_new_age:overcharged_diamond',
        C: 'betterend:ender_dust',
        D: 'create:item_vault',
        E: 'kubejs:reforming_mechanism'
  })

  e.shaped('toms_storage:ts.storage_terminal', [
    'AEA',
    'DBD',
    'ACA'
  ],{
        A: 'create:brass_casing',
        B: 'create:display_board',
        C: 'kubejs:compression_mechanism',
        D: 'create:display_board',
        E: 'kubejs:enlarging_mechanism'
  })

  e.shaped('toms_storage:ts.crafting_terminal', [
    'ADA',
    'DBD',
    'ADA'
  ],{
        A: 'create:brass_casing',
        B: 'toms_storage:ts.storage_terminal',
        D: 'kubejs:integrated_circuit',
  })

  e.shaped('toms_storage:ts.inventory_cable', [
    'ADA',
    'CBC',
    'ADA'
  ],{
        A: 'createaddition:iron_rod',
        B: 'create:item_vault',
        C: 'minecraft:iron_trapdoor',
        D: 'create:brass_casing',
  })

  e.shaped('toms_storage:ts.inventory_cable_connector', [
    ' DA',
    'CBC',
    ' EA'
  ],{
        A: 'create:brass_casing',
        B: 'create:item_vault',
        C: 'toms_storage:ts.inventory_cable',
        D: 'kubejs:compression_mechanism',
        E: 'kubejs:enlarging_mechanism',
  })

  e.shaped('toms_storage:ts.wireless_terminal', [
    'AEA',
    'CBD',
    'AEA'
  ],{
        A: 'create:brass_casing',
        B: 'create:display_board',
        C: 'create:display_link',
        D: 'create:redstone_link',
        E: 'create:rose_quartz_lamp',
  })

  e.shaped('toms_storage:ts.adv_wireless_terminal', [
    'FCF',
    'BAD',
    'FEF'
  ],{
        A: 'toms_storage:ts.wireless_terminal',
        B: 'kubejs:compression_mechanism',
        C: 'kubejs:enlarging_mechanism',
        D: 'kubejs:reforming_mechanism',
        E: 'kubejs:integrated_circuit',
        F: 'kubejs:overcharged_alloy',
  })

  e.shaped('kubejs:aquarium_nexus_pearl', [
    'ABA',
    'BCB',
    'ABA'
  ],{
        A: 'mythicmetals:aquarium_ingot',
        B: 'mythicupgrades:aquamarine',
        C: 'minecraft:heart_of_the_sea',
  })

  e.shaped('kubejs:blazing_banglum_plate', [
    'ACA',
    'BEB',
    'DCD'
  ],{
        A: 'minecraft:blaze_rod',
        B: 'farmersrespite:blazing_chili',
        C: 'create:blaze_cake',
        D: 'garnished:blazing_delight',
        E: 'mythicmetals:banglum_ingot',
  })

  e.shaped('kubejs:osmium_parts', [
    'BBB',
    'ABA',
    'ACA'
  ],{
        A: 'kubejs:servo',
        B: 'mythicmetals:osmium_ingot',
        C: 'kubejs:solenoid',
  })

  e.shaped('kubejs:pure_kyber_crystal', [
    'ABA',
    'DCD',
    'ABA'
  ],{
        A: 'mythicmetals:kyber_ingot',
        B: 'kubejs:polished_aurora_crystal',
        C: 'minecraft:end_crystal',
        D: 'betterend:aurora_crystal',

  })

  e.shaped('gobber2:gobber2_links_end', [
    'AAA',
    'BAB',
    'AAA'
  ],{
        A: 'gobber2:gobber2_ring_end',
        B: 'kubejs:auric_electron_tube',
  })

  e.shaped('kubejs:servo', [
    ' B ',
    'ACA',
    'D D'
  ],{
        A: 'kubejs:silicon_plate',
        B: 'minecraft:piston',
        C: 'kubejs:solenoid',
        D: 'kubejs:wiring',

  })

})

ServerEvents.recipes(e => {

  e.recipes.create.mechanical_crafting('kubejs:t_star', [
    'DEFED',
    'EG GE',
    'F H F',
    'EG GE',
    'DEFED',
    
   ], {
    D: 'kubejs:fieldemitter',
    E: 'kubejs:advancedplating2',
    F: 'kubejs:gravitydrive',
    G: 'kubejs:nexuscrystal',
    H: 'kubejs:heart',
   })

  e.recipes.create.mechanical_crafting('kubejs:heart', [
    ' ABA ',
    ' C C ',
    '  E  ',
    ' D D ',
    ' ABA ',
    
   ], {
    A: 'kubejs:basicplating2',
    B: 'kubejs:advancedplating2',
    C: 'kubejs:fieldemitter',
    D: 'kubejs:magnetmodule',
    E: 'artifacts:crystal_heart',
   })

  e.recipes.create.mechanical_crafting('kubejs:magneta', [
    '  B  ',
    ' ABA ',
    ' DCD ',
    ' ABA ',
    '  B  ',
    
   ], {
    A: 'createaddition:iron_wire',
    B: 'minecraft:redstone',
    C: 'minecraft:lightning_rod',
    D: 'createaddition:iron_rod',
   })


  e.recipes.create.mechanical_crafting('kubejs:magnetmodule', [

    ' CCC ',
    'ABBBA',
    ' CCC ',
  
    
   ], {
    A: 'kubejs:magneta',
    B: 'kubejs:solenoid',
    C: 'kubejs:mvcapacitor',
   })


  e.recipes.create.mechanical_crafting('kubejs:gliderwing', [

    'ACCC ',
    ' BBBC',
  
    
   ], {
    A: 'kubejs:enchanted_mythril_slate',
    B: 'mythicmetals:durasteel_ingot',
    C: 'kubejs:silicon_plate',
   })


  e.recipes.create.mechanical_crafting('gobber2:gobber2_helmet_dragon', [
     ' ACA ',
     'BDDDB',
     'BFGHB',
     'EBABE',
     ' CIC ',
    ], {
     A: 'kubejs:overcharged_alloy',
     B: 'kubejs:overclocked_tube',
     C: 'kubejs:tachyonic_mechanism',
     D: 'kubejs:integrated_circuit',
     E: 'gobber2:dragon_star',
     F: 'betterend:crystalite_helmet',
     G: 'mythicmetals:metallurgium_helmet',
     H: 'immersive_armors:divine_helmet',  
     I: 'gobber2:gobber2_ring_phoenix',
    })

    e.recipes.create.mechanical_crafting('gobber2:gobber2_chestplate_dragon', [
      ' ACA ',
      'BDDDB',
      'BFGHB',
      'EBABE',
      ' CIC ',
     ], {
      A: 'kubejs:overcharged_alloy',
      B: 'kubejs:overclocked_tube',
      C: 'kubejs:tachyonic_mechanism',
      D: 'kubejs:integrated_circuit',
      E: 'gobber2:dragon_star',
      F: 'betterend:crystalite_chestplate',
      G: 'mythicmetals:metallurgium_chestplate',
      H: 'immersive_armors:divine_chestplate',  
      I: 'gobber2:dragon_elytra',
     })

     e.recipes.create.mechanical_crafting('gobber2:gobber2_leggings_dragon', [
      ' ACA ',
      'BDDDB',
      'BFGHB',
      'EBABE',
      ' CIC ',
     ], {
      A: 'kubejs:overcharged_alloy',
      B: 'kubejs:overclocked_tube',
      C: 'kubejs:tachyonic_mechanism',
      D: 'kubejs:integrated_circuit',
      E: 'gobber2:dragon_star',
      F: 'betterend:crystalite_leggings',
      G: 'mythicmetals:metallurgium_leggings',
      H: 'immersive_armors:divine_leggings',  
      I: 'minecraft:conduit',
     })

     e.recipes.create.mechanical_crafting('gobber2:gobber2_boots_dragon', [
      ' ACA ',
      'BDDDB',
      'BFGHB',
      'EBABE',
      ' CIC ',
     ], {
      A: 'kubejs:overcharged_alloy',
      B: 'kubejs:overclocked_tube',
      C: 'kubejs:tachyonic_mechanism',
      D: 'kubejs:integrated_circuit',
      E: 'gobber2:dragon_star',
      F: 'betterend:crystalite_boots',
      G: 'mythicmetals:metallurgium_boots',
      H: 'immersive_armors:divine_boots',  
      I: 'gobber2:gobber2_ring_curing',
     })

})

ServerEvents.recipes(e => {
  // for this code to work, kubejs:incomplete_spore_blossom needs to be added to the game
  let inter = 'kubejs:computerchip' // making a variable to store the transitional item makes the code more readable
  e.recipes.create.sequenced_assembly([
    Item.of('kubejs:controlcircuit'), // this is the item that will appear in JEI as the result
  ], 'kubejs:computerchip', [ // 'flowering_azalea_leaves' is the input
    // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
    e.recipes.createDeploying(inter, [inter, 'kubejs:enlarging_mechanism']),
    e.recipes.createDeploying(inter, [inter, 'kubejs:reforming_mechanism']),
    e.recipes.createDeploying(inter, [inter, 'kubejs:compression_mechanism']),
    e.recipes.createDeploying(inter, [inter, 'kubejs:lvcapacitor']),
  ]).transitionalItem(inter).loops(1) // set the transitional item and the number of loops
})

ServerEvents.recipes(e => {
  // for this code to work, kubejs:incomplete_spore_blossom needs to be added to the game
  let inter = 'kubejs:integrated_circuit' // making a variable to store the transitional item makes the code more readable
  e.recipes.create.sequenced_assembly([
    Item.of('kubejs:computerchip'), // this is the item that will appear in JEI as the result
  ], 'kubejs:integrated_circuit', [ // 'flowering_azalea_leaves' is the input
    // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
    e.recipes.createDeploying(inter, [inter, 'kubejs:lvcapacitor']),
    e.recipes.createDeploying(inter, [inter, 'kubejs:microbattery']),
    e.recipes.createDeploying(inter, [inter, 'kubejs:lvcapacitor']),
  ]).transitionalItem(inter).loops(1) // set the transitional item and the number of loops
})

ServerEvents.recipes(e => {
  // for this code to work, kubejs:incomplete_spore_blossom needs to be added to the game
  let inter = 'createaddition:copper_spool' // making a variable to store the transitional item makes the code more readable
  e.recipes.create.sequenced_assembly([
    Item.of('kubejs:wiring'), // this is the item that will appear in JEI as the result
  ], 'createaddition:copper_spool', [ // 'flowering_azalea_leaves' is the input
    // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
    e.recipes.createDeploying(inter, [inter, 'createaddition:copper_spool']),
    e.recipes.createDeploying(inter, [inter, 'create_new_age:copper_wire']),
    e.recipes.createDeploying(inter, [inter, 'minecraft:orange_wool']),
  ]).transitionalItem(inter).loops(1) // set the transitional item and the number of loops
})

ServerEvents.recipes(e => {
  // for this code to work, kubejs:incomplete_spore_blossom needs to be added to the game
  let inter = 'betterend:aeternium_forged_plate' // making a variable to store the transitional item makes the code more readable
  e.recipes.create.sequenced_assembly([
    Item.of('kubejs:basicplating2'), // this is the item that will appear in JEI as the result
  ], 'betterend:aeternium_forged_plate', [ // 'flowering_azalea_leaves' is the input
    // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
    e.recipes.createDeploying(inter, [inter, 'kubejs:silicon_plate']),
    e.recipes.createDeploying(inter, [inter, 'create:sturdy_sheet']),
    e.recipes.createPressing(inter, inter),
  ]).transitionalItem(inter).loops(1) // set the transitional item and the number of loops
})

ServerEvents.recipes(e => {
  // for this code to work, kubejs:incomplete_spore_blossom needs to be added to the game
  let inter = 'kubejs:blazing_banglum_plate' // making a variable to store the transitional item makes the code more readable
  e.recipes.create.sequenced_assembly([
    Item.of('kubejs:heatresistantplating2'), // this is the item that will appear in JEI as the result
  ], 'kubejs:blazing_banglum_plate', [ // 'flowering_azalea_leaves' is the input
    // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
    e.recipes.createFilling(inter, [inter, Fluid.of('createbigcannons:molten_nethersteel',20250)]),
    e.recipes.createPressing(inter, inter),
    e.recipes.createPressing(inter, inter),
  ]).transitionalItem(inter).loops(2) // set the transitional item and the number of loops
})

ServerEvents.recipes(e => {
  // for this code to work, kubejs:incomplete_spore_blossom needs to be added to the game
  let inter = 'betterend:elytra_crystalite' // making a variable to store the transitional item makes the code more readable
  e.recipes.create.sequenced_assembly([
    Item.of('gobber2:dragon_elytra'), // this is the item that will appear in JEI as the result
  ], 'betterend:elytra_crystalite', [ // 'flowering_azalea_leaves' is the input
    // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
    e.recipes.createDeploying(inter, [inter, 'minecraft:dragon_breath']),
    e.recipes.createDeploying(inter, [inter, 'kubejs:gobber_e_compound']),
    e.recipes.createDeploying(inter, [inter, 'create_new_age:corium']),
    e.recipes.createDeploying(inter, [inter, 'betterend:eternal_crystal']),
    e.recipes.createDeploying(inter, [inter, 'betterend:amber_gem']),
    e.recipes.createDeploying(inter, [inter, 'kubejs:overclocked_tube']),
    e.recipes.createDeploying(inter, [inter, 'kubejs:auric_electron_tube']),
  ]).transitionalItem(inter).loops(2) // set the transitional item and the number of loops
})

ServerEvents.recipes(e => {
  // for this code to work, kubejs:incomplete_spore_blossom needs to be added to the game
  let inter = 'minecraft:nether_star' // making a variable to store the transitional item makes the code more readable
  e.recipes.create.sequenced_assembly([
    Item.of('gobber2:dragon_star'), // this is the item that will appear in JEI as the result
  ], 'minecraft:nether_star', [ // 'flowering_azalea_leaves' is the input
    // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
    e.recipes.createDeploying(inter, [inter, 'minecraft:dragon_breath']),
    e.recipes.createDeploying(inter, [inter, 'kubejs:gobber_e_compound']),
    e.recipes.createDeploying(inter, [inter, 'create_new_age:corium']),
    e.recipes.createDeploying(inter, [inter, 'betterend:eternal_crystal']),
    e.recipes.createDeploying(inter, [inter, 'betterend:amber_gem']),
    e.recipes.createDeploying(inter, [inter, 'kubejs:overclocked_tube']),
    e.recipes.createDeploying(inter, [inter, 'kubejs:auric_electron_tube']),
  ]).transitionalItem(inter).loops(2) // set the transitional item and the number of loops
})

ServerEvents.recipes(e => {
  // for this code to work, kubejs:incomplete_spore_blossom needs to be added to the game
  let inter = 'kubejs:gobber_compound' // making a variable to store the transitional item makes the code more readable
  e.recipes.create.sequenced_assembly([
    Item.of('gobber2:gobber2_medallion'), // this is the item that will appear in JEI as the result
  ], 'gobber2:gobber2_block', [ // 'flowering_azalea_leaves' is the input
    // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
    e.recipes.createCutting(inter, inter),
    e.recipes.createCutting(inter, inter),
    e.recipes.createDeploying(inter, [inter, 'gobber2:gobber2_rod']),
    e.recipes.createPressing(inter, inter),
    e.recipes.createCutting(inter, inter),
  ]).transitionalItem(inter).loops(2) // set the transitional item and the number of loops
})

ServerEvents.recipes(e => {
  // for this code to work, kubejs:incomplete_spore_blossom needs to be added to the game
  let inter = 'gobber2:gobber2_medallion' // making a variable to store the transitional item makes the code more readable
  e.recipes.create.sequenced_assembly([
    Item.of('gobber2:gobber2_medallion_nether'), // this is the item that will appear in JEI as the result
  ], 'gobber2:gobber2_medallion', [ // 'flowering_azalea_leaves' is the input
    // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
    e.recipes.createCutting(inter, inter),
    e.recipes.createDeploying(inter, [inter, 'kubejs:gobber_n_compound']),
    e.recipes.createDeploying(inter, [inter, 'gobber2:gobber2_rod_nether']),
    e.recipes.createFilling(inter, [inter, Fluid.of('minecraft:lava',81000)]),
    e.recipes.createCutting(inter, inter),
  ]).transitionalItem(inter).loops(2) // set the transitional item and the number of loops
})

ServerEvents.recipes(e => {
  // for this code to work, kubejs:incomplete_spore_blossom needs to be added to the game
  let inter = 'gobber2:gobber2_medallion_nether' // making a variable to store the transitional item makes the code more readable
  e.recipes.create.sequenced_assembly([
    Item.of('gobber2:gobber2_medallion_end'), // this is the item that will appear in JEI as the result
  ], 'gobber2:gobber2_medallion_nether', [ // 'flowering_azalea_leaves' is the input
    // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
    e.recipes.createCutting(inter, inter),
    e.recipes.createDeploying(inter, [inter, 'kubejs:gobber_e_compound']),
    e.recipes.createDeploying(inter, [inter, 'gobber2:gobber2_rod_end']),
    e.recipes.createFilling(inter, [inter, Fluid.of('create_enchantment_industry:hyper_experience',81000)]),
    e.recipes.createCutting(inter, inter),
  ]).transitionalItem(inter).loops(2) // set the transitional item and the number of loops
})

ServerEvents.recipes(e => {
  // for this code to work, kubejs:incomplete_spore_blossom needs to be added to the game
  let inter = 'gobber2:gobber2_medallion' // making a variable to store the transitional item makes the code more readable
  e.recipes.create.sequenced_assembly([
    Item.of('gobber2:gobber2_ring'), // this is the item that will appear in JEI as the result
  ], 'gobber2:gobber2_medallion', [ // 'flowering_azalea_leaves' is the input
    // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
    e.recipes.createCutting(inter, inter),
    e.recipes.createFilling(inter, [inter, Fluid.of('create:potion', 81000, '{Potion: "minecraft:strong_healing"}')]),
    e.recipes.createCutting(inter, inter),
  ]).transitionalItem(inter).loops(1) // set the transitional item and the number of loops
})

ServerEvents.recipes(e => {
  // for this code to work, kubejs:incomplete_spore_blossom needs to be added to the game
  let inter = 'gobber2:gobber2_medallion_nether' // making a variable to store the transitional item makes the code more readable
  e.recipes.create.sequenced_assembly([
    Item.of('gobber2:gobber2_ring_nether'), // this is the item that will appear in JEI as the result
  ], 'gobber2:gobber2_medallion_nether', [ // 'flowering_azalea_leaves' is the input
    // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
    e.recipes.createCutting(inter, inter),
    e.recipes.createFilling(inter, [inter, Fluid.of('create:potion', 81000, '{Potion: "minecraft:fire_resistance"}')]),
    e.recipes.createCutting(inter, inter),
  ]).transitionalItem(inter).loops(1) // set the transitional item and the number of loops
})

ServerEvents.recipes(e => {
  // for this code to work, kubejs:incomplete_spore_blossom needs to be added to the game
  let inter = 'gobber2:gobber2_medallion_end' // making a variable to store the transitional item makes the code more readable
  e.recipes.create.sequenced_assembly([
    Item.of('gobber2:gobber2_ring_end'), // this is the item that will appear in JEI as the result
  ], 'gobber2:gobber2_medallion_end', [ // 'flowering_azalea_leaves' is the input
    // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
    e.recipes.createCutting(inter, inter),
    e.recipes.createFilling(inter, [inter, Fluid.of('create:potion', 81000, '{Potion: "minecraft:strong_turtle_master"}')]),
    e.recipes.createCutting(inter, inter),
  ]).transitionalItem(inter).loops(1) // set the transitional item and the number of loops
})

ServerEvents.recipes(e => {
  // for this code to work, kubejs:incomplete_spore_blossom needs to be added to the game
  let inter = 'kubejs:incomplete_aeternium_inlaid_precision_mechanism' // making a variable to store the transitional item makes the code more readable
  e.recipes.create.sequenced_assembly([
    Item.of('kubejs:aeternium_inlaid_precision_mechanism'), // this is the item that will appear in JEI as the result
  ], 'create:precision_mechanism', [ // 'flowering_azalea_leaves' is the input
    // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
    e.recipes.createDeploying(inter, [inter, 'kubejs:aeternium_sheet']),
    e.recipes.createPressing(inter, inter),
    e.recipes.createDeploying(inter, [inter, 'kubejs:auric_electron_tube']),
    e.recipes.createPressing(inter, inter),
  ]).transitionalItem(inter).loops(2) // set the transitional item and the number of loops
})

ServerEvents.recipes(e => {
  // for this code to work, kubejs:incomplete_spore_blossom needs to be added to the game
  let inter = 'kubejs:incomplete_compression_mechanism' // making a variable to store the transitional item makes the code more readable
  e.recipes.create.sequenced_assembly([
    Item.of('kubejs:compression_mechanism'), // this is the item that will appear in JEI as the result
  ], 'create:brass_sheet', [ // 'flowering_azalea_leaves' is the input
    // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
    e.recipes.createDeploying(inter, [inter, 'create:cogwheel']),
    e.recipes.createDeploying(inter, [inter, 'createaddition:copper_spool']),
    e.recipes.createDeploying(inter, [inter, 'createaddition:capacitor']),
    e.recipes.createDeploying(inter, [inter, 'create:electron_tube']),
    e.recipes.createPressing(inter, inter),
  ]).transitionalItem(inter).loops(2) // set the transitional item and the number of loops
})

ServerEvents.recipes(e => {
  // for this code to work, kubejs:incomplete_spore_blossom needs to be added to the game
  let inter = 'kubejs:incomplete_enlarging_mechanism' // making a variable to store the transitional item makes the code more readable
  e.recipes.create.sequenced_assembly([
    Item.of('kubejs:enlarging_mechanism'), // this is the item that will appear in JEI as the result
  ], 'create:brass_sheet', [ // 'flowering_azalea_leaves' is the input
    // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
    e.recipes.createDeploying(inter, [inter, 'create:large_cogwheel']),
    e.recipes.createDeploying(inter, [inter, 'createaddition:gold_spool']),
    e.recipes.createDeploying(inter, [inter, 'createaddition:connector']),
    e.recipes.createDeploying(inter, [inter, 'create:electron_tube']),
    e.recipes.createPressing(inter, inter),
  ]).transitionalItem(inter).loops(2) // set the transitional item and the number of loops
})

ServerEvents.recipes(e => {
  // for this code to work, kubejs:incomplete_spore_blossom needs to be added to the game
  let inter = 'kubejs:incomplete_reforming_mechanism' // making a variable to store the transitional item makes the code more readable
  e.recipes.create.sequenced_assembly([
    Item.of('kubejs:reforming_mechanism'), // this is the item that will appear in JEI as the result
  ], 'create:brass_sheet', [ // 'flowering_azalea_leaves' is the input
    // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
    e.recipes.createDeploying(inter, [inter, 'create:redstone_link']),
    e.recipes.createDeploying(inter, [inter, 'toms_storage:ts.item_filter']),
    e.recipes.createDeploying(inter, [inter, 'create:experience_nugget']),
    e.recipes.createDeploying(inter, [inter, 'minecraft:slime_ball']),
    e.recipes.createPressing(inter, inter),
  ]).transitionalItem(inter).loops(2) // set the transitional item and the number of loops
})

ServerEvents.recipes(e => {
  // for this code to work, kubejs:incomplete_spore_blossom needs to be added to the game
  let inter = 'kubejs:incomplete_integrated_circuit' // making a variable to store the transitional item makes the code more readable
  e.recipes.create.sequenced_assembly([
    Item.of('kubejs:integrated_circuit'), // this is the item that will appear in JEI as the result
  ], 'create_new_age:overcharged_golden_sheet', [ // 'flowering_azalea_leaves' is the input
    // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
    e.recipes.createDeploying(inter, [inter, 'computercraft:computer_normal']),
    e.recipes.createCutting(inter, inter),
    e.recipes.createDeploying(inter, [inter, 'create:redstone_link']),
    e.recipes.createCutting(inter, inter),
    e.recipes.createDeploying(inter, [inter, 'create:nixie_tube']),
    e.recipes.createDeploying(inter, [inter, 'create:display_link']),
  ]).transitionalItem(inter).loops(1) // set the transitional item and the number of loops
})

ServerEvents.recipes(e => {
  e.custom({
      type: "create:sequenced_assembly",
      ingredient: {
        item: 'kubejs:undercharged_alloy'
      },
      results: [{item: 'kubejs:overcharged_alloy'}],
      loops: 2,
      sequence: [
        {
          type: "create:deploying",
          ingredients: [{item: 'minecraft:redstone'},{item: 'minecraft:redstone'}],
          results: [{item: 'minecraft:redstone'}]
        },
        {
            type: "create_new_age:energising",
            energy_needed: 2000,
            ingredients: [{item: 'minecraft:redstone'},{item: 'minecraft:redstone'}],
            results: [{item: 'minecraft:redstone'}]
        },
      ],
      transitionalItem: {item: 'kubejs:undercharged_alloy'}
    }).id('kubejs:undercharged_alloy')
})

ServerEvents.recipes(e => {
  e.custom({
      type: "create:sequenced_assembly",
      ingredient: {
        item: 'create:electron_tube'
      },
      results: [{item: 'kubejs:overclocked_tube'}],
      loops: 2,
      sequence: [
        {
          type: "create:deploying",
          ingredients: [{item: 'kubejs:overcharged_alloy'},{item: 'kubejs:overcharged_alloy'}],
          results: [{item: 'kubejs:incomplete_overclocked_tube'}]
        },
        {
          type: "create:cutting",
          ingredients: [{item: 'minecraft:redstone'},{item: 'minecraft:redstone'}],
          results: [{item: 'kubejs:incomplete_overclocked_tube'}]
        },
        {
            type: "create_new_age:energising",
            energy_needed: 2000,
            ingredients: [{item: 'minecraft:redstone'},{item: 'minecraft:redstone'}],
            results: [{item: 'kubejs:incomplete_overclocked_tube'}]
        },
      ],
      transitionalItem: {item: 'kubejs:incomplete_overclocked_tube'}
    }).id('kubejs:incomplete_overclocked_tube')
})

ServerEvents.recipes(e => {
  e.custom({
      type: "create:sequenced_assembly",
      ingredient: {
        item: 'create_new_age:overcharged_iron_sheet'
      },
      results: [{item: 'kubejs:tachyonic_mechanism'}],
      loops: 2,
      sequence: [
        {
          type: "create:deploying",
          ingredients: [{item: 'betterend:ender_dust'},{item: 'betterend:ender_dust'}],
          results: [{item: 'betterend:ender_dust'}]
        },
        {
          type: "create:deploying",
          ingredients: [{item: 'createaddition:capacitor'},{item: 'createaddition:capacitor'}],
          results: [{item: 'createaddition:capacitor'}]
        },
        {
          type: "create:deploying",
          ingredients: [{item: 'create_new_age:overcharged_diamond'},{item: 'create_new_age:overcharged_diamond'}],
          results: [{item: 'create_new_age:overcharged_diamond'}]
        },
        {
            type: "create_new_age:energising",
            energy_needed: 15000,
            ingredients: [{item: 'minecraft:redstone'},{item: 'minecraft:redstone'}],
            results: [{item: 'minecraft:redstone'}]
        },
      ],
      transitionalItem: {item: 'kubejs:incomplete_tachyonic_mechanism'}
    }).id('kubejs:incomplete_tachyonic_mechanism')
})

ServerEvents.recipes(e => {
  e.custom({
      type: "create:sequenced_assembly",
      ingredient: {
        item: 'kubejs:rubberhose'
      },
      results: [{item: 'kubejs:myofiber'}],
      loops: 2,
      sequence: [
        {
          type: "create:deploying",
          ingredients: [{item: 'createbigcannons:recoil_spring'},{item: 'createbigcannons:recoil_spring'}],
          results: [{item: 'createbigcannons:recoil_spring'}]
        },
        {
            type: "create_new_age:energising",
            energy_needed: 5000,
            ingredients: [{item: 'minecraft:redstone'},{item: 'minecraft:redstone'}],
            results: [{item: 'minecraft:redstone'}]
        },
      ],
      transitionalItem: {item: 'kubejs:rubberhose'}
    }).id('kubejs:rubberhose')
})

ServerEvents.recipes(e => {
  e.custom({
      type: "create:sequenced_assembly",
      ingredient: {
        item: 'kubejs:basicplating2'
      },
      results: [{item: 'kubejs:advancedplating2'}],
      loops: 1,
      sequence: [
        {
          type: "create:deploying",
          ingredients: [{item: 'kubejs:enchanted_mythril_slate'},{item: 'kubejs:enchanted_mythril_slate'}],
          results: [{item: 'kubejs:enchanted_mythril_slate'}]
        },
        {
          type: "create:deploying",
          ingredients: [{item: 'kubejs:liquid_palladium_smart_metal'},{item: 'kubejs:liquid_palladium_smart_metal'}],
          results: [{item: 'kubejs:liquid_palladium_smart_metal'}]
        },
        {
            type: "create_new_age:energising",
            energy_needed: 5000,
            ingredients: [{item: 'minecraft:redstone'},{item: 'minecraft:redstone'}],
            results: [{item: 'minecraft:redstone'}]
        },
        {
          type: "create:pressing",
          ingredients: [{item: 'minecraft:redstone'},{item: 'minecraft:redstone'}],
          results: [{item: 'minecraft:redstone'}]
        },
      ],
      transitionalItem: {item: 'kubejs:basicplating2'}
    }).id('kubejs:basicplating2')
})
  

ServerEvents.recipes(e => {
  let ruby = (output, rubyInput) => {
    e.shaped(output, [
      'RRR',
      'RIR',
      'RRR'
    ], {
      R: 'kubejs:ruby_cluster',
      I: rubyInput
    })
  }

  //Used for Ruby Item Crafting
  ruby(Item.of('betternether:nether_ruby_chestplate', '{Damage:0}'), Item.of('minecraft:netherite_chestplate', '{Damage:0}'))
  ruby(Item.of('betternether:nether_ruby_helmet', '{Damage:0}'), Item.of('minecraft:netherite_helmet', '{Damage:0}'))
  ruby(Item.of('betternether:nether_ruby_boots', '{Damage:0}'), Item.of('minecraft:netherite_boots', '{Damage:0}'))
  ruby(Item.of('betternether:nether_ruby_leggings', '{Damage:0}'), Item.of('minecraft:netherite_leggings', '{Damage:0}'))
  ruby(Item.of('betternether:nether_ruby_sword', '{Damage:0}'), Item.of('minecraft:netherite_sword', '{Damage:0}'))
  ruby(Item.of('betternether:nether_ruby_shovel', '{Damage:0}'), Item.of('minecraft:netherite_shovel', '{Damage:0}'))
  ruby(Item.of('betternether:nether_ruby_axe', '{Damage:0}'), Item.of('minecraft:netherite_axe', '{Damage:0}'))
  ruby(Item.of('betternether:nether_ruby_pickaxe', '{Damage:0}'), Item.of('minecraft:netherite_pickaxe', '{Damage:0}'))
  ruby(Item.of('betternether:nether_ruby_hoe', '{Damage:0}'), Item.of('minecraft:netherite_hoe', '{Damage:0}'))
  ruby(Item.of('farmersknives:nether_ruby_knife', '{Damage:0}'),Item.of('farmersdelight:netherite_knife', '{Damage:0}'))
  ruby(Item.of('knavesneeds:betternether/nether_ruby/longsword', '{Damage:0}'),Item.of('simplyswords:netherite_longsword', '{Damage:0}'))
  ruby(Item.of('knavesneeds:betternether/nether_ruby/twinblade', '{Damage:0}'),Item.of('simplyswords:netherite_twinblade', '{Damage:0}'))
  ruby(Item.of('knavesneeds:betternether/nether_ruby/rapier', '{Damage:0}'),Item.of('simplyswords:netherite_rapier', '{Damage:0}'))
  ruby(Item.of('knavesneeds:betternether/nether_ruby/katana', '{Damage:0}'),Item.of('simplyswords:netherite_katana', '{Damage:0}'))
  ruby(Item.of('knavesneeds:betternether/nether_ruby/sai', '{Damage:0}'),Item.of('simplyswords:netherite_sai', '{Damage:0}'))
  ruby(Item.of('knavesneeds:betternether/nether_ruby/spear', '{Damage:0}'),Item.of('simplyswords:netherite_spear', '{Damage:0}'))
  ruby(Item.of('knavesneeds:betternether/nether_ruby/glaive', '{Damage:0}'),Item.of('simplyswords:netherite_glaive', '{Damage:0}'))
  ruby(Item.of('knavesneeds:betternether/nether_ruby/warglaive', '{Damage:0}'),Item.of('simplyswords:netherite_warglaive', '{Damage:0}'))
  ruby(Item.of('knavesneeds:betternether/nether_ruby/cutlass', '{Damage:0}'),Item.of('simplyswords:netherite_cutlass', '{Damage:0}'))
  ruby(Item.of('knavesneeds:betternether/nether_ruby/claymore', '{Damage:0}'),Item.of('simplyswords:netherite_claymore', '{Damage:0}'))
  ruby(Item.of('knavesneeds:betternether/nether_ruby/greathammer', '{Damage:0}'),Item.of('simplyswords:netherite_greathammer', '{Damage:0}'))
  ruby(Item.of('knavesneeds:betternether/nether_ruby/greataxe', '{Damage:0}'),Item.of('simplyswords:netherite_greataxe', '{Damage:0}'))
  ruby(Item.of('knavesneeds:betternether/nether_ruby/chakram', '{Damage:0}'),Item.of('simplyswords:netherite_chakram', '{Damage:0}'))
  ruby(Item.of('knavesneeds:betternether/nether_ruby/scythe', '{Damage:0}'),Item.of('simplyswords:netherite_scythe', '{Damage:0}'))
  ruby(Item.of('knavesneeds:betternether/nether_ruby/halberd', '{Damage:0}'),Item.of('simplyswords:netherite_halberd', '{Damage:0}'))

})

ServerEvents.recipes(e => {
  let ruby = (output, rubyInput) => {
    e.shaped(output, [
      ' R ',
      'RIR',
      ' R '
    ], {
      R: 'kubejs:aeter_ruby_compound',
      I: rubyInput
    })
  }

  //Used for Ruby Item Crafting
  ruby(Item.of('betterend:aeternium_chestplate', '{Damage:0}'), Item.of('betternether:nether_ruby_chestplate', '{Damage:0}'))
  ruby(Item.of('betterend:aeternium_helmet ', '{Damage:0}'),    Item.of('betternether:nether_ruby_helmet', '{Damage:0}'))
  ruby(Item.of('betterend:aeternium_boots', '{Damage:0}'),      Item.of('betternether:nether_ruby_boots', '{Damage:0}'))
  ruby(Item.of('betterend:aeternium_leggings', '{Damage:0}'),   Item.of('betternether:nether_ruby_leggings', '{Damage:0}'))
  ruby(Item.of('betterend:aeternium_sword', '{Damage:0}'),      Item.of('betternether:nether_ruby_sword', '{Damage:0}'))
  ruby(Item.of('betterend:aeternium_shovel', '{Damage:0}'),     Item.of('betternether:nether_ruby_shovel', '{Damage:0}'))
  ruby(Item.of('betterend:aeternium_axe', '{Damage:0}'),        Item.of('betternether:nether_ruby_axe', '{Damage:0}'))
  ruby(Item.of('betterend:aeternium_pickaxe', '{Damage:0}'),    Item.of('betternether:nether_ruby_pickaxe', '{Damage:0}'))
  ruby(Item.of('betterend:aeternium_hoe', '{Damage:0}'),        Item.of('betternether:nether_ruby_hoe', '{Damage:0}'))
  ruby(Item.of('farmersknives:aeternium_knife', '{Damage:0}'),  Item.of('farmersknives:nether_ruby_knife', '{Damage:0}'))
  ruby(Item.of('knavesneeds:betterend/aeternium/longsword'),    Item.of('knavesneeds:betternether/nether_ruby/longsword'))
  ruby(Item.of('knavesneeds:betterend/aeternium/twinblade'),    Item.of('knavesneeds:betternether/nether_ruby/twinblade'))
  ruby(Item.of('knavesneeds:betterend/aeternium/rapier'),       Item.of('knavesneeds:betternether/nether_ruby/rapier'))
  ruby(Item.of('knavesneeds:betterend/aeternium/katana'),       Item.of('knavesneeds:betternether/nether_ruby/katana'))
  ruby(Item.of('knavesneeds:betterend/aeternium/sai'),          Item.of('knavesneeds:betternether/nether_ruby/sai'))
  ruby(Item.of('knavesneeds:betterend/aeternium/spear'),        Item.of('knavesneeds:betternether/nether_ruby/spear'))
  ruby(Item.of('knavesneeds:betterend/aeternium/glaive'),       Item.of('knavesneeds:betternether/nether_ruby/glaive'))
  ruby(Item.of('knavesneeds:betterend/aeternium/warglaive'),    Item.of('knavesneeds:betternether/nether_ruby/warglaive'))
  ruby(Item.of('knavesneeds:betterend/aeternium/cutlass'),      Item.of('knavesneeds:betternether/nether_ruby/cutlass'))
  ruby(Item.of('knavesneeds:betterend/aeternium/claymore'),     Item.of('knavesneeds:betternether/nether_ruby/claymore'))
  ruby(Item.of('knavesneeds:betterend/aeternium/greathammer'),  Item.of('knavesneeds:betternether/nether_ruby/greathammer'))
  ruby(Item.of('knavesneeds:betterend/aeternium/greataxe'),     Item.of('knavesneeds:betternether/nether_ruby/greataxe'))
  ruby(Item.of('knavesneeds:betterend/aeternium/chakram'),      Item.of('knavesneeds:betternether/nether_ruby/chakram'))
  ruby(Item.of('knavesneeds:betterend/aeternium/scythe'),       Item.of('knavesneeds:betternether/nether_ruby/scythe'))
  ruby(Item.of('knavesneeds:betterend/aeternium/halberd'),      Item.of('knavesneeds:betternether/nether_ruby/halberd'))

})

ServerEvents.recipes(e => {
  let ruby = (output, rubyInput) => {
    e.shaped(output, [
      'RRR',
      'RIR',
      'RRR'
    ], {
      R: 'kubejs:gobber_compound',
      I: rubyInput
    })
  }

  //Used for Ruby Item Crafting
  ruby(Item.of('gobber2:gobber2_helmet', '{Damage:0}'),                  Item.of('betterend:aeternium_helmet', '{Damage:0}'),       ) 
  ruby(Item.of('gobber2:gobber2_chestplate', '{Damage:0}'),              Item.of('betterend:aeternium_chestplate', '{Damage:0}'),   )
  ruby(Item.of('gobber2:gobber2_leggings', '{Damage:0}'),                Item.of('betterend:aeternium_leggings', '{Damage:0}'),     ) 
  ruby(Item.of('gobber2:gobber2_boots', '{Damage:0}'),                   Item.of('betterend:aeternium_boots', '{Damage:0}'),        )
  ruby(Item.of('gobber2:gobber2_sword', '{Damage:0}'),                   Item.of('betterend:aeternium_sword', '{Damage:0}'),        )
  ruby(Item.of('gobber2:gobber2_shovel', '{Damage:0}'),                  Item.of('betterend:aeternium_shovel', '{Damage:0}'),       )
  ruby(Item.of('gobber2:gobber2_axe', '{Damage:0}'),                     Item.of('betterend:aeternium_axe', '{Damage:0}'),          )
  ruby(Item.of('gobber2:gobber2_pickaxe', '{Damage:0}'),                 Item.of('betterend:aeternium_pickaxe', '{Damage:0}'),      )
  ruby(Item.of('gobber2:gobber2_hoe', '{Damage:0}'),                     Item.of('betterend:aeternium_hoe', '{Damage:0}'),          )
  ruby(Item.of('farmersknives:gobber_knife', '{Damage:0}'),              Item.of('farmersknives:aeternium_knife', '{Damage:0}'),    )
  ruby(Item.of('simplyswords:gobber_compat/gobber/gobber_longsword'),    Item.of('knavesneeds:betterend/aeternium/longsword'),      )
  ruby(Item.of('simplyswords:gobber_compat/gobber/gobber_twinblade'),    Item.of('knavesneeds:betterend/aeternium/twinblade'),      )
  ruby(Item.of('simplyswords:gobber_compat/gobber/gobber_rapier'),       Item.of('knavesneeds:betterend/aeternium/rapier'),         )
  ruby(Item.of('simplyswords:gobber_compat/gobber/gobber_katana'),       Item.of('knavesneeds:betterend/aeternium/katana'),         )
  ruby(Item.of('simplyswords:gobber_compat/gobber/gobber_sai'),          Item.of('knavesneeds:betterend/aeternium/sai'),            )
  ruby(Item.of('simplyswords:gobber_compat/gobber/gobber_spear'),        Item.of('knavesneeds:betterend/aeternium/spear'),          )
  ruby(Item.of('simplyswords:gobber_compat/gobber/gobber_glaive'),       Item.of('knavesneeds:betterend/aeternium/glaive'),         )
  ruby(Item.of('simplyswords:gobber_compat/gobber/gobber_warglaive'),    Item.of('knavesneeds:betterend/aeternium/warglaive'),      )
  ruby(Item.of('simplyswords:gobber_compat/gobber/gobber_cutlass'),      Item.of('knavesneeds:betterend/aeternium/cutlass'),        )
  ruby(Item.of('simplyswords:gobber_compat/gobber/gobber_claymore'),     Item.of('knavesneeds:betterend/aeternium/claymore'),       )
  ruby(Item.of('simplyswords:gobber_compat/gobber/gobber_greathammer'),  Item.of('knavesneeds:betterend/aeternium/greathammer'),    )
  ruby(Item.of('simplyswords:gobber_compat/gobber/gobber_greataxe'),     Item.of('knavesneeds:betterend/aeternium/greataxe'),       )
  ruby(Item.of('simplyswords:gobber_compat/gobber/gobber_chakram'),      Item.of('knavesneeds:betterend/aeternium/chakram'),        )
  ruby(Item.of('simplyswords:gobber_compat/gobber/gobber_scythe'),       Item.of('knavesneeds:betterend/aeternium/scythe'),         )
  ruby(Item.of('simplyswords:gobber_compat/gobber/gobber_halberd'),      Item.of('knavesneeds:betterend/aeternium/halberd'),        )
})

ServerEvents.recipes(e => {
  let ruby = (output, rubyInput) => {
    e.shaped(output, [
      'RRR',
      'RIR',
      'RRR'
    ], {
      R: 'kubejs:gobber_n_compound',
      I: rubyInput
    })
  }

  //Used for Ruby Item Crafting
  ruby(Item.of('gobber2:gobber2_helmet_nether', '{Damage:0}'),                         Item.of('gobber2:gobber2_helmet', '{Damage:0}'),                  ) 
  ruby(Item.of('gobber2:gobber2_chestplate_nether', '{Damage:0}'),                     Item.of('gobber2:gobber2_chestplate', '{Damage:0}'),              )
  ruby(Item.of('gobber2:gobber2_leggings_nether', '{Damage:0}'),                       Item.of('gobber2:gobber2_leggings', '{Damage:0}'),                ) 
  ruby(Item.of('gobber2:gobber2_boots_nether', '{Damage:0}'),                          Item.of('gobber2:gobber2_boots', '{Damage:0}'),                   )
  ruby(Item.of('gobber2:gobber2_sword_nether', '{Damage:0}'),                          Item.of('gobber2:gobber2_sword', '{Damage:0}'),                   )
  ruby(Item.of('gobber2:gobber2_shovel_nether', '{Damage:0}'),                         Item.of('gobber2:gobber2_shovel', '{Damage:0}'),                  )
  ruby(Item.of('gobber2:gobber2_axe_nether', '{Damage:0}'),                            Item.of('gobber2:gobber2_axe', '{Damage:0}'),                     )
  ruby(Item.of('gobber2:gobber2_pickaxe_nether', '{Damage:0}'),                        Item.of('gobber2:gobber2_pickaxe', '{Damage:0}'),                 )
  ruby(Item.of('gobber2:gobber2_hoe_nether', '{Damage:0}'),                            Item.of('gobber2:gobber2_hoe', '{Damage:0}'),                     )
  ruby(Item.of('farmersknives:nether_gobber_knife', '{Damage:0}'),                     Item.of('farmersknives:gobber_knife', '{Damage:0}'),              )
  ruby(Item.of('simplyswords:gobber_compat/gobber_nether/gobber_nether_longsword'),    Item.of('simplyswords:gobber_compat/gobber/gobber_longsword'),    )
  ruby(Item.of('simplyswords:gobber_compat/gobber_nether/gobber_nether_twinblade'),    Item.of('simplyswords:gobber_compat/gobber/gobber_twinblade'),    )
  ruby(Item.of('simplyswords:gobber_compat/gobber_nether/gobber_nether_rapier'),       Item.of('simplyswords:gobber_compat/gobber/gobber_rapier'),       )
  ruby(Item.of('simplyswords:gobber_compat/gobber_nether/gobber_nether_katana'),       Item.of('simplyswords:gobber_compat/gobber/gobber_katana'),       )
  ruby(Item.of('simplyswords:gobber_compat/gobber_nether/gobber_nether_sai'),          Item.of('simplyswords:gobber_compat/gobber/gobber_sai'),          )
  ruby(Item.of('simplyswords:gobber_compat/gobber_nether/gobber_nether_spear'),        Item.of('simplyswords:gobber_compat/gobber/gobber_spear'),        )
  ruby(Item.of('simplyswords:gobber_compat/gobber_nether/gobber_nether_glaive'),       Item.of('simplyswords:gobber_compat/gobber/gobber_glaive'),       )
  ruby(Item.of('simplyswords:gobber_compat/gobber_nether/gobber_nether_warglaive'),    Item.of('simplyswords:gobber_compat/gobber/gobber_warglaive'),    )
  ruby(Item.of('simplyswords:gobber_compat/gobber_nether/gobber_nether_cutlass'),      Item.of('simplyswords:gobber_compat/gobber/gobber_cutlass'),      )
  ruby(Item.of('simplyswords:gobber_compat/gobber_nether/gobber_nether_claymore'),     Item.of('simplyswords:gobber_compat/gobber/gobber_claymore'),     )
  ruby(Item.of('simplyswords:gobber_compat/gobber_nether/gobber_nether_greathammer'),  Item.of('simplyswords:gobber_compat/gobber/gobber_greathammer'),  )
  ruby(Item.of('simplyswords:gobber_compat/gobber_nether/gobber_nether_greataxe'),     Item.of('simplyswords:gobber_compat/gobber/gobber_greataxe'),     )
  ruby(Item.of('simplyswords:gobber_compat/gobber_nether/gobber_nether_chakram'),      Item.of('simplyswords:gobber_compat/gobber/gobber_chakram'),      )
  ruby(Item.of('simplyswords:gobber_compat/gobber_nether/gobber_nether_scythe'),       Item.of('simplyswords:gobber_compat/gobber/gobber_scythe'),       )
  ruby(Item.of('simplyswords:gobber_compat/gobber_nether/gobber_nether_halberd'),      Item.of('simplyswords:gobber_compat/gobber/gobber_halberd'),      )
})

ServerEvents.recipes(e => {
  let ruby = (output, rubyInput) => {
    e.shaped(output, [
      'RRR',
      'RIR',
      'RRR'
    ], {
      R: 'kubejs:gobber_e_compound',
      I: rubyInput
    })
  }

  //Used for Ruby Item Crafting
  ruby(Item.of('gobber2:gobber2_helmet_end', '{Damage:0}'),                        Item.of('gobber2:gobber2_helmet_nether', '{Damage:0}'),                          ) 
  ruby(Item.of('gobber2:gobber2_chestplate_end', '{Damage:0}'),                    Item.of('gobber2:gobber2_chestplate_nether', '{Damage:0}'),                      )
  ruby(Item.of('gobber2:gobber2_leggings_end', '{Damage:0}'),                      Item.of('gobber2:gobber2_leggings_nether', '{Damage:0}'),                        ) 
  ruby(Item.of('gobber2:gobber2_boots_end', '{Damage:0}'),                         Item.of('gobber2:gobber2_boots_nether', '{Damage:0}'),                           )
  ruby(Item.of('gobber2:gobber2_sword_end', '{Damage:0}'),                         Item.of('gobber2:gobber2_sword_nether', '{Damage:0}'),                           )
  ruby(Item.of('gobber2:gobber2_shovel_end', '{Damage:0}'),                        Item.of('gobber2:gobber2_shovel_nether', '{Damage:0}'),                          )
  ruby(Item.of('gobber2:gobber2_axe_end', '{Damage:0}'),                           Item.of('gobber2:gobber2_axe_nether', '{Damage:0}'),                             )
  ruby(Item.of('gobber2:gobber2_pickaxe_end', '{Damage:0}'),                       Item.of('gobber2:gobber2_pickaxe_nether', '{Damage:0}'),                         )
  ruby(Item.of('gobber2:gobber2_hoe_end', '{Damage:0}'),                           Item.of('gobber2:gobber2_hoe_nether', '{Damage:0}'),                             )
  ruby(Item.of('farmersknives:end_gobber_knife', '{Damage:0}'),                    Item.of('farmersknives:nether_gobber_knife', '{Damage:0}'),                      )
  ruby(Item.of('simplyswords:gobber_compat/gobber_end/gobber_end_longsword'),   Item.of('simplyswords:gobber_compat/gobber_nether/gobber_nether_longsword'),     )
  ruby(Item.of('simplyswords:gobber_compat/gobber_end/gobber_end_twinblade'),   Item.of('simplyswords:gobber_compat/gobber_nether/gobber_nether_twinblade'),     )
  ruby(Item.of('simplyswords:gobber_compat/gobber_end/gobber_end_rapier'),      Item.of('simplyswords:gobber_compat/gobber_nether/gobber_nether_rapier'),        )
  ruby(Item.of('simplyswords:gobber_compat/gobber_end/gobber_end_katana'),      Item.of('simplyswords:gobber_compat/gobber_nether/gobber_nether_katana'),        )
  ruby(Item.of('simplyswords:gobber_compat/gobber_end/gobber_end_sai'),         Item.of('simplyswords:gobber_compat/gobber_nether/gobber_nether_sai'),           )
  ruby(Item.of('simplyswords:gobber_compat/gobber_end/gobber_end_spear'),       Item.of('simplyswords:gobber_compat/gobber_nether/gobber_nether_spear'),         )
  ruby(Item.of('simplyswords:gobber_compat/gobber_end/gobber_end_glaive'),      Item.of('simplyswords:gobber_compat/gobber_nether/gobber_nether_glaive'),        )
  ruby(Item.of('simplyswords:gobber_compat/gobber_end/gobber_end_warglaive'),   Item.of('simplyswords:gobber_compat/gobber_nether/gobber_nether_warglaive'),     )
  ruby(Item.of('simplyswords:gobber_compat/gobber_end/gobber_end_cutlass'),     Item.of('simplyswords:gobber_compat/gobber_nether/gobber_nether_cutlass'),       )
  ruby(Item.of('simplyswords:gobber_compat/gobber_end/gobber_end_claymore'),    Item.of('simplyswords:gobber_compat/gobber_nether/gobber_nether_claymore'),      )
  ruby(Item.of('simplyswords:gobber_compat/gobber_end/gobber_end_greathammer'), Item.of('simplyswords:gobber_compat/gobber_nether/gobber_nether_greathammer'),   )
  ruby(Item.of('simplyswords:gobber_compat/gobber_end/gobber_end_greataxe'),    Item.of('simplyswords:gobber_compat/gobber_nether/gobber_nether_greataxe'),      )
  ruby(Item.of('simplyswords:gobber_compat/gobber_end/gobber_end_chakram'),     Item.of('simplyswords:gobber_compat/gobber_nether/gobber_nether_chakram'),       )
  ruby(Item.of('simplyswords:gobber_compat/gobber_end/gobber_end_scythe'),      Item.of('simplyswords:gobber_compat/gobber_nether/gobber_nether_scythe'),        )
  ruby(Item.of('simplyswords:gobber_compat/gobber_end/gobber_end_halberd'),     Item.of('simplyswords:gobber_compat/gobber_nether/gobber_nether_halberd'),       )
})


