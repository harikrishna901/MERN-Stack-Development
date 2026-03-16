#rock paper scissor game
import random
user_val=int(input("enter the user value: enter o for rock , enter 1 for paper and enter 2 for scissor::"))
print(f"user choice:{user_val}")
computer_val=random.randint(0,2)
print(f"computer choice:{computer_val}")
if user_val>=3 or user_val<0:
    print(f"invalid number:{user_val} you loose")
elif (user_val==0) and (computer_val==2):
    print(f"{user_val}_you wins, {computer_val}_computer loose")
elif (user_val==2) and (computer_val==0):
    print(f"{user_val}_you loose, {computer_val}_computer wins")
elif computer_val>user_val:
    print(f"{user_val}_ you loose, {computer_val}_computer wins")
elif user_val>computer_val:
    print(f"{user_val}_you wins, {computer_val}_computer loose")
elif user_val==computer_val:
    print(f"{user_val}  {computer_val}  draw match")
else:
    print(f"invalid number {user_val} and you loose")
