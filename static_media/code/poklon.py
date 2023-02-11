import fileinput

class Interval:
    def __init__(self, low, high, next=None):
        self.low  = low
        self.high = high
        self.next = next

    def __str__(self):
        return f"{self.low} {self.high}"

    def __lt__(self, other):
        """implement less than for initial sort"""
        if self.low == other.low:
            return self.high > other.high
        else:
            return self.low <= other.low


def get_lower_bound(arr, sequence_tails, reference):
    """uses binary search to find the first sequence tail that is smaller than the reference"""
    lo = -1
    up = len(sequence_tails) - 1

    while (up - lo > 1):
        mid = lo + (up - lo) // 2

        if (arr[sequence_tails[mid]].high < reference.high):
            up = mid
        else:
            lo = mid

    return up


def longest_decreasing_subsequence(arr, n):
    """A subsequence of sequence S is decreasing if S[i] > S[j] and i < j"""

    sequence_tails = [0]

    for i in range(1, n):
        if (arr[i].high > arr[sequence_tails[0]].high):
            # new largest value
            # this is placed at the head of the sequence tails
            # if subsequent elements are less than this, they will
            # be inserted into the list, possibly superceding the length
            # of the previous longest sequence
            sequence_tails[0] = i

        elif (arr[i].high <= arr[sequence_tails[-1]].high):
            # current element is smaller than the smallest
            # sequence tail, meaning it should
            # extend the current longest sequence
            arr[i].next = sequence_tails[-1]
            sequence_tails.append(i)

        else:
            # the current element is smaller
            # than the largest element seen so far,
            # but larger than the smallest element seen so far.
            # this means that if it replaced one of the previous
            # elements in a subsequence, that subsequence will
            # at worst stay the same length, and at best grow longer

            # the current element should be inserted
            # into the ranking of subsequences such that
            # it comes just before the next element it is greater than

            pos = get_lower_bound(arr, sequence_tails, arr[i])

            arr[i].next = sequence_tails[pos-1]
            sequence_tails[pos] = i

    i = sequence_tails[-1]
    out = []
    while (i is not None):
        out.append(arr[i])
        i = arr[i].next

    return reversed(out)


if __name__ == "__main__":
    f = fileinput.input()
    n = int(next(f))
    intervals = []

    for i in range(n):
        intervals.append(Interval(*map(int, next(f).strip().split())))

    intervals.sort()

    longest = list(longest_decreasing_subsequence(intervals, n))

    print(len(longest))
    for interval in longest:
        print(str(interval))
