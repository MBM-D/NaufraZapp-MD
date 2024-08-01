import { File } from "megajs";
import mime from 'mime-types';

let handler = async (m, { conn, args, usedPrefix, text, command }) => {
    try {
        if (!text) return m.reply(`❮🚀❯ » 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙚𝙣𝙡𝙖𝙘𝙚 𝙫𝙖𝙡𝙞𝙙𝙤 𝙙𝙚 𝙈𝙚𝙜𝙖 𝙥𝙖𝙧𝙖 𝙪𝙨𝙖𝙧 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤.`);
        const file = File.fromURL(text);
        await file.loadAttributes();
        const fileExtension = file.name.split('.').pop().toLowerCase();
        const mimeType = mime.lookup(fileExtension);
        let caption = `𝙉𝙤𝙢𝙗𝙧𝙚:
• ${file.name}

𝙋𝙚𝙨𝙤:
• ${formatBytes(file.size)}

𝙏𝙞𝙥𝙤:
• ${mimeType}

𝘋𝘦𝘴𝘤𝘢𝘳𝘨𝘢𝘯𝘥𝘰...`.trim()
conn.reply(m.chat,caption, m)
        if (file.size >= 1800000000 && !file.directory) return m.reply('❮❌❯ » 𝙀𝙡 𝙖𝙧𝙘𝙝𝙞𝙫𝙤 𝙥𝙚𝙨𝙖 𝙢𝙪𝙘𝙝𝙤, 𝙣𝙤 𝙨𝙚 𝙥𝙪𝙙𝙤 𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙧.');
        const data = await file.downloadBuffer();
        await conn.sendFile(m.chat, data, file.name, null, m, null, { mimeType, asDocument: true });

    } catch (error) {
        return m.reply(`❮❌❯ » 𝙊𝙘𝙪𝙧𝙧𝙞𝙤 𝙪𝙣 𝙚𝙧𝙧𝙤𝙧 𝙞𝙣𝙚𝙨𝙥𝙚𝙧𝙖𝙙𝙤, 𝙞𝙣𝙩𝙚𝙣𝙩𝙖𝙡𝙤 𝙙𝙚 𝙣𝙪𝙚𝙫𝙤.`);
    }
}

handler.help = ["mega"]
handler.tags = ["downloader"]
handler.command = /^(mega)$/i
handler.level = 5
handler.register = true
export default handler

function formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}
