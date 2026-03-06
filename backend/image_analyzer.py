from ultralytics import YOLO
from PIL import Image
import io

model = YOLO("./best.pt")

def read_photo(img_bytes: bytes, mime_type: str):
    try:
        print("Reading photo...")
        img = Image.open(io.BytesIO(img_bytes))
        results = model(img)

        if results and len(results) > 0:
            result = results[0]
            
            # Classification model uses probs, not boxes
            if result.probs is not None:
                class_id = int(result.probs.top1)
                confidence = float(result.probs.top1conf)
                class_name = model.names[class_id]
                return {"breed": class_name, "confidence": round(confidence, 4)}

        return {"breed": "Unknown", "confidence": 0.0}

    except Exception as e:
        print(f"!!! Error: {e}")
        return {"breed": "Error", "confidence": 0.0}