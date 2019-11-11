function myFunction() {
  sheet=SpreadsheetApp.getActiveSpreadsheet()
  var cell = sheet.getRange('B1');
  sheet.getRange('B1:CU1').setValue(0);
  sheet.getRange('c1:CU1').setBackground("LightGrey");
  sheet.getRange('B1').setBackground("Red")
  var out = sheet.getRange('G3');
  sheet.getRange("B5").setValue(sheet.getRange("B3").getValue())
  var inp = sheet.getRange("B5")
  code = sheet.getRange("B2").getValue()
  out.setValue("")
  opPtr =-1
  
  
  while(code.length>opPtr){
    if(cell.getValue()=="#NUM!"){
      cell.setValue("0")}
    opPtr++
    op = code.substring(opPtr,opPtr+1)
    if(opPtr >code.length){
      break}
    
    switch(op) {
      //--------------index move--------------
      case ">":
        cell.setBackground("lightGrey")
        cell = cell.offset(0, 1)
        cell.setBackground("red")
        break;
      case "<":
        try{
          if(cell==sheet.getRange('A1')){
            continue}
          if(cell.getValue()=="Data:"){
          out.setValue("ERROR")
          return
          }
        cell.setBackground("LightGrey ")
        cell = cell.offset(0, -1)
        cell.setBackground("red")
        }catch(e){
          out.setValue("TOO LOW")
        }  
        break;
      //--------------change data--------------
      case "+":
        cell.setValue((cell.getValue()+1))
        break;
      case "-":
        if(cell.getValue()<0){
          //out.setValue("Below 0")
        }else{
          cell.setValue((cell.getValue()-1))
        }
        break;
      //--------------input output--------------
      case ".":
        out.setValue(out.getValue()+""+(String.fromCharCode(cell.getValue())))
        break;
      case ",":
        if(inp.getValue().length==0){
          break
        }
        cell.setValue(inp.getValue().charCodeAt(0))
        inp.setValue(inp.getValue().substring(1,inp.getValue().length))
        break;
      //--------------logic--------------
      case "[":
          try{
            if (cell.getValue() ==0){ 
            opPtr = code.indexOf("]",opPtr)
            }
          }catch(e){
            out.setValue("No ]") 
          }
        break;
       
      case "]":
        try{
          if(cell.getValue() !=0){
              opPtr = code.lastIndexOf("[",opPtr)
          }
          }catch(e){
            out.setValue(e) 
          }
        break;
        
    }
    if(sheet.getRange('A1').getValue() != "Data:"||cell==sheet.getRange('CT1')||sheet.getRange('CU1').getValue()!=0){
      out.setValue("ERROR")
      break
    }else if(sheet.getRange('A1') == cell){
      cell = cell.offset(0, 1)
    
    }
      
    
  }
}
