#include <functional>
#include <iostream>
#include <string>
#include <vector>

using namespace std;

int main() {
  int m, n;
  cin >> m >> n;
  vector<string> grid(m);
  for (auto &row : grid)
    cin >> row;
  vector<vector<bool>> seen(m, vector<bool>(n, false));

  vector<pair<int, int>> dirs;

  for (int dr : {-1, 0, 1})
    for (int dc : {-1, 0, 1})
      if (dr || dc)
        dirs.emplace_back(dr, dc);

  auto in_bounds = [&](int r, int c) {
    return (r >= 0 && r < m && c >= 0 && c < n);
  };

  int count = 0;

  function<int(int, int)> flood_fill = [&](int r, int c) {
    for (auto [dr, dc] : dirs) {
      int nr = r + dr, nc = c + dc;
      if (!in_bounds(nr, nc))
        continue;
      if (grid[nr][nc] != '#')
        continue;
      if (!seen[nr][nc]) {
        seen[nr][nc] = true;
        flood_fill(nr, nc);
      }
    }
    return 1;
  };

  for (int r = 0; r < m; ++r) {
    for (int c = 0; c < n; ++c) {
      if (grid[r][c] != '#')
        continue;

      if (!seen[r][c]) {
        seen[r][c] = true;
        count += flood_fill(r, c);
      }
    }
  }

  cout << count << '\n';
}