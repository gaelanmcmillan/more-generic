#include <algorithm>
#include <iostream>
#include <map>
#include <vector>

void solve() {
  int n;
  std::cin >> n;
  std::vector<int> a(n);
  for (auto &x : a)
    std::cin >> x;
  std::sort(a.begin(), a.end());

  // we nest whenever possible
  std::map<int, int> dolls;
  for (auto d : a) {
    // if we can nest, we do
    auto smaller = dolls.find(d - 1);
    if (smaller != dolls.end() && smaller->second != 0) {
      smaller->second--;
    }

    dolls[d]++;
  }

  int sets = 0;
  for (auto [_, cnt] : dolls) {
    sets += cnt;
  }

  std::cout << sets << '\n';
}

int main() {
  int t;
  std::cin >> t;
  for (int tc = 1; tc <= t; ++tc) {
    solve();
  }
  return 0;
}
