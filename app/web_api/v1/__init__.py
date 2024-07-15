"""
v1 routes
"""

from fastapi import APIRouter

from app.web_api.v1 import auth
from app.web_api.v1 import swap

v1_router = APIRouter()
v1_router.include_router(swap.router, tags=['Swap'])
v1_router.include_router(auth.router, tags=['Auth'])
