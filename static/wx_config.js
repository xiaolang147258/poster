/////////////////////////////////微信分享/////////////////////////////////////////////////////////////////////////////////////////
	
	var checkJsApi = function(jsons,title,desc,link,imgUrl){
		
	wx.config(jsons);//注入配置信息  
		
    wx.ready(function () {   //需在用户可能点击分享按钮前就先调用
    wx.updateAppMessageShareData({ 
        title: title, // 分享标题
        desc: desc, // 分享描述
        link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: imgUrl, // 分享图标
        success: function () {
          // 设置成功
        }
    });
    wx.updateTimelineShareData({ 
        title:title, // 分享标题
        link:link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl:imgUrl, // 分享图标
        success: function () {
          // 设置成功
        }
    })
    });
   
    
	}