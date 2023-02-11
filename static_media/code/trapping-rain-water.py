from itertools import accumulate
# For fun :)
class Solution:
    trap = lambda self, H: sum(map(lambda t: min(t[0], t[1]) - t[2], zip(accumulate(H, max), reversed(list(accumulate(reversed(H), max))),H)))
