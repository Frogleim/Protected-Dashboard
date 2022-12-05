from fastapi import FastAPI
from pydantic import BaseModel
from app import SignIn
from fastapi import FastAPI, Body, Request
from typing import Dict, Any
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel


app = FastAPI()

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


@app.post('/api/sign_up/')
async def signup():
    pass


@app.post('/api/login/')
async def login(body: Users):
    email = body.email
    password = body.password
    sign_in = SignIn(user_email=email, user_password=password)
    users_data = sign_in.sign_in()
    return users_data