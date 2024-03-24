a = int(input())
b = 1
check = True
while b <= a:
    if a == b:
        print("YES")
        check = False
        break
    b *= 2
if check:
    print("NO")
