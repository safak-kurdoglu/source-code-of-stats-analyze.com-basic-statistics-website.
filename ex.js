function toggleDisp(elem){
	document.getElementsByClassName(elem)[0].classList.toggle("disp");
}



function changeDisplay(div1, div2, func, ev, ev2, cont, p, res, n) {
    document.getElementById(ev2).value = "";
	document.getElementById(div1).style.display = "block";
	document.getElementById(div2).style.display = "none";
	document.getElementById(p).innerHTML = "";

    document.getElementById(cont).innerHTML = "";
    if(window.innerWidth < 1250){
    	document.getElementsByClassName(res)[n].classList.remove("disp");

    }
    document.getElementById(ev).addEventListener("keyup", function() {
        window[func]();
    });
}


function draw(dps, cont, txt){
    var chart = new CanvasJS.Chart(cont, {
		exportEnabled: true,
		animationEnabled: true,
		title:{
			text: txt
		},		
		axisX: {
			title:"zval"
		},
		axisY: { 
		},
		data: [{
			type: "rangeSplineArea",
	
			dataPoints: dps
		}]
	});
	chart.render();
}



function zgraph(m, se, z, chCont, txt){
	var dps = [];
	var prob = 0;

    var mn = parseFloat(m);
	if(z>0){
		for(var xV=-6; xV<z; xV+=0.001){
        	var xsq = Math.pow(xV, 2);	
        	var yV = (1/Math.pow(2*Math.PI, 0.5))*Math.pow(Math.E,-(xsq/2));	
            dps.push({x:(xV*se+mn), y:[yV,yV]});
		}

        for(var xV=z; xV<=6; xV+=0.001){
        	var xsq = Math.pow(xV, 2);
        	yV = (1/Math.pow(2*Math.PI, 0.5))*Math.pow(Math.E,-(xsq/2));
        	dps.push({x:(xV*se+mn), y:[0, yV]});
        	prob+= yV*0.001;
        }
  
	}else{
        for(var xV=-6; xV<=z; xV+=0.001){
        	var xsq = Math.pow(xV, 2);
        	yV = (1/Math.pow(2*Math.PI, 0.5))*Math.pow(Math.E,-(xsq/2));
        	dps.push({x:(xV*se+mn), y:[0, yV]});
        	prob+= yV*0.001;
        }

        for(var xV=(z+0.001); xV<=5; xV+=0.001){
        	var xsq = Math.pow(xV, 2);	
        	var yV = (1/Math.pow(2*Math.PI, 0.5))*Math.pow(Math.E,-(xsq/2));	
            dps.push({x:xV*se+mn, y:[yV,yV]});
		}
	}
    draw(dps, chCont, txt);

    return prob;
}


function zgraphI(m, se, ı, chCont, txt){
	var dps = [];
    var mn = parseFloat(m);
    var val = 0;
    var xV = -6;

    while(val < ı){
        var xsq = Math.pow(xV, 2);	
        var yV = (1/Math.pow(2*Math.PI, 0.5))*Math.pow(Math.E,-(xsq/2));	
        dps.push({x:(xV*se+mn), y:[yV,yV]});
        val += yV*0.001;
        xV += 0.001;
    }

    var z = Math.abs(xV);

	for(var xV=-z; xV<=z; xV+=0.001){
       	var xsq = Math.pow(xV, 2);	
       	var yV = (1/Math.pow(2*Math.PI, 0.5))*Math.pow(Math.E,-(xsq/2));	
        dps.push({x:(xV*se+mn), y:[0,yV]});
    }

    for(var xV=(z+0.001); xV<=6; xV+=0.001){
       	var xsq = Math.pow(xV, 2);	
       	var yV = (1/Math.pow(2*Math.PI, 0.5))*Math.pow(Math.E,-(xsq/2));	
        dps.push({x:(xV*se+mn), y:[yV,yV]});        
    }
    draw(dps, chCont , txt);

    return z;
}



