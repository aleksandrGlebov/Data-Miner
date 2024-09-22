from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from ...auth.jwt import create_access_token
from datetime import timedelta

router = APIRouter()

# TODO: Connect real DB and delete that
FAKE_USERS_DB = {
    "testuser": {
        "username": "testuser",
        "hashed_password": "testuser"
    }
}

@router.post("/token")
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends()):
    user = FAKE_USERS_DB.get(form_data.username)

    if not user or form_data.password != user["hashed_password"]:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    access_token_expires = timedelta(minutes=60)
    access_token = create_access_token(
        data={"sub": user["username"]}, expires_delta=access_token_expires
    )

    return {"access_token": access_token, "token_type": "bearer"}