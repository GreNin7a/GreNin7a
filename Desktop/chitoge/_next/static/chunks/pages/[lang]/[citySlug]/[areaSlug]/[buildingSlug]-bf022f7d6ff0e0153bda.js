_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[25],{"/06W":function(e,a,i){"use strict";i.d(a,"a",(function(){return p}));var o=i("q1tI"),t=i.n(o),n=i("co3k"),l=i("htVU"),r=i.n(l),c=i("YFqc"),d=i.n(c),s=i("wyBh"),v=i("bhxT"),u=i("nOHt"),m=t.a.createElement;function p(e){var a=e.backgroundColor,i=e.backgroundImage,o=e.text,t=e.description,l=e.buttonText,c=e.horizontal,p=e.leftColumnClassName,_=e.rightColumnClassName,b=e.titleClassName,g=e.descriptionClassName,y=e.buttonLink,N=e.lang,k=e.buttonClick,f=Object(u.useRouter)();return m("div",{className:"".concat(r.a.wrapper," row ").concat(c?"":"flex-row flex-md-column"," align-items-center"),style:{backgroundImage:"url(".concat(i,")"),backgroundColor:a}},m("div",{className:"col-12 col-md ".concat(p)},m("h1",{className:"".concat(r.a.text," ").concat(b),dangerouslySetInnerHTML:{__html:o}}),t&&m("p",{className:"".concat(g," ").concat(r.a.description," mt-20")},t)),m(d.a,{href:y||"/".concat(N).concat(s.b.HOME_PAGE)},m("a",{onClick:function(){return v.a.ctaNavigation(f,l,y)}},m(n.a,{onClick:k,btnClass:"".concat(r.a.buttonStyle," ").concat(_," col"),text:l}))))}},K6xu:function(e,a,i){"use strict";var o=i("q1tI"),t=i.n(o),n=i("lGTO"),l=i.n(n),r=i("1+QS"),c=i("ipDU"),d=i("YRVN"),s=t.a.createElement;a.a=function(e){var a=e.homes,i=e.snippets,o=e.currency,t=e.containerStyles,n=e.lang;return a?s("div",{className:"my-80 container ".concat(l.a.mcontainer," ").concat(l.a.relative," ").concat(t)},s("h3",{className:"".concat(l.a.h3," text-center")},null===i||void 0===i?void 0:i.building_detail_other_homes),s(r.a,{containerClass:l.a.carousel,removeArrowOnDeviceType:["superLargeDesktop","desktop","tablet","mobile"],showDots:!0,renderDotsOutside:!0,dots:s(c.a,{className:l.a.dot,activeClassName:l.a.active}),dotListClass:l.a.dotList,partialVisible:!1,itemsOnSuperLargeDesktop:3,itemsOnDesktop:3,itemsOnTablet:2,itemsOnMobile:1,itemClass:l.a.item,infinite:!1},a.map((function(e,a){return s(d.a,{key:a,index:a,title:e.FullTitle,capacity:e.Capacity,vacant:e.Vacant,slug:e.Slug,address:e.Address,areaName:e.Area,areaSlug:e.AreaSlug,citySlug:e.CitySlug,priceLower:e.PriceLower,priceHigher:e.PriceHigher,pricePeriod:e.PricePeriod,currency:o,className:"col-12",pictures:e.Pictures,lang:n,petFriendly:e.PetFriendly,isOtherHome:!0})})))):s("div",null)}},O2Z0:function(e,a,i){"use strict";i.r(a),i.d(a,"__N_SSG",(function(){return Z}));var o=i("rePB"),t=i("ODXe"),n=i("8Kt/"),l=i.n(n),r=i("q1tI"),c=i.n(r),d=i("5Yp1"),s=i("1+QS"),v=i("ipDU"),u=i("cQk5"),m=i.n(u),p=c.a.createElement;var _=function(e){var a=e.images;return p(s.a,{showDots:!0,dots:p(v.a,null),dotListClass:m.a.dotList,removeArrowOnDeviceType:[""],partialVisible:!0,itemsOnSuperLargeDesktop:2,partialVisibilityLargeDesktop:130,itemsOnDesktop:3,partialVisibilityDesktop:90,itemsOnTablet:2,partialVisibilityTablet:90,itemsOnMobile:1,partialVisibilityMobile:0,itemClass:"pl-0 pr-0 pl-md-2 pr-md-2",containerClass:"".concat(m.a.carousel),autoPlay:!0,autoPlaySpeed:3e3},null===a||void 0===a?void 0:a.map((function(e,a){return p("img",{key:a,src:e,className:"fit-image ".concat(m.a.albumImage)})})))},b=i("xfus"),g=i.n(b),y=i("co3k"),N=i("jobX"),k=i("TxL0"),f=i("bhxT"),h=c.a.createElement;var O=function(e){var a,i,n=e.titles,l=void 0===n?[]:n,c=e.children,d=e.onTabClick,s=e.isMatterPort,v=e.onBookClick,u=e.buildingName,m=e.buildingSlug,p=Object(r.useState)(0),_=p[0],b=p[1],O=Object(N.a)(k.K),C=Object(t.a)(O,1)[0];return[h("div",{className:"".concat(g.a.navContainer),key:"tab-name"},h("div",{className:"container"},h("nav",{className:"row",key:"tab-label"},h("div",{className:"".concat(g.a.navTabs," col-12 col-md-8"),id:"nav-tab",role:"tablist"},l.map((function(e,a){var i,t=null===e||void 0===e||null===(i=e.toLowerCase())||void 0===i?void 0:i.replace(" ","-");if(l.length-1!==a||s)return[h("a",{className:"".concat(g.a.navLink," ").concat(a===_?g.a.active:""," ").concat(a===l.length-1?g.a.tour:""," ").concat(a===l.length-1?"d-none d-sm-none d-md-inline-block":""),href:a!==l.length-1?"#"+t:null,id:e+"-tab","data-toggle":"tab",role:"tab","aria-controls":t,"aria-selected":!0,key:a,onClick:function(e){if(a===l.length-1)return e.preventDefault(),void d();var i;f.a.track({eventName:f.h.name,props:(i={},Object(o.a)(i,f.h.props.Property,u),Object(o.a)(i,f.h.props.Slug,m),i)}),b(a)}},e),h("div",{key:"empty-"+a,className:"".concat(a===l.length-2?"d-none d-sm-none d-md-inline-block":"")},"\xa0")]}))),h("div",{className:"offset-1 col-auto d-none d-sm-none d-md-block ".concat(g.a.btnContainer)},h(y.a,{text:null===C||void 0===C||null===(a=C.data)||void 0===a||null===(i=a.snippets)||void 0===i?void 0:i.navbar_im_interested,btnClass:g.a.btn,onClick:function(e){var a,i;e.preventDefault(),v(null,null===C||void 0===C||null===(a=C.data)||void 0===a||null===(i=a.snippets)||void 0===i?void 0:i.navbar_im_interested)}})),h("div",{className:"".concat(g.a.star," col d-none d-sm-none d-md-block")})))),h("div",{className:"tab-content",key:"tab-content"},l.map((function(e,a){var i,o=null===e||void 0===e||null===(i=e.toLowerCase())||void 0===i?void 0:i.replace(" ","-");return h("div",{className:"tab-pane fade show active",id:o,role:"tabpanel","aria-labelledby":e+"-tab",key:a},c[a])})))]},C=i("MTRj"),w=i("w/Qg"),T=i.n(w),j=i("2v50"),x=c.a.createElement;var S=function(e){var a,i,o,t=e.building,n=e.onVirtualTourClick,l=e.snippets,r=e.usesAvailability,c=e.onBookClick,d=null===l||void 0===l?void 0:l.building_detail_total_rooms;return r&&d?(d=(d=d.replace("{available}",null===t||void 0===t?void 0:t.Vacant)).replace("{total}",null===t||void 0===t?void 0:t.Capacity),0===t.Capacity&&(d="Fully Booked")):d="",x("div",{className:"container ".concat(T.a.mcontainer)},x("div",null,x(C.a,{color:(null===t||void 0===t?void 0:t.Vacant)<=0?"grey":"green",bgColor:"grey"},Object(j.e)({vacant:null===t||void 0===t?void 0:t.Vacant,capacity:null===t||void 0===t?void 0:t.Capacity,text:{available:null===l||void 0===l?void 0:l.building_detail_status_available,full:null===l||void 0===l?void 0:l.building_detail_status_waitlist}})),null===t||void 0===t||null===(a=t.Statuses)||void 0===a?void 0:a.map((function(e){if("Rooms Available"!==e.Name&&"Fully Booked"!==e.Name)return x(C.a,{key:e.Name,color:e.Color,bgColor:"grey"},e.Name)}))),x("h2",{className:T.a.h2},null===t||void 0===t?void 0:t.FullTitle),x("div",{className:"row flex-column flex-lg-row"},x("div",{className:"col-12 col-lg-7"},x("p",null,null===t||void 0===t?void 0:t.Description)),x("div",{className:"col-lg-1"},x("div",{className:"".concat(T.a.divider," h-100 mx-auto")})),x("div",{className:"col-lg-3"},x("div",{className:"flex-lg-column"},x("div",{className:"".concat(T.a.statistics)},x("p",{style:{backgroundImage:"url(".concat(Object(j.a)({version:"v1599196937",name:"availability-w3.svg"}),")")},className:"mb-0"},d),t.PetFriendly&&x("div",{className:"".concat(T.a.horizontal," mt-2")}),t.PetFriendly&&x("p",{style:{backgroundImage:"url(".concat(Object(j.a)({version:"v1612778772",name:"pet_friendly_v1.svg"}),")")},className:T.a.pet},"Pet friendly options available"),x(y.a,{text:null===l||void 0===l?void 0:l.building_detail_button_interested,btnClass:"".concat(T.a.btn," w-100 mb-20 d-block d-md-none"),onClick:function(e){e.preventDefault(),c(null,null===l||void 0===l?void 0:l.building_detail_button_interested)}}),(null===t||void 0===t?void 0:t.Matterport)&&x("div",{className:"w-100 text-center d-block d-md-none"},x("a",{onClick:n},null===l||void 0===l?void 0:l.building_detail_take_virtual_tour))),x("div",{className:T.a.tenantsCount}))),x("div",{className:"col-lg-1"})),(null===t||void 0===t||null===(i=t.Facilities)||void 0===i?void 0:i.length)>0&&x("div",{className:"row"},x("div",{className:"offset-0 col-12 col-md-12 ".concat(T.a.amenitiesWrapper)},x("div",{className:"row flex-column flex-lg-row ".concat(T.a.amenities)},x("div",{className:"col-3 "},x("h4",{style:{backgroundImage:"url(".concat(Object(j.a)({version:"v1587010481",name:"green-highlight-w3.png"}),")")},className:"".concat(T.a.title," ").concat(T.a.amenitiesTitle)},null===l||void 0===l?void 0:l.building_detail_title_amenities)),x("div",{className:"col-12 col-md-12 col-lg-9"},x("div",{className:"row"},null===t||void 0===t||null===(o=t.Facilities)||void 0===o?void 0:o.map((function(e,a){return x("div",{className:"col-6 col-md-6 col-lg-4 ".concat(T.a.singleAmenities),key:a},x("div",{className:"row align-items-baseline"},x("div",{className:"".concat(T.a.img," col-auto px-0")}),x("p",{className:"col"},e.Name)))}))))))))},L=i("juBc"),P=i.n(L),A=i("6WYK"),I=i.n(A),F=i("wyBh"),R=i("S68s"),D=c.a.createElement;var B=function(e){var a,i,t=e.building,n=e.snippets,l=e.onBookClick,r=e.usesAvailability;null===t||void 0===t||null===(a=t.RoomInfo)||void 0===a||a.sort((function(e,a){return e.Price<a.Price?-1:e.Price>a.Price?1:0}));var d=function(e,a){var i,d,s,v="Hello, I'm interested in a ".concat(null===e||void 0===e?void 0:e.TypeName," room in ").concat(null===t||void 0===t?void 0:t.FullTitle,".");return D("div",{className:"".concat(P.a.buttonContainer," ").concat(a)},r&&((null===e||void 0===e?void 0:e.Vacant)?D(y.a,{text:null===n||void 0===n?void 0:n.building_detail_button_book_stay,onClick:function(a){return function(e,a){e.preventDefault(),l(a,null===n||void 0===n?void 0:n.building_detail_button_book_stay),Object(R.b)()}(a,e)},key:"btn"}):D("div",{className:P.a.booked},D("span",null),D("p",null,null===n||void 0===n?void 0:n.building_detail_room_booked))),D("div",{className:P.a.whatsapp,key:"link"},"JP"===(null===t||void 0===t||null===(i=t.Area)||void 0===i?void 0:i.City)?D(c.a.Fragment,null,D("span",null,null===n||void 0===n?void 0:n.building_detail_question_japan),D("br",null),"\xa0",D("a",{className:"whatsapp-button",href:"https://lin.ee/ts4gJ1F",target:"_blank",rel:"noopener noreferrer",onClick:function(){var a;return f.a.track({eventName:f.v.name,props:(a={},Object(o.a)(a,f.v.props.property,null===t||void 0===t?void 0:t.FullTitle),Object(o.a)(a,f.v.props.roomType,null===e||void 0===e?void 0:e.TypeName),Object(o.a)(a,f.v.props.location,null===t||void 0===t?void 0:t.City),Object(o.a)(a,f.v.props.platform,"line"),Object(o.a)(a,f.v.props.mobile,"ts4gJ1F"),a)})}},null===n||void 0===n?void 0:n.building_detail_line_japan)," / ",D("a",{className:"whatsapp-button",href:"https://wa.me/".concat(F.c[null===t||void 0===t||null===(d=t.Area)||void 0===d?void 0:d.City],"?text=").concat(v),target:"_blank",rel:"noopener noreferrer",onClick:function(){var a,i;return f.a.track({eventName:f.v.name,props:(i={},Object(o.a)(i,f.v.props.property,null===t||void 0===t?void 0:t.FullTitle),Object(o.a)(i,f.v.props.roomType,null===e||void 0===e?void 0:e.TypeName),Object(o.a)(i,f.v.props.location,null===t||void 0===t?void 0:t.City),Object(o.a)(i,f.v.props.platform,"whatsapp"),Object(o.a)(i,f.v.props.mobile,F.c[null===t||void 0===t||null===(a=t.Area)||void 0===a?void 0:a.City]),i)})}},null===n||void 0===n?void 0:n.building_detail_whatsapp_japan)):D(c.a.Fragment,null,D("span",null,null===n||void 0===n?void 0:n.building_detail_question),"\xa0",D("a",{className:"whatsapp-button",href:"https://wa.me/".concat(F.c[null===t||void 0===t||null===(s=t.Area)||void 0===s?void 0:s.City],"?text=").concat(v),target:"_blank",rel:"noopener noreferrer",onClick:function(){var a,i;return f.a.track({eventName:f.v.name,props:(i={},Object(o.a)(i,f.v.props.property,null===t||void 0===t?void 0:t.FullTitle),Object(o.a)(i,f.v.props.roomType,null===e||void 0===e?void 0:e.TypeName),Object(o.a)(i,f.v.props.location,null===t||void 0===t?void 0:t.City),Object(o.a)(i,f.v.props.platform,"whatsapp"),Object(o.a)(i,f.v.props.mobile,F.c[null===t||void 0===t||null===(a=t.Area)||void 0===a?void 0:a.City]),i)})}},null===n||void 0===n?void 0:n.building_detail_whatsapp))))};return D("div",{className:"pb-64 pt-64 ".concat(P.a.roomTypeContainer)},D("div",{className:"container ".concat(P.a.mcontainer)},D("h3",{className:"text-center"},null===n||void 0===n?void 0:n.building_detail_tab_room_types),null===t||void 0===t||null===(i=t.RoomInfo)||void 0===i?void 0:i.map((function(e,a){var i,o,t,l,r,c="".concat(null===e||void 0===e?void 0:e.Currency).concat(I()(null===e||void 0===e?void 0:e.Price)).concat("\u6708\u984d"===(null===e||void 0===e?void 0:e.PricePeriod)?" ~":"");if(null===e||void 0===e?void 0:e.Price)return D("div",{className:"row flex-column flex-md-row ".concat(P.a.room),key:a},D("div",{className:"col-12 col-md-8 order-2 order-md-0 ".concat(P.a.left)},D("h4",null,null===e||void 0===e?void 0:e.TypeName),D("p",null,null===e||void 0===e?void 0:e.Description),D("div",{className:"row ".concat(P.a.amenities)},null===e||void 0===e||null===(i=e.Amenities)||void 0===i?void 0:i.map((function(e,a){return D("div",{className:"col-12 col-sm-6",key:a},D("p",{style:{backgroundImage:"url(".concat(Object(j.a)({version:"v1587010481",name:"check-icon-w3.svg"}),")")}},e))}))),D("div",{className:"".concat(P.a.divider," w-100")}),D("div",{className:P.a.footer},D("span",{className:P.a.from},null===n||void 0===n?void 0:n.building_detail_starting_from),D("span",{className:P.a.price},c),D("div",{className:P.a.condition},(null===e||void 0===e?void 0:e.DisclaimerText)?null===e||void 0===e?void 0:e.DisclaimerText:null===n||void 0===n?void 0:n.building_detail_prices_may_vary),d(e,"d-sm-block d-md-none"))),D("div",{className:"col-12 col-md-4 order-1 order-md-0 ".concat(P.a.right)},(null===e||void 0===e||null===(o=e.Picture)||void 0===o?void 0:o.length)>0&&D(s.a,{showDots:Array.isArray(null===e||void 0===e?void 0:e.Picture)&&(null===e||void 0===e||null===(t=e.Picture)||void 0===t?void 0:t.length)>2,dots:D(v.a,null),partialVisible:!1,itemsOnSuperLargeDesktop:1,itemsOnDesktop:1,itemsOnTablet:1,itemsOnMobile:1,removeArrowOnDeviceType:Array.isArray(null===e||void 0===e?void 0:e.Picture)&&(null===e||void 0===e||null===(l=e.Picture)||void 0===l?void 0:l.length)>2?[]:["mobile","tablet","desktop","superLargeDesktop"]},null===(r=[null===e||void 0===e?void 0:e.Picture])||void 0===r?void 0:r.map((function(e,a){return D("img",{className:"fit-image ".concat(P.a.slideImage),src:e,key:a})}))),d(e,"d-none d-sm-none d-md-block")))}))))},M=i("d/qF"),E=i.n(M),H=i("Bl+U"),V=i("81xT"),q=i("nOHt"),W=c.a.createElement;var G=function(e){var a,i,t=e.building,n=e.snippets,l=Object(q.useRouter)().query.lang,c=void 0===l?"en":l,d=Object(r.useState)(!1),s=d[0],v=d[1],u=function(){return(null===t||void 0===t?void 0:t.Slug)&&W(H.a,{buildings:[{Slug:null===t||void 0===t?void 0:t.Slug,LAT:null===t||void 0===t?void 0:t.LAT,LNG:null===t||void 0===t?void 0:t.LNG}],lat:null===t||void 0===t?void 0:t.LAT,lng:null===t||void 0===t?void 0:t.LNG,className:"w-100 ".concat(E.a.map),language:c})};return W("div",{className:"my-80 container ".concat(E.a.mcontainer)},W("div",{className:"row"},W("div",{className:"col-12 col-sm-6"},W("h3",{className:E.a.h3},null===n||void 0===n?void 0:n.building_detail_tab_location),W("a",{href:"http://maps.google.com/?ll="+(null===t||void 0===t?void 0:t.LAT)+","+(null===t||void 0===t?void 0:t.LNG),target:"_blank",rel:"noopener noreferrer",onClick:function(){return f.a.track({eventName:f.s.name,props:Object(o.a)({},f.s.props.address,null===t||void 0===t?void 0:t.Address)})}},W("div",{className:"".concat(E.a.location," ").concat(E.a.txtImage),style:{backgroundImage:"url(".concat(Object(j.a)({version:"v1599196771",name:"location-pin-w3.svg"}),")")}},null===t||void 0===t?void 0:t.Address)),W("div",{className:"".concat(E.a.divider," w-100")}),W("h5",{className:E.a.h5},null===n||void 0===n?void 0:n.building_detail_mrt_stations),null===t||void 0===t||null===(a=t.Transit)||void 0===a?void 0:a.map((function(e,a){var i=((null===n||void 0===n?void 0:n.building_detail_directions)||"").replace("{walkingMinutes}",e.WalkingMinutes).replace("{walkingMeters}",e.WalkingMeters);return W("div",{className:"".concat(E.a.station),key:a},W("span",{className:"".concat(E.a.txtImage),style:{backgroundImage:"url(".concat(Object(j.a)({version:"v1596712438",name:"station-w3.svg"}),")")}},null===e||void 0===e?void 0:e.Station),(null===e||void 0===e?void 0:e.Exit)&&W("span",null,", ",null===e||void 0===e?void 0:e.Exit),W("div",{className:E.a.txtImage},i))})),W("div",{className:"".concat(E.a.divider," w-100")}),W("h5",{className:E.a.h5},null===n||void 0===n?void 0:n.building_detail_around_the_area),W("div",{className:"row"},null===t||void 0===t||null===(i=t.Nearby)||void 0===i?void 0:i.map((function(e,a){return W("div",{className:"col-6",key:a},W("p",{className:"".concat(E.a.txtImage," ").concat(E.a.nearby),style:{backgroundImage:"url(".concat(null===e||void 0===e?void 0:e.Icon,")")}},null===e||void 0===e?void 0:e.Name))})))),W("div",{className:"col-sm-6 d-none d-sm-none d-md-flex"},u()),W("div",{className:"col-12 d-sm-block d-md-none"},W(y.a,{text:"View map",className:"w-100 mt-20",onClick:function(){return v(!s)}}),W(V.a,{open:s,onCloseClick:function(){return v(!s)},containerClassName:E.a.modal},u()))))},z=i("K6xu"),Y=i("/06W"),J=c.a.createElement;var U=function(e){var a,i,t,n=e.building,l=e.labels,c=e.city,d=Object(r.useState)(!1),s=d[0],v=d[1],u=null===l||void 0===l?void 0:l.snippets,m=Object(q.useRouter)(),p=function(){v(!s)},b=function(e,a){var i=null===e||void 0===e?void 0:e.TypeSlug,t=null===n||void 0===n?void 0:n.Slug;Object(R.b)();var l,r={unit:t};i?(r.type=i,f.a.track({eventName:f.d.name,props:(l={},Object(o.a)(l,f.d.props.property,null===n||void 0===n?void 0:n.FullTitle),Object(o.a)(l,f.d.props.roomType,null===e||void 0===e?void 0:e.TypeName),Object(o.a)(l,f.d.props.location,null===n||void 0===n?void 0:n.City),l)})):f.a.ctaNavigation(m,a,F.a.MAIN_FORM,null===c||void 0===c?void 0:c.Slug);m.push({pathname:F.b.MAIN_FORM+(null===c||void 0===c?void 0:c.Slug),query:r})};return[J(_,{key:"building-album",images:(null===n||void 0===n||null===(a=n.Pictures)||void 0===a?void 0:a.Building)||[]}),J("div",{key:"building-details"},J(O,{titles:[null===u||void 0===u?void 0:u.building_detail_tab_overview,null===u||void 0===u?void 0:u.building_detail_tab_room_types,null===u||void 0===u?void 0:u.building_detail_tab_location,null===u||void 0===u?void 0:u.building_detail_take_virtual_tour],onTabClick:p,isMatterPort:null===n||void 0===n?void 0:n.Matterport,onBookClick:b,buildingName:null===n||void 0===n?void 0:n.FullTitle,buildingSlug:null===n||void 0===n?void 0:n.Slug},J(S,{building:n,usesAvailability:null===c||void 0===c?void 0:c.UsesAvailability,snippets:u,onVirtualTourClick:p,onBookClick:b}),function(){var e;return void 0!==(null===n||void 0===n||null===(e=n.RoomInfo)||void 0===e?void 0:e.find((function(e){return e.Price})))}()&&J(B,{building:n,snippets:u,onBookClick:b,usesAvailability:null===c||void 0===c?void 0:c.UsesAvailability}),J(G,{building:n,snippets:u}))),J(z.a,{key:"recommendation",homes:null===n||void 0===n?void 0:n.ClosestBuildings,snippets:u,currency:null===c||void 0===c||null===(i=c.Country)||void 0===i?void 0:i.Currency,lang:null===(t=m.query)||void 0===t?void 0:t.lang}),J(Y.a,{horizontal:!0,backgroundColor:"#8E9788",backgroundImage:Object(j.a)({version:"v1587010481",name:"smile-face.svg"}),text:null===u||void 0===u?void 0:u.building_detail_need_help,description:null===u||void 0===u?void 0:u.building_detail_we_are_help,buttonText:null===u||void 0===u?void 0:u.building_detail_get_in_touch,leftColumnClassName:"offset-md-3 col-md-3",rightColumnClassName:"col-auto",key:"need-help",buttonLink:F.b.MAIN_FORM+(null===c||void 0===c?void 0:c.Slug),buttonClick:function(){return Object(R.b)()}}),J(V.a,{open:s,onCloseClick:function(){return v(!s)},containerClassName:"h-100 w-100 mt-0",key:"matterport",darkButton:!1},J("iframe",{width:"100%",height:"100%",src:null===n||void 0===n?void 0:n.Matterport,frameBorder:"0",allowFullScreen:!0,allow:"vr",title:"Matterport"}))]},Q=c.a.createElement;var Z=!0;a.default=function(){var e,a,i,n=Object(N.a)(k.r),c=Object(t.a)(n,1)[0];c=null===(e=c)||void 0===e?void 0:e.data;var s=Object(N.a)(k.w),v=Object(t.a)(s,1)[0],u=null===v||void 0===v||null===(a=v.data)||void 0===a?void 0:a.inOrder.find((function(e){var a;return e.Country.Id===(null===(a=c)||void 0===a?void 0:a.City)}));Object(r.useEffect)((function(){var e;c&&f.a.trackPage((e={},Object(o.a)(e,f.x.props.page.market,c.City),Object(o.a)(e,f.x.props.page.area,c.AreaSlug),Object(o.a)(e,f.x.props.page.building,c.Slug),e))}),[c]);var m=Object(N.a)(k.t),p=Object(t.a)(m,1)[0];return Q(d.a,null,Q(l.a,null,Q("title",null,null===(i=c)||void 0===i?void 0:i.FullTitle)),Q("main",null,c&&Q(U,{building:c,city:u,labels:null===p||void 0===p?void 0:p.data})))}},"Z/4P":function(e,a,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[lang]/[citySlug]/[areaSlug]/[buildingSlug]",function(){return i("O2Z0")}])},cQk5:function(e,a,i){e.exports={carousel:"Album_carousel__184Ff",dotList:"Album_dotList__3SfS-",albumImage:"Album_albumImage__2ODwY"}},"d/qF":function(e,a,i){e.exports={mcontainer:"Location_mcontainer__248wb",h3:"Location_h3__2fFUk",location:"Location_location__KJuAv",divider:"Location_divider__FY7g9",h5:"Location_h5__1MiZX",txtImage:"Location_txtImage__3TRYu",nearby:"Location_nearby__21IL1",station:"Location_station__3wbMS",map:"Location_map__3aUf5",modal:"Location_modal__1Sjr_"}},htVU:function(e,a,i){e.exports={wrapper:"BannerButton_wrapper__1Ulfg",text:"BannerButton_text__QIGHu",description:"BannerButton_description__12Cqh",buttonStyle:"BannerButton_buttonStyle__2OZFq"}},juBc:function(e,a,i){e.exports={bookedCommon:"RoomType_bookedCommon__1Fp4Q",roomTypeContainer:"RoomType_roomTypeContainer__1vC9R",room:"RoomType_room__3Y5B3",left:"RoomType_left__lO6je",footer:"RoomType_footer__2zqIP",buttonContainer:"RoomType_buttonContainer__2VBAW",booked:"RoomType_booked__GCztX",right:"RoomType_right__1rp7F",mcontainer:"RoomType_mcontainer__1D1v_",amenities:"RoomType_amenities__2MBwm",divider:"RoomType_divider__tgW0I",from:"RoomType_from__1w2YW",price:"RoomType_price__txzR2",condition:"RoomType_condition__1zaws",whatsapp:"RoomType_whatsapp__32Rcy"}},lGTO:function(e,a,i){e.exports={mcontainer:"OtherHomes_mcontainer__1eOOb",relative:"OtherHomes_relative__1WLSC",h3:"OtherHomes_h3__2-vEP",carousel:"OtherHomes_carousel__F2szz",item:"OtherHomes_item__3rijK",dotList:"OtherHomes_dotList__2hbPN",dot:"OtherHomes_dot__15rgD",active:"OtherHomes_active__1Ob6u"}},"w/Qg":function(e,a,i){e.exports={mcontainer:"Overview_mcontainer__32JHv",h2:"Overview_h2__pZk9q",statistics:"Overview_statistics__14qwH",btn:"Overview_btn__2I4jx",pet:"Overview_pet__3mYlc",title:"Overview_title__2ICxH",amenitiesWrapper:"Overview_amenitiesWrapper__2So-5",amenities:"Overview_amenities__1Z6Mc",amenitiesTitle:"Overview_amenitiesTitle__wCRkm",singleAmenities:"Overview_singleAmenities__1Gn2J",img:"Overview_img__1BGCq",divider:"Overview_divider__1BQNY",horizontal:"Overview_horizontal__18PRi"}},xfus:function(e,a,i){e.exports={navContainer:"Tab_navContainer__1JSpm",btnContainer:"Tab_btnContainer__2hg2q",navTabs:"Tab_navTabs__17lcN",navLink:"Tab_navLink__3-jOc",tour:"Tab_tour__D-ncS",active:"Tab_active__2MMdJ",btn:"Tab_btn__25Wgt",star:"Tab_star__lvre3"}}},[["Z/4P",1,2,3,5,15,0,4,6,7,8,18]]]);