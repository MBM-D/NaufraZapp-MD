
let handler = async (m, { text }) => {
  if (!text) throw `*『👀』Por favor, ingrese el nombre y la carpeta que quiera ver.*`;
  let ext = text.split('.').pop();
  let path = `${text}`;
  if (!fs.existsSync(path)) throw `*『🤔』La imagen no se encuentra en la carpeta.*`;
  let media = await fs.readFileSync(path);
  let mimeType = `image/${ext}`;
  m.reply(media, null, { thumbnail: await (await fetch(`data:${mimeType};base64,${media.toString('base64')}`)).buffer() });
};

handler.help = ['viewimage <nome>'];
handler.tags = ['tools'];
handler.command = /^(viewimage|vi)$/i;
handler.owner = true;

export default handler;
