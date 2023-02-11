#include <iostream>
#include <string>

using namespace std;

constexpr string_view kDigitsOfPi = "314159265358979323846264338327";

void solve() {
  string s;
  cin >> s;
  for (int i = 0; i < kDigitsOfPi.length(); ++i) {
    if (s[i] != kDigitsOfPi[i]) {
      cout << i << '\n';
      return;
    }
  }
  cout << "30\n";
}

int main() {
  int t;
  cin >> t;
  for (int tc = 1; tc <= t; ++tc) {
    solve();
  }
  return 0;
}
