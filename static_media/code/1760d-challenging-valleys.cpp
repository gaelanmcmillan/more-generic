
#include <iostream>
#include <vector>

using namespace std;
using ll = long long;

void solve() {
  int n;
  cin >> n;
  vector<ll> a(n), adjR(n), adjL(n);
  for (auto &i : a) {
    cin >> i;
  }

  a.erase(unique(a.begin(), a.end()), a.end());

  int minima = 0;

  int m = a.size();

  for (int i = 0; i < m; ++i) {
    if (i == 0) {
      if (a[i] < a[i + 1])
        minima++;

      continue;
    } else if (i == m - 1) {
      if (a[i] < a[i - 1])
        minima++;

      continue;
    }

    if (a[i - 1] > a[i] && a[i] < a[i + 1])
      minima++;

    if (minima >= 2)
      break;
  }

  if (minima < 2) {
    cout << "YES\n";
  } else {
    cout << "NO\n";
  }
}

int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);

  int t;
  cin >> t;
  for (int tc = 1; tc <= t; ++tc) {
    // cout << "Case " << tc << ":\n";
    solve();
  }
  return 0;
}
