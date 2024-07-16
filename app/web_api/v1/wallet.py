from fastapi import APIRouter, Depends

from app import models, schemas
from app import services

router = APIRouter(prefix='/wallet')


@router.get("/get_funds", response_model=schemas.WalletFunds)
async def get_wallet_funds(wallet_addr: str,
                           user: models.User = Depends(services.security.get_user)):
    """
    Get funds present on wallet.
    """
    return services.wallet_funds.get_wallet_funds(wallet_addr)
