import translate from '@vitalets/google-translate-api';
import {Anime} from '@shineiichijo/marika';
const client = new Anime();
const handler = async (m, {conn, text, usedPrefix}) => {
  if (!text) return m.reply(`『🪐』𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚 𝙙𝙚𝙡 𝙖𝙣𝙞𝙢𝙚 𝙦𝙪𝙚 𝙦𝙪𝙞𝙚𝙧𝙖 𝙗𝙪𝙨𝙘𝙖𝙧 𝙞𝙣𝙛𝙤𝙧𝙢𝙖𝙘𝙞𝙤𝙣.`);
  try {
    const anime = await client.searchAnime(text);
    const result = anime.data[0];
    const resultes = await translate(`${result.background}`, {to: 'es', autoCorrect: true});
    const resultes2 = await translate(`${result.synopsis}`, {to: 'es', autoCorrect: true});
    const AnimeInfo = `
𝗧𝗜𝗧𝗨𝗟𝗢 • ${result.title}

𝗙𝗢𝗥𝗠𝗔𝗧𝗢 • ${result.type}

𝗘𝗦𝗧𝗔𝗗𝗢 • ${result.status.toUpperCase().replace(/\_/g, ' ')}

𝗘𝗣𝗜𝗦𝗢𝗗𝗜𝗢𝗦 • ${result.episodes}

𝗗𝗨𝗥𝗔𝗖𝗜𝗢𝗡 • *${result.duration}*

𝗕𝗔𝗦𝗔𝗗𝗢 𝗘𝗡 • ${result.source.toUpperCase()}

𝗘𝗦𝗧𝗥𝗘𝗡𝗔𝗗𝗢 𝗘𝗡 • ${result.aired.from}

𝗙𝗜𝗡𝗔𝗟𝗜𝗭𝗔𝗗𝗢 • ${result.aired.to}

𝗣𝗢𝗣𝗨𝗟𝗔𝗥𝗜𝗗𝗔𝗗 • ${result.popularity}

𝗙𝗔𝗩𝗢𝗥𝗜𝗧𝗢𝗦 • ${result.favorites}

𝗖𝗟𝗔𝗦𝗜𝗙𝗜𝗖𝗔𝗖𝗜𝗢𝗡 • ${result.rating}

𝗥𝗔𝗡𝗚𝗢 • ${result.rank}

𝗧𝗥𝗔𝗜𝗟𝗘𝗥 • ${result.trailer.url}

𝗟𝗜𝗡𝗞 • ${result.url}
`;
    conn.sendFile(m.chat, result.images.jpg.image_url, 'error.jpg', AnimeInfo, m);
  } catch {
    throw `『❌』𝙊𝙘𝙪𝙧𝙧𝙞𝙤 𝙪𝙣 𝙚𝙧𝙧𝙤𝙧 𝙞𝙣𝙚𝙨𝙥𝙚𝙧𝙖𝙙𝙤 𝙖𝙡 𝙗𝙪𝙨𝙘𝙖𝙧 𝙧𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤𝙨 𝙙𝙚𝙡 𝙖𝙣𝙞𝙢𝙚, 𝙗𝙪𝙨𝙦𝙪𝙚 𝙤𝙩𝙧𝙤 𝙥𝙤𝙧 𝙛𝙖𝙫𝙤𝙧.`;
  }
};
handler.command = /^(anime|animeinfo)$/i;
export default handler;
