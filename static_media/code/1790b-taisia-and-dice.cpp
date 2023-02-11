#include <iostream>
#include <vector>

void solve() {
  int n, s, r;
  std::cin >> n >> s >> r;
  int stolen_value = s - r;
  std::vector<int> sequence(n - 1);
  int needed = n - 1;
  int avg = r / needed;
  std::fill(sequence.begin(), sequence.end(), avg);

  int surplus = s - (stolen_value + needed * avg);

  for (int i = 0; i < n - 1 && surplus != 0; ++i) {
    int distance_from_max = stolen_value - sequence[i];
    int adding = std::min(surplus, distance_from_max);
    sequence[i] += adding;
    surplus -= adding;
  }

  for (int x : sequence) {
    std::cout << x << ' ';
  }
  std::cout << stolen_value << '\n';
}

int main() {
  int t;
  std::cin >> t;
  for (int tc = 1; tc <= t; ++tc) {
    solve();
  }
  return 0;
}
