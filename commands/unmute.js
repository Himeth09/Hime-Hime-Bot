module.exports = {
  name: 'unmute',
  description: "unmutes people",
  execute(message, args) {
    const target = message.mentions.users.first();
    if(target && message.member.roles.cache.has('817069467330412554')){
      let muteRole = message.guild.roles.cache.find(role => role.name === "Muted");
      let mainRole = message.guild.roles.cache.find(role => role.name === "Testers");
      let memberTarget = message.guild.members.cache.get(target.id);

      memberTarget.roles.remove(muteRole.id);
      memberTarget.roles.add(mainRole.id);
      message.channel.send(`Congrats <@${memberTarget.user.id}>! You've been unmuted, but careful not to mess up again`);
      message.channel.send("https://media1.tenor.com/images/d39fd527bba4ef92af676c3e6364ee58/tenor.gif?itemid=8145603");
    }else{
      message.channel.send("rip bro, either you forgot to specify who ur muting or ur not pog enough to use this command <:sunglasses:817196164495441930>");
      message.channel.send("https://media1.tenor.com/images/31411b30062cb1ca41e38c33e7d04840/tenor.gif?itemid=4169547");
    }
  }
}
