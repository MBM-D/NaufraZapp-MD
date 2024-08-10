import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs'; 
// import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone'

global.owner = [ //OWNERS
["5493873232212", '𝙉𝙖𝙪𝙛𝙧𝙖𝙕𝙖𝙥𝙥-𝙈𝘿', true], 
["573108625104"],
["34626817680"],
["5493873232221"],
["523142183828"],
["51918534156"],
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

global.vs = '1.8.0'
global.library = 'Baileys'
global.baileys = '@whiskeysockets/baileys'
global.lenguaje = 'Español'
global.menudi = ['⛶','❏','⫹⫺']
global.dev = '✯ Naufrago ✯'
global.devnum = '+54 9 3873 23-2212'

global.imgAll = fs.readFileSync('./Menu1.jpg')
global.naufraAll = 'https://whatsapp.com/channel/0029VaRibRvDuMRj6ozMSN1l'
global.nzLink = 'https://chat.whatsapp.com/I7A2Q6EXtmE6d7zOxyYF3L'
global.nzMenus = fs.readFileSync('./Menu2.jpg')
global.naufraImg = 'https://telegra.ph/file/4c4de4fbd4b87fc6c397d.jpg'
	
//Imagenes
global.imagen1 = 'https://telegra.ph/file/4c4de4fbd4b87fc6c397d.jpg'
global.imagen2 = fs.readFileSync('./Menu2.jpg')
global.imagen3 = fs.readFileSync('./Menu3.jpg')
global.imagen4 = fs.readFileSync('./imagenes/naufra1.jpg')
global.imagen5 = fs.readFileSync('./imagenes/naufra2.jpg')
global.imagen6 = fs.readFileSync('./imagenes/naufra3.jpg')
global.imagen7 = fs.readFileSync('./imagenes/naufra4.jpg')
global.imagen8 = fs.readFileSync('./imagenes/naufra5.jpg')
global.imagen9 = fs.readFileSync('./imagenes/naufra6.jpg')
global.imagen10 = fs.readFileSync('./imagenes/naufra7.jpg')
global.imagen11 = fs.readFileSync('./imagenes/naufra8.jpg')
global.imagen12 = fs.readFileSync('./imagenes/naufra9.jpg')
global.imagen13 = fs.readFileSync('./imagenes/naufra10.jpg')
global.imagen14 = fs.readFileSync('./imagenes/naufra11.jpg')
global.imagen15 = fs.readFileSync('./imagenes/naufra12.jpg')
global.imagen16 = fs.readFileSync('./imagenes/naufra13.jpg')

global.nzImg1 = fs.readFileSync('./Menu1.jpg')
global.nzImg2 = fs.readFileSync('./Menu2.jpg')

global.nz1 = 'https://i.postimg.cc/j5T9x8L4/f0304022-da50-4a0a-8be4-6b4138bab3af.jpg'
global.nz2 = 'https://i.postimg.cc/8zq93kG3/c9737e9e-4e19-4f75-95d3-e56c746fb97e.jpg'
global.nz3 = 'https://i.postimg.cc/GtK1wWKD/db93517c-0588-4a1b-b9a7-641b235597ad.jpg'
global.nz4 = 'https://i.postimg.cc/cLb0JNSM/474106d3-382b-4964-af1e-fbfb35d495cd.jpg'
global.nz5 = 'https://i.postimg.cc/PqvxZdBD/06efe094-8f28-444e-b3d4-7474a9ee7f3e.jpg'
global.nz6 = 'https://i.postimg.cc/MTjTwpfQ/3f77dcb2-f688-4720-ab08-2c41a86c5216.jpg'

global.img = 'https://i.postimg.cc/Y9t2mzvt/Menu2.jpg'
global.img1 = 'https://i.postimg.cc/T386DJsB/Menu3.jpg'
global.img2 = 'https://i.postimg.cc/T386DJsB/Menu3.jpg'
global.img3 = 'https://i.postimg.cc/43sR8Ns5/Menu4.jpg'
global.img4 = 'https://i.postimg.cc/j5T9x8L4/f0304022-da50-4a0a-8be4-6b4138bab3af.jpg'
global.img5 = 'https://i.postimg.cc/j5T9x8L4/f0304022-da50-4a0a-8be4-6b4138bab3af.jpg'
global.img6 = 'https://i.postimg.cc/8zq93kG3/c9737e9e-4e19-4f75-95d3-e56c746fb97e.jpg'
global.img7 = 'https://i.postimg.cc/8zq93kG3/c9737e9e-4e19-4f75-95d3-e56c746fb97e.jpg'
global.img8 = 'https://i.postimg.cc/GtK1wWKD/db93517c-0588-4a1b-b9a7-641b235597ad.jpg'
global.img9 = 'https://i.postimg.cc/cLb0JNSM/474106d3-382b-4964-af1e-fbfb35d495cd.jpg'
global.img10 = 'https://i.postimg.cc/PqvxZdBD/06efe094-8f28-444e-b3d4-7474a9ee7f3e.jpg'

global.iimg1 = 'https://i.postimg.cc/t4KK7yy7/11fe6d78ece25ee972ee8de229e182a9.jpg'
global.iimg2 = 'https://i.postimg.cc/5t5R0Cnk/66945863cdf7c56b212c2280e91d497b.jpg'
global.iimg3 = 'https://i.postimg.cc/x1D5zdJr/0c967c4af27aa805391e3be495936acd.jpg'
global.iimg4 = 'https://i.postimg.cc/kM2LNB4D/89aaf3a76c5af6c6904716889463a278.jpg'
global.iimg5 = 'https://i.postimg.cc/gJntKTG1/e872a51954db06122d6108df482ef157.jpg'

global.yt = 'https://youtube.com/@user-bw5wl4ye8r?si=qN8bP4ZdKm3yXwbx'
global.ig = 'https://www.instagram.com/naufrazapp?igsh=Y2g1ZXJxbm53eXAy'
global.md = 'https://github.com/MultiBot-OFC/NaufraZapp-MD'
global.paypal = 'https://www.paypal.me/NaufragoSolano'
global.git = 'https://github.com/MultiBot-OFC/NaufraZapp-MD'
global.linkwabot = 'https://wa.me/5491133982337?text=.menu'
global.email = 'guardianbotmdoficial@gmail.com'
global.grupo1 = 'https://chat.whatsapp.com/EU64G8ocaVPJElHf28HqVy'
global.grupo2 = 'https://chat.whatsapp.com/KE2Z71nVMUcCgzLAypL8XU'
global.canal = 'https://whatsapp.com/channel/0029VaRibRvDuMRj6ozMSN1l'
global.paypal2 = 'https://www.paypal.me/ColaboracionBotOFC'
global.creador = 'https://wa.me/51929838430'
global.asistencia = 'https://wa.me/5493873232221?text=Hola'

global.nzVideos = ['https://qu.ax/ygwT.mp4', 'https://qu.ax/iFCi.mp4', 'https://qu.ax/jie.mp4', 'https://qu.ax/Pbha.mp4', 'https://qu.ax/bdvm.mp4']
global.nzAll = ['https://qu.ax/ygwT.mp4', 'https://qu.ax/iFCi.mp4', 'https://qu.ax/jie.mp4', 'https://qu.ax/Pbha.mp4', 'https://qu.ax/bdvm.mp4', iimg1, iimg2, iimg3, iimg4, iimg5]

/*
global.raiz = './'
global.aniD = 'sessions/'
global.dirP = raiz
global.authFile = join(__dirname, `sessions/`)
global.authFileRespald = join(__dirname, `sesionRespaldo/`)
global.temp = join(__dirname, 'tmp')
global.media = raiz+'media/'
global.jadibts = join(__dirname, 'jadibts/')
global.raiz = './Menu1.jpg'
*/

global.rwait = '⏰'
global.done = '✅'
global.error = '❌'

//Cargando
global.wait = '*5*'
global.waitt = '*20%*'
global.waittt = '*80%*'
global.waitttt = '*99%*'
global.waittttt = '*100%*'

global.d = new Date(new Date + 3600000);
global.locale = 'es';
global.dia = d.toLocaleDateString(locale, {weekday: 'long'});
global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'});
global.mes = d.toLocaleDateString('es', {month: 'long'});
global.año = d.toLocaleDateString('es', {year: 'numeric'});
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});
global.wm2 = `${dia} ${fecha}\nNaufraZapp-MD`;
global.gt = 'NaufraZapp-MD';
global.mysticbot = 'NaufraBot';
global.mysticbot = 'https://github.com/MultiBot-OFC/NaufraZapp-MD';
global.nomorown = '51929838430';
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf'];
global.cmenut = '❖––––––『';
global.cmenub = '┊✦ ';
global.cmenuf = '╰━═┅═━––––––๑\n';
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ';
global.dmenut = '*❖─┅──┅〈*';
global.dmenub = '*┊»*';
global.dmenub2 = '*┊*';
global.dmenuf = '*╰┅────────┅✦*';
global.htjava = '⫹⫺';
global.htki = '*⭑•̩̩͙⊱•••• ☪*';
global.htka = '*☪ ••••̩̩͙⊰•⭑*';
global.comienzo = '• • ◕◕════';
global.fin = '════◕◕ • •';
global.botdate = `*Fecha:*  ${moment.tz('America/Mexico_City').format('DD/MM/YY')}`;
global.bottime = `*Hora:* ${moment.tz('America/Mexico_City').format('HH:mm:ss')}`;
global.fgif = {key: {participant: '0@s.whatsapp.net'}, message: {'videoMessage': {'title': wm, 'h': `Hmm`, 'seconds': '999999999', 'gifPlayback': 'true', 'caption': bottime, 'jpegThumbnail': fs.readFileSync('./Menu1.jpg')}}};
global.multiplier = 99;
global.flaaa = [
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=',
];

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
