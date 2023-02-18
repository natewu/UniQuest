import qrcode
import time
#Generate Random String 
import random
import string


QRcodeLength = 20

def get_random_string(length):
    # choose from all lowercase letter
    letters = string.ascii_letters
    result_str = ''.join(random.choice(letters) for i in range(length))
    print("Random string of length", length, "is:", result_str)

from threading import Timer

class RepeatTimer(Timer):
    def run(self):
        while not self.finished.wait(self.interval):
            self.function(*self.args, **self.kwargs)

def repeatedTimer():
    #
    newCodeString = get_random_string(QRcodeLength)
    print(newCodeString)
    
    pass
    #generateNewQRCodeString

def returnQRCode(id):
    return id + 1


timer = RepeatTimer(1, repeatedTimer)
#keep this code for the thread to be killed:
timer.daemon = True
timer.start()
time.sleep(10)