from pytoniq import LiteBalancer
import asyncio
from dedust import Asset, Factory, PoolType, SwapParams, VaultNative, JettonRoot, VaultJetton
import logging
from dexscreener import DexscreenerClient

TON = Asset.native()

async def analyze(jetton_addr: str):
    client = LiteBalancer.from_mainnet_config(trust_level=1)
    await client.start_up()

    jetton = Asset.jetton(jetton_addr)
    pool = await Factory.get_pool(
        PoolType.VOLATILE,
        [TON, jetton],
        client
    )
    print(pool.address)
    dex_client = DexscreenerClient()
    add = pool.address.to_str()
    pair = dex_client.get_token_pair("ton", add)
    print(pair)
    print(await pool.get_pool_type(client))
    print(await pool.get_readiness_status(client))
    print(await pool.get_reserves(client))
    tons, tapes = await pool.get_reserves(client)
    mc = (tons * 7.8 / 1e9) * (tapes / 1e9)
    print(mc)

    answer = await client.run_get_method(address=jetton_addr, method="get_jetton_data", stack=[])
    print(answer)


asyncio.get_event_loop().run_until_complete(analyze("EQABBW_uifkTMvvR0PHq3NoNHDTDoEgSMToU8oaTkO-Hif5A"))
