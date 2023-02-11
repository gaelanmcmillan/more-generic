#include <array>
#include <set>
#include <string>
#include <unordered_map>

using namespace std;

class Solution {
public:
  string smallestEquivalentString(string s1, string s2, string baseStr) {
    // for each letter, what is the lexicographically smallest equivalent
    // letter?
    array<int, 26> dsu;
    for (int &i : dsu)
      i = -1;

    const int n = s1.size();

    auto find = [&](int i) {
      while (dsu[i] >= 0) {
        i = dsu[i];
      }
      return i;
    };

    auto unify = [&](int i, int j) {
      int pi = find(i);
      int pj = find(j);
      if (pi == pj)
        return;

      if (pi < pj) {
        dsu[pj] = pi;
      } else {
        dsu[pi] = pj;
      }
    };

    unordered_map<char, set<char>> equiv;
    for (int i = 0; i < n; i++) {
      unify(s1[i] - 'a', s2[i] - 'a');
    }

    string res{};
    for (char c : baseStr) {
      res.push_back(find(c - 'a') + 'a');
    }

    return res;
  }
};
