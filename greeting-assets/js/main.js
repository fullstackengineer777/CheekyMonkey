$('.start-pages-btn').click(function(e){
    localStorage.clear();
    let content = $(this).data('content');
    // let link = $(this).attr('href');
    localStorage.setItem("contentstart", content);
    e.preventDefault();
    // window.location.href = link;
});

function saveStart(url, data){
    localStorage.clear(); //initialize localstorage
    localStorage.setItem("01-contentstart", data );
    window.location.href = url;

}
//https://usefathom.com/docs/script/script-advanced
//https://codecanyon.net/item/paymoney-secure-online-payment-gateway/22341650

$('.specialty > .query-item').click(function(e){
    let con = $(this).data('content');
    localStorage.setItem('02-specialty',con);
    $(".specialty").children("button").each(function(){
        $(this).removeClass("selected");        
    });
    $(".cta_btn").removeClass("disabled-link");
    $(this).addClass("selected");
});
function spec02_load(){
    $(".cta_btn").addClass("disabled-link");
    let spec02 = localStorage.getItem("02-specialty");
    console.log(spec02);
    $(".specialty").children("button").each(function(){
        var val = $(this).attr("data-content");
        if(val == spec02){
             $(this).addClass("selected");
             $(".cta_btn").removeClass("disabled-link");
        }
    });
}
$('.clientsnow > .query-item').click(function(e){
    let con = $(this).data('content');
    localStorage.setItem('04-clientsnow',con);
     $(".clientsnow").children("button").each(function(){
        $(this).removeClass("selected");        
    });
     $(this).addClass("selected");
    $(".cta_btn").removeClass("disabled-link");
});
function clients04_load(){
    $(".cta_btn").addClass("disabled-link");
    let spec04 = localStorage.getItem("04-clientsnow");
    // console.log(spec02);
    $(".clientsnow").children("button").each(function(){
        var val = $(this).attr("data-content");
        if(val == spec04){
             $(this).addClass("selected");
             $(".cta_btn").removeClass("disabled-link");
        }
    });
}
$('.clientsafter > .query-item').click(function(e){
    let con = $(this).data('content');
    localStorage.setItem('06-clientsafter',con);
     $(".clientsafter").children("button").each(function(){
        $(this).removeClass("selected");        
    });
    $(this).addClass("selected");
    $(".cta_btn").removeClass("disabled-link");
});
function clients06_load(){
    $(".cta_btn").addClass("disabled-link");
    let spec06 = localStorage.getItem("06-clientsafter");
    // console.log(spec02);
    $(".clientsafter").children("button").each(function(){
        var val = $(this).attr("data-content");
        if(val == spec06){
             $(this).addClass("selected");
             $(".cta_btn").removeClass("disabled-link");
        }
    });
} 
function saveBrand11(){
    var bname = $('#brandname').val();
    var bsave = bname.trim();
    localStorage.setItem('11-brandname',bsave);
    bname = localStorage.getItem('11-brandname');
    if(bname == ""){
        $(".cta_btn").addClass("disabled-link");
    }else{
        $(".cta_btn").removeClass("disabled-link");
    }
}

function brand11_load(){
    $(".cta_btn").addClass("disabled-link");
    let brand11 = localStorage.getItem("11-brandname");
    if(brand11 != ""){
        $("#brandname").val(brand11);
        $(".cta_btn").removeClass("disabled-link");
    }
}

function productIpt(){
    let con = $('#sell-product-ipt').val();
    localStorage.setItem("15-sell-product-title", con.trim());
    let pro15 = localStorage.getItem("15-sell-product-title");
    
    if( pro15 != ""){
        $(".cta_btn").removeClass("disabled-link");
    }else{
        $(".cta_btn").addClass("disabled-link");
    }
} 
function productTxt(){
    let con = $('#sell-product-txt').val();
    localStorage.setItem("15-sell-product-description", con.trim());

}

