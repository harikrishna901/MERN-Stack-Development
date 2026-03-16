import random
import logo_pics
print(logo_pics.Guess)
print()
print('let me think of a number between 1 to 50.')
computer_choice=random.randint(1,50)
def Guess():
    game_level = input("choose level of difficulty.... Type 'easy' or 'hard': ").lower()
    if game_level == 'easy':
        chances = 10
        end_game = False
        while not end_game:
            if chances == 0:
                print('you are out of guesses... you lose!!')
                break
            print(f'you have {chances} attempts remaining to guess the number!!')
            user_choice = int(input('make a Guess:'))
            if user_choice == computer_choice:
                print(f'your guess is right... the answer is {user_choice}')
                end_game = True
            elif user_choice > computer_choice:
                print('your Guess is too high')
                print('Guess again')
            elif user_choice < computer_choice:
                print('your Guess is too low')
                print('Guess again')
            else:
                print('Try again')
            chances = chances - 1
    elif game_level == 'hard':
        chances = 5
        end_game = False
        while not end_game:
            if chances == 0:
                print('you are out of guesses... you lose!!')
                break
            print(f'you have {chances} attempts remaining to guess the number!!')
            user_choice = int(input('make a Guess:'))
            if user_choice == computer_choice:
                print(f'your guess is right... the answer is {user_choice}')
                end_game = True
            elif user_choice > computer_choice:
                print('your Guess is too high')
                print('Guess again')
            elif user_choice < computer_choice:
                print('your Guess is too low')
                print('Guess again')
            else:
                print('Try again')
            chances = chances - 1
    else:
        print("choose correct level either 'hard' or 'easy' ")
Guess()



