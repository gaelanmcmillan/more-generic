#include <functional>
#include <iostream>
#include <map>
#include <set>
#include <vector>

void solve() {
  int n;
  std::cin >> n;
  std::vector<std::map<int, int>> possibilities(n);
  std::map<int, std::set<int>> holding;

  for (int i = 0; i < n; ++i) {
    for (int pos = 0; pos < n - 1; ++pos) {
      int x;
      std::cin >> x;
      holding[x].insert(pos);
      possibilities[pos][x]++;
    }
  }

  std::vector<bool> seen(n, false);
  std::vector<int> perm(n, -1);

  std::function<void(int, int)> settle_by_deduction = [&](int pos, int val) {
    perm[pos] = val;

    int other_val = [&] {
      for (auto [candidate, _] : possibilities[pos]) {
        if (candidate != val)
          return candidate;
      }
      return -1;
    }();

    if (other_val == -1)
      return;

    int other_pos = [&] {
      for (int other : holding[other_val]) {
        if (other != pos)
          return other;
      }
      return -1;
    }();

    if (other_pos == -1)
      return;

    seen[pos] = true;

    if (!seen[other_pos])
      settle_by_deduction(other_pos, other_val);
  };

  auto most_freq_at = [&](int idx) {
    int best = -1;
    int val;

    for (auto [candidate, cnt] : possibilities[idx]) {
      if (cnt > best) {
        best = cnt;
        val = candidate;
      }
    }

    return val;
  };

  settle_by_deduction(0, most_freq_at(0));
  settle_by_deduction(n - 1, most_freq_at(n - 2));

  for (int x : perm) {
    std::cout << x << ' ';
  }
  std::cout << '\n';
}

int main() {
  int t;
  std::cin >> t;
  for (int tc = 1; tc <= t; ++tc) {
    solve();
  }
  return 0;
}