function sell15_load(){
    $(".cta_btn").addClass("disabled-link");
    let pro15 = localStorage.getItem("15-sell-product-title");   

    if(null != pro15){
         $(this).addClass("selected");
         $(".cta_btn").removeClass("disabled-link");
    }  
    $("#sell-product-ipt").val(pro15);
    let des15 = localStorage.getItem("15-sell-product-description");
    $("#sell-product-txt").val(des15);
}
function cost16(){
    let lh = $("#cost-low-high").val();
    localStorage.setItem("16-cost-low-high", lh.trim());
    if( lh != ""){
        $(".cta_btn").removeClass("disabled-link");
    }else{
        $(".cta_btn").addClass("disabled-link");
    }
}
function cost16_load(){
    $(".cta_btn").addClass("disabled-link");
    let cost16 = localStorage.getItem("16-cost-low-high");  
    if(null != cost16){
         $(this).addClass("selected");
         $(".cta_btn").removeClass("disabled-link");
    }  
    $("#cost-low-high").val(cost16);
}
function specialOffer17(){
    let so = $('#special-offer').val();
    localStorage.setItem("17-com-special-offer", so.trim());

}
function offer17_load(){
    $(".cta_btn").addClass("disabled-link");
    
    let so = localStorage.getItem("17-com-special-offer");
    $("#special-offer").val(so);

    let arr17 = localStorage.getItem("17-company-sell").split(',');

    $(".usage-time-step__conoptions").first().children("button").each(function(){
        var val = $(this).attr("data-content");
        if(arr17.includes(val , 0)){
             $(this).addClass("selected");
             $(".cta_btn").removeClass("disabled-link");
        }
    });
    $(".usage-time-step__conoptions").last().children("button").each(function(){
        var val = $(this).attr("data-content");
        if(arr17.includes(val , 0)){
             $(this).addClass("selected");
             $(".cta_btn").removeClass("disabled-link");
        }
    });
}

function direction12_load(){
    $(".cta_btn").addClass("disabled-link");
    let direction12 = localStorage.getItem("12-contentsell");
    $(".usage-time-step__options").children("button").each(function(){
        var val = $(this).attr("data-content");
        if(val == direction12){
             $(this).addClass("selected");
             $(".cta_btn").removeClass("disabled-link");
        }
    });
}
$('.sell-btn').click(function(){

    if ( document.URL.includes("12_direction") ) {
        let content = $(this).data('content');
        localStorage.setItem("12-contentsell", content);

        $(".usage-time-step__options").children("button").each(function(){
            $(this).removeClass("selected");        
        });
        $(".cta_btn").removeClass("disabled-link");
        $(this).addClass("selected");
    }    
    if ( document.URL.includes("19_way")) {       
        let arr = [];
        //arr = localStorage.get("industry");
        let ele = $(this).data('content');
        let oldArr = null;
        oldArr = localStorage.getItem("19-way");       
        if(oldArr != null)
            arr = oldArr.split(',');
        if($(this).hasClass('selected')){
            $(this).removeClass('selected');
            $(this).blur();

            //get clicked button data        
            var filtered = arr.filter(function(value, index, arr){
                return value != ele;
            });        
            localStorage.setItem('19-way', filtered);  
            let arr19 = localStorage.getItem("19-way");    
            if(arr19.length == 0)
                 $(".cta_btn").addClass("disabled-link");

        } else {
            $(this).addClass('selected');   
            $(".cta_btn").removeClass("disabled-link");       
            if(arr.indexOf(ele) < 0)
            {
                console.log("arr => ", arr);
                arr.push(ele);
            }
            localStorage.setItem('19-way', arr);           
        }
    }    

});
function iptStrengths(){
    let con = $("#company-strengths").val();
    localStorage.setItem("18-company-strengths",con.trim());
}
function strength18_load(){
    $(".cta_btn").addClass("disabled-link");
    let str18 = localStorage.getItem("18-company-strengths");
    $("#company-strengths").val(str18);

    let arr18 = localStorage.getItem("18_strengths");

    $(".strengths").children("button").each(function(){
        var val = $(this).attr("data-content");
        if(arr18.includes(val , 0)){
             $(this).addClass("selected");
             $(".cta_btn").removeClass("disabled-link");
        }
    });
}
function way19_load(){
    $(".cta_btn").addClass("disabled-link");

    let arr19 = localStorage.getItem("19-way");
    $(".usage-time-step__options").children("button").each(function(){
        var val = $(this).attr("data-content");
        if(arr19.includes(val , 0)){
             $(this).addClass("selected");
             
        }
    });
}
function iptRegions(){
    let con = $("#regions-txt").val();
    localStorage.setItem("20-regions-txt", con.trim());

    con = localStorage.getItem("20-regions-txt");
    if("" == con)
        $(".cta_btn").addClass("disabled-link");
    else
        $(".cta_btn").removeClass("disabled-link");

}
function region20_load(){
    $(".cta_btn").addClass("disabled-link");
    let reg20 = localStorage.getItem("20-regions-txt");
    if(reg20 == ""){        
        $(".cta_btn").addClass("disabled-link");
    }else{
        $("#regions-txt").val(reg20);
        $(".cta_btn").removeClass("disabled-link");        
    }

}
function iptTarget(){
    let con = $("#target-txt").val();
    localStorage.setItem('24-target', con.trim());
    con = localStorage.getItem("24-target");
    if("" == con)
        $(".cta_btn").addClass("disabled-link");
    else
        $(".cta_btn").removeClass("disabled-link");
}
function target24_load(){
    $(".cta_btn").addClass("disabled-link");
    let tar24 = localStorage.getItem("24-target");
    if(tar24 == ""){        
        $(".cta_btn").addClass("disabled-link");
    }else{
        $("#target-txt").val(tar24);
        $(".cta_btn").removeClass("disabled-link");        
    }

}

