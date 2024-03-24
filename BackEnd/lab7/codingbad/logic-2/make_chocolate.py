def make_chocolate(small, big, goal):
  max_big = min(goal // 5, big)
  remaining = goal - (max_big * 5)
  if remaining <= small:
    return remaining
  else:
    return -1
