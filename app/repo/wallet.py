"""
Wallet data operations
"""

from app import models, schemas
from app.repo.default import CRUDBase


class WalletRepo(CRUDBase[models.Wallet, schemas.WalletCreate, schemas.WalletUpdate]):
    """
    Data operations for wallets
    """


wallet = WalletRepo(models.Wallet)
