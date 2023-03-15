"use strict";(self.webpackChunklibrephotos_docs=self.webpackChunklibrephotos_docs||[]).push([[370],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>p});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},f="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(a),d=r,p=f["".concat(l,".").concat(d)]||f[d]||h[d]||o;return a?n.createElement(p,i(i({ref:t},u),{},{components:a})):n.createElement(p,i({ref:t},u))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[f]="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8695:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const o={title:"\ud83d\ude03 Face recognition",excerpt:"How to use the face dashboard",sidebar_position:3},i=void 0,c={unversionedId:"user-guide/face-recognition",id:"user-guide/face-recognition",title:"\ud83d\ude03 Face recognition",description:"Label a face",source:"@site/docs/user-guide/face-recognition.md",sourceDirName:"user-guide",slug:"/user-guide/face-recognition",permalink:"/docs/user-guide/face-recognition",draft:!1,editUrl:"https://github.com/LibrePhotos/librephotos.docs/tree/master/docs/user-guide/face-recognition.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\ud83d\ude03 Face recognition",excerpt:"How to use the face dashboard",sidebar_position:3},sidebar:"userguide",previous:{title:"\ud83e\udd16 Auto scan all folders",permalink:"/docs/user-guide/auto-scan"},next:{title:"\ud83d\udcc5 Using date rules",permalink:"/docs/user-guide/date-rules"}},l={},s=[{value:"Label a face",id:"label-a-face",level:2},{value:"Change the label of a face",id:"change-the-label-of-a-face",level:2},{value:"Train faces",id:"train-faces",level:2},{value:"Delete faces",id:"delete-faces",level:2},{value:"Re-scan faces",id:"re-scan-faces",level:2},{value:"Workflow",id:"workflow",level:2},{value:"Current limitations",id:"current-limitations",level:2}],u={toc:s},f="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(f,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"label-a-face"},"Label a face"),(0,r.kt)("p",null,"To label a face, click on the green plus button. A pop-up will show up where you can either search for an already existing person or add a new person. We want to add a new person, so input the name of the person you want to add and click on the green plus. Now the face is associated with the person."),(0,r.kt)("h2",{id:"change-the-label-of-a-face"},"Change the label of a face"),(0,r.kt)("p",null,"To change a face to a new person, click on the green plus button. Search for the person you want it to change to and click on them. Now the face is associated with the new person."),(0,r.kt)("h2",{id:"train-faces"},"Train faces"),(0,r.kt)("p",null,'If you click on the blue button in the face dashboard or if you click on the button "Train" in the settings tab, the system will try to cluster unknown faces and will try to either match them to already known faces or create a new unknown person. To see the recommendations, go to the inferred tab in the face dashboard. There you can for each face the confidence of the match. If you want to confirm a recommended face, select the face and click on the green plus button to add it to the person.'),(0,r.kt)("h2",{id:"delete-faces"},"Delete faces"),(0,r.kt)("p",null,"Sometimes the face recognition might find a face that is not actually a face. To remove it, select the face and the click on the trashcan symbol. The face is the no longer in the system and the face data is going to be deleted."),(0,r.kt)("h2",{id:"re-scan-faces"},"Re-scan faces"),(0,r.kt)("p",null,"Some user deleted all the faces with the delete face action. To get the faces again, you can re-scan the faces. This will take a while, because it will then have to look up all the photos again for faces."),(0,r.kt)("h2",{id:"workflow"},"Workflow"),(0,r.kt)("p",null,"After the first scan finished, go to the face dashboard. Label a couple of faces per person. Then train the faces with the blue button. Check if the inferred faces are accurate and add a couple of the inferred faces to the labels. Train the faces again. You will get the best results if all the persons in the pictures are known and when every label has at least a couple of faces."),(0,r.kt)("h2",{id:"current-limitations"},"Current limitations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can only display up to 50000 faces. After that no more faces will be shown, but they are still in the system"),(0,r.kt)("li",{parentName:"ul"},"There is no action yet, to just confirm faces in the inferred tab")))}h.isMDXComponent=!0}}]);