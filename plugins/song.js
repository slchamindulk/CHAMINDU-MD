const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')
cmd({
    pattern: "song",
    desc: "download songs ",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("please give me url or name")
const search = await yts(q)
const data = search.videos[0];
const url = data.url 

let desc = '
⬇️ CHAMINDU-MD SONG DOWNLOADER ⬇️  
  
 title: ${data.title}
  description: ${data.description}
  time: ${data.timestamp} 
  ago: ${data.ago} 
  views: ${data.views}

ᴍᴀᴅᴇ ʙʏ ᴄʜᴀᴍɪɴᴅᴜ 👑
    '
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek}):

//download audio 
let down = await fg.yta(url)
let downloadurl = down.dl_url

//send audio + document message  

await conn.sendMessage(from,{audio: {url:downloadurl},mimetype:"audio/mpeg"},{qouted:mek})
 await conn.sendMessage(from,{document: {url:downloadurl},mimetype:"audio/mpeg"fileName:data + title ".mp3",caption:"ᴍᴀᴅᴇ ʙʏ ᴄʜᴀᴍɪɴᴅᴜ"},{qouted:mek}) 
 

  
}catch(e){
console.log(e)
reply('${e}')
}
}} 


//========video_dl=========\\

cmd({
    pattern: "video",
    desc: "download videos ",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("please give me url or name")
const search = await yts(q)
const data = search.videos[0];
const url = data.url 

let desc = '
⬇️ CHAMINDU-MD VIDEO DOWNLOADER ⬇️  
  
 title: ${data.title}
  description: ${data.description}
  time: ${data.timestamp} 
  ago: ${data.ago} 
  views: ${data.views}

ᴍᴀᴅᴇ ʙʏ ᴄʜᴀᴍɪɴᴅᴜ 👑
    '
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek}):

//download video 
let down = await fg.ytv(url)
let downloadurl = down.dl_url

//send video + document message  

await conn.sendMessage(from,{video: {url:downloadurl},mimetype:"video/mp4"},{qouted:mek})
 await conn.sendMessage(from,{document: {url:downloadurl},mimetype:"video/mp4"fileName:data + title ".mp4",caption:"ᴍᴀᴅᴇ ʙʏ ᴄʜᴀᴍɪɴᴅᴜ"},{qouted:mek}) 

  
}catch(e){
console.log(e)
reply('${e}')
}
}} 

    
  
