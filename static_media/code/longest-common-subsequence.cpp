#include <array>
#include <string>
using namespace std;
class Solution {
private:
  array<array<int, 1001>, 1001> lcs;

public:
  int longestCommonSubsequence(string text1, string text2) {
    const int n = text1.length();
    const int m = text2.length();

    // the lcs between anything and an empty string is 0
    for (int r = 0; r < m; ++r)
      lcs[r][0] = 0;
    for (int c = 0; c < n; ++c)
      lcs[0][c] = 0;

    for (int r = 0; r < m; ++r) {
      for (int c = 0; c < n; ++c) {
        if (text1[c] == text2[r]) {
          lcs[r + 1][c + 1] = lcs[r][c] + 1;
        } else {
          lcs[r + 1][c + 1] = max(lcs[r + 1][c], lcs[r][c + 1]);
        }
      }
    }
    return lcs[m][n];
  }
};
