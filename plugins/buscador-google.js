import {googleIt} from '@bochilteam/scraper';
import google from 'google-it';
import axios from 'axios';
let handler = async (m, { conn, command, args, usedPrefix }) => {
  const fetch = (await import('node-fetch')).default;
  const text = args.join` `;
  if (!text) return conn.reply(m.chat, '『🪐』𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙩𝙚𝙭𝙩𝙤 𝙥𝙖𝙧𝙖 𝙗𝙪𝙨𝙘𝙖𝙧𝙡𝙤 𝙚𝙣 𝙜𝙤𝙤𝙜𝙡𝙚.', m);
const url = 'https://google.com/search?q=' + encodeURIComponent(text);
google({'query': text}).then(res => {
let teks = `${url}\n\n`
for (let g of res) {
teks += `_*${g.title}*_\n_${g.link}_\n_${g.snippet}_\n\n`
} 
const ss = `https://image.thum.io/get/fullpage/${url}`
conn.sendFile(m.chat, ss, 'error.png', teks, m)
})
} 
handler.help = ['google', 'googlef'].map((v) => v + ' <pencarian>');
handler.tags = ['internet'];
handler.command = /^googlef?$/i;
export default handler;