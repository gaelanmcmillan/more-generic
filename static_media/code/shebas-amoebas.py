m, n = map(int,input().split())
grid = [input() for _ in range(m)]
seen = [[False for _ in range(n)] for _ in range(m)]
dirs = [(dr,dc) for dr in [-1,0,1] for dc in [-1,0,1] if dr or dc]
in_bounds = lambda r,c: 0<=r<m and 0<=c<n

def flood_fill(sr,sc):
    stack = []
    stack.append((sr, sc))
    while stack:
        r,c = stack.pop()
        seen[r][c] = True
        for dr, dc in dirs:
            nr, nc = r+dr, c+dc
            if not in_bounds(nr,nc) or grid[nr][nc]=='.' or seen[nr][nc]:
                continue

            stack.append((nr, nc))
                
amoebas = 0

for r in range(m):
    for c in range(n):
        if seen[r][c] or grid[r][c] == '.':
            continue
        flood_fill(r,c)
        amoebas += 1
        
print(amoebas)