// $("#email-ipt").focusout(function(){
//     let mail = $(this).val();
//     localStorage.setItem("31-email", mail.trim());
// });
function saveEmail(){
    // alert("keyup");
    let mail = $("#email-ipt").val();
    localStorage.setItem("31-email", mail.trim());
}
function industry13_load(){
    $(".cta_btn").addClass("disabled-link");
    let arr13 = localStorage.getItem("13-industry").split(',');

    $(".query-content-btn-board").children("button").each(function(){
        var val = $(this).attr("data-content");
        if(arr13.includes(val , 0)){
             $(this).addClass("selected");
             $(".cta_btn").removeClass("disabled-link");
        }
    });
}
function interests25_load(){
    $(".cta_btn").addClass("disabled-link");
    let arr25 = localStorage.getItem("25-interests");

    $(".query-content-btn-board").children("button").each(function(){
        var val = $(this).attr("data-content");
        if(arr25.includes(val , 0)){
             $(this).addClass("selected");
             $(".cta_btn").removeClass("disabled-link");
        }
    });
}
$('.query-content-btn-board > .query_sel_btn').click(function(e){
    // var border = $(this).css('border-color');
    let arr = [];
    //arr = localStorage.get("industry");
    let ele = $(this).data('content');
    let oldArr = null;
    let flag = 1
    if ( document.URL.includes("13_industry") ){
      oldArr = localStorage.getItem("13-industry");
      flag = 13;
    } 
    if(document.URL.includes("25_interests") ){
      oldArr = localStorage.getItem("25-interests");
      flag = 25;
    }

    if(oldArr != null)
        arr = oldArr.split(',');

    console.log("arr init => ", arr);
    if($(this).hasClass('selected'))
    {   
        $(this).removeClass('selected');
        $(this).blur();


        //get clicked button data        
        if(flag == 13){            
            var filtered = arr.filter(function(value, index, arr){
                return value != ele;
            });        
            localStorage.setItem('13-industry', filtered);  

            let arr13 = localStorage.getItem('13-industry');
            if(arr13.length == 0)
                $(".cta_btn").addClass("disabled-link");
        }
        if(flag == 25){            
            var filtered = arr.filter(function(value, index, arr){
                return value != ele;
            });        
            localStorage.setItem('25-interests', filtered);    
            let arr25 = localStorage.getItem('25-interests');
            if(arr25.length == 0)
                $(".cta_btn").addClass("disabled-link");    
        }

    } else {
        
        $(this).addClass('selected');
        $(".cta_btn").removeClass("disabled-link");         
        if(arr.indexOf(ele) < 0 && flag == 13)
        {
            arr.push(ele);
            localStorage.setItem('13-industry', arr);
        }
        if(arr.indexOf(ele) < 0 && flag == 25)
        {
            arr.push(ele);
            localStorage.setItem('25-interests', arr);
        }
    }

    // alert(border);
});

