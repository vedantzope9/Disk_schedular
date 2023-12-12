function scan(){
                            
    var dummy = document.querySelector(".track-sequence").value.split(" ");
    
    var ctrack = document.querySelector(".current-track").value; 
    

    var dir = document.querySelector(".direction-dropdown").value;
    ctrack = parseInt(ctrack); 
    var size = dummy.length;
    var disk_size = 200;

    var arr = new Array(size);
    for(var j=0; j<size; j++)
    {
        var z = dummy[j];
        arr[j] = parseInt(z);
    }
    console.log(arr);
    
    var left=[];
    var right=[];

    if(dir=="left")
    {
        left.push(0);
    }
    else if(dir=="right")
    {
        right.push(disk_size-1);
    }

    for (var i = 0; i < size; i++) 
    {
        if (arr[i] < ctrack)
            left.push(arr[i]);
        if (arr[i] > ctrack)
            right.push(arr[i]);
    }

    left.sort(function(a, b){return a - b});
    right.sort(function(a, b){return a - b});
    console.log("left->",left);
    console.log("right->",right);

    var cur_track;
    var run = 2;
    var seek_sequence = Array();
    while ((run) >0)
    {
        if (dir == "left") 
        {
            for (var i = left.length - 1; i >= 0; i--) 
            {
                cur_track = left[i];

                // appending current track to seek sequence
                seek_sequence.push(cur_track);
            }
            dir = "right";
        }
        else if (dir == "right") 
        {
            for (var i = 0; i < right.length; i++) 
            {   
                cur_track = right[i];

                // appending current track to seek sequence
                seek_sequence.push(cur_track);
            }
            dir = "left";
        }
        run=run-1;
    }

    dummy.unshift(ctrack);
    seek_sequence.unshift(ctrack);
    var seek=0;

    for(i=1;i<seek_sequence.length;i++)
    {
        seek=seek+Math.abs(seek_sequence[i]-seek_sequence[i-1]);
    }
    document.querySelector('.order').innerHTML ="Order of execution = " +seek_sequence;

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
                        { y: parseInt(seek_sequence[0],10) },
                        { y: parseInt(seek_sequence[1],10) },
                        { y: parseInt(seek_sequence[2],10) },
                        { y: parseInt(seek_sequence[3],10) },
                        { y: parseInt(seek_sequence[4],10) },
                        { y: parseInt(seek_sequence[5],10) },
                        { y: parseInt(seek_sequence[6],10) },
                        { y: parseInt(seek_sequence[7],10) },
                        { y: parseInt(seek_sequence[8],10) },
                        { y: parseInt(seek_sequence[9],10) },
                        { y: parseInt(seek_sequence[10],10) },
                        { y: parseInt(seek_sequence[11],10) },
                        { y: parseInt(seek_sequence[12],10) },
                        { y: parseInt(seek_sequence[13],10) },
                        { y: parseInt(seek_sequence[14],10) }
                                ]
        }]
    });
    chart.render();

    }
    var subButton1 = document.getElementById('addbtn');
    subButton1.addEventListener('click', cscan, false);

    
