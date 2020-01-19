var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function c(t){t.forEach(e)}function r(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function o(t){t.parentNode.removeChild(t)}function i(t){return document.createElement(t)}function u(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function f(){return t=" ",document.createTextNode(t);var t}function d(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function m(t,e,n){t.classList[n?"add":"remove"](e)}let h;function p(t){h=t}const g=[],$=[],v=[],w=[],x=Promise.resolve();let b=!1;function y(t){v.push(t)}function q(){const t=new Set;do{for(;g.length;){const t=g.shift();p(t),_(t.$$)}for(;$.length;)$.pop()();for(let e=0;e<v.length;e+=1){const n=v[e];t.has(n)||(n(),t.add(n))}v.length=0}while(g.length);for(;w.length;)w.pop()();b=!1}function _(t){if(null!==t.fragment){t.update(),c(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(y)}}const C=new Set;function M(t,e){t&&t.i&&(C.delete(t),t.i(e))}function j(t,e,n,c){if(t&&t.o){if(C.has(t))return;C.add(t),(void 0).c.push(()=>{C.delete(t),c&&(n&&t.d(1),c())}),t.o(e)}}function E(t){t&&t.c()}function k(t,n,a){const{fragment:s,on_mount:l,on_destroy:o,after_update:i}=t.$$;s&&s.m(n,a),y(()=>{const n=l.map(e).filter(r);o?o.push(...n):c(n),t.$$.on_mount=[]}),i.forEach(y)}function Z(t,e){const n=t.$$;null!==n.fragment&&(c(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function A(t,e){-1===t.$$.dirty[0]&&(g.push(t),b||(b=!0,x.then(q)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function L(e,r,a,s,l,o,i=[-1]){const u=h;p(e);const f=r.props||{},d=e.$$={fragment:null,ctx:null,props:o,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:n(),dirty:i};let m=!1;d.ctx=a?a(e,f,(t,n,...c)=>{const r=c.length?c[0]:n;return d.ctx&&l(d.ctx[t],d.ctx[t]=r)&&(d.bound[t]&&d.bound[t](r),m&&A(e,t)),n}):[],d.update(),m=!0,c(d.before_update),d.fragment=!!s&&s(d.ctx),r.target&&(r.hydrate?d.fragment&&d.fragment.l(function(t){return Array.from(t.childNodes)}(r.target)):d.fragment&&d.fragment.c(),r.intro&&M(e.$$.fragment),k(e,r.target,r.anchor),q()),p(u)}class O{$destroy(){Z(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function N(e){let n;return{c(){n=i("div"),n.innerHTML='<img alt="ucok code" src="Jack.svg" class="svelte-d70bcm"> \n  <span class="svelte-d70bcm"><h1 class="svelte-d70bcm">UCOK</h1> \n    <h3 class="svelte-d70bcm">CODE</h3></span>',d(n,"class","svelte-d70bcm")},m(t,e){l(t,n,e)},p:t,i:t,o:t,d(t){t&&o(n)}}}class B extends O{constructor(t){super(),L(this,t,null,N,a,{})}}function S(e){let n,c,r,a,i,f;return{c(){n=u("svg"),c=u("g"),r=u("rect"),a=u("rect"),i=u("rect"),d(r,"id","r1"),d(r,"width","70"),d(r,"height","6"),d(r,"rx","3"),d(r,"fill","#575757"),d(r,"class","svelte-1pfmj5"),d(a,"id","r2"),d(a,"width","70"),d(a,"height","6"),d(a,"rx","3"),d(a,"fill","#575757"),d(a,"class","svelte-1pfmj5"),d(i,"id","r3"),d(i,"width","70"),d(i,"height","6"),d(i,"rx","3"),d(i,"fill","#575757"),d(i,"class","svelte-1pfmj5"),d(c,"transform","translate(-1114 -79)"),d(c,"class","svelte-1pfmj5"),m(c,"active",e[0]),d(n,"xmlns","http://www.w3.org/2000/svg"),d(n,"width","30"),d(n,"height","30"),d(n,"viewBox","0 0 70 43"),d(n,"class","svelte-1pfmj5")},m(t,o){var u,d,m,h;l(t,n,o),s(n,c),s(c,r),s(c,a),s(c,i),u=n,d="click",m=e[1],u.addEventListener(d,m,h),f=()=>u.removeEventListener(d,m,h)},p(t,[e]){1&e&&m(c,"active",t[0])},i:t,o:t,d(t){t&&o(n),f()}}}function T(t,e,n){let{active:c=!1}=e;return t.$set=t=>{"active"in t&&n(0,c=t.active)},[c,function(){n(0,c=!c)}]}class H extends O{constructor(t){super(),L(this,t,T,S,a,{active:0})}}function K(e){let n,c,r;const a=new B({}),u=new H({});return{c(){n=i("div"),E(a.$$.fragment),c=f(),E(u.$$.fragment),d(n,"class","svelte-ju81j7")},m(t,e){l(t,n,e),k(a,n,null),s(n,c),k(u,n,null),r=!0},p:t,i(t){r||(M(a.$$.fragment,t),M(u.$$.fragment,t),r=!0)},o(t){j(a.$$.fragment,t),j(u.$$.fragment,t),r=!1},d(t){t&&o(n),Z(a),Z(u)}}}class U extends O{constructor(t){super(),L(this,t,null,K,a,{})}}function z(e){let n,c,r,a,i,f,m,h,p,g;return{c(){n=u("svg"),c=u("g"),r=u("g"),a=u("path"),i=u("path"),f=u("path"),m=u("g"),h=u("path"),p=u("path"),g=u("path"),d(a,"d","M320.048,172.419c-3.466.457-43.086,6.195-52.92,32.341-11.075,29.439,25.193,49.83,32.34,88.2,10.679,57.332-78.954,74.249-123.483,161.707-39.728,78.026-32.969,183.266,8.82,207.277,37.825,21.735,97.329-27.12,108.783-11.76,14.982,20.089-85.868,104.908-70.561,129.365,11.7,18.7,81.1,12.373,132.3-24.991,75.52-55.105,74.865-151.077,111.725-151.416,29.447-.27,41.476,60.88,57.332,57.332,25.212-5.643,34.595-169.17-32.341-205.807-23.691-12.967-44.89-3.442-54.392-19.111-16.013-26.409,39.107-61.867,35.281-122.015-2.417-38-27.028-64.951-45.572-85.262C410.778,210.117,370.3,165.783,320.048,172.419Z"),d(a,"transform","translate(22.522)"),d(a,"fill","#e94666"),d(i,"d","M371.562,296.7c-11.354,83.556-153.073,135.986-157.295,129.365-3.756-5.888,89.79-76.414,97.022-69.093,10.127,10.249-142.337,179.764-141.124,180.817,1.011.878,101.678-122.316,117.6-111.724,16.815,11.182-67.328,167.149-55.861,173.465,6.8,3.746,36.3-51.159,54.391-45.57,26.959,8.324,2.919,142.979,20.581,147C325.928,705.3,358.5,549.763,418.6,546.61c29.482-1.547,53.92,34.182,57.332,30.87,6.2-6.016-109.489-89.956-99.964-179.346,5.225-49.027,44.2-62.962,38.222-110.254-6.41-50.7-57.922-87.838-66.153-82.322C340.265,210.769,377.978,249.486,371.562,296.7Z"),d(i,"transform","translate(35.69 21.253)"),d(i,"fill","#f8c963"),d(f,"d","M429.742,298.166c7.873,77.258-84.5,141.011-67.623,161.707,9.827,12.046,39.1-11.79,72.033,1.47,48.959,19.714,60.572,105.308,52.922,108.784-6.178,2.806-27.862-62.249-55.862-60.272-43.625,3.079-75.633,140.827-79.383,139.654-3.733-1.169,49.205-133.185,20.581-152.885C337.136,472.348,187.762,625.34,182.773,620.108c-6.683-7.008,238.6-210.046,194.046-313.121-22.611-52.311-114.958-67.457-108.784-98.492,2.811-14.122,24.045-21.62,36.751-23.521C355.94,177.321,423.532,237.245,429.742,298.166Z"),d(f,"transform","translate(43.663 8.026)"),d(f,"fill","#c33a58"),d(r,"id","heart"),d(r,"class","svelte-chvcvl"),d(h,"d","M458.694,365.385l-.246.148c-24.714,13.209-50.559,26.074-76.486,38.038-115.523,53.329-232.718,88.6-260.1,55.1-6.146-7.522-7.064-17.634-7.375-21.076-4.032-44.315,56.819-88.417,104.1-113.278,16.307-8.571,30.991-14.848,40.857-18.077,5.1-1.672,8.915-2.508,11-2.442.885.016,1.442.213,1.688.574a1,1,0,0,1,.082.2c1.246,4.064-28.795,23.993-55.557,44.364-15.93,12.128-30.68,24.419-36.989,33.613,0,.016,0,.016-.016.033-2.835,4.146-3.95,7.67-2.639,10.259a3.164,3.164,0,0,0,.361.59,4.564,4.564,0,0,0,.574.688,2.872,2.872,0,0,0,.393.377c.147.131.328.279.508.41a7.357,7.357,0,0,0,1.229.721c.2.1.393.2.606.279l.1.049c.229.1.475.18.737.279a19.271,19.271,0,0,0,2.8.738c.688.147,1.409.246,2.18.344.393.049.787.082,1.18.115.8.066,1.655.131,2.557.164,1.114.033,2.311.033,3.573.016.344,0,.688-.016,1.032-.016.443-.016.9-.049,1.377-.066.656-.016,1.344-.066,2.032-.115.836-.049,1.688-.115,2.573-.2,1.295-.115,2.639-.246,4.032-.41.77-.082,1.557-.18,2.36-.279,1.606-.213,3.261-.443,4.982-.7.672-.115,1.344-.213,2.032-.328.656-.1,1.327-.213,2-.328.656-.115,1.344-.229,2.032-.361,1.262-.213,2.54-.459,3.851-.7,2.245-.426,4.572-.885,6.965-1.393,1.344-.279,2.721-.574,4.114-.885,1.7-.377,3.458-.77,5.228-1.18,1.508-.344,3.032-.7,4.589-1.082,4.212-1.016,8.588-2.114,13.095-3.294,1.557-.41,3.114-.819,4.7-1.246q8.383-2.262,17.306-4.851,8.481-2.458,17.372-5.2c1.049-.311,2.114-.639,3.179-.983,3.016-.934,6.064-1.9,9.128-2.868,1.016-.328,2.049-.656,3.081-.983,1.032-.344,2.049-.672,3.1-1,2.212-.721,4.441-1.442,6.687-2.18,2.77-.918,5.556-1.836,8.375-2.786.2-.066.41-.131.623-.213,2.114-.7,4.245-1.426,6.375-2.163q6.392-2.188,12.865-4.441,6.49-2.262,13.013-4.622,3.269-1.155,6.539-2.36c2.18-.77,4.359-1.573,6.555-2.393,2.18-.8,4.376-1.606,6.572-2.426q6.564-2.434,13.127-4.949c2.049-.77,4.1-1.557,6.146-2.344,3.474-1.328,6.932-2.688,10.39-4.032,2.13-.836,4.245-1.672,6.375-2.524,15.176-6.015,30.139-12.193,44.561-18.4.983-.41,1.95-.836,2.934-1.262,10.341-4.474,20.387-8.965,30.008-13.439,1.917-.885,3.819-1.77,5.687-2.655,9-4.212,17.6-8.407,25.7-12.537,1.131-.574,2.245-1.147,3.36-1.721.082-.033.164-.082.262-.131,1.016-.524,2.016-1.049,3.016-1.573,4.72-2.442,9.26-4.884,13.57-7.277a.016.016,0,0,1,.016-.016q2.95-1.622,5.752-3.245c.951-.541,1.868-1.065,2.786-1.606,2.737-1.59,5.375-3.163,7.883-4.72,1.442-.885,2.835-1.754,4.179-2.622,2.442-1.557,4.769-3.081,6.949-4.605q1.082-.738,2.114-1.475c.7-.492,1.377-.967,2.032-1.459a102.97,102.97,0,0,0,11.652-9.637,48.615,48.615,0,0,0,3.524-3.786c.033-.033.066-.082.1-.115.541-.656,1.049-1.311,1.491-1.95a6.655,6.655,0,0,0,.377-.557,19.92,19.92,0,0,0,1.229-2.049c.016-.016.016-.033.033-.049a13.539,13.539,0,0,0,.9-2.131,8.786,8.786,0,0,0,.475-2.049,7,7,0,0,0-.131-2.688,8.049,8.049,0,0,0-2.294-3.819,5.428,5.428,0,0,0-.443-.426c-.311-.279-.656-.541-1-.8a.436.436,0,0,0-.1-.082c-.508-.361-1.049-.721-1.639-1.065-.213-.115-.426-.246-.656-.361a22.643,22.643,0,0,0-2.1-1.016c-.492-.213-1.016-.426-1.541-.623q-1.278-.492-2.655-.934c-.836-.246-1.688-.508-2.573-.738q-.836-.221-1.721-.442c-.721-.18-1.459-.344-2.229-.492-.344-.082-.688-.147-1.032-.213-2.508-.524-5.179-.951-7.981-1.327-1.082-.147-2.18-.279-3.294-.41-1.246-.147-2.507-.279-3.8-.393-.656-.066-1.295-.131-1.95-.18-3.442-.311-6.965-.541-10.538-.721-.852-.033-1.721-.082-2.589-.115-.852-.049-1.721-.082-2.573-.1l-1.213-.049c-.459-.016-.918-.033-1.377-.033-.443-.016-.869-.033-1.295-.033-2.786-.082-5.556-.131-8.276-.147-.475-.016-.951-.016-1.426-.016-20.83-.147-38.481.869-38.464.262.033-1.131,60.7-9.014,102.708-4.671,2.7.279,5.343.606,7.867,1,9.309,1.409,17.29,3.589,22.862,6.769,4.032,2.294,6.818,5.113,7.948,8.555C643.2,250.96,560.451,311.007,458.694,365.385Z"),d(h,"transform","translate(0 22.975)"),d(h,"fill","#b6a6d0"),d(p,"d","M622.64,215.879q-2.139,3.1-4.523,6.326c-12.947,17.585-30.712,37.35-51.788,57.344a.225.225,0,0,1-.066.049c-31.515,29.975-70.422,60.425-111.672,84.893l-.246.148a602.836,602.836,0,0,1-76.486,38.038c-120.587,50.018-242.683,58.344-255.892,27.713-10.489-24.337,47.183-74.535,92.514-106.969l40.857-18.077c-3.032,2.966-6.572,6.342-10.456,10.063l-.016.016c-5.457,5.212-11.554,11.079-17.7,17.274-.016.016-.049.033-.066.049-4.917,4.949-9.866,10.1-14.553,15.291-16.241,18.027-29.254,36.53-26.418,48.658a12.4,12.4,0,0,0,1.164,3.13c15.815,29.827,152.316-3,259.711-63.08A683.184,683.184,0,0,0,542.6,271.813a.016.016,0,0,1,.016-.016q2.95-1.622,5.752-3.245c.951-.541,1.868-1.065,2.786-1.606,2.737-1.59,5.375-3.163,7.883-4.72,1.442-.885,2.835-1.754,4.179-2.622,2.442-1.557,4.769-3.081,6.949-4.605q1.082-.738,2.114-1.475c.7-.492,1.377-.983,2.032-1.459a102.97,102.97,0,0,0,11.652-9.637c1.328-1.311,2.507-2.557,3.524-3.786.033-.033.066-.082.1-.115.541-.672,1.032-1.311,1.491-1.95a6.655,6.655,0,0,0,.377-.557,21.839,21.839,0,0,0,1.229-2.049c.016-.016.016-.033.033-.049a15.282,15.282,0,0,0,.9-2.131,9.936,9.936,0,0,0,.475-2.049,7,7,0,0,0-.131-2.688,8.049,8.049,0,0,0-2.294-3.819,67.088,67.088,0,0,0,7.7-13.062c.148-.361.279-.721.41-1.065C609.086,210.519,617.068,212.7,622.64,215.879Z"),d(p,"transform","translate(4.104 23.869)"),d(p,"fill","#ab91c3"),d(g,"d","M561.177,280.443a.225.225,0,0,1-.066.049c-3.229,2.081-6.637,4.245-10.226,6.457-168.1,104.1-407.061,165.1-421.417,128.52-8.653-21.994,66.587-72.716,110.246-99.151l.016-.016c8.719-5.277,16.176-9.587,21.453-12.5l1.77.77c-8.653,6.047-24.648,16.962-40.939,29.024-.016.016-.049.033-.066.049-23.845,17.651-48.346,37.809-51.542,48.9,0,.016,0,.016-.016.033-2.835,4.146-3.95,7.67-2.639,10.259a3.545,3.545,0,0,0,.361.59,4.568,4.568,0,0,0,.574.688,2.874,2.874,0,0,0,.393.377,4.265,4.265,0,0,0,.508.41,7.357,7.357,0,0,0,1.229.721c.2.1.393.2.606.279l.1.049a7.687,7.687,0,0,0,.737.279,19.27,19.27,0,0,0,2.8.738c.688.147,1.409.246,2.18.344.377.049.77.082,1.18.115.8.066,1.655.131,2.557.164,1.114.033,2.311.033,3.573.016.344,0,.688-.016,1.032-.016.443-.016.9-.049,1.377-.066.672-.016,1.344-.066,2.032-.115.836-.049,1.688-.115,2.573-.2,1.295-.115,2.639-.246,4.032-.41.77-.082,1.557-.18,2.36-.279,1.606-.213,3.261-.443,4.982-.7.672-.115,1.344-.213,2.032-.328.656-.1,1.327-.213,2-.328.656-.115,1.344-.229,2.032-.361,1.262-.213,2.54-.459,3.851-.7,2.245-.426,4.572-.885,6.965-1.393,1.344-.279,2.721-.574,4.114-.885,1.7-.377,3.458-.77,5.228-1.18,1.508-.344,3.032-.7,4.589-1.082,4.212-1.016,8.588-2.114,13.095-3.294,1.557-.393,3.114-.819,4.7-1.246q8.383-2.262,17.306-4.851,8.481-2.434,17.372-5.2c1.049-.311,2.114-.639,3.179-.983,3-.918,6.047-1.885,9.128-2.868,1.016-.328,2.049-.656,3.081-.983s2.065-.656,3.1-1c2.212-.721,4.441-1.442,6.687-2.18,2.77-.918,5.556-1.836,8.375-2.786.2-.066.41-.131.623-.213,2.114-.7,4.245-1.426,6.375-2.163q6.392-2.163,12.865-4.441c4.327-1.508,8.653-3.048,13.013-4.622q3.269-1.155,6.539-2.36c2.18-.77,4.359-1.573,6.555-2.393,2.2-.8,4.376-1.606,6.572-2.426q6.564-2.434,13.127-4.949c2.049-.77,4.1-1.557,6.146-2.344,3.474-1.328,6.932-2.688,10.39-4.032,2.13-.836,4.245-1.672,6.375-2.524,15.176-6.015,30.139-12.193,44.561-18.4.983-.41,1.967-.836,2.934-1.262,10.341-4.474,20.387-8.965,30.008-13.439,1.917-.885,3.819-1.77,5.687-2.655,9-4.212,17.6-8.407,25.7-12.537,1.131-.574,2.245-1.147,3.36-1.721.082-.033.164-.082.262-.131,1.016-.524,2.016-1.049,3.016-1.573,4.72-2.442,9.26-4.884,13.57-7.277a.016.016,0,0,1,.016-.016q2.95-1.622,5.752-3.245c.951-.541,1.868-1.065,2.786-1.606,2.737-1.59,5.375-3.163,7.883-4.72,1.442-.885,2.835-1.754,4.179-2.622,2.442-1.557,4.769-3.081,6.949-4.605q1.082-.738,2.114-1.475c.7-.492,1.377-.983,2.032-1.459a102.97,102.97,0,0,0,11.652-9.637c1.328-1.311,2.507-2.557,3.524-3.786.033-.033.066-.082.1-.115.541-.672,1.032-1.311,1.491-1.95a6.655,6.655,0,0,0,.377-.557,21.839,21.839,0,0,0,1.229-2.049c.016-.016.016-.033.033-.049a15.282,15.282,0,0,0,.9-2.131,9.936,9.936,0,0,0,.475-2.049,7,7,0,0,0-.131-2.688,8.049,8.049,0,0,0-2.294-3.819,5.428,5.428,0,0,0-.443-.426,9.734,9.734,0,0,0-1-.8.436.436,0,0,0-.1-.082,17.672,17.672,0,0,0-1.639-1.065c-.213-.115-.426-.246-.656-.361a22.643,22.643,0,0,0-2.1-1.016c-.492-.229-1.016-.426-1.541-.623q-1.278-.492-2.655-.934c-.819-.262-1.688-.508-2.573-.738q-.836-.221-1.721-.442c-.721-.18-1.459-.344-2.229-.492-.328-.082-.688-.147-1.032-.213-2.508-.524-5.179-.951-7.981-1.327-1.082-.147-2.18-.279-3.294-.41-1.246-.147-2.507-.279-3.8-.393-.639-.066-1.295-.131-1.95-.18-3.442-.311-6.965-.541-10.538-.721-.852-.033-1.721-.082-2.589-.115-.852-.049-1.721-.082-2.573-.1l-1.213-.049c-.459-.016-.918-.033-1.377-.033-.426-.016-.869-.033-1.295-.033-2.786-.082-5.556-.131-8.276-.147-.475-.016-.951-.016-1.426-.016-20.83-.147-38.481.869-38.464.262.033-1.131,60.7-9.014,102.708-4.671,2.622.623,5.113,1.311,7.457,2.065,9.112,2.934,15.864,6.883,18.749,12.029a12.059,12.059,0,0,1,1.131,2.737C617.193,237.177,603.082,253.467,561.177,280.443Z"),d(g,"transform","translate(9.255 22.975)"),d(g,"fill","#8c74b2"),d(m,"id","ring"),d(c,"transform","translate(-114.294 -171.748)"),d(n,"xmlns","http://www.w3.org/2000/svg"),d(n,"width","350"),d(n,"height","100%"),d(n,"viewBox","0 0 521 617.987")},m(t,e){l(t,n,e),s(n,c),s(c,r),s(r,a),s(r,i),s(r,f),s(c,m),s(m,h),s(m,p),s(m,g)},p:t,i:t,o:t,d(t){t&&o(n)}}}class D extends O{constructor(t){super(),L(this,t,null,z,a,{})}}function I(e){let n,c,r,a;const u=new D({});return{c(){n=i("div"),E(u.$$.fragment),c=f(),r=i("span"),r.innerHTML='<h1 class="svelte-18ecyat">I&#39;M</h1> \n    <h3 class="svelte-18ecyat">UCOK</h3>',d(r,"class","svelte-18ecyat"),d(n,"class","svelte-18ecyat")},m(t,e){l(t,n,e),k(u,n,null),s(n,c),s(n,r),a=!0},p:t,i(t){a||(M(u.$$.fragment,t),a=!0)},o(t){j(u.$$.fragment,t),a=!1},d(t){t&&o(n),Z(u)}}}class J extends O{constructor(t){super(),L(this,t,null,I,a,{})}}function P(e){let n,c,r;const a=new U({}),u=new J({});return{c(){n=i("main"),E(a.$$.fragment),c=f(),E(u.$$.fragment),d(n,"class","svelte-l1zv6u")},m(t,e){l(t,n,e),k(a,n,null),s(n,c),k(u,n,null),r=!0},p:t,i(t){r||(M(a.$$.fragment,t),M(u.$$.fragment,t),r=!0)},o(t){j(a.$$.fragment,t),j(u.$$.fragment,t),r=!1},d(t){t&&o(n),Z(a),Z(u)}}}function F(t,e,n){let{name:c}=e;return t.$set=t=>{"name"in t&&n(0,c=t.name)},[c]}return new class extends O{constructor(t){super(),L(this,t,F,P,a,{name:0})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
