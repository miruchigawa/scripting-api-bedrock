import { world } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";

console.warn("Started scripting...");


const { afterEvents } = world;


// Detect player has hook item
afterEvents.itemStartUseOn.subscribe((data) => {
    const { block, source } = data;
    
    console.warn(block.typeId);
    if (block.typeId === "minecraft:bed"){
        showMenu(source);
    }
    //console.warn(source);
});

function showMenu(player){
    const form = new ActionFormData();
    form.title("Sleep menu.");
    form.body("Select bellow rest until");
    form.button("Normal");
    form.button("Afternoon");
    form.button("Night");
    
    form.show(player).then((response) => {
        if (response.canceled) return console.warn("User has canceled.")
        console.warn(`User selected ${response.selection}`)
    })
}