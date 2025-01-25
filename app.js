

const bills =[22,295,176,440,37,105,10,1100,86,52];
const tips =[]
const totals=[]
const calctip =(bill) => bill>=50 && bill<=300? bill*0.15:bill*0.2

for(i=0;i<bills.length;i++){
    const tips = calctip(bills[i])
    totals.push(bills[i]+tips)
}

 const calcAverage =(arr)=>{
    const sum = 0
    for(i=0;i<arr.length;i++){
        sum +=arr[i]


}

   }