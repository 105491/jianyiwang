
        document.addEventListener("DOMContentLoaded",function(){
            jQuery(function($){
                var $output = $("#outputlubo_1");
                var $oul = $("#outputlubo_1 ul");
                $('<li><img src="../images/luboc4.png"/></li>').appendTo($oul);
                var $oli = $("#outputlubo_1 ul li");
                var $oimg = $("#outputlubo_1 ul li img");
                var $len = $oli.length;
                var $idx = 0;
                var $timeri;
                $oul.css("width",""+750*$len+"px");

                // // 新建小圆点
                // $("<div/>").appendTo($output).addClass("page1");
                // for(var i = 0;i < $len-1;i++){
                //     $("<span/>").appendTo($(".page1")).html(i+1);
                // }
                // var $ospan = $(".page1").children();

                // $ospan.eq(0).toggleClass("active");
                // autoplay();

                // 新建左右按键
                $("<div/>").appendTo($output).addClass("jiantou1");
                $("<span/>").appendTo($(".jiantou1")).html("<").addClass("left");
                $("<span/>").appendTo($(".jiantou1")).html(">").addClass("right");

                // setInterval(function(){
                //     $idx++;
                //     if($idx >= $len){
                //         $idx = 0;
                //     }
                //     $oul.css("left",""+320*-$idx+"px");
                // }, 1000);
                
                //点击左右按钮切换图片
                $(".jiantou1").on("click",".left",function(){
                    if($oul.css("left").slice(0,-2)%750==0){
                        // console.log($oul.css("left").slice(0,-2));
                        $idx--;
                        showPico();
                    }
          

                });
                $(".jiantou1").on("click",".right",function(){
                    if($oul.css("left").slice(0,-2)%750==0){
                        // console.log($oul.css("left").slice(0,-2));
                        $idx++;
                        showPico();
                    }
                

                    
                });


                

                // $(".jiantou").on("mousemove","span",function(){
                //     clearInterval($timer);
                // }).on("mouseout","span",function(){
                //     autoplay();
                // })



                // 移入显示左右按钮
                // $output.on("mousemove",function(){
                //     $(".jiantou").css("display","block");
                //     return false;
                // }).on("mouseout",function(){
                //     $(".jiantou").css("display","none");
                //     return false;
                // });

                // 点击切换图片
                $(".page1").on("click","span",function(){
                    $idx = $(this).html() - 1;
                    showPico();    
                })

                //鼠标移入停止定时器
                // $output.on("mousemove",function(){
                //     clearInterval($timeri);
                // }).on("mouseout",function(){
                //     autoplay();
                // })
        
                
                // 开启定时器播放轮播
                // function autoplay(){
                //     $timeri = setInterval(function(){
                //         $idx++;
                //         showPico();
                //     },2500);
                // }
              

                // 呈现图片
                function showPico(){
                    if($idx == $len){
                        $oul.css("left","0");
                        $idx = 1;
                    }
                    if($idx == -1){
                        $oul.css("left",""+-750*($len-1)+"px");
                        $idx = $len-2;
                    }
                    $oul.stop().animate({left:-750*$idx},500);
                    $ospan.removeClass("active");
                    if($idx == $len-1){
                        $ospan.eq(0).addClass("active");
                    }else{
                        $ospan.eq($idx).addClass("active");
                    }
                }
                // setInterval(function(){
                //     $idx--;
                //     console.log($idx);
                //     if($idx == -1){
                //         $oul.css("left",""+-320*($len-1)+"px");
                //         $idx = $len-2;
                //     }
                //     $oul.animate({left:-320*$idx},1000);
                // },2500);
                
            })

//tab切换
var tabAll = document.getElementsByClassName("tab")[0];
           var tabHeader = tabAll.children[0].children;
           var tabContent = tabAll.children[1].children;
           tabHeader[0].className = "active";
           tabContent[0].style.display = "block";
           for(var i=0;i<tabHeader.length;i++){
                tabHeader[i].onmouseover = function(){
                    for(var j=0;j<tabHeader.length;j++){//
                        tabHeader[j].className = ""; 
                        tabContent[j].style.display = "none"; 
                    }
                    this.className = "active";
                    tabContent[this.getAttribute("idx")].style.display = "block"; 
                }
            }
            

//tab切换2
var tabAll = document.getElementsByClassName("tab1")[0];
           var tabHeader1 = tabAll.children[0].children;
           var tabContent1 = tabAll.children[1].children;
           tabHeader1[0].className = "active1";
           tabContent1[0].style.display = "block";
           for(var i=0;i<tabHeader1.length;i++){
                tabHeader1[i].onmouseover = function(){
                    for(var j=0;j<tabHeader1.length;j++){
                        tabHeader1[j].className = "";                        
                        tabContent1[j].style.display = "none";                        
                    }               
                    this.className = "active1";         
                    tabContent1[this.getAttribute("idx")].style.display = "block"; 
     
                     
                
                }
            }



var tabAll = document.getElementsByClassName("tab2")[0];
           var tabHeader2 = tabAll.children[0].children;
           var tabContent2 = tabAll.children[1].children;
           tabHeader2[0].className = "active2";
           tabContent2[0].style.display = "block";
           for(var i=0;i<tabHeader2.length;i++){         
                tabHeader2[i].onmouseover = function(){             
                    for(var j=0;j<tabHeader2.length;j++){
                        tabHeader2[j].className = "";                       
                        tabContent2[j].style.display = "none";                        
                    }              
                    this.className = "active2";                   
                    tabContent2[this.getAttribute("idx")].style.display = "block";                
                }
            }


var tabAll = document.getElementsByClassName("tab22")[0];
           var tabHeader22 = tabAll.children[0].children;       
           var tabContent22 = tabAll.children[1].children;
           tabHeader22[0].className = "active22";
           tabContent22[0].style.display = "block";      
           for(var i=0;i<tabHeader22.length;i++){
                tabHeader22[i].onmouseover = function(){               
                    for(var j=0;j<tabHeader22.length;j++){
                        tabHeader22[j].className = "";                       
                        tabContent22[j].style.display = "none";                       
                    }            
                    this.className = "active22";                   
                    tabContent22[this.getAttribute("idx")].style.display = "block";                 
                }
            }

var tabAll = document.getElementsByClassName("tab22Q")[0];
           var tabHeader22Q = tabAll.children[0].children;
           var tabContent22Q = tabAll.children[1].children;
           tabHeader22Q[0].className = "active22Q";
           tabContent22Q[0].style.display = "block";   
           for(var i=0;i<tabHeader22Q.length;i++){         
                tabHeader22Q[i].onmouseover = function(){               
                    for(var j=0;j<tabHeader22Q.length;j++){//
                        tabHeader22Q[j].className = "";                    
                        tabContent22Q[j].style.display = "none";                        
                    } 
                    this.className = "active22Q";                    
                    tabContent22Q[this.getAttribute("idx")].style.display = "block";              
                }
            }
var tabAll = document.getElementsByClassName("tab22QA")[0];
           var tabHeader22QA = tabAll.children[0].children;
           var tabContent22QA = tabAll.children[1].children;       
           tabHeader22QA[0].className = "active22QA";
           tabContent22QA[0].style.display = "block";
           for(var i=0;i<tabHeader22QA.length;i++){
                tabHeader22QA[i].onmouseover = function(){
                    for(var j=0;j<tabHeader22QA.length;j++){
                        tabHeader22QA[j].className = "";
                        tabContent22QA[j].style.display = "none";
                    }
                    this.className = "active22QA";
                    tabContent22QA[this.getAttribute("idx")].style.display = "block"; 
                }
            }

var tabAll = document.getElementsByClassName("tab22QAB")[0];
           var tabHeader22QAB = tabAll.children[0].children;
           var tabContent22QAB = tabAll.children[1].children;
           tabHeader22QAB[0].className = "active22QAB";
           tabContent22QAB[0].style.display = "block";
           for(var i=0;i<tabHeader22QAB.length;i++){
                tabHeader22QAB[i].onmouseover = function(){
                    for(var j=0;j<tabHeader22QAB.length;j++){//
                        tabHeader22QAB[j].className = "";
                        tabContent22QAB[j].style.display = "none";
                    }
                    this.className = "active22QAB";
                    tabContent22QAB[this.getAttribute("idx")].style.display = "block";             
                }
            }





             jQuery(function($){
                var $outputr = $("#outputr");
                var $oulr = $("#outputr ul");
                $('<li><img src="../img/renmen1.png"/></li>').appendTo($oulr);
                var $olir = $("#outputr ul li");
                var $oimgr = $("#outputr ul li img");
                var $lenr = $olir.length;
                var $idxr = 0;
                var $timer;
                $oulr.css("width",""+1198*$lenr+"px");

                // 新建小圆点
                $("<div/>").appendTo($outputr).addClass("pager");
                for(var i = 0;i < $lenr-1;i++){
                    $("<span/>").appendTo($(".pager")).html(i+1);
                }
                var $ospanr = $(".pager").children();

                $ospanr.eq(0).toggleClass("active");
                autoplayr();

                // 新建左右按键
                $("<div/>").appendTo($outputr).addClass("jiantour");
                $("<span/>").appendTo($(".jiantour")).html("<").addClass("left");
                $("<span/>").appendTo($(".jiantour")).html(">").addClass("right");

                // setInterval(function(){
                //     $idx++;
                //     if($idx >= $len){
                //         $idx = 0;
                //     }
                //     $oul.css("left",""+320*-$idx+"px");
                // }, 1000);
                
                //点击左右按钮切换图片
                $(".jiantour").on("click",".left",function(){
                    if($oulr.css("left").slice(0,-2)%1198==0){
                        // console.log($oul.css("left").slice(0,-2));
                        $idxr--;
                        showPicr();
                    }
                    

                });
                $(".jiantour").on("click",".right",function(){
                    if($oulr.css("left").slice(0,-2)%1198==0){
                        // console.log($oul.css("left").slice(0,-2));
                        $idxr++;
                        showPicr();
                    }
    
                    
                });


    //鼠标移入停止定时器,阻止冒泡，
                $output.on('mouseenter',()=>{
                    clearInterval($timer);
                }).on('mouseleave',()=>{
                    autoplay()
                })

                // $(".jiantou").on("mousemove","span",function(){
                //     clearInterval($timer);
                // }).on("mouseout","span",function(){
                //     autoplay();
                // })



                // 移入显示左右按钮
                // $output.on("mousemove",function(){
                //     $(".jiantou").css("display","block");
                //     return false;
                // }).on("mouseout",function(){
                //     $(".jiantou").css("display","none");
                //     return false;
                // });

                // 点击切换图片
                $(".pager").on("click","span",function(){
                    $idxr = $(this).html() - 1;
                    showPicr();    
                })

          
                
                // 开启定时器播放轮播
                function autoplayr(){
                    $timer = setInterval(function(){
                        $idxr++;
                        showPicr();
                    },1000);
                }
   
                
                // 呈现图片
                function showPicr(){
                    if($idxr == $lenr){
                        $oulr.css("left","0");
                        $idxr = 1;
                    }
                    if($idxr == -1){
                        $oulr.css("left",""+-1198*($lenr-1)+"px");
                        $idxr = $lenr-2;
                    }
                    $oulr.stop().animate({left:-1198*$idxr},500);
                    $ospanr.removeClass("active");
                    if($idxr == $lenr-1){
                        $ospanr.eq(0).addClass("active");
                    }else{
                        $ospanr.eq($idxr).addClass("active");
                    }
                }
                // setInterval(function(){
                //     $idx--;
                //     console.log($idx);
                //     if($idx == -1){
                //         $oul.css("left",""+-320*($len-1)+"px");
                //         $idx = $len-2;
                //     }
                //     $oul.animate({left:-320*$idx},1000);
                // },2500);
                
            })
        })


