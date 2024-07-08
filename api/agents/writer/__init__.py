import json
from typing import List
from pydantic import BaseModel

from pathlib import Path
folder = Path(__file__).parent.absolute().as_posix()

from promptflow.core import tool, Prompty
flow = Prompty.load(folder + "/writer.prompty")

@tool
def execute(
      description: str,
      keywords: List[str],
      audience: str
) -> str:

  # execute the flow as function
  result = flow(
    description = description,
    keywords = keywords,
    audience = audience
  )

  return result