function tgraph(m, f, se, t, chCont, txt){
	var dps = [];
	var prob = 0;
    var mn = parseFloat(m);
    var c = 1 ;

	if(t>0){
        if(f%2 == 0){

            for(var i=3; i<f; i=i+2){
                c = c*(i/(i-1));
            }
            c = c/(2*Math.pow(f, 0.5));

		    for(var xV=-5; xV<t; xV+=0.01){
            	var xsq = Math.pow(xV, 2);	
        	    var yV = Math.pow(1+xsq/f, -(f+1)/2)*c;	
                dps.push({x:(xV*se+mn), y:[yV,yV]});
		    }

            for(var xV=t; xV<=5; xV+=0.01){
            	var xsq = Math.pow(xV, 2);	
        	    var yV = Math.pow(1+xsq/f, -(f+1)/2)*c;	
        	    dps.push({x:(xV*se+mn), y:[0, yV]});
        	    prob+= yV*0.01;
            }

        }else{

        	for(var i=2; i<f; i=i+2){
                c = c*(i/(i-1));
            }
            c = c/(Math.PI*Math.pow(f, 0.5));

            for(var xV=-5; xV<t; xV+=0.01){
            	var xsq = Math.pow(xV, 2);	
        	    var yV = Math.pow(1+xsq/f, -(f+1)/2)*c;	
                dps.push({x:(xV*se+mn), y:[yV,yV]});
		    }

            for(var xV=t; xV<=5; xV+=0.01){
            	var xsq = Math.pow(xV, 2);	
        	    var yV = Math.pow(1+xsq/f, -(f+1)/2)*c;	
        	    dps.push({x:(xV*se+mn), y:[0, yV]});
        	    prob+= yV*0.01;
            }
        }
  
	}else{
        if(f%2 == 0){

            for(var i=3; i<f; i=i+2){
                c = c*(i/(i-1));
            }
            c = c/(2*Math.pow(f, 0.5));


        for(var xV=-5; xV<=t; xV+=0.01){
        	var xsq = Math.pow(xV, 2);
        	yV = (1/Math.pow(2*Math.PI, 0.5))*Math.pow(Math.E,-(xsq/2));
        	dps.push({x:(xV*se+mn), y:[0, yV]});
        	prob+= yV*0.01;
        }

        for(var xV=(t+0.02); xV<=5; xV+=0.01){
        	var xsq = Math.pow(xV, 2);	
        	var yV = (1/Math.pow(2*Math.PI, 0.5))*Math.pow(Math.E,-(xsq/2));	
            dps.push({x:xV*se+mn, y:[yV,yV]});
		}

	    }else{

        	for(var i=2; i<f; i=i+2){
                c = c*(i/(i-1));
            }
            c = c/(Math.PI*Math.pow(f, 0.5));

        for(var xV=-5; xV<=t; xV+=0.01){
        	var xsq = Math.pow(xV, 2);
        	yV = (1/Math.pow(2*Math.PI, 0.5))*Math.pow(Math.E,-(xsq/2));
        	dps.push({x:(xV*se+mn), y:[0, yV]});
        	prob+= yV*0.01;
        }

        for(var xV=(t+0.02); xV<=5; xV+=0.01){
        	var xsq = Math.pow(xV, 2);	
        	var yV = (1/Math.pow(2*Math.PI, 0.5))*Math.pow(Math.E,-(xsq/2));	
            dps.push({x:xV*se+mn, y:[yV,yV]});
		}

	    }
    } 
    draw(dps, chCont, txt);

    return prob;
}


