var fs=require('fs');

const appendProm=(file1,file2)=>
	{
		return new Promise((resolve,reject)=>
		{
			fs.readFile(file2,'utf-8',function(err,data){fs.appendFile(file1,data,()=>{});});
		});
		
	}	


file1='file1.txt';
file2='file2.txt';
file3='file3.txt';
file4='file4.txt';
file5='file5.txt';
appendProm(file1,file2).then(appendProm(file1,file3)).then(appendProm(file1,file4)).then(appendProm(file1,file5)).catch(error=>console.log(error));
console.log("files appended");
------------------------------------------------------------------------------------------------------------------------------------------------------


F:\js>node appendProm.js
files appended

