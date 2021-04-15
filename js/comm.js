/**
 * 封装的ajax调用方法
 * @param url
 * @param iptname
 */
function inva(url,pdata,iptname){
	$.ajax({   
        url: url,//提交访问的URL   
        type: 'GET',//提交的方法   
        data: pdata,
        dataType: 'text',//返回的内容的类型，由于PHP文件是直接echo的，那么这里就是text   
        timeout: 1000,//超时时间   
        error: function(){ //如果出错，执行函数   
            alert('調用出錯，請重試！');   
        },   
        success: function(data){   
        	if($("#"+iptname)){        		
        		$("#"+iptname).val(data);
        	}           
           afterAjax(data);
        }   
    });  	
}

/**
 * 没有等待时长，用于债券收益率计算的时候
 * @param url
 * @param pdata
 * @param iptname
 */
function invaww(url,pdata,iptname){
	$.ajax({   
        url: url,//提交访问的URL   
        type: 'GET',//提交的方法   
        data: pdata,
        dataType: 'text',//返回的内容的类型，由于PHP文件是直接echo的，那么这里就是text   
        //timeout: 1000,//超时时间   
        error: function(){ //如果出错，执行函数   
            alert('調用出錯，請重試！');   
        },   
        success: function(data){   
        	if($("#"+iptname)){        		
        		$("#"+iptname).val(data);
        	}           
           afterAjax(data);
        }   
    });  	
}
function inv(url,pdata,iptname){
	$.ajax({   
        url: url,//提交访问的URL   
        type: 'GET',//提交的方法   
        data: pdata,
        dataType: 'text',//返回的内容的类型，由于PHP文件是直接echo的，那么这里就是text   
        timeout: 1000,//超时时间   
        error: function(){ //如果出错，执行函数   
            alert('調用出錯，請重試！');   
        },   
        success: function(data){   
           //alert(data);//如果成功，弹出数据   
           $("#"+iptname).val(data);
           //afterAjax();
        }   
    });  	
}
/**
 * 将Array中的内容转换成数字,如果有會計計數法也修正，为highchart定制
 * @param arr
 */
function changeA(arr){
	var rt = new Array();
	for(i=0;i<arr.length;i++){
		if(arr[i].length>7){
			rt[i] = arr[i].replace(",","")-0;	
		}else{
			rt[i] = arr[i]-0;
		}
	}
	return rt;
	
}

/**
 *	日期换算
 */
function daysBetween(DateOne,DateTwo) {   
    var OneMonth = DateOne.substring(5,DateOne.lastIndexOf ('-')); 
    var OneDay = DateOne.substring(DateOne.length,DateOne.lastIndexOf ('-')+1); 
    var OneYear = DateOne.substring(0,DateOne.indexOf ('-'));  
    var TwoMonth = DateTwo.substring(5,DateTwo.lastIndexOf ('-'));  
    var TwoDay = DateTwo.substring(DateTwo.length,DateTwo.lastIndexOf ('-')+1); 
    var TwoYear = DateTwo.substring(0,DateTwo.indexOf ('-'));  
    var cha=((Date.parse(OneMonth+'/'+OneDay+'/'+OneYear)- Date.parse(TwoMonth+'/'+TwoDay+'/'+TwoYear))/86400000);   
    return cha;  
}
// 30/360 模式下, one 结束 two 开始
function daysB360(DateOne,DateTwo){
	var OneMonth = DateOne.substring(5,DateOne.lastIndexOf ('-')); 
    var OneDay = DateOne.substring(DateOne.length,DateOne.lastIndexOf ('-')+1); 
    var OneYear = DateOne.substring(0,DateOne.indexOf ('-'));  
    var TwoMonth = DateTwo.substring(5,DateTwo.lastIndexOf ('-'));  
    var TwoDay = DateTwo.substring(DateTwo.length,DateTwo.lastIndexOf ('-')+1); 
    var TwoYear = DateTwo.substring(0,DateTwo.indexOf ('-'));  
	var bDay=OneDay-TwoDay,bMonth=OneMonth-TwoMonth,bYear=OneYear-TwoYear;	
	var	cha = bDay+(bMonth+12*bYear)*30;
	//加入起始结尾的非30的日期修正
	if(OneMonth==TwoMonth&&OneDay==TwoDay){
	
	}else{
		if(OneDay==31){
			cha=cha-1;
		}
		if(TwoDay==31){
			cha=cha+1;
		}
		if(OneMonth==2&&OneDay==28){
			cha = cha+2;
		}
		if(OneMonth==2&&OneDay==29){
			cha = cha+1;
		}
	}
	return cha;
}


Date.prototype.DateAdd = function(strInterval, Number) {  
    var dtTmp = this;  
    switch (strInterval) { 
        case 's' :return new Date(Date.parse(dtTmp) + (1000 * Number)); 
        case 'n' :return new Date(Date.parse(dtTmp) + (60000 * Number));  
        case 'h' :return new Date(Date.parse(dtTmp) + (3600000 * Number)); 
        case 'd' :return new Date(Date.parse(dtTmp) + (86400000 * Number)); 
        case 'w' :return new Date(Date.parse(dtTmp) + ((86400000 * 7) * Number)); 
        case 'q' :return new Date(dtTmp.getFullYear(), (dtTmp.getMonth()) + Number*3, dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds());  
        case 'm' :return new Date(dtTmp.getFullYear(), (dtTmp.getMonth()) + Number, dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds());  
        case 'y' :return new Date((dtTmp.getFullYear() + Number), dtTmp.getMonth(), dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds());  
    }  
} 

function StringToDate(DateStr) {   
    var converted = Date.parse(DateStr);  
    var myDate = new Date(converted);  
    if (isNaN(myDate)) {   
        var arys= DateStr.split('-'); 
        myDate = new Date(arys[0],--arys[1],arys[2]); 
    }  
    return myDate;  
}
function DateToString(nDate){
	var ny = nDate.getFullYear();
	var nm = nDate.getMonth()+1;
	var nd = nDate.getDate();
	return ny+"-"+nm+"-"+nd;
} 
  
function daysAdd(oneDate,intv,plus){
	var newDate = StringToDate(oneDate);
	if(plus=="-"){
		newDate = newDate.DateAdd('d',-intv);
	}else{
		newDate = newDate.DateAdd('d',intv);
	}	
	return DateToString(newDate);
}
/**
 * 获取队列内容
 * @param idname
 * @returns {String}
 */
function getSL(idname){
	var tt = $("input[id="+idname+"]");
	var sls="";
	for(i=0;i<tt.length;i++){
		if(i==tt.length-1){
			sls = sls+tt[i].value;
		}else{
			sls = sls+tt[i].value+";";
		}
	}
	return sls;
}