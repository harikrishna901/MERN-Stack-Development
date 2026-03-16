def add(a,b):
    return a+b
def subtract(a,b):
    return a-b
def multiply(a,b):
    return a*b
def divide(a,b):
    return a/b
operators={'+':add,
           '-':subtract,
           '*':multiply,
           '/':divide,
}
number_1 = int(input('enter the first number:'))
game_begin=True
while game_begin:
    for symbols in operators:
        print(symbols)
    symbol_val = input('pick an operation:')
    number_2 = int(input('enter the second number:'))
    if symbol_val == '+':
        output = add(number_1, number_2)
        print(f'{number_1} {symbol_val} {number_2} = {output}')
    elif symbol_val == '-':
        output = subtract(number_1, number_2)
        print(f'{number_1} {symbol_val} {number_2} = {output}')
    elif symbol_val == '*':
        output = multiply(number_1, number_2)
        print(f'{number_1} {symbol_val} {number_2} = {output}')
    else:
        output = divide(number_1, number_2)
        print(f'{number_1} {symbol_val} {number_2} = {output}')
    again = input(f"enter 'y' to continue with {output} or 'n' to start new calculation or 'x' to exit:").lower()
    if again == 'n':
        number_1=int(input('enter the first number:'))
    elif again== 'x':
        game_begin=False
        print('byee')
    else:
        number_1 =output