$('.usage-time-step__conoptions > .usage-time-step__option').click(function(e){
    let arr = [];
    //arr = localStorage.get("industry");
    let ele = $(this).data('content');
    let oldArr = null;
    let flag = 1; //decide if multiselect or not
    if ( document.URL.includes("17_offer")) {       
        oldArr = localStorage.getItem("17-company-sell");       
        if(oldArr != null)
            arr = oldArr.split(',');
        flag = 17;
    }    

    if($(this).hasClass('selected')){
        $(this).removeClass('selected');
        $(this).blur();
        if(flag == 17){
            //get clicked button data        
            var filtered = arr.filter(function(value, index, arr){
                return value != ele;
            });        
            localStorage.setItem('17-company-sell', filtered);  
            let arr17 = localStorage.getItem("17-company-sell");
            console.log("len = ", arr17.length);
            if(arr17.length == 0)
                 $(".cta_btn").addClass("disabled-link");

        }
    } else {
        $(this).addClass('selected');
        if(flag == 17){
            if(arr.indexOf(ele) < 0)
            {
                arr.push(ele);
                console.log("arr => ", arr.length);
            }
            localStorage.setItem('17-company-sell', arr);
        }
        $(".cta_btn").removeClass("disabled-link");
    }
});
$('.query-main-conboard > .query-item').click(function(e){

    let arr = [];
    //arr = localStorage.get("industry");
    let ele = $(this).data('content');
    console.log("18con = ", ele);
    let oldArr = null;
    let flag = 0;
    if ( document.URL.includes("18_strengths")) {       
        oldArr = localStorage.getItem("18_strengths");       
        if(oldArr != null)
            arr = oldArr.split(',');
        flag = 18; //decide if multiselect or not
    }
    if ( document.URL.includes("21_gender")) {       
        oldArr = localStorage.getItem("21_gender");       
        if(oldArr != null)
            arr = oldArr.split(',');
        flag = 21; //decide if multiselect or not
    }
    if ( document.URL.includes("22_age")) {       
        oldArr = localStorage.getItem("22_age");       
        if(oldArr != null)
            arr = oldArr.split(',');
        flag = 22; //decide if multiselect or not
    }

    if($(this).hasClass('selected')){
        $(this).removeClass('selected');
        $(this).blur(); 
        if(flag == 18){
            //get clicked button data        
            var filtered = arr.filter(function(value, index, arr){
                return value != ele;
            });        
            localStorage.setItem('18_strengths', filtered); 
            let arr18 = localStorage.getItem("18_strengths");
            if(arr18.length == 0)
                 $(".cta_btn").addClass("disabled-link");    
        }
        if(flag == 21){
            //get clicked button data        
            var filtered = arr.filter(function(value, index, arr){
                return value != ele;
            });        
            localStorage.setItem('21_gender', filtered);  
            let arr21 = localStorage.getItem("21_gender");
            if(arr21.length == 0)
                 $(".cta_btn").addClass("disabled-link");    
        }
        if(flag == 22){
            //get clicked button data        
            var filtered = arr.filter(function(value, index, arr){
                return value != ele;
            });        
            localStorage.setItem('22_age', filtered);
            let arr22 = localStorage.getItem("22_age");
            if(arr22.length == 0)
                 $(".cta_btn").addClass("disabled-link");       
        }
    } else {
        $(this).addClass('selected');  
        $(".cta_btn").removeClass("disabled-link");      
        if(flag == 18){
            if(arr.indexOf(ele) < 0)
            {
                console.log("arr => ", arr);
                arr.push(ele);
            }
            localStorage.setItem('18_strengths', arr);   
        }
        if(flag == 21 && arr.indexOf(ele) < 0){             
            arr.push(ele);            
            localStorage.setItem('21_gender', arr);   
        }
        if(flag == 22 && arr.indexOf(ele) < 0){             
            arr.push(ele);            
            localStorage.setItem('22_age', arr);   
        }
    }
});

