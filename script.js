function iqTest(numbers){
  let odd_amount=0;
  let even_amount=0;
  let what_is_mainly = "";
  let number_array=[];
  
  let separated_numbers = numbers.split(" ");
  
 
  for (let i=0;i<separated_numbers.length;i++){
	number_array.push(parseInt(separated_numbers[i]));
  }
 
 
  
 for (let i=0;i<number_array.length;i++){
  if (number_array[i]%2==0){
  even_amount++;
   } else {
   odd_amount++;
    }
  }

 if(even_amount>odd_amount){
  what_is_mainly = "even";
   } else {
    what_is_mainly = "odd";
      }

for(let i=0;i<number_array.length;i++){
	if(what_is_mainly=="even" && number_array[i]%2!=0){
    return i+1;
    } 
    else if(what_is_mainly=="odd" && number_array[i]%2==0){
    return i+1;
    }
   }
}
