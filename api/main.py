import json
from dotenv import load_dotenv

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

import agents.writer as writer
from models import WriterTask

load_dotenv()

origins = [
    "http://localhost:5173",
]

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.post("/api/posts")
async def create_posts(task: WriterTask):
    response = writer.execute(
        description=task.description, keywords=task.keywords, audience=task.audience
    )
    print(response)
    return json.loads(response)