$('.query-content-btn-conboard > .query_sel_btn').click(function(e){

    var ele = $(this).data('content');
    if($(this).hasClass('selected')){
        $(this).removeClass('selected');
        $(this).blur(); 
    } else {
        $(this).addClass('selected');
    }
});

$('.pay-text__more').click(function(e){
    $('.pay-text__hide').show();
    $('.pay-text__more').hide();   
    // $('.pay-text').addClass('active');
    $('.pay-text').css('height','auto');
    $('.pay-text').css('overflow','visible');

});

$('.pay-text__hide').click(function(e){
    $('.pay-text__hide').hide();
    $('.pay-text__more').show();    
    $('.pay-text').css('height','45px');
    $('.pay-text').css('overflow','hidden');

});

    

$('.signup-form__cta').click(function(e){
   
    let _01 = localStorage.getItem("01-contentstart");
    let _02 = localStorage.getItem("02-specialty");
    let _04 = localStorage.getItem("04-clientsnow");
    let _06 = localStorage.getItem("06-clientsafter");
    let _11 = localStorage.getItem("11-brandname");
    let _12 = localStorage.getItem("12-contentsell");
    let _13 = localStorage.getItem("13-industry");
    let _15_1 = localStorage.getItem("15-sell-product-description");
    let _15_2 = localStorage.getItem("15-sell-product-title");
    let _16 = localStorage.getItem("16-cost-low-high");
    let _17_1 = localStorage.getItem("17-company-sell");
    let _17_2 = localStorage.getItem("17-com-special-offer");
    let _18_1 = localStorage.getItem("18_strengths");
    let _18_2 = localStorage.getItem("18-company-strengths");    
    let _19 = localStorage.getItem("19-way");
    let _20 = localStorage.getItem("20-regions-txt");
    let _21 = localStorage.getItem("21_gender");
    let _22 = localStorage.getItem("22_age");
    let _24 = localStorage.getItem("24-target");
    let _25 = localStorage.getItem("25-interests");
    let _31 = localStorage.getItem("31-email");

    $.ajax({
        type:"POST",
        url: "./00_pages.php",
        data: {
            _01: _01,
            _02: _02,
            _04: _04,
            _06: _06,
            _11: _11,
            _12: _12,
            _13: _13,
            _15_1: _15_1,
            _15_2: _15_2,
            _16: _16,
            _17_1: _17_1,
            _17_2: _17_2,
            _18_1: _18_1,
            _18_2: _18_2,
            _19: _19,
            _20: _20,
            _21: _21,
            _22: _22,
            _24: _24,
            _25: _25,
            _31: _31
        },
        success: function(res){
 
            window.location.href = "32_trial.php";
           if(res == "OK"){
                alert(res + "!!!");
                window.location.href = "32_trial.php";
                console.log("signup response = ", res);
           }
           if(res == "Failure"){            
                alert("failed to register all the selection data");
                // window.location.href = "";
           }
       
        },
        // timeout: 3000

    });
   // alert("dddd");
});

function thanks(){
      
      let mail = localStorage.getItem("31-email");
      $.ajax({
        type:"POST",
        url:"./00_pages.php",
        data:{
          email: mail,
          mode:"payment"
        },
        success: function(res){
          // window.location.href = "../33_thankyou.html";

          if(res == "OK")
            alert("payment success");
          if(res == "Failure")
            alert("payment failure");
        }
      });
}

// 01-contentstart Sales   
// 02-specialty    month   
// 04-clientsnow   50-100  
// 06-clientsafter 25-50   
// 11-brandname    fedex   
// 12-contentsell  products    
// 13-industry Design&Renovation,Sports&Fitness    
// 15-sell-product-description receiver    
// 15-sell-product-title   computer    
// 16-cost-low-high    200 
// 17-company-sell discounted-purcase,gift-with-purchase,install-payment   
// 18_strengths    In-house-production,Fast-shipping   
// 19-way  products,services   
// 20-regions-txt  London  
// 21_gender   Man,Woman   
// 22_age  25-35,18-25 
// 24-target   OK  
// 25-interests    Sports-Fitness,Technology   
// 31-email    coindevmentor9211@gmail.com



