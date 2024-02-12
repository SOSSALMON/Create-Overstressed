
/*
LootJS.modifiers((event) => {
    event.addBlockLootModifier('kubejs:rockslate_thorium').addLoot("minecraft:flint");
});
*/

LootJS.modifiers((event) => {
    event
        .addBlockLootModifier('kubejs:rockslate_thorium')
        .removeLoot(Ingredient.all)
        .addSequenceLoot(
            LootEntry.of('create_new_age:thorium').when((c) => c.randomChance(1)),
            LootEntry.of('create_new_age:thorium').when((c) => c.randomChance(0.3)),
            LootEntry.of('create_new_age:thorium').when((c) => c.randomChance(0.7))
        );

    event
        .addBlockLootModifier('kubejs:rockslate_platinum')
        .removeLoot(Ingredient.all)
        .addSequenceLoot(
            LootEntry.of('mythicmetals:raw_platinum').when((c) => c.randomChance(1)),
            LootEntry.of('mythicmetals:raw_platinum').when((c) => c.randomChance(0.3)),
            LootEntry.of('mythicmetals:raw_platinum').when((c) => c.randomChance(0.7))
        );
    
        event
        .addBlockLootModifier('kubejs:rockslate_adamantite')
        .removeLoot(Ingredient.all)
        .addSequenceLoot(
            LootEntry.of('mythicmetals:raw_adamantite').when((c) => c.randomChance(1)),
            LootEntry.of('mythicmetals:raw_adamantite').when((c) => c.randomChance(0.3)),
            LootEntry.of('mythicmetals:raw_adamantite').when((c) => c.randomChance(0.7))
        );

        event
        .addBlockLootModifier('kubejs:rockslate_aquarium')
        .removeLoot(Ingredient.all)
        .addSequenceLoot(
            LootEntry.of('mythicmetals:raw_aquarium').when((c) => c.randomChance(1)),
            LootEntry.of('mythicmetals:raw_aquarium').when((c) => c.randomChance(0.3)),
            LootEntry.of('mythicmetals:raw_aquarium').when((c) => c.randomChance(0.7))
        );

        event
        .addBlockLootModifier('kubejs:rockslate_banglum')
        .removeLoot(Ingredient.all)
        .addSequenceLoot(
            LootEntry.of('mythicmetals:raw_banglum').when((c) => c.randomChance(1)),
            LootEntry.of('mythicmetals:raw_banglum').when((c) => c.randomChance(0.3)),
            LootEntry.of('mythicmetals:raw_banglum').when((c) => c.randomChance(0.7))
        );

        event
        .addBlockLootModifier('kubejs:rockslate_carmot')
        .removeLoot(Ingredient.all)
        .addSequenceLoot(
            LootEntry.of('mythicmetals:raw_carmot').when((c) => c.randomChance(1)),
            LootEntry.of('mythicmetals:raw_carmot').when((c) => c.randomChance(0.3)),
            LootEntry.of('mythicmetals:raw_carmot').when((c) => c.randomChance(0.7))
        );

        event
        .addBlockLootModifier('kubejs:rockslate_gobber')
        .removeLoot(Ingredient.all)
        .addSequenceLoot(
            LootEntry.of('gobber2:gobber2_globette').when((c) => c.randomChance(1)),
            LootEntry.of('gobber2:gobber2_globette').when((c) => c.randomChance(0.3)),
            LootEntry.of('gobber2:gobber2_globette').when((c) => c.randomChance(0.7))
        );

        event
        .addBlockLootModifier('kubejs:rockslate_kyber')
        .removeLoot(Ingredient.all)
        .addSequenceLoot(
            LootEntry.of('mythicmetals:raw_kyber').when((c) => c.randomChance(1)),
            LootEntry.of('mythicmetals:raw_kyber').when((c) => c.randomChance(0.3)),
            LootEntry.of('mythicmetals:raw_kyber').when((c) => c.randomChance(0.7))
        );

        event
        .addBlockLootModifier('kubejs:rockslate_manganese')
        .removeLoot(Ingredient.all)
        .addSequenceLoot(
            LootEntry.of('mythicmetals:raw_manganese').when((c) => c.randomChance(1)),
            LootEntry.of('mythicmetals:raw_manganese').when((c) => c.randomChance(0.3)),
            LootEntry.of('mythicmetals:raw_manganese').when((c) => c.randomChance(0.7))
        );

        event
        .addBlockLootModifier('kubejs:rockslate_morkite')
        .removeLoot(Ingredient.all)
        .addWeightedLoot([5, 10], [Item.of('mythicmetals:morkite').withChance(100)]
        );

        event
        .addBlockLootModifier('kubejs:rockslate_mythril')
        .removeLoot(Ingredient.all)
        .addSequenceLoot(
            LootEntry.of('mythicmetals:raw_mythril').when((c) => c.randomChance(1)),
            LootEntry.of('mythicmetals:raw_mythril').when((c) => c.randomChance(0.3)),
            LootEntry.of('mythicmetals:raw_mythril').when((c) => c.randomChance(0.7))
        );

        event
        .addBlockLootModifier('kubejs:rockslate_orichalcum')
        .removeLoot(Ingredient.all)
        .addSequenceLoot(
            LootEntry.of('mythicmetals:raw_orichalcum').when((c) => c.randomChance(1)),
            LootEntry.of('mythicmetals:raw_orichalcum').when((c) => c.randomChance(0.3)),
            LootEntry.of('mythicmetals:raw_orichalcum').when((c) => c.randomChance(0.7))
        );

        event
        .addBlockLootModifier('kubejs:rockslate_osmium')
        .removeLoot(Ingredient.all)
        .addSequenceLoot(
            LootEntry.of('mythicmetals:raw_osmium').when((c) => c.randomChance(1)),
            LootEntry.of('mythicmetals:raw_osmium').when((c) => c.randomChance(0.3)),
            LootEntry.of('mythicmetals:raw_osmium').when((c) => c.randomChance(0.7))
        );

        event
        .addBlockLootModifier('kubejs:rockslate_prometheum')
        .removeLoot(Ingredient.all)
        .addSequenceLoot(
            LootEntry.of('mythicmetals:raw_prometheum').when((c) => c.randomChance(1)),
            LootEntry.of('mythicmetals:raw_prometheum').when((c) => c.randomChance(0.3)),
            LootEntry.of('mythicmetals:raw_prometheum').when((c) => c.randomChance(0.7))
        );
});