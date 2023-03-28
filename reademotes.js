let chatbody = document.getElementsByClassName("seventv-chat-list")
let emoteobject
let userobject
let emote
let emotename
function messageSentCallback(event) {

    if (event.relatedNode == chatbody[1]) {
        let inserteditems = []
        emoteobject = event.target.getElementsByClassName('seventv-chat-emote')
        userobject = event.target.getElementsByClassName('seventv-chat-user')

        for (var i = 0; i < emoteobject.length; i += 1) {
            emote = emoteobject[i]
            emotename = emote.alt
            if (!(inserteditems.includes(emote.alt)) && emotename !== undefined) {
                let html = `<div style="color: #388282;  font-size: 1em; " className="ttv-tools-emotename"> ${emotename} </div> `
                userobject[0].insertAdjacentHTML('beforebegin', html)
                inserteditems.push(emote.alt)
            }

        }
    }
};
document.addEventListener('DOMNodeInserted', messageSentCallback);
