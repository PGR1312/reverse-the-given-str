var str='Changes to the Object.prototype object are seen by all objects through prototype chaining, unless the properties and methods subject ';
var strarr=str.split(' ');
//console.log(strarr.join(' '));
var rev=[]
var temp1='the';
       // var temp1=temp.split('')
        //console.log(temp1);
        var sam=''
        for(i=temp1.length-1;i>=0;i--)
        {
            sam=sam+temp1[i];
            //console.log(temp[i]);
        }
       //console.log(sam);
       // rev.push(sam)
        //console.log(rev);
for(i=0;i<strarr.length;i++)
{
    if(strarr[i]==='the')
    {
        //strarr[i]='eht';
        //console.log(strarr[i]);
        //rev.push(strarr[i]);
        rev.push(sam);
    }
    else
    {
        rev.push(strarr[i]);
    }
}
console.log(rev.join(' '));
//console.log(rev);
