import axios from 'axios';
import fetch from 'node-fetch';
const handler = async (m, {command, text, conn}) => {
  if (!db.data.chats[m.chat].modohorny && m.isGroup) throw `❮❌❯ » 𝙇𝙤𝙨 𝙘𝙤𝙢𝙖𝙣𝙙𝙤𝙨 𝙥𝙖𝙧𝙖 𝙖𝙙𝙪𝙡𝙩𝙤𝙨 𝙚𝙨𝙩𝙖𝙣 𝙙𝙚𝙨𝙖𝙘𝙩𝙞𝙫𝙖𝙙𝙤𝙨.`;

  conn.reply(m.chat, `❮🚀❯ » 𝙀𝙣𝙫𝙞𝙖𝙣𝙙𝙤 𝙘𝙤𝙣𝙩𝙚𝙣𝙞𝙙𝙤...`, m, {
  contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, showAdAttribution: true,
  title: packname,
  body: wm,
  previewType: 0, thumbnail: icons,
  sourceUrl: channel }}})

  if (command == 'xxx-loli') {
    const res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/nsfwloli.json`)).data;
    const haha = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: haha}, caption: `${wm}`.trim()}, {quoted: m});
  }

  if (command == 'xxx-foot') {
    const res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/nsfwfoot.json`)).data;
    const haha = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: haha}, caption: `${wm}`.trim()}, {quoted: m});
  }

  if (command == 'xxx-ass') {
    const res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/nsfwass.json`)).data;
    const haha = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: haha}, caption: `${wm}`.trim()}, {quoted: m});
  }

  if (command == 'xxx-bdsm') {
    const res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/nsfwbdsm.json`)).data;
    const haha = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: haha}, caption: `${wm}`.trim()}, {quoted: m});
  }

  if (command == 'xxx-cum') {
    const res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/nsfwcum.json`)).data;
    const haha = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: haha}, caption: `${wm}`.trim()}, {quoted: m});
  }

  if (command == 'xxx-ero') {
    const res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/nsfwero.json`)).data;
    const haha = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: haha}, caption: `${wm}`.trim()}, {quoted: m});
  }

  if (command == 'xxx-femdom') {
    const res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/nsfwfemdom.json`)).data;
    const haha = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: haha}, caption: `${wm}`.trim()}, {quoted: m});
  }

  if (command == 'xxx-glass') {
    const res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/nsfwglass.json`)).data;
    const haha = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: haha}, caption: `${wm}`.trim()}, {quoted: m});
  }

  if (command == 'xxx-hentai') {
    const res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/hentai.json`)).data;
    const haha = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: haha}, caption: `${wm}`.trim()}, {quoted: m});
  }

  if (command == 'xxx-orgy') {
    const res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/nsfworgy.json`)).data;
    const haha = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: haha}, caption: `${wm}`.trim()}, {quoted: m});
  }

  if (command == 'xxx-tetas') {
    const resError = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/tetas.json`)).data;
    let res = await conn.getFile(`https://api-fgmods.ddns.net/api/nsfw/boobs?apikey=fg-dylux`).data;
    if (res == '' || !res || res == null) res = await resError[Math.floor(resError.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: res}, caption: `${wm}`.trim()}, {quoted: m});
  }

  if (command == 'xxx-booty') {
    const resError = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/booty.json`)).data;
    let res = await conn.getFile(`https://api-fgmods.ddns.net/api/nsfw/ass?apikey=fg-dylux`).data;
    if (res == '' || !res || res == null) res = await resError[Math.floor(resError.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: res}, caption: `${wm}`.trim()}, {quoted: m});
  }

  if (command == 'xxx-ecchi') {
    const res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/ecchi.json`)).data;
    const url = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: url}, caption: `${wm}`.trim()}, {quoted: m});
  }

  if (command == 'xxx-furro') {
    const res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/furro.json`)).data;
    const url = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: url}, caption: `${wm}`.trim()}, {quoted: m});
  }

  if (command == 'xxx-trapito') {
    const res = await fetch(`https://api.waifu.pics/nsfw/trap`);
    const json = await res.json();
    const url = json.url;
    conn.sendMessage(m.chat, {image: {url: url}, caption: `${wm}`.trim()}, {quoted: m});
  }

  if (command == 'xxx-lesbians') {
    const resError = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/imagenlesbians.json`)).data;
    let res = await conn.getFile(`https://api-fgmods.ddns.net/api/nsfw/lesbian?apikey=fg-dylux`).data;
    if (res == '' || !res || res == null) res = await resError[Math.floor(resError.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: res}, caption: `${wm}`.trim()}, {quoted: m});
  }

  if (command == 'xxx-panties') {
    const res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/panties.json`)).data;
    const url = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: url}, caption: `${wm}`.trim()}, {quoted: m});
  }

  if (command == 'xxx-pene') {
    const resError = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/pene.json`)).data;
    let res = await conn.getFile(`https://api-fgmods.ddns.net/api/nsfw/penis?apikey=fg-dylux`).data;
    if (res == '' || !res || res == null) res = await resError[Math.floor(resError.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: res}, caption: `${wm}`.trim()}, {quoted: m});
  }

  if (command == 'xxx-porno') {
    const res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/porno.json`)).data;
    const url = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: url}, caption: `${wm}`.trim()}, {quoted: m});
  }

  if (command == 'xxx-random') {
    const rawjsonn = ['https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/tetas.json', 'https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/booty.json', 'https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/imagenlesbians.json', 'https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/panties.json', 'https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/porno.json'];
    const rawjson = await rawjsonn[Math.floor(rawjsonn.length * Math.random())];
    const res = (await axios.get(rawjson)).data;
    const url = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: url}, caption: `${wm}`.trim()}, {quoted: m});
  }

  if (command == 'xxx-pechos') {
    const res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/pechos.json`)).data;
    const url = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: url}, caption: `${wm}`.trim()}, {quoted: m});
  }

  if (command == 'xxx-yaoi') {
    const res = await fetch(`https://nekobot.xyz/api/image?type=yaoi`);
    const json = await res.json();
    const url = json.message;
    conn.sendMessage(m.chat, {image: {url: url}, caption: `${wm}`.trim()}, {quoted: m});
  }

  if (command == 'xxx-yaoi2') {
    const res = await fetch(`https://purrbot.site/api/img/nsfw/yaoi/gif`);
    const json = await res.json();
    const url = json.link;
    conn.sendMessage(m.chat, {image: {url: url}, caption: `${wm}`.trim()}, {quoted: m});
  }

  if (command == 'xxx-yuri') {
    const res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/yuri.json`)).data;
    const url = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: url}, caption: `${wm}`.trim()}, {quoted: m});
  }

  if (command == 'xxx-yuri2') {
    const resError = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/yuri.json`)).data;
    const res = await fetch(`https://purrbot.site/api/img/nsfw/yuri/gif`);
    const json = await res.json();
    let url = json.link;
    if (url == '' || !url || url == null) url = await resError[Math.floor(resError.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: url}, caption: `${wm}`.trim()}, {quoted: m});
  }
};
handler.help = ['xporn'];
handler.command = ['xxx-loli', 'xxx-foot', 'xxx-ass', 'xxx-bdsm', 'xxx-cum', 'xxx-ero', 'xxx-femdom', 'xxx-foot', 'xxx-glass', 'xxx-orgy', 'xxx-yuri', 'xxx-yuri2', 'xxx-yaoi', 'xxx-yaoi2', 'xxx-panties', 'xxx-tetas', 'xxx-booty', 'xxx-ecchi', 'xxx-furro', 'xxx-hentai', 'xxx-trapito', 'xxx-lesbians', 'xxx-pene', 'xxx-porno', 'xxx-random', 'xxx-pechos'];
handler.tags = ['hots'];
hanlder.private = true
handler.register = true
export default handler;