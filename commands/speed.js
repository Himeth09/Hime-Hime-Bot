module.exports = {
  name:'speed',
  description: 'funny car meme',
  execute(message, args, Discord){
    const newEmbed = new Discord.MessageEmbed()
    .setColor('#fff500')
    .setTitle('DEJA VU IVE JUST BEEN IN THIS PLACE BEFORE')
    .setURL('https://www.youtube.com/watch?v=HBRy4-__oh0')
    .setDescription('funny car meme <:fire:817070666322542642>')
    .setImage('https://media1.tenor.com/images/fc4d522bb43841d26a294f83c557e23f/tenor.gif')
    .setFooter('This post was made by boost creep gang');

    message.channel.send(newEmbed);
  }
}
