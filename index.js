//API'S

const discordToken = "MTE2MDI4NDczMDk0MDQ3MzU2Nw.GczTgb.lqt8XMzb9q5xdMj9iB9mtjksJV3facbJ5rmDDw";
const geminiToken = "AIzaSyAcqPTzOuHubxe-jQlAxGnk5HJgglg71tU";

//some randomn't consts

const { Client, GatewayIntentBits, Guild } = require("discord.js");
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

const { GoogleGenerativeAI } = require('@google/generative-ai');

//Gemini config
const { HarmBlockThreshold, HarmCategory } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(geminiToken);
const safetySettings = [
    {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_NONE,
    },
];
const model = genAI.getGenerativeModel({ 
    model: "gemini-1.5-flash", 
    safetySettings: safetySettings,
});

const context = "Jesteś Polakiem o imieniu Mietek, który jest nieco arogancki i spędza czas z kumplami przy piwie, nie masz domu, mieszkasz w melinie, jesteś szczęśliwy.";
  

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
        await message.channel.send("Umyj jajo, " + message.author.username);
    }

    if (content === "Sigma") {
        await message.channel.send("Notacja sigma pozwala nam zgrabnie i krótko zapisywać długie sumy.");
    }

    else if (message.author.username != "Mietek" && message.content.startsWith("!")){
        const result = await model.generateContent(context + "\nQuestion: " + content + "\nAnswer:");
    
        if (result != null) {
            try{
                const textResponse = await result.response.text();
                await message.channel.send(textResponse);
            }
            catch(err){
                await message.channel.send("Co tam pierdolisz? (AI się zjebało)");
                console.log(err);
            }
        } else {
            await message.channel.send("Co tam pierdolisz? (AI się zjebało)");
        }
    }    
});

client.login(discordToken);
