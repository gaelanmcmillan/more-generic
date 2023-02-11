#include <iostream>
#include <queue>
#include <set>

using namespace std;

int main() {
  int t;
  cin >> t;
  while (t--) {
    int n;
    cin >> n;
    set<int> seen;
    queue<int> q;
    int packageSize = 1;
    while (n--) {
      int x;
      cin >> x;

      if (seen.find(x) != seen.end()) {
        while (q.front() != x) {
          seen.erase(q.front());
          q.pop();
        }
        q.pop(); // remove x
      } else {
        seen.insert(x);
      }

      q.push(x);
      packageSize = max(packageSize, (int)q.size());
    }
    cout << packageSize << '\n';
  }
}
