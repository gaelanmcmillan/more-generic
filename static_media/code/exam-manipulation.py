n,k = map(int,input().split())
possible_keys = 1 << k
worst_score = [11 for _ in range(possible_keys)]
score_with_key = [[0 for _ in range(n)] for _ in range(possible_keys)]

best_worst = 0

for student in range(n):
    s = [c == 'T' for c in input()]
    for key in range(possible_keys):
        for q in range(k):
            expectation = key & 1 << q != 0
            score_with_key[key][student] += 1 if s[q] == expectation else 0
        worst_score[key] = min(worst_score[key], score_with_key[key][student])

print(max(worst_score))