from abc import ABC, abstractmethod

class Swapper(ABC):
    def swap_to_native(wallet,
                         jetton_address : str,
                         amount:float,
                         actual_for = 60*5):
        pass
    
    def swap_to_jetton(wallet,
                       jetton_address : str,
                       amount:float):
        pass