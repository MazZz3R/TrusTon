from pytoniq import WalletV4R2
from stonfi import RouterV1, constants
import os
from swapper import Swapper

class StonfiSwapper(Swapper):

    async def swap_to_jetton(wallet:WalletV4R2, jetton_address: str, amount: float, actual_for=60 * 5):
        router = RouterV1()
        amount = int(amount * 1e9) + constants.GAS_TON_TO_JETTON.FORWARD_GAS_AMOUNT
        params = await router.build_swap_ton_to_jetton_tx_params(wallet.address,
                                                            jetton_address,
                                                            amount,
                                                            1,
                                                            wallet.provider)
        resp = await wallet.transfer(
            params['to'],
            params['amount'],
            params['payload']
        )
        await wallet.provider.close_all()
    
    
    async def swap_to_native(wallet, jetton_address: str, amount: float):
        return await super().swap_to_native(jetton_address, amount)
    
    import asyncio


