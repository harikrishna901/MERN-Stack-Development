#password generator easy level______________________________________________
#import random
#print("welcome to the password Generator")
#l=int(input("how many letters would you like in your password?\n"))
#s=int(input("how many symbols would you like?\n"))
#n=int(input("how many numbers would you like?\n"))
#ll=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v']
#ls=['@','!','$','%','*']
#ln=['6','3','8','1']
#for i in range(1):
    #for j in range(l):
      #  r=random.choice(ll)
     #   print(r,end="")
    #for k in range(s):
#       r=random.choice(ls)
       # print(r,end="")
   # for m in range(n):
    #    r=random.choice(ln)
     #   print(r,end="")
#password generator hard level____________________________________________-
#password=[]
#for n in range(1,l+1):
 #   r=random.choice(ll)
  #  password+=r
#for o in range(1,s+1):
 #   r=random.choice(ls)
  #  password+=r
#for p in range(1,n+1):
 #   r=random.choice(ln)
  #  password+=r
#random.shuffle(password)
#string=""
#for i in password:
 #   string+=i
#print(string)
import random
import passwordgenerator
print('welcome to the password generator!!!')
letter=int(input("how many letters do you want in your password?"))
number=int(input("how many numbers do you want in your password?"))
symbol=int(input("how many symbols do you want in your password?"))
#for i in range(1):
    #for j in range(letter):
      #  ll = random.choice(passwordgenerator.letters)
     #   print(ll,end='')
    #for k in range(number):
       # ln = random.choice(passwordgenerator.numbers)

        #print(ln,end='')
    #for l in range(symbol):
     #   ls = random.choice(passwordgenerator.symbols)
      #  print(ls,end='')
#password generator for hard level
password=[]
for i in range(letter):
    l=random.choice(passwordgenerator.letters)
    password+=l
for j in range(number):
    n=random.choice(passwordgenerator.numbers)
    password+=n
for l in range(symbol):
    s=random.choice(passwordgenerator.symbols)
    password+=s
random.shuffle(password)
string=""
for i in password:
    string+=i
print(string)