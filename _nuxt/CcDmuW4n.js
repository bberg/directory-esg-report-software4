import{f as i}from"./Dnd51l0P.js";import{d as u,a2 as f,K as c,a4 as r,a8 as d}from"./BdIQxZ1b.js";const p=u({name:"MDCSlot",functional:!0,props:{name:{type:String,default:"default"},unwrap:{type:[Boolean,String],default:!1},use:{type:Function,default:void 0}},setup(t){const{parent:s}=d(),{default:o}=f(),a=c(()=>typeof t.unwrap=="string"?t.unwrap.split(" "):["*"]);return{fallbackSlot:o,tags:a,parent:s}},render({use:t,unwrap:s,fallbackSlot:o,tags:a,parent:e}){var l;try{let n=t;return typeof t=="string"&&(n=(e==null?void 0:e.slots[t])||((l=e==null?void 0:e.parent)==null?void 0:l.slots[t]),console.warn(`Please set :use="$slots.${t}" in <MDCSlot> component to enable reactivity`)),n?s?i(n(),a):[n()]:o?o():r("div")}catch{return r("div")}}}),g=u({props:{use:{type:Function,default:void 0},unwrap:{type:[Boolean,String],default:!1}},render(t){return r(p,t)}});export{g as default};
