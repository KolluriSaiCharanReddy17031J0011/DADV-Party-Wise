function stateChangeeee1(){
    
      var selectS=document.getElementById('selectS1');
      
      if(selectS.value == 'Chhattisgarh')
      {
        $.ajax({
          type:"GET",
          url:"data2/S26pw.csv",
          dataType:"text",
          success: function(data) {
            
            processData2(data);
          }

        });
        
      }

      if(selectS.value == 'MadhyaPradesh')
      {
        //console.log("a");
        $.ajax({
          type:"GET",
          url:"data2/S12pw.csv",
          dataType:"text",
          success: function(data) {
            
            processData2(data);
          }

        });
        
      }

      if(selectS.value == 'Mizoram')
      {
        $.ajax({
          type:"GET",
          url:"data2/S16pw.csv",
          dataType:"text",
          success: function(data) {
            processData2(data);
          }
        }); 
      }
      if(selectS.value == 'Rajasthan')
      {
        $.ajax({
          type:"GET",
          url:"data2/S20pw.csv",
          dataType:"text",
          success: function(data) {
            
            processData2(data);
          }

        }); 
      }
      if(selectS.value == 'Telangana')
      {
        $.ajax({
          type:"GET",
          url:"data2/S29pw.csv",
          dataType:"text",
          success: function(data) {
            
            processData2(data);
          }
        });
      
      }

    }

function processData2(data)
    {
    refinedata=data.split(/\r\n|\n/);
  //Constituency=[];
  party=[];
  votes=[];
  for(var i=0;i<refinedata.length;i++)
  {
    var refined =refinedata[i].split(',');
    //Constituency.push(refined[0]);
    party.push(refined[0]);
    votes.push(refined[1]);
  }
  var data = [
  {
    x: party,
    y: votes,
    marker : {  color:['red','blue','green','yellow','orange','grey'] },
    type: 'bar'
  }
];

Plotly.newPlot('myDiv3', data);
}

