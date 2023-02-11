n = int(input())
divs = [2 for _ in range(3000001)]
divs[1] = 1
for i in range(2,n):
    for j in range(2,n):
        if i*j>n: break
        divs[i*j] += 1

print ('\n'.join(map(str,divs[1:n+1])))
