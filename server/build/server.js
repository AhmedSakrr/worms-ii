parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"nv6K":[function(require,module,exports) {
"use strict";var r=this&&this.__generator||function(r,e){var t,n,o,a,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;u;)try{if(t=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return u.label++,{value:a[1],done:!1};case 5:u.label++,n=a[1],a=[0];continue;case 7:a=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){u=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){u.label=a[1];break}if(6===a[0]&&u.label<o[1]){u.label=o[1],o=a;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(a);break}o[2]&&u.ops.pop(),u.trys.pop();continue}a=e.call(r,u)}catch(l){a=[6,l],n=0}finally{t=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}},e=this&&this.__read||function(r,e){var t="function"==typeof Symbol&&r[Symbol.iterator];if(!t)return r;var n,o,a=t.call(r),u=[];try{for(;(void 0===e||e-- >0)&&!(n=a.next()).done;)u.push(n.value)}catch(l){o={error:l}}finally{try{n&&!n.done&&(t=a.return)&&t.call(a)}finally{if(o)throw o.error}}return u},t=this&&this.__spread||function(){for(var r=[],t=0;t<arguments.length;t++)r=r.concat(e(arguments[t]));return r};Object.defineProperty(exports,"__esModule",{value:!0});var n,o,a,u=Math.floor,l=Math.pow,i=Math.random;function c(e){var n,o;return r(this,function(r){switch(r.label){case 0:n=0,o=s(t(new Array(e).keys())),r.label=1;case 1:return n<o.length?[4,o[n++]]:[3,3];case 2:return r.sent(),[3,1];case 3:return[2]}})}function s(r){for(var t,n=r.length-1;0!=n;--n){var o=u(i()*(n+1));t=e([r[o],r[n]],2),r[n]=t[0],r[o]=t[1]}return r}function f(r){for(var e="",t=o.length,n=0;n!=a;++n)e+="-"+o[r%t],r=u(r/t);return e.substr(1)}function h(r,e){a=e;var t=l((o=r).length,e);n=c(t)}function p(){var r=n.next();if(r.done)throw new RangeError("All IDs are used");return f(r.value)}function b(r){return f(r.substr(0,a).split("").map(function(r){return r.charCodeAt(0)%o.length}).reduce(function(r,e){return r*o.length+e}))}exports.init_id_generator=h,exports.next_id=p,exports.beautify=b;
},{}],"gXXY":[function(require,module,exports) {
module.exports={player_limit:4,player_scheme:{weapons:[],worm_count:4,worm_hp:100,worm_name:[["Alpha","Beta","Gamma","Delta"],["D'Artagnan","Athos","Porthos","Aramis"],["Will","Irma","Taranee","Cornelia"],["Bloom","Stella","Flora","Muse"]]}};
},{}],"aGj4":[function(require,module,exports) {
module.exports={};
},{}],"M7EW":[function(require,module,exports) {
"use strict";var e=this&&this.__assign||function(){return(e=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var u in t=arguments[r])Object.prototype.hasOwnProperty.call(t,u)&&(e[u]=t[u]);return e}).apply(this,arguments)},t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var r=t(require("~/../data/schemes/default.json")),n=t(require("~/../data/default-player-info.json"));exports.dummy={get_me:function(){return e({},n.default)},get_scheme:function(){return e({},r.default)},has_player:function(e){return!1},hide_player:function(e){},join:function(e,t){return!1},set_ready:function(e){}};
},{"~/../data/schemes/default.json":"gXXY","~/../data/default-player-info.json":"aGj4"}],"/YSm":[function(require,module,exports) {
"use strict";var e=this&&this.__extends||function(){var e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(t,o)};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();Object.defineProperty(exports,"__esModule",{value:!0});var t=require("events"),o=require("./dummy"),n=function(t){function n(){var e=t.call(this)||this;return e.games=new Map,e.on_game_loop_start=e.on_game_loop_start.bind(e),e.on_new_game=e.on_new_game.bind(e),e.on_player_hidden=e.on_player_hidden.bind(e),e.on_player_joined=e.on_player_joined.bind(e),e.on_player_ready=e.on_player_ready.bind(e),e.on("game_loop_start",e.on_game_loop_start),e.on("new_game",e.on_new_game),e.on("player_hidden",e.on_player_hidden),e.on("player_joined",e.on_player_joined),e.on("player_ready",e.on_player_ready),e}return e(n,t),n.prototype.get=function(e){return this.games.get(e)||o.dummy},n.prototype.use=function(e){this.io=e},n.prototype.on_game_loop_start=function(e){this.io.to(e.id).emit("server:game#start")},n.prototype.on_new_game=function(e){this.games.set(e.id,e),this.io.to(e.id).emit("server:game#start")},n.prototype.on_player_hidden=function(e,t){this.io.to(e.id).emit("server:game#hidden",t.public_id())},n.prototype.on_player_joined=function(e,t){this.io.to(e.id).emit("server:game#join",t.public_info())},n.prototype.on_player_ready=function(e,t){this.io.to(e.id).emit("server:game#ready",t.public_id()),e.can_start()&&e.start()},n.instance=new n,n}(t.EventEmitter);exports.GameWatcher=n;
},{"./dummy":"M7EW"}],"mMkc":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./watcher"),n=require("./dummy");function a(n,a){i(n),t(a),e.GameWatcher.instance.use(a)}function i(n){n.get("/.game.has_player/game=:game_id?/player=:player_id?",function(n,a){a.send({response:e.GameWatcher.instance.get(n.params.game_id).has_player(n.params.player_id)})})}function t(a){a.on("connection",function(a){var i=n.dummy;a.on("client:game#join",function(n,t,r){i=e.GameWatcher.instance.get(n),a.join(n),i.join(t,a.id)?r({scheme:i.get_scheme(),me:i.get_me(t)}):(a.leave(n),r({error:"Failed to join game "+n+"."}))}).on("client:game#ready",function(){i.set_ready(a.id)}).on("disconnect",function(){i.hide_player(a.id)})})}exports.setup_game_api=a;
},{"./watcher":"/YSm","./dummy":"M7EW"}],"yv35":[function(require,module,exports) {
"use strict";var r=this&&this.__read||function(r,t){var e="function"==typeof Symbol&&r[Symbol.iterator];if(!e)return r;var n,o,a=e.call(r),i=[];try{for(;(void 0===t||t-- >0)&&!(n=a.next()).done;)i.push(n.value)}catch(l){o={error:l}}finally{try{n&&!n.done&&(e=a.return)&&e.call(a)}finally{if(o)throw o.error}}return i},t=this&&this.__spread||function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(r(arguments[e]));return t};function e(r,e){return t(new Array(r).keys()).map(e)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.array_map=e;
},{}],"Ethn":[function(require,module,exports) {
"use strict";var e;Object.defineProperty(exports,"__esModule",{value:!0}),function(e){e[e.count=0]="count"}(e=exports.Weapon||(exports.Weapon={}));
},{}],"dxMG":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t,e=require("~/util/id-gen"),i=require("~/util/other"),r=require("./weapon-types"),n=function(){function t(t,e,n){this.first_id=t,this.last_id=t,this.online=!1,this.ready=!1,this.weapons=i.array_map(r.Weapon.count,function(t){return{amount:n.weapons[t].amount,delay:n.weapons[t].delay}}),this.worms=i.array_map(n.worm_count,function(t){return{hp:n.worm_hp,name:n.worm_name[e][t],position:{}}})}return t.prototype.join_with=function(t,e){this.last_id=t,this.ready,this.online=!0},t.prototype.public_id=function(){return e.beautify(this.first_id)},t.prototype.public_info=function(){return{}},t}();exports.Player=n,function(t){t[t.FIRST=0]="FIRST",t[t.LAST=1]="LAST"}(t=exports.PlayerIdType||(exports.PlayerIdType={}));
},{"~/util/id-gen":"nv6K","~/util/other":"yv35","./weapon-types":"Ethn"}],"rvAR":[function(require,module,exports) {
"use strict";var e=this&&this.__assign||function(){return(e=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0});var t=require("./player"),r=require("./watcher"),i=function(){function i(e){var i=this;this.id=e.id,this.looping=!1,this.scheme=e.get_scheme(),this.players=e.players.map(function(e,r){var n=e.id;return new t.Player(n,r,i.scheme.player_scheme)}),r.GameWatcher.instance.emit("new_game",this)}return i.prototype.can_start=function(){return!this.looping&&this.players.every(function(e){return e.ready})},i.prototype.get_scheme=function(){return e({},this.scheme)},i.prototype.get_me=function(e){var r=this.player_index(e,t.PlayerIdType.FIRST);if(-1!=r)return this.players[r].public_info()},i.prototype.has_player=function(e){return-1!=this.player_index(e,t.PlayerIdType.FIRST)},i.prototype.hide_player=function(e){var i=this.player_index(e,t.PlayerIdType.LAST);-1!=i&&(this.players[i].online=!1,r.GameWatcher.instance.emit("player_hidden",this,this.players[i]))},i.prototype.join=function(e,i){var n=this.player_index(e,t.PlayerIdType.FIRST);return-1!=n&&(this.players[n].join_with(i,this.scheme.player_scheme),r.GameWatcher.instance.emit("player_joined",this,this.players[n]),!0)},i.prototype.set_ready=function(e){var i=this.player_index(e,t.PlayerIdType.LAST);-1!=i&&(this.players[i].ready=!0,r.GameWatcher.instance.emit("player_ready",this,this.players[i]))},i.prototype.start=function(){console.log("start loop!!!")},i.prototype.player_index=function(e,r){return r==t.PlayerIdType.FIRST?this.players.findIndex(function(t){return t.first_id==e}):this.players.findIndex(function(t){return t.last_id==e})},i}();exports.Game=i;
},{"./player":"dxMG","./watcher":"/YSm"}],"lHjd":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.dummy={add_player:function(e){return!1},delete_player:function(e){},get_players:function(){return[]},player_index:function(e){return-1},set_ready:function(e,t){},start_game:function(){}};
},{}],"jpqz":[function(require,module,exports) {
"use strict";var e=this&&this.__extends||function(){var e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(t,o)};return function(t,o){function r(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}();Object.defineProperty(exports,"__esModule",{value:!0});var t=require("events"),o=require("~/util/id-gen"),r=require("./dummy"),i=function(t){function i(){var e=t.call(this)||this;return e.lobbies=new Set,e.rooms=new Map,e.on_game_started=e.on_game_started.bind(e),e.on_new_room=e.on_new_room.bind(e),e.on_player_joined=e.on_player_joined.bind(e),e.on_player_left=e.on_player_left.bind(e),e.on_player_ready=e.on_player_ready.bind(e),e.on("game_started",e.on_game_started),e.on("new_room",e.on_new_room),e.on("player_joined",e.on_player_joined),e.on("player_left",e.on_player_left),e.on("player_ready",e.on_player_ready),e}return e(i,t),i.prototype.can_join=function(e){return this.lobbies.has(e)},i.prototype.get=function(e){return this.rooms.get(e)||r.dummy},i.prototype.has_lobbies=function(){return 0!=this.lobbies.size},i.prototype.join_id=function(){return this.lobbies.values().next().value},i.prototype.use=function(e){this.io=e},i.prototype.emit_enable=function(e){this.io.sockets.connected[e.players[0].id].emit("server:room#enable",e.players.every(function(e){return e.ready}))},i.prototype.emit_first=function(e){this.io.to(e.id).emit("server:room#first",o.beautify(e.players[0].id))},i.prototype.on_game_started=function(e){this.rooms.delete(e.id),this.lobbies.delete(e.id)},i.prototype.on_new_room=function(e){this.lobbies.add(e.id),this.rooms.set(e.id,e)},i.prototype.on_player_joined=function(e){this.io.to(e.id).emit("server:room#join",o.beautify(e.players.slice(-1)[0].id)),e.is_full()&&this.lobbies.delete(e.id),1==e.players.length&&this.emit_first(e),this.emit_enable(e)},i.prototype.on_player_left=function(e,t,r){this.io.to(e.id).emit("server:room#leave",o.beautify(t)),0==r&&0!=e.players.length&&this.emit_first(e),0!=e.players.length&&this.emit_enable(e),this.lobbies.add(e.id)},i.prototype.on_player_ready=function(e,t){this.io.to(e.id).emit("server:room#ready",o.beautify(e.players[t].id),e.players[t].ready),this.emit_enable(e)},i.instance=new i,i}(t.EventEmitter);exports.RoomWatcher=i;
},{"~/util/id-gen":"nv6K","./dummy":"lHjd"}],"qzoI":[function(require,module,exports) {
"use strict";var e=this&&this.__assign||function(){return(e=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var r=require("~/util/id-gen"),i=require("./watcher"),n=t(require("~/../data/schemes/default.json")),s=function(){function t(){this.id=r.next_id(),this.players=[],this.scheme=n.default,i.RoomWatcher.instance.emit("new_room",this)}return t.prototype.add_player=function(e){return!this.is_full()&&(-1==this.player_index(e)&&(this.players.push({id:e,ready:!1}),i.RoomWatcher.instance.emit("player_joined",this),!0))},t.prototype.delete_player=function(e){var t=this.player_index(e);-1!=t&&(this.players.splice(t,1),i.RoomWatcher.instance.emit("player_left",this,e,t))},t.prototype.get_players=function(){return this.players.map(function(e){var t=e.id,i=e.ready;return{id:r.beautify(t),ready:i}})},t.prototype.get_scheme=function(){return e({},this.scheme)},t.prototype.is_full=function(){return this.players.length==this.scheme.player_limit},t.prototype.player_index=function(e){return this.players.findIndex(function(t){return t.id==e})},t.prototype.set_ready=function(e,t){var r=this.player_index(e);-1!=r&&(this.players[r].ready=t,i.RoomWatcher.instance.emit("player_ready",this,r))},t.prototype.start_game=function(){this.players.every(function(e){return e.ready})&&i.RoomWatcher.instance.emit("game_started",this)},t}();exports.Room=s;
},{"~/util/id-gen":"nv6K","./watcher":"jpqz","~/../data/schemes/default.json":"gXXY"}],"oZq5":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var o=require("~/util/id-gen"),e=require("./class"),n=require("./dummy"),i=require("./watcher");function t(o,e){r(o),a(e),i.RoomWatcher.instance.use(e)}function r(o){o.get("/.room.can_join/id=:room_id?",function(o,e){e.send({response:i.RoomWatcher.instance.can_join(o.params.room_id)})}).get("/.room.join_id",function(o,n){i.RoomWatcher.instance.has_lobbies()||new e.Room,n.send(i.RoomWatcher.instance.join_id())}).get("/.room.get_players/id=:room_id?",function(o,e){e.send(i.RoomWatcher.instance.get(o.params.room_id).get_players())})}function a(e){e.on("connection",function(e){var t=n.dummy;e.on("client:room#join",function(n,r){(t=i.RoomWatcher.instance.get(n)).add_player(e.id)?(e.join(n),r({me:o.beautify(e.id)})):r({error:"Failed to join room "+n+"."})}).on("client:room#ready",function(o){t.set_ready(e.id,o)}).on("client:room#start",function(){0==t.player_index(e.id)&&t.start_game()}).on("disconnect",function(){t.delete_player(e.id)})})}exports.setup_room_api=t;
},{"~/util/id-gen":"nv6K","./class":"qzoI","./dummy":"lHjd","./watcher":"jpqz"}],"eo/5":[function(require,module,exports) {
module.exports=["jjj","oof","heh","gg","kok","jej","wuw","wp","saas","sos","ooo","ded","liben","raigen","ponel","sasi","flask","dudon","baton","kuku","psina","smertb","borgar"];
},{}],"XAkt":[function(require,module,exports) {
"use strict";var e=this&&this.__values||function(e){var r="function"==typeof Symbol&&e[Symbol.iterator],t=0;return r?r.call(e):{next:function(){return e&&t>=e.length&&(e=void 0),{value:e&&e[t++],done:!e}}}},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var t=r(require("express")),a=r(require("http")),i=r(require("os")),n=r(require("path")),o=r(require("socket.io")),l=require("./util/id-gen"),u=require("./game/api"),s=require("./game/class"),d=require("./room/api"),c=require("./room/watcher"),f=r(require("../data/id-digits.json")),v=process.env.DEV_SERVER?"dist":"build",_=+process.env.PORT||3e3,m=n.default.join(__dirname,"../../client/"+v+"/");l.init_id_generator(f.default,3);var p=t.default(),h=new a.default.Server(p),y=o.default(h);p.use("/",t.default.static(m)),p.use("/assets",t.default.static(n.default.join(__dirname,"../../client/assets"))),p.get("/",function(e,r){r.sendFile(n.default.join(m,"index.html"))}),d.setup_room_api(p,y),u.setup_game_api(p,y),c.RoomWatcher.instance.on("game_started",function(e){console.log("start"),new s.Game(e)}),h.listen(_,function(){var r,t,a,n;try{for(var o=e(Object.values(i.default.networkInterfaces())),l=o.next();!l.done;l=o.next()){var u=l.value;try{for(var s=(a=void 0,e(u)),d=s.next();!d.done;d=s.next()){var c=d.value;c.internal||"IPv4"!=c.family||console.log("Listening on http://"+c.address+":"+_)}}catch(f){a={error:f}}finally{try{d&&!d.done&&(n=s.return)&&n.call(s)}finally{if(a)throw a.error}}}}catch(v){r={error:v}}finally{try{l&&!l.done&&(t=o.return)&&t.call(o)}finally{if(r)throw r.error}}});
},{"./util/id-gen":"nv6K","./game/api":"mMkc","./game/class":"rvAR","./room/api":"oZq5","./room/watcher":"jpqz","../data/id-digits.json":"eo/5"}]},{},["XAkt"], null)