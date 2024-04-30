(()=>{"use strict";const e=window.React,t=window.wc.wcBlocksRegistry,n=window.wc.wcSettings,c=window.wp.element,a=window.wp.htmlEntities,o="mercadopago_blocks_update_cart",s=({labelMessage:t,helperMessage:n,inputName:c,hiddenId:a,inputDataCheckout:o,selectId:s,selectName:i,selectDataCheckout:r,flagError:m,documents:l,validate:d})=>(0,e.createElement)("div",{className:"mp-checkout-ticket-input-document"},(0,e.createElement)("input-document",{"label-message":t,"helper-message":n,"input-name":c,"hidden-id":a,"input-data-checkout":o,"select-id":s,"select-name":i,"select-data-checkout":r,"flag-error":m,documents:l,validate:d})),i=({isVisible:t,message:n,inputId:c,id:a,dataMain:o})=>(0,e.createElement)("input-helper",{isVisible:t,message:n,"input-id":c,id:a,"data-main":o}),r=({name:t,buttonName:n,columns:c})=>(0,e.createElement)("input-table",{name:t,"button-name":n,columns:c}),m=({description:t,linkText:n,linkSrc:c,checkoutClass:a="pro"})=>(0,e.createElement)("div",{className:`mp-checkout-${a}-terms-and-conditions`},(0,e.createElement)("terms-and-conditions",{description:t,"link-text":n,"link-src":c})),l=({title:t,description:n,linkText:c,linkSrc:a})=>(0,e.createElement)("div",{className:"mp-checkout-pro-test-mode"},(0,e.createElement)("test-mode",{title:t,description:n,"link-text":c,"link-src":a})),d=(e,t,n)=>{const c={name:e,message:t,target:n,plugin:{version:wc_mercadopago_custom_checkout_params.plugin_version},platform:{name:"woocommerce",uri:window.location.href,version:wc_mercadopago_custom_checkout_params.platform_version,location:`${wc_mercadopago_custom_checkout_params.location}_${wc_mercadopago_custom_checkout_params.theme}`}};navigator.sendBeacon("https://api.mercadopago.com/v1/plugins/melidata/errors",JSON.stringify(c))};var p;const u="mp_checkout_blocks",_="woo-mercado-pago-ticket",k=(0,n.getSetting)("woo-mercado-pago-ticket_data",{}),g=(0,a.decodeEntities)(k.title)||"Checkout Ticket",h=t=>{(e=>{const{extensionCartUpdate:t}=wc.blocksCheckout,{eventRegistration:n,emitResponse:a}=e,{onPaymentSetup:s,onCheckoutSuccess:i,onCheckoutFail:r}=n;(0,c.useEffect)((()=>{((e,t)=>{e({namespace:o,data:{action:"add",gateway:t}})})(t,_);const e=s((()=>({type:a.responseTypes.SUCCESS})));return()=>(((e,t)=>{e({namespace:o,data:{action:"remove",gateway:t}})})(t,_),e())}),[s]),(0,c.useEffect)((()=>{const e=i((async e=>{const t=e.processingResponse;return d("MP_TICKET_BLOCKS_SUCCESS",t.paymentStatus,u),{type:a.responseTypes.SUCCESS}}));return()=>e()}),[i]),(0,c.useEffect)((()=>{const e=r((e=>{const t=e.processingResponse;return d("MP_TICKET_BLOCKS_ERROR",t.paymentStatus,u),{type:a.responseTypes.FAIL,messageContext:a.noticeContexts.PAYMENTS,message:t.paymentDetails.message}}));return()=>e()}),[r])})(t);const{test_mode_title:n,test_mode_description:a,test_mode_link_text:p,test_mode_link_src:g,input_document_label:h,input_document_helper:y,ticket_text_label:E,input_table_button:S,input_helper_label:f,payment_methods:w,amount:b,site_id:C,terms_and_conditions_description:v,terms_and_conditions_link_text:N,terms_and_conditions_link_src:T,test_mode:R}=k.params,x=(0,c.useRef)(null),{eventRegistration:M,emitResponse:I}=t,{onPaymentSetup:P}=M;let O={labelMessage:h,helperMessage:y,validate:"true",selectId:"docType",flagError:"mercadopago_ticket[docNumberError]",inputName:"mercadopago_ticket[docNumber]",selectName:"mercadopago_ticket[docType]",documents:function(e){switch(e){case"MLB":return'["CPF","CNPJ"]';case"MLU":return'["CI","OTRO"]';default:return null}}(C)};return(0,c.useEffect)((()=>{const e=P((async()=>{const e=document.getElementById("mp-doc-number-helper"),t=document.getElementById("mp-payment-method-helper"),n={"mercadopago_ticket[site_id]":C,"mercadopago_ticket[amount]":b.toString(),"mercadopago_ticket[doc_type]":x.current.querySelector("#docType")?.value,"mercadopago_ticket[doc_number]":x.current.querySelector("#form-checkout__identificationNumber-container > input")?.value},c=w.find((e=>{const t=`#${e.id}`,n=x.current.querySelector(t);return n&&n.checked}));function a(e,t){e&&e.style&&(e.style.display=t)}function o(e){return e&&"flex"===e.style.display}return c&&(n["mercadopago_ticket[payment_method_id]"]=x.current.querySelector(`#${c.id}`).value,t.style.display="none"),O.documents&&""===n["mercadopago_ticket[doc_number]"]&&a(e,"flex"),n["mercadopago_ticket[payment_method_id]"]||a(t,"flex"),{type:o(e)||o(t)?I.responseTypes.ERROR:I.responseTypes.SUCCESS,meta:{paymentMethodData:n}}}));return()=>e()}),[I.responseTypes.ERROR,I.responseTypes.SUCCESS,P]),(0,e.createElement)("div",{className:"mp-checkout-container"},(0,e.createElement)("div",{className:"mp-checkout-ticket-container"},(0,e.createElement)("div",{ref:x,className:"mp-checkout-ticket-content"},R?(0,e.createElement)(l,{title:n,description:a,"link-text":p,"link-src":g}):null,O.documents?(0,e.createElement)(s,{...O}):null,(0,e.createElement)("p",{className:"mp-checkout-ticket-text"},E),(0,e.createElement)(r,{name:"mercadopago_ticket[payment_method_id]",buttonName:S,columns:JSON.stringify(w)}),(0,e.createElement)(i,{isVisible:"false",message:f,inputId:"mp-payment-method-helper",id:"payment-method-helper"}),(0,e.createElement)("div",{id:"mp-box-loading"}))),(0,e.createElement)(m,{description:v,linkText:N,linkSrc:T,checkoutClass:"ticket"}))},y={name:_,label:(0,e.createElement)((t=>{const{PaymentMethodLabel:n}=t.components,c=(0,a.decodeEntities)(k?.params?.fee_title||""),o=`${g} ${c}`;return(0,e.createElement)(n,{text:o})}),null),content:(0,e.createElement)(h,null),edit:(0,e.createElement)(h,null),canMakePayment:()=>!0,ariaLabel:g,supports:{features:null!==(p=k?.supports)&&void 0!==p?p:[]}};(0,t.registerPaymentMethod)(y)})();