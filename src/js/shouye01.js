
        document.addEventListener("DOMContentLoaded",function(){
            jQuery(function($){
                var $output = $("#outputlubo");
                var $oul = $("#outputlubo ul");
                $('<li><img src="../img/mv1.jpg"/></li>').appendTo($oul);
                var $oli = $("#outputlubo ul li");
                var $oimg = $("#outputlubo ul li img");
                var $len = $oli.length;
                var $idx = 0;
                var $timer;
                $oul.css("width",""+750*$len+"px");

                // 新建小圆点
                $("<div/>").appendTo($output).addClass("page");
                for(var i = 0;i < $len-1;i++){
                    $("<span/>").appendTo($(".page")).html(i+1);
                }
                var $ospane = $(".page").children();

                $ospane.eq(0).toggleClass("active");
                autoplay();

                // 新建左右按键
                $("<div/>").appendTo($output).addClass("jiantou");
                $("<span/>").appendTo($(".jiantou")).html("<").addClass("left");
                $("<span/>").appendTo($(".jiantou")).html(">").addClass("right");

                // setInterval(function(){
                //     $idx++;
                //     if($idx >= $len){
                //         $idx = 0;
                //     }
                //     $oul.css("left",""+320*-$idx+"px");
                // }, 1000);
                
                //点击左右按钮切换图片
                $(".jiantou").on("click",".left",function(){
                    if($oul.css("left").slice(0,-2)%750==0){
                        // console.log($oul.css("left").slice(0,-2));
                        $idx--;
                        showPica();
                    }
                });
                $(".jiantou").on("click",".right",function(){
                    if($oul.css("left").slice(0,-2)%750==0){
                        // console.log($oul.css("left").slice(0,-2));
                        $idx++;
                        showPica();
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
                $(".page").on("click","span",function(){
                    $idx = $(this).html() - 1;
                    showPica();    
                })

        
                
                // 开启定时器播放轮播
                function autoplay(){console.log(111)
                    $timer = setInterval(function(){
                        $idx++;
                        showPica();
                    },1000);

                }
              
                
                // 呈现图片
                function showPica(){
                    if($idx == $len){
                        $oul.css("left","0");
                        $idx = 1;
                    }
                    if($idx == -1){
                        $oul.css("left",""+-750*($len-1)+"px");
                        $idx = $len-2;
                    }
                    $oul.stop().animate({left:-750*$idx},500);
                    $ospane.removeClass("active");
                    if($idx == $len-1){
                        $ospane.eq(0).addClass("active");
                    }else{
                        $ospane.eq($idx).addClass("active");
                    }
                }
                // setInterval(function(){
                //     $idx++;
                //     console.log($idx);
                //     if($idx == -1){
                //         $oul.css("left",""+320*($len-1)+"px");
                //         $idx = $len+2;
                //     }
                //     $oul.animate({left:+320*$idx},1000);
                // },2500);
                
            })



        // var timer;
        // for(var i=0;i<1000;i++){
        //     document.write("哈哈哈哈<br>")
        // }

        var totop = document.getElementById("totop");// 在js中获取页面元素，返回的都是对象
        // 1.滚动条滚动时，判断当页面滚动到1000px时，出现totop
        window.onscroll =  function(){
            if(window.scrollY >= 1000){
                totop.style.display = "block";
            }else if(window.scrollY < 1000){
                // totop.style.display = "none";
            }
        }


        // var n = 1;
        //2.点击totop。每隔几秒获取页面当前滚动位置scrollY，对其进行自减，再利用scrollTo()滚到对应的位置
        // * 事件开启定时器，记住每次开启定时器之前一定要清除定时器。
        totop.onclick = function(){
            clearInterval(totop.timerd);
            totop.timerd = setInterval(function(){
                // n++;
                // console.log(n);
                var top = window.scrollY;
                top -= 1000;
                if(top <= 0){
                    clearInterval(totop.timerd);
                }
                // window.scrollTo(0,top);
                window.scrollBy(0,-1000);
            },30)
        }





            var getCodeBtn = document.getElementById("getCodeBtn");
            var kuan1=document.getElementById("kuan1");
            var kuan2=document.getElementById("kuan2");
            var shou=document.getElementById("shou");
            var niu=document.getElementById("niu");
            var randomMa;
        function getMa(){
             randomMa = ""+ parseInt(Math.random()*10) +  parseInt(Math.random()*10) +parseInt(Math.random()*10) + parseInt(Math.random()*10);
            getCodeBtn.value = randomMa;
        }

        //2.点击获取验证码，生成一个随机验证码（4位1000-9999）(0-9 4位)
        getCodeBtn.onclick = getMa;

 niu.onclick = function(){
            var _code = kuan1.value;
            var _codr = kuan2.value;

            if(_codr == randomMa &&_code.length ==11){
                  location.href="../html/健一网.html";
            }else if(_code.length !=11){;
                     shou.innerHTML=("!请输入正确手机格式");
                      // return;
            }else if(_codr!=randomMa){;
                     shou.innerHTML=("!请输入正确验证码");
                      // return;
            }else{
                // alert("您的验证码有误");
                getMa();
                 return;
            }

            // if()
        }





        })
  