function tgraphI(m, f, se, ı, chCont, txt){
	var dps = [];
    var mn = parseFloat(m);
    var val = 0;
    var xV = -6;
    var c = 1;
    
    if(f%2 == 0){

        for(var i=3; i<f; i=i+2){
            c = c*(i/(i-1));
        }
        c = c/(2*Math.pow(f, 0.5));

        while(val < ı){
            var xsq = Math.pow(xV, 2);	
            var yV = Math.pow(1+xsq/f, -(f+1)/2)*c;	
            dps.push({x:(xV*se+mn), y:[yV,yV]});
            val += yV*0.001;
            xV += 0.001;
        }

        var t = Math.abs(xV);

	    for(var xV=-t; xV<=t; xV+=0.001){
            var xsq = Math.pow(xV, 2);	
            var yV = Math.pow(1+xsq/f, -(f+1)/2)*c;	
            dps.push({x:(xV*se+mn), y:[0,yV]});
        }

        for(var xV=(t+0.001); xV<=6; xV+=0.001){
            var xsq = Math.pow(xV, 2);	
            var yV = Math.pow(1+xsq/f, -(f+1)/2)*c;	
            dps.push({x:(xV*se+mn), y:[yV,yV]});
            dps.push({x:(xV*se+mn), y:[yV,yV]});        
        }
    } else{

        for(var i=2; i<f; i=i+2){
            c = c*(i/(i-1));
        }
        c = c/(Math.PI*Math.pow(f, 0.5));

        while(val < ı){
            var xsq = Math.pow(xV, 2);	
            var yV = Math.pow(1+xsq/f, -(f+1)/2)*c;	
            dps.push({x:(xV*se+mn), y:[yV,yV]});
            val += yV*0.001;
            xV += 0.001;
        }

        var t = Math.abs(xV);

	    for(var xV=-t; xV<=t; xV+=0.001){
            var xsq = Math.pow(xV, 2);	
            var yV = Math.pow(1+xsq/f, -(f+1)/2)*c;	
            dps.push({x:(xV*se+mn), y:[0,yV]});
        }

        for(var xV=(t+0.001); xV<=6; xV+=0.001){
            var xsq = Math.pow(xV, 2);	
            var yV = Math.pow(1+xsq/f, -(f+1)/2)*c;	
            dps.push({x:(xV*se+mn), y:[yV,yV]});
            dps.push({x:(xV*se+mn), y:[yV,yV]});        
        }

    }
    draw(dps, chCont);

    return t;
}







function zIcalc(){
	var ıval = document.getElementById("zconf").value;
	if (ıval === ""){
		document.getElementById("zprob").innerHTML = "";
        if (window.innerWidth < 1250){
            document.getElementsByClassName("zres")[0].classList.remove("disp");
        }
		return;
	}
	if (ıval<=0 || ıval>=1){
		document.getElementById("chartContainer1").innerHTML = "";
		document.getElementById("zprob").innerHTML = "probability value must be between 0 and 1";
        document.getElementsByClassName("zres")[0].classList.add("disp");
		return;
	}
    document.getElementsByClassName("zres")[0].classList.add("disp");
	var m = document.getElementById("zmean").value;
	var std = document.getElementById("zstd").value;

	var ı = (1-ıval)/2;
	var se = std;
	var m = parseFloat(m);
	var z = zgraphI(m, se, ı, "chartContainer1", "Z Distribution Confidence Interval");
       
    document.getElementById("zprob").innerHTML = "z value : " + z + "  confidence interval : (" + (m-z*se) + "," + (m+se*z) + ")";
}

