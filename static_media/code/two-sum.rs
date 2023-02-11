use std::collections::HashMap;

impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        let mut m = HashMap::<i32, i32>::new();
        for (i, v) in nums.iter().enumerate() {
            m.insert(v.clone(), i as i32);
        }
        for (idx, v) in nums.iter().enumerate() {
            let i = idx as i32;
            let rest = target - v;
            if (m.contains_key(&rest)) {
                if i != *m.get(&rest).unwrap() {
                    return vec![i, *m.get(&rest).unwrap()];
                }
            }
        }
        vec![-1, -1]
    }
}
