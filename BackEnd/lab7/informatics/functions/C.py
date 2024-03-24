def xor(a, b):
    if (a and b) or (not a and not b):
        return 0
    else:
        return 1

a, b = map(int, input().split())
print(xor(a, b))