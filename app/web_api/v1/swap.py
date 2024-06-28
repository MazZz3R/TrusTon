from fastapi import APIRouter

from app import schemas, services

router = APIRouter(prefix='/swap')


@router.post("/dedust")
async def swap_dedust(swap_info: schemas.SwapCreate):
    """
    Swap TON with some token on dedust.
    """
    await services.dedust_swapper.swap_to_jetton(swap_info.ton_wallet, swap_info.token_address, swap_info.token_amount)
    return True
