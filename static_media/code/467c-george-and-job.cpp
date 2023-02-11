#include <algorithm>
#include <array>
#include <functional>
#include <iostream>
#include <numeric>
#include <vector>

using namespace std;
using ll = long long;

ll dp[5000][5000];

int main() {
  int n, m, k;
  cin >> n >> m >> k;

  vector<ll> a(n);
  for (auto &x : a)
    cin >> x;

  const int num_segments = n - m + 1;

  for (int r = 0; r < k; ++r) {
    for (int c = 0; c < num_segments; ++c) {
      dp[r][c] = -1;
    }
  }

  // preprocessing -- precompute all m-length segment sums.
  // segment_from[i] = sum of m consecutive elements of a starting from i, a[i
  // .. i+m-1]
  vector<ll> segment_from(num_segments, 0);
  ll running_sum = accumulate(a.begin(), a.begin() + m, 0LL);

  for (int i = 0; i < num_segments; ++i) {
    segment_from[i] = running_sum;
    running_sum -= a[i];
    running_sum += a[i + m];
  }

  // the optimal `i`th choice is either
  // ... the segment at `start` plus the optimal `i + 1`th choice
  //							~~ OR ~~
  // ... the optimal `i`th choice starting from `start + 1`
  function<ll(int, int)> pick_subseq = [&](int start, int remaining) {
    if (start >= num_segments || remaining < 0)
      return 0LL;
    if (dp[remaining][start] != -1)
      return dp[remaining][start];
    ll alternative = pick_subseq(start + 1, remaining);
    ll best_next = pick_subseq(start + m, remaining - 1);
    dp[remaining][start] = max(alternative, segment_from[start] + best_next);
    return dp[remaining][start];
  };

  ll ans = pick_subseq(0, k - 1);

  cout << ans << '\n';

  // thanks for helping me with this problem, Hoang!
}
