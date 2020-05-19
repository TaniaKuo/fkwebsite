    // //密碼開關js
    // //这里使用最原始的js语法实现，可对应换成jquery语法进行逻辑控制
    var demoImg = document.getElementById("psw_img");
    var demoInput = document.getElementById("demo_input");
    //隐藏text block，显示password block
    function hideShowPsw() {
        if (demoInput.type === "password") {
            demoInput.type = "text";
            demoImg.src = "images/novisible.png";
        } else {
            demoInput.type = "password";
            demoImg.src = "images/visible.png";
        }
    }
