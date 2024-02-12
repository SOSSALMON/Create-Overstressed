Platform.mods.kubejs.name = 'Overstressed Tweaks'

//took like 8 hours to find out how to make (that's crazy)
    StartupEvents.registry('item', event => {
        event.create('lifeforce_berry').displayName('Lifeforce Berry')
        .tag('artifacts:artifacts')
        .tag('trinkets:legs/belt')
        .subtypes(stack => {
          let collection = Utils.newList()
          stack.nbt = `{TrinketAttributeModifiers: [{AttributeName: 'generic.max_health',   Name: 'generic.max_health', Amount: 20, Operation: 0, UUID: [I; 42853, 1689024593, -201178, -1559272105]}]}`
          collection.add(stack)
          return collection
        })
        
      })

ItemEvents.modification(event => {
  event.modify('kubejs:lifeforce_berry', item => {
    item.maxStackSize = 1
  })
})

StartupEvents.registry('item', event => {
  event.create('clockwork_lifeforce_reactor').displayName('Clockwork Lifeforce Reactor')
  .tag('artifacts:artifacts')
  .tag('trinkets:legs/belt')
  .subtypes(stack => {
    let collection = Utils.newList()
    stack.nbt = `{TrinketAttributeModifiers: [{AttributeName: 'generic.max_health',   Name: 'generic.max_health', Amount: 40, Operation: 0, UUID: [I; 42853, 1689024593, -201178, -1559272105]}]}`
    collection.add(stack)
    return collection
  })
})
  ItemEvents.modification(event => {
    event.modify('kubejs:clockwork_lifeforce_reactor', item => {
      item.maxStackSize = 1
    })
  })
  

//Don't even get me started on the Stack.nbt string
    StartupEvents.registry('item', event => {
        event.create('exo_gauntlet').displayName('Exo Gauntlet')
        .tag('artifacts:artifacts')
        .tag('trinkets:offhand/glove')
        .tag('trinkets:hand/glove')
        .subtypes(stack => {
          let collection = Utils.newList()
          stack.nbt = `{TrinketAttributeModifiers: [{AttributeName: 'generic.attack_damage',   Name: 'generic.attack_damage', Amount: 8, Operation: 0, UUID: [I; 1561088066, 2141800799, -1303046299, 692194761]},{AttributeName: 'generic.attack_speed',   Name: 'generic.attack_speed', Amount: 4, Operation: 0, UUID: [I; 973381748, 42879359, -1405446379, -80184484]},{AttributeName: 'generic.attack_speed',   Name: 'generic.attack_speed', Amount: 4, Operation: 0, UUID: [I; 1517400900, 1597654445, -1916448288, 1218812680]},{AttributeName: 'generic.attack_damage',   Name: 'generic.attack_damage', Amount: 8, Operation: 0, UUID: [I; 2145348242, 1121337601, -1706345273, 1303810952]}]}`
          collection.add(stack)
          return collection
      })
      
    })

ItemEvents.modification(event => {
  event.modify('kubejs:exo_gauntlet', item => {
    item.maxStackSize = 1
  })
})


ItemEvents.modification(event => {
  event.modify('kubejs:honey_roll', item => {
    item.foodProperties = food => {
        food.hunger(9)
        food.saturation(.4)
        food.fastToEat(true)
      }
    })
  })

ItemEvents.modification(event => {
  event.modify('kubejs:aurora_roll', item => {
    item.foodProperties = food => {
        food.hunger(12)
        food.saturation(1)
        food.fastToEat(true)
      }
    })
  })


