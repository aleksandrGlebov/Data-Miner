from fastapi import FastAPI
from .api.routes import data_miner, auth

app = FastAPI()

app.include_router(auth.router, prefix="/api/v1/auth", tags=["authentication"])
app.include_router(data_miner.router, prefix="/api/v1/dataMiner", tags=["dataMiner"])