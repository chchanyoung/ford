$(document).ready(function(){
    $('#color_bt li').click(function(){
     $(this).children('.color_bt_click').show()
     $(this).siblings('li').children('.color_bt_click').hide()
     colorBtNum = $(this).index()+1
     $('#color_car').attr({'src':'color/car' + colorBtNum +  '.webp'})
     color_text = $(this).children('.color_bt_bg').attr('alt')
     $('#color_box p').text( color_text)
    })
    vr_num = 1
    $('#vr_next_btn').click(function(){
     vr_num = vr_num + 1
     if( vr_num > 36 ){vr_num=1}
     $('#vr_car').attr({'src':'vr/'+vr_num+'.jpg'})
    })
    $('#vr_prev_btn').click(function(){
     vr_num = vr_num - 1
     if( vr_num < 1 ){vr_num=36}
     $('#vr_car').attr({'src':'vr/'+vr_num+'.jpg'})
    })
 })