function zcalc(){
	var val = document.getElementById("zx").value;
	if(val === ""){
		document.getElementById("zprob").innerHTML = "";
		document.getElementById("chartContainer1").innerHTML = "";
        if (window.innerWidth < 1250){
            document.getElementsByClassName("zres")[0].classList.remove("disp");
        }
		return;
	}
    document.getElementsByClassName("zres")[0].classList.add("disp");
	var m = document.getElementById("zmean").value;
	var std = document.getElementById("zstd").value;

	var z = (val-m)/std;
	var se = std;

    if(Math.abs(z) > 5){
		if(z>0){
		    document.getElementById("zprob").innerHTML = "probability of values greater than "+ val + " is approximately 0, z value = " + z;
		}else{
			document.getElementById("zprob").innerHTML = "probability of values less than "+ val + " is approximately 0, z value = " + z;
		}
		document.getElementById("chartContainer1").innerHTML = "";
		return;
	}

	var prob = zgraph(m, se, z, "chartContainer1", "Z Distribution and Standard Error");
	if(z>0){
        document.getElementById("zprob").innerHTML = "probability of values greater than " + val + " is : " + prob + ", z value = " + z;

	}else{
        document.getElementById("zprob").innerHTML = "probability of values less than " + val + " is : " + prob +", z value = " + z;
	}
}




function lnsIcalc(){
	var ıval = document.getElementById("lnsconf").value;
	if (ıval === ""){
		document.getElementById("lnsprob").innerHTML = "";
		if (window.innerWidth < 1250){
        	document.getElementsByClassName("lsres")[0].classList.remove("disp");
        }
		return;
	}
	if (ıval<=0 || ıval>=1){
        document.getElementsByClassName("lsres")[0].classList.add("disp");
		document.getElementById("chartContainer2").innerHTML = "";
		document.getElementById("lnsprob").innerHTML = "probability value must be between 0 and 1";
		return;
	}
	document.getElementsByClassName("lsres")[0].classList.add("disp");
	var m = document.getElementById("lnsmean").value;
	var std = document.getElementById("lnsstd").value;
	var n = document.getElementById("lnsn").value;
    
	var se = std/Math.pow(n, 0.5);
	var ı = (1-ıval)/2;

	var z = zgraphI(m, se, ı, "chartContainer2", "Population Mean Interval (Z-Distribution)");

    var m = parseFloat(m);   
    document.getElementById("lnsprob").innerHTML = "z value : " + z + "  confidence interval : (" + (m-z*se) + "," + (m+se*z) + ")";
}

function lnscalc(){
	var val = document.getElementById("lnsx").value;
	if (val === ""){
		document.getElementById("lnsprob").innerHTML = "";
		document.getElementById("chartContainer2").innerHTML = "";
        if (window.innerWidth < 1250){
        	document.getElementsByClassName("lsres")[0].classList.remove("disp");
        }
		return;
	}

	document.getElementsByClassName("lsres")[0].classList.add("disp");
	var m = document.getElementById("lnsmean").value;
	var std = document.getElementById("lnsstd").value;
	var n = document.getElementById("lnsn").value;


	var se = std/Math.pow(n, 0.5);
	var z = (val-m)/se;

	if(Math.abs(z) > 5){
		if(z>0){
		    document.getElementById("lnsprob").innerHTML = "probability of population mean greater than "+ val + " is approximately 0, z value = " + z;
		}else{
			document.getElementById("lnsprob").innerHTML = "probability of population mean less than "+ val + " is approximately 0, z value = " + z;
		}
		document.getElementById("chartContainer2").innerHTML = "";
		return;
	}

    var prob = zgraph(m, se, z, "chartContainer2", "Population Mean Distribution (Z-Distribution)");
	if(z>0){
        document.getElementById("lnsprob").innerHTML = "probability of population mean greater than " + val + " is : " + prob+ ", z value = " + z;

	}else{
        document.getElementById("lnsprob").innerHTML = "probability of population mean less than " + val + " is : " + prob +", z value = " + z;
	}
}




