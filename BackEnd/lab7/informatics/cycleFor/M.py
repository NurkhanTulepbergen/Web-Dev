N = int(input())
count_zeros = 0

for _ in range(N):
    number = int(input())
    if number == 0:
        count_zeros += 1

print(count_zeros)