ItemEvents.modification(event => {
  event.modify('kubejs:polished_rose_quartz_roll', item => {
    item.foodProperties = food => {
        food.hunger(10)
        food.saturation(.5)
        food.fastToEat(true)
      }
    })
  })

  
  ItemEvents.modification(event => {
    event.modify('kubejs:striped_delight', item => {
      item.foodProperties = food => {
          food.hunger(9)
          food.saturation(.4)
          food.fastToEat(true)
        }
      })
    })

    StartupEvents.registry('item', event => {
      event.create('aurora_roll').displayName('Aurora Roll')
      event.create('polished_rose_quartz_roll').displayName('Polished Rose Quartz Roll')
      event.create('striped_delight').displayName('Striped Delight')
      event.create('honey_roll').displayName('Honey Roll')
      event.create('netherite_fragment').displayName('Netherite Fragment')
      event.create('dwellersheart').displayName("Dweller's Heart")
      event.create('ruby_cluster').displayName('Ruby Cluster')
      event.create('gobber_compound').displayName('Gobber Compound')
      event.create('gobber_n_compound').displayName('Nether Gobber Compound')
      event.create('gobber_e_compound').displayName('End Gobber Compound')
      event.create('aeter_ruby_compound').displayName('Ruby Derived Aeternium Liquid Plating')
      event.create('aquarium_nexus_pearl').displayName('Aquarium Nexus Pearl')
      event.create('blazing_banglum_plate').displayName('Blazing Banglum Plate')
      event.create('osmium_parts').displayName('Osmium Parts')
      event.create('pure_kyber_crystal').displayName('Pure Kyber Crystal')
      event.create('runite_scales').displayName('Runite Scales')
      event.create('polished_stormyx_shell').displayName('Polished Stormyx Shell')
      event.create('liquid_palladium_smart_metal').displayName('Liquid Palladium Smart Metal')
      event.create('carmot_forged_plate').displayName('Solid Carmot Plate')
      event.create('enchanted_mythril_slate').displayName('Enchanted Mythril Slate')
      event.create('magically_reinforced_orichalcum').displayName('Magically Reinforced Orichalcum')
      event.create('hellforged_adamantite').displayName('Hellforged Adamantite')
      event.create('hamon_laced_star_platinum_plate').displayName('Hamon Laced Star Platinum Plate')
      event.create('startouched_celestium_crystal').displayName('Startouched Celestium Crystal')
      event.create('charged_metallurgium').displayName('Charged Metallurgium')
      event.create('aeternium_sheet').displayName('Aeternium Sheet')
      event.create('tachyonic_mechanism').displayName('Tachyonic Mechanism')
      event.create('aurora_coating').displayName('Aurora Grit')
      event.create('polished_aurora_crystal').displayName('Polished Aurora Crystal')
      event.create('auric_electron_tube').displayName('Auric Electron Tube')
      event.create('aeternium_inlaid_precision_mechanism').displayName('Aeternium Inlaid Precision Mechanism')
      event.create('compression_mechanism').displayName('Compression Mechanism')
      event.create('enlarging_mechanism').displayName('Enlarging Mechanism')
      event.create('reforming_mechanism').displayName('Reforming Mechanism')
      event.create('integrated_circuit').displayName('Integrated Circuit')
      event.create('overclocked_tube').displayName('Overclocked Tube')
      event.create('overcharged_alloy').displayName('Overcharged Alloy')
      event.create('incomplete_compression_mechanism').displayName('Incomplete Compression Mechanism')
      event.create('incomplete_enlarging_mechanism').displayName('Incomplete Enlarging Mechanism')
      event.create('incomplete_reforming_mechanism').displayName('Incomplete Reforming Mechanism')
      event.create('incomplete_overclocked_tube').displayName('Incomplete Overclocked Tube')
      event.create('incomplete_integrated_circuit').displayName('Incomplete Integrated Circuit')
      event.create('incomplete_tachyonic_mechanism').displayName('Incomplete Tachyonic Mechanism')
      event.create('incomplete_aeternium_inlaid_precision_mechanism').displayName('Incomplete Aeternium Inlaid Precision Mechanism')
      event.create('undercharged_alloy').displayName('Undercharged Alloy')
      

      event.create('adrenaline').displayName('Adrenaline')
      event.create('advancedplating2').displayName('Advanced Plating')
      event.create('artificialmuscle').displayName('Artificial Muscle')
      event.create('basicplating2').displayName('Basic Plating')
      event.create('charm_base').displayName('Base Charm')
      event.create('computerchip').displayName('Computer Chip')
      event.create('controlcircuit').displayName('Control Circuit')
      event.create('coolingsystem').displayName('Cooling Systems')
      event.create('machine_casing').displayName('Machine Casing')
      event.create('empty_vial').displayName('Vial')
      event.create('fieldemitter').displayName('Field Emitter')
      event.create('gliderwing').displayName('Machinery Wing')
      event.create('gravitydrive').displayName('Gravity Drive')
      event.create('heart').displayName('Bio Heart')
      event.create('heatgenerator').displayName('Heat Generator')
      event.create('heatresistantplating2').displayName('Heat Resistant Plating')
      event.create('hologramemitter').displayName('Hologram Emitter')
      event.create('magneta').displayName('Electromagnet')
      event.create('ionthruster').displayName('Ion Thruster')
      event.create('kineticgen').displayName('Kinetic Generator')
      event.create('lvbattery').displayName('Low Voltage Battery')
      event.create('lvcapacitor').displayName('Low Voltage Capacitor')
      event.create('mvbattery').displayName('Medium Voltage Battery')
      event.create('mvcapacitor').displayName('Medium Voltage Capacitor')
      event.create('crystalcapacitor').displayName('High Voltage Battery')
      event.create('hvcapacitor').displayName('High Voltage Capacitor')
      event.create('magnetmodule').displayName('Magnet Module')
      event.create('me_conversion_matrix').displayName('Matter/Energy Conversion Matrix')
      event.create('microbattery').displayName('Micro Battery')
      event.create('myofiber').displayName('Myo-Fiber')
      event.create('t_star').displayName('Normality Engine')
      event.create('nexuscrystal').displayName('Nexus Crystal')
      event.create('paste').displayName('Myo-Paste')
      event.create('pattern_drive').displayName('Pattern Drive')
      event.create('pattern_drive_full').displayName('Full Pattern Drive')
      event.create('penicillium').displayName('Penicillium')
      event.create('petridish').displayName('Petridish')
      event.create('petridish_mold').displayName('Petridish- Sample:Mold')
      event.create('research_notes').displayName('Higher Order Physics Notes')
      event.create('rubberhose').displayName('Rubber Hose')
      event.create('sand_chunks').displayName('Sand Chunks')
      event.create('servo').displayName('Servo')
      event.create('silicon').displayName('Silicon Ingot')
      event.create('silicon_compound').displayName('Silicon Compound')
      event.create('solenoid').displayName('Solenoid')
      event.create('soul_crystal').displayName('Soul Crystal')
      event.create('spacetime_equalizer').displayName('Spacetime Equalizer')
      event.create('g_core_inactive').displayName('Inactive Gaia Core')
      event.create('g_core_active').displayName('Active Gaia Core')
      event.create('n_core_inactive').displayName('Inactive Nyx Core')
      event.create('n_core_active').displayName('Active Nyx Core')
      event.create('syringe_adrenaline').displayName('Adrenalin Syringe')
      event.create('silicon_plate').displayName('Silicon Plate')
      event.create('wiring').displayName('Wiring')
    })


    StartupEvents.registry("block", (event) => {
      event.create("aeternium_casing").soundType('netherite_block')
      event.create("heavy_machinery_casing").soundType('netherite_block')
      event.create("heavy_durasteel_casing").soundType('netherite_block')
      event.create("steel_casing").soundType('netherite_block')
      event.create("steel_fluid_tank").soundType('netherite_block')
    })