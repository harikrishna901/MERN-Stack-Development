alpha=['a','b','c','d','e','f',
        'g','h','i','j','k','l','m','n','o','p','q',
        'r','s','t','u','v','w','x','y','z']
play_again=False
def ceaser():
    encrypt_word = ''
    decrypt_word = ''
    while not play_again:
        text=input('Type encrypt for encryption, type decrypt for decryption:\n')
        if text=="encrypt":
            message=input('type your message:\n')
            shift=int(input('type the shift number:\n'))
            for i in message:
                if i in alpha:
                    x=alpha.index(i)
                    result1=(x+shift)%26
                    encrypt_word+=str(alpha[result1])
                else:
                    encrypt_word+=i
            print(f"Here's the encrypted result:{encrypt_word}")
        elif text=='decrypt':
            message= input('type your message:\n')
            shift = int(input('type the shift number:\n'))
            for i in message:
                if i in alpha:
                    x = alpha.index(i)
                    result2 = (x - shift) % 26
                    decrypt_word+= str(alpha[result2])
                else:
                    decrypt_word+=i
            print(f"Here's the decrypted result:{decrypt_word}")
        wanna_play=input('type "yes" if you want to go again.otherwise type "no"\n')
        if wanna_play =='yes':
           pass
        elif wanna_play=='no':
           print('good bye')
           break
ceaser()