function lbsIcalc(){
	var ıval = document.getElementById("lbsconf").value;
	if (ıval === ""){
		document.getElementById("lbsprob").innerHTML = "";
		if (window.innerWidth < 1250){
        	document.getElementsByClassName("lsres")[1].classList.remove("disp");
        }
		return;
	}
	if (ıval<=0 || ıval>=1){
        document.getElementsByClassName("lsres")[1].classList.add("disp");
		document.getElementById("chartContainer3").innerHTML = "";
		document.getElementById("lbsprob").innerHTML = "probability value must be between 0 and 1";
		return;
	}
    document.getElementsByClassName("lsres")[1].classList.add("disp");
	var n = document.getElementById("lbsn").value;
	var totalS = document.getElementById("lbss").value;

    
    var p = totalS/n;
	var q = 1-p;
    var m = p;
	var se = Math.pow(p*q/n, 0.5);
	var ı = (1-ıval)/2;
	var z = zgraphI(m, se, ı, "chartContainer3", "Population Mean Interval (Z-Distribution)");

    var m = parseFloat(m); 
    document.getElementById("lbsprob").innerHTML = "z value : " + z + "  confidence interval : (" + (m-z*se) + "," + (m+se*z) + ")";
}

function lbscalc(){
	var val = document.getElementById("lbsx").value;
	if (val === ""){
		document.getElementById("lbsprob").innerHTML = "";
		document.getElementById("chartContainer3").innerHTML = "";
		if (window.innerWidth < 1250){
        	document.getElementsByClassName("lsres")[1].classList.remove("disp");
        }
		return;
	} else if (val<=0 || val>=1){
        document.getElementsByClassName("lsres")[1].classList.add("disp");
		document.getElementById("lbsprob").innerHTML = "Raw x probability must be between 0 and 1";
		document.getElementById("chartContainer3").innerHTML = "";
		return;
	}
    document.getElementsByClassName("lsres")[1].classList.add("disp");
	var n = document.getElementById("lbsn").value;
	var totalS = document.getElementById("lbss").value;


	var p = totalS/n;
	var q = 1-p;
    var m = p;
    var prob = 0;

	var se = Math.pow(p*q/n, 0.5);
	var z = (val-m)/se;

	if(Math.abs(z) > 5){
		if(z>0){
		    document.getElementById("lbsprob").innerHTML = "probability of population mean greater than "+ val + " is approximately 0, z value = " + z;
		}else{
			document.getElementById("lbsprob").innerHTML = "probability of population mean less than "+ val + " is approximately 0, z value = " + z;
		}
        document.getElementById("chartContainer3").innerHTML = "";
		return;
	}
    
	var prob = zgraph(m, se, z, "chartContainer3", "Population Mean Distribution (Z-Distribution)");
	if(z>0){
        document.getElementById("lbsprob").innerHTML = "probability of population mean greater than " + val + " is : " + prob + ", z value = " + z;

	}else{
        document.getElementById("lbsprob").innerHTML = "probability of population mean less than " + val + " is : " + prob +", z value = " + z;
	}
}
    



function lnsdIcalc(){
	var ıval = document.getElementById("lnsdconf").value;
	if (ıval === ""){
		document.getElementById("lnsdprob").innerHTML = "";
		if (window.innerWidth < 1250){
        	document.getElementsByClassName("lsres")[2].classList.remove("disp");
        }
		return;
	}
	if (ıval<=0 || ıval>=1){
        document.getElementsByClassName("lsres")[2].classList.add("disp");
		document.getElementById("chartContainer4").innerHTML = "";
		document.getElementById("lnsdprob").innerHTML = "probability value must be between 0 and 1";
		return;
	}
	document.getElementsByClassName("lsres")[2].classList.add("disp");
	var mf = document.getElementById("lnsdmf").value;
	var sf = document.getElementById("lnsdsf").value;
	var stdf = document.getElementById("lnsdstdf").value;

	var ms = document.getElementById("lnsdms").value;
	var ss = document.getElementById("lnsdss").value;
	var stds = document.getElementById("lnsdstds").value;


	var ı = (1-ıval)/2;

    var m = (mf-ms);
    var varf = Math.pow(stdf, 2);
    var vars = Math.pow(stds, 2);
	var se = Math.pow((varf/sf)+(vars/ss), 0.5);

	var z = zgraphI(m, se, ı, "chartContainer4", "Population Mean Difference Interval (Z-Distribution)");

    var m = parseFloat(m);  
    document.getElementById("lnsdprob").innerHTML = "z value : " + z + "  confidence interval : (" + (m-z*se) + "," + (m+se*z) + ")";
}

