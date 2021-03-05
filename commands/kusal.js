module.exports = {
  name: 'kusal',
  description: "GET REALL KUSALLLLL",
  execute(message, args){
    if(message.member.roles.cache.has('817069467330412554')){
      message.channel.send("happy birthday fool <:partying_face:816894608406872094>");
    }else{
      message.channel.send("bro, u don't got the right perms brah, try again later");
    }
  }
}
