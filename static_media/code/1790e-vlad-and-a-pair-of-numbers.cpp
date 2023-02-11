#include <iostream>

using ll = long long;

std::pair<int, int> find_a_b_from_sum_XOR(ll sum, ll XOR) {
  // (a&b)*2 = a+b - (a^b)
  ll AND = (sum - XOR) / 2;
  int a = 0, b = 0;

  // find a, b s.t. a^b = `XOR` and a&b = `AND`
  for (int i = 0; i < 8 * sizeof(ll); i++) {
    ll XOR_i = XOR & 1 << i;
    ll AND_i = AND & 1 << i;

    // ith bit of `XOR` and `AND` can't both be set.
    if (XOR_i != 0 && AND_i != 0) {
      return {-1, -1};

      // ... if the AND bit is set and the XOR bit is not set,
      // both a and b have this bit set.
    } else if (AND_i != 0) {
      a |= 1 << i;
      b |= 1 << i;

      // ... if the XOR bit is set, only one of the two has
      // this bit set. Let's just say it's A.
    } else if (XOR_i != 0) {
      a |= 1 << i;
    }
  }

  return {a, b};
}

void solve() {
  // find a, b st. a^b == (a+b)/2;
  // find a, b st. a^b == XOR and 2 * XOR = a+b;
  ll XOR;
  std::cin >> XOR;
  ll sum = 2 * XOR;
  auto [a, b] = find_a_b_from_sum_XOR(sum, XOR);
  if (a == -1 || a + b != sum)
    std::cout << -1 << '\n';
  else
    std::cout << a << ' ' << b << '\n';
}

int main() {
  int t;
  std::cin >> t;
  for (int tc = 1; tc <= t; ++tc) {
    solve();
  }
  return 0;
}
