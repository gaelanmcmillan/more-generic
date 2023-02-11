#include <iostream>
#include <string>

using namespace std;

int main() {
  int t;
  cin >> t;
  while (t--) {
    int n;
    cin >> n;
    string s;
    cin >> s;
    bool good = false;
    for (int i = 0; i < n - 1; ++i) {
      if (s[i] == 'L' && s[i + 1] == 'R') {
        good = true;
        cout << i + 1 << '\n';
        break;
      } else if (s[i] == 'R' && s[i + 1] == 'L') {
        good = true;
        cout << 0 << '\n';
        break;
      }
    }
    if (!good)
      cout << -1 << '\n';
  }

  return 0;
}
