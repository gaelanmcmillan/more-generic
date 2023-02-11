#include <functional>
#include <iostream>
#include <unordered_map>
#include <vector>

using ll = long long;

// dp[c][k] = the highest total calories we can consume with a capacity
ll dp[101][101];

int main() {
  ll n, m;
  std::cin >> n >> m;
  std::vector<ll> courses(n);
  for (auto &c : courses)
    std::cin >> c;

  std::unordered_map<ll, ll> cap_idx;

  for (ll amt = m, ate = 0; amt > 0; ++ate, amt = 2 * amt / 3)
    cap_idx[amt] = ate;

  for (int r = 0; r < cap_idx.size(); ++r)
    for (int c = 0; c < n; ++c)
      dp[r][c] = -1;

  std::function<ll(ll, ll, int)> select = [&](ll cap, ll prev_cap, int course) {
    if (cap == 0 || course >= n)
      return 0LL;
    ll &best_option = dp[cap_idx[cap]][course];
    if (best_option != -1)
      return best_option;
    ll skip1 = select(prev_cap, cap, course + 1);
    ll skip2 = select(m, cap, course + 2);
    ll take =
        std::min(courses[course], cap) + select(2 * cap / 3, cap, course + 1);
    best_option = std::max({skip1, skip2, take});
    return best_option;
  };

  ll ans = select(m, m, 0);

  std::cout << ans << '\n';
  return 0;
}
