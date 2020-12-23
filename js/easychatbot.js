// init Easychat
var a=document.createElement('a');
a.setAttribute('href','javascript:;');
a.setAttribute('id','easychat-floating-button');

var img=document.createElement('img');
img.src='https://chat-plugin.easychat.co/icon.svg';
a.appendChild(img);

var span=document.createElement('span');
span.setAttribute('id', 'easychat-unread-badge');
span.setAttribute('style','display: none');

var d1=document.createElement('div');
d1.setAttribute('id','easychat-close-btn');
d1.setAttribute('class','easychat-close-btn-close');
var d2=document.createElement('div');
d2.setAttribute('id','easychat-chat-dialog');
d2.setAttribute('class','easychat-chat-dialog-close');
var ifrm=document.createElement('iframe');
ifrm.setAttribute('id','easychat-chat-dialog-iframe');
ifrm.setAttribute('src','https://client-chat.easychat.co/?appkey=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0ZWFtTmFtZSI6IlRlc3QxMjMifQ.02GfyghchxmZ__rk58BHOttL7RVvWaKsl9cObQVXx94&lang=zh-Hant');
ifrm.style.width='100%';ifrm.style.height='100%';
ifrm.style.frameborder='0';
ifrm.style.scrolling='on';

d2.appendChild(ifrm);
document.body.appendChild(a);
document.body.appendChild(span);
document.body.appendChild(d1);
document.body.appendChild(d2);
console.log("easychat init");
// <script src='https://chat-plugin.easychat.co/easychat.js'></script>

