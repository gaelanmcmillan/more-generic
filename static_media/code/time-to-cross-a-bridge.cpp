#include <queue>
#include <vector>

using namespace std;

class Solution {
public:
  static int findCrossingTime(int n, int k, vector<vector<int>> &time) {
    const auto left_to_right = [&time](int worker) { return time[worker][0]; };
    const auto pick_up_box = [&time](int worker) { return time[worker][1]; };
    const auto right_to_left = [&time](int worker) { return time[worker][2]; };
    const auto put_down_box = [&time](int worker) { return time[worker][3]; };

    vector<int> efficiency(k);
    vector<int> time_free(k, INT_MAX);

    for (int i = 0; i < k; ++i) {
      efficiency[i] = left_to_right(i) + right_to_left(i);
    }

    auto least_efficient = [&efficiency](int a, int b) {
      if (efficiency[a] == efficiency[b]) {
        return a < b;
      }
      return efficiency[a] < efficiency[b];
    };

    auto first_free = [&time_free](int a, int b) {
      return time_free[a] > time_free[b];
    };

    priority_queue<int, vector<int>, decltype(least_efficient)> left(
        least_efficient),
        right(least_efficient);
    priority_queue<int, vector<int>, decltype(first_free)> done_on_left(
        first_free),
        done_on_right(first_free);

    for (int i = 0; i < k; ++i)
      left.push(i);

    int boxes_left = n;
    int current_time = 0;

    while (boxes_left > 0 || not right.empty() || not done_on_right.empty()) {

      // prefer crossing right to left
      if (not right.empty()) {
        int worker = right.top();
        right.pop();

        current_time += right_to_left(worker);

        // this worker will be ready to rejoin the left queue
        time_free[worker] = current_time + put_down_box(worker);
        done_on_left.push(worker);

      } else if (not left.empty() && boxes_left > 0) {

        int worker = left.top();
        left.pop();

        // this worker "claims" a box
        boxes_left -= 1;

        current_time += left_to_right(worker);

        // this worker will be ready to rejoin the right queue
        time_free[worker] = current_time + pick_up_box(worker);
        done_on_right.push(worker);

      } else {
        current_time = min(
            done_on_right.empty() ? INT_MAX : time_free[done_on_right.top()],
            done_on_left.empty() ? INT_MAX : time_free[done_on_left.top()]);
      }

      // let any workers who are done rejoin the respective queues
      while (not done_on_right.empty() &&
             time_free[done_on_right.top()] <= current_time) {
        int worker = done_on_right.top();
        done_on_right.pop();

        right.push(worker);
      }

      while (not done_on_left.empty() &&
             time_free[done_on_left.top()] <= current_time) {
        int worker = done_on_left.top();
        done_on_left.pop();

        left.push(worker);
      }
    }

    return current_time;
  }
};
