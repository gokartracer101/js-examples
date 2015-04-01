window.onload=function(){
    now = new Date();
    var hours = now.getHours()
    var minutes = now.getMinutes()

    if (minutes < 10)
    minutes = "0" + minutes

    var suffix = "AM";
    if (hours >= 12) {
    suffix = "PM";
    hours = hours - 12;
    }
    if (hours == 0) {
    hours = 12;
    }
    jQuery('#input_2_22_1').val(hours);
    jQuery('#input_2_22_2').val(minutes);
    if (suffix === "AM") {
        jQuery('#input_2_22_3').val('am');
    } else {
        jQuery('#input_2_22_3').val('pm');
    }
         

    jQuery(document).on('blur', '#input_2_15_1', function(){
    jQuery('#input_2_7').attr('value', '');
    jQuery('#input_2_28').html("$ 0.00");
    jQuery('#input_2_29').html("$ 0.00");
    jQuery('.ginput_total_2').html("$ 0.00");
});


jQuery(document).on('blur', '#input_2_15_1, #input_2_7', function(){
        //get CC number
        var b = document.getElementById('input_2_15_1');
        //convert to string
        var n = b.value.toString();
        //get first two numbers
        var num1 = n.split("");
        var num2 = n.split("",2);

        //VISA
        if (num1[0] == 4){
            jQuery("#input_2_30").val("1.5");
        }
        //MASTERCARD
        else if (num1[0] == 5) {
            if (num2[1] >=1 && num2[1] <=5) {
                jQuery("#input_2_30").val("1.5");
            }
        }
        //AMEX
        else if (num1[0] == 3 ) {
            if (num2[1] == 4 || num2[1] ==7){
                jQuery("#input_2_30").val("2.9");
            }
        }
  });
};
