module.exports = {
  name:'ban',
  description: "the ban hammer",
  execute(message, args){
    const member = message.mentions.users.first();
    if(member && message.member.roles.cache.has('817069467330412554')){
      const memberTarget = message.guild.members.cache.get(member.id);
      memberTarget.ban();
      message.channel.send("BEHOLD, THE BAN HAMMER");
      message.channel.send("https://media4.giphy.com/media/Ch1zCx8tu6DQY/giphy.gif");
    }else{
      message.channel.send("sorry bruh, either that you didnt include someone's name or ur just not worthy enough to wield the ban hammer <:sunglasses:817196164495441930>");
      message.channel.send("https://i.pinimg.com/originals/23/53/85/23538531425d61ae03dcdcbe38db8ace.gif")
    }
  }
}
