#include <array>
#include <iostream>

constexpr int kMaxSize = 3000001;

int main() {
  int n;
  std::cin >> n;
  std::ios_base::sync_with_stdio(false);
  std::cin.tie(NULL);
  static std::array<int, kMaxSize> divcount{};
  std::fill(divcount.begin() + 2, divcount.end(), 2);
  std::cout << 1 << '\n';
  for (int i = 2; i <= n; ++i) {
    for (int j = 2; j <= n; ++j) {
      if (i * j > n)
        break;
      divcount[i * j]++;
    }
    std::cout << divcount[i] << '\n';
  }

  return 0;
}