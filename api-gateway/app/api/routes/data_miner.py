from fastapi import APIRouter, Depends
from ...auth.dependencies import get_current_user
from ...grpc_client.data_miner import data_miner_client

router = APIRouter()

@router.get("/protected-data")
async def get_protected_data(query: str, current_user: str = Depends(get_current_user)):
    data = data_miner_client.get_data(query)
    
    return {
        "user": current_user,
        "data": data,
        "message": "This is protected data retrieved from Data Miner"
    }