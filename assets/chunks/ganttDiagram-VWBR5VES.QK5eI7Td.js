import{g as ue,s as de,o as fe,n as he,a as me,b as ke,_ as o,c as ft,d as xt,F as ye,G as ge,H as pe,e as ve,I as Te,J as xe,l as ot,K as be,L as Ht,M as Bt,N as we,O as _e,P as De,Q as Se,R as Ce,S as Me,T as Ee,U as qt,V as Gt,W as Xt,X as Ut,Y as Zt,Z as Ie,j as $e,p as Ye,m as ct,$ as te,r as Le,z as Ae,a0 as St}from"../app.BNXvHoHM.js";import"./framework.tRzZN95x.js";import"./theme.Dq-V3qKp.js";var Fe=St({"../../node_modules/.pnpm/dayjs@1.11.20/node_modules/dayjs/plugin/isoWeek.js"(t,s){(function(i,e){typeof t=="object"&&typeof s<"u"?s.exports=e():typeof define=="function"&&define.amd?define(e):(i=typeof globalThis<"u"?globalThis:i||self).dayjs_plugin_isoWeek=e()})(t,(function(){var i="day";return function(e,a,g){var p=o(function(L){return L.add(4-L.isoWeekday(),i)},"a"),b=a.prototype;b.isoWeekYear=function(){return p(this).year()},b.isoWeek=function(L){if(!this.$utils().u(L))return this.add(7*(L-this.isoWeek()),i);var w,P,F,R,G=p(this),z=(w=this.isoWeekYear(),P=this.$u,F=(P?g.utc:g)().year(w).startOf("year"),R=4-F.isoWeekday(),F.isoWeekday()>4&&(R+=7),F.add(R,i));return G.diff(z,"week")+1},b.isoWeekday=function(L){return this.$utils().u(L)?this.day()||7:this.day(this.day()%7?L:L-7)};var A=b.startOf;b.startOf=function(L,w){var P=this.$utils(),F=!!P.u(w)||w;return P.p(L)==="isoweek"?F?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):A.bind(this)(L,w)}}}))}}),Oe=St({"../../node_modules/.pnpm/dayjs@1.11.20/node_modules/dayjs/plugin/customParseFormat.js"(t,s){(function(i,e){typeof t=="object"&&typeof s<"u"?s.exports=e():typeof define=="function"&&define.amd?define(e):(i=typeof globalThis<"u"?globalThis:i||self).dayjs_plugin_customParseFormat=e()})(t,(function(){var i={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},e=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,a=/\d/,g=/\d\d/,p=/\d\d?/,b=/\d*[^-_:/,()\s\d]+/,A={},L=o(function(k){return(k=+k)+(k>68?1900:2e3)},"a"),w=o(function(k){return function(E){this[k]=+E}},"f"),P=[/[+-]\d\d:?(\d\d)?|Z/,function(k){(this.zone||(this.zone={})).offset=(function(E){if(!E||E==="Z")return 0;var O=E.match(/([+-]|\d\d)/g),Y=60*O[1]+(+O[2]||0);return Y===0?0:O[0]==="+"?-Y:Y})(k)}],F=o(function(k){var E=A[k];return E&&(E.indexOf?E:E.s.concat(E.f))},"u"),R=o(function(k,E){var O,Y=A.meridiem;if(Y){for(var X=1;X<=24;X+=1)if(k.indexOf(Y(X,0,E))>-1){O=X>12;break}}else O=k===(E?"pm":"PM");return O},"d"),G={A:[b,function(k){this.afternoon=R(k,!1)}],a:[b,function(k){this.afternoon=R(k,!0)}],Q:[a,function(k){this.month=3*(k-1)+1}],S:[a,function(k){this.milliseconds=100*+k}],SS:[g,function(k){this.milliseconds=10*+k}],SSS:[/\d{3}/,function(k){this.milliseconds=+k}],s:[p,w("seconds")],ss:[p,w("seconds")],m:[p,w("minutes")],mm:[p,w("minutes")],H:[p,w("hours")],h:[p,w("hours")],HH:[p,w("hours")],hh:[p,w("hours")],D:[p,w("day")],DD:[g,w("day")],Do:[b,function(k){var E=A.ordinal,O=k.match(/\d+/);if(this.day=O[0],E)for(var Y=1;Y<=31;Y+=1)E(Y).replace(/\[|\]/g,"")===k&&(this.day=Y)}],w:[p,w("week")],ww:[g,w("week")],M:[p,w("month")],MM:[g,w("month")],MMM:[b,function(k){var E=F("months"),O=(F("monthsShort")||E.map((function(Y){return Y.slice(0,3)}))).indexOf(k)+1;if(O<1)throw new Error;this.month=O%12||O}],MMMM:[b,function(k){var E=F("months").indexOf(k)+1;if(E<1)throw new Error;this.month=E%12||E}],Y:[/[+-]?\d+/,w("year")],YY:[g,function(k){this.year=L(k)}],YYYY:[/\d{4}/,w("year")],Z:P,ZZ:P};function z(k){var E,O;E=k,O=A&&A.formats;for(var Y=(k=E.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(m,T,v){var y=v&&v.toUpperCase();return T||O[v]||i[v]||O[y].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(r,d,f){return d||f.slice(1)}))}))).match(e),X=Y.length,H=0;H<X;H+=1){var $=Y[H],x=G[$],h=x&&x[0],I=x&&x[1];Y[H]=I?{regex:h,parser:I}:$.replace(/^\[|\]$/g,"")}return function(m){for(var T={},v=0,y=0;v<X;v+=1){var r=Y[v];if(typeof r=="string")y+=r.length;else{var d=r.regex,f=r.parser,u=m.slice(y),_=d.exec(u)[0];f.call(T,_),m=m.replace(_,"")}}return(function(n){var D=n.afternoon;if(D!==void 0){var c=n.hours;D?c<12&&(n.hours+=12):c===12&&(n.hours=0),delete n.afternoon}})(T),T}}return o(z,"l"),function(k,E,O){O.p.customParseFormat=!0,k&&k.parseTwoDigitYear&&(L=k.parseTwoDigitYear);var Y=E.prototype,X=Y.parse;Y.parse=function(H){var $=H.date,x=H.utc,h=H.args;this.$u=x;var I=h[1];if(typeof I=="string"){var m=h[2]===!0,T=h[3]===!0,v=m||T,y=h[2];T&&(y=h[2]),A=this.$locale(),!m&&y&&(A=O.Ls[y]),this.$d=(function(u,_,n,D){try{if(["x","X"].indexOf(_)>-1)return new Date((_==="X"?1e3:1)*u);var c=z(_)(u),j=c.year,l=c.month,S=c.day,C=c.hours,V=c.minutes,M=c.seconds,N=c.milliseconds,W=c.zone,it=c.week,rt=new Date,gt=S||(j||l?1:rt.getDate()),ut=j||rt.getFullYear(),B=0;j&&!l||(B=l>0?l-1:rt.getMonth());var Q,U=C||0,at=V||0,K=M||0,nt=N||0;return W?new Date(Date.UTC(ut,B,gt,U,at,K,nt+60*W.offset*1e3)):n?new Date(Date.UTC(ut,B,gt,U,at,K,nt)):(Q=new Date(ut,B,gt,U,at,K,nt),it&&(Q=D(Q).week(it).toDate()),Q)}catch{return new Date("")}})($,I,x,O),this.init(),y&&y!==!0&&(this.$L=this.locale(y).$L),v&&$!=this.format(I)&&(this.$d=new Date("")),A={}}else if(I instanceof Array)for(var r=I.length,d=1;d<=r;d+=1){h[1]=I[d-1];var f=O.apply(this,h);if(f.isValid()){this.$d=f.$d,this.$L=f.$L,this.init();break}d===r&&(this.$d=new Date(""))}else X.call(this,H)}}}))}}),We=St({"../../node_modules/.pnpm/dayjs@1.11.20/node_modules/dayjs/plugin/advancedFormat.js"(t,s){(function(i,e){typeof t=="object"&&typeof s<"u"?s.exports=e():typeof define=="function"&&define.amd?define(e):(i=typeof globalThis<"u"?globalThis:i||self).dayjs_plugin_advancedFormat=e()})(t,(function(){return function(i,e){var a=e.prototype,g=a.format;a.format=function(p){var b=this,A=this.$locale();if(!this.isValid())return g.bind(this)(p);var L=this.$utils(),w=(p||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,(function(P){switch(P){case"Q":return Math.ceil((b.$M+1)/3);case"Do":return A.ordinal(b.$D);case"gggg":return b.weekYear();case"GGGG":return b.isoWeekYear();case"wo":return A.ordinal(b.week(),"W");case"w":case"ww":return L.s(b.week(),P==="w"?1:2,"0");case"W":case"WW":return L.s(b.isoWeek(),P==="W"?1:2,"0");case"k":case"kk":return L.s(String(b.$H===0?24:b.$H),P==="k"?1:2,"0");case"X":return Math.floor(b.$d.getTime()/1e3);case"x":return b.$d.getTime();case"z":return"["+b.offsetName()+"]";case"zzz":return"["+b.offsetName("long")+"]";default:return P}}));return g.bind(this)(w)}}}))}}),Pe=St({"../../node_modules/.pnpm/dayjs@1.11.20/node_modules/dayjs/plugin/duration.js"(t,s){(function(i,e){typeof t=="object"&&typeof s<"u"?s.exports=e():typeof define=="function"&&define.amd?define(e):(i=typeof globalThis<"u"?globalThis:i||self).dayjs_plugin_duration=e()})(t,(function(){var i,e,a=1e3,g=6e4,p=36e5,b=864e5,A=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,L=31536e6,w=2628e6,P=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,F={years:L,months:w,days:b,hours:p,minutes:g,seconds:a,milliseconds:1,weeks:6048e5},R=o(function($){return $ instanceof X},"c"),G=o(function($,x,h){return new X($,h,x.$l)},"f"),z=o(function($){return e.p($)+"s"},"m"),k=o(function($){return $<0},"l"),E=o(function($){return k($)?Math.ceil($):Math.floor($)},"$"),O=o(function($){return Math.abs($)},"y"),Y=o(function($,x){return $?k($)?{negative:!0,format:""+O($)+x}:{negative:!1,format:""+$+x}:{negative:!1,format:""}},"v"),X=(function(){function $(h,I,m){var T=this;if(this.$d={},this.$l=m,h===void 0&&(this.$ms=0,this.parseFromMilliseconds()),I)return G(h*F[z(I)],this);if(typeof h=="number")return this.$ms=h,this.parseFromMilliseconds(),this;if(typeof h=="object")return Object.keys(h).forEach((function(r){T.$d[z(r)]=h[r]})),this.calMilliseconds(),this;if(typeof h=="string"){var v=h.match(P);if(v){var y=v.slice(2).map((function(r){return r!=null?Number(r):0}));return this.$d.years=y[0],this.$d.months=y[1],this.$d.weeks=y[2],this.$d.days=y[3],this.$d.hours=y[4],this.$d.minutes=y[5],this.$d.seconds=y[6],this.calMilliseconds(),this}}return this}o($,"l");var x=$.prototype;return x.calMilliseconds=function(){var h=this;this.$ms=Object.keys(this.$d).reduce((function(I,m){return I+(h.$d[m]||0)*F[m]}),0)},x.parseFromMilliseconds=function(){var h=this.$ms;this.$d.years=E(h/L),h%=L,this.$d.months=E(h/w),h%=w,this.$d.days=E(h/b),h%=b,this.$d.hours=E(h/p),h%=p,this.$d.minutes=E(h/g),h%=g,this.$d.seconds=E(h/a),h%=a,this.$d.milliseconds=h},x.toISOString=function(){var h=Y(this.$d.years,"Y"),I=Y(this.$d.months,"M"),m=+this.$d.days||0;this.$d.weeks&&(m+=7*this.$d.weeks);var T=Y(m,"D"),v=Y(this.$d.hours,"H"),y=Y(this.$d.minutes,"M"),r=this.$d.seconds||0;this.$d.milliseconds&&(r+=this.$d.milliseconds/1e3,r=Math.round(1e3*r)/1e3);var d=Y(r,"S"),f=h.negative||I.negative||T.negative||v.negative||y.negative||d.negative,u=v.format||y.format||d.format?"T":"",_=(f?"-":"")+"P"+h.format+I.format+T.format+u+v.format+y.format+d.format;return _==="P"||_==="-P"?"P0D":_},x.toJSON=function(){return this.toISOString()},x.format=function(h){var I=h||"YYYY-MM-DDTHH:mm:ss",m={Y:this.$d.years,YY:e.s(this.$d.years,2,"0"),YYYY:e.s(this.$d.years,4,"0"),M:this.$d.months,MM:e.s(this.$d.months,2,"0"),D:this.$d.days,DD:e.s(this.$d.days,2,"0"),H:this.$d.hours,HH:e.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:e.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:e.s(this.$d.seconds,2,"0"),SSS:e.s(this.$d.milliseconds,3,"0")};return I.replace(A,(function(T,v){return v||String(m[T])}))},x.as=function(h){return this.$ms/F[z(h)]},x.get=function(h){var I=this.$ms,m=z(h);return m==="milliseconds"?I%=1e3:I=m==="weeks"?E(I/F[m]):this.$d[m],I||0},x.add=function(h,I,m){var T;return T=I?h*F[z(I)]:R(h)?h.$ms:G(h,this).$ms,G(this.$ms+T*(m?-1:1),this)},x.subtract=function(h,I){return this.add(h,I,!0)},x.locale=function(h){var I=this.clone();return I.$l=h,I},x.clone=function(){return G(this.$ms,this)},x.humanize=function(h){return i().add(this.$ms,"ms").locale(this.$l).fromNow(!h)},x.valueOf=function(){return this.asMilliseconds()},x.milliseconds=function(){return this.get("milliseconds")},x.asMilliseconds=function(){return this.as("milliseconds")},x.seconds=function(){return this.get("seconds")},x.asSeconds=function(){return this.as("seconds")},x.minutes=function(){return this.get("minutes")},x.asMinutes=function(){return this.as("minutes")},x.hours=function(){return this.get("hours")},x.asHours=function(){return this.as("hours")},x.days=function(){return this.get("days")},x.asDays=function(){return this.as("days")},x.weeks=function(){return this.get("weeks")},x.asWeeks=function(){return this.as("weeks")},x.months=function(){return this.get("months")},x.asMonths=function(){return this.as("months")},x.years=function(){return this.get("years")},x.asYears=function(){return this.as("years")},$})(),H=o(function($,x,h){return $.add(x.years()*h,"y").add(x.months()*h,"M").add(x.days()*h,"d").add(x.hours()*h,"h").add(x.minutes()*h,"m").add(x.seconds()*h,"s").add(x.milliseconds()*h,"ms")},"p");return function($,x,h){i=h,e=h().$utils(),h.duration=function(T,v){var y=h.locale();return G(T,{$l:y},v)},h.isDuration=R;var I=x.prototype.add,m=x.prototype.subtract;x.prototype.add=function(T,v){return R(T)?H(this,T,1):I.bind(this)(T,v)},x.prototype.subtract=function(T,v){return R(T)?H(this,T,-1):m.bind(this)(T,v)}}}))}}),Et=(function(){var t=o(function(y,r,d,f){for(d=d||{},f=y.length;f--;d[y[f]]=r);return d},"o"),s=[6,8,10,12,13,14,15,16,17,18,20,21,22,23,24,25,26,27,28,29,30,31,33,35,36,38,40],i=[1,26],e=[1,27],a=[1,28],g=[1,29],p=[1,30],b=[1,31],A=[1,32],L=[1,33],w=[1,34],P=[1,9],F=[1,10],R=[1,11],G=[1,12],z=[1,13],k=[1,14],E=[1,15],O=[1,16],Y=[1,19],X=[1,20],H=[1,21],$=[1,22],x=[1,23],h=[1,25],I=[1,35],m={trace:o(function(){},"trace"),yy:{},symbols_:{error:2,start:3,gantt:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NL:10,weekday:11,weekday_monday:12,weekday_tuesday:13,weekday_wednesday:14,weekday_thursday:15,weekday_friday:16,weekday_saturday:17,weekday_sunday:18,weekend:19,weekend_friday:20,weekend_saturday:21,dateFormat:22,inclusiveEndDates:23,topAxis:24,axisFormat:25,tickInterval:26,excludes:27,includes:28,todayMarker:29,title:30,acc_title:31,acc_title_value:32,acc_descr:33,acc_descr_value:34,acc_descr_multiline_value:35,section:36,clickStatement:37,taskTxt:38,taskData:39,click:40,callbackname:41,callbackargs:42,href:43,clickStatementDebug:44,$accept:0,$end:1},terminals_:{2:"error",4:"gantt",6:"EOF",8:"SPACE",10:"NL",12:"weekday_monday",13:"weekday_tuesday",14:"weekday_wednesday",15:"weekday_thursday",16:"weekday_friday",17:"weekday_saturday",18:"weekday_sunday",20:"weekend_friday",21:"weekend_saturday",22:"dateFormat",23:"inclusiveEndDates",24:"topAxis",25:"axisFormat",26:"tickInterval",27:"excludes",28:"includes",29:"todayMarker",30:"title",31:"acc_title",32:"acc_title_value",33:"acc_descr",34:"acc_descr_value",35:"acc_descr_multiline_value",36:"section",38:"taskTxt",39:"taskData",40:"click",41:"callbackname",42:"callbackargs",43:"href"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[19,1],[19,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,2],[37,2],[37,3],[37,3],[37,4],[37,3],[37,4],[37,2],[44,2],[44,3],[44,3],[44,4],[44,3],[44,4],[44,2]],performAction:o(function(r,d,f,u,_,n,D){var c=n.length-1;switch(_){case 1:return n[c-1];case 2:this.$=[];break;case 3:n[c-1].push(n[c]),this.$=n[c-1];break;case 4:case 5:this.$=n[c];break;case 6:case 7:this.$=[];break;case 8:u.setWeekday("monday");break;case 9:u.setWeekday("tuesday");break;case 10:u.setWeekday("wednesday");break;case 11:u.setWeekday("thursday");break;case 12:u.setWeekday("friday");break;case 13:u.setWeekday("saturday");break;case 14:u.setWeekday("sunday");break;case 15:u.setWeekend("friday");break;case 16:u.setWeekend("saturday");break;case 17:u.setDateFormat(n[c].substr(11)),this.$=n[c].substr(11);break;case 18:u.enableInclusiveEndDates(),this.$=n[c].substr(18);break;case 19:u.TopAxis(),this.$=n[c].substr(8);break;case 20:u.setAxisFormat(n[c].substr(11)),this.$=n[c].substr(11);break;case 21:u.setTickInterval(n[c].substr(13)),this.$=n[c].substr(13);break;case 22:u.setExcludes(n[c].substr(9)),this.$=n[c].substr(9);break;case 23:u.setIncludes(n[c].substr(9)),this.$=n[c].substr(9);break;case 24:u.setTodayMarker(n[c].substr(12)),this.$=n[c].substr(12);break;case 27:u.setDiagramTitle(n[c].substr(6)),this.$=n[c].substr(6);break;case 28:this.$=n[c].trim(),u.setAccTitle(this.$);break;case 29:case 30:this.$=n[c].trim(),u.setAccDescription(this.$);break;case 31:u.addSection(n[c].substr(8)),this.$=n[c].substr(8);break;case 33:u.addTask(n[c-1],n[c]),this.$="task";break;case 34:this.$=n[c-1],u.setClickEvent(n[c-1],n[c],null);break;case 35:this.$=n[c-2],u.setClickEvent(n[c-2],n[c-1],n[c]);break;case 36:this.$=n[c-2],u.setClickEvent(n[c-2],n[c-1],null),u.setLink(n[c-2],n[c]);break;case 37:this.$=n[c-3],u.setClickEvent(n[c-3],n[c-2],n[c-1]),u.setLink(n[c-3],n[c]);break;case 38:this.$=n[c-2],u.setClickEvent(n[c-2],n[c],null),u.setLink(n[c-2],n[c-1]);break;case 39:this.$=n[c-3],u.setClickEvent(n[c-3],n[c-1],n[c]),u.setLink(n[c-3],n[c-2]);break;case 40:this.$=n[c-1],u.setLink(n[c-1],n[c]);break;case 41:case 47:this.$=n[c-1]+" "+n[c];break;case 42:case 43:case 45:this.$=n[c-2]+" "+n[c-1]+" "+n[c];break;case 44:case 46:this.$=n[c-3]+" "+n[c-2]+" "+n[c-1]+" "+n[c];break}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},t(s,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:17,12:i,13:e,14:a,15:g,16:p,17:b,18:A,19:18,20:L,21:w,22:P,23:F,24:R,25:G,26:z,27:k,28:E,29:O,30:Y,31:X,33:H,35:$,36:x,37:24,38:h,40:I},t(s,[2,7],{1:[2,1]}),t(s,[2,3]),{9:36,11:17,12:i,13:e,14:a,15:g,16:p,17:b,18:A,19:18,20:L,21:w,22:P,23:F,24:R,25:G,26:z,27:k,28:E,29:O,30:Y,31:X,33:H,35:$,36:x,37:24,38:h,40:I},t(s,[2,5]),t(s,[2,6]),t(s,[2,17]),t(s,[2,18]),t(s,[2,19]),t(s,[2,20]),t(s,[2,21]),t(s,[2,22]),t(s,[2,23]),t(s,[2,24]),t(s,[2,25]),t(s,[2,26]),t(s,[2,27]),{32:[1,37]},{34:[1,38]},t(s,[2,30]),t(s,[2,31]),t(s,[2,32]),{39:[1,39]},t(s,[2,8]),t(s,[2,9]),t(s,[2,10]),t(s,[2,11]),t(s,[2,12]),t(s,[2,13]),t(s,[2,14]),t(s,[2,15]),t(s,[2,16]),{41:[1,40],43:[1,41]},t(s,[2,4]),t(s,[2,28]),t(s,[2,29]),t(s,[2,33]),t(s,[2,34],{42:[1,42],43:[1,43]}),t(s,[2,40],{41:[1,44]}),t(s,[2,35],{43:[1,45]}),t(s,[2,36]),t(s,[2,38],{42:[1,46]}),t(s,[2,37]),t(s,[2,39])],defaultActions:{},parseError:o(function(r,d){if(d.recoverable)this.trace(r);else{var f=new Error(r);throw f.hash=d,f}},"parseError"),parse:o(function(r){var d=this,f=[0],u=[],_=[null],n=[],D=this.table,c="",j=0,l=0,S=2,C=1,V=n.slice.call(arguments,1),M=Object.create(this.lexer),N={yy:{}};for(var W in this.yy)Object.prototype.hasOwnProperty.call(this.yy,W)&&(N.yy[W]=this.yy[W]);M.setInput(r,N.yy),N.yy.lexer=M,N.yy.parser=this,typeof M.yylloc>"u"&&(M.yylloc={});var it=M.yylloc;n.push(it);var rt=M.options&&M.options.ranges;typeof N.yy.parseError=="function"?this.parseError=N.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function gt(Z){f.length=f.length-2*Z,_.length=_.length-Z,n.length=n.length-Z}o(gt,"popStack");function ut(){var Z;return Z=u.pop()||M.lex()||C,typeof Z!="number"&&(Z instanceof Array&&(u=Z,Z=u.pop()),Z=d.symbols_[Z]||Z),Z}o(ut,"lex");for(var B,Q,U,at,K={},nt,tt,jt,Tt;;){if(Q=f[f.length-1],this.defaultActions[Q]?U=this.defaultActions[Q]:((B===null||typeof B>"u")&&(B=ut()),U=D[Q]&&D[Q][B]),typeof U>"u"||!U.length||!U[0]){var Ct="";Tt=[];for(nt in D[Q])this.terminals_[nt]&&nt>S&&Tt.push("'"+this.terminals_[nt]+"'");M.showPosition?Ct="Parse error on line "+(j+1)+`:
`+M.showPosition()+`
Expecting `+Tt.join(", ")+", got '"+(this.terminals_[B]||B)+"'":Ct="Parse error on line "+(j+1)+": Unexpected "+(B==C?"end of input":"'"+(this.terminals_[B]||B)+"'"),this.parseError(Ct,{text:M.match,token:this.terminals_[B]||B,line:M.yylineno,loc:it,expected:Tt})}if(U[0]instanceof Array&&U.length>1)throw new Error("Parse Error: multiple actions possible at state: "+Q+", token: "+B);switch(U[0]){case 1:f.push(B),_.push(M.yytext),n.push(M.yylloc),f.push(U[1]),B=null,l=M.yyleng,c=M.yytext,j=M.yylineno,it=M.yylloc;break;case 2:if(tt=this.productions_[U[1]][1],K.$=_[_.length-tt],K._$={first_line:n[n.length-(tt||1)].first_line,last_line:n[n.length-1].last_line,first_column:n[n.length-(tt||1)].first_column,last_column:n[n.length-1].last_column},rt&&(K._$.range=[n[n.length-(tt||1)].range[0],n[n.length-1].range[1]]),at=this.performAction.apply(K,[c,l,j,N.yy,U[1],_,n].concat(V)),typeof at<"u")return at;tt&&(f=f.slice(0,-1*tt*2),_=_.slice(0,-1*tt),n=n.slice(0,-1*tt)),f.push(this.productions_[U[1]][0]),_.push(K.$),n.push(K._$),jt=D[f[f.length-2]][f[f.length-1]],f.push(jt);break;case 3:return!0}}return!0},"parse")},T=(function(){var y={EOF:1,parseError:o(function(d,f){if(this.yy.parser)this.yy.parser.parseError(d,f);else throw new Error(d)},"parseError"),setInput:o(function(r,d){return this.yy=d||this.yy||{},this._input=r,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:o(function(){var r=this._input[0];this.yytext+=r,this.yyleng++,this.offset++,this.match+=r,this.matched+=r;var d=r.match(/(?:\r\n?|\n).*/g);return d?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),r},"input"),unput:o(function(r){var d=r.length,f=r.split(/(?:\r\n?|\n)/g);this._input=r+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-d),this.offset-=d;var u=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),f.length-1&&(this.yylineno-=f.length-1);var _=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:f?(f.length===u.length?this.yylloc.first_column:0)+u[u.length-f.length].length-f[0].length:this.yylloc.first_column-d},this.options.ranges&&(this.yylloc.range=[_[0],_[0]+this.yyleng-d]),this.yyleng=this.yytext.length,this},"unput"),more:o(function(){return this._more=!0,this},"more"),reject:o(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:o(function(r){this.unput(this.match.slice(r))},"less"),pastInput:o(function(){var r=this.matched.substr(0,this.matched.length-this.match.length);return(r.length>20?"...":"")+r.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:o(function(){var r=this.match;return r.length<20&&(r+=this._input.substr(0,20-r.length)),(r.substr(0,20)+(r.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:o(function(){var r=this.pastInput(),d=new Array(r.length+1).join("-");return r+this.upcomingInput()+`
`+d+"^"},"showPosition"),test_match:o(function(r,d){var f,u,_;if(this.options.backtrack_lexer&&(_={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(_.yylloc.range=this.yylloc.range.slice(0))),u=r[0].match(/(?:\r\n?|\n).*/g),u&&(this.yylineno+=u.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:u?u[u.length-1].length-u[u.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+r[0].length},this.yytext+=r[0],this.match+=r[0],this.matches=r,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(r[0].length),this.matched+=r[0],f=this.performAction.call(this,this.yy,this,d,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),f)return f;if(this._backtrack){for(var n in _)this[n]=_[n];return!1}return!1},"test_match"),next:o(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var r,d,f,u;this._more||(this.yytext="",this.match="");for(var _=this._currentRules(),n=0;n<_.length;n++)if(f=this._input.match(this.rules[_[n]]),f&&(!d||f[0].length>d[0].length)){if(d=f,u=n,this.options.backtrack_lexer){if(r=this.test_match(f,_[n]),r!==!1)return r;if(this._backtrack){d=!1;continue}else return!1}else if(!this.options.flex)break}return d?(r=this.test_match(d,_[u]),r!==!1?r:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:o(function(){var d=this.next();return d||this.lex()},"lex"),begin:o(function(d){this.conditionStack.push(d)},"begin"),popState:o(function(){var d=this.conditionStack.length-1;return d>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:o(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:o(function(d){return d=this.conditionStack.length-1-Math.abs(d||0),d>=0?this.conditionStack[d]:"INITIAL"},"topState"),pushState:o(function(d){this.begin(d)},"pushState"),stateStackSize:o(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:o(function(d,f,u,_){switch(u){case 0:return this.begin("open_directive"),"open_directive";case 1:return this.begin("acc_title"),31;case 2:return this.popState(),"acc_title_value";case 3:return this.begin("acc_descr"),33;case 4:return this.popState(),"acc_descr_value";case 5:this.begin("acc_descr_multiline");break;case 6:this.popState();break;case 7:return"acc_descr_multiline_value";case 8:break;case 9:break;case 10:break;case 11:return 10;case 12:break;case 13:break;case 14:this.begin("href");break;case 15:this.popState();break;case 16:return 43;case 17:this.begin("callbackname");break;case 18:this.popState();break;case 19:this.popState(),this.begin("callbackargs");break;case 20:return 41;case 21:this.popState();break;case 22:return 42;case 23:this.begin("click");break;case 24:this.popState();break;case 25:return 40;case 26:return 4;case 27:return 22;case 28:return 23;case 29:return 24;case 30:return 25;case 31:return 26;case 32:return 28;case 33:return 27;case 34:return 29;case 35:return 12;case 36:return 13;case 37:return 14;case 38:return 15;case 39:return 16;case 40:return 17;case 41:return 18;case 42:return 20;case 43:return 21;case 44:return"date";case 45:return 30;case 46:return"accDescription";case 47:return 36;case 48:return 38;case 49:return 39;case 50:return":";case 51:return 6;case 52:return"INVALID"}},"anonymous"),rules:[/^(?:%%\{)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:weekday\s+monday\b)/i,/^(?:weekday\s+tuesday\b)/i,/^(?:weekday\s+wednesday\b)/i,/^(?:weekday\s+thursday\b)/i,/^(?:weekday\s+friday\b)/i,/^(?:weekday\s+saturday\b)/i,/^(?:weekday\s+sunday\b)/i,/^(?:weekend\s+friday\b)/i,/^(?:weekend\s+saturday\b)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^\n]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^\n]+)/i,/^(?:[^:\n]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[6,7],inclusive:!1},acc_descr:{rules:[4],inclusive:!1},acc_title:{rules:[2],inclusive:!1},callbackargs:{rules:[21,22],inclusive:!1},callbackname:{rules:[18,19,20],inclusive:!1},href:{rules:[15,16],inclusive:!1},click:{rules:[24,25],inclusive:!1},INITIAL:{rules:[0,1,3,5,8,9,10,11,12,13,14,17,23,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],inclusive:!0}}};return y})();m.lexer=T;function v(){this.yy={}}return o(v,"Parser"),v.prototype=m,m.Parser=v,new v})();Et.parser=Et;var Ve=Et,Re=ct(Le()),J=ct(te()),ze=ct(Fe()),Ne=ct(Oe()),je=ct(We());J.default.extend(ze.default);J.default.extend(Ne.default);J.default.extend(je.default);var Qt={friday:5,saturday:6},et="",Lt="",At=void 0,Ft="",mt=[],kt=[],Ot=new Map,Wt=[],_t=[],yt="",Pt="",ee=["active","done","crit","milestone","vert"],Vt=[],dt="",vt=!1,Rt=!1,zt="sunday",Dt="saturday",It=0,He=o(function(){Wt=[],_t=[],yt="",Vt=[],bt=0,Yt=void 0,wt=void 0,q=[],et="",Lt="",Pt="",At=void 0,Ft="",mt=[],kt=[],vt=!1,Rt=!1,It=0,Ot=new Map,dt="",Ye(),zt="sunday",Dt="saturday"},"clear"),Be=o(function(t){dt=t},"setDiagramId"),qe=o(function(t){Lt=t},"setAxisFormat"),Ge=o(function(){return Lt},"getAxisFormat"),Xe=o(function(t){At=t},"setTickInterval"),Ue=o(function(){return At},"getTickInterval"),Ze=o(function(t){Ft=t},"setTodayMarker"),Qe=o(function(){return Ft},"getTodayMarker"),Je=o(function(t){et=t},"setDateFormat"),Ke=o(function(){vt=!0},"enableInclusiveEndDates"),ts=o(function(){return vt},"endDatesAreInclusive"),es=o(function(){Rt=!0},"enableTopAxis"),ss=o(function(){return Rt},"topAxisEnabled"),is=o(function(t){Pt=t},"setDisplayMode"),ns=o(function(){return Pt},"getDisplayMode"),rs=o(function(){return et},"getDateFormat"),se=o((t,s)=>{const i=s.toLowerCase().split(/[\s,]+/).filter(e=>e!=="");return[...new Set([...t,...i])]},"mergeTokens"),as=o(function(t){mt=se(mt,t)},"setIncludes"),os=o(function(){return mt},"getIncludes"),cs=o(function(t){kt=se(kt,t)},"setExcludes"),ls=o(function(){return kt},"getExcludes"),us=o(function(){return Ot},"getLinks"),ds=o(function(t){yt=t,Wt.push(t)},"addSection"),fs=o(function(){return Wt},"getSections"),hs=o(function(){let t=Jt();const s=10;let i=0;for(;!t&&i<s;)t=Jt(),i++;return _t=q,_t},"getTasks"),ie=o(function(t,s,i,e){const a=t.format(s.trim()),g=t.format("YYYY-MM-DD");return e.includes(a)||e.includes(g)?!1:i.includes("weekends")&&(t.isoWeekday()===Qt[Dt]||t.isoWeekday()===Qt[Dt]+1)||i.includes(t.format("dddd").toLowerCase())?!0:i.includes(a)||i.includes(g)},"isInvalidDate"),ms=o(function(t){zt=t},"setWeekday"),ks=o(function(){return zt},"getWeekday"),ys=o(function(t){Dt=t},"setWeekend"),ne=o(function(t,s,i,e){if(!i.length||t.manualEndTime)return;let a;t.startTime instanceof Date?a=(0,J.default)(t.startTime):a=(0,J.default)(t.startTime,s,!0),a=a.add(1,"d");let g;t.endTime instanceof Date?g=(0,J.default)(t.endTime):g=(0,J.default)(t.endTime,s,!0);const[p,b]=gs(a,g,s,i,e);t.endTime=p.toDate(),t.renderEndTime=b},"checkTaskDates"),gs=o(function(t,s,i,e,a){let g=!1,p=null;const b=s.add(1e4,"d");for(;t<=s;){if(g||(p=s.toDate()),g=ie(t,i,e,a),g&&(s=s.add(1,"d"),s>b))throw new Error("Failed to find a valid date that was not excluded by `excludes` after 10,000 iterations.");t=t.add(1,"d")}return[s,p]},"fixTaskDates"),$t=o(function(t,s,i){if(i=i.trim(),o(b=>{const A=b.trim();return A==="x"||A==="X"},"isTimestampFormat")(s)&&/^\d+$/.test(i))return new Date(Number(i));const g=/^after\s+(?<ids>[\d\w- ]+)/.exec(i);if(g!==null){let b=null;for(const L of g.groups.ids.split(" ")){let w=lt(L);w!==void 0&&(!b||w.endTime>b.endTime)&&(b=w)}if(b)return b.endTime;const A=new Date;return A.setHours(0,0,0,0),A}let p=(0,J.default)(i,s.trim(),!0);if(p.isValid())return p.toDate();{ot.debug("Invalid date:"+i),ot.debug("With date format:"+s.trim());const b=new Date(i);if(b===void 0||isNaN(b.getTime())||b.getFullYear()<-1e4||b.getFullYear()>1e4)throw new Error("Invalid date:"+i);return b}},"getStartDate"),re=o(function(t){const s=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t.trim());return s!==null?[Number.parseFloat(s[1]),s[2]]:[NaN,"ms"]},"parseDuration"),ae=o(function(t,s,i,e=!1){i=i.trim();const g=/^until\s+(?<ids>[\d\w- ]+)/.exec(i);if(g!==null){let w=null;for(const F of g.groups.ids.split(" ")){let R=lt(F);R!==void 0&&(!w||R.startTime<w.startTime)&&(w=R)}if(w)return w.startTime;const P=new Date;return P.setHours(0,0,0,0),P}let p=(0,J.default)(i,s.trim(),!0);if(p.isValid())return e&&(p=p.add(1,"d")),p.toDate();let b=(0,J.default)(t);const[A,L]=re(i);if(!Number.isNaN(A)){const w=b.add(A,L);w.isValid()&&(b=w)}return b.toDate()},"getEndDate"),bt=0,ht=o(function(t){return t===void 0?(bt=bt+1,"task"+bt):t},"parseId"),ps=o(function(t,s){let i;s.substr(0,1)===":"?i=s.substr(1,s.length):i=s;const e=i.split(","),a={};Nt(e,a,ee);for(let p=0;p<e.length;p++)e[p]=e[p].trim();let g="";switch(e.length){case 1:a.id=ht(),a.startTime=t.endTime,g=e[0];break;case 2:a.id=ht(),a.startTime=$t(void 0,et,e[0]),g=e[1];break;case 3:a.id=ht(e[0]),a.startTime=$t(void 0,et,e[1]),g=e[2];break}return g&&(a.endTime=ae(a.startTime,et,g,vt),a.manualEndTime=(0,J.default)(g,"YYYY-MM-DD",!0).isValid(),ne(a,et,kt,mt)),a},"compileData"),vs=o(function(t,s){let i;s.substr(0,1)===":"?i=s.substr(1,s.length):i=s;const e=i.split(","),a={};Nt(e,a,ee);for(let g=0;g<e.length;g++)e[g]=e[g].trim();switch(e.length){case 1:a.id=ht(),a.startTime={type:"prevTaskEnd",id:t},a.endTime={data:e[0]};break;case 2:a.id=ht(),a.startTime={type:"getStartDate",startData:e[0]},a.endTime={data:e[1]};break;case 3:a.id=ht(e[0]),a.startTime={type:"getStartDate",startData:e[1]},a.endTime={data:e[2]};break}return a},"parseData"),Yt,wt,q=[],oe={},Ts=o(function(t,s){const i={section:yt,type:yt,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:s},task:t,classes:[]},e=vs(wt,s);i.raw.startTime=e.startTime,i.raw.endTime=e.endTime,i.id=e.id,i.prevTaskId=wt,i.active=e.active,i.done=e.done,i.crit=e.crit,i.milestone=e.milestone,i.vert=e.vert,i.vert?i.order=-1:(i.order=It,It++);const a=q.push(i);wt=i.id,oe[i.id]=a-1},"addTask"),lt=o(function(t){const s=oe[t];return q[s]},"findTaskById"),xs=o(function(t,s){const i={section:yt,type:yt,description:t,task:t,classes:[]},e=ps(Yt,s);i.startTime=e.startTime,i.endTime=e.endTime,i.id=e.id,i.active=e.active,i.done=e.done,i.crit=e.crit,i.milestone=e.milestone,i.vert=e.vert,Yt=i,_t.push(i)},"addTaskOrg"),Jt=o(function(){const t=o(function(i){const e=q[i];let a="";switch(q[i].raw.startTime.type){case"prevTaskEnd":{const g=lt(e.prevTaskId);e.startTime=g.endTime;break}case"getStartDate":a=$t(void 0,et,q[i].raw.startTime.startData),a&&(q[i].startTime=a);break}return q[i].startTime&&(q[i].endTime=ae(q[i].startTime,et,q[i].raw.endTime.data,vt),q[i].endTime&&(q[i].processed=!0,q[i].manualEndTime=(0,J.default)(q[i].raw.endTime.data,"YYYY-MM-DD",!0).isValid(),ne(q[i],et,kt,mt))),q[i].processed},"compileTask");let s=!0;for(const[i,e]of q.entries())t(i),s=s&&e.processed;return s},"compileTasks"),bs=o(function(t,s){let i=s;ft().securityLevel!=="loose"&&(i=(0,Re.sanitizeUrl)(s)),t.split(",").forEach(function(e){lt(e)!==void 0&&(le(e,()=>{window.open(i,"_self")}),Ot.set(e,i))}),ce(t,"clickable")},"setLink"),ce=o(function(t,s){t.split(",").forEach(function(i){let e=lt(i);e!==void 0&&e.classes.push(s)})},"setClass"),ws=o(function(t,s,i){if(ft().securityLevel!=="loose"||s===void 0)return;let e=[];if(typeof i=="string"){e=i.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let g=0;g<e.length;g++){let p=e[g].trim();p.startsWith('"')&&p.endsWith('"')&&(p=p.substr(1,p.length-2)),e[g]=p}}e.length===0&&e.push(t),lt(t)!==void 0&&le(t,()=>{Ae.runFunc(s,...e)})},"setClickFun"),le=o(function(t,s){Vt.push(function(){const i=dt?`${dt}-${t}`:t,e=document.querySelector(`[id="${i}"]`);e!==null&&e.addEventListener("click",function(){s()})},function(){const i=dt?`${dt}-${t}`:t,e=document.querySelector(`[id="${i}-text"]`);e!==null&&e.addEventListener("click",function(){s()})})},"pushFun"),_s=o(function(t,s,i){t.split(",").forEach(function(e){ws(e,s,i)}),ce(t,"clickable")},"setClickEvent"),Ds=o(function(t){Vt.forEach(function(s){s(t)})},"bindFunctions"),Ss={getConfig:o(()=>ft().gantt,"getConfig"),clear:He,setDateFormat:Je,getDateFormat:rs,enableInclusiveEndDates:Ke,endDatesAreInclusive:ts,enableTopAxis:es,topAxisEnabled:ss,setAxisFormat:qe,getAxisFormat:Ge,setTickInterval:Xe,getTickInterval:Ue,setTodayMarker:Ze,getTodayMarker:Qe,setAccTitle:ke,getAccTitle:me,setDiagramTitle:he,getDiagramTitle:fe,setDiagramId:Be,setDisplayMode:is,getDisplayMode:ns,setAccDescription:de,getAccDescription:ue,addSection:ds,getSections:fs,getTasks:hs,addTask:Ts,findTaskById:lt,addTaskOrg:xs,setIncludes:as,getIncludes:os,setExcludes:cs,getExcludes:ls,setClickEvent:_s,setLink:bs,getLinks:us,bindFunctions:Ds,parseDuration:re,isInvalidDate:ie,setWeekday:ms,getWeekday:ks,setWeekend:ys};function Nt(t,s,i){let e=!0;for(;e;)e=!1,i.forEach(function(a){const g="^\\s*"+a+"\\s*$",p=new RegExp(g);t[0].match(p)&&(s[a]=!0,t.shift(1),e=!0)})}o(Nt,"getTaskTags");var pt=ct(te()),Cs=ct(Pe());pt.default.extend(Cs.default);var Ms=o(function(){ot.debug("Something is calling, setConf, remove the call")},"setConf"),Kt={monday:Ee,tuesday:Me,wednesday:Ce,thursday:Se,friday:De,saturday:_e,sunday:we},Es=o((t,s)=>{let i=[...t].map(()=>-1/0),e=[...t].sort((g,p)=>g.startTime-p.startTime||g.order-p.order),a=0;for(const g of e)for(let p=0;p<i.length;p++)if(g.startTime>=i[p]){i[p]=g.endTime,g.order=p+s,p>a&&(a=p);break}return a},"getMaxIntersections"),st,Mt=1e4,Is=o(function(t,s,i,e){const a=ft().gantt;e.db.setDiagramId(s);const g=ft().securityLevel;let p;g==="sandbox"&&(p=xt("#i"+s));const b=g==="sandbox"?xt(p.nodes()[0].contentDocument.body):xt("body"),A=g==="sandbox"?p.nodes()[0].contentDocument:document,L=A.getElementById(s);st=L.parentElement.offsetWidth,st===void 0&&(st=1200),a.useWidth!==void 0&&(st=a.useWidth);const w=e.db.getTasks(),P=w.filter(m=>!m.vert);let F=[];for(const m of P)F.push(m.type);F=I(F);const R={};let G=2*a.topPadding;if(e.db.getDisplayMode()==="compact"||a.displayMode==="compact"){const m={};for(const v of P)m[v.section]===void 0?m[v.section]=[v]:m[v.section].push(v);let T=0;for(const v of Object.keys(m)){const y=Es(m[v],T)+1;T+=y,G+=y*(a.barHeight+a.barGap),R[v]=y}}else{G+=P.length*(a.barHeight+a.barGap);for(const m of F)R[m]=P.filter(T=>T.type===m).length}L.setAttribute("viewBox","0 0 "+st+" "+G);const z=b.select(`[id="${s}"]`),k=ye().domain([ge(w,function(m){return m.startTime}),pe(w,function(m){return m.endTime})]).rangeRound([0,st-a.leftPadding-a.rightPadding]);function E(m,T){const v=m.startTime,y=T.startTime;let r=0;return v>y?r=1:v<y&&(r=-1),r}o(E,"taskCompare"),w.sort(E),O(w,st,G),ve(z,G,st,a.useMaxWidth),z.append("text").text(e.db.getDiagramTitle()).attr("x",st/2).attr("y",a.titleTopMargin).attr("class","titleText");function O(m,T,v){const y=a.barHeight,r=y+a.barGap,d=a.topPadding,f=a.leftPadding,u=Te().domain([0,F.length]).range(["#00B9FA","#F95002"]).interpolate(xe);X(r,d,f,T,v,m,e.db.getExcludes(),e.db.getIncludes()),$(f,d,T,v),Y(m,r,d,f,y,u,T),x(r,d),h(f,d,T,v)}o(O,"makeGantt");function Y(m,T,v,y,r,d,f){m.sort((l,S)=>l.vert===S.vert?0:l.vert?1:-1);const u=m.filter(l=>!l.vert),n=[...new Set(u.map(l=>l.order))].map(l=>u.find(S=>S.order===l));z.append("g").selectAll("rect").data(n).enter().append("rect").attr("x",0).attr("y",function(l,S){return S=l.order,S*T+v-2}).attr("width",function(){return f-a.rightPadding/2}).attr("height",T).attr("class",function(l){for(const[S,C]of F.entries())if(l.type===C)return"section section"+S%a.numberSectionStyles;return"section section0"}).enter();const D=z.append("g").selectAll("rect").data(m).enter(),c=e.db.getLinks();if(D.append("rect").attr("id",function(l){return s+"-"+l.id}).attr("rx",3).attr("ry",3).attr("x",function(l){return l.milestone?k(l.startTime)+y+.5*(k(l.endTime)-k(l.startTime))-.5*r:k(l.startTime)+y}).attr("y",function(l,S){return S=l.order,l.vert?a.gridLineStartPadding:S*T+v}).attr("width",function(l){return l.milestone?r:l.vert?.08*r:k(l.renderEndTime||l.endTime)-k(l.startTime)}).attr("height",function(l){return l.vert?u.length*(a.barHeight+a.barGap)+a.barHeight*2:r}).attr("transform-origin",function(l,S){return S=l.order,(k(l.startTime)+y+.5*(k(l.endTime)-k(l.startTime))).toString()+"px "+(S*T+v+.5*r).toString()+"px"}).attr("class",function(l){const S="task";let C="";l.classes.length>0&&(C=l.classes.join(" "));let V=0;for(const[N,W]of F.entries())l.type===W&&(V=N%a.numberSectionStyles);let M="";return l.active?l.crit?M+=" activeCrit":M=" active":l.done?l.crit?M=" doneCrit":M=" done":l.crit&&(M+=" crit"),M.length===0&&(M=" task"),l.milestone&&(M=" milestone "+M),l.vert&&(M=" vert "+M),M+=V,M+=" "+C,S+M}),D.append("text").attr("id",function(l){return s+"-"+l.id+"-text"}).text(function(l){return l.task}).attr("font-size",a.fontSize).attr("x",function(l){let S=k(l.startTime),C=k(l.renderEndTime||l.endTime);if(l.milestone&&(S+=.5*(k(l.endTime)-k(l.startTime))-.5*r,C=S+r),l.vert)return k(l.startTime)+y;const V=this.getBBox().width;return V>C-S?C+V+1.5*a.leftPadding>f?S+y-5:C+y+5:(C-S)/2+S+y}).attr("y",function(l,S){return l.vert?a.gridLineStartPadding+u.length*(a.barHeight+a.barGap)+60:(S=l.order,S*T+a.barHeight/2+(a.fontSize/2-2)+v)}).attr("text-height",r).attr("class",function(l){const S=k(l.startTime);let C=k(l.endTime);l.milestone&&(C=S+r);const V=this.getBBox().width;let M="";l.classes.length>0&&(M=l.classes.join(" "));let N=0;for(const[it,rt]of F.entries())l.type===rt&&(N=it%a.numberSectionStyles);let W="";return l.active&&(l.crit?W="activeCritText"+N:W="activeText"+N),l.done?l.crit?W=W+" doneCritText"+N:W=W+" doneText"+N:l.crit&&(W=W+" critText"+N),l.milestone&&(W+=" milestoneText"),l.vert&&(W+=" vertText"),V>C-S?C+V+1.5*a.leftPadding>f?M+" taskTextOutsideLeft taskTextOutside"+N+" "+W:M+" taskTextOutsideRight taskTextOutside"+N+" "+W+" width-"+V:M+" taskText taskText"+N+" "+W+" width-"+V}),ft().securityLevel==="sandbox"){let l;l=xt("#i"+s);const S=l.nodes()[0].contentDocument;D.filter(function(C){return c.has(C.id)}).each(function(C){var V=S.querySelector("#"+CSS.escape(s+"-"+C.id)),M=S.querySelector("#"+CSS.escape(s+"-"+C.id+"-text"));const N=V.parentNode;var W=S.createElement("a");W.setAttribute("xlink:href",c.get(C.id)),W.setAttribute("target","_top"),N.appendChild(W),W.appendChild(V),W.appendChild(M)})}}o(Y,"drawRects");function X(m,T,v,y,r,d,f,u){if(f.length===0&&u.length===0)return;let _,n;for(const{startTime:C,endTime:V}of d)(_===void 0||C<_)&&(_=C),(n===void 0||V>n)&&(n=V);if(!_||!n)return;if((0,pt.default)(n).diff((0,pt.default)(_),"year")>5){ot.warn("The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.");return}const D=e.db.getDateFormat(),c=[];let j=null,l=(0,pt.default)(_);for(;l.valueOf()<=n;)e.db.isInvalidDate(l,D,f,u)?j?j.end=l:j={start:l,end:l}:j&&(c.push(j),j=null),l=l.add(1,"d");z.append("g").selectAll("rect").data(c).enter().append("rect").attr("id",C=>s+"-exclude-"+C.start.format("YYYY-MM-DD")).attr("x",C=>k(C.start.startOf("day"))+v).attr("y",a.gridLineStartPadding).attr("width",C=>k(C.end.endOf("day"))-k(C.start.startOf("day"))).attr("height",r-T-a.gridLineStartPadding).attr("transform-origin",function(C,V){return(k(C.start)+v+.5*(k(C.end)-k(C.start))).toString()+"px "+(V*m+.5*r).toString()+"px"}).attr("class","exclude-range")}o(X,"drawExcludeDays");function H(m,T,v,y){if(v<=0||m>T)return 1/0;const r=T-m,d=pt.default.duration({[y??"day"]:v}).asMilliseconds();return d<=0?1/0:Math.ceil(r/d)}o(H,"getEstimatedTickCount");function $(m,T,v,y){const r=e.db.getDateFormat(),d=e.db.getAxisFormat();let f;d?f=d:r==="D"?f="%d":f=a.axisFormat??"%Y-%m-%d";let u=be(k).tickSize(-y+T+a.gridLineStartPadding).tickFormat(Ht(f));const n=/^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(e.db.getTickInterval()||a.tickInterval);if(n!==null){const D=parseInt(n[1],10);if(isNaN(D)||D<=0)ot.warn(`Invalid tick interval value: "${n[1]}". Skipping custom tick interval.`);else{const c=n[2],j=e.db.getWeekday()||a.weekday,l=k.domain(),S=l[0],C=l[1],V=H(S,C,D,c);if(V>Mt)ot.warn(`The tick interval "${D}${c}" would generate ${V} ticks, which exceeds the maximum allowed (${Mt}). This may indicate an invalid date or time range. Skipping custom tick interval.`);else switch(c){case"millisecond":u.ticks(Zt.every(D));break;case"second":u.ticks(Ut.every(D));break;case"minute":u.ticks(Xt.every(D));break;case"hour":u.ticks(Gt.every(D));break;case"day":u.ticks(qt.every(D));break;case"week":u.ticks(Kt[j].every(D));break;case"month":u.ticks(Bt.every(D));break}}}if(z.append("g").attr("class","grid").attr("transform","translate("+m+", "+(y-50)+")").call(u).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10).attr("dy","1em"),e.db.topAxisEnabled()||a.topAxis){let D=Ie(k).tickSize(-y+T+a.gridLineStartPadding).tickFormat(Ht(f));if(n!==null){const c=parseInt(n[1],10);if(isNaN(c)||c<=0)ot.warn(`Invalid tick interval value: "${n[1]}". Skipping custom tick interval.`);else{const j=n[2],l=e.db.getWeekday()||a.weekday,S=k.domain(),C=S[0],V=S[1];if(H(C,V,c,j)<=Mt)switch(j){case"millisecond":D.ticks(Zt.every(c));break;case"second":D.ticks(Ut.every(c));break;case"minute":D.ticks(Xt.every(c));break;case"hour":D.ticks(Gt.every(c));break;case"day":D.ticks(qt.every(c));break;case"week":D.ticks(Kt[l].every(c));break;case"month":D.ticks(Bt.every(c));break}}}z.append("g").attr("class","grid").attr("transform","translate("+m+", "+T+")").call(D).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10)}}o($,"makeGrid");function x(m,T){let v=0;const y=Object.keys(R).map(r=>[r,R[r]]);z.append("g").selectAll("text").data(y).enter().append(function(r){const d=r[0].split($e.lineBreakRegex),f=-(d.length-1)/2,u=A.createElementNS("http://www.w3.org/2000/svg","text");u.setAttribute("dy",f+"em");for(const[_,n]of d.entries()){const D=A.createElementNS("http://www.w3.org/2000/svg","tspan");D.setAttribute("alignment-baseline","central"),D.setAttribute("x","10"),_>0&&D.setAttribute("dy","1em"),D.textContent=n,u.appendChild(D)}return u}).attr("x",10).attr("y",function(r,d){if(d>0)for(let f=0;f<d;f++)return v+=y[d-1][1],r[1]*m/2+v*m+T;else return r[1]*m/2+T}).attr("font-size",a.sectionFontSize).attr("class",function(r){for(const[d,f]of F.entries())if(r[0]===f)return"sectionTitle sectionTitle"+d%a.numberSectionStyles;return"sectionTitle"})}o(x,"vertLabels");function h(m,T,v,y){const r=e.db.getTodayMarker();if(r==="off")return;const d=z.append("g").attr("class","today"),f=new Date,u=d.append("line");u.attr("x1",k(f)+m).attr("x2",k(f)+m).attr("y1",a.titleTopMargin).attr("y2",y-a.titleTopMargin).attr("class","today"),r!==""&&u.attr("style",r.replace(/,/g,";"))}o(h,"drawToday");function I(m){const T={},v=[];for(let y=0,r=m.length;y<r;++y)Object.prototype.hasOwnProperty.call(T,m[y])||(T[m[y]]=!0,v.push(m[y]));return v}o(I,"checkUnique")},"draw"),$s={setConf:Ms,draw:Is},Ys=o(t=>`
  .mermaid-main-font {
        font-family: ${t.fontFamily};
  }

  .exclude-range {
    fill: ${t.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${t.sectionBkgColor};
  }

  .section2 {
    fill: ${t.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${t.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${t.titleColor};
  }

  .sectionTitle1 {
    fill: ${t.titleColor};
  }

  .sectionTitle2 {
    fill: ${t.titleColor};
  }

  .sectionTitle3 {
    fill: ${t.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: ${t.fontFamily};
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${t.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${t.fontFamily};
    fill: ${t.textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${t.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: ${t.fontFamily};
  }

  .taskTextOutsideRight {
    fill: ${t.taskTextDarkColor};
    text-anchor: start;
    font-family: ${t.fontFamily};
  }

  .taskTextOutsideLeft {
    fill: ${t.taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${t.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${t.taskBkgColor};
    stroke: ${t.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${t.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${t.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${t.activeTaskBkgColor};
    stroke: ${t.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${t.doneTaskBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  /* Done task text displayed outside the bar sits against the diagram background,
     not against the done-task bar, so it must use the outside/contrast color. */
  .doneText0.taskTextOutsideLeft,
  .doneText0.taskTextOutsideRight,
  .doneText1.taskTextOutsideLeft,
  .doneText1.taskTextOutsideRight,
  .doneText2.taskTextOutsideLeft,
  .doneText2.taskTextOutsideRight,
  .doneText3.taskTextOutsideLeft,
  .doneText3.taskTextOutsideRight {
    fill: ${t.taskTextOutsideColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  /* Done-crit task text outside the bar — same reasoning as doneText above. */
  .doneCritText0.taskTextOutsideLeft,
  .doneCritText0.taskTextOutsideRight,
  .doneCritText1.taskTextOutsideLeft,
  .doneCritText1.taskTextOutsideRight,
  .doneCritText2.taskTextOutsideLeft,
  .doneCritText2.taskTextOutsideRight,
  .doneCritText3.taskTextOutsideLeft,
  .doneCritText3.taskTextOutsideRight {
    fill: ${t.taskTextOutsideColor} !important;
  }

  .vert {
    stroke: ${t.vertLineColor};
  }

  .vertText {
    font-size: 15px;
    text-anchor: middle;
    fill: ${t.vertLineColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.titleColor||t.textColor};
    font-family: ${t.fontFamily};
  }
`,"getStyles"),Ls=Ys,Ws={parser:Ve,db:Ss,renderer:$s,styles:Ls};export{Ws as diagram};
