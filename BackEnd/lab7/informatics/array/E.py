a = int(input())
arr = list(map(int, input().split()))
check = True
for i in range(a-1):
    if arr[i] > 0 and arr[i+1] > 0 or arr[i] < 0 and arr[i+1] < 0:
        print("YES")
        check = False
        break
if check:
    print("NO")