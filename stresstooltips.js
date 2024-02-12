//worky :>
ItemEvents.tooltip(event => {

    event.addAdvanced(['kubejs:lifeforce_berry'], (item, advanced, text) => {
            text.add(1, [
                Text.of('When the hearts are plentiful').gold()
            ])
    })
    event.addAdvanced(['kubejs:aeternium_inlaid_precision_mechanism'], (item, advanced, text) => {
        text.add(1, [
            Text.of('I Hope you know what you are doing').aqua()
        ])
    })
})