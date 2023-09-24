import { world } from "@minecraft/server";

world.afterEvents.chatSend.subscribe((data) => {
    const player = data.sender;
    
    switch(data.message) {
        case "hello":
            player.sendMessage("Hello!");
            break;
        default:
            return player.sendMessage("I don't understand wht are you saying?");
    }
});