from typing import List

from dedust import Asset, Factory, PoolType, SwapParams, VaultNative, JettonRoot, VaultJetton
from pytoniq import WalletV4R2, LiteBalancer
import time

GAS_VALUE = 0.25*1e9
DEDUST_NATIVE_VAULT = "EQDa4VOnTYlLvDJ0gZjNYm5PXfSmmtL6Vs6A_CZEtXCNICq_"

async def swap_to_jetton(ton_wallet : List[str], token_address : str, ton_amount:float, actual_for = 60*5):
    print(ton_wallet, token_address, ton_amount, actual_for)
    provider = LiteBalancer.from_mainnet_config(1)
    await provider.start_up()

    ton_wallet = await WalletV4R2.from_mnemonic(provider=provider, mnemonics=ton_wallet)

    ton = Asset.native()
    token = Asset.jetton(token_address)

    pool = await Factory.get_pool(PoolType.VOLATILE, 
                                  [ton,token],
                                  ton_wallet.provider)

    swap_params = SwapParams(deadline=int(time.time() + actual_for),
                             recipient_address=ton_wallet.address)
    swap_amount = int(ton_amount * 1e9) # Conversion to the format used by TON

    swap = VaultNative.create_swap_payload(amount=swap_amount,
                                           pool_address=pool.address,
                                           swap_params=swap_params)

    swap_amount = int(swap_amount + GAS_VALUE)

    await ton_wallet.transfer(destination=DEDUST_NATIVE_VAULT,
                          amount=swap_amount,
                          body=swap)

    await ton_wallet.provider.close_all()


# Not sure it works
async def swap_to_ton(ton_wallet : WalletV4R2, token_address : str, token_amount:float):
    ton = Asset.native()
    token = Asset.jetton(token_address)

    pool = await Factory.get_pool(PoolType.VOLATILE, 
                                  [ton,token],
                                  ton_wallet.provider)

    token_vault = await Factory.get_jetton_vault(token_address, ton_wallet.provider)
    token_root = JettonRoot.create_from_address(token_address)
    token_wallet = await token_root.get_wallet(ton_wallet.address, ton_wallet.provider)
    
    swap_amount = int(token_amount * 1e9) 

    swap = token_wallet.create_transfer_payload(
        destination=token_vault.address,
        amount=swap_amount,
        response_address=ton_wallet.address,
        forward_amount=int(GAS_VALUE),
        forward_payload=VaultJetton.create_swap_payload(pool_address=pool.address)
    )

    await ton_wallet.transfer(destination=token_wallet.address,
                              amount=int(0.3*1e9),
                              body=swap)

    await ton_wallet.provider.close_all()



 


