import { tmpdir } from 'os'
import path, { join } from 'path'
import {
  readdirSync,
  statSync,
  unlinkSync,
  existsSync,
  readFileSync,
  watch
} from 'fs'
let handler = async (m, { conn, usedPrefix: _p, command, __dirname, args, text }) => {

let ar = Object.keys(plugins)
    let ar1 = ar.map(v => v.replace('.js', ''))
    if (!text) return conn.reply(m.chat, `*『❌』Incorrecto, ingrese el nombre del plugin que quiere borrar del bot.*`)
    if (!ar1.includes(args[0])) return conn.reply(m.chat,  `*『👀』No existe ningun plugin con ese nombre, mira la lists de plugins*\n\n• ${ar1.map(v => ' ' + v).join`\n• `}`)
const file = join(__dirname, '../plugins/' + args[0] + '.js')
unlinkSync(file)
conn.reply(m.chat, `*『✅』El plugins/${args[0]}.js, ha sido eliminado correctamente.*`)

}
handler.help = ['deleteplugin <nombre>']
handler.tags = ['owner']
handler.command = /^(deleteplugin|borrarplugin|dp|deleteplu)$/i

handler.rowner = true

export default handler