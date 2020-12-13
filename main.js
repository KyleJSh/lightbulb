function light(value){
  var pic;
    if(value == 0)
    {
    pic="/images/lightbulb_off.png";
    }
    else
    {
      pic="/images/lightbulb_on.png";
    }
    document.getElementById('bulb').src=pic;
}