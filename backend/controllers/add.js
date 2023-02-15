module.exports.add= async(req,res)=>{
    try{
        
        const number1=req.body.first;
        const number2= req.body.second;
        function addNumbers(num1, num2) {
            let carry = 0;
            let sum = '';
            let steps = [];
            let result = ''
          
            for (let i = num1.length - 1, j = num2.length - 1; i >= 0 || j >= 0 || carry; i--, j--) {
              let digit1 = +num1[i] || 0;
              let digit2 = +num2[j] || 0;
              let add = digit1 + digit2 + carry;
              let digitSum = add % 10;
              carry = Math.floor(add / 10);
              sum = digitSum + sum;
              
              result += carry.toString()
              steps.push({ carryString: result , sumString: sum });
            }
            let length = steps.length-1
              steps[length].carryString.slice(0,length)
              
            return steps;
          }
          const result=addNumbers(number1,number2);
          res.status(200).send({sucess:true,data:result})
    }catch(error){
        res.status(400).send(error);
    }
}