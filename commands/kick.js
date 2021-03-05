module.exports = {
  name: 'kick',
  description: 'kick people out of server',
  execute(message, args){
    const member = message.mentions.users.first();
    if(member && message.member.roles.cache.has('817069467330412554')){
      const memberTarget = message.guild.members.cache.get(member.id);
      memberTarget.kick();
      message.channel.send("damn that's one hell of a kick, that guy went flying!");
      message.channel.send("https://thumbs.gfycat.com/PlushGenuineCowbird-max-1mb.gif");
    }else{
      message.channel.send("rip bro, either u forgot to put someone's name after the command or ur just not cool enough to use this command <:sunglasses:817196164495441930>");
    }
  }
}
