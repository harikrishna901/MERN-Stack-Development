import os
print('****welcome to the silent Aution Program*****')
bidder_dic={}
def find_winner():
    end_bidder = False
    while not end_bidder:
        name=input('What is your name?: ')
        price=int(input('What is your bid?: '))
        bidder_dic[name]=price
        again=input('Are there any other bidders? Type yes or no:')
        if again=='yes':
            os.system('cls')
        else:
            print(bidder_dic)
            print(f'the winner is {max(bidder_dic)} with a bid of {bidder_dic[max(bidder_dic)]}')
            end_bidder=True
find_winner()

