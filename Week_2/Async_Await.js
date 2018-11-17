var fs=require('fs');
var c=0;

async function appendProm(file1,file2)
	{	c=c+1;
		console.log("files appending"+c);
		let prom= new Promise((resolve,reject)=>
		{
			fs.readFile(file2,'utf-8',function(err,data){fs.appendFile(file1,data,()=>{});});
		});
		
	  let b=await fs.readFile('new.txt','utf-8',function(err,data){fs.appendFile(file1,data,()=>{});});
	  console.log(b);
	  console.log("files appended"+c);
		
	
	}


appendProm('file1.txt','file2.txt').then(appendProm('file1.txt','file3.txt')).then(appendProm('file1.txt','file4.txt')).then(appendProm('file1.txt','file5.txt')).catch((error)=>console.log(error));



console.log("here i am at the bottom");

-------------------------------------------------------------------------------------------------------------

cmd>node async.js
files appending1
files appending2
files appending3
files appending4
here i am at the bottom
undefined
files appended4
undefined
files appended4
undefined
files appended4
undefined
files appended4

