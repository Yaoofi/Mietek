//some randomn't consts

const { Client, GatewayIntentBits, Guild } = require("discord.js");
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

const token =
    "MTE2MDI4NDczMDk0MDQ3MzU2Nw.GlFmQ0.m_F-P665dE99v5ADVQOOPMJcG2cDTqob1jjLoI";

//Startup

client.once("ready", () => {
    console.log(`Logged in as ${client.user.tag}`);
});

// Log every message to the console

client.on("messageCreate", async (message) => {
    console.log(
        `${Guild.name} ${message.channel.name}: ${message.author.username}: ${message.content}`,
    );
});

//Fun starts here: ↓

//Respond to messages

client.on("messageCreate", async (message) => {
    // Convert the message content to lowercase
    const content = message.content.toLowerCase();

    if (content === "działasz?") {
        await message.channel.send("Nie i chuj");
    }

    if (content === "niger" || content === "nigger") {
        await message.channel.send("To ty");
    }

    if (content === "xd") {
        await message.channel.send("Beka w chuj");
    }

    if (content === "mianowicie") {
        await message.channel.send("Czas na picie");
    }

    if (content === "ej") {
        await message.channel.send("Twój stary to gej");
    }

    if (content === "dupe sklej") {
        await message.channel.send("Ta? to sie pierdol");
    }

    if (content === "kup se klej") {
        await message.channel.send("matke sklej");
    }

    if (content === "kurwa") {
        await message.channel.send("NIE PRZEKLINAJ, SMIECIU JEBANY");
    }

    if (content === "kys") {
        await message.channel.send("nie bo ty");
    }

    if (content === "<@1160284730940473567>") {
        await message.channel.send("Umyj jajo");
    }

    if (content === "Sigma") {
        await message.channel.send("Notacja sigma (albo po prostu znak sumy) pozwala nam zgrabnie i krótko zapisywać długie sumy.");
    }
});

client.login(token);
