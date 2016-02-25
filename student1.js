	function del(r)
	{   
		var i=r.parentNode.parentNode.rowIndex;
	 	document.getElementById("myTable").deleteRow(i);		
	}


	function add()
 	{
		var rows = "";
		var usn= document.getElementById("usn").value;
        	var name = document.getElementById("name").value;
		var sem = document.getElementById("sem").value;
		var yoa = document.getElementById("yoa").value;
        	var branch = document.getElementById("branch").value;
        	var clg = document.getElementById("clg").value;
 	 rows += "<td>" + usn + "</td><td>" + name + "</td><td>" + sem + "</td><td>" + yoa + "</td><td>" + branch + "</td><td>" + clg + "</td><td><input type='button' value='delete' onclick='del(this)'></td>";
        	var tbody = document.querySelector("#myTable tbody");
        	var tr = document.createElement("tr");
		tr.innerHTML = rows;
        	tbody.appendChild(tr)
        
 	} 
	
	function validateForm() 
	{
		var a=document.forms["myForm"]["usn"].value;
		var b=document.forms["myForm"]["name"].value;		
		var c=document.forms["myForm"]["sem"].value;		
		var d=document.forms["myForm"]["yoa"].value;		
		var e=document.forms["myForm"]["branch"].value;
		var f=document.forms["myForm"]["clg"].value;
		
		
		
		var re = /[1-9][a-z][a-z][1-9][1-9][a-z][a-z][a-z][0-9][1-9]/; 
		if(!a.match(re))
		{
			alert("na ho payega tumse");
			return false;
		}
		
		
		
		
		if (a==null || a=="")
		{
			alert("usn must be filled out");
			return false;
		}
	
		if ( !isNaN(b))
		{
		alert("string is expected")		
		return false;
		}
		if ( !isNaN(f))
		{
		alert("string is expected")		
		return false;
		}
		if ( !isNaN(e))
		{
		alert("string is expected")		
		return false;
		}
		if ( isNaN(c))
		{
		alert("Number is expected")		
		return false;
		}
		if (c>8 || c<1)
		{
		alert("invalid sem");
		return false;
		}
				
		if (b==null || b=="") 
		{
			alert("name must be filled out");
			return false;
		}
		
		
		if (c==null || c=="") 
		{
			alert("sem must be filled out");
			return false;
		}
		
		if (d==null || d=="") 
		{
			alert("yoa must be filled out");
			return false;
		}
		
		if (e==null || e=="") 
		{
			alert("branch must be filled out");
			return false;
		}
		
			
		
		if (f==null || f=="") 
		{
			alert("clg must be filled out");
			return false;
		}
		else
			return true;
			
			
			
			
			
		

	}
	function val()
	{
				
		if(!validateForm())
		{
			return;
		}
		if(validateForm())
		{
			add();		
		}
	}


