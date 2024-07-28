import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import fs from 'fs'
import moment from 'moment-timezone'
import path, { join } from 'path'
import { fileURLToPath, pathToFileURL } from 'url'
global.__filename = function filename(pathURL = import.meta.url, rmPrefix = platform !== 'win32') { return rmPrefix ? /file:\/\/\//.test(pathURL) ? fileURLToPath(pathURL) : pathURL : pathToFileURL(pathURL).toString() }; global.__dirname = function dirname(pathURL) { return path.dirname(global.__filename(pathURL, true)) }; global.__require = function require(dir = import.meta.url) { return createRequire(dir) }
const __dirname = global.__dirname(import.meta.url)

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

//Imagenes
global.imagen1 = fs.readFileSync('./Menu1.jpg')
global.imagen2 = fs.readFileSync('./Menu2.jpg')
global.imagen3 = fs.readFileSync('./Menu3.jpg')

global.nzImg1 = fs.readFileSync('./Menu1.jpg')
global.nzImg2 = fs.readFileSync('./Menu2.jpg')

global.nz1 = fs.readFileSync('./storage/nz.jpg')
global.nz2 = fs.readFileSync('./storage/nz2.jpg')
global.nz3 = fs.readFileSync('./storage/nz3.jpg')
global.nz4 = fs.readFileSync('./storage/nz4.jpg')
global.nz5 = fs.readFileSync('./storage/nz5.jpg')
global.nz6 = fs.readFileSync('./storage/nz6.jpg')

var img = 'https://i.postimg.cc/Y9t2mzvt/Menu2.jpg'
var img1 = 'https://i.postimg.cc/T386DJsB/Menu3.jpg'
var img2 = 'https://i.postimg.cc/T386DJsB/Menu3.jpg'
var img3 = 'https://i.postimg.cc/43sR8Ns5/Menu4.jpg'
var img4 = 'https://i.postimg.cc/j5T9x8L4/f0304022-da50-4a0a-8be4-6b4138bab3af.jpg'
var img5 = 'https://i.postimg.cc/j5T9x8L4/f0304022-da50-4a0a-8be4-6b4138bab3af.jpg'
var img6 = 'https://i.postimg.cc/8zq93kG3/c9737e9e-4e19-4f75-95d3-e56c746fb97e.jpg'
var img7 = 'https://i.postimg.cc/8zq93kG3/c9737e9e-4e19-4f75-95d3-e56c746fb97e.jpg'
var img8 = 'https://i.postimg.cc/GtK1wWKD/db93517c-0588-4a1b-b9a7-641b235597ad.jpg'
var img9 = 'https://i.postimg.cc/cLb0JNSM/474106d3-382b-4964-af1e-fbfb35d495cd.jpg'
var img10 = 'https://i.postimg.cc/PqvxZdBD/06efe094-8f28-444e-b3d4-7474a9ee7f3e.jpg'

var iimg1 = 'https://i.postimg.cc/t4KK7yy7/11fe6d78ece25ee972ee8de229e182a9.jpg'
var iimg2 = 'https://i.postimg.cc/5t5R0Cnk/66945863cdf7c56b212c2280e91d497b.jpg'
var iimg3 = 'https://i.postimg.cc/x1D5zdJr/0c967c4af27aa805391e3be495936acd.jpg'
var iimg4 = 'https://i.postimg.cc/kM2LNB4D/89aaf3a76c5af6c6904716889463a278.jpg'
var iimg5 = 'https://i.postimg.cc/gJntKTG1/e872a51954db06122d6108df482ef157.jpg'


global.ImgAll = [img, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, imagen1, imagen2, imagen3]
global.nzImg = [iimg1, iimg2, iimg3, iimg4, iimg5]
global.linkNz = 'https://naufrazapp.com/'
global.naufraRedes = 'https://naufrazapp.com/'
global.naufraImg = [img, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, iimg1, iimg2, iimg3, iimg4, iimg5, imagen1, imagen2, imagen3]
global.naufraAll = [yt, ig, paypal, git, linkwabot, grupo1, grupo2, canal]

global.yt = 'https://youtube.com/@user-bw5wl4ye8r?si=qN8bP4ZdKm3yXwbx'
global.ig = 'https://www.instagram.com/naufrazapp?igsh=Y2g1ZXJxbm53eXAy'
global.md = 'https://github.com/MultiBot-OFC/NaufraZapp-MD'
global.paypal = 'https://www.paypal.me/NaufragoSolano'
global.git = 'https://github.com/MultiBot-OFC/NaufraZapp-MD'
global.linkwabot = 'https://wa.me/5491133982337'
global.email = 'guardianbotmdoficial@gmail.com'
global.grupo1 = 'https://chat.whatsapp.com/I7A2Q6EXtmE6d7zOxyYF3L'
global.grupo2 = 'https://chat.whatsapp.com/I7A2Q6EXtmE6d7zOxyYF3L'
global.canal = 'https://whatsapp.com/channel/0029VaRibRvDuMRj6ozMSN1l'
global.paypal2 = 'https://www.paypal.me/ColaboracionBotOFC'

global.nzVideos = ['https://qu.ax/ygwT.mp4', 'https://qu.ax/iFCi.mp4', 'https://qu.ax/jie.mp4', 'https://qu.ax/Pbha.mp4', 'https://qu.ax/bdvm.mp4']
global.nzAll = ['https://qu.ax/ygwT.mp4', 'https://qu.ax/iFCi.mp4', 'https://qu.ax/jie.mp4', 'https://qu.ax/Pbha.mp4', 'https://qu.ax/bdvm.mp4', iimg1, iimg2, iimg3, iimg4, iimg5]


global.raiz = './'
global.aniD = 'sessions/'
global.dirP = raiz
global.authFile = join(__dirname, `sessions/`)
global.authFileRespald = join(__dirname, `sesionRespaldo/`)
global.temp = join(__dirname, 'tmp')
global.media = raiz+'media/'
global.jadibts = join(__dirname, 'jadibts/')
global.raiz = './Menu1.jpg'


global.rwait = '⏰'
global.done = '✅'
global.error = '❌'

//Cargando
global.wait = '*5*'
global.waitt = '*20%*'
global.waittt = '*80%*'
global.waitttt = '*99%*'
global.waittttt = '*100%*'

//fake
global.fsizedoc = '999999'
global.fpagedoc = '9999'

//Rpg
global.multiplier = 200 // Cuanto más alto, más difícil subir de nivel

global.rpg = {
emoticon(string) {
string = string.toLowerCase()
let emot = {
level: '🏆', limit: '💎', exp: '✨',
health: '❤️',
money: '💵',
potion: '🥤',
pickaxe: '⛏️' 
}

let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
if (!results.length) return ''
else return emot[results[0][0]]
}}

global.d = new Date(new Date + 3600000)
global.locale = 'es'
global.dia = d.toLocaleDateString(locale, {weekday: 'long'})
global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'})
global.mes = d.toLocaleDateString('es', {month: 'long'})
global.año = d.toLocaleDateString('es', {year: 'numeric'})
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true})

var more = String.fromCharCode(8206)
global.readMore = more.repeat(850)

let file = fileURLToPath(import.meta.url)
watchFile(file, () => { unwatchFile(file)
console.log(chalk.yellow('Se actualizo el archivo config.js'))
import(`${file}?update=${Date.now()}`)
})
