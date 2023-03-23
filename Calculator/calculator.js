function delChar(input){
    input.value=input.value.substring(0,input.value.length-1);
}
function chkValid(value) {
    for(var i=0; i<value.length; i++)
    {
        var char= value.substring(i,i+1);
        if(char<0||char>9){
            if(char!='+'||char!='-'||char!='*'||char!='/'||char!='='||char!=')'||char!='(')
            {
                alert("Invalid Entry");
                return false;
            }
        }

    }
    return true;
}
function exp(input) {
    for(var i=0; i<input.value.length; i++)
    {
        var char=input.value.substring(i,i+1);
        if(char<0||char>9)
        input.value="invalid Entry";
    }
    input.value=Math.exp(input.value);
}
function addChar(input,character) {
    if(input.value=="NULL"||input.value==0)
    input.value=character;
    else
    input.value+= character;
}
function ln(input) {
input.value= Math.log(input.value);
}
function sin(input) {
    input.value= Math.sin(input.value);
    }
    function cos(input) {
        input.value= Math.cos(input.value);
        }
        function tan(input) {
            input.value= Math.tan(input.value);
            }
            function sqrt(input) {
                input.value= Math.sqrt(input.value);
                }
                function sq(input) {
                    input.value= eval(input.value)*eval(input.value);
                    }
                    function equal(input) {
                        input.value=eval(input.value)
                    }