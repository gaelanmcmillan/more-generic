#include <algorithm>
#include <iostream>
#include <numeric>
#include <string>
using namespace std;
const int kMaxStudents = 1000;
const int kMaxQuestions = 10;
const int kMaxKeys = 1 << kMaxQuestions;

int withKey[kMaxStudents][kMaxKeys];
int worstScore[kMaxKeys];

int main() {
  int n, k;
  cin >> n >> k;
  const int kPossibleKeys = 1 << k;
  for (int i = 0; i < kPossibleKeys; ++i) {
    worstScore[i] = 11;
  }
  for (int i = 0; i < n; ++i) {
    string s;
    cin >> s;
    for (int key = 0; key < kPossibleKeys; ++key) {
      withKey[i][key] = 0; // initialize
      for (int question = 0; question < k; ++question) {
        bool trueOnKey = key & 1 << question;
        if ((s[question] == 'T' && trueOnKey) ||
            (s[question] == 'F' && !trueOnKey)) {
          withKey[i][key]++;
        }
      }
      worstScore[key] = min(worstScore[key], withKey[i][key]);
    }
  }
  cout << *max_element(begin(worstScore), end(worstScore)) << '\n';
}