#include <iostream>
#include <string>
#include <unordered_map>
#include <set>
#include <stack>

using hierarchy = std::unordered_map<int, std::set<int>>;

/**
 * Read an integer from a string iterator,
 * advancing the iterator. We trust there's a int here.
 * */
template <class II>
int next_int(II& it, II& end);

/**
 * Parse a chart string of the following form:
 * 
 * <hierarchy> ::= <department number> (<hierarchy>)*
 * 
 * In this case, the leading (head) department in a hierarchy
 * is in charge of all the subsequent parenthesised hierarchies.
 * 
 * For example, the chart string '11 (10) (12 (13) (17) (28))'
 * corresponds to the following hierarchy:
 * 
 *                11 (the head department)
 *               /  \
 *              10  12
 *                 / | \ 
 *               13 17 28
 */
auto parse_chart (const std::string& chart_string) -> std::pair<int, hierarchy> {
    auto it  = chart_string.begin();
    auto end = chart_string.end();
    hierarchy org;
    std::stack<int> roots;
    int head = next_int(it, end);
    roots.push(head);

    while (it != end) {
        switch (*it) {
            case ' ': { it++; break; }
            case '(': { it++; break; }
            case ')': { it++; roots.pop(); break; }

            // the 0-9 case
            default: {
                int x = next_int(it, end);
                org[roots.top()].insert(x);
                roots.push(x);
            }
        }
    }

    return {head, org};
}

int main () {
    std::string a,b;
    std::getline(std::cin, a);
    std::getline(std::cin, b);

    auto [r1, org1] = parse_chart(a);
    auto [r2, org2] = parse_chart(b);

    if (r1 != r2) {
        std::cout << "No\n";
        return 0;
    }

    std::stack<int> stk;
    stk.push(r1);

    // walk through the first hierarchy,
    // confirming it's the same as all the other hierarchies.
    while (!stk.empty()) {
        int r = stk.top();
        stk.pop();

        if (org1[r] != org2[r]) {
            std::cout << "No\n";
            return 0;
        }

        for (auto child : org1[r]) {
            stk.push(child);
        }
    }
    std::cout << "Yes\n";
}


template <class II>
int next_int(II& it, II& end) {
    int x = 0;
    while (it != end && *it >= '0' && *it <= '9') {
        x *= 10;
        x += *it++ - '0';
    }
    return x;
}