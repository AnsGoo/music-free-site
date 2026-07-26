import{p as tt}from"./chunk-6ZKBGPIT.C8mLUu41.js";import{p as et}from"./cynefin-VYW2F7L2-VU6BHR45.tYoWdJO0.js";import{g as at,s as rt,a as it,b as nt,o as ot,n as st,_ as l,l as E,c as lt,C as ct,a1 as dt,a2 as gt,a3 as I,a4 as ht,e as pt,p as ut,a5 as ft,D as mt}from"../app.Dx7cSV6z.js";import"./framework.tRzZN95x.js";import"./theme.a-_tLHQd.js";var vt=mt.pie,R={sections:new Map,showData:!1},T=R.sections,L=R.showData,St=structuredClone(vt),xt=l(()=>structuredClone(St),"getConfig"),wt=l(()=>{T=new Map,L=R.showData,ut()},"clear"),Ct=l(({label:t,value:a})=>{if(a<0)throw new Error(`"${t}" has invalid value: ${a}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);T.has(t)||(T.set(t,a),E.debug(`added new section: ${t}, with value: ${a}`))},"addSection"),$t=l(()=>T,"getSections"),Dt=l(t=>{L=t},"setShowData"),yt=l(()=>L,"getShowData"),U={getConfig:xt,clear:wt,setDiagramTitle:st,getDiagramTitle:ot,setAccTitle:nt,getAccTitle:it,setAccDescription:rt,getAccDescription:at,addSection:Ct,getSections:$t,setShowData:Dt,getShowData:yt},Tt=l((t,a)=>{tt(t,a),a.setShowData(t.showData),t.sections.map(a.addSection)},"populateDb"),bt={parse:l(async t=>{const a=await et("pie",t);E.debug(a),Tt(a,U)},"parse")},At=l(t=>`
  .pieCircle{
    stroke: ${t.pieStrokeColor};
    stroke-width : ${t.pieStrokeWidth};
    opacity : ${t.pieOpacity};
  }
  .pieCircle.highlighted{
    scale: 1.05;
    opacity: 1;
  }
  .pieCircle.highlightedOnHover:hover{
    transition-duration: 250ms;
    scale: 1.05;
    opacity: 1;
  }
  .pieOuterCircle{
    stroke: ${t.pieOuterStrokeColor};
    stroke-width: ${t.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t.pieTitleTextSize};
    fill: ${t.pieTitleTextColor};
    font-family: ${t.fontFamily};
  }
  .slice {
    font-family: ${t.fontFamily};
    fill: ${t.pieSectionTextColor};
    font-size:${t.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t.pieLegendTextColor};
    font-family: ${t.fontFamily};
    font-size: ${t.pieLegendTextSize};
  }
`,"getStyles"),_t=At,kt=l(t=>{const a=[...t.values()].reduce((o,m)=>o+m,0),W=[...t.entries()].map(([o,m])=>({label:o,value:m})).filter(o=>o.value/a*100>=1);return ft().value(o=>o.value).sort(null)(W)},"createPieArcs"),zt=l((t,a,W,F)=>{E.debug(`rendering pie chart
`+t);const o=F.db,m=lt(),p=ct(o.getConfig(),m.pie),H=40,i=18,c=4,C=450,S=C,b=dt(a),$=b.append("g");$.attr("transform","translate("+S/2+","+C/2+")");const{themeVariables:n}=m;let[M]=gt(n.pieOuterStrokeWidth);M??=2;const V=p.legendPosition,O=p.textPosition,X=p.donutHole>0&&p.donutHole<=.9?p.donutHole:0,u=Math.min(S,C)/2-H,Z=I().innerRadius(X*u).outerRadius(u),j=I().innerRadius(u*O).outerRadius(u*O),x=$.append("g");x.append("circle").attr("cx",0).attr("cy",0).attr("r",u+M/2).attr("class","pieOuterCircle");const D=o.getSections(),q=kt(D),J=[n.pie1,n.pie2,n.pie3,n.pie4,n.pie5,n.pie6,n.pie7,n.pie8,n.pie9,n.pie10,n.pie11,n.pie12];let A=0;D.forEach(e=>{A+=e});const P=q.filter(e=>(e.data.value/A*100).toFixed(0)!=="0"),_=ht(J).domain([...D.keys()]);x.selectAll("mySlices").data(P).enter().append("path").attr("d",Z).attr("fill",e=>_(e.data.label)).attr("class",e=>{let r="pieCircle";return p.highlightSlice==="hover"?r+=" highlightedOnHover":p.highlightSlice===e.data.label&&(r+=" highlighted"),r}),x.selectAll("mySlices").data(P).enter().append("text").text(e=>(e.data.value/A*100).toFixed(0)+"%").attr("transform",e=>"translate("+j.centroid(e)+")").style("text-anchor","middle").attr("class","slice");const K=$.append("text").text(o.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText"),w=[...D.entries()].map(([e,r])=>({label:e,value:r})),f=$.selectAll(".legend").data(w).enter().append("g").attr("class","legend");f.append("rect").attr("width",i).attr("height",i).style("fill",e=>_(e.label)).style("stroke",e=>_(e.label)),f.append("text").attr("x",i+c).attr("y",i-c).text(e=>o.getShowData()?`${e.label} [${e.value}]`:e.label);const v=Math.max(...f.selectAll("text").nodes().map(e=>e?.getBoundingClientRect().width??0));let y=C,k=S+H;const s=i+c,z=w.length*s;switch(V){case"center":f.attr("transform",(e,r)=>{const d=s*w.length/2,g=-v/2-(i+c),h=r*s-d;return"translate("+g+","+h+")"});break;case"top":y+=z,f.attr("transform",(e,r)=>{const d=u,g=-v/2-(i+c),h=r*s-d;return`translate(${g}, ${h})`}),x.attr("transform",()=>`translate(0, ${z+s})`);break;case"bottom":y+=z,f.attr("transform",(e,r)=>{const d=-u-s,g=-v/2-(i+c),h=r*s-d;return"translate("+g+","+h+")"});break;case"left":k+=i+c+v,f.attr("transform",(e,r)=>{const d=s*w.length/2,g=-u-(i+c),h=r*s-d;return"translate("+g+","+h+")"}),x.attr("transform",()=>`translate(${v+i+c}, 0)`);break;default:k+=i+c+v,f.attr("transform",(e,r)=>{const d=s*w.length/2,g=12*i,h=r*s-d;return"translate("+g+","+h+")"});break}const G=K.node()?.getBoundingClientRect().width??0,Q=S/2-G/2,Y=S/2+G/2,B=Math.min(0,Q),N=Math.max(k,Y)-B;b.attr("viewBox",`${B} 0 ${N} ${y}`),pt(b,y,N,p.useMaxWidth)},"draw"),Et={draw:zt},Ot={parser:bt,db:U,renderer:Et,styles:_t};export{Ot as diagram};
