#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;
using ll = long long;

// birds can't sit any closer to the poles than this
const ll offset = 6;

int main() {
  ll n, l, d;
  cin >> l >> d >> n;
  vector<ll> birds(n);
  for (auto &b : birds)
    cin >> b;
  sort(birds.begin(), birds.end());

  if (n == 0) {
    cout << (l - 2 * offset) / d + 1 << '\n';
    return;
  }

  int totalBirds = 0;
  for (int i = 0; i <= n; i++) {
    ll start = i == 0 ? offset : birds[i - 1] + d;
    ll end = i == n ? l - offset : birds[i] - d;
    if (start <= end) {
      totalBirds += (end - start) / d + 1;
    }
  }
  cout << totalBirds << '\n';
  return 0;
}