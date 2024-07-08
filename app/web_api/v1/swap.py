from fastapi import APIRouter

from app import schemas, services

from pytoniq import LiteBalancer, WalletV4R2

router = APIRouter(prefix='/swap')


@router.post("/swap_to_jetton")
async def swap_to_jetton(swap_info: schemas.SwapCreate):
    """
    Swap TON with some token on dedust.
    """
    mnemonics = swap_info.ton_wallet.split(" ")
    client = LiteBalancer.from_mainnet_config(trust_level=1)
    await client.start_up()
    wallet = await WalletV4R2.from_mnemonic(mnemonics=mnemonics, provider=client)

    if swap_info.dex == "dedust":
        swapper = services.dedust_swapper.DedustSwapper
    elif swap_info.dex == "stonfi":
        swapper = services.stonfi_swapper.StonfiSwapper
    else:
        raise ValueError(f"Unknown dex: {swap_info.dex}")

    await swapper.swap_to_jetton(wallet, swap_info.token_address, swap_info.token_amount)

    return True


@router.post("/swap_to_native")
async def swap_to_native(swap_info: schemas.SwapCreate):
    """
    Swap TON with some token on dedust.
    """
    mnemonics = swap_info.ton_wallet.split(" ")
    client = LiteBalancer.from_mainnet_config(trust_level=1)
    await client.start_up()
    wallet = await WalletV4R2.from_mnemonic(mnemonics=mnemonics, provider=client)

    if swap_info.dex == "dedust":
        swapper = services.dedust_swapper.DedustSwapper
    elif swap_info.dex == "stonfi":
        swapper = services.stonfi_swapper.StonfiSwapper
    else:
        raise ValueError(f"Unknown dex: {swap_info.dex}")

    await swapper.swap_to_native(wallet, swap_info.token_address, swap_info.token_amount)

    return True
