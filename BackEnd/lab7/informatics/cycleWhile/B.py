a = int(input())
div = 2
while div <= a:
    if a % div == 0:
        print(div)
        break
    div += 1
