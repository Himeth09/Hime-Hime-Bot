const ms = require('ms');

module.exports = {
  name: 'mute',
  description: 'mutes people',
  execute(message, args){
    const target = message.mentions.users.first();
    if(target && message.member.roles.cache.has('817069467330412554')){
      let mainRole = message.guild.roles.cache.find(role => role.name === 'Testers');
      let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
      let memberTarget = message.guild.members.cache.get(target.id);


      //if user doesn't specify amount of time to be muted, bot will assign muted role indefinetly
      if(!args[1]){
        memberTarget.roles.remove(mainRole.id);
        memberTarget.roles.add(muteRole.id);
        message.channel.send(`<@${memberTarget.user.id}>, you have been found guilty of talking too much, pls shut up`);
        message.channel.send("https://media1.tenor.com/images/793b53f545b08081c2f36975994af4b9/tenor.gif?itemid=5412733");
        return;
      }


      //if the user does specify an amount of time, bot will remove the muted role after the inputted time using the setTimeout function
      memberTarget.roles.remove(mainRole.id);
      memberTarget.roles.add(muteRole.id);
      message.channel.send(`<@${memberTarget.user.id}>, you have been found guilty of talking too much, pls shut up for ${ms(ms(args[1]))}`);
      message.channel.send("https://media1.tenor.com/images/793b53f545b08081c2f36975994af4b9/tenor.gif?itemid=5412733");
      setTimeout(function(){
        memberTarget.roles.remove(muteRole.id);
        memberTarget.roles.add(mainRole.id);
        message.channel.send(`Congrats <@${memberTarget.user.id}>! You've been unmuted, but careful not to mess up again`);
        message.channel.send("https://media1.tenor.com/images/d39fd527bba4ef92af676c3e6364ee58/tenor.gif?itemid=8145603");
      }, ms(args[1]));

    }else{
      message.channel.send("rip bro, either you forgot to specify who ur muting or ur not pog enough to use this command <:sunglasses:817196164495441930>");
      message.channel.send("https://media1.tenor.com/images/ad5b170c619f1107bc70862725d8b0ff/tenor.gif?itemid=14425635");
    }
  }
}
