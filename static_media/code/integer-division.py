from collections import defaultdict
n,d = map(int, input().split())
groups = defaultdict(int)
total = 0
for x in map(int, input().split()):
    total += groups[x//d]
    groups[x//d] += 1
print(total)
