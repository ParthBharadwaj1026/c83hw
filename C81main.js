var current_position_x,current_position_y,last_position_x,last_position_y;
var color="Black";
var line_width=5;
canvas=document.getElementById("canvas_1");
scr_width=screen.width;
console.log(scr_width);
if (scr_width<=992){
    new_width=scr_width-200;
    new_height=screen.height-100;
    document.getElementById("canvas_1").width=new_width;
    document.getElementById("canvas_1").height=new_height;
    document.body.style.overflow="hidden";
};
context=canvas.getContext("2d");
//context.beginPath();
//context.strokeStyle=document.getElementById("stroke_color_1").value;
//context.lineWidth=2;
//context.arc(500, 200, 50, 0, 360);
//context.stroke();
canvas.addEventListener("touchstart", my_ontouchstart);
function my_ontouchstart(e){
    last_position_x=e.touches[0].clientX-canvas.offsetLeft;
    last_position_y=e.touches[0].clientY-canvas.offsetTop;
    console.log("current_position_x,y"+current_position_x+","+current_position_y);
    color=document.getElementById("stroke_color_1").value;
    line_width=document.getElementById("stroke_width_1").value;
    console.log("touchstart")
};
canvas.addEventListener("touchmove", my_ontouchmove);
function my_ontouchmove(e){
    current_position_x=e.touches[0].clientX-canvas.offsetLeft;
    current_position_y=e.touches[0].clientY-canvas.offsetTop;
    console.log("current_position_x,y"+current_position_x+","+current_position_y);
    context.beginPath();
        context.strokeStyle=color;
        context.lineWidth=line_width;
        context.moveTo(last_position_x,last_position_y);
        context.lineTo(current_position_x,current_position_y);
        context.stroke();
    last_position_x=current_position_x;
    last_position_y=current_position_y;
    console.log("last_position_x,y"+last_position_x+","+last_position_y);
};