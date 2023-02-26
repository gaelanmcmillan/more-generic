#include <iostream>
#include <algorithm>
#include <numeric>
#include <map>
#include <functional>
#include <vector>

using ll = long long;

/**
 * Count all the ways to sum to `k` with the values in `arr`.
 * Complexity: O(|arr|^2)
 * */
ll count_sums_to_k(ll k, const std::vector<ll>& arr) {
    // `sum[i]` = the number of subsets of `arr` that sum to `i`
    std::vector<ll> sum (k+1, 0);
    sum[0] = 1;
    for (ll x : arr) {
        for (int i = k; i >= 0; --i) {
            if (sum[i] != 0 && i+x <= k) {
                sum[i+x] += sum[i];
            }
        }
    }
    return sum[k];
}

/**
 * Count all disjoint 'runs' of length 3 or more.
 * */
ll count_runs(const std::map<ll, ll>& counts) {
    ll score = 0;
    ll len = 1;
    ll card = -1;
    ll mul = 1;
    for (const auto& [v, k] : counts) {
        if (card == -1) { card = v; mul = k; continue; }
        if (v == card+1) {
            mul *= k;
            len++;
        } else {
            score += (len > 2 ? mul * len : 0LL);
            len = 1;
            mul = k;
        }
        card = v;
    }
    return score + (len > 2 ? mul * len : 0LL);
}

ll n_choose_2(ll n) {
    return (n*n - n)/2;
}

int main () {
		// map each card to a number that reflects the order of the ranks
    const auto encode = [] (char card) -> ll {
        if (card == 'A') return 1LL;
        if (card == 'T') return 10LL;
        if (card == 'J') return 11LL;
        if (card == 'Q') return 12LL;
        if (card == 'K') return 13LL;
        return card - '0';
    };

    int n;
    std::cin >> n;
    std::vector<char> cards (n);
    std::map<ll, ll> counts;

    for (auto& card : cards) {
        std::cin >> card;
        counts[encode(card)]++;
    }

		// Ace through 9 map to 1 through 9. 10s, Jacks, Queens and Kings are worth 10.
    const auto face_value = [] (ll encoding) -> ll {
        if (encoding >= 1 && encoding <= 9) return encoding;
        return 10LL;
    };

    std::vector<ll> values (n);
    std::transform(cards.begin(), cards.end(), values.begin(), 
						[&](char card) { 
								return face_value(encode(card)); 
						});

    ll to15 = count_sums_to_k(15, values);

    ll pairs = std::accumulate(counts.begin(), counts.end(), 0LL,
            [](ll acc, const auto& p) {
                return acc + n_choose_2(p.second);
            });

    ll runs = count_runs(counts);

    std::cout << 2 * (to15 + pairs) + runs << '\n';
}