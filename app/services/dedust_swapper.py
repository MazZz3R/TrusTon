import time

from dedust import Asset, Factory, PoolType, SwapParams, VaultNative
from pytoniq import WalletV4R2


async def swap_to_jetton(ton_wallet: WalletV4R2, token_address: str, token_amount: float):
    TON = Asset.native()
    TOKEN = Asset.jetton(token_address)

    pool = await Factory.get_pool(PoolType.VOLATILE, [TON, TOKEN], ton_wallet.provider)

    swap_params = SwapParams(deadline=int(time.time() + 60 * 5),
                             recipient_address=ton_wallet.address)
    swap_amount = int(token_amount * 1e9)

    swap = VaultNative.create_swap_payload(amount=swap_amount,
                                           pool_address=pool.address,
                                           swap_params=swap_params)

    swap_amount = int(swap_amount + (0.25 * 1e9))  # 0.25 = gas_value

    await ton_wallet.transfer(destination=token_address,  # native vault
                              amount=swap_amount,
                              body=swap)

    await ton_wallet.provider.close_all()

# Not sure it works
# async def swap_to_ton(ton_wallet : WalletV4R2, token_address : str, token_amount:float):
#     pool = await Factory.get_pool(PoolType.VOLATILE, [Asset.native(),Asset.jetton(token_address)], ton_wallet.provider)

#     token_vault = await Factory.get_jetton_vault(token_address, ton_wallet.provider)
#     token_root = JettonRoot.create_from_address(token_address)
#     token_wallet = await token_root.get_wallet(ton_wallet.address, ton_wallet.provider)

#     swap_amount = int(token_amount + (0.25*1e9)) # 0.25 = gas_value

#     swap = token_wallet.create_transfer_payload(
#         destination=token_vault.address,
#         amount=swap_amount,
#         response_address=ton_wallet.address,
#         forward_amount=int(0.25*1e9),
#         forward_payload=VaultJetton.create_swap_payload(pool_address=pool.address)
#     )

#     await ton_wallet.transfer(destination=token_wallet.address,
#                           amount=int(0.3*1e9),
#                           body=swap)

#     await ton_wallet.provider.close_all()
