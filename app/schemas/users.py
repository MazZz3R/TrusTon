from typing import Optional

from pydantic import BaseModel


class UserBase(BaseModel):
    """
    Common user properties
    """
    id: str
    username: Optional[str] = None

    name: Optional[str] = None
    surname: Optional[str] = None

    photo_url: Optional[str] = None


class UserCreate(UserBase):
    """
    Schema for user create request
    """


class UserUpdate(UserBase):
    """
    Schema for user update request
    """


class User(UserBase):
    """
    User as in response in api
    """

    class Config:
        from_attributes = True
