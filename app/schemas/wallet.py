from datetime import datetime
from typing import List, Optional

from pydantic import BaseModel, Field


class WalletJettonInfo(BaseModel):
    name: str | None
    description: str | None
    image: str | None
    symbol: str | None
    address: str
    balance: float


class WalletFunds(BaseModel):
    ton: float
    jettons: List[WalletJettonInfo]


class WalletCreate(BaseModel):
    name: str = Field(..., max_length=128)
    mnemonics: str = Field(..., max_length=2048)
    address: str = Field(..., min_length=TODO, max_length=TODO)


class WalletUpdate(BaseModel):
    name: Optional[str] = Field(None, max_length=128)


class Wallet(WalletCreate):
    id: int

    name: str = Field(..., min_length=3, max_length=128)
    mnemonics: str = Field(..., max_length=2048)
    address: str = Field(..., min_length=TODO, max_length=TODO)

    created: datetime

    class Config:
        from_attributes = True
