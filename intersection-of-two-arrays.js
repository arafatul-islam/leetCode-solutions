/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersection = function(nums1, nums2) {
    let array = [];
    let ans = [];
    
    for(const i of nums1){
      array[i] = 1;
    }
    for(const i of nums2){
      if(array[i]===1) array[i]++;
    }
    
    array.filter((num,index)=> {  num > 1 && ans.push(index);
    });
    
    return ans;
        
    };