(()=>{"use strict";var e,a;e=document.querySelector("#age"),a=[{name:"Adam",age:28},{name:"Ania",age:35},{name:"Roman",age:18}],e.innerHTML=a.reduce((function(e,a){return e+a.age}),0)})();