if(!self.define){let e,i={};const a=(a,s)=>(a=new URL(a+".js",s).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(s,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let r={};const f=e=>a(e,c),t={module:{uri:c},exports:r,require:f};i[c]=Promise.all(s.map((e=>t[e]||f(e)))).then((e=>(n(...e),r)))}}define(["./workbox-22294e6b"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/CNAME",revision:"b0ff489ce28e31396dd8b6a22d820ae8"},{url:"/Certifications/Creación de Portafolio y CV.pdf",revision:"e760795c9ff6dde9e2e86b531b8c97b9"},{url:"/Certifications/Creación de Portafolio y CV.png",revision:"2bbeb2f7725e39184df301f5fe37bd8f"},{url:"/Certifications/Cum Laude.png",revision:"05add8b27399cfa2acd936225a8e59ea"},{url:"/Certifications/Docker.pdf",revision:"00f0406ad6b83e4775d255c80f9df98c"},{url:"/Certifications/Docker.png",revision:"a08ba6ca5f999a4268ea027f3f36ede9"},{url:"/Certifications/Fundamentos Prácticos de Machine Learning.pdf",revision:"f52b9c67b876a8e8ffb3d856d853df80"},{url:"/Certifications/Fundamentos Prácticos de Machine Learning.png",revision:"0e9dc0eea230fb0cffcf87596c211796"},{url:"/Certifications/Github Introduction Course.pdf",revision:"4c934d09141374d08bd98c7b8f006e93"},{url:"/Certifications/Github Introduction Course.png",revision:"5f595ddc7ccd798517e443e9d15b9423"},{url:"/Certifications/Herramientas para el crecimiento Personal.png",revision:"73d2e80d5f80def97dcdfe27e95c5d6b"},{url:"/Certifications/Herramientas para el crecimiento personal.pdf",revision:"eae1bbc30f3771cf8b8b73fe003ce1c3"},{url:"/Certifications/Ingeniero de Sistemas y Computación.pdf",revision:"701da7975af64c45b1a04cce9e1f71bb"},{url:"/Certifications/Ingeniero de Sistemas y Computación.png",revision:"f053bb99385bcb5d250db0cf5fdc76b4"},{url:"/Certifications/Intreoducción al Machine Learning.pdf",revision:"5a70e7871c7806174aa2377f5d0ccf80"},{url:"/Certifications/Introducción a Machine Learning.png",revision:"12f14a467dd1d08770dce91d9b502e0a"},{url:"/Certifications/Optimización del Perfil Profesional.png",revision:"c14b4b6b7c4739fb2342965c954c1926"},{url:"/Certifications/Optimización del perfil profesional.pdf",revision:"7103c7ac5d4288a882c0776629428f54"},{url:"/Certifications/leftArrow.svg",revision:"c0e9a83816f31fbee3cf63d43fc8cd3e"},{url:"/Certifications/rightArrow.svg",revision:"b79ac83019c41a3dc602c8ae5533bddd"},{url:"/ExperienceSection/Details/innovation.png",revision:"d227df2b312bb48a9e0a91a1d1d78aa1"},{url:"/ExperienceSection/Details/sms.png",revision:"181514cc6eaf7e924a46030e2937256c"},{url:"/ExperienceSection/Details/tybaApp.png",revision:"2f31891ea8d04ba0651f193d0bf1aab7"},{url:"/ExperienceSection/Inalambria.png",revision:"3225ba31a14a21be9b5710803fe14ba7"},{url:"/ExperienceSection/Rochester School.png",revision:"adba2438f138fd46b10bb3805e650c0b"},{url:"/ExperienceSection/Sincosoft.png",revision:"0c35bff36440d4513e679aa263e2d3eb"},{url:"/ExperienceSection/Uniandes.png",revision:"f5436a0c5ac26f0b666eb1f8aa35d6b3"},{url:"/ExperienceSection/tyba.png",revision:"9ad6ffe116d6676b43bcad7b2c7d0932"},{url:"/SkillsGraph/aws.svg",revision:"fdff4014b22f67787c176c6aa52890a7"},{url:"/SkillsGraph/circleci.svg",revision:"40237d6c98ca8ef16081bd3d49d9c8fe"},{url:"/SkillsGraph/css.svg",revision:"6971ddc761cc35ba918be0a69dfbcf50"},{url:"/SkillsGraph/cypress.svg",revision:"592486abec77ca8fbb376d6b89e8a721"},{url:"/SkillsGraph/django.svg",revision:"bcf22073c9f13bab1761b90bce9fec55"},{url:"/SkillsGraph/firebase.svg",revision:"7f8d489c1887554fcf61932505d46393"},{url:"/SkillsGraph/github.svg",revision:"ce89173e3842fb91835a9cc8605a5ecc"},{url:"/SkillsGraph/graphql.svg",revision:"6270a2d4757a839d4653c02f3db32e2f"},{url:"/SkillsGraph/heroku.svg",revision:"d23db15dd40ea8057b5a858902c3f8ac"},{url:"/SkillsGraph/html.svg",revision:"1fa71037fda75a5629d7ff1a94d1913b"},{url:"/SkillsGraph/java.svg",revision:"2c224f8151107740bd0ca61109862f4c"},{url:"/SkillsGraph/javascript.svg",revision:"891a71b9a98f1d58491e1b06c4d356a2"},{url:"/SkillsGraph/mocha.svg",revision:"ae200940324d4cadc039f6687e94f68e"},{url:"/SkillsGraph/mongo.svg",revision:"c2a864c96dbfc449ec45dd7ac4438628"},{url:"/SkillsGraph/nextjs.svg",revision:"68e8250c54ca6289bc68ef53bfcb10f0"},{url:"/SkillsGraph/nodejs.svg",revision:"89ccb09060a7adf788ea2340c54d6d78"},{url:"/SkillsGraph/postgresql.svg",revision:"d7c985e7cca077dc2d77f89a66573e35"},{url:"/SkillsGraph/python.svg",revision:"146716bdf1a351db5705ec1e6a25ed08"},{url:"/SkillsGraph/rabbitmq.svg",revision:"3938d65ce384b5ceb65919a58ebbd444"},{url:"/SkillsGraph/react.svg",revision:"c3fbd71b12b726e00eec2b59f3c76786"},{url:"/SkillsGraph/typescript.svg",revision:"3de182d2120823fe49c27eeb1765c53a"},{url:"/SkillsGraph/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"},{url:"/SkillsGraph/vue.svg",revision:"60dfaadbbd65a730821eb0e7b5974020"},{url:"/SocialMedia/email.svg",revision:"b8dd0f4356902792a84ec4d4657ec59f"},{url:"/SocialMedia/facebook.svg",revision:"b5556d65a88a4e15ac81a82e059ef50b"},{url:"/SocialMedia/github.svg",revision:"fabbb2cf33ac8899df2fcc9a207304d8"},{url:"/SocialMedia/gitlab.svg",revision:"96183085fc53a8fe31ffd8c2e58123bf"},{url:"/SocialMedia/instagram.svg",revision:"928864749c1c24e8ba655f9d1b24ad6c"},{url:"/SocialMedia/linkedin.svg",revision:"9e36c8fd15d6f93ed6a45f9484746e8f"},{url:"/SocialMedia/twitter.svg",revision:"546cd79bae6d0eb9647e0ded2bb91c5f"},{url:"/SocialMedia/whatsapp.svg",revision:"6531d91544f7eb7212a43b77f50b6f03"},{url:"/_next/static/5knuPsmfl4bQVS2YLgFhE/_buildManifest.js",revision:"5knuPsmfl4bQVS2YLgFhE"},{url:"/_next/static/5knuPsmfl4bQVS2YLgFhE/_ssgManifest.js",revision:"5knuPsmfl4bQVS2YLgFhE"},{url:"/_next/static/chunks/8788509fa0ce50648d7f96801320f5803b3dc000.ac44d5276c09ea91e9e1.js",revision:"5knuPsmfl4bQVS2YLgFhE"},{url:"/_next/static/chunks/commons.e5bc2860660a98d22f26.js",revision:"5knuPsmfl4bQVS2YLgFhE"},{url:"/_next/static/chunks/framework.6fff953eb0f638171baa.js",revision:"5knuPsmfl4bQVS2YLgFhE"},{url:"/_next/static/chunks/main-73b4d4ab3f5fc032e978.js",revision:"5knuPsmfl4bQVS2YLgFhE"},{url:"/_next/static/chunks/pages/%5Blocale%5D-84a3b4cf4a9e7f2e2d73.js",revision:"5knuPsmfl4bQVS2YLgFhE"},{url:"/_next/static/chunks/pages/_app-5ad8fc138170a5f9b395.js",revision:"5knuPsmfl4bQVS2YLgFhE"},{url:"/_next/static/chunks/pages/_error-8fe4695d433d7daa4ec3.js",revision:"5knuPsmfl4bQVS2YLgFhE"},{url:"/_next/static/chunks/pages/index-761388ffc7869173374d.js",revision:"5knuPsmfl4bQVS2YLgFhE"},{url:"/_next/static/chunks/polyfills-8f31809deb7932dd0187.js",revision:"5knuPsmfl4bQVS2YLgFhE"},{url:"/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",revision:"5knuPsmfl4bQVS2YLgFhE"},{url:"/_next/static/css/1c55673ae8cc3877bc5e.css",revision:"5knuPsmfl4bQVS2YLgFhE"},{url:"/_next/static/css/c7b209d3750a525e14e4.css",revision:"5knuPsmfl4bQVS2YLgFhE"},{url:"/_next/static/media/fa-brands-400.216edb96b562c79adc09e2d3c63db7c0.svg",revision:"5knuPsmfl4bQVS2YLgFhE"},{url:"/_next/static/media/fa-brands-400.329a95a9172fdb2cccb4f9347ed55233.woff",revision:"5knuPsmfl4bQVS2YLgFhE"},{url:"/_next/static/media/fa-brands-400.89a52ae1d02b86d6143987c865471c24.eot",revision:"5knuPsmfl4bQVS2YLgFhE"},{url:"/_next/static/media/fa-brands-400.9e138496e8f1719c6ebf0abe50563635.ttf",revision:"5knuPsmfl4bQVS2YLgFhE"},{url:"/_next/static/media/fa-brands-400.c1210e5ebe4344da508396540be7f52c.woff2",revision:"5knuPsmfl4bQVS2YLgFhE"},{url:"/_next/static/media/fa-regular-400.1017bce89c72f95bcf8e2bf4774efdbf.ttf",revision:"5knuPsmfl4bQVS2YLgFhE"},{url:"/_next/static/media/fa-regular-400.19e27d348fefc21941e0310a0ec6339b.svg",revision:"5knuPsmfl4bQVS2YLgFhE"},{url:"/_next/static/media/fa-regular-400.3672264812746c3c7225909742da535c.woff",revision:"5knuPsmfl4bQVS2YLgFhE"},{url:"/_next/static/media/fa-regular-400.4079ae2d2a15d0689568f3a5459241c7.eot",revision:"5knuPsmfl4bQVS2YLgFhE"},{url:"/_next/static/media/fa-regular-400.68c5af1f48e2bfca1e57ae1c556a5c72.woff2",revision:"5knuPsmfl4bQVS2YLgFhE"},{url:"/_next/static/media/fa-solid-900.07c3313b24f7b1ca85ee99b4fa7db55e.ttf",revision:"5knuPsmfl4bQVS2YLgFhE"},{url:"/_next/static/media/fa-solid-900.13de59f1a36b6cb4bca0050160ff0e41.svg",revision:"5knuPsmfl4bQVS2YLgFhE"},{url:"/_next/static/media/fa-solid-900.ada6e6df937f7e5e8b790dfea07109b7.woff2",revision:"5knuPsmfl4bQVS2YLgFhE"},{url:"/_next/static/media/fa-solid-900.c6ec080084769a6d8a34ab35b77999cd.woff",revision:"5knuPsmfl4bQVS2YLgFhE"},{url:"/_next/static/media/fa-solid-900.efbd5d20e407bbf85f2b3087ee67bfa1.eot",revision:"5knuPsmfl4bQVS2YLgFhE"},{url:"/avatar.jpeg",revision:"3168c22c8a11294fbab921aab96c5d59"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/files/CV Mateo Devia.pdf",revision:"4f756c73dbb6f83adc2c7f77eedf508e"},{url:"/files/HV Mateo Devia.pdf",revision:"117b249d4e155542d46bba3463d837c1"},{url:"/icon-192x192.png",revision:"6640c6739d2bd1e1e61e57d54bef3e80"},{url:"/icon-256x256.png",revision:"857bbaf722840513da7bb53cd55b6b01"},{url:"/icon-384x384.png",revision:"c74a23f62e582006aada8f1a6bef4f47"},{url:"/icon-512x512.png",revision:"bcf7d795195f084f96953950463fe4f1"},{url:"/icons/close.svg",revision:"5d8fa21052daf49979d26efca4ef8622"},{url:"/icons/link.svg",revision:"dd73ef33ece0463279000ed5c05ee8a7"},{url:"/icons/translation.png",revision:"c22305a8ad0b1a0f54005f1b0b4114f3"},{url:"/locales/en/common.json",revision:"27f9f629ffea97d22f8e9cbf5044c470"},{url:"/locales/es/common.json",revision:"cd54c8cb64d812fa62d5791685611887"},{url:"/manifest.json",revision:"16d11c9987878a376cf5b70346f58928"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:i,event:a,state:s})=>i&&"opaqueredirect"===i.type?new Response(i.body,{status:200,statusText:"OK",headers:i.headers}):i}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const i=e.pathname;return!i.startsWith("/api/auth/")&&!!i.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));