//
// Created by Gaelan McMillan on 2022-09-10.
//

/* * * * * * *\
 * Objective:
 *      Sort a std::container of elements to find the longest chain,
 *      given a comparator describing some partial order.
 *
 * Return value could be a few things. Some problems only need to know the
 * number of elements in the longest chain. (The Longest Monotone Subsequence
 * problem)
 *
 * Some variations ask for the subsequence itself. In this case, having patience
 * return a lazy-convertible struct (essentially a wrapper around the
 * subsequence tail) could be ideal.
 *
 * Let's explore how we want the API to behave.
 * In the case of "Poklon":
 *
 * ```
 *      struct interval { int low, high; };
 *      std::vector<interval> intervals {...};
 *      sort(intervals.begin(), intervals.end(), preprocess);
 *      auto LIS = patience(intervals.begin(), intervals.end(), comparator);
 *      for (auto& element : LIS)
 *      {
 *           std::cout << element.low << ' ' << element.high << '\n';
 *      }
 * ```
 *
 * In the case of "Russian Doll Envelopes"
 *
 * ```
 *      sort(envelopes.begin(), envelopes.end(), preprocess);
 *      auto LIS = patience(envelopes.begin(), envelopes.end(), comparator);
 *      return LIS.size();
 * ```
 *
 * Currently passing longest-monotone-subsequence tests.
 * Non-monotone tests are more subtle.
 * */
#include <algorithm>
#include <iostream>
#include <numeric>
#include <vector>

template <class InputIterator, class Comparator, class BiPred>
auto __patience(InputIterator begin, InputIterator end, Comparator pre,
                BiPred pred) {
  using T = typename std::iterator_traits<InputIterator>::value_type;

  if constexpr (not std::is_same_v<Comparator, std::nullptr_t>)
    std::sort(begin, end, pre);

  struct node {
    T item;
    node *next;
    node() = default;
    node(T t, node *p) : item(t), next(p) {}
  };

  auto node_pred = [&pred](node *a, node *b) { return pred(a->item, b->item); };

  const auto dist = std::distance(begin, end);
  node *nodes = new node[dist];

  std::vector<node *> piles;

  for (; begin != end; ++begin) {
    node *wrapped = new (nodes++) node(*begin, nullptr);
    if (piles.empty()) {
      piles.push_back(wrapped);
      continue;
    }

    auto lb = std::lower_bound(piles.begin(), piles.end(), wrapped, node_pred);

    if (lb == piles.begin()) // new first pile
    {
      *lb = wrapped;
    } else if (lb == piles.end()) {
      wrapped->next = piles.back();
      piles.push_back(wrapped);
    } else {
      wrapped->next = *(lb - 1);
      *lb = wrapped;
    }
  }

  std::vector<T> seq;
  node *cur = piles.back();

  while (cur != nullptr) {
    seq.push_back(cur->item);
    cur = cur->next;
  }

  std::reverse(seq.begin(), seq.end());
  return seq;
}

template <class II> auto patience(II begin, II end) {
  using T = typename std::iterator_traits<II>::value_type;
  return __patience(begin, end, nullptr, std::less<T>());
}

template <class II, class Comparator, class BiPred>
auto patience(II begin, II end, Comparator pre, BiPred pred) {
  return __patience(begin, end, pre, pred);
}

using namespace std;

int main() {
  struct interval {
    int low;
    int high;
  };

  int n;
  cin >> n;
  vector<interval> intervals(n);
  for (interval &i : intervals) {
    cin >> i.low >> i.high;
  }

  auto preprocess = [](const interval &a, const interval &b) {
    if (a.low == b.low)
      return a.high > b.high;
    return a.low < b.low;
  };

  auto pred = [](const interval &a, const interval &b) {
    return a.high >= b.high;
  };

  auto LIS = patience(intervals.begin(), intervals.end(), preprocess, pred);

  cout << LIS.size() << '\n';
  for (auto e : LIS)
    std::cout << e.low << ' ' << e.high << '\n';

  return 0;
}