#include <iostream>
#include <queue>
#include <vector>

using namespace std;

class Solution {
public:
  struct flight {
    int cost, dest, len;
  };
  int findCheapestPrice(int n, vector<vector<int>> &flights, int src, int dst,
                        int k) {

    // build adjacency list (reverse edge direction)
    vector<vector<pair<int, int>>> adj(n);
    for (auto &flight : flights) {
      adj[flight[1]].emplace_back(flight[0], flight[2]);
    }

    // minq comparator
    auto cheapest = [](const flight &a, const flight &b) {
      return a.cost > b.cost;
    };

    int mincost = INT_MAX;

    vector<vector<bool>> flew(n, vector<bool>(n, false));

    // djikstra's with limit
    vector<bool> seen(n, false);
    seen[dst] = true;
    priority_queue<flight, vector<flight>, decltype(cheapest)> pq(cheapest);
    pq.push({0, dst, 0});

    while (!pq.empty()) {
      auto [cost, airport, len] = pq.top();
      pq.pop();

      for (auto [nei, price] : adj[airport]) {

        if (nei == src && len <= k) {
          mincost = min(mincost, cost + price);
        }

        if (!flew[airport][nei] && len + 1 <= k) {
          flew[airport][nei] = true;
          pq.push({cost + price, nei, len + 1});
        }
      }
    }

    return mincost == INT_MAX ? -1 : mincost;
  }
};
