#include <array>
#include <functional>
#include <string>
#include <vector>

using namespace std;

struct Trie {
  array<Trie *, 26> next{};
  bool terminus = false;

  void add_word(const string &word) {
    Trie *curr = this;
    for (char letter : word) {
      if (curr->next[letter - 'a'] == nullptr) {
        curr->next[letter - 'a'] = new Trie();
      }
      curr = curr->next[letter - 'a'];
    }
    curr->terminus = true;
  }

  bool has_concatenated(const string &word) {
    const int n = word.length();
    function<bool(int, Trie *, bool)> rec = [&](int start, Trie *curr,
                                                bool hasBranched) {
      for (int i = start; i < n; ++i) {
        if (curr->next[word[i] - 'a'] == nullptr) {
          return false;
        }
        curr = curr->next[word[i] - 'a'];
        if (curr->terminus && i < n) {
          // only valid if we branch at least once
          if (i + 1 == n && hasBranched)
            return true;
          bool branch = rec(i + 1, this, true);
          if (branch) {
            return true;
          }
        }
      }
      return false;
    };

    return rec(0, this, false);
  }
};

class Solution {
public:
  vector<string> findAllConcatenatedWordsInADict(vector<string> &words) {
    Trie root{};
    for (const auto &word : words) {
      root.add_word(word);
    }
    vector<string> concatenated;
    for (const auto &word : words) {
      if (root.has_concatenated(word))
        concatenated.push_back(word);
    }
    return concatenated;
  }
};
