(function(d,o,y,w,k,v,u){"use strict";const h=["auto","am","ar","ay","as","ak","az","be","bg","bm","bn","co","cs","bs","da","ca","ca","de","ee","dv","dv","dv","en","el","et","eo","eu","es","es","fi","fr","fa","ga","gl","gn","fy","gu","gd","gd","ha","hr","he","hi","ht","ht","hy","id","hu","ig","is","it","ka","jv","ja","ko","kk","kn","af","km","cy","ku","ky","ky","la","lb","lb","lg","lo","lv","ln","lt","mg","mk","ml","mi","mr","nb","mn","my","mt","ne","ms","nl","nl","ny","ny","ny","no","om","or","pa","pa","pl","qu","ps","ps","ru","sa","ro","ro","ro","sl","rw","sk","si","si","sm","sn","so","sr","sq","sw","st","sv","su","ta","tg","te","tl","tk","ti","th","ts","sd","pt","tw","tr","tt","ur","uk","ug","ug","uz","vi","yi","xh","zh-tw","zh-cn","zu","yo"],E=async function(c,s,i){if(!h.find(function(n){return n===s})&&!h.find(function(n){return n===i}))throw new Error("Invalid Lang!");const e=await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=${s}&tl=${i}&dt=t&q=${encodeURIComponent(c)}`);if(!e.ok)throw new Error("Error!");const t=await e.json();if(!t)throw new Error("Error!");return t&&t[0]&&t[0][0]&&t[0].map(function(n){return n[0]}).join("")},r=o.findByProps("openLazy","hideActionSheet"),S=o.findByStoreName("MessageStore"),_=o.findByStoreName("ChannelStore"),f=o.findByProps("sendBotMessage"),b=o.findByName("Icon"),{FormRow:B}=v.Forms,P=u.before("openLazy",r,function(c){const[s,i,{message:e}]=c;i==="MessageLongPressActionSheet"&&s.then(function(t){u.after("default",t,function(n,A){let g=A?.props?.children?.props?.children?.props?.children[1];if(!g||!e.content||e.content==="")return;const m=async function(a){try{f.sendBotMessage(e.channel_id,"PROTOTYPE - PLEASE DON'T USE THIS!");const l=await E(e.content,"auto",a??"ja"),p=S.getMessage(e.channel_id,e.id);y.FluxDispatcher.dispatch({type:"MESSAGE_UPDATE",message:{...p,content:`${l}
\`[auto -> ${a??"ja"}]\``,guild_id:_.getChannel(p.channel_id).guild_id},log_edit:!1})}catch(l){f.sendBotMessage(e.channel_id,"Failed to translate message!"),console.error(l)}};g.push(React.createElement(B,{label:"Translate Message",leading:React.createElement(b,{source:w.getAssetIDByName("ic_locale_24px")}),onPress:async function(){r.hideActionSheet(),await m()},onLongPress:async function(){r.hideActionSheet(),k.showInputAlert({title:"Translate to:",initialValue:"",placeholder:"en",onConfirm:async function(a){a||(a="auto"),await m(a)},confirmText:"Translate",confirmColor:void 0,cancelText:"Cancel"})}}))},!0)})}),T=function(){return P()};return d.onUnload=T,d})({},vendetta.metro,vendetta.metro.common,vendetta.ui.assets,vendetta.ui.alerts,vendetta.ui.components,vendetta.patcher);
