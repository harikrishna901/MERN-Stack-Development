#playing the hangman game
import random
import words
import hangman_pics
print("welcome to the Hangman game!!!!")
print("here you have 6 lives, within 6 lives you have to guess the word")
computer_word=random.choice(words.word_list)
blank_list=[]
game_over=True
lives=6
for i in range(len(computer_word)):
    blank_list+='_'
print(blank_list)
while game_over:
    letter=input("guess the letter:")
    for position in range(len(computer_word)):#apple
        if letter==computer_word[position]:
             blank_list[position]=letter
    print(blank_list)
    if letter not  in computer_word:
        lives-=1
        print(f"you have {lives} lives")
        if lives==0:
            print('you lose!!')
            print("better luck next time")
            game_over=False
    if '_' not in blank_list:
        print("you win!!!")
        game_over=False
    print(hangman_pics.diagram[lives])
print("the game has completed successfully!!!!")



