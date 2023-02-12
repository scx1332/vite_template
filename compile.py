# walk through files in a frontend
import os
import base64

for root, dirs, files in os.walk("frontend"):
    file_dir = root.replace("\\", "/").replace("frontend/", "")
    for file in files:
        print(os.path.join(file_dir, file))
        with open(os.path.join(root, file), "rb") as f:
            bin = f.read()
            print(base64.b64encode(bin))
