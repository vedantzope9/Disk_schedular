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
			gridThickness: 0.5
		},
		axisX: {
			minimum: 0,
			maximum: 200, 
			interval: 10,
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

var subButton2 = document.getElementById('addbtn');
subButton2.addEventListener('click', graph, false);