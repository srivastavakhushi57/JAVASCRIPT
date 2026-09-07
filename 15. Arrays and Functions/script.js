let array=[11,3,5,23,2,20,4,6,7,1];

//1. Finding the maximum element in array.
let max=array[0];
let findElement = function(nums) {
    for(let i=0;i<nums.length;i++){
        if(nums[i]>max){
            max=nums[i];
        }
    }
    return max;
}
console.log("Maximum number in array:",findElement(array));


//2. Calculating sum of all elements in array.
let sum=0;
let additionElements = (nums2) => {
    for(let i=0;i<nums2.length;i++){
        sum=sum+nums2[i];
    }
    return sum;
}
console.log("Sum of all elements in array:",additionElements(array));


//3. Counting the number of odd elements in array.
let count=0;
function counting(nums3){
    for(let i=0;i<nums3.length;i++){
        if((nums3[i]%2)!=0){
            count++;
        }
    }
    return count;
}
console.log("Number of odd elements in array:",counting(array));