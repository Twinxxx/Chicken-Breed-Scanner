from google import genai
from google.genai.types import Part
import os
from dotenv import load_dotenv
load_dotenv()

client = genai.Client(api_key=os.getenv("GOOGLE_API_KEY"))

prompt = "Read the image and describe in 1 word"

def read_photo(img_bytes: bytes, mime_type: str):
    try:
        print("--- Processing Image With Gemini ---")

        # Create image file object for Gemini
        image_part = Part.from_bytes(
            data=img_bytes,
            mime_type=mime_type
        )

        # Send request to Gemini
        response = client.models.generate_content(
            model="gemini-2.5-flash",
            
            contents=[image_part, prompt],
        )

        return response.text

    except Exception as e:
        print(f"!!! Gemini API ERROR: {e}")
        raise e
