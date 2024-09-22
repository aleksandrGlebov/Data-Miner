from fastapi import Depends
from fastapi.security import OAuth2PasswordBearer
from .jwt import verify_token

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="api/v1/auth/token")

async def get_current_user(token: str = Depends(oauth2_scheme)):
    return verify_token(token)