var TongZhi=[
	["https://mp.weixin.qq.com/s/O4WJ3FP01Vku2Cjo40bd6Q","【疫情防控 我们一直都在】--书画传真情（二）"],
	["https://mp.weixin.qq.com/s/IUcjaB1sEHVhMXj4LhXqiQ","区委常委、宣传部长李晶一行调研指导志愿者协会建设工作"],
	["https://mp.weixin.qq.com/s/a36f94_f2yposC2-yoyqig","弘扬雷锋精神 战“疫 ”日记……"],
	["https://mp.weixin.qq.com/s/u1oAY76Y1TG_VvfpRNAFtA","【疫情防控 我们一直都在】张璐的战“疫”故事"],
	["https://mp.weixin.qq.com/s/jb8VsUmRCKweD9-G-g7A3Q","【疫情防控 我们一直都在】同一份担当"],
	["https://mp.weixin.qq.com/s/swr2pIlAsgqqMsrOItmt0w","爱心联动 共同战“疫”"],
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
