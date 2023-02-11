l,d,n = map(int, input().split())
birds = [int(input()) for _ in range(n)]
birds.sort()
offset = 6

def fill_interval(start, end, gap):
    return (end - start) // gap + 1 if start <= end else 0

if n == 0:
    print(fill_interval(0, l - 2*offset, d))
else:
    total = 0
    for i in range(n+1):
        start = offset if i==0 else birds[i-1] + d
        end = l - offset if i==n else birds[i] - d
        total += fill_interval(start, end, d)
        
    print(total)
    