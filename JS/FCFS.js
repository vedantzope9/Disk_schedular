function fcfs(){
                            
    var dummy = document.querySelector(".track-sequence").value.split(" ");
    
    var ctrack = document.querySelector(".current-track").value;   

    dummy.unshift(ctrack);

    var seek=0;

    for(i=1;i<dummy.length;i++)
    {
        seek=seek+Math.abs(dummy[i]-dummy[i-1]);
    }
    document.querySelector('.order').innerHTML ="Order of execution = " +dummy;

    document.querySelector('.time').innerHTML ="Total Seek Time = "+seek;

    var chart = new CanvasJS.Chart("chartContainer", {
            
            
        animationEnabled: true,
        animationDuration: 5000,
        theme: "dark1", //"light1", "dark1", "dark2"
        title: { 
            text: "", 
            backgroundColor: "#2F303A",
            fontSize: 16,
            fontFamily: "sans-serif",
            fontWeight: "medium",				
            horizontalAlign: "left"
        },
        axisY: { 
            includeZero: false,	
            labelAngle: 0,		
            gridThickness: 0.5
        },
        axisX: {
            // minimum: 0,
            // maximum: 200, 
            interval: 1,
            gridThickness: 0.5
        },
        data : [{
            type: "line",
            dataPoints: [   
                        { y: parseInt(dummy[0],10) },
                        { y: parseInt(dummy[1],10) },
                        { y: parseInt(dummy[2],10) },
                        { y: parseInt(dummy[3],10) },
                        { y: parseInt(dummy[4],10) },
                        { y: parseInt(dummy[5],10) },
                        { y: parseInt(dummy[6],10) },
                        { y: parseInt(dummy[7],10) },
                        { y: parseInt(dummy[8],10) },
                        { y: parseInt(dummy[9],10) },
                        { y: parseInt(dummy[10],10) },
                        { y: parseInt(dummy[11],10) },
                        { y: parseInt(dummy[12],10) },
                        { y: parseInt(dummy[13],10) },
                        { y: parseInt(dummy[14],10) }
                                ]
        }]
    });
    chart.render();


    }

    var subButton1 = document.getElementById('addbtn');
    subButton1.addEventListener('click', fcfs, false);
 
