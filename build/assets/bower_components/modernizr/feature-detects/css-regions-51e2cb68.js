Modernizr.addTest("regions",function(){var e=Modernizr.prefixed("flowFrom"),t=Modernizr.prefixed("flowInto");if(!e||!t)return!1;var n=document.createElement("div"),d=document.createElement("div"),i=document.createElement("div"),r="modernizr_flow_for_regions_check";d.innerText="M",n.style.cssText="top: 150px; left: 150px; padding: 0px;",i.style.cssText="width: 50px; height: 50px; padding: 42px;",i.style[e]=r,n.appendChild(d),n.appendChild(i),document.documentElement.appendChild(n);var o,l,c=d.getBoundingClientRect();return d.style[t]=r,o=d.getBoundingClientRect(),l=o.left-c.left,document.documentElement.removeChild(n),d=i=n=void 0,42==l});