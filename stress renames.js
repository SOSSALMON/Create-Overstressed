//Why no worky, what the fuk?
ClientEvents.lang ('en_us', event => {
    const rename = (item, newName) => event.add(Item.of(item).item.id(), newName)
    rename('things:hardening_catalyst', 'Eternal Charm')
})
//maybe work now?