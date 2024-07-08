from typing import List
from pydantic import BaseModel


class WriterTask(BaseModel):
    description: str = ""
    keywords: List[str] = []
    audience: str = ""
