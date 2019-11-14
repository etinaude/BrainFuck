function fast() {
  sheet=SpreadsheetApp.getActiveSpreadsheet()
  sheet.getRange('B1:CU1').setValue("fast");
  sheet.getRange('B1:CU1').setBackground("LightGrey");
  var inp = sheet.getRange("B3").getValue()
  code = sheet.getRange("B2").getValue()
  out = ""     //output value
  opPtr =-1    //operationg pointer
  i=0
  data = new Array(100)
  while(i<100){
    data[i]=0
    i++
  }
  data_ptr =0 
  while(code.length>opPtr){
    opPtr++
    op = code.substring(opPtr,opPtr+1)
    if(opPtr >code.length){break}
    
    switch(op) {
      //--------------index move--------------
      case ">":
        data_ptr++
        break;
      case "<":
        try{
          if(data_ptr==0){
            continue}
          data_ptr--
        }catch(e){
          out.setValue("TOO LOW")
        }  
        break;
      //--------------change data--------------
      case "+":
        data[data_ptr]++
        break;
      case "-":
        if(data[data_ptr]<0){
         
        }else{
          data[data_ptr]--
        }
        break;
      //--------------input output--------------
      case ".":
        out = out + ""+ String.fromCharCode(data[data_ptr])
        sheet.getRange("B5").setValue(inp)
        break;
        
      case ",":
        if(inp.length==0){
          break
        }
        data[data_ptr] = ""+inp.charCodeAt(0)
        inp = inp.substring(1,inp.length)
        break;
        //--------------logic--------------
        case "[":
        try{
            if (data[data_ptr] ==0){ 
              opPtr = code.indexOf("]",opPtr)
            }
          }catch(e){
            out.setValue("No ]") 
          }
        break;
        case "]":
        try{
          if(data[data_ptr] !=0){
            opPtr = code.lastIndexOf("[",opPtr)
          }
        }catch(e){
            out.setValue(e) 
          }
        break; 
    }   
  }
 sheet.getRange('G3').setValue(out)
}
