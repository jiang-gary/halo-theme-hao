if(document.querySelector(".author-content.author-content-item.single")){const canvas=document.createElement("canvas");canvas.id="header_canvas",canvas.style.position="absolute",canvas.style.bottom="0",canvas.width=844,canvas.height=346,document.querySelector(".author-content.author-content-item.single").appendChild(canvas);document.querySelector(".author-content.author-content-item.single").parentNode.className="thumbnail_canvas",function(){var canvas,ctx,width,height,bubbles;function animate(){for(var i in ctx.clearRect(0,0,width,height),bubbles)bubbles[i].draw();requestAnimationFrame(animate)}function window_resize(){const panel=document.querySelector(".thumbnail_canvas");panel&&(width=panel.offsetWidth,height=panel.offsetHeight,canvas.width=width,canvas.height=height)}function Bubble(){var _this=this;function init(){_this.pos.x=Math.random()*width,_this.pos.y=height+100*Math.random(),_this.alpha=.1+.5*Math.random(),_this.alpha_change=2e-4+5e-4*Math.random(),_this.scale=.2+.8*Math.random(),_this.scale_change=.002*Math.random(),_this.speed=.1+.4*Math.random()}_this.pos={},init(),this.draw=function(){_this.alpha<=0&&init(),_this.pos.y-=_this.speed,_this.alpha-=_this.alpha_change,_this.scale+=_this.scale_change,ctx.beginPath(),ctx.arc(_this.pos.x,_this.pos.y,10*_this.scale,0,2*Math.PI,!1),ctx.fillStyle="rgba(255,255,255,"+_this.alpha+")",ctx.fill()}}!function(){if(canvas=document.getElementById("header_canvas"),window_resize(),canvas){ctx=canvas.getContext("2d"),bubbles=[];for(var num=.04*width,i=0;i<num;i++){var c=new Bubble;bubbles.push(c)}animate()}}(),window.onresize=function(){window_resize()}}()}