function lnsdcalc(){
	var val = document.getElementById("lnsdx").value;
	if (val === ""){
		document.getElementById("lnsdprob").innerHTML = "";
		document.getElementById("chartContainer4").innerHTML = "";
		if (window.innerWidth < 1250){
        	document.getElementsByClassName("lsres")[2].classList.remove("disp");
        }
		return;
	}
    document.getElementsByClassName("lsres")[2].classList.add("disp");
	var mf = document.getElementById("lnsdmf").value;
	var sf = document.getElementById("lnsdsf").value;
	var stdf = document.getElementById("lnsdstdf").value;

	var ms = document.getElementById("lnsdms").value;
	var ss = document.getElementById("lnsdss").value;
	var stds = document.getElementById("lnsdstds").value;



    var m = (mf-ms);
    var varf = Math.pow(stdf, 2);
    var vars = Math.pow(stds, 2);
	var se = Math.pow((varf/sf)+(vars/ss), 0.5);
	var z = (val-m)/se;

	if(Math.abs(z) > 5){
		if(z>0){
		    document.getElementById("lnsdprob").innerHTML = "probability of population mean difference greater than "+ val + " is approximately 0, z value = " + z;
		}else{
			document.getElementById("lnsdprob").innerHTML = "probability of population mean difference less than "+ val + " is approximately 0, z value = " + z;
		}
		return;
	}

	var prob = zgraph(m, se, z, "chartContainer4", "Population Mean Difference Distribution (Z-Distribution)");
	if(z>0){
        document.getElementById("lnsdprob").innerHTML = "probability of population mean difference greater than " + val + " is : " + prob + ", z value = " + z;

	}else{
        document.getElementById("lnsdprob").innerHTML = "probability of population mean difference less than " + val + " is : " + prob +", z value = " + z;
	}
}




function lbsdIcalc(){
	var ıval = document.getElementById("lbsdconf").value;
	if (ıval === ""){
		document.getElementById("lbsdprob").innerHTML = "";
		if (window.innerWidth < 1250){
        	document.getElementsByClassName("lsres")[3].classList.remove("disp");
        }
		return;
	}
	if (ıval<=0 || ıval>=1){
        document.getElementsByClassName("lsres")[3].classList.add("disp");
		document.getElementById("chartContainer5").innerHTML = "";
		document.getElementById("lbsdprob").innerHTML = "probability value must be between 0 and 1";
		return;
	}
	document.getElementsByClassName("lsres")[3].classList.add("disp");
	var sf = document.getElementById("lbsdsf").value;
	var totalSF = document.getElementById("lbsdpf").value;
	
	var ss = document.getElementById("lbsdss").value;
	var totalSS = document.getElementById("lbsdps").value;


	var ı = (1-ıval)/2;
    var pf = totalSF/sf;
    var ps = totalSS/ss;
    var qf = 1-pf;
    var qs = 1-ps;
    var m = Math.abs(pf-ps);
	var se = Math.pow((pf*qf/sf)+(ps*qs/ss), 0.5);

    var m = parseFloat(m);  
	var z = zgraphI(m, se, ı, "chartContainer5", "Population Mean Difference Interval (Z-Distribution)");
    document.getElementById("lbsdprob").innerHTML = "z value : " + z + "  confidence interval : (" + (m-z*se) + "," + (m+se*z) + ")";
}

