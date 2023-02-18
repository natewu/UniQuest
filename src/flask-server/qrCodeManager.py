import qrcode
import time
#Generate Random String 
import random
import string

from models import Screen, screens_schema
from app import db

QRcodeLength = 20

def get_random_string(length):
    # choose from all lowercase letter
    letters = string.ascii_letters
    result_str = ''.join(random.choice(letters) for i in range(length))
    return result_str
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

class QRcodeManager():
    def __init__(self) -> None:
        pass
    def getNewQRCode(self):
        return get_random_string(QRcodeLength)

    def setQRCodeForScreen(self, screen):
        newCode = self.getNewQRCode()
        screen.curString = newCode
        db.session.commit()
        print(newCode)

    def updateAllQRCodes(self):
        screens = Screen.query.all()
        for s in screens:
            self.setQRCodeForScreen(s)
        results = screens_schema.dump(screens)
        print(results)


