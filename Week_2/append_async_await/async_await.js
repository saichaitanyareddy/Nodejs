var fs=require('fs');
var c=0;

async function appendProm(file1,file2)
	{	c=c+1;

		let prom= new Promise((resolve,reject)=>
		{
			fs.readFile(file2,'utf-8',function(err,data){fs.appendFile(file1,data,()=>{});});
		});
		await console.log("files appended"+c);
	
		
		
	}

appendProm('file1.txt','file2.txt').then(appendProm('file1.txt','file3.txt')).then(appendProm('file1.txt','file4.txt')).then(appendProm('file1.txt','file5.txt')).catch((error)=>console.log(error));

--------------------------------------------------------------------------------------------------------------

F:\js\week_2>node async_await.js
files appended1
files appended2
files appended3
files appended4


