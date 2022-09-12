//════════════(00)════════════════\\
//
//          RED DRAGON v6.0
//
//════════════(00)════════════════\\

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\

global.alivemsg = `My name is RED DRAGON🔥
My Creator is [ᴿⁱʸᵃˡ 𝙺𝙸𝙽𝙶 𝙳𝙰𝚁𝙺 🅳𝙴𝚅𝙸𝙻࿐ ]` //Costomize Alive Message (type your message in `▁▁▁▁▁▂▃▄▅▆▇█▇▆▅▄▃
📤I am alive now😇🙏🥺මම රෙඩ් ඩ්‍රැගන් බොට්🙏🥺
🤷‍♀️How can I help you? [ᴿⁱʸᵃˡ 𝙺𝙸𝙽𝙶 𝙳𝙰𝚁𝙺 🅳𝙴𝚅𝙸𝙻࿐ ]
 
ආදරයෙන් සාදරයෙන් පිලිගන්නවා ඔබව

වට්සැප් පැකේජ් එකෙන්ම සින්දු , 

වීඩියෝ ඩවුන්ලෝඩ් කරමු.

තව ගොඩක් දේවල් තියෙනවා

පහල තියෙන කමාන්ඩ් Use කරන්න

මුලට ඩොට් එක ( . )අනිවාර්ය නෑ

.alive = බොට් වැඩද බැලීමට

.song = සිංදු download කිරීමට

.video = video download කිරීමට

.menu = වෙනත් command` )

global.owner = ['+94774967570'] //Owner number in aive msg
global.premium = ['+94774967570'] //Owner Number info
global.ownernomer = '+94774967570' //Owner Number <<<

global.ownername = '[ᴿⁱʸᵃˡ 𝙺𝙸𝙽𝙶 𝙳𝙰𝚁𝙺 🅳𝙴𝚅𝙸𝙻࿐ ]' //Owner Name
global.botname = ' ☬RED༒DRAGON࿐' //Bot Name

global.button = '⚒ 𝙱𝙾𝚃 𝙶𝚁𝙾𝚄𝙿 ⚒' //Costomize A Button Name In Alive Message
global.btnurl = 'https://chat.whatsapp.com/Gh50I8hEVtBJGroTtQF8Ly' //Change Your Button's URL

global.region = 'India, South India, Kerala' //Country Region

global.packname = '☬RED༒DRAGON࿐' //Bot Pacage Name
global.author = '[ᴿⁱʸᵃˡ 𝙺𝙸𝙽𝙶 𝙳𝙰𝚁𝙺 🅳𝙴𝚅𝙸𝙻࿐ ]' //Author Name
global.prefa = ['','!','.','😂','❤️','💠'] //Command Prefix eg:(.alive ,alive 😂alive)
global.sessionName = 'session' //Session Name!
global.sp = '⭔' //A Charactor
global.dragonemoji = '🧩' // Menu emoji
global.footer = '©_Kumuthu.' //In list menu
global.chatbotpre = 'false'  // Chat bot true/false

global.ig = 'https://chat.whatsapp.com/Gh50I8hEVtBJGroTtQF8Ly' //⚒ 𝙱𝙾𝚃 𝙶𝚁𝙾𝚄𝙿 ⚒

global.mess = { // COSTOMIZE WITH YOUR LANGUAGE
	
    success: 'Done ✅',
    admin: 'Only Admins can use it!😉',
    botAdmin: 'Bot wants to be an Admin😥',
    owner: 'Only Owner can use this!😉',
    group: 'Feature Used Only For Groups!',
    private: 'This Features Only For Private Chat!',
    bot: 'This Feature Is Only For Bot😝',
    wait: '👉👈Pleas Wait...',
    error: 'Error!!! Maybe Api Key Is Expired🤔!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
// DO NOT CHANGE \\
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./DragonMedia/image/red-_-dragon-kumuthu.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