function lbsdcalc(){
	var val = document.getElementById("lbsdx").value;
	if (val === ""){
		document.getElementById("lbsdprob").innerHTML = "";
		document.getElementById("chartContainer5").innerHTML = "";
		if (window.innerWidth < 1250){
        	document.getElementsByClassName("lsres")[3].classList.remove("disp");
        }
		return;
	} else if (val<=0 || val>=1){
        document.getElementsByClassName("lsres")[3].classList.add("disp");
		document.getElementById("lbsdprob").innerHTML = "Raw x probability must be between 0 and 1";
		document.getElementById("chartContainer5").innerHTML = "";
		return;
	}
	document.getElementsByClassName("lsres")[3].classList.add("disp");
	var sf = document.getElementById("lbsdsf").value;
	var totalSF = document.getElementById("lbsdpf").value;
	
	var ss = document.getElementById("lbsdss").value;
	var totalSS = document.getElementById("lbsdps").value;



    var pf = totalSF/sf;
    var ps = totalSS/ss;
    var qf = 1-pf;
    var qs = 1-ps;
    var m = Math.abs(pf-ps);

	var se = Math.pow((pf*qf/sf)+(ps*qs/ss), 0.5);
	var z = (val-m)/se;

	if(Math.abs(z) > 5){
		if(z>0){
		    document.getElementById("lbsdprob").innerHTML = "probability of population mean difference greater than "+ val + " is approximately 0, z value = " + z;
		}else{
			document.getElementById("lbsdprob").innerHTML = "probability of population mean difference less than "+ val + " is approximately 0, z value = " + z;
		}
		return;
	}

	var prob = zgraph(m, se, z, "chartContainer5", "Population Mean Difference Distribution (Z-Distribution)");
	if(z>0){
        document.getElementById("lbsdprob").innerHTML = "probability of population mean difference greater than " + val + " is : " + prob + ", z value = " + z;

	}else{
        document.getElementById("lbsdprob").innerHTML = "probability of population mean difference less than " + val + " is : " + prob +", z value = " + z;
	}
}



function ssIcalc(){
    var ıval = document.getElementById("ssconf").value;
	if (ıval === ""){
		document.getElementById("ssprob").innerHTML = "";
        if (window.innerWidth < 1250){
            document.getElementsByClassName("ssres")[0].classList.remove("disp");
        }
		return;
	}
	if (ıval<=0 || ıval>=1){
        document.getElementsByClassName("ssres")[0].classList.add("disp");
		document.getElementById("chartContainer6").innerHTML = "";
		document.getElementById("ssprob").innerHTML = "probability value must be between 0 and 1";
		return;
	}
    document.getElementsByClassName("ssres")[0].classList.add("disp");
	var m = document.getElementById("ssmean").value;
	var std = document.getElementById("ssstd").value;
	var s = document.getElementById("sss").value;


    var ı = (1-ıval)/2;
	var se = std/Math.pow(s, 0.5);

	var t = tgraphI(m ,(s-1) , se, ı, "chartContainer6", "Population Mean Interval (T-Distribution)");

    var m = parseFloat(m);  
    document.getElementById("ssprob").innerHTML = "z value : " + t + "  confidence interval : (" + (m-t*se) + "," + (m+se*t) + ")";

}

function sscalc(){
	var val = document.getElementById("ssx").value;
	if (val === ""){
		document.getElementById("ssprob").innerHTML = "";
		document.getElementById("chartContainer6").innerHTML = "";
        if (window.innerWidth < 1250){
            document.getElementsByClassName("ssres")[0].classList.remove("disp");
        }
		return;
	}
    document.getElementsByClassName("ssres")[0].classList.add("disp");
	var m = document.getElementById("ssmean").value;
	var std = document.getElementById("ssstd").value;
	var s = document.getElementById("sss").value;


	var se = std/Math.pow(s, 0.5);
	var t = (val-m)/se;

    if(Math.abs(t) > 5){
		if(t>0){
		    document.getElementById("ssprob").innerHTML = "probability of values greater than "+ val + " is approximately 0, t value = " + t;
		}else{
			document.getElementById("ssprob").innerHTML = "probability of values less than "+ val + " is approximately 0, t value = " + t;
		}
		document.getElementById("chartContainer6").innerHTML =  "";
		return;
	}

	var prob = tgraph(m ,(s-1) , se, t, "chartContainer6", "Population Mean Distribution (T-Distribution)");
	if(t>0){
        document.getElementById("ssprob").innerHTML = "probability of values greater than " + val + " is : " + prob + ", t value = " + t;

	}else{
        document.getElementById("ssprob").innerHTML = "probability of values less than " + val + " is : " + prob +", t value = " + t;
	}
}




