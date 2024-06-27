const WalletCard = ({ type, address, balance, bgColor, textColor, borderColor, iconSrc, onManage }) => (
    <div className={`wallet-card ${bgColor}`}>
        <div className={`wallet-content ${bgColor} ${borderColor}`}>
            <div className="wallet-header">
                <img src={iconSrc} alt={`${type} wallet icon`} className={`wallet-icon ${borderColor}`} />
                <div className="wallet-info">
                    <div className={`wallet-type ${textColor}`}>{type} wallet</div>
                    <div className={`wallet-address ${textColor}`}>{address}</div>
                </div>
            </div>
            <div className={`wallet-footer ${textColor}`}>
                <button onClick={onManage} className="manage-button">
                    <img src="https://unpkg.com/react@17/umd/react.development.js" alt="Manage icon" className="manage-icon" />
                    <span>Manage</span>
                </button>
                <div>{balance}</div>
            </div>
        </div>
    </div>
);

const CryptoCurrencyRow = ({ icon, name, fullName, balance, available, eurValue, eurValueInEur, onSelect }) => (
    <button onClick={onSelect} className="crypto-row">
        <div className="crypto-info">
            <img src={icon} alt={`${name} icon`} className="crypto-icon" />
            <div className="crypto-name-container">
                <div className="crypto-name">{name}</div>
                <div className="crypto-full-name">{fullName}</div>
            </div>
        </div>
        <div className="crypto-values">
            <div className="crypto-value">{balance}</div>
            <div className="crypto-value">{available}</div>
            <div className="crypto-eur-value">
                <div className="crypto-eur">{eurValue}</div>
                <div className="crypto-eur-converted">{eurValueInEur}</div>
            </div>
        </div>
    </button>
);

function App() {
    const [selectedWallet, setSelectedWallet] = React.useState(null);
    const [selectedCrypto, setSelectedCrypto] = React.useState(null);

    const wallets = [
        { type: "Main", address: "Ox51zR...c051m", balance: "$1,308.20", bgColor: "bg-white", textColor: "text-black", borderColor: "border-black", iconSrc: "https://unpkg.com/react-dom@17/umd/react-dom.development.js" },
        { type: "Second", address: "Ox51zR...c051m", balance: "$1,308.20", bgColor: "bg-white", textColor: "text-black", borderColor: "border-black", iconSrc: "https://unpkg.com/babel-standalone@6/babel.min.js" },
        { type: "Third", address: "Ox51zR...c051m", balance: "$1,308.20", bgColor: "bg-black", textColor: "text-white", borderColor: "border-white", iconSrc: "https://unpkg.com/react@17/umd/react.development.js" }
    ];

    const cryptocurrencies = [
        { icon: "https://unpkg.com/react-dom@17/umd/react-dom.development.js", name: "BNB", fullName: "Binance Coin", balance: "13,461,538,46", available: "13,461,538,46", eurValue: "0,00714", eurValueInEur: "0,42 EUR" },
        { icon: "https://unpkg.com/babel-standalone@6/babel.min.js", name: "BNB", fullName: "Binance Coin", balance: "13,461,538,46", available: "13,461,538,46", eurValue: "0,00714", eurValueInEur: "0,42 EUR" },
        { icon: "http://b.io/ext_24-", name: "BNB", fullName: "Binance Coin", balance: "13,461,538,46", available: "13,461,538,46", eurValue: "0,00714", eurValueInEur: "0,42 EUR" },
        { icon: "http://b.io/ext_25-", name: "BNB", fullName: "Binance Coin", balance: "13,461,538,46", available: "13,461,538,46", eurValue: "0,00714", eurValueInEur: "0,42 EUR" },
        { icon: "http://b.io/ext_26-", name: "BNB", fullName: "Binance Coin", balance: "13,461,538,46", available: "13,461,538,46", eurValue: "0,00714", eurValueInEur: "0,42 EUR" },
        { icon: "http://b.io/ext_27-", name: "BNB", fullName: "Binance Coin", balance: "13,461,538,46", available: "13,461,538,46", eurValue: "0,00714", eurValueInEur: "0,42 EUR" },
        { icon: "http://b.io/ext_28-", name: "BNB", fullName: "Binance Coin", balance: "13,461,538,46", available: "13,461,538,46", eurValue: "0,00714", eurValueInEur: "0,42 EUR" },
        { icon: "http://b.io/ext_29-", name: "BNB", fullName: "Binance Coin", balance: "13,461,538,46", available: "13,461,538,46", eurValue: "0,00714", eurValueInEur: "0,42 EUR" }
    ];

    const handleWalletManage = (type) => {
        setSelectedWallet(type);
    };

    const handleCryptoSelect = (name) => {
        setSelectedCrypto(name);
    };

    return (
        <div className="container">
            <aside className="sidebar">
                <button className="sidebar-icon">
                    <img src="http://b.io/ext_30-" alt="First icon" />
                </button>
                <button className="sidebar-icon">
                    <img src="http://b.io/ext_31-" alt="Second icon" />
                </button>
            </aside>
            <main className="main-content">
                <section className="wallet-section">
                    <img src="http://b.io/ext_32-" alt="Main icon" className="wallet-icon" />
                    {wallets.map((wallet, index) => (
                        <WalletCard key={index} {...wallet} onManage={() => handleWalletManage(wallet.type)} />
                    ))}
                </section>
                <section className="crypto-section">
                    <div className="crypto-header">
                        <div className="crypto-placeholder">Placeholder</div>
                        <button className="sidebar-icon">
                            <img src="http://b.io/ext_33-" alt="Additional icon" className="crypto-add-icon" />
                        </button>
                    </div>
                    <div className="crypto-table-header">
                        <div className="crypto-table-column">
                            <div className="crypto-table-column-title">Cryptocurrency</div>
                            <div className="crypto-table-column-underline"></div>
                        </div>
                        <div className="crypto-table-column">
                            <div className="crypto-table-column-title">Balance</div>
                            <div className="crypto-table-column-underline"></div>
                        </div>
                        <div className="crypto-table-column">
                            <div className="crypto-table-column-title">Available</div>
                            <div className="crypto-table-column-underline"></div>
                        </div>
                        <div className="crypto-table-column">
                            <div className="crypto-table-column-title">EUR Value</div>
                            <div className="crypto-table-column-underline"></div>
                        </div>
                    </div>
                    <div className="crypto-list">
                        {cryptocurrencies.map((crypto, index) => (
                            <CryptoCurrencyRow
                                key={index}
                                {...crypto}
                                onSelect={() => handleCryptoSelect(crypto.name)}
                            />
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));