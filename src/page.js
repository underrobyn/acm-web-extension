$(document).ready(function(){
	improvements();
});
var improvements = function(){
	inject(function(){
		if (!window.JSON){
			var s = document.createElement("script");
			s.src = "https://cdnjs.cloudflare.com/ajax/libs/json3/3.3.2/json3.min.js";
			s.type = "text/javascript";
			document.head.append(s);
		}
		var acm_sectColours = {
			"LTE":{},
			"UMTS":{},
			"GSM":{}
		};
		var acm_cmMd5 = function(s){function L(k,d){return(k<<d)|(k>>>(32-d))}function K(G,k){var I,d,F,H,x;F=(G&2147483648);H=(k&2147483648);I=(G&1073741824);d=(k&1073741824);x=(G&1073741823)+(k&1073741823);if(I&d){return(x^2147483648^F^H)}if(I|d){if(x&1073741824){return(x^3221225472^F^H)}else{return(x^1073741824^F^H)}}else{return(x^F^H)}}function r(d,F,k){return(d&F)|((~d)&k)}function q(d,F,k){return(d&k)|(F&(~k))}function p(d,F,k){return(d^F^k)}function n(d,F,k){return(F^(d|(~k)))}function u(G,F,aa,Z,k,H,I){G=K(G,K(K(r(F,aa,Z),k),I));return K(L(G,H),F)}function f(G,F,aa,Z,k,H,I){G=K(G,K(K(q(F,aa,Z),k),I));return K(L(G,H),F)}function D(G,F,aa,Z,k,H,I){G=K(G,K(K(p(F,aa,Z),k),I));return K(L(G,H),F)}function t(G,F,aa,Z,k,H,I){G=K(G,K(K(n(F,aa,Z),k),I));return K(L(G,H),F)}function e(G){var Z;var F=G.length;var x=F+8;var k=(x-(x%64))/64;var I=(k+1)*16;var aa=Array(I-1);var d=0;var H=0;while(H<F){Z=(H-(H%4))/4;d=(H%4)*8;aa[Z]=(aa[Z]| (G.charCodeAt(H)<<d));H++}Z=(H-(H%4))/4;d=(H%4)*8;aa[Z]=aa[Z]|(128<<d);aa[I-2]=F<<3;aa[I-1]=F>>>29;return aa}function B(x){var k="",F="",G,d;for(d=0;d<=3;d++){G=(x>>>(d*8))&255;F="0"+G.toString(16);k=k+F.substr(F.length-2,2)}return k}function J(k){k=k.replace(/rn/g,"n");var d="";for(var F=0;F<k.length;F++){var x=k.charCodeAt(F);if(x<128){d+=String.fromCharCode(x)}else{if((x>127)&&(x<2048)){d+=String.fromCharCode((x>>6)|192);d+=String.fromCharCode((x&63)|128)}else{d+=String.fromCharCode((x>>12)|224);d+=String.fromCharCode(((x>>6)&63)|128);d+=String.fromCharCode((x&63)|128)}}}return d}var C=Array();var P,h,E,v,g,Y,X,W,V;var S=7,Q=12,N=17,M=22;var A=5,z=9,y=14,w=20;var o=4,m=11,l=16,j=23;var U=6,T=10,R=15,O=21;s=J(s);C=e(s);Y=1732584193;X=4023233417;W=2562383102;V=271733878;for(P=0;P<C.length;P+=16){h=Y;E=X;v=W;g=V;Y=u(Y,X,W,V,C[P+0],S,3614090360);V=u(V,Y,X,W,C[P+1],Q,3905402710);W=u(W,V,Y,X,C[P+2],N,606105819);X=u(X,W,V,Y,C[P+3],M,3250441966);Y=u(Y,X,W,V,C[P+4],S,4118548399);V=u(V,Y,X,W,C[P+5],Q,1200080426);W=u(W,V,Y,X,C[P+6],N,2821735955);X=u(X,W,V,Y,C[P+7],M,4249261313);Y=u(Y,X,W,V,C[P+8],S,1770035416);V=u(V,Y,X,W,C[P+9],Q,2336552879);W=u(W,V,Y,X,C[P+10],N,4294925233);X=u(X,W,V,Y,C[P+11],M,2304563134);Y=u(Y,X,W,V,C[P+12],S,1804603682);V=u(V,Y,X,W,C[P+13],Q,4254626195);W=u(W,V,Y,X,C[P+14],N,2792965006);X=u(X,W,V,Y,C[P+15],M,1236535329);Y=f(Y,X,W,V,C[P+1],A,4129170786);V=f(V,Y,X,W,C[P+6],z,3225465664);W=f(W,V,Y,X,C[P+11],y,643717713);X=f(X,W,V,Y,C[P+0],w,3921069994);Y=f(Y,X,W,V,C[P+5],A,3593408605);V=f(V,Y,X,W,C[P+10],z,38016083);W=f(W,V,Y,X,C[P+15],y,3634488961);X=f(X,W,V,Y,C[P+4],w,3889429448);Y=f(Y,X,W,V,C[P+9],A,568446438);V=f(V,Y,X,W,C[P+14],z,3275163606);W=f(W,V,Y,X,C[P+3],y,4107603335);X=f(X,W,V,Y,C[P+8],w,1163531501);Y=f(Y,X,W,V,C[P+13],A,2850285829);V=f(V,Y,X,W,C[P+2],z,4243563512);W=f(W,V,Y,X,C[P+7],y,1735328473);X=f(X,W,V,Y,C[P+12],w,2368359562);Y=D(Y,X,W,V,C[P+5],o,4294588738);V=D(V,Y,X,W,C[P+8],m,2272392833);W=D(W,V,Y,X,C[P+11],l,1839030562);X=D(X,W,V,Y,C[P+14],j,4259657740);Y=D(Y,X,W,V,C[P+1],o,2763975236);V=D(V,Y,X,W,C[P+4],m,1272893353);W=D(W,V,Y,X,C[P+7],l,4139469664);X=D(X,W,V,Y,C[P+10],j,3200236656);Y=D(Y,X,W,V,C[P+13],o,681279174);V=D(V,Y,X,W,C[P+0],m,3936430074);W=D(W,V,Y,X,C[P+3],l,3572445317);X=D(X,W,V,Y,C[P+6],j,76029189);Y=D(Y,X,W,V,C[P+9],o,3654602809);V=D(V,Y,X,W,C[P+12],m,3873151461);W=D(W,V,Y,X,C[P+15],l,530742520);X=D(X,W,V,Y,C[P+2],j,3299628645);Y=t(Y,X,W,V,C[P+0],U,4096336452);V=t(V,Y,X,W,C[P+7],T,1126891415);W=t(W,V,Y,X,C[P+14],R,2878612391);X=t(X,W,V,Y,C[P+5],O,4237533241);Y=t(Y,X,W,V,C[P+12],U,1700485571);V=t(V,Y,X,W,C[P+3],T,2399980690);W=t(W,V,Y,X,C[P+10],R,4293915773);X=t(X,W,V,Y,C[P+1],O,2240044497);Y=t(Y,X,W,V,C[P+8],U,1873313359);V=t(V,Y,X,W,C[P+15],T,4264355552);W=t(W,V,Y,X,C[P+6],R,2734768916);X=t(X,W,V,Y,C[P+13],O,1309151649);Y=t(Y,X,W,V,C[P+4],U,4149444226);V=t(V,Y,X,W,C[P+11],T,3174756917);W=t(W,V,Y,X,C[P+2],R,718787259);X=t(X,W,V,Y,C[P+9],O,3951481745);Y=K(Y,h);X=K(X,E);W=K(W,v);V=K(V,g)}var i=B(Y)+B(X)+B(W)+B(V);return i.toLowerCase()};
		var acm_pickColours = function(earfcn){
			console.info("Colour for :",earfcn);
			var base = ["C70039","581845","FFC300","6C3483","229954","2874A6","117A65","18BC9C","e83e8c","660011"];
			
			// Pick random colour from list as default
			if (typeof window.acm_sectColours[window.netType][earfcn] !== "string"){
				window.acm_sectColours[window.netType][earfcn] = base[Math.floor(Math.random()*base.length)];
				acm_saveColourData();
			}
			
			return window.acm_sectColours[window.netType][earfcn];
		};
		var acm_initialiseColourData = function(){
			if (typeof Storage !== "function" || typeof localStorage !== "object"){
				return;
			}
			var d = localStorage.getItem("colordata-v01");
			if (d === null || d.length <= 2) {
				acm_saveColourData();
				return;
			}
			window.acm_sectColours = JSON.parse(d);
			window.MD5 = acm_pickColours;
		};
		var acm_saveColourData = function(){
			if (typeof window.acm_sectColours !== "object") {
				window.acm_sectColours = {
					"LTE":{},
					"UMTS":{},
					"GSM":{}
				};
			}
			localStorage.setItem("colordata-v01",JSON.stringify(window.acm_sectColours));
		};
		var acm_randomiseColourData = function(cmDefault){
			if (!confirm((cmDefault === true ? "This will set all values to their cellmapper defaults. Are you sure you wish to do this?" : "This will randomise all current values. Are you sure you wish to do this?"))) return;
			
			function randHexCol(){
				for (var i = 0,r = "",c = "ABCDEF0123456789";i<6;i++)
					r += c.charAt(Math.floor(Math.random()*c.length));
				return r;
			};
			if (typeof window.acm_sectColours !== "object") {
				window.acm_sectColours = {
					"LTE":{},
					"UMTS":{},
					"GSM":{}
				};
				console.warn("Reset col-list")
			}
			var k = Object.keys(window.acm_sectColours);
			for (var i = 0;i<k.length;i++){
				var r = Object.keys(window.acm_sectColours[k[i]]);
				if (r.length === 0) continue;
				for (var j = 0;j<r.length;j++){
					window.acm_sectColours[k[i]][r[j]] = (cmDefault === true ? acm_cmMd5(r[j]).substring(0,6) : randHexCol());
				}
			}
			acm_saveColourData();
			acm_refreshColourDataList();
		};
		var acm_initialiseColourSelector = function(){			
			$("<table/>",{"class":"table table-sm"}).append(
				$("<thead/>").append(
					$("<tr/>",{"class":"collapsedSection"}).append(
						$("<td/>").text("Colour Picker")
					)
				),
				$("<tbody/>",{"style":"text-align:center;display:none;"}).append(
					$("<button/>").text("Refresh List").on("click enter",acm_refreshColourDataList),
					$("<button/>").text("Randomise Colours").on("click enter",function(){acm_randomiseColourData(false);}),
					$("<button/>").text("Reset Colours").on("click enter",function(){acm_randomiseColourData(true);}),
					$("<div/>",{"id":"earfcn_colpick_list"}),$("<br/>")
				)
			).insertAfter("#accountTable");
			acm_refreshColourDataList();
		};
		var acm_refreshColourDataList = function(){
			var x = $("#earfcn_colpick_list");
			x.empty();
			if (typeof window.acm_sectColours !== "object") {
				window.acm_sectColours = {
					"LTE":{},
					"UMTS":{},
					"GSM":{}
				};
			}
			var txt = {
				"LTE":"EARFCNs",
				"UMTS":"UARFCNs",
				"GSM":"ARFCNs"
			}
			var k = Object.keys(window.acm_sectColours);
			for (var i = 0;i<k.length;i++){
				var r = Object.keys(window.acm_sectColours[k[i]]);
				if (r.length === 0) continue;
				
				var el = $("<div/>",{
					"style":"width:100%;padding:2%;margin:2px 0 0 0;text-align:center;float:left;"
				}).append(
					$("<div/>",{"style":"width:100%;font-size:1.3rem"}).html("&nbsp;" + txt[k[i]])
				);
				
				for (var j = 0;j<r.length;j++){
					el.append(
						$("<div/>",{"style":"width:25%;float:left;"}).append(
							$("<span/>",{"style":"1.1rem"}).text(r[j]),
							$("<input/>",{
								"type":"color",
								"style":"width:100%",
								"value":"#" + window.acm_sectColours[k[i]][r[j]],
								"data-earfcn":r[j],
								"data-rat":k[i]
							}).on("change",function(){
								console.log("Set",$(this).data("earfcn"),"to",$(this).val());
								window.acm_sectColours[$(this).data("rat")][$(this).data("earfcn")] = $(this).val().substr(1,6);
								acm_saveColourData();
							})
						)
					)
				}
				x.append(el);
			}
		}
		
		var acm_toggleTopBar = function(){
			$("<table/>",{"class":"table table-sm"}).append(
				$("<thead/>").append(
					$("<tr/>",{"class":"collapsedSection"}).append($("<td/>").text("UI Tweaks"))
				),
				$("<tbody/>",{"style":"text-align:center;display:none;"}).append(
					$("<button/>",{href:"#"}).text("Toggle Navigation Bar").on("click enter",function(){
						$($("nav")[0]).toggle();
						if (!$($("nav")[0]).is(":visible")){
							$("#side_bottom").css("top","0");
						} else {
							$("#side_bottom").css("top","70px");
						}
					}),
					//$("<button/>",{href:"#"}).text("Toggle Navigation Bar").on("click enter",function(){
					//	$($("#tabs-2 table tbody")[0]).hide();
					//}),
					$("<button/>").text("Toggle Search Tools In Sidebar").on("click enter",function(){
						$("#locsearch").toggle();
						$("#towersearch").toggle();
						$("#pcipscsearch").toggle();
					})
				)
			).insertAfter("#accountTable");
		};
		
		var acm_welcomeMsg = function(){
			var text = "<h2>Welcome!</h2>Thanks for installing AwesomeCM.<br />If you have any ideas or suggestions DM me on Telegram or Twitter<br /><a href='https://t.me/underrscore'>Telegram</a> | <a href='https://twitter.com/AD_couk'>Twitter</a><br /><a href='https://github.com/jake-cryptic/acm-web-extension'>View code on GitHub</a>";
			var realDiv = $("<div>");
			realDiv.append(text);
			realDiv.prop('title', 'Awesome CellMapper');
			bootbox.alert(text);
			window.location.hash = "#";
		}

		if(window.location.pathname === "/map"){
			$("#tabs-1").find("br").remove();
			$("#notesText").html("Awesome CellMapper by <a href='https://absolutedouble.co.uk'>AbsoluteDouble</a>");
			$("#toast").text("[AwesomeCM]: Loaded!").fadeIn(200).delay(2000).slideUp(450);
			$("nav.navbar").css("background","#1a1a1a !important");
			acm_initialiseColourData();
			acm_initialiseColourSelector();
			acm_toggleTopBar();
			if(window.location.hash && window.location.hash === "#newinstall") {acm_welcomeMsg();}
		}
	},null);
};
var inject = function(code,func){
	var s = document.createElement("script");
	code = code || '';
	s.type = "text/javascript";
	s.textContent = "(" + code + ")("+func+");";
	document.documentElement.appendChild(s);
};