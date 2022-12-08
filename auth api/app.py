import pyrebase
from pprint import pprint


class SignIn:
    def __init__(self, user_email, user_password):
        self.email = user_email
        self.password = user_password
        self.config = {
            'apiKey': "AIzaSyAMTEiOhYA14PVT91sh1ffZYwAsGMudaI8",
            'authDomain': "protected-dashboard.firebaseapp.com",
            'projectId': "protected-dashboard",
            'storageBucket': "protected-dashboard.appspot.com",
            'messagingSenderId': "104564027329",
            'appId': "1:104564027329:web:b7b120bc1c785e46f20940",
            'measurementId': "G-GJTYC7YS3X",
            "databaseURL": ""
        }

    def sign_in(self):
        firebase = pyrebase.initialize_app(self.config)
        try:
            auth = firebase.auth()
            sign_in = auth.sign_in_with_email_and_password(email=self.email, password=self.password)

            return sign_in
        except Exception:
            print('Failed to sign in...')

    def get_data(self):
        user_id = self.sign_in()['localId']
        return user_id

    def sign_up(self):
        firebase = pyrebase.initialize_app(self.config)
        try:
            auth = firebase.auth()
            user = auth.create_user_with_email_and_password(email=self.email, password=self.password)
            return user
        except Exception:
            print('Failed to sign up....')
