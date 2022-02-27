var TongZhi=[
	["https://mp.weixin.qq.com/s/FvsE9gp9kHCSF_zCy2G_TA","【疫情防控 我们一直都在】--特殊2的表达--"],
	["https://mp.weixin.qq.com/s/WRoKvZ9K9FTQ7JUz1tu_Vw","新春送温暖暨筑梦行动"],
	["https://mp.weixin.qq.com/s/0NX1H6Et1cEbD0v_PbNRhA","招募疫情防控志愿者啦"],
	["https://mp.weixin.qq.com/s/z8o4JWrqGJ1EQMgGd4CrPA","国爱志愿者给您拜年啦"]];
function setyw(){
	var a=0;
	for(;a<=TongZhi.length;a++)
	{
		document.getElementById("yw_text").innerHTML+="<div><a target='_blank' href='"+TongZhi[a][0]+"'>"+TongZhi[a][1]+"</a></div>";
	}
}