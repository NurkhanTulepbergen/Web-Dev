a = int(input())
arr = list(map(int, input().split()))
for i in range(a-1, -1, -1):
    print(arr[i], end=" ")