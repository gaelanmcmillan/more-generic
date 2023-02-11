#include <iostream>
#include <unordered_map>

using ll = long long;
using namespace std;

int main() {
  int n;
  ll d;
  cin >> n >> d;
  unordered_map<ll, ll> v;
  ll total = 0;
  for (int i = 0; i < n; ++i) {
    ll x;
    cin >> x;
    total += v[x / d]++;
  }
  cout << total << '\n';
}