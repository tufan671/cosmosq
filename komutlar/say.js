const Discord = require("discord.js");
const { oneLine, stripIndents } = require('common-tags');
module.exports.run = async (client, message, args) => {
 
  if (!message.member.roles.has("787636644114464769") && !message.member.hasPermission("MANAGE_MESSAGES") )
   return message.channel.send(hata).then(m =>m.delete(10000))
    let guild = "753377432236458108";
    const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
    let count = 0;
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  var msg = message;
  var üyesayısı = msg.guild.members.size.toString().replace(/ /g, "    ")
  var üs = üyesayısı.match(/([0-9])/g)
  üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs) {
    üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
      return {
  '0': `<a:_0:781480032052314123>`,
    '1': `<a:_1:781480031482282014>`,
    '2': `<a:_2:781480033956397056>`,
    '3': `<a:_3:781480035295035392>`,
    '4': `<a:_4:781480036900274186>`,                      
    '5': `<a:_5:781480037861556235>`,
    '6': `<a:_6:781480037198200843>`,
    '7': `<a:_7:781480037035278336>`,
    '8': `<a:_8:781480037811355648>`,
    '9': `<a:_9:781480037622087680>`}[d];
      })
    }/////////////////////////////
  var sessayı = count.toString().replace(/ /g, "    ")
  var üs2 = sessayı.match(/([0-9])/g)
  sessayı = sessayı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs2) {
    sessayı = sessayı.replace(/([0-9])/g, d => {
      return {
  '0': `<a:_0:781480032052314123>`,
    '1': `<a:_1:781480031482282014>`,
    '2': `<a:_2:781480033956397056>`,
    '3': `<a:_3:781480035295035392>`,
    '4': `<a:_4:781480036900274186>`,                      
    '5': `<a:_5:781480037861556235>`,
    '6': `<a:_6:781480037198200843>`,
    '7': `<a:_7:781480037035278336>`,
    '8': `<a:_8:781480037811355648>`,
    '9': `<a:_9:781480037622087680>`}[d];
      })
    }
 
  /////////////////////////////////////////
    var bostbasansayi = message.guild.roles.get('758758217580019733').members.size.toString().replace(/ /g, "    ")
  var üs2 = bostbasansayi.match(/([0-9])/g)
  bostbasansayi = bostbasansayi.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs2) {
    bostbasansayi = bostbasansayi.replace(/([0-9])/g, d => {
      return {
  '0': `<a:_0:781480032052314123>`,
    '1': `<a:_1:781480031482282014>`,
    '2': `<a:_2:781480033956397056>`,
    '3': `<a:_3:781480035295035392>`,
    '4': `<a:_4:781480036900274186>`,                      
    '5': `<a:_5:781480037861556235>`,
    '6': `<a:_6:781480037198200843>`,
    '7': `<a:_7:781480037035278336>`,
    '8': `<a:_8:781480037811355648>`,
    '9': `<a:_9:781480037622087680>`}[d];
      })
    }
  /////////////////////////////////////////
  var tagdakiler = 0;
  let tag = "✮";
  message.guild.members.forEach(member => {
    if(member.user.username.includes(tag)) {
      tagdakiler = tagdakiler+1
    }  
  })
  var tagdakilerr = tagdakiler.toString().replace(/ /g, "    ")
  var üs3 = tagdakilerr.match(/([0-9])/g)
  tagdakilerr = tagdakilerr.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs3) {
    tagdakilerr = tagdakilerr.replace(/([0-9])/g, d => {
      return {
 '0': `<a:_0:781480032052314123>`,
    '1': `<a:_1:781480031482282014>`,
    '2': `<a:_2:781480033956397056>`,
    '3': `<a:_3:781480035295035392>`,
    '4': `<a:_4:781480036900274186>`,                      
    '5': `<a:_5:781480037861556235>`,
    '6': `<a:_6:781480037198200843>`,
    '7': `<a:_7:781480037035278336>`,
    '8': `<a:_8:781480037811355648>`,
    '9': `<a:_9:781480037622087680>`}[d];
      })
    }
  //////////////////////////////////////////
  var onlayn = message.guild.members.filter(m => m.presence.status !== "offline").size.toString().replace(/ /g, "    ")
  var üs4= onlayn.match(/([0-9])/g)
  onlayn = onlayn.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs4) {
    onlayn = onlayn.replace(/([0-9])/g, d => {
      return {
  '0': `<a:_0:781480032052314123>`,
    '1': `<a:_1:781480031482282014>`,
    '2': `<a:_2:781480033956397056>`,
    '3': `<a:_3:781480035295035392>`,
    '4': `<a:_4:781480036900274186>`,                      
    '5': `<a:_5:781480037861556235>`,
    '6': `<a:_6:781480037198200843>`,
    '7': `<a:_7:781480037035278336>`,
    '8': `<a:_8:781480037811355648>`,
    '9': `<a:_9:781480037622087680>`}[d];
      })
    }
  ///codare farkıyla bebeğim
let emoji1 = `<a:emo4:787312865149321247>`;
 const embed1 = new Discord.RichEmbed()
 .setColor('000000')
 .setAuthor('✮ Cosmos')
 .setDescription(`${emoji1} **Sunucumuzda Toplam ** ${üyesayısı} **Üye bulunmakta.** \n\n ${emoji1} **Sunucumuzda Toplam** ${onlayn} **Çevrimiçi üye bulunmakta.** \n\n ${emoji1} **Ses kanallarında Toplam** ${sessayı} **Üye bulunmakta.** \n\n ${emoji1} **Tagımızda Toplam ** ${tagdakilerr} **Kişi bulunmakta.** \n\n ${emoji1} **Boost Basan Toplam ** ${bostbasansayi} **Kişi bulunmakta.**`)
 .setFooter(`Komutu Kullanan Yetkili: ${message.author.username}`)
 
     const hata = new Discord.RichEmbed()
    .setColor('000000')
    .setAuthor(`Hata`)
    .setDescription(`**Bu komutu kullanmaya hakkınız yoktur!**`)
 
  msg.channel.send(embed1);
 
  /*client.setInterval(() => {
  let channel = client.channels.get("694870726280347668");
  channel.setTopic(`Toplam üye: _${üyesayısı.toString()}_ / Çevrimiçi üye: ${onlayn}`); //kanal açıklama oto
}, 10000);*/
  }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["total",'toplam','say','info'],
  permLevel: 0
};
exports.help = {
  name: 'say'
}