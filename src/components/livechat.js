import  {useEffect} from 'react' ;

function Livechat () {
  useEffect(() => {
    window.chatwootSettings = {
      hideMessageBubble: false,
      position: "right", 
      locale: "en", 
      type: "standard" 
    };
  (function(d,t) {
    var BASE_URL="https://app.chatwoot.com";
    var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
    g.src=BASE_URL+"/packs/js/sdk.js";
    g.async = true;
    s.parentNode.insertBefore(g,s);
    g.onload=function(){
      window.chatwootSDK.run({
        websiteToken: 'J3Crz8xLBysK2gM6BM6F84G5',
        baseUrl: BASE_URL
      })
    }
  })(document,"script");},[]);};
export default Livechat;