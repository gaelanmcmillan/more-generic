#include <numeric>
#include <vector>

using namespace std;

class Solution {
public:
  int trap(vector<int> &height) {
    const int n = height.size();
    if (n <= 2)
      return 0;

    vector<int> right(n);
    vector<int> left(n);

    const auto make_max = [](int a, int b) { return max(a, b); };

    int water = 0;

    partial_sum(height.begin(), height.end(), right.begin(), make_max);
    partial_sum(height.rbegin(), height.rend(), left.rbegin(), make_max);

    for (int i = 0; i < n; ++i) {
      water += max(0, min(right[i], left[i]) - height[i]);
    }

    return water;
  }
};