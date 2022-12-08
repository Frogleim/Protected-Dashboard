from fastapi import FastAPI
from pydantic import BaseModel
from app import SignIn
from fastapi import FastAPI, Body, Request
from typing import Dict, Any
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

app = FastAPI()


def fetch_data():
    if not firebase_admin._apps:
        cred = credentials.Certificate("./protected-dashboard-firebase.json")
        firebase_admin.initialize_app(cred)

        db = firestore.client()
        doc_ref = db.collection(u'users').document(u'IkN4q8eRTLaxSQmP85ap7vcuiK23')

        doc = doc_ref.get()
        return doc.to_dict()


origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Users(BaseModel):
    email: str
    password: str


class Data(BaseModel):
    user_id: str


@app.post('/api/get_exam_data/')
async def getData():
    return fetch_data()


@app.post('/api/login/')
async def login(body: Users):
    email = body.email
    password = body.password
    sign_in = SignIn(user_email=email, user_password=password)
    users_data = sign_in.sign_in()
    return users_data
