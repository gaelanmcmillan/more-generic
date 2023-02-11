dp = [[-1 for i in range(101)] for j in range(101)]

# n,     m
courses, max_hunger = map(int, input().split())
cals_per_course = list(map(int, input().split()))

max_consecutive_courses = 0
h = max_hunger
while (h > 0):
    h = h*2//3
    max_consecutive_courses += 1

# how much can we eat after `k` consecutive courses?
def hunger(k):
    appetite = max_hunger
    for _ in range(k):
        appetite = 2*appetite//3
    return appetite

# while `score` is recursive, recursion depth will never exceed 1 due to our call order
def score(course, consecutive_courses):
    if (course >= courses or k >= max_consecutive_courses):
        return 0
    if (dp[course][consecutive_courses] != -1):
        return dp[course][k]
    return score(c+1, max_hunger+1) + min(hunger(consecutive_courses), cals_per_course[course])

for c in range(courses-1, -1, -1):
    for k in range(max_consecutive_courses-1, -1, -1):
        take  = score(course=c,   consecutive_courses=k)
        skip1 = score(course=c+1, consecutive_courses=max(0,k-1))
        skip2 = score(course=c+2, consecutive_courses=0)
        dp[c][max_hunger] = max(take, skip1, skip2)

print(dp[0][0])
