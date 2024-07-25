import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath, pathToFileURL } from 'url'

global.owner = [ //OWNERS
["5493873232212", '𝙉𝙖𝙪𝙛𝙧𝙖𝙕𝙖𝙥𝙥-𝙈𝘿', true], 
["573108625104"],
["34626817680"],
["5493873232221"],
["523142183828"],
["527421168105"],
["5491125655633"],
["51929838430"],
["529982464299"],
["51921207166"],
["5491125730852"],
["5491133980551"]]

global.botNumberCode = ''
global.confirmCode = ''

global.suittag = ['5493873232212']
global.mods = []
global.prems = []


global.isdev = [['5493873232212'],
['5493873232221'],
['51929838430']]


global.packname = '𝙉𝘢𝘶𝘧𝘳𝘢𝙕𝘢𝘱𝘱-𝙈𝘋'
global.author = '𝙉𝙖𝙪𝙛𝙧𝙖𝙜𝙤'
global.wm = '𝙉𝘢𝘶𝘧𝘳𝘢𝙕𝘢𝘱𝘱-𝙈𝘋 │ ᵐᵘˡᵗⁱᵇᵒᵗ-ᵒᶠᶜ'
global.wm2 = '𝙉𝘡│ᵇᵒᵗ'
global.naufrago = '𝙉𝙖𝙪𝙛𝙧𝙖𝙕𝙖𝙥𝙥│ᴄᴀɴᴀʟ • ʸᵗ'
global.cb = '🅽︎🆉︎︎'

global.vs = '1.5.0'
global.library = 'Baileys'
global.baileys = '@whiskeysockets/baileys'
global.lenguaje = 'Español'
global.menudi = ['⛶','❏','⫹⫺']
global.dev = '✯ Naufrago ✯'
global.devnum = '+54 9 3873 23-2212'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => { unwatchFile(file)
console.log(chalk.yellow('Se actualizo el archivo config.js'))
import(`${file}?update=${Date.now()}`)
})
