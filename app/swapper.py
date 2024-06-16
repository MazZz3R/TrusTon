from dedust import Asset, Factory, PoolType, SwapParams, VaultNative
from pytoniq import WalletV4R2, LiteBalancer
import asyncio
import time

 
async def swap_to_ton(ton_wallet : WalletV4R2, token_address : str, ton_ammount:float):
    provider = LiteBalancer.from_mainnet_config(1)
    await provider.start_up()
    ton_wallet = await WalletV4R2.from_mnemonic(provider=provider, mnemonics=ton_wallet)
    TON = Asset.native()
    TOKEN = Asset.jetton(token_address)

    pool = await Factory.get_pool(PoolType.VOLATILE, [TON,TOKEN], ton_wallet.provider)

    swap_params = SwapParams(deadline=int(time.time() + 60 * 5),
                             recipient_address=ton_wallet.address)
    swap_amount = int(ton_ammount * 1e9)

    swap = VaultNative.create_swap_payload(amount=swap_amount,
                                           pool_address=pool.address,
                                           swap_params=swap_params)

    swap_amount = int(swap_amount + (0.25*1e9)) # 0.25 = gas_value

    await ton_wallet.transfer(destination=token_address, # native vault
                          amount=swap_amount,
                          body=swap)

    await provider.close_all()



