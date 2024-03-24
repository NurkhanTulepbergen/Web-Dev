import math

a = int(input())
sqrt_a = int(math.sqrt(a))
cnt = 0

for i in range(1, sqrt_a + 1):
    if a % i == 0:
        cnt += 1
        if i != a // i:
            cnt += 1

print(cnt)