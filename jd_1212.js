/*
双十二红包
自定义变量:FLCODE2
对自己返利无影响,不用禁用
cron 0 0,20 * * * https://raw.githubusercontent.com/zero205/JD_tencent_scf/main/jd_1212.js
* */
const $ = new Env('暖暖红包');
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
const flCode = $.isNode() ? (process.env.FLCODE2 ? process.env.FLCODE2 : '') : '';
let cookiesArr = [];
if ($.isNode()) {
    Object.keys(jdCookieNode).forEach((item) => {
        cookiesArr.push(jdCookieNode[item])
    })
    if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => {
    };
} else {
    cookiesArr = [
        $.getdata("CookieJD"),
        $.getdata("CookieJD2"),
        ...$.toObj($.getdata("CookiesJD") || "[]").map((item) => item.cookie)].filter((item) => !!item);
}
var _0xodT='jsjiami.com.v6',_0xodT_=['‮_0xodT'],_0x2c76=[_0xodT,'wotLMMKA','KsOjXik0Fg==','w6J2w7nCgsKs','TyAcFlw=','w610w7zDh8K6','w7vCgMKnNMOMwp8=','woJvM8KXMg==','wrsyw75hwqY=','UgTCrV7Crw==','QndRworCvVPDrCc0woHCsw3CjC8mw5Yt','TMOLwrQfLA==','wojCr8OwGcOM','I8OATisf','w4XDnh0Fw4A=','w4HCuBHDjjM=','TMOdDMK4AnXCj8KKPmFueWFGwp9rFmHCoSVqwqgvNm3CkylNwqpxGcKKS1Fqwr4efsKbwqDCpirDpsKtRcKBCcKBwot0w4YBw7NSwrnDrMKdwrQqw5lCw4zCh8KYVkETw70xcG7ClxPClMOxwoxi','dsOnGcKtFw==','XcOAwqE=','DsOrJHTChQ==','wpZtVSbCiA==','Vn1UwpPDpQ==','w5Igw5osLw==','JcO5wp1hw44=','wqHChMO/QsObw6s=','acObO8KkBQ==','AcK2OMKM','wrFhwrkmwrg=','wocTw6JTwoQ=','wo9sLcKMJQ==','V8KRfFrDgQ==','Z3l0wq/Cmw==','wpdFwrsMwqY=','FMKffwY6','HGRDGGc=','wogsw7x4wpQ=','cmtawpTDow==','PsOPwpthw4Q=','V8OHwqcbOw==','fMOmF8KBHw==','U8Kdw5jCqzQ+','wpTDsWBHRw==','w5pjw57CvsKjK8OCKsORG8OMw47Dh8Klbkg=','MmfCj8KWFcON','wp3CgcOTV8On','wqTCimVdw4EF','wrd2ZCbCvw==','OFdPEGkP','AQ3CmcKFwrY=','X8OsAXLCpw==','a8Kgw5rCtBI=','F8K4OMKNw5HCnA==','HcOtO13CmA==','wowRCxPCsA==','Z3t3wrfCpQ==','w5LClcKEGsOT','VWd0w49+','w4EfwqLDgw4=','wrYRwoEwwpo=','44KH5oy/56e644Gg6K2J5Yal6Iy35Y+n5Lus5Lm/6LeF5Y215LqNC8OKw6jCjinCjArnm73mjbTkv4bnlK3CvcOeRsKtBA/nm5Pku7rkur/nrqbli7vojqPljKE=','wr/Ci0pNw4Q=','dwMVG10=','FcK9ZsK9wro=','V8OWwrI=','w48xw5sg','wpJyAMK8EA==','PwrCpcKxwrVhwod3w4Ywwo3DocOAcsO8w5R6KMOfLglzwprDq8OuQ2/CoiEuwqJ9w4TDgsKJaSzDqRrDj8OwEzQ=','T8OaIHnCog==','wrFGwrwiwrXCgsOs','wps7wrrDnGs=','LRvClTvDlw==','wqrCinY2w4wOw6Y=','w4tSw40=','OVLCjHcV','woXClH1Zw7I=','G3JoElU=','w5duw5o=','FeWKneWmpeWMi8Ok5aaZ6LeP','woLChS8ICw==','ajjDm8KhJQ==','w7TCjsK0EsOW','wrTCgGE=','EMKNai0=','wqrDuuWlg+i2kXjDo+WNi+WZq8KEwrI=','wp1NLcKVMMKwHA==','wrIIwrMMw7XDnMKH','w7xqw5h9wpg=','V2hLwoo=','UcOlD3nCsMOawpk=','bGliwqB7Hg/CrcOULw==','w44yw5wgOMOj','LGVKG0g=','w5vChsKyM8Os','EsOubz0h','Qj/DlUzCrQ==','dsOMDVfCpQ==','wr/DkllDRypQwrI=','wpFAIsKELMOnDMOdw4vDgwBIHcKWworCjn7ChMKqw6EBDFocwo1+wqk=','wrXCiFBVw5c=','w7fCuXJ7ZsO7R3g3HMORbGfCvm3DssOjNjDCiTXCnBfDr8OGDMOewpvDksKfAXnDucKTe3AqZSfCtAnCusOwezpHYsKuHBllwqU=','w6hlw4zCoMKg','OTXCucKCwrIDw7I=','wo7CpGhDw5U=','D8Odwodyw6w=','CyDCljnDlw==','VsOAwrsyC1Y=','TQ0vO1A=','PhgUfMKA','wq9EZizCiw==','w4Nyw4zCu8Kr','w401w5giL8O/','wqHClSktIA==','IsKZYMK1wqs=','w4QDw7szFg==','bWllw70=','wowEwq0XwpE=','woxywr0qwrU=','w7XCqh7DnS0=','AcOKdigk','egvDgknCig==','VcOvCVjCp8Oa','wpFtwrsVwpU=','w6I+wq3DrRs=','SU9uwrE=','YndcwqDDnw==','P8Opwp5+w7TDmm8=','wrZJwrUi','wqfCmuWlgui1j8KifeWMsOWalR5p','KXjCpsKDBQ==','Und/wojDtQ==','eMK6bGHDkA==','C8KYcx4R','wqbDjlZmfg==','wr3liZPlpIrljpJe5aaX6LSt','WsOoD2/ClMOc','XMOJwro6DQ==','bW14w6l3HA==','BB4DW8Ks','DMKJdDg=','F8K8JcKZ','HMK+D8Kiw4k=','w4QjwqLDsjc=','UQvDmXbCtg==','PG3Ctj4BHMKAeDvCkQ==','wokuwrg3wps=','bMK8QUnDjw==','LsKrcR47','Q8KsXmTDtQ==','O1TCs8KfCA==','JcO3wpZyw7g=','w6RQw6hZwo4=','w7dww7Y=','M+WIkeWnneWOmyrlpYDotYU=','WxzDrFTCtQ==','wrXCnEgMw4A=','w6XCisKzAQ==','QMK2e3TDoA==','K8KBZD4x','BcKPTSLCjA==','w6wIw6E2Nw==','wqHChMO/','wrfliILlpZrljrjDjeWlqOi2oA==','dsOyJEvCpA==','w5kjw4ckNg==','wo3Cs8OD','wqbpopPljYjnupTmn5xd','TcK1w7HCihU=','w5VPw5VYwo7DjDwCajpGfsKiwpNI','EcK8LsKdwpHCmcKDw7PCjcKWwoAZw4PCosOMNiJ2wodSFcO/w5AMw5YRwqzDg8Opw6xhw4bDicO/w7NdNMOrT8OUwp4jbsONw4oowr5rAj7Cm8K6w69ww7U6EHAfwqDCvRHDpA==','wrTDh1NSH2NbwrnDj8KqwpoQw5rDigjCi2E=','kjszjitaQmUFVVil.McQoSqqmQ.Iv6K=='];if(function(_0x314fb4,_0x4ca6b1,_0x11fb9b){function _0x55c3da(_0x20888f,_0x5c9e64,_0x1ba13f,_0x1b256b,_0x4570cb,_0x11db0c){_0x5c9e64=_0x5c9e64>>0x8,_0x4570cb='po';var _0x4c4a0d='shift',_0x4b57ed='push',_0x11db0c='‮';if(_0x5c9e64<_0x20888f){while(--_0x20888f){_0x1b256b=_0x314fb4[_0x4c4a0d]();if(_0x5c9e64===_0x20888f&&_0x11db0c==='‮'&&_0x11db0c['length']===0x1){_0x5c9e64=_0x1b256b,_0x1ba13f=_0x314fb4[_0x4570cb+'p']();}else if(_0x5c9e64&&_0x1ba13f['replace'](/[kztQUFVVlMQSqqQIK=]/g,'')===_0x5c9e64){_0x314fb4[_0x4b57ed](_0x1b256b);}}_0x314fb4[_0x4b57ed](_0x314fb4[_0x4c4a0d]());}return 0xc2b0a;};return _0x55c3da(++_0x4ca6b1,_0x11fb9b)>>_0x4ca6b1^_0x11fb9b;}(_0x2c76,0x18b,0x18b00),_0x2c76){_0xodT_=_0x2c76['length']^0x18b;};function _0x523f(_0x2d8f05,_0x4b81bb){_0x2d8f05=~~'0x'['concat'](_0x2d8f05['slice'](0x1));var _0x34a12b=_0x2c76[_0x2d8f05];if(_0x523f['gYiavR']===undefined){(function(){var _0x36c6a6=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x33748d='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x36c6a6['atob']||(_0x36c6a6['atob']=function(_0x3e4c21){var _0x5c685e=String(_0x3e4c21)['replace'](/=+$/,'');for(var _0x3e3156=0x0,_0x1e9e81,_0x292610,_0x151bd2=0x0,_0x558098='';_0x292610=_0x5c685e['charAt'](_0x151bd2++);~_0x292610&&(_0x1e9e81=_0x3e3156%0x4?_0x1e9e81*0x40+_0x292610:_0x292610,_0x3e3156++%0x4)?_0x558098+=String['fromCharCode'](0xff&_0x1e9e81>>(-0x2*_0x3e3156&0x6)):0x0){_0x292610=_0x33748d['indexOf'](_0x292610);}return _0x558098;});}());function _0xd7aec1(_0x230f38,_0x4b81bb){var _0x29929c=[],_0x5dd881=0x0,_0x550fbc,_0x18d5c9='',_0x4ce2f1='';_0x230f38=atob(_0x230f38);for(var _0x333808=0x0,_0x432180=_0x230f38['length'];_0x333808<_0x432180;_0x333808++){_0x4ce2f1+='%'+('00'+_0x230f38['charCodeAt'](_0x333808)['toString'](0x10))['slice'](-0x2);}_0x230f38=decodeURIComponent(_0x4ce2f1);for(var _0x2ab90b=0x0;_0x2ab90b<0x100;_0x2ab90b++){_0x29929c[_0x2ab90b]=_0x2ab90b;}for(_0x2ab90b=0x0;_0x2ab90b<0x100;_0x2ab90b++){_0x5dd881=(_0x5dd881+_0x29929c[_0x2ab90b]+_0x4b81bb['charCodeAt'](_0x2ab90b%_0x4b81bb['length']))%0x100;_0x550fbc=_0x29929c[_0x2ab90b];_0x29929c[_0x2ab90b]=_0x29929c[_0x5dd881];_0x29929c[_0x5dd881]=_0x550fbc;}_0x2ab90b=0x0;_0x5dd881=0x0;for(var _0x991246=0x0;_0x991246<_0x230f38['length'];_0x991246++){_0x2ab90b=(_0x2ab90b+0x1)%0x100;_0x5dd881=(_0x5dd881+_0x29929c[_0x2ab90b])%0x100;_0x550fbc=_0x29929c[_0x2ab90b];_0x29929c[_0x2ab90b]=_0x29929c[_0x5dd881];_0x29929c[_0x5dd881]=_0x550fbc;_0x18d5c9+=String['fromCharCode'](_0x230f38['charCodeAt'](_0x991246)^_0x29929c[(_0x29929c[_0x2ab90b]+_0x29929c[_0x5dd881])%0x100]);}return _0x18d5c9;}_0x523f['CKkOjP']=_0xd7aec1;_0x523f['kPQaiz']={};_0x523f['gYiavR']=!![];}var _0x981158=_0x523f['kPQaiz'][_0x2d8f05];if(_0x981158===undefined){if(_0x523f['XWpVjH']===undefined){_0x523f['XWpVjH']=!![];}_0x34a12b=_0x523f['CKkOjP'](_0x34a12b,_0x4b81bb);_0x523f['kPQaiz'][_0x2d8f05]=_0x34a12b;}else{_0x34a12b=_0x981158;}return _0x34a12b;};!(async()=>{var _0x1e1e08={'vZNdw':function(_0x4b5cbd,_0x5e205e){return _0x4b5cbd===_0x5e205e;},'DRkXt':function(_0x38866d,_0x4c9e9a){return _0x38866d+_0x4c9e9a;},'xiNbD':function(_0x55b7f2,_0xfd05e2){return _0x55b7f2!==_0xfd05e2;},'wiHBT':'hDiqk','ZErky':_0x523f('‮0','Pk9O'),'iVCHL':_0x523f('‫1','vH0D'),'NqrFC':function(_0x33567d,_0x3c531a){return _0x33567d<_0x3c531a;},'KTSIG':function(_0x96748a,_0x219545){return _0x96748a(_0x219545);}};if(!cookiesArr[0x0]){if(_0x1e1e08[_0x523f('‫2',')bz^')](_0x1e1e08[_0x523f('‫3','Zje@')],_0x1e1e08[_0x523f('‫4','PIu3')])){$[_0x523f('‫5','u]gd')]($[_0x523f('‫6','rn!m')],_0x1e1e08[_0x523f('‫7','uN3E')],_0x523f('‫8','N6EE'),{'open-url':'https://bean.m.jd.com/bean/signIndex.action'});return;}else{if(_0x1e1e08[_0x523f('‫9','JB6D')](newCookie[_0x523f('‫a','jci$')](name[_0x523f('‮b','2EFo')]('=')[0x1]),-0x1))newCookie+=_0x1e1e08[_0x523f('‮c',')n*L')](name[_0x523f('‮d','@3HA')](/ /g,''),';\x20');}}if(Date[_0x523f('‮e','hs*o')]()>0x17db485b000){if(_0x1e1e08[_0x523f('‫f','EFl*')](_0x523f('‮10',')bz^'),_0x523f('‫11','nU9W'))){console[_0x523f('‮12','3NqB')](userName+_0x523f('‮13','JB6D'));return;}else{return;}}for(let _0x22f815=0x0;_0x1e1e08[_0x523f('‫14','XG2^')](_0x22f815,cookiesArr['length']);_0x22f815++){await _0x1e1e08[_0x523f('‫15','SLAq')](main,cookiesArr[_0x22f815]);}})()[_0x523f('‫16','vH0D')](_0x47331a=>{$[_0x523f('‮17','@3HA')]('','❌\x20'+$[_0x523f('‮18','nTDG')]+_0x523f('‮19','Ygn2')+_0x47331a+'!','');})[_0x523f('‫1a','uN3E')](()=>{$['done']();});async function main(_0x5fe1c8){var _0x1d57e6={'rjTzW':function(_0x37c8ac,_0x1e6bcb){return _0x37c8ac(_0x1e6bcb);},'Sdqzf':function(_0xd7dad5,_0x118ae1){return _0xd7dad5(_0x118ae1);},'IFllU':_0x523f('‫1b','Pk9O'),'YKpxK':'nK5ObMM','bihZt':function(_0x235f91,_0x5986e0){return _0x235f91>_0x5986e0;},'MgrbY':function(_0x4fb5c6,_0x456997){return _0x4fb5c6!==_0x456997;},'krXBt':_0x523f('‫1c','hs*o'),'HSKVS':'aAIns','xsqam':function(_0x5b365c,_0x15a3bd,_0x792c16){return _0x5b365c(_0x15a3bd,_0x792c16);},'QtOeX':function(_0x4ca318,_0x194c20,_0x5ddca0,_0x12781f){return _0x4ca318(_0x194c20,_0x5ddca0,_0x12781f);},'UmcvX':_0x523f('‫1d','Qy[)'),'ygYKw':_0x523f('‫1e','JB6D'),'eSMvM':_0x523f('‫1f','yp@x'),'PGvVR':'Set-Cookie','VwFfM':_0x523f('‫20','rn!m'),'GFODb':function(_0x941c34,_0x3bd2fd){return _0x941c34!==_0x3bd2fd;},'mQQwa':'hfQqh','TZemx':_0x523f('‮21','nU9W'),'IEcRX':function(_0xb5fe53,_0x51d57a){return _0xb5fe53!==_0x51d57a;},'VfHhZ':_0x523f('‫22','vH0D'),'GzdZN':function(_0x316dec,_0x4127a3){return _0x316dec===_0x4127a3;},'wzGrd':'data','uttVx':function(_0x4b48ba,_0x3de855){return _0x4b48ba===_0x3de855;},'uslDM':_0x523f('‮23','5%QQ'),'stdfz':function(_0x3fe3cc,_0x3c1f8f){return _0x3fe3cc!=_0x3c1f8f;},'eVRni':_0x523f('‮24','s7*s'),'AmRee':_0x523f('‮25','JB6D'),'msNVm':function(_0x3ec52a,_0xb2bc86){return _0x3ec52a+_0xb2bc86;},'EGnwR':_0x523f('‮26','W1%9'),'MXWsl':'Location','OrJVq':function(_0x30695e,_0x2fd53c,_0xcb1acf,_0x518291){return _0x30695e(_0x2fd53c,_0xcb1acf,_0x518291);}};let _0x4cb9f5=_0x523f('‫27','uN3E')+_0x1d57e6[_0x523f('‮28',')bz^')](randomString,0x28)+_0x523f('‫29','XG2^')+randomString(0xa)+';appBuild/'+_0x1d57e6[_0x523f('‮2a','3NqB')](randomString,0x6)+';jdSupportDarkMode/0;Mozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x2013_1_2\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/605.1.15\x20(KHTML,\x20like\x20Gecko)\x20Mobile/15E228;supportJDSHWK/1;';let _0x3e236c=[_0x523f('‫2b','N6EE'),_0x1d57e6[_0x523f('‮2c',')bz^')],_0x1d57e6[_0x523f('‮2d','0zB5')]];if(flCode&&_0x1d57e6[_0x523f('‫2e',')n*L')](flCode[_0x523f('‫2f','u]gd')],0x0)){if(_0x1d57e6[_0x523f('‮30','Zje@')](_0x1d57e6[_0x523f('‫31','qnKm')],_0x1d57e6['HSKVS'])){_0x3e236c=[''+flCode];}else{_0x1d57e6[_0x523f('‮32','bE1)')](resolve,{'resp':resp,'data':data});}}let _0x50c6e4=_0x3e236c[_0x1d57e6[_0x523f('‮33','3NqB')](random,0x0,_0x3e236c[_0x523f('‮34','rn!m')])];let _0x143059='';let _0x540db8=decodeURIComponent(_0x5fe1c8[_0x523f('‮35','XG2^')](/pt_pin=([^; ]+)(?=;?)/)&&_0x5fe1c8[_0x523f('‫36','PIu3')](/pt_pin=([^; ]+)(?=;?)/)[0x1]);let _0x5e6ae2=await _0x1d57e6['QtOeX'](getInfo1,_0x5fe1c8,_0x50c6e4,_0x4cb9f5);let _0x58326b=_0x5e6ae2[_0x1d57e6['UmcvX']][_0x1d57e6['ygYKw']][_0x1d57e6[_0x523f('‮37','rn!m')]]||_0x5e6ae2[_0x523f('‮38','yp@x')]['headers'][_0x1d57e6[_0x523f('‫39','Pk9O')]]||'';let _0x359433='';if(_0x58326b){if(typeof _0x58326b!=_0x1d57e6['VwFfM']){if(_0x1d57e6['GFODb'](_0x1d57e6['mQQwa'],_0x1d57e6[_0x523f('‫3a','jci$')])){_0x359433=_0x58326b[_0x523f('‫3b','Ygn2')](',');}else{_0x359433=_0x58326b;}}else{if(_0x1d57e6[_0x523f('‮3c','5%QQ')]('GalGa',_0x523f('‫3d','s7*s'))){_0x359433=_0x58326b;}else{$[_0x523f('‫3e','JB6D')](e,resp);}}for(let _0x92f448 of _0x359433){if(_0x1d57e6[_0x523f('‮3f','jci$')](_0x1d57e6['VfHhZ'],'SEkTx')){let _0x1dc16f=_0x92f448[_0x523f('‮40','bB59')](';')[0x0][_0x523f('‫41','w*5k')]();if(_0x1dc16f['split']('=')[0x1]){if(_0x1d57e6[_0x523f('‫42','Qy[)')](_0x143059[_0x523f('‫43','#KB8')](_0x1dc16f['split']('=')[0x1]),-0x1))_0x143059+=_0x1dc16f['replace'](/ /g,'')+';\x20';}}else{$['log']('','❌\x20'+$[_0x523f('‮44','jci$')]+_0x523f('‮45','2iHg')+e+'!','');}}}let _0xc6f7bd=_0x5e6ae2[_0x1d57e6[_0x523f('‫46','xHnR')]]['match'](/(https:\/\/u\.jd\.com\/jda[^']+)/)&&_0x5e6ae2[_0x1d57e6[_0x523f('‫47','Qy[)')]][_0x523f('‫48','!7Xi')](/(https:\/\/u\.jd\.com\/jda[^']+)/)[0x1]||'';if(!_0xc6f7bd){if(_0x1d57e6[_0x523f('‫49','nTDG')]('TbVQg',_0x1d57e6[_0x523f('‫4a','W1%9')])){console[_0x523f('‮17','@3HA')](_0x540db8+_0x523f('‫4b','bB59'));return;}else{e=e||0x20;let _0x3630ab='abcdef0123456789',_0x302ced=_0x3630ab['length'],_0x2b16da='';for(i=0x0;i<e;i++)_0x2b16da+=_0x3630ab[_0x523f('‮4c','JB6D')](Math[_0x523f('‫4d','u]gd')](Math[_0x523f('‮4e','yp@x')]()*_0x302ced));return _0x2b16da;}}let _0x52f07e=await _0x1d57e6[_0x523f('‮4f','qnKm')](getInfo2,_0xc6f7bd,_0x5fe1c8+'\x20'+_0x143059,_0x4cb9f5);_0x58326b=_0x52f07e[_0x523f('‮50','nTDG')]&&_0x52f07e[_0x523f('‮51','TxNl')][_0x1d57e6[_0x523f('‫52','TxNl')]]&&(_0x52f07e[_0x1d57e6[_0x523f('‮53','bB59')]][_0x1d57e6[_0x523f('‮54','s7*s')]][_0x523f('‫55','EFl*')]||_0x52f07e[_0x1d57e6[_0x523f('‫56','Pk9O')]][_0x1d57e6[_0x523f('‫57','!7Xi')]][_0x1d57e6[_0x523f('‫58','nTDG')]]||'')||'';_0x359433='';if(_0x58326b){if(_0x1d57e6['stdfz'](typeof _0x58326b,_0x1d57e6[_0x523f('‮59','!7Xi')])){if(_0x1d57e6['eVRni']===_0x1d57e6[_0x523f('‮5a','xHnR')]){_0x359433=_0x58326b[_0x523f('‫5b','#KB8')](',');}else{resolve();}}else{if(_0x1d57e6['uttVx'](_0x1d57e6['AmRee'],_0x1d57e6[_0x523f('‮5c','hs*o')])){_0x359433=_0x58326b;}else{console[_0x523f('‫5d','QPUQ')](_0x540db8+_0x523f('‫5e','yp@x'));return;}}for(let _0x5d489e of _0x359433){let _0x1dc16f=_0x5d489e['split'](';')[0x0]['trim']();if(_0x1dc16f[_0x523f('‮5f','s7*s')]('=')[0x1]){if(_0x1d57e6['uttVx'](_0x143059['indexOf'](_0x1dc16f['split']('=')[0x1]),-0x1))_0x143059+=_0x1d57e6[_0x523f('‫60','@3HA')](_0x1dc16f['replace'](/ /g,''),';\x20');}}}let _0x385c22=_0x1d57e6['Sdqzf'](decodeURIComponent,_0x52f07e[_0x523f('‫61','vH0D')]&&_0x52f07e[_0x1d57e6[_0x523f('‫62','!7Xi')]]['headers']&&(_0x52f07e[_0x1d57e6[_0x523f('‫63','nTDG')]]['headers'][_0x1d57e6[_0x523f('‮64','7O#V')]]||_0x52f07e[_0x1d57e6['UmcvX']][_0x1d57e6['ygYKw']][_0x1d57e6[_0x523f('‫65','rn!m')]]||'')||'');if(!_0x385c22){console[_0x523f('‮66','&@)U')](_0x540db8+_0x523f('‮67','QPUQ'));return;}await _0x1d57e6[_0x523f('‮68','JB6D')](getcouponUrl,_0x385c22,_0x5fe1c8+'\x20'+_0x143059,_0x4cb9f5);let _0x164a15=await _0x1d57e6[_0x523f('‫69','rn!m')](getCoupons,_0x5fe1c8+'\x20'+_0x143059,_0x4cb9f5);console[_0x523f('‫6a','&!Ku')](_0x540db8+_0x523f('‫6b','lRv(')+_0x164a15);}function getcouponUrl(_0x53c299,_0x2fe849,_0x1747ba){var _0x5644db={'jmVZd':function(_0x57788c,_0x48b5f8){return _0x57788c(_0x48b5f8);},'YwDXj':_0x523f('‮6c','jI*L'),'qJKTb':_0x523f('‮6d','hs*o'),'ICSLl':'zh-CN,zh-Hans;q=0.9'};return new Promise(_0x2e8bc1=>{const _0x47e96e={'url':_0x53c299,'headers':{'Host':_0x5644db['qJKTb'],'Accept':_0x523f('‮6e','TxNl'),'User-Agent':_0x1747ba,'Accept-Language':_0x5644db['ICSLl'],'Accept-Encoding':_0x523f('‫6f','W1%9'),'Cookie':_0x2fe849}};$[_0x523f('‮70','uN3E')](_0x47e96e,async(_0x2630b8,_0x472d4d,_0x4f28af)=>{var _0x3d7b86={'vkmiE':function(_0x360a96,_0x412f81){return _0x5644db['jmVZd'](_0x360a96,_0x412f81);},'yKpcn':function(_0x2e598c){return _0x2e598c();}};try{}catch(_0x409c85){$[_0x523f('‫71','5%QQ')](_0x409c85,_0x472d4d);}finally{if(_0x5644db[_0x523f('‫72','3NqB')]===_0x523f('‫73','Zje@')){try{_0x3d7b86[_0x523f('‮74','QPUQ')](_0x2e8bc1,{'resp':_0x472d4d,'data':_0x4f28af});}catch(_0x4bd47e){$[_0x523f('‮75','vH0D')](_0x4bd47e,_0x472d4d);}finally{_0x3d7b86[_0x523f('‮76','uN3E')](_0x2e8bc1);}}else{_0x5644db[_0x523f('‮77','kal3')](_0x2e8bc1,_0x4f28af);}}});});}async function getCoupons(_0xd6c47b,_0x33e700){var _0x1fd5e3={'vnaJS':function(_0x3be5e5,_0x43f669){return _0x3be5e5===_0x43f669;},'eLwGY':function(_0x466e21,_0x1ec819){return _0x466e21(_0x1ec819);},'RGUBV':function(_0x1075d0){return _0x1075d0();},'NdnoC':function(_0x43638c,_0x1f83c7){return _0x43638c!==_0x1f83c7;},'Gbczj':'tZBFw','vSPbJ':'yeZnU','gKuMm':_0x523f('‫78','s7*s'),'RNaef':_0x523f('‫79','Qy[)')};return new Promise(_0x3a8e00=>{var _0x275eba={'guUAs':function(_0x1d0111,_0xe70680){return _0x1fd5e3[_0x523f('‮7a','u]gd')](_0x1d0111,_0xe70680);},'KCgpT':_0x523f('‮7b','&!Ku'),'vZQNK':function(_0x497132,_0x47d0d5){return _0x1fd5e3[_0x523f('‫7c','5%QQ')](_0x497132,_0x47d0d5);},'MrClt':function(_0x30d155){return _0x1fd5e3['RGUBV'](_0x30d155);}};if(_0x1fd5e3[_0x523f('‫7d','2iHg')](_0x1fd5e3[_0x523f('‮7e','Ygn2')],_0x1fd5e3['vSPbJ'])){let _0x38cc01={'url':_0x523f('‮7f','4hRB')+Date['now']()+'&body={%22couponUrl%22:%22RhdnEUlBFEc8FBpAEUBoRUsaFBBrRR5BQhBtQhMRFhBpERtHFkA4FgYbHBNnHwYRCB1mEBMa%22,%22source%22:20118}','headers':{'Accept-Language':_0x1fd5e3['gKuMm'],'Accept-Encoding':_0x1fd5e3[_0x523f('‫80','4hRB')],'Cookie':_0xd6c47b,'user-agent':_0x33e700}};$[_0x523f('‮81','u]gd')](_0x38cc01,async(_0x314573,_0x57bf0e,_0x5d8a4e)=>{var _0x1c59c7={'RKusN':function(_0x5a547f,_0x59a3e8){return _0x275eba[_0x523f('‮82','d^vy')](_0x5a547f,_0x59a3e8);},'sojki':function(_0x32185c,_0x3bfab6){return _0x32185c+_0x3bfab6;}};try{if('ZPjlm'===_0x275eba[_0x523f('‮83','bE1)')]){let _0x327c47=_0xd6c47b['split'](';')[0x0]['trim']();if(_0x327c47[_0x523f('‫84','Qy[)')]('=')[0x1]){if(_0x1c59c7['RKusN'](newCookie['indexOf'](_0x327c47[_0x523f('‮85','rn!m')]('=')[0x1]),-0x1))newCookie+=_0x1c59c7[_0x523f('‫86','0zB5')](_0x327c47['replace'](/ /g,''),';\x20');}}else{_0x275eba['vZQNK'](_0x3a8e00,_0x5d8a4e);}}catch(_0x5ce9a3){$[_0x523f('‮87','&@)U')](_0x5ce9a3,_0x57bf0e);}finally{_0x275eba[_0x523f('‮88','4hRB')](_0x3a8e00);}});}else{$[_0x523f('‫89','TxNl')]();}});}async function getInfo2(_0x120cf2,_0x201eb9,_0x53a0ca){var _0x4156d5={'ZDssz':function(_0xb50891){return _0xb50891();},'BJdXy':_0x523f('‫8a','jci$'),'OmcKk':function(_0x516a7a,_0x41fb82){return _0x516a7a===_0x41fb82;},'QCzbP':_0x523f('‮8b','kal3'),'jsxNS':_0x523f('‫8c','uN3E')};return new Promise(_0x548305=>{var _0x4df8d5={'VRbla':function(_0x371ead,_0x163973){return _0x371ead(_0x163973);},'oalMg':_0x4156d5[_0x523f('‮8d','!7Xi')],'YsTCV':function(_0x16a3a1,_0x3a13d2){return _0x16a3a1!==_0x3a13d2;},'GLZet':function(_0x1788ad){return _0x4156d5[_0x523f('‫8e','w*5k')](_0x1788ad);}};if(_0x4156d5[_0x523f('‫8f','jci$')](_0x4156d5['QCzbP'],_0x4156d5[_0x523f('‫90','nTDG')])){try{_0x548305(data);}catch(_0x46b15c){$['logErr'](_0x46b15c,resp);}finally{_0x4156d5['ZDssz'](_0x548305);}}else{const _0x25885c={'url':_0x120cf2,'followRedirect':![],'headers':{'Cookie':_0x201eb9,'user-agent':_0x53a0ca}};$['get'](_0x25885c,async(_0x26e6e7,_0x22cf03,_0x102f9d)=>{var _0x300905={'enFAY':function(_0x24c71c,_0x4e0e2a){return _0x4df8d5[_0x523f('‮91','nU9W')](_0x24c71c,_0x4e0e2a);}};if(_0x4df8d5['oalMg']===_0x4df8d5['oalMg']){try{if(_0x4df8d5[_0x523f('‮92','kal3')](_0x523f('‮93','Qy[)'),_0x523f('‫94','0zB5'))){_0x548305({'resp':_0x22cf03,'data':_0x102f9d});}else{setcookie=setcookies['split'](',');}}catch(_0x139b8f){if(_0x523f('‮95','u]gd')===_0x523f('‫96','4hRB')){setcookie=setcookies['split'](',');}else{$[_0x523f('‫97','jI*L')](_0x139b8f,_0x22cf03);}}finally{_0x4df8d5[_0x523f('‮98','W1%9')](_0x548305);}}else{try{}catch(_0x3f6d4d){$[_0x523f('‮75','vH0D')](_0x3f6d4d,_0x22cf03);}finally{_0x300905['enFAY'](_0x548305,_0x102f9d);}}});}});}function randomString(_0x214ae9){var _0xe18fec={'PjKPN':function(_0x471c6a,_0x3f3538){return _0x471c6a<_0x3f3538;},'jXVpc':function(_0x3f458e,_0x5559aa){return _0x3f458e*_0x5559aa;}};_0x214ae9=_0x214ae9||0x20;let _0x358b77=_0x523f('‮99','3NqB'),_0x29c0f7=_0x358b77[_0x523f('‮9a','xHnR')],_0x56c12c='';for(i=0x0;_0xe18fec[_0x523f('‮9b','&@)U')](i,_0x214ae9);i++)_0x56c12c+=_0x358b77[_0x523f('‫9c',')bz^')](Math['floor'](_0xe18fec[_0x523f('‮9d','bE1)')](Math[_0x523f('‫9e','nU9W')](),_0x29c0f7)));return _0x56c12c;}function random(_0x30807c,_0x419a25){var _0x4460fb={'VsHDp':function(_0x362e19,_0x3e25a7){return _0x362e19+_0x3e25a7;},'TReZT':function(_0xd6e5b6,_0x5c53e9){return _0xd6e5b6*_0x5c53e9;},'tsJhn':function(_0x345023,_0x2ca398){return _0x345023-_0x2ca398;}};return _0x4460fb[_0x523f('‮9f','N6EE')](Math[_0x523f('‫a0','JB6D')](_0x4460fb[_0x523f('‮a1','jI*L')](Math[_0x523f('‫a2','TxNl')](),_0x4460fb[_0x523f('‫a3','d^vy')](_0x419a25,_0x30807c))),_0x30807c);}async function getInfo1(_0x2b652d,_0xb0e57,_0xda083e){var _0x5771bc={'ZFpkD':function(_0x2fcc10){return _0x2fcc10();},'JkbBf':_0x523f('‫a4','24dJ')};return new Promise(_0x4ac928=>{var _0x1e4355={'PQcGa':function(_0x96c8f5){return _0x5771bc[_0x523f('‫a5','w*5k')](_0x96c8f5);}};if(_0x523f('‫a6','*0fw')===_0x5771bc[_0x523f('‮a7','yp@x')]){setcookie=setcookies;}else{const _0x48d29b={'url':'https://u.jd.com/'+_0xb0e57,'followRedirect':![],'headers':{'Cookie':_0x2b652d,'user-agent':_0xda083e}};$['get'](_0x48d29b,async(_0x83f31d,_0xee8f20,_0x4885b0)=>{try{_0x4ac928({'resp':_0xee8f20,'data':_0x4885b0});}catch(_0x504fbd){$['logErr'](_0x504fbd,_0xee8f20);}finally{_0x1e4355[_0x523f('‫a8','bB59')](_0x4ac928);}});}});};_0xodT='jsjiami.com.v6';
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
