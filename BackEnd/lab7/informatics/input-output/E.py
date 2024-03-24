v = int(input())
t = int(input())
s = v*t
if v > 0:
    s %= 109
else:
    s = (109 + s) % 109
print(s)

#NE RESHENO POLNOSTYU