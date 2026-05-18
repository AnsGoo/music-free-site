import{g as le,s as ue,t as de,q as fe,a as he,b as me,_ as o,c as dt,d as xt,L as ke,M as ye,N as ge,e as pe,O as ve,P as Te,l as rt,Q as xe,R as Ht,S as Bt,T as be,U as we,V as _e,W as De,X as Se,Y as Ce,Z as Me,$ as qt,a0 as Gt,a1 as Xt,a2 as Ut,a3 as Zt,a4 as Ee,j as Ie,A as Ye,m as at,a5 as te,r as Le,u as $e,a6 as St}from"../app.CvksOmqD.js";import"./framework.BhwUwRYb.js";import"./theme.400Wy4w0.js";var Ae=St({"../../node_modules/.pnpm/dayjs@1.11.19/node_modules/dayjs/plugin/isoWeek.js"(t,n){(function(r,i){typeof t=="object"&&typeof n<"u"?n.exports=i():typeof define=="function"&&define.amd?define(i):(r=typeof globalThis<"u"?globalThis:r||self).dayjs_plugin_isoWeek=i()})(t,(function(){var r="day";return function(i,a,k){var y=o(function(A){return A.add(4-A.isoWeekday(),r)},"a"),b=a.prototype;b.isoWeekYear=function(){return y(this).year()},b.isoWeek=function(A){if(!this.$utils().u(A))return this.add(7*(A-this.isoWeek()),r);var w,F,V,R,N=y(this),S=(w=this.isoWeekYear(),F=this.$u,V=(F?k.utc:k)().year(w).startOf("year"),R=4-V.isoWeekday(),V.isoWeekday()>4&&(R+=7),V.add(R,r));return N.diff(S,"week")+1},b.isoWeekday=function(A){return this.$utils().u(A)?this.day()||7:this.day(this.day()%7?A:A-7)};var O=b.startOf;b.startOf=function(A,w){var F=this.$utils(),V=!!F.u(w)||w;return F.p(A)==="isoweek"?V?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):O.bind(this)(A,w)}}}))}}),Fe=St({"../../node_modules/.pnpm/dayjs@1.11.19/node_modules/dayjs/plugin/customParseFormat.js"(t,n){(function(r,i){typeof t=="object"&&typeof n<"u"?n.exports=i():typeof define=="function"&&define.amd?define(i):(r=typeof globalThis<"u"?globalThis:r||self).dayjs_plugin_customParseFormat=i()})(t,(function(){var r={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},i=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,a=/\d/,k=/\d\d/,y=/\d\d?/,b=/\d*[^-_:/,()\s\d]+/,O={},A=o(function(D){return(D=+D)+(D>68?1900:2e3)},"a"),w=o(function(D){return function(C){this[D]=+C}},"f"),F=[/[+-]\d\d:?(\d\d)?|Z/,function(D){(this.zone||(this.zone={})).offset=(function(C){if(!C||C==="Z")return 0;var W=C.match(/([+-]|\d\d)/g),L=60*W[1]+(+W[2]||0);return L===0?0:W[0]==="+"?-L:L})(D)}],V=o(function(D){var C=O[D];return C&&(C.indexOf?C:C.s.concat(C.f))},"u"),R=o(function(D,C){var W,L=O.meridiem;if(L){for(var z=1;z<=24;z+=1)if(D.indexOf(L(z,0,C))>-1){W=z>12;break}}else W=D===(C?"pm":"PM");return W},"d"),N={A:[b,function(D){this.afternoon=R(D,!1)}],a:[b,function(D){this.afternoon=R(D,!0)}],Q:[a,function(D){this.month=3*(D-1)+1}],S:[a,function(D){this.milliseconds=100*+D}],SS:[k,function(D){this.milliseconds=10*+D}],SSS:[/\d{3}/,function(D){this.milliseconds=+D}],s:[y,w("seconds")],ss:[y,w("seconds")],m:[y,w("minutes")],mm:[y,w("minutes")],H:[y,w("hours")],h:[y,w("hours")],HH:[y,w("hours")],hh:[y,w("hours")],D:[y,w("day")],DD:[k,w("day")],Do:[b,function(D){var C=O.ordinal,W=D.match(/\d+/);if(this.day=W[0],C)for(var L=1;L<=31;L+=1)C(L).replace(/\[|\]/g,"")===D&&(this.day=L)}],w:[y,w("week")],ww:[k,w("week")],M:[y,w("month")],MM:[k,w("month")],MMM:[b,function(D){var C=V("months"),W=(V("monthsShort")||C.map((function(L){return L.slice(0,3)}))).indexOf(D)+1;if(W<1)throw new Error;this.month=W%12||W}],MMMM:[b,function(D){var C=V("months").indexOf(D)+1;if(C<1)throw new Error;this.month=C%12||C}],Y:[/[+-]?\d+/,w("year")],YY:[k,function(D){this.year=A(D)}],YYYY:[/\d{4}/,w("year")],Z:F,ZZ:F};function S(D){var C,W;C=D,W=O&&O.formats;for(var L=(D=C.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(v,p,g){var f=g&&g.toUpperCase();return p||W[g]||r[g]||W[f].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(c,l,h){return l||h.slice(1)}))}))).match(i),z=L.length,B=0;B<z;B+=1){var E=L[B],T=N[E],d=T&&T[0],u=T&&T[1];L[B]=u?{regex:d,parser:u}:E.replace(/^\[|\]$/g,"")}return function(v){for(var p={},g=0,f=0;g<z;g+=1){var c=L[g];if(typeof c=="string")f+=c.length;else{var l=c.regex,h=c.parser,m=v.slice(f),x=l.exec(m)[0];h.call(p,x),v=v.replace(x,"")}}return(function(s){var P=s.afternoon;if(P!==void 0){var e=s.hours;P?e<12&&(s.hours+=12):e===12&&(s.hours=0),delete s.afternoon}})(p),p}}return o(S,"l"),function(D,C,W){W.p.customParseFormat=!0,D&&D.parseTwoDigitYear&&(A=D.parseTwoDigitYear);var L=C.prototype,z=L.parse;L.parse=function(B){var E=B.date,T=B.utc,d=B.args;this.$u=T;var u=d[1];if(typeof u=="string"){var v=d[2]===!0,p=d[3]===!0,g=v||p,f=d[2];p&&(f=d[2]),O=this.$locale(),!v&&f&&(O=W.Ls[f]),this.$d=(function(m,x,s,P){try{if(["x","X"].indexOf(x)>-1)return new Date((x==="X"?1e3:1)*m);var e=S(x)(m),_=e.year,$=e.month,Y=e.day,I=e.hours,q=e.minutes,M=e.seconds,Q=e.milliseconds,st=e.zone,ct=e.week,mt=new Date,kt=Y||(_||$?1:mt.getDate()),lt=_||mt.getFullYear(),j=0;_&&!$||(j=$>0?$-1:mt.getMonth());var U,G=I||0,nt=q||0,J=M||0,it=Q||0;return st?new Date(Date.UTC(lt,j,kt,G,nt,J,it+60*st.offset*1e3)):s?new Date(Date.UTC(lt,j,kt,G,nt,J,it)):(U=new Date(lt,j,kt,G,nt,J,it),ct&&(U=P(U).week(ct).toDate()),U)}catch{return new Date("")}})(E,u,T,W),this.init(),f&&f!==!0&&(this.$L=this.locale(f).$L),g&&E!=this.format(u)&&(this.$d=new Date("")),O={}}else if(u instanceof Array)for(var c=u.length,l=1;l<=c;l+=1){d[1]=u[l-1];var h=W.apply(this,d);if(h.isValid()){this.$d=h.$d,this.$L=h.$L,this.init();break}l===c&&(this.$d=new Date(""))}else z.call(this,B)}}}))}}),Oe=St({"../../node_modules/.pnpm/dayjs@1.11.19/node_modules/dayjs/plugin/advancedFormat.js"(t,n){(function(r,i){typeof t=="object"&&typeof n<"u"?n.exports=i():typeof define=="function"&&define.amd?define(i):(r=typeof globalThis<"u"?globalThis:r||self).dayjs_plugin_advancedFormat=i()})(t,(function(){return function(r,i){var a=i.prototype,k=a.format;a.format=function(y){var b=this,O=this.$locale();if(!this.isValid())return k.bind(this)(y);var A=this.$utils(),w=(y||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,(function(F){switch(F){case"Q":return Math.ceil((b.$M+1)/3);case"Do":return O.ordinal(b.$D);case"gggg":return b.weekYear();case"GGGG":return b.isoWeekYear();case"wo":return O.ordinal(b.week(),"W");case"w":case"ww":return A.s(b.week(),F==="w"?1:2,"0");case"W":case"WW":return A.s(b.isoWeek(),F==="W"?1:2,"0");case"k":case"kk":return A.s(String(b.$H===0?24:b.$H),F==="k"?1:2,"0");case"X":return Math.floor(b.$d.getTime()/1e3);case"x":return b.$d.getTime();case"z":return"["+b.offsetName()+"]";case"zzz":return"["+b.offsetName("long")+"]";default:return F}}));return k.bind(this)(w)}}}))}}),We=St({"../../node_modules/.pnpm/dayjs@1.11.19/node_modules/dayjs/plugin/duration.js"(t,n){(function(r,i){typeof t=="object"&&typeof n<"u"?n.exports=i():typeof define=="function"&&define.amd?define(i):(r=typeof globalThis<"u"?globalThis:r||self).dayjs_plugin_duration=i()})(t,(function(){var r,i,a=1e3,k=6e4,y=36e5,b=864e5,O=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,A=31536e6,w=2628e6,F=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,V={years:A,months:w,days:b,hours:y,minutes:k,seconds:a,milliseconds:1,weeks:6048e5},R=o(function(E){return E instanceof z},"c"),N=o(function(E,T,d){return new z(E,d,T.$l)},"f"),S=o(function(E){return i.p(E)+"s"},"m"),D=o(function(E){return E<0},"l"),C=o(function(E){return D(E)?Math.ceil(E):Math.floor(E)},"$"),W=o(function(E){return Math.abs(E)},"y"),L=o(function(E,T){return E?D(E)?{negative:!0,format:""+W(E)+T}:{negative:!1,format:""+E+T}:{negative:!1,format:""}},"v"),z=(function(){function E(d,u,v){var p=this;if(this.$d={},this.$l=v,d===void 0&&(this.$ms=0,this.parseFromMilliseconds()),u)return N(d*V[S(u)],this);if(typeof d=="number")return this.$ms=d,this.parseFromMilliseconds(),this;if(typeof d=="object")return Object.keys(d).forEach((function(c){p.$d[S(c)]=d[c]})),this.calMilliseconds(),this;if(typeof d=="string"){var g=d.match(F);if(g){var f=g.slice(2).map((function(c){return c!=null?Number(c):0}));return this.$d.years=f[0],this.$d.months=f[1],this.$d.weeks=f[2],this.$d.days=f[3],this.$d.hours=f[4],this.$d.minutes=f[5],this.$d.seconds=f[6],this.calMilliseconds(),this}}return this}o(E,"l");var T=E.prototype;return T.calMilliseconds=function(){var d=this;this.$ms=Object.keys(this.$d).reduce((function(u,v){return u+(d.$d[v]||0)*V[v]}),0)},T.parseFromMilliseconds=function(){var d=this.$ms;this.$d.years=C(d/A),d%=A,this.$d.months=C(d/w),d%=w,this.$d.days=C(d/b),d%=b,this.$d.hours=C(d/y),d%=y,this.$d.minutes=C(d/k),d%=k,this.$d.seconds=C(d/a),d%=a,this.$d.milliseconds=d},T.toISOString=function(){var d=L(this.$d.years,"Y"),u=L(this.$d.months,"M"),v=+this.$d.days||0;this.$d.weeks&&(v+=7*this.$d.weeks);var p=L(v,"D"),g=L(this.$d.hours,"H"),f=L(this.$d.minutes,"M"),c=this.$d.seconds||0;this.$d.milliseconds&&(c+=this.$d.milliseconds/1e3,c=Math.round(1e3*c)/1e3);var l=L(c,"S"),h=d.negative||u.negative||p.negative||g.negative||f.negative||l.negative,m=g.format||f.format||l.format?"T":"",x=(h?"-":"")+"P"+d.format+u.format+p.format+m+g.format+f.format+l.format;return x==="P"||x==="-P"?"P0D":x},T.toJSON=function(){return this.toISOString()},T.format=function(d){var u=d||"YYYY-MM-DDTHH:mm:ss",v={Y:this.$d.years,YY:i.s(this.$d.years,2,"0"),YYYY:i.s(this.$d.years,4,"0"),M:this.$d.months,MM:i.s(this.$d.months,2,"0"),D:this.$d.days,DD:i.s(this.$d.days,2,"0"),H:this.$d.hours,HH:i.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:i.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:i.s(this.$d.seconds,2,"0"),SSS:i.s(this.$d.milliseconds,3,"0")};return u.replace(O,(function(p,g){return g||String(v[p])}))},T.as=function(d){return this.$ms/V[S(d)]},T.get=function(d){var u=this.$ms,v=S(d);return v==="milliseconds"?u%=1e3:u=v==="weeks"?C(u/V[v]):this.$d[v],u||0},T.add=function(d,u,v){var p;return p=u?d*V[S(u)]:R(d)?d.$ms:N(d,this).$ms,N(this.$ms+p*(v?-1:1),this)},T.subtract=function(d,u){return this.add(d,u,!0)},T.locale=function(d){var u=this.clone();return u.$l=d,u},T.clone=function(){return N(this.$ms,this)},T.humanize=function(d){return r().add(this.$ms,"ms").locale(this.$l).fromNow(!d)},T.valueOf=function(){return this.asMilliseconds()},T.milliseconds=function(){return this.get("milliseconds")},T.asMilliseconds=function(){return this.as("milliseconds")},T.seconds=function(){return this.get("seconds")},T.asSeconds=function(){return this.as("seconds")},T.minutes=function(){return this.get("minutes")},T.asMinutes=function(){return this.as("minutes")},T.hours=function(){return this.get("hours")},T.asHours=function(){return this.as("hours")},T.days=function(){return this.get("days")},T.asDays=function(){return this.as("days")},T.weeks=function(){return this.get("weeks")},T.asWeeks=function(){return this.as("weeks")},T.months=function(){return this.get("months")},T.asMonths=function(){return this.as("months")},T.years=function(){return this.get("years")},T.asYears=function(){return this.as("years")},E})(),B=o(function(E,T,d){return E.add(T.years()*d,"y").add(T.months()*d,"M").add(T.days()*d,"d").add(T.hours()*d,"h").add(T.minutes()*d,"m").add(T.seconds()*d,"s").add(T.milliseconds()*d,"ms")},"p");return function(E,T,d){r=d,i=d().$utils(),d.duration=function(p,g){var f=d.locale();return N(p,{$l:f},g)},d.isDuration=R;var u=T.prototype.add,v=T.prototype.subtract;T.prototype.add=function(p,g){return R(p)?B(this,p,1):u.bind(this)(p,g)},T.prototype.subtract=function(p,g){return R(p)?B(this,p,-1):v.bind(this)(p,g)}}}))}}),Et=(function(){var t=o(function(f,c,l,h){for(l=l||{},h=f.length;h--;l[f[h]]=c);return l},"o"),n=[6,8,10,12,13,14,15,16,17,18,20,21,22,23,24,25,26,27,28,29,30,31,33,35,36,38,40],r=[1,26],i=[1,27],a=[1,28],k=[1,29],y=[1,30],b=[1,31],O=[1,32],A=[1,33],w=[1,34],F=[1,9],V=[1,10],R=[1,11],N=[1,12],S=[1,13],D=[1,14],C=[1,15],W=[1,16],L=[1,19],z=[1,20],B=[1,21],E=[1,22],T=[1,23],d=[1,25],u=[1,35],v={trace:o(function(){},"trace"),yy:{},symbols_:{error:2,start:3,gantt:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NL:10,weekday:11,weekday_monday:12,weekday_tuesday:13,weekday_wednesday:14,weekday_thursday:15,weekday_friday:16,weekday_saturday:17,weekday_sunday:18,weekend:19,weekend_friday:20,weekend_saturday:21,dateFormat:22,inclusiveEndDates:23,topAxis:24,axisFormat:25,tickInterval:26,excludes:27,includes:28,todayMarker:29,title:30,acc_title:31,acc_title_value:32,acc_descr:33,acc_descr_value:34,acc_descr_multiline_value:35,section:36,clickStatement:37,taskTxt:38,taskData:39,click:40,callbackname:41,callbackargs:42,href:43,clickStatementDebug:44,$accept:0,$end:1},terminals_:{2:"error",4:"gantt",6:"EOF",8:"SPACE",10:"NL",12:"weekday_monday",13:"weekday_tuesday",14:"weekday_wednesday",15:"weekday_thursday",16:"weekday_friday",17:"weekday_saturday",18:"weekday_sunday",20:"weekend_friday",21:"weekend_saturday",22:"dateFormat",23:"inclusiveEndDates",24:"topAxis",25:"axisFormat",26:"tickInterval",27:"excludes",28:"includes",29:"todayMarker",30:"title",31:"acc_title",32:"acc_title_value",33:"acc_descr",34:"acc_descr_value",35:"acc_descr_multiline_value",36:"section",38:"taskTxt",39:"taskData",40:"click",41:"callbackname",42:"callbackargs",43:"href"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[19,1],[19,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,2],[37,2],[37,3],[37,3],[37,4],[37,3],[37,4],[37,2],[44,2],[44,3],[44,3],[44,4],[44,3],[44,4],[44,2]],performAction:o(function(c,l,h,m,x,s,P){var e=s.length-1;switch(x){case 1:return s[e-1];case 2:this.$=[];break;case 3:s[e-1].push(s[e]),this.$=s[e-1];break;case 4:case 5:this.$=s[e];break;case 6:case 7:this.$=[];break;case 8:m.setWeekday("monday");break;case 9:m.setWeekday("tuesday");break;case 10:m.setWeekday("wednesday");break;case 11:m.setWeekday("thursday");break;case 12:m.setWeekday("friday");break;case 13:m.setWeekday("saturday");break;case 14:m.setWeekday("sunday");break;case 15:m.setWeekend("friday");break;case 16:m.setWeekend("saturday");break;case 17:m.setDateFormat(s[e].substr(11)),this.$=s[e].substr(11);break;case 18:m.enableInclusiveEndDates(),this.$=s[e].substr(18);break;case 19:m.TopAxis(),this.$=s[e].substr(8);break;case 20:m.setAxisFormat(s[e].substr(11)),this.$=s[e].substr(11);break;case 21:m.setTickInterval(s[e].substr(13)),this.$=s[e].substr(13);break;case 22:m.setExcludes(s[e].substr(9)),this.$=s[e].substr(9);break;case 23:m.setIncludes(s[e].substr(9)),this.$=s[e].substr(9);break;case 24:m.setTodayMarker(s[e].substr(12)),this.$=s[e].substr(12);break;case 27:m.setDiagramTitle(s[e].substr(6)),this.$=s[e].substr(6);break;case 28:this.$=s[e].trim(),m.setAccTitle(this.$);break;case 29:case 30:this.$=s[e].trim(),m.setAccDescription(this.$);break;case 31:m.addSection(s[e].substr(8)),this.$=s[e].substr(8);break;case 33:m.addTask(s[e-1],s[e]),this.$="task";break;case 34:this.$=s[e-1],m.setClickEvent(s[e-1],s[e],null);break;case 35:this.$=s[e-2],m.setClickEvent(s[e-2],s[e-1],s[e]);break;case 36:this.$=s[e-2],m.setClickEvent(s[e-2],s[e-1],null),m.setLink(s[e-2],s[e]);break;case 37:this.$=s[e-3],m.setClickEvent(s[e-3],s[e-2],s[e-1]),m.setLink(s[e-3],s[e]);break;case 38:this.$=s[e-2],m.setClickEvent(s[e-2],s[e],null),m.setLink(s[e-2],s[e-1]);break;case 39:this.$=s[e-3],m.setClickEvent(s[e-3],s[e-1],s[e]),m.setLink(s[e-3],s[e-2]);break;case 40:this.$=s[e-1],m.setLink(s[e-1],s[e]);break;case 41:case 47:this.$=s[e-1]+" "+s[e];break;case 42:case 43:case 45:this.$=s[e-2]+" "+s[e-1]+" "+s[e];break;case 44:case 46:this.$=s[e-3]+" "+s[e-2]+" "+s[e-1]+" "+s[e];break}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},t(n,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:17,12:r,13:i,14:a,15:k,16:y,17:b,18:O,19:18,20:A,21:w,22:F,23:V,24:R,25:N,26:S,27:D,28:C,29:W,30:L,31:z,33:B,35:E,36:T,37:24,38:d,40:u},t(n,[2,7],{1:[2,1]}),t(n,[2,3]),{9:36,11:17,12:r,13:i,14:a,15:k,16:y,17:b,18:O,19:18,20:A,21:w,22:F,23:V,24:R,25:N,26:S,27:D,28:C,29:W,30:L,31:z,33:B,35:E,36:T,37:24,38:d,40:u},t(n,[2,5]),t(n,[2,6]),t(n,[2,17]),t(n,[2,18]),t(n,[2,19]),t(n,[2,20]),t(n,[2,21]),t(n,[2,22]),t(n,[2,23]),t(n,[2,24]),t(n,[2,25]),t(n,[2,26]),t(n,[2,27]),{32:[1,37]},{34:[1,38]},t(n,[2,30]),t(n,[2,31]),t(n,[2,32]),{39:[1,39]},t(n,[2,8]),t(n,[2,9]),t(n,[2,10]),t(n,[2,11]),t(n,[2,12]),t(n,[2,13]),t(n,[2,14]),t(n,[2,15]),t(n,[2,16]),{41:[1,40],43:[1,41]},t(n,[2,4]),t(n,[2,28]),t(n,[2,29]),t(n,[2,33]),t(n,[2,34],{42:[1,42],43:[1,43]}),t(n,[2,40],{41:[1,44]}),t(n,[2,35],{43:[1,45]}),t(n,[2,36]),t(n,[2,38],{42:[1,46]}),t(n,[2,37]),t(n,[2,39])],defaultActions:{},parseError:o(function(c,l){if(l.recoverable)this.trace(c);else{var h=new Error(c);throw h.hash=l,h}},"parseError"),parse:o(function(c){var l=this,h=[0],m=[],x=[null],s=[],P=this.table,e="",_=0,$=0,Y=2,I=1,q=s.slice.call(arguments,1),M=Object.create(this.lexer),Q={yy:{}};for(var st in this.yy)Object.prototype.hasOwnProperty.call(this.yy,st)&&(Q.yy[st]=this.yy[st]);M.setInput(c,Q.yy),Q.yy.lexer=M,Q.yy.parser=this,typeof M.yylloc>"u"&&(M.yylloc={});var ct=M.yylloc;s.push(ct);var mt=M.options&&M.options.ranges;typeof Q.yy.parseError=="function"?this.parseError=Q.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function kt(X){h.length=h.length-2*X,x.length=x.length-X,s.length=s.length-X}o(kt,"popStack");function lt(){var X;return X=m.pop()||M.lex()||I,typeof X!="number"&&(X instanceof Array&&(m=X,X=m.pop()),X=l.symbols_[X]||X),X}o(lt,"lex");for(var j,U,G,nt,J={},it,K,jt,Tt;;){if(U=h[h.length-1],this.defaultActions[U]?G=this.defaultActions[U]:((j===null||typeof j>"u")&&(j=lt()),G=P[U]&&P[U][j]),typeof G>"u"||!G.length||!G[0]){var Ct="";Tt=[];for(it in P[U])this.terminals_[it]&&it>Y&&Tt.push("'"+this.terminals_[it]+"'");M.showPosition?Ct="Parse error on line "+(_+1)+`:
`+M.showPosition()+`
Expecting `+Tt.join(", ")+", got '"+(this.terminals_[j]||j)+"'":Ct="Parse error on line "+(_+1)+": Unexpected "+(j==I?"end of input":"'"+(this.terminals_[j]||j)+"'"),this.parseError(Ct,{text:M.match,token:this.terminals_[j]||j,line:M.yylineno,loc:ct,expected:Tt})}if(G[0]instanceof Array&&G.length>1)throw new Error("Parse Error: multiple actions possible at state: "+U+", token: "+j);switch(G[0]){case 1:h.push(j),x.push(M.yytext),s.push(M.yylloc),h.push(G[1]),j=null,$=M.yyleng,e=M.yytext,_=M.yylineno,ct=M.yylloc;break;case 2:if(K=this.productions_[G[1]][1],J.$=x[x.length-K],J._$={first_line:s[s.length-(K||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(K||1)].first_column,last_column:s[s.length-1].last_column},mt&&(J._$.range=[s[s.length-(K||1)].range[0],s[s.length-1].range[1]]),nt=this.performAction.apply(J,[e,$,_,Q.yy,G[1],x,s].concat(q)),typeof nt<"u")return nt;K&&(h=h.slice(0,-1*K*2),x=x.slice(0,-1*K),s=s.slice(0,-1*K)),h.push(this.productions_[G[1]][0]),x.push(J.$),s.push(J._$),jt=P[h[h.length-2]][h[h.length-1]],h.push(jt);break;case 3:return!0}}return!0},"parse")},p=(function(){var f={EOF:1,parseError:o(function(l,h){if(this.yy.parser)this.yy.parser.parseError(l,h);else throw new Error(l)},"parseError"),setInput:o(function(c,l){return this.yy=l||this.yy||{},this._input=c,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:o(function(){var c=this._input[0];this.yytext+=c,this.yyleng++,this.offset++,this.match+=c,this.matched+=c;var l=c.match(/(?:\r\n?|\n).*/g);return l?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),c},"input"),unput:o(function(c){var l=c.length,h=c.split(/(?:\r\n?|\n)/g);this._input=c+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-l),this.offset-=l;var m=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),h.length-1&&(this.yylineno-=h.length-1);var x=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:h?(h.length===m.length?this.yylloc.first_column:0)+m[m.length-h.length].length-h[0].length:this.yylloc.first_column-l},this.options.ranges&&(this.yylloc.range=[x[0],x[0]+this.yyleng-l]),this.yyleng=this.yytext.length,this},"unput"),more:o(function(){return this._more=!0,this},"more"),reject:o(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:o(function(c){this.unput(this.match.slice(c))},"less"),pastInput:o(function(){var c=this.matched.substr(0,this.matched.length-this.match.length);return(c.length>20?"...":"")+c.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:o(function(){var c=this.match;return c.length<20&&(c+=this._input.substr(0,20-c.length)),(c.substr(0,20)+(c.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:o(function(){var c=this.pastInput(),l=new Array(c.length+1).join("-");return c+this.upcomingInput()+`
`+l+"^"},"showPosition"),test_match:o(function(c,l){var h,m,x;if(this.options.backtrack_lexer&&(x={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(x.yylloc.range=this.yylloc.range.slice(0))),m=c[0].match(/(?:\r\n?|\n).*/g),m&&(this.yylineno+=m.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:m?m[m.length-1].length-m[m.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+c[0].length},this.yytext+=c[0],this.match+=c[0],this.matches=c,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(c[0].length),this.matched+=c[0],h=this.performAction.call(this,this.yy,this,l,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),h)return h;if(this._backtrack){for(var s in x)this[s]=x[s];return!1}return!1},"test_match"),next:o(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var c,l,h,m;this._more||(this.yytext="",this.match="");for(var x=this._currentRules(),s=0;s<x.length;s++)if(h=this._input.match(this.rules[x[s]]),h&&(!l||h[0].length>l[0].length)){if(l=h,m=s,this.options.backtrack_lexer){if(c=this.test_match(h,x[s]),c!==!1)return c;if(this._backtrack){l=!1;continue}else return!1}else if(!this.options.flex)break}return l?(c=this.test_match(l,x[m]),c!==!1?c:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:o(function(){var l=this.next();return l||this.lex()},"lex"),begin:o(function(l){this.conditionStack.push(l)},"begin"),popState:o(function(){var l=this.conditionStack.length-1;return l>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:o(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:o(function(l){return l=this.conditionStack.length-1-Math.abs(l||0),l>=0?this.conditionStack[l]:"INITIAL"},"topState"),pushState:o(function(l){this.begin(l)},"pushState"),stateStackSize:o(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:o(function(l,h,m,x){switch(m){case 0:return this.begin("open_directive"),"open_directive";case 1:return this.begin("acc_title"),31;case 2:return this.popState(),"acc_title_value";case 3:return this.begin("acc_descr"),33;case 4:return this.popState(),"acc_descr_value";case 5:this.begin("acc_descr_multiline");break;case 6:this.popState();break;case 7:return"acc_descr_multiline_value";case 8:break;case 9:break;case 10:break;case 11:return 10;case 12:break;case 13:break;case 14:this.begin("href");break;case 15:this.popState();break;case 16:return 43;case 17:this.begin("callbackname");break;case 18:this.popState();break;case 19:this.popState(),this.begin("callbackargs");break;case 20:return 41;case 21:this.popState();break;case 22:return 42;case 23:this.begin("click");break;case 24:this.popState();break;case 25:return 40;case 26:return 4;case 27:return 22;case 28:return 23;case 29:return 24;case 30:return 25;case 31:return 26;case 32:return 28;case 33:return 27;case 34:return 29;case 35:return 12;case 36:return 13;case 37:return 14;case 38:return 15;case 39:return 16;case 40:return 17;case 41:return 18;case 42:return 20;case 43:return 21;case 44:return"date";case 45:return 30;case 46:return"accDescription";case 47:return 36;case 48:return 38;case 49:return 39;case 50:return":";case 51:return 6;case 52:return"INVALID"}},"anonymous"),rules:[/^(?:%%\{)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:weekday\s+monday\b)/i,/^(?:weekday\s+tuesday\b)/i,/^(?:weekday\s+wednesday\b)/i,/^(?:weekday\s+thursday\b)/i,/^(?:weekday\s+friday\b)/i,/^(?:weekday\s+saturday\b)/i,/^(?:weekday\s+sunday\b)/i,/^(?:weekend\s+friday\b)/i,/^(?:weekend\s+saturday\b)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^\n]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^\n]+)/i,/^(?:[^:\n]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[6,7],inclusive:!1},acc_descr:{rules:[4],inclusive:!1},acc_title:{rules:[2],inclusive:!1},callbackargs:{rules:[21,22],inclusive:!1},callbackname:{rules:[18,19,20],inclusive:!1},href:{rules:[15,16],inclusive:!1},click:{rules:[24,25],inclusive:!1},INITIAL:{rules:[0,1,3,5,8,9,10,11,12,13,14,17,23,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],inclusive:!0}}};return f})();v.lexer=p;function g(){this.yy={}}return o(g,"Parser"),g.prototype=v,v.Parser=g,new g})();Et.parser=Et;var Pe=Et,Ve=at(Le()),Z=at(te()),Re=at(Ae()),Ne=at(Fe()),ze=at(Oe());Z.default.extend(Re.default);Z.default.extend(Ne.default);Z.default.extend(ze.default);var Qt={friday:5,saturday:6},tt="",$t="",At=void 0,Ft="",gt=[],pt=[],Ot=new Map,Wt=[],_t=[],ht="",Pt="",ee=["active","done","crit","milestone","vert"],Vt=[],ut="",vt=!1,Rt=!1,Nt="sunday",Dt="saturday",It=0,je=o(function(){Wt=[],_t=[],ht="",Vt=[],bt=0,Lt=void 0,wt=void 0,H=[],tt="",$t="",Pt="",At=void 0,Ft="",gt=[],pt=[],vt=!1,Rt=!1,It=0,Ot=new Map,ut="",Ye(),Nt="sunday",Dt="saturday"},"clear"),He=o(function(t){ut=t},"setDiagramId"),Be=o(function(t){$t=t},"setAxisFormat"),qe=o(function(){return $t},"getAxisFormat"),Ge=o(function(t){At=t},"setTickInterval"),Xe=o(function(){return At},"getTickInterval"),Ue=o(function(t){Ft=t},"setTodayMarker"),Ze=o(function(){return Ft},"getTodayMarker"),Qe=o(function(t){tt=t},"setDateFormat"),Je=o(function(){vt=!0},"enableInclusiveEndDates"),Ke=o(function(){return vt},"endDatesAreInclusive"),ts=o(function(){Rt=!0},"enableTopAxis"),es=o(function(){return Rt},"topAxisEnabled"),ss=o(function(t){Pt=t},"setDisplayMode"),is=o(function(){return Pt},"getDisplayMode"),ns=o(function(){return tt},"getDateFormat"),rs=o(function(t){gt=t.toLowerCase().split(/[\s,]+/)},"setIncludes"),as=o(function(){return gt},"getIncludes"),os=o(function(t){pt=t.toLowerCase().split(/[\s,]+/)},"setExcludes"),cs=o(function(){return pt},"getExcludes"),ls=o(function(){return Ot},"getLinks"),us=o(function(t){ht=t,Wt.push(t)},"addSection"),ds=o(function(){return Wt},"getSections"),fs=o(function(){let t=Jt();const n=10;let r=0;for(;!t&&r<n;)t=Jt(),r++;return _t=H,_t},"getTasks"),se=o(function(t,n,r,i){const a=t.format(n.trim()),k=t.format("YYYY-MM-DD");return i.includes(a)||i.includes(k)?!1:r.includes("weekends")&&(t.isoWeekday()===Qt[Dt]||t.isoWeekday()===Qt[Dt]+1)||r.includes(t.format("dddd").toLowerCase())?!0:r.includes(a)||r.includes(k)},"isInvalidDate"),hs=o(function(t){Nt=t},"setWeekday"),ms=o(function(){return Nt},"getWeekday"),ks=o(function(t){Dt=t},"setWeekend"),ie=o(function(t,n,r,i){if(!r.length||t.manualEndTime)return;let a;t.startTime instanceof Date?a=(0,Z.default)(t.startTime):a=(0,Z.default)(t.startTime,n,!0),a=a.add(1,"d");let k;t.endTime instanceof Date?k=(0,Z.default)(t.endTime):k=(0,Z.default)(t.endTime,n,!0);const[y,b]=ys(a,k,n,r,i);t.endTime=y.toDate(),t.renderEndTime=b},"checkTaskDates"),ys=o(function(t,n,r,i,a){let k=!1,y=null;const b=n.add(1e4,"d");for(;t<=n;){if(k||(y=n.toDate()),k=se(t,r,i,a),k&&(n=n.add(1,"d"),n>b))throw new Error("Failed to find a valid date that was not excluded by `excludes` after 10,000 iterations.");t=t.add(1,"d")}return[n,y]},"fixTaskDates"),Yt=o(function(t,n,r){if(r=r.trim(),o(b=>{const O=b.trim();return O==="x"||O==="X"},"isTimestampFormat")(n)&&/^\d+$/.test(r))return new Date(Number(r));const k=/^after\s+(?<ids>[\d\w- ]+)/.exec(r);if(k!==null){let b=null;for(const A of k.groups.ids.split(" ")){let w=ot(A);w!==void 0&&(!b||w.endTime>b.endTime)&&(b=w)}if(b)return b.endTime;const O=new Date;return O.setHours(0,0,0,0),O}let y=(0,Z.default)(r,n.trim(),!0);if(y.isValid())return y.toDate();{rt.debug("Invalid date:"+r),rt.debug("With date format:"+n.trim());const b=new Date(r);if(b===void 0||isNaN(b.getTime())||b.getFullYear()<-1e4||b.getFullYear()>1e4)throw new Error("Invalid date:"+r);return b}},"getStartDate"),ne=o(function(t){const n=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t.trim());return n!==null?[Number.parseFloat(n[1]),n[2]]:[NaN,"ms"]},"parseDuration"),re=o(function(t,n,r,i=!1){r=r.trim();const k=/^until\s+(?<ids>[\d\w- ]+)/.exec(r);if(k!==null){let w=null;for(const V of k.groups.ids.split(" ")){let R=ot(V);R!==void 0&&(!w||R.startTime<w.startTime)&&(w=R)}if(w)return w.startTime;const F=new Date;return F.setHours(0,0,0,0),F}let y=(0,Z.default)(r,n.trim(),!0);if(y.isValid())return i&&(y=y.add(1,"d")),y.toDate();let b=(0,Z.default)(t);const[O,A]=ne(r);if(!Number.isNaN(O)){const w=b.add(O,A);w.isValid()&&(b=w)}return b.toDate()},"getEndDate"),bt=0,ft=o(function(t){return t===void 0?(bt=bt+1,"task"+bt):t},"parseId"),gs=o(function(t,n){let r;n.substr(0,1)===":"?r=n.substr(1,n.length):r=n;const i=r.split(","),a={};zt(i,a,ee);for(let y=0;y<i.length;y++)i[y]=i[y].trim();let k="";switch(i.length){case 1:a.id=ft(),a.startTime=t.endTime,k=i[0];break;case 2:a.id=ft(),a.startTime=Yt(void 0,tt,i[0]),k=i[1];break;case 3:a.id=ft(i[0]),a.startTime=Yt(void 0,tt,i[1]),k=i[2];break}return k&&(a.endTime=re(a.startTime,tt,k,vt),a.manualEndTime=(0,Z.default)(k,"YYYY-MM-DD",!0).isValid(),ie(a,tt,pt,gt)),a},"compileData"),ps=o(function(t,n){let r;n.substr(0,1)===":"?r=n.substr(1,n.length):r=n;const i=r.split(","),a={};zt(i,a,ee);for(let k=0;k<i.length;k++)i[k]=i[k].trim();switch(i.length){case 1:a.id=ft(),a.startTime={type:"prevTaskEnd",id:t},a.endTime={data:i[0]};break;case 2:a.id=ft(),a.startTime={type:"getStartDate",startData:i[0]},a.endTime={data:i[1]};break;case 3:a.id=ft(i[0]),a.startTime={type:"getStartDate",startData:i[1]},a.endTime={data:i[2]};break}return a},"parseData"),Lt,wt,H=[],ae={},vs=o(function(t,n){const r={section:ht,type:ht,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:n},task:t,classes:[]},i=ps(wt,n);r.raw.startTime=i.startTime,r.raw.endTime=i.endTime,r.id=i.id,r.prevTaskId=wt,r.active=i.active,r.done=i.done,r.crit=i.crit,r.milestone=i.milestone,r.vert=i.vert,r.order=It,It++;const a=H.push(r);wt=r.id,ae[r.id]=a-1},"addTask"),ot=o(function(t){const n=ae[t];return H[n]},"findTaskById"),Ts=o(function(t,n){const r={section:ht,type:ht,description:t,task:t,classes:[]},i=gs(Lt,n);r.startTime=i.startTime,r.endTime=i.endTime,r.id=i.id,r.active=i.active,r.done=i.done,r.crit=i.crit,r.milestone=i.milestone,r.vert=i.vert,Lt=r,_t.push(r)},"addTaskOrg"),Jt=o(function(){const t=o(function(r){const i=H[r];let a="";switch(H[r].raw.startTime.type){case"prevTaskEnd":{const k=ot(i.prevTaskId);i.startTime=k.endTime;break}case"getStartDate":a=Yt(void 0,tt,H[r].raw.startTime.startData),a&&(H[r].startTime=a);break}return H[r].startTime&&(H[r].endTime=re(H[r].startTime,tt,H[r].raw.endTime.data,vt),H[r].endTime&&(H[r].processed=!0,H[r].manualEndTime=(0,Z.default)(H[r].raw.endTime.data,"YYYY-MM-DD",!0).isValid(),ie(H[r],tt,pt,gt))),H[r].processed},"compileTask");let n=!0;for(const[r,i]of H.entries())t(r),n=n&&i.processed;return n},"compileTasks"),xs=o(function(t,n){let r=n;dt().securityLevel!=="loose"&&(r=(0,Ve.sanitizeUrl)(n)),t.split(",").forEach(function(i){ot(i)!==void 0&&(ce(i,()=>{window.open(r,"_self")}),Ot.set(i,r))}),oe(t,"clickable")},"setLink"),oe=o(function(t,n){t.split(",").forEach(function(r){let i=ot(r);i!==void 0&&i.classes.push(n)})},"setClass"),bs=o(function(t,n,r){if(dt().securityLevel!=="loose"||n===void 0)return;let i=[];if(typeof r=="string"){i=r.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let k=0;k<i.length;k++){let y=i[k].trim();y.startsWith('"')&&y.endsWith('"')&&(y=y.substr(1,y.length-2)),i[k]=y}}i.length===0&&i.push(t),ot(t)!==void 0&&ce(t,()=>{$e.runFunc(n,...i)})},"setClickFun"),ce=o(function(t,n){Vt.push(function(){const r=ut?`${ut}-${t}`:t,i=document.querySelector(`[id="${r}"]`);i!==null&&i.addEventListener("click",function(){n()})},function(){const r=ut?`${ut}-${t}`:t,i=document.querySelector(`[id="${r}-text"]`);i!==null&&i.addEventListener("click",function(){n()})})},"pushFun"),ws=o(function(t,n,r){t.split(",").forEach(function(i){bs(i,n,r)}),oe(t,"clickable")},"setClickEvent"),_s=o(function(t){Vt.forEach(function(n){n(t)})},"bindFunctions"),Ds={getConfig:o(()=>dt().gantt,"getConfig"),clear:je,setDateFormat:Qe,getDateFormat:ns,enableInclusiveEndDates:Je,endDatesAreInclusive:Ke,enableTopAxis:ts,topAxisEnabled:es,setAxisFormat:Be,getAxisFormat:qe,setTickInterval:Ge,getTickInterval:Xe,setTodayMarker:Ue,getTodayMarker:Ze,setAccTitle:me,getAccTitle:he,setDiagramTitle:fe,getDiagramTitle:de,setDiagramId:He,setDisplayMode:ss,getDisplayMode:is,setAccDescription:ue,getAccDescription:le,addSection:us,getSections:ds,getTasks:fs,addTask:vs,findTaskById:ot,addTaskOrg:Ts,setIncludes:rs,getIncludes:as,setExcludes:os,getExcludes:cs,setClickEvent:ws,setLink:xs,getLinks:ls,bindFunctions:_s,parseDuration:ne,isInvalidDate:se,setWeekday:hs,getWeekday:ms,setWeekend:ks};function zt(t,n,r){let i=!0;for(;i;)i=!1,r.forEach(function(a){const k="^\\s*"+a+"\\s*$",y=new RegExp(k);t[0].match(y)&&(n[a]=!0,t.shift(1),i=!0)})}o(zt,"getTaskTags");var yt=at(te()),Ss=at(We());yt.default.extend(Ss.default);var Cs=o(function(){rt.debug("Something is calling, setConf, remove the call")},"setConf"),Kt={monday:Me,tuesday:Ce,wednesday:Se,thursday:De,friday:_e,saturday:we,sunday:be},Ms=o((t,n)=>{let r=[...t].map(()=>-1/0),i=[...t].sort((k,y)=>k.startTime-y.startTime||k.order-y.order),a=0;for(const k of i)for(let y=0;y<r.length;y++)if(k.startTime>=r[y]){r[y]=k.endTime,k.order=y+n,y>a&&(a=y);break}return a},"getMaxIntersections"),et,Mt=1e4,Es=o(function(t,n,r,i){const a=dt().gantt;i.db.setDiagramId(n);const k=dt().securityLevel;let y;k==="sandbox"&&(y=xt("#i"+n));const b=k==="sandbox"?xt(y.nodes()[0].contentDocument.body):xt("body"),O=k==="sandbox"?y.nodes()[0].contentDocument:document,A=O.getElementById(n);et=A.parentElement.offsetWidth,et===void 0&&(et=1200),a.useWidth!==void 0&&(et=a.useWidth);const w=i.db.getTasks();let F=[];for(const u of w)F.push(u.type);F=d(F);const V={};let R=2*a.topPadding;if(i.db.getDisplayMode()==="compact"||a.displayMode==="compact"){const u={};for(const p of w)u[p.section]===void 0?u[p.section]=[p]:u[p.section].push(p);let v=0;for(const p of Object.keys(u)){const g=Ms(u[p],v)+1;v+=g,R+=g*(a.barHeight+a.barGap),V[p]=g}}else{R+=w.length*(a.barHeight+a.barGap);for(const u of F)V[u]=w.filter(v=>v.type===u).length}A.setAttribute("viewBox","0 0 "+et+" "+R);const N=b.select(`[id="${n}"]`),S=ke().domain([ye(w,function(u){return u.startTime}),ge(w,function(u){return u.endTime})]).rangeRound([0,et-a.leftPadding-a.rightPadding]);function D(u,v){const p=u.startTime,g=v.startTime;let f=0;return p>g?f=1:p<g&&(f=-1),f}o(D,"taskCompare"),w.sort(D),C(w,et,R),pe(N,R,et,a.useMaxWidth),N.append("text").text(i.db.getDiagramTitle()).attr("x",et/2).attr("y",a.titleTopMargin).attr("class","titleText");function C(u,v,p){const g=a.barHeight,f=g+a.barGap,c=a.topPadding,l=a.leftPadding,h=ve().domain([0,F.length]).range(["#00B9FA","#F95002"]).interpolate(Te);L(f,c,l,v,p,u,i.db.getExcludes(),i.db.getIncludes()),B(l,c,v,p),W(u,f,c,l,g,h,v),E(f,c),T(l,c,v,p)}o(C,"makeGantt");function W(u,v,p,g,f,c,l){u.sort((e,_)=>e.vert===_.vert?0:e.vert?1:-1);const m=[...new Set(u.map(e=>e.order))].map(e=>u.find(_=>_.order===e));N.append("g").selectAll("rect").data(m).enter().append("rect").attr("x",0).attr("y",function(e,_){return _=e.order,_*v+p-2}).attr("width",function(){return l-a.rightPadding/2}).attr("height",v).attr("class",function(e){for(const[_,$]of F.entries())if(e.type===$)return"section section"+_%a.numberSectionStyles;return"section section0"}).enter();const x=N.append("g").selectAll("rect").data(u).enter(),s=i.db.getLinks();if(x.append("rect").attr("id",function(e){return n+"-"+e.id}).attr("rx",3).attr("ry",3).attr("x",function(e){return e.milestone?S(e.startTime)+g+.5*(S(e.endTime)-S(e.startTime))-.5*f:S(e.startTime)+g}).attr("y",function(e,_){return _=e.order,e.vert?a.gridLineStartPadding:_*v+p}).attr("width",function(e){return e.milestone?f:e.vert?.08*f:S(e.renderEndTime||e.endTime)-S(e.startTime)}).attr("height",function(e){return e.vert?w.length*(a.barHeight+a.barGap)+a.barHeight*2:f}).attr("transform-origin",function(e,_){return _=e.order,(S(e.startTime)+g+.5*(S(e.endTime)-S(e.startTime))).toString()+"px "+(_*v+p+.5*f).toString()+"px"}).attr("class",function(e){const _="task";let $="";e.classes.length>0&&($=e.classes.join(" "));let Y=0;for(const[q,M]of F.entries())e.type===M&&(Y=q%a.numberSectionStyles);let I="";return e.active?e.crit?I+=" activeCrit":I=" active":e.done?e.crit?I=" doneCrit":I=" done":e.crit&&(I+=" crit"),I.length===0&&(I=" task"),e.milestone&&(I=" milestone "+I),e.vert&&(I=" vert "+I),I+=Y,I+=" "+$,_+I}),x.append("text").attr("id",function(e){return n+"-"+e.id+"-text"}).text(function(e){return e.task}).attr("font-size",a.fontSize).attr("x",function(e){let _=S(e.startTime),$=S(e.renderEndTime||e.endTime);if(e.milestone&&(_+=.5*(S(e.endTime)-S(e.startTime))-.5*f,$=_+f),e.vert)return S(e.startTime)+g;const Y=this.getBBox().width;return Y>$-_?$+Y+1.5*a.leftPadding>l?_+g-5:$+g+5:($-_)/2+_+g}).attr("y",function(e,_){return e.vert?a.gridLineStartPadding+w.length*(a.barHeight+a.barGap)+60:(_=e.order,_*v+a.barHeight/2+(a.fontSize/2-2)+p)}).attr("text-height",f).attr("class",function(e){const _=S(e.startTime);let $=S(e.endTime);e.milestone&&($=_+f);const Y=this.getBBox().width;let I="";e.classes.length>0&&(I=e.classes.join(" "));let q=0;for(const[Q,st]of F.entries())e.type===st&&(q=Q%a.numberSectionStyles);let M="";return e.active&&(e.crit?M="activeCritText"+q:M="activeText"+q),e.done?e.crit?M=M+" doneCritText"+q:M=M+" doneText"+q:e.crit&&(M=M+" critText"+q),e.milestone&&(M+=" milestoneText"),e.vert&&(M+=" vertText"),Y>$-_?$+Y+1.5*a.leftPadding>l?I+" taskTextOutsideLeft taskTextOutside"+q+" "+M:I+" taskTextOutsideRight taskTextOutside"+q+" "+M+" width-"+Y:I+" taskText taskText"+q+" "+M+" width-"+Y}),dt().securityLevel==="sandbox"){let e;e=xt("#i"+n);const _=e.nodes()[0].contentDocument;x.filter(function($){return s.has($.id)}).each(function($){var Y=_.querySelector("#"+CSS.escape(n+"-"+$.id)),I=_.querySelector("#"+CSS.escape(n+"-"+$.id+"-text"));const q=Y.parentNode;var M=_.createElement("a");M.setAttribute("xlink:href",s.get($.id)),M.setAttribute("target","_top"),q.appendChild(M),M.appendChild(Y),M.appendChild(I)})}}o(W,"drawRects");function L(u,v,p,g,f,c,l,h){if(l.length===0&&h.length===0)return;let m,x;for(const{startTime:Y,endTime:I}of c)(m===void 0||Y<m)&&(m=Y),(x===void 0||I>x)&&(x=I);if(!m||!x)return;if((0,yt.default)(x).diff((0,yt.default)(m),"year")>5){rt.warn("The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.");return}const s=i.db.getDateFormat(),P=[];let e=null,_=(0,yt.default)(m);for(;_.valueOf()<=x;)i.db.isInvalidDate(_,s,l,h)?e?e.end=_:e={start:_,end:_}:e&&(P.push(e),e=null),_=_.add(1,"d");N.append("g").selectAll("rect").data(P).enter().append("rect").attr("id",Y=>n+"-exclude-"+Y.start.format("YYYY-MM-DD")).attr("x",Y=>S(Y.start.startOf("day"))+p).attr("y",a.gridLineStartPadding).attr("width",Y=>S(Y.end.endOf("day"))-S(Y.start.startOf("day"))).attr("height",f-v-a.gridLineStartPadding).attr("transform-origin",function(Y,I){return(S(Y.start)+p+.5*(S(Y.end)-S(Y.start))).toString()+"px "+(I*u+.5*f).toString()+"px"}).attr("class","exclude-range")}o(L,"drawExcludeDays");function z(u,v,p,g){if(p<=0||u>v)return 1/0;const f=v-u,c=yt.default.duration({[g??"day"]:p}).asMilliseconds();return c<=0?1/0:Math.ceil(f/c)}o(z,"getEstimatedTickCount");function B(u,v,p,g){const f=i.db.getDateFormat(),c=i.db.getAxisFormat();let l;c?l=c:f==="D"?l="%d":l=a.axisFormat??"%Y-%m-%d";let h=xe(S).tickSize(-g+v+a.gridLineStartPadding).tickFormat(Ht(l));const x=/^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(i.db.getTickInterval()||a.tickInterval);if(x!==null){const s=parseInt(x[1],10);if(isNaN(s)||s<=0)rt.warn(`Invalid tick interval value: "${x[1]}". Skipping custom tick interval.`);else{const P=x[2],e=i.db.getWeekday()||a.weekday,_=S.domain(),$=_[0],Y=_[1],I=z($,Y,s,P);if(I>Mt)rt.warn(`The tick interval "${s}${P}" would generate ${I} ticks, which exceeds the maximum allowed (${Mt}). This may indicate an invalid date or time range. Skipping custom tick interval.`);else switch(P){case"millisecond":h.ticks(Zt.every(s));break;case"second":h.ticks(Ut.every(s));break;case"minute":h.ticks(Xt.every(s));break;case"hour":h.ticks(Gt.every(s));break;case"day":h.ticks(qt.every(s));break;case"week":h.ticks(Kt[e].every(s));break;case"month":h.ticks(Bt.every(s));break}}}if(N.append("g").attr("class","grid").attr("transform","translate("+u+", "+(g-50)+")").call(h).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10).attr("dy","1em"),i.db.topAxisEnabled()||a.topAxis){let s=Ee(S).tickSize(-g+v+a.gridLineStartPadding).tickFormat(Ht(l));if(x!==null){const P=parseInt(x[1],10);if(isNaN(P)||P<=0)rt.warn(`Invalid tick interval value: "${x[1]}". Skipping custom tick interval.`);else{const e=x[2],_=i.db.getWeekday()||a.weekday,$=S.domain(),Y=$[0],I=$[1];if(z(Y,I,P,e)<=Mt)switch(e){case"millisecond":s.ticks(Zt.every(P));break;case"second":s.ticks(Ut.every(P));break;case"minute":s.ticks(Xt.every(P));break;case"hour":s.ticks(Gt.every(P));break;case"day":s.ticks(qt.every(P));break;case"week":s.ticks(Kt[_].every(P));break;case"month":s.ticks(Bt.every(P));break}}}N.append("g").attr("class","grid").attr("transform","translate("+u+", "+v+")").call(s).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10)}}o(B,"makeGrid");function E(u,v){let p=0;const g=Object.keys(V).map(f=>[f,V[f]]);N.append("g").selectAll("text").data(g).enter().append(function(f){const c=f[0].split(Ie.lineBreakRegex),l=-(c.length-1)/2,h=O.createElementNS("http://www.w3.org/2000/svg","text");h.setAttribute("dy",l+"em");for(const[m,x]of c.entries()){const s=O.createElementNS("http://www.w3.org/2000/svg","tspan");s.setAttribute("alignment-baseline","central"),s.setAttribute("x","10"),m>0&&s.setAttribute("dy","1em"),s.textContent=x,h.appendChild(s)}return h}).attr("x",10).attr("y",function(f,c){if(c>0)for(let l=0;l<c;l++)return p+=g[c-1][1],f[1]*u/2+p*u+v;else return f[1]*u/2+v}).attr("font-size",a.sectionFontSize).attr("class",function(f){for(const[c,l]of F.entries())if(f[0]===l)return"sectionTitle sectionTitle"+c%a.numberSectionStyles;return"sectionTitle"})}o(E,"vertLabels");function T(u,v,p,g){const f=i.db.getTodayMarker();if(f==="off")return;const c=N.append("g").attr("class","today"),l=new Date,h=c.append("line");h.attr("x1",S(l)+u).attr("x2",S(l)+u).attr("y1",a.titleTopMargin).attr("y2",g-a.titleTopMargin).attr("class","today"),f!==""&&h.attr("style",f.replace(/,/g,";"))}o(T,"drawToday");function d(u){const v={},p=[];for(let g=0,f=u.length;g<f;++g)Object.prototype.hasOwnProperty.call(v,u[g])||(v[u[g]]=!0,p.push(u[g]));return p}o(d,"checkUnique")},"draw"),Is={setConf:Cs,draw:Es},Ys=o(t=>`
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
`,"getStyles"),Ls=Ys,Os={parser:Pe,db:Ds,renderer:Is,styles:Ls};export{Os as diagram};
