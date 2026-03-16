import os
import random
import dic_pt_8
print(dic_pt_8.logo)
score=0
end_game=False
while not end_game:
    compare1 = random.choice(dic_pt_8.data)
    compare2 = random.choice(dic_pt_8.data)
    os.system('cls')
    print(f"compare1: name_{compare1['name']} description_{compare1['description']}")
    print(dic_pt_8.vs_logo)
    print(f"compare2:  name_{compare2['name']} description_{compare2['description']}")
    participant=input("choose the number either '1' or '2' :")
    if compare1['followers'] > compare2['followers']:
        if participant=='1':
            print(dic_pt_8.higher_logo)
            score+=1
            print(f'you are right and your score is {score}')
        elif participant=='2':
            print(dic_pt_8.lower_logo)
            print(f'you are wrong and final score is {score}')
            end_game=True
        else:
            print('try with one or two:::')
    elif compare1['followers'] < compare2['followers']:
        if participant=='1':
            print(dic_pt_8.lower_logo)
            print(f'you are wrong and final score is {score}')
            end_game=True
        elif participant=='2':
            score+=1
            print(dic_pt_8.higher_logo)
            print(f'you are right and your score is {score} ')
        else:
            print('try with one or two:::')
    else:
        print("DRAW    ______Try Again_____")
    os.system('cls')

