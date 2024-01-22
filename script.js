var ExpandButton = $(".expand")
var About_me = $(".About_me")

ExpandButton.on('click', openAboutMe)

function openAboutMe(){
    event.preventDefault();
    About_me.toggleClass('hide');
}

