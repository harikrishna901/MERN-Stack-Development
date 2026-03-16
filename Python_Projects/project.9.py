data_base={'latte':
    {
    'ingredients':
        {'coffee':39,
         'water':50,
         'milk':25
         },
    'cost':160
    },

          'expresso':
    {
     'ingredients':
        {'coffee':20,
         'water':45,
         'milk':20
         },
    'cost':190
    },
         'cappuccino':
    {
     'ingredients':
        {'coffee':50,
         'water':75,
         'milk':50
         },
    'cost':220
    }

}
resources={'ingredients':
    {'coffee':100,
      'water':500,
    'milk':200
    }
}
Money=0

def func():
    if Coffee_Type=='latte':
        remaining_coffee=resources['ingredients']['coffee']-data_base[Coffee_Type]['ingredients']['coffee']
        remaining_water=resources['ingredients']['water'] - data_base[Coffee_Type]['ingredients']['water']
        remaining_milk=resources['ingredients']['milk'] - data_base[Coffee_Type]['ingredients']['milk']
    elif Coffee_Type=='cappuccino':
        remaining_coffee=resources['ingredients']['coffee']-data_base[Coffee_Type]['ingredients']['coffee']
        remaining_water=resources['ingredients']['water'] - data_base[Coffee_Type]['ingredients']['water']
        remaining_milk=resources['ingredients']['milk'] - data_base[Coffee_Type]['ingredients']['milk']
    elif Coffee_Type=='expresso':
        remaining_coffee=resources['ingredients']['coffee']-data_base[Coffee_Type]['ingredients']['coffee']
        remaining_water=resources['ingredients']['water'] - data_base[Coffee_Type]['ingredients']['water']
        remaining_milk=resources['ingredients']['milk'] - data_base[Coffee_Type]['ingredients'] ['milk']
    print(remaining_coffee)
    print(remaining_milk)
    print(remaining_water)

end_game=False
while not end_game:
    Coffee_Type=input('What would you like to have? (latte/expresso/cappuccino) :')
    if Coffee_Type=='latte':
        if data_base[Coffee_Type]['ingredients']['coffee'] > resources['ingredients']['coffee'] or \
                data_base[Coffee_Type]['ingredients']['water'] > resources['ingredients']['water'] or \
                data_base[Coffee_Type]['ingredients']['milk'] > resources['ingredients']['milk']:
            print(f'insufficient material')

        else:
            print("Please insert coins")
            coin_5 = int(input("How many 5Rs coins:"))
            coin_10 = int(input("How many 10Rs coins:"))
            coin_20 = int(input("How many 20RS coins:"))
            inserted_money = ((coin_5 * 5) + (coin_10 * 10) + (coin_20 * 20))
            Money += data_base[Coffee_Type]['cost']
            if inserted_money == data_base[Coffee_Type]['cost']:
                print(f"Thankyou for giving correct money {inserted_money}")
                print(f"Here is your {Coffee_Type}")
            elif inserted_money >= data_base['latte']['cost']:
                change = inserted_money - data_base['latte']['cost']
                print(f'Here is your change Rs{change}')
                print(f'Here is your {Coffee_Type}')
            else:
                print(f'SORRY Money not sufficient')
                print(f'Here is your Rs{inserted_money}')
        func()
    elif Coffee_Type == 'expresso':
        if data_base[Coffee_Type]['ingredients']['coffee'] > resources['ingredients']['coffee'] or \
                data_base[Coffee_Type]['ingredients']['water'] > resources['ingredients']['water'] or \
                data_base[Coffee_Type]['ingredients']['milk'] > resources['ingredients']['milk']:
            print(f'insufficient material')
        else:
            print("Please insert coins")
            coin_5 = int(input("How many 5Rs coins:"))
            coin_10 = int(input("How many 10Rs coins:"))
            coin_20 = int(input("How many 20RS coins:"))
            inserted_money = ((coin_5 * 5) + (coin_10 * 10) + (coin_20 * 20))
            Money += data_base['expresso']['cost']
            if inserted_money == data_base[Coffee_Type]['cost']:
                print(f"Thankyou for giving correct money {inserted_money}")
                print(f"Here is your {Coffee_Type}")
            elif inserted_money >= data_base[Coffee_Type]['cost']:
                change = inserted_money - data_base['expresso']['cost']
                print(f'Here is your change Rs{change}')
                print(f'Here is your {Coffee_Type}')
            else:
                print(f'SORRY Money not sufficient')
                print(f'Here is your Rs{inserted_money}')
        func()
    elif Coffee_Type == 'cappuccino':
        if data_base[Coffee_Type]['ingredients']['coffee'] > resources['ingredients']['coffee'] or \
                data_base[Coffee_Type]['ingredients']['water'] > resources['ingredients']['water'] or \
                data_base[Coffee_Type]['ingredients']['milk'] > resources['ingredients']['milk']:
            print(f'insufficient material')
        else:
            print("Please insert coins")
            coin_5 = int(input("How many 5Rs coins:"))
            coin_10 = int(input("How many 10Rs coins:"))
            coin_20 = int(input("How many 20RS coins:"))
            inserted_money = ((coin_5 * 5) + (coin_10 * 10) + (coin_20 * 20))
            Money += data_base['cappuccino']['cost']
            if inserted_money == data_base['cappuccino']['cost']:
                print(f"Thankyou for giving correct money {inserted_money}")
                print(f"Here is your {Coffee_Type}")
            elif inserted_money >= data_base['cappuccino']['cost']:
                change = inserted_money - data_base['cappuccino']['cost']
                print(f'Here is your change Rs{change}')
                print(f'Here is your {Coffee_Type}')
            else:
                print(f'SORRY Money not sufficient')
                print(f'Here is your Rs{inserted_money}')
        func()

    elif Coffee_Type=='off':
        end_game=True
    else:
        print('Try again')
    print(f'money {Money}')










