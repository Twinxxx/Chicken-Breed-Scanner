from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from google import genai
from PIL import Image
import io 
import os 
from dotenv import load_dotenv
from image_analyzer import read_photo
load_dotenv()

app = FastAPI()


origins = [
    "http://localhost",
    "http://localhost:3000",  # if your frontend runs on this port
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/analyze-image")
async def analyze_image(file: UploadFile = File(...)):

    if not file.content_type.startswith("image/"):
        return {"error": "File must be an image"}

    img_bytes = await file.read()

    try:
        Image.open(io.BytesIO(img_bytes))
    except Exception:
        return {"error": "Invalid image format"}

    response = read_photo(img_bytes, file.content_type)

    return {"breed": response}
