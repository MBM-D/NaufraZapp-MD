const handler = async (m, {conn, usedPrefix, command, args, isOwner, isAdmin, isROwner}) => {

let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

  const optionsFull = `
╭᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─•
│⌑╔•  •───────────────•  •╗
│⌑║ \`𝐎𝐏𝐂𝐈𝐎𝐍 𝐎𝐍 𝐘 𝐎𝐅𝐅\`
│⌑╚•  •───────────────•  •╝
│⌑┏┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•◌ͦ
│⌑┃⌕
│⌑┃ *_${usedPrefix}on welcome_*
│⌑┃ *_${usedPrefix}on detect_*
│⌑┃ *_${usedPrefix}on antidelete_*
│⌑┃ *_${usedPrefix}on public_*
│⌑┃ *_${usedPrefix}on antilink_*
│⌑┃ *_${usedPrefix}on antilink2_*
│⌑┃ *_${usedPrefix}on modohorny_*
│⌑┃ *_${usedPrefix}on stickers_*
│⌑┃ *_${usedPrefix}on game_*
│⌑┃ *_${usedPrefix}on game2_*
│⌑┃ *_${usedPrefix}on temporal_*
│⌑┃ *_${usedPrefix}on autolevelup_*
│⌑┃ *_${usedPrefix}on autosticker_*
│⌑┃ *_${usedPrefix}on reaction_*
│⌑┃ *_${usedPrefix}on antitoxic_*
│⌑┃ *_${usedPrefix}on audios_*
│⌑┃ *_${usedPrefix}on antiver_*
│⌑┃ *_${usedPrefix}on antifake_*
│⌑┃ *_${usedPrefix}on serbot_*
│⌑┃ *_${usedPrefix}on restrict_*
│⌑┃ *_${usedPrefix}on antiporno_*
│⌑┃ *_${usedPrefix}on autoread_*
│⌑┃ *_${usedPrefix}on autoread2_*
│⌑┃ *_${usedPrefix}on antillamar_*
│⌑┃ *_${usedPrefix}on antispam_*
│⌑┃ *_${usedPrefix}on modoadmin_*
│⌑┃ *_${usedPrefix}on pconly_*
│⌑┃ *_${usedPrefix}on gconly_*
│⌑┃ *_${usedPrefix}on antiprivado_*
│⌑┃ *_${usedPrefix}on modoia_*
│⌑┃•┈┈┈┈┈┈┈┈┈┈┈┈┈┈•
│⌑┃ *_${usedPrefix}off welcome_*
│⌑┃ *_${usedPrefix}off detect_*
│⌑┃ *_${usedPrefix}off antidelete_*
│⌑┃ *_${usedPrefix}off public_*
│⌑┃ *_${usedPrefix}off antilink_*
│⌑┃ *_${usedPrefix}off antilink2_*
│⌑┃ *_${usedPrefix}off modohorny_*
│⌑┃ *_${usedPrefix}off stickers_*
│⌑┃ *_${usedPrefix}off game_*
│⌑┃ *_${usedPrefix}off game2_*
│⌑┃ *_${usedPrefix}off temporal_*
│⌑┃ *_${usedPrefix}off autolevelup_*
│⌑┃ *_${usedPrefix}off autosticker_*
│⌑┃ *_${usedPrefix}off reaction_*
│⌑┃ *_${usedPrefix}off antitoxic_*
│⌑┃ *_${usedPrefix}off audios_*
│⌑┃ *_${usedPrefix}off antiver_*
│⌑┃ *_${usedPrefix}off antifake_*
│⌑┃ *_${usedPrefix}off serbot_*
│⌑┃ *_${usedPrefix}off restrict_*
│⌑┃ *_${usedPrefix}off antiporno_*
│⌑┃ *_${usedPrefix}off autoread_*
│⌑┃ *_${usedPrefix}off autoread2_*
│⌑┃ *_${usedPrefix}off antillamar_*
│⌑┃ *_${usedPrefix}off antispam_*
│⌑┃ *_${usedPrefix}off modoadmin_*
│⌑┃ *_${usedPrefix}off pconly_*
│⌑┃ *_${usedPrefix}off gconly_*
│⌑┃ *_${usedPrefix}off antiprivado_*
│⌑┃ *_${usedPrefix}off modoia_*
│⌑┗┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•◌ͦ
╰─────────────────────•
  `.trim();

const isEnable = /true|enable|(turn)?on|1/i.test(command);
const chat = global.db.data.chats[m.chat];
const user = global.db.data.users[m.sender];
const bot = global.db.data.settings[conn.user.jid] || {};
const type = (args[0] || '').toLowerCase();
let isAll = false; const isUser = false;
switch (type) {
    case 'welcome':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn);
          throw false;
        }
      } else if (!(isAdmin || isOwner || isROwner)) {
        global.dfail('admin', m, conn);
        throw false;
      }
      chat.welcome = isEnable;
      break;
    case 'detect':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn);
          throw false;
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn);
        throw false;
      }
      chat.detect = isEnable;
      break;
    case 'detect2':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn);
          throw false;
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn);
        throw false;
      }
      chat.detect2 = isEnable;
      break;
    case 'simsimi':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.simi = isEnable;
      break;
    case 'antiporno':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiporno = isEnable;
      break;
    case 'delete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.delete = isEnable;
      break;
    case 'antidelete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antidelete = isEnable;
      break;
    case 'public':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['self'] = !isEnable;
      break;
    case 'antilink':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiLink = isEnable;
      break;
    case 'antilink2':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiLink2 = isEnable;
      break;
    case 'antiviewonce':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiviewonce = isEnable;
      break;
    case 'modohorny':
    case 'modoadulto':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.modohorny = isEnable;
      break;
    case 'modoadmin':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.modoadmin = isEnable;
      break;
    case 'autosticker':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.autosticker = isEnable;
      break;
    case 'audios':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.audios = isEnable;
      break;
    case 'restrict':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.restrict = isEnable;
      break;
    case 'antitiktok': case 'antitk': case 'antitik':
      if (m.isGroup) {
      if (!(isAdmin || isOwner)) {
         global.dfail('admin', m, conn);
         throw false;
      }}
      chat.antiTiktok = isEnable; 
      break;		
    case 'antiyoutube': case 'antiyt':
      if (m.isGroup) {
      if (!(isAdmin || isOwner)) {
         global.dfail('admin', m, conn);
         throw false;
      }}
      chat.antiYoutube = isEnable; 
      break;
		
    case 'antitelegram': case 'antitl': case 'antitele': case 'antitg': case 'antitel':
      if (m.isGroup) {
      if (!(isAdmin || isOwner)) {
         global.dfail('admin', m, conn);
         throw false;
      }}
      chat.antiTelegram = isEnable; 
      break;	
    case 'antifacebook': case 'antifb': case 'antifbook':
      if (m.isGroup) {
      if (!(isAdmin || isOwner)) {
         global.dfail('admin', m, conn);
         throw false;
      }}
      chat.antiFacebook = isEnable; 
      break;		
    case 'antiinstagram': case 'antinstagram': case 'antiig': case 'antig': case 'antiinsta': case 'antinsta':
      if (m.isGroup) {
      if (!(isAdmin || isOwner)) {
         global.dfail('admin', m, conn);
         throw false;
      }}
      chat.antiInstagram = isEnable; 
      break;
		
    case 'antitwitter': case 'antitw': case 'antitwit': case 'antitwter': case 'antitwiter': case 'antix':
      if (m.isGroup) {
      if (!(isAdmin || isOwner)) {
         global.dfail('admin', m, conn);
         throw false;
      }}
      chat.antiTwitter = isEnable; 
      break;
    case 'antidiscord':
      if (m.isGroup) {
      if (!(isAdmin || isOwner)) {
         global.dfail('admin', m, conn);
         throw false;
      }}
      chat.antiDiscord = isEnable; 
      break;
    case 'antithreads':
      if (m.isGroup) {
      if (!(isAdmin || isOwner)) {
         global.dfail('admin', m, conn);
         throw false;
      }}
      chat.antiThreads = isEnable; 
      break;
    case 'antigithub':
      if (m.isGroup) {
      if (!(isAdmin || isOwner)) {
         global.dfail('admin', m, conn);
         throw false;
      }}
      chat.antiGithub = isEnable; 
      break;
    case 'antitwitch':
      if (m.isGroup) {
      if (!(isAdmin || isOwner)) {
         global.dfail('admin', m, conn);
         throw false;
      }}
      chat.antiTwitch = isEnable; 
      break;
    case 'modoia':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.modoia = isEnable;      
      break;      
    case 'nyimak':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['nyimak'] = isEnable;
      break;
    case 'autoread':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      bot.autoread2 = isEnable;
      //global.opts['autoread'] = isEnable;
      break;
    case 'pconly':
    case 'privateonly':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['pconly'] = isEnable;
      break;
    case 'gconly':
    case 'grouponly':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['gconly'] = isEnable;
      break;
    case 'swonly':
    case 'statusonly':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['swonly'] = isEnable;
      break;
    case 'anticall':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.antiCall = isEnable;
      break;
    case 'antiprivado':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.antiPrivate = isEnable;
      break;
    case 'modejadibot':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      bot.modejadibot = isEnable;
      break;
    case 'antispam':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.antispam = isEnable;
      break;
    case 'antitoxic':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiToxic = isEnable;
      break;
      case 'game': case 'juegos': case 'fun': case 'ruleta':
      if (m.isGroup) {
      if (!(isAdmin || isOwner)) {
        global.dfail('admin', m, conn)
        throw false
      }}
      chat.game = isEnable;          
      break;
    case 'reaction': case 'reaccion': case 'emojis': case 'antiemojis': case 'reacciones': case 'reaciones':
      if (m.isGroup) {
      if (!(isAdmin || isOwner)) {
         global.dfail('admin', m, conn)
         throw false
      }}
      chat.reaction = isEnable;          
      break;
    case 'antitraba':
      if (m.isGroup) {
      if (!(isAdmin || isROwner || isOwner)) {
         global.dfail('admin', m, conn);
         throw false;
      }}
      chat.antiTraba = isEnable;
      break;
    case 'antiarabes':
      if (m.isGroup) {
      if (!(isAdmin || isROwner || isOwner)) {
         global.dfail('admin', m, conn); 
         throw false;
      }}
      chat.antiArab = isEnable;
      break;
    default:
if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, {text: optionsFull}, {quoted: fkontak});
throw false;
}
await conn.sendButton(m.chat, `📌 *_COMANDO:_* ${type} 
⚙️ *_OPCION:_* ${isEnable ? 'Activado' : 'Desactivado'} 
📡 *_PARA:_* ${isAll ? wm : isUser ? '' : 'El bot'}`, wm, null, [[`${isEnable ? 'Apagar' : 'Activar'}`, `${isEnable ? `.off ${type}` : `.on ${type}`}`], ['VOLVER AL MENU', '.allmenu']], null, null, fkontak)} 
	
handler.help = ['en', 'dis'].map((v) => v + 'able <option>');
handler.tags = ['group', 'owner'];
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i;
export default handler;
	
