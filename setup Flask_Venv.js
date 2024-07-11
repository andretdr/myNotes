/////////////////////////////////////////////////////////////////
// create a python virtual env to install using pip install
/////////////////////////////////////////////////////////////////

python -m venv venv

// activate venv
.\venv\Scripts\activate

// sometimes cannot find module???
// deactivate, reactivate venv

deactivate
.\venv\Scripts\activate




flask run


// running uvicorn
main.py
..
app = FastAPI()
..
// main is the file name, app is the app instance, reload means reload app whenever got change
uvicorn main:app --reload
