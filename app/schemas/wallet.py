from typing import List

from pydantic import BaseModel


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
