"use strict";(self.webpackChunklibrephotos_docs=self.webpackChunklibrephotos_docs||[]).push([[813],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(o),m=r,h=u["".concat(i,".").concat(m)]||u[m]||d[m]||a;return o?n.createElement(h,s(s({ref:t},c),{},{components:o})):n.createElement(h,s({ref:t},c))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,s=new Array(a);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:r,s[1]=l;for(var p=2;p<a;p++)s[p]=o[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},4349:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=o(7462),r=(o(7294),o(3905));const a={title:"\ud83d\udce6 unRAID",excerpt:"How to install LibrePhotos on Unraid using Docker Compose.",sidebar_position:3},s=void 0,l={unversionedId:"installation/unraid",id:"installation/unraid",title:"\ud83d\udce6 unRAID",description:"Community App",source:"@site/docs/installation/unraid.md",sourceDirName:"installation",slug:"/installation/unraid",permalink:"/docs/installation/unraid",draft:!1,editUrl:"https://github.com/LibrePhotos/librephotos.docs/tree/master/docs/installation/unraid.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\ud83d\udce6 unRAID",excerpt:"How to install LibrePhotos on Unraid using Docker Compose.",sidebar_position:3},sidebar:"userguide",previous:{title:"\ud83c\udf53 Raspberry Pi Installation",permalink:"/docs/installation/raspberry-pi"},next:{title:"\ud83d\udcbb Local",permalink:"/docs/installation/manual-debian-install"}},i={},p=[{value:"Community App",id:"community-app",level:2},{value:"Docker Compose",id:"docker-compose",level:2},{value:"docker-compose issues when rebooting",id:"docker-compose-issues-when-rebooting",level:2},{value:"Next Steps",id:"next-steps",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"community-app"},"Community App"),(0,r.kt)("p",null,"We are now also a ",(0,r.kt)("a",{parentName:"p",href:"https://unraid.net/community/apps?q=LibrePhotos#r"},"community app")," based on the singleton image."),(0,r.kt)("h2",{id:"docker-compose"},"Docker Compose"),(0,r.kt)("p",null,"You have to download docker-compose. You can add the following to your /boot/config/go file to make sure it's always available:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -L "https://github.com/docker/compose/releases/download/v2.5.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose\nchmod +x /usr/local/bin/docker-compose\n')),(0,r.kt)("p",null,"Check if it's working:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose --version\n")),(0,r.kt)("p",null,"You'll need to create a folder under /mnt/user (e.g. librephotos) within there you'll need two files:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir /mnt/user/librephotos && cd /mnt/user/librephotos\n")),(0,r.kt)("p",null,"Download this file and save it as .env:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget -O .env https://raw.githubusercontent.com/LibrePhotos/librephotos-docker/main/librephotos.env\n")),(0,r.kt)("p",null,"\u200bDownload this file to the same directory, but keep the original name:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://raw.githubusercontent.com/LibrePhotos/librephotos-docker/main/docker-compose.yml\n")),(0,r.kt)("p",null,"You'll need to edit the .env file with paths to your photos (myPhotos) and possibly the timeZone variable. Optionally, you'll want to grab a mapbox API key as documented in the file. Keep note of the default HTTP port, 3000.\nYou should have LibrePhotos accessible after a few minutes of boot-up on unraidip:3000 unless you changed this in the .env file. The username is admin & the password is admin, unless you changed them in the .env file. It is recommended you change the admin username and password if LibrePhotos is going to be publicly accessible. This is done via the .env file."),(0,r.kt)("p",null,"\u200bOnce done, you can fire up the containers by typing:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up -d\n")),(0,r.kt)("p",null,"This will cause the containers to startup in the background. You can check the status of them by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker logs {container name}\n")),(0,r.kt)("p",null,"You can get a name for each of the containers by typing:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker ps | grep librephoto\n")),(0,r.kt)("p",null,"Finally, you can access the UI by going to http://unraidip:3000"),(0,r.kt)("p",null,"The first thing you'll want to do in the UI is go to the drop-down menu located at the top right under avatar and select Admin Area."),(0,r.kt)("p",null,'You\'ll need to set your "Scan Directory" which should be /data.'),(0,r.kt)("p",null,"Go back to the drop-down and select Settings. Scroll to the bottom and select Scan photos from bottom left. You'll see some activity on your server as the photos are being processed. You can check on them by going to Photos on the top left of the UI and select recently added.\n\u200b"),(0,r.kt)("p",null,"Furthermore, you can also monitor progress from shell prompt by tailing this file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"tail -f librephotos_logs/ownphotos.log\n")),(0,r.kt)("p",null,"To shut everything down:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose down\n")),(0,r.kt)("p",null,"If you want to grab any updates, you can type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose pull\n")),(0,r.kt)("h2",{id:"docker-compose-issues-when-rebooting"},"docker-compose issues when rebooting"),(0,r.kt)("p",null,"After a reboot, docker-compose is not installed anymore, since unRAID loads everything from ram. Someone created a Docker Compose Manager app in the Apps catalog for unRAID. This makes sure docker-compose is installed every time you reboot unRAID, and they are currently working on a Web GUI."),(0,r.kt)("p",null,"Thanks to ",(0,r.kt)("a",{parentName:"p",href:"https://old.reddit.com/user/Tusc00"},"u/Tusc00")," and Martijn (Spiek90) for this ",(0,r.kt)("a",{parentName:"p",href:"https://old.reddit.com/r/unRAID/comments/knaniy/librephotos/goeyy4l/"},"write-up"),"!"),(0,r.kt)("h2",{id:"next-steps"},"Next Steps"),(0,r.kt)("p",null,"Next, take a look at the ","[first steps after setup]","({% post_url user_guide/0000-02-01-first_steps %})."))}d.isMDXComponent=!0}}]);