window.onload=function ()
{
	var oBtn1=document.getElementById('btn1');
	var oBtn2=document.getElementById('btn2');
	var oBtn3=document.getElementById('btn3');
	var oBtn4=document.getElementById('geshui');
	var oBtn5=document.getElementById('fangdai');
	var oDiv=document.getElementById('input');
	var oDivMenu=document.getElementById('menu');
	var oDiv1=document.getElementById('show');
	var oDiv2=document.getElementById('huansuan');
	var oDiv3=document.getElementById('shuidai');
	var oDiv4=document.getElementById('box');
	var oDiv5=document.getElementById('box1');
	oBtn1.onclick=function ()
	{
		oDiv.style.display="block";
		oDivMenu.style.background="#EFEFEE";
		oDiv1.style.display="block";
		oDiv2.style.display="none";
		oDiv3.style.display="none";
		oBtn1.style.color="OrangeRed";
		oBtn2.style.color="#606060";
		oBtn3.style.color="#606060";
		oBtn1.style.fontSize="13pt";
		oBtn2.style.fontSize="10pt";
		oBtn3.style.fontSize="10pt";
	};
	oBtn2.onclick=function ()
	{
		oDiv.style.display="none";
		oDivMenu.style.background="white";
		oDiv1.style.display="none";
		oDiv2.style.display="block";
		oDiv3.style.display="none";
		oBtn1.style.color="#606060";
		oBtn2.style.color="OrangeRed";
		oBtn3.style.color="#606060";
		oBtn1.style.fontSize="10pt";
		oBtn2.style.fontSize="13pt";
		oBtn3.style.fontSize="10pt";
	};
	oBtn3.onclick=function ()
	{
		oDiv.style.display="none";
		oDivMenu.style.background="white";
		oDiv1.style.display="none";
		oDiv2.style.display="none";
		oDiv3.style.display="block";
		oBtn1.style.color="#606060";
		oBtn2.style.color="#606060";
		oBtn3.style.color="OrangeRed";
		oBtn3.style.fontSize="13pt";
		oBtn1.style.fontSize="10pt";
		oBtn2.style.fontSize="10pt";
	};
	oBtn4.onclick=function ()
	{
		oDiv4.style.display="block";
		oDiv5.style.display="none";
		oBtn4.style.color="#000";
		oBtn4.style.background="#ccc";
		oBtn5.style.color="#ccc";
		oBtn5.style.background="none";
	};
	oBtn5.onclick=function ()
	{
		oDiv4.style.display="none";
		oDiv5.style.display="block";
		oBtn4.style.color="#ccc";
		oBtn4.style.background="none";
		oBtn5.style.background="#ccc";
		oBtn5.style.color="#000";
	};
};