function ssdcalc(){
    document.getElementsByClassName("ssres")[1].classList.add("disp");
	var mf = document.getElementById("ssdmeanf").value;
	var stdf = document.getElementById("ssdstdf").value;
	var sf = document.getElementById("ssdsf").value;

	var ms = document.getElementById("ssdmeans").value;
	var stds = document.getElementById("ssdstds").value;
	var ss = document.getElementById("ssdss").value;

	var m  = mf-ms;

	var varf = Math.pow(stdf, 2);
	var vars = Math.pow(stds, 2);
	var sf = parseInt(sf);
	var ss = parseInt(ss);
    var ssq = ((sf-1)*varf + (ss-1)*vars)/(sf+ss-2);

    var se = Math.pow((ssq/sf)+(ssq/ss), 0.5);
	var t = (m)/se;

	var dn = Math.pow((Math.pow(stdf, 2)/sf)+(Math.pow(stds, 2)/ss) ,2);
	var dnm1 = Math.pow(Math.pow(stdf, 2)/ sf, 2);
	var dnm2 = Math.pow(Math.pow(stds, 2)/ ss, 2);
	var df = dn/((dnm1/(sf-1)) + (dnm2/(ss-1)));
    if(Math.abs(t) > 5){
		if(t>0){
		    document.getElementById("ssdprob").innerHTML = "probability of values greater than "+ m + " is approximately 0, t value = " + t;
		}else{
			document.getElementById("ssdprob").innerHTML = "probability of values less than "+ m + " is approximately 0, t value = " + t;
		}
		return;
	}

	var prob = tgraph(0 , df, se, t, "chartContainer7", "Population Mean Equality Estimator (T-Distribution, Pooled Estimate)");
	if(t>0){
        document.getElementById("ssdprob").innerHTML = "probability of values greater than " + m + " is : " + prob + ", t value = " + t;

	}else{
        document.getElementById("ssdprob").innerHTML = "probability of values less than " + m + " is : " + prob +", t value = " + t;
	}

}


function covAnalyze(country){

	document.getElementById("covprob").innerHTML = "Please wait...";
	document.getElementById("chartContainer").innerHTML = "";
	var xmlhttp = new XMLHttpRequest();
	var arr;
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			arr = JSON.parse(this.responseText);
		}
	}
	xmlhttp.open("GET", "fetch.php?cn=" + country, false);
    xmlhttp.send();

    var cases = parseInt(arr[0]);
    var deaths = parseInt(arr[1]);
    var date = arr[2];
    console.log(cases);
    console.log(deaths);
    
    var dps = [];
    var n = cases;
    var p = deaths/cases;
    var q = 1-p;
    var m = p;
	var se = Math.pow(p*q/n, 0.5);

    for(var xV=-6; xV<=6; xV+=0.001){
        var xsq = Math.pow(xV, 2);
        yV = (1/Math.pow(2*Math.PI, 0.5))*Math.pow(Math.E,-(xsq/2));
        dps.push({x:(xV*se+m), y:[yV, yV]});
    }
    document.getElementById("covprob").innerHTML = "Probability of death : " + deaths/cases + ", standard error : " + se 
    + ".<br>Last updated : " + date + ".";
    draw(dps, "chartContainer", "Population Death Mean Distribution");	
}