import React from 'react';

type WalletCardProps = {
  name: string;
  address: string;
  balance: string;
  change: string;
  changeType: 'positive' | 'negative' | 'neutral';
  imageUrl: string;
};

const WalletCard: React.FC<WalletCardProps> = ({ name, address, balance, change, changeType, imageUrl }) => {
  const changeColor = changeType === 'positive' ? 'text-lime-300' : changeType === 'negative' ? 'text-red-500' : '';
  
  return (
    <section className="flex flex-col p-4 bg-white border border-gray-200 border-solid">
      <div className="flex gap-3 text-black">
        <img loading="lazy" src={imageUrl} alt={`${name} wallet icon`} className="shrink-0 aspect-square w-[72px]" />
        <div className="flex flex-col my-auto">
          <h3 className="text-3xl">{name}</h3>
          <p className="text-base font-medium">{address}</p>
        </div>
      </div>
      <div className="flex gap-3.5 justify-between mt-3">
        <p className="text-xl text-black">{balance}</p>
        <p className={`justify-center self-start mt-1 text-base text-right whitespace-nowrap ${changeColor}`}>
          {change}
        </p>
      </div>
    </section>
  );
};

type CoinCardProps = {
  rank: string;
  name: string;
  symbol: string;
  price: string;
  change: string;
  changeType: 'positive' | 'negative';
  amount: string;
  value: string;
  imageUrl: string;
  chartUrl: string;
};

const CoinCard: React.FC<CoinCardProps> = ({ rank, name, symbol, price, change, changeType, amount, value, imageUrl, chartUrl }) => {
  const changeColor = changeType === 'positive' ? 'text-lime-300' : 'text-red-500';
  
  return (
    <article className="flex flex-1 gap-2.5 justify-between p-4 bg-white rounded-3xl border border-gray-200 border-solid max-md:flex-wrap max-md:max-w-full">
      <div className="flex gap-3">
        <p className="my-auto text-base font-medium text-center text-black">{rank}</p>
        <div className="flex gap-4">
          <img loading="lazy" src={imageUrl} alt={`${name} icon`} className="shrink-0 my-auto w-12 aspect-square" />
          <div className="flex flex-col">
            <h3 className="text-xl text-black">{name}</h3>
            <div className="flex gap-3 text-base">
              <p className="text-black">{price}</p>
              <p className={changeColor}>{change}</p>
            </div>
          </div>
        </div>
      </div>
      <img loading="lazy" src={chartUrl} alt={`${name} price chart`} className="shrink-0 my-auto max-w-full aspect-[4.35] w-[200px]" />
      <div className="flex flex-col text-right text-black">
        <p className="text-xl">{amount} {symbol}</p>
        <p className="text-base">{value}</p>
      </div>
    </article>
  );
};

const MyComponent: React.FC = () => {
  const wallets: WalletCardProps[] = [
    { name: "Main walllet", address: "UQDlR...jDAj4", balance: "$ 1,123,321,214,00", change: "+8,32%", changeType: "positive", imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/cb44a29d1e092f78af0e61009f54b03792d0d30e068d0cfcf77395647b870b0b?apiKey=b35e116fc89a469787758b8dbef2b35f&" },
    { name: "Gooool walllet", address: "UQDlR...jDAj4", balance: "$ 1,123,321,214,00", change: "~0%", changeType: "neutral", imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/b32710f0c04c10ec4d3009d20836f5f71a0f39c91916cd0bf647dd9a804233f4?apiKey=b35e116fc89a469787758b8dbef2b35f&" },
    { name: "Bober walllet", address: "UQDlR...jDAj4", balance: "$ 1,123,321,214,00", change: "–8,21%", changeType: "negative", imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/0ea8091593373284a174903acd600eb3eef89b86d810c90af9a350f3945e3dff?apiKey=b35e116fc89a469787758b8dbef2b35f&" },
    // ... add more wallet data as needed
  ];

  const coins: CoinCardProps[] = [
    { rank: "01", name: "Toncoin", symbol: "TON", price: "7,67 $", change: "+ 6,39 %", changeType: "positive", amount: "0", value: "0 $", imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/d5edec38f2cd1f0d46d2906da1165488d7a9f5a1043587587767f2fd4f5f8732?apiKey=b35e116fc89a469787758b8dbef2b35f&", chartUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/bcf045f9572dd6bef18d3fe00acae1c26285540c25d59ad175a31310d60b476d?apiKey=b35e116fc89a469787758b8dbef2b35f&" },
    { rank: "02", name: "Ethereum", symbol: "ETH", price: "3,415.29 $", change: "– 6,39 %", changeType: "negative", amount: "0", value: "0 $", imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/7eb462d4c365af0e2602dc63a2040e4a264a9aa3807ad58ecc23be289d9a0336?apiKey=b35e116fc89a469787758b8dbef2b35f&", chartUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/aae117e6d7c51aa4cba57fd8c9e40414250b31efb34c1d45f169e82751ae7d40?apiKey=b35e116fc89a469787758b8dbef2b35f&" },
    // ... add more coin data as needed
  ];

  return (
    <div className="flex flex-col px-5">
      <div>
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex gap-5 py-8 pr-8 mt-12 w-full bg-neutral-100 max-md:flex-wrap max-md:pr-5 max-md:mt-10 max-md:max-w-full">
              <nav className="flex flex-col py-4 bg-white rounded-none border border-gray-200 border-solid">
                <div className="flex gap-4 px-4">
                  <div className="flex justify-center items-center px-4 py-1 bg-white rounded-xl border border-gray-200 border-solid">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b593cab16322f39a49a399d43a4701202692fde3dc78a9e237ce4393da9984c?apiKey=b35e116fc89a469787758b8dbef2b35f&" alt="" className="w-6 aspect-square" />
                  </div>
                  <button className="justify-center px-4 py-1 text-base text-black bg-white rounded-xl border border-gray-200 border-solid">
                    Connect wallet
                  </button>
                </div>
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9015d9b8fc85e876b9280869c0e0d25611120f59062a0e72291a27fd2ff18df?apiKey=b35e116fc89a469787758b8dbef2b35f&" alt="" className="mt-4 w-full border border-gray-200 border-solid stroke-[1px] stroke-gray-200" />
                <div className="flex flex-col justify-between px-4 mt-4 text-base text-black whitespace-nowrap">
                  <button className="flex gap-2 px-4 py-1 text-white bg-blue-500 rounded-xl">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9100a5f12c9dd9b34f7f9fd8a9c9eaa253e8a77e93db07b25b0ef2667617f4ed?apiKey=b35e116fc89a469787758b8dbef2b35f&" alt="" className="shrink-0 w-6 aspect-square" />
                    <span>Exchange</span>
                  </button>
                  <button className="flex gap-2 px-4 py-1 mt-4 bg-white rounded-xl border border-gray-200 border-solid">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/020367563eaae9be3292b0d33bb719003e7547ad8cc12d33d7d4f1bdabdc53fb?apiKey=b35e116fc89a469787758b8dbef2b35f&" alt="" className="shrink-0 w-6 aspect-square" />
                    <span>Wallets</span>
                  </button>
                  <button className="flex gap-2 px-4 py-1 bg-white rounded-xl border border-gray-200 border-solid mt-[808px] max-md:mt-10">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e118da4f434b02d33e6685bd5111fdb93a29e1524bdc2fb2eddeb21b1f105b7e?apiKey=b35e116fc89a469787758b8dbef2b35f&" alt="" className="shrink-0 my-auto w-6 aspect-[1.49] fill-gray-900" />
                    <span>Truston</span>
                  </button>
                </div>
              </nav>
              <main className="justify-center pb-20 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <section className="flex flex-col w-[64%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col p-4 w-full bg-white rounded-3xl border border-gray-200 border-solid max-md:mt-8 max-md:max-w-full">
                      <div className="flex gap-4 justify-between w-full text-base max-md:flex-wrap max-md:max-w-full">
                        <div className="flex gap-5 justify-between px-4 py-1 my-auto text-white bg-blue-500 rounded-xl">
                          <div className="flex gap-2">
                            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9100a5f12c9dd9b34f7f9fd8a9c9eaa253e8a77e93db07b25b0ef2667617f4ed?apiKey=b35e116fc89a469787758b8dbef2b35f&" alt="" className="shrink-0 w-6 aspect-square" />
                            <span className="my-auto">Line chart</span>
                          </div>
                          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/44796cdc18d203b01dbd773f4e8025e2172948e131b3d739f45c13cbfbf7c54d?apiKey=b35e116fc89a469787758b8dbef2b35f&" alt="" className="shrink-0 w-6 aspect-square" />
                        </div>
                        <div className="flex gap-2.5 justify-center p-1 text-gray-900 whitespace-nowrap rounded-lg border border-gray-200 border-solid max-md:flex-wrap">
                          <button className="justify-center px-4 py-1 text-white bg-blue-500 rounded-md">1H</button>
                          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/03f92e35ef3d77d719d92e9b023bd8cb85c07b0fc8e6399fce8f4d2dc81b9d55?apiKey=b35e116fc89a469787758b8dbef2b35f&" alt="" className="shrink-0 my-auto w-0.5 border-2 border-gray-200 border-solid aspect-square stroke-[2px] stroke-gray-200" />
                          <button className="justify-center px-4 py-1 rounded-md bg-zinc-100">24H</button>
                          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/03f92e35ef3d77d719d92e9b023bd8cb85c07b0fc8e6399fce8f4d2dc81b9d55?apiKey=b35e116fc89a469787758b8dbef2b35f&" alt="" className="shrink-0 my-auto w-0.5 border-2 border-gray-200 border-solid aspect-square stroke-[2px] stroke-gray-200" />
                          <button className="justify-center px-4 py-1 rounded-md bg-zinc-100">1W</button>
                          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/03f92e35ef3d77d719d92e9b023bd8cb85c07b0fc8e6399fce8f4d2dc81b9d55?apiKey=b35e116fc89a469787758b8dbef2b35f&" alt="" className="shrink-0 my-auto w-0.5 border-2 border-gray-200 border-solid aspect-square stroke-[2px] stroke-gray-200" />
                          <button className="justify-center px-4 py-1 rounded-md bg-zinc-100">1M</button>
                          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/03f92e35ef3d77d719d92e9b023bd8cb85c07b0fc8e6399fce8f4d2dc81b9d55?apiKey=b35e116fc89a469787758b8dbef2b35f&" alt="" className="shrink-0 my-auto w-0.5 border-2 border-gray-200 border-solid aspect-square stroke-[2px] stroke-gray-200" />
                          <button className="justify-center px-4 py-1 rounded-md bg-zinc-100">3M</button>
                          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/03f92e35ef3d77d719d92e9b023bd8cb85c07b0fc8e6399fce8f4d2dc81b9d55?apiKey=b35e116fc89a469787758b8dbef2b35f&" alt="" className="shrink-0 my-auto w-0.5 border-2 border-gray-200 border-solid aspect-square stroke-[2px] stroke-gray-200" />
                          <button className="justify-center px-4 py-1 rounded-md bg-zinc-100">6M</button>
                          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/03f92e35ef3d77d719d92e9b023bd8cb85c07b0fc8e6399fce8f4d2dc81b9d55?apiKey=b35e116fc89a469787758b8dbef2b35f&" alt="" className="shrink-0 my-auto w-0.5 border-2 border-gray-200 border-solid aspect-square stroke-[2px] stroke-gray-200" />
                          <button className="justify-center px-4 py-1 rounded-md bg-zinc-100">1Y</button>
                        </div>
                      </div>
                      <h2 className="text-4xl text-black max-md:max-w-full">TON</h2>
                      <div className="flex gap-4 self-start text-2xl">
                        <p className="text-black">139.60 $</p>
                        <div className="flex gap-1 text-lime-300">
                          <p>+ 23.14 $</p>
                          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5eea5a9a44ac562ec00bb3b913943766c7b7fca99d36ba32080c7816be3ecdfd?apiKey=b35e116fc89a469787758b8dbef2b35f&" alt="" className="shrink-0 my-auto w-6 aspect-square" />
                        </div>
                      </div>
                      <div className="flex gap-5 items-start py-0.5 mt-4 text-xs text-gray-400 whitespace-nowrap max-md:flex-wrap">
                        <div className="flex flex-col">
                          <p>50.000</p>
                          <p className="mt-10">40.000</p>
                          <p className="mt-10">30.000</p>
                          <p className="mt-10">20.000</p>
                          <p className="mt-10">10.000</p>
                        </div>
                        <div className="flex flex-col grow shrink-0 mt-5 basis-0 leading-[133%] w-fit max-md:max-w-full">
                          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/060c20473c433ecc2d273164af5bb9b6d6688e0622e1432e61f9a9b92513bc6a?apiKey=b35e116fc89a469787758b8dbef2b35f&" alt="Price chart" className="w-full aspect-[5] max-md:max-w-full" />
                          <div className="flex gap-5 justify-between pr-2 mt-6 max-md:flex-wrap max-md:max-w-full">
                            <p>19:00</p>
                            <p>19:10</p>
                            <p>19:20</p>
                            <p>19:30</p>
                            <p>19:40</p>
                            <p>19:50</p>
                            <p>19:50</p>
                            <p>19:50</p>
                            <p>19:50</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="flex flex-col ml-5 w-[36%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col p-4 w-full bg-white rounded-3xl border border-gray-200 border-solid max-md:mt-8 max-md:max-w-full">
                      <div className="flex flex-col justify-center p-2 text-black bg-white rounded-xl border border-gray-200 border-solid max-md:max-w-full">
                        <div className="flex gap-3 justify-between w-full max-md:flex-wrap max-md:max-w-full">
                          <div className="flex gap-3">
                            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef0478be5c92b8f7b72aba9d49d13646acbb92b0c48de0edac50bccae5321e94?apiKey=b35e116fc89a469787758b8dbef2b35f&" alt="Main wallet icon" className="shrink-0 w-12 aspect-square" />
                            <div className="flex flex-col my-auto">
                              <h3 className="text-xl">Main walllet</h3>
                              <p className="text-xs">3,415.29 XRP</p>
                            </div>
                          </div>
                          <button aria-label="More options">
                            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3c40833c0529e43f1801735b61e8563ea678b06b8b401a60e75c26baabd49f8?apiKey=b35e116fc89a469787758b8dbef2b35f&" alt="" className="shrink-0 my-auto w-6 aspect-square" />
                          </button>
                        </div>
                      </div>
                      <div className="flex gap-2.5 justify-between p-2 mt-4 w-full bg-white rounded-xl border border-gray-200 border-solid max-md:flex-wrap max-md:max-w-full">
                        <div className="flex gap-2 self-start text-base text-right whitespace-nowrap">
                          <span className="text-gray-200">0.00</span>
                          <span className="text-black">XRP</span>
                        </div>
                        <button className="flex justify-center items-center p-1 w-6 h-6 bg-blue-500 rounded-md" aria-label="Add XRP">
                          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3f77b957a4c968953215fe2eca05c9cfa1c0d4b7cfc66b2e8c5fb34b3358600?apiKey=b35e116fc89a469787758b8dbef2b35f&" alt="" className="w-4 aspect-square" />
                        </button>
                      </div>
                      <div className="flex flex-col justify-between px-4 py-2.5 mt-4 bg-white rounded-xl border border-gray-200 border-solid max-md:max-w-full">
                        <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
                          <div className="flex gap-4">
                            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac2bcad1b81c78e508065fe12da59cf63ff67285e383e714300274d1094aec7c?apiKey=b35e116fc89a469787758b8dbef2b35f&" alt="XRP icon" className="shrink-0 my-auto w-12 aspect-square" />
                            <div className="flex flex-col">
                              <h4 className="text-xl text-black">XRP</h4>
                              <div className="flex gap-3 text-base">
                                <span className="text-black">0.4714 $</span>
                                <span className="text-red-500">– 6,39 %</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col text-right text-black">
                            <p className="text-xl">0 XRP</p>
                            <p className="text-base">0 $</p>
                          </div>
                        </div>
                        <button className="flex z-10 gap-2 self-center px-4 py-1 mt-0 text-base text-white whitespace-nowrap bg-blue-500 rounded-xl">
                          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/cec62b4b6536719115cdea892d40e8f2026a8f457b7428a65ff2c38730d971d5?apiKey=b35e116fc89a469787758b8dbef2b35f&" alt="" className="shrink-0 w-6 aspect-square" />
                          <span>Swap</span>
                        </button>
                        <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
                          <div className="flex gap-4">
                            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d5edec38f2cd1f0d46d2906da1165488d7a9f5a1043587587767f2fd4f5f8732?apiKey=b35e116fc89a469787758b8dbef2b35f&" alt="Toncoin icon" className="shrink-0 my-auto w-12 aspect-square" />
                            <div className="flex flex-col">
                              <h4 className="text-xl text-black">Toncoin</h4>
                              <div className="flex gap-3 text-base">
                                <span className="text-black">7,67 $</span>
                                <span className="text-lime-300">+ 6,39 %</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col text-right text-black">
                            <p className="text-xl">0 TON</p>
                            <p className="text-base">0 $</p>
                          </div>
                        </div>
                      </div>
                      <button className="flex gap-2 justify-between p-4 mt-4 text-xl text-white bg-blue-500 rounded-xl max-md:flex-wrap max-md:max-w-full">
                        <span>Exchange</span>
                        <span>0.00 XRP</span>
                      </button>
                    </div>
                  </section>
                </div>
              </main>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex gap-5 py-8 pr-8 bg-neutral-100 max-md:flex-wrap max-md:pr-5">
              <nav className="flex flex-col py-4 bg-white rounded-none border border-gray-200 border-solid">
                <div className="flex gap-4 px-4">
                  <div className="flex justify-center items-center px-4 py-1 bg-white rounded-xl border border-gray-200 border-solid">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab8b95708eb43f9a76f2eb5228d0602686482bd8fa899dd3e5429ac953d0ba87?apiKey=b35e116fc89a469787758b8dbef2b35f&" alt="" className="w-6 aspect-square" />
                  </div>
                  <button className="justify-center px-4 py-1 text-base text-black bg-white rounded-xl border border-gray-200 border-solid">
                    Connect wallet
                  </button>
                </div>
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9015d9b8fc85e876b9280869c0e0d25611120f59062a0e72291a27fd2ff18df?apiKey=b35e116fc89a469787758b8dbef2b35f&" alt="" className="mt-4 w-full border border-gray-200 border-solid stroke-[1px] stroke-gray-200" />
                <div className="flex flex-col justify-between px-4 mt-4 text-base text-black whitespace-nowrap">
                  <button className="flex gap-2 px-4 py-1 bg-white rounded-xl border border-gray-200 border-solid">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d429f4fe4d9b8fadd3beab5e013a9c20ea7b1f372dd1e95b31212ca438956956?apiKey=b35e116fc89a469787758b8dbef2b35f&" alt="" className="shrink-0 w-6 aspect-square" />
                    <span>Exchange</span>
                  </button>
                  <button className="flex gap-2 px-4 py-1 mt-4 text-white bg-blue-500 rounded-xl">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c8728c0ad68afe4264e937b71df856659761b431e92ffc0cae789b07327c4939?apiKey=b35e116fc89a469787758b8dbef2b35f&" alt="" className="shrink-0 w-6 aspect-square" />
                    <span>Wallets</span>
                  </button>
                  <button className="flex gap-2 px-4 py-1 bg-white rounded-xl border border-gray-200 border-solid mt-[808px] max-md:mt-10">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/39513508f8e0f6a33aa9f94dfac9da4c2f2cc6896fc183fd1aeb7d2c3a450dc2?apiKey=b35e116fc89a469787758b8dbef2b35f&" alt="" className="shrink-0 my-auto w-6 aspect-[1.49] fill-gray-900" />
                    <span>Truston</span>
                  </button>
                </div>
              </nav>
              <main className="flex flex-col max-md:max-w-full">
                <section className="flex overflow-x-auto gap-0 justify-between bg-white rounded-3xl border-t border-r border-l border-gray-200 border-solid max-md:flex-wrap">
                  {wallets.map((wallet, index) => (
                    <WalletCard key={index} {...wallet} />
                  ))}
                </section>
                <section className="flex z-10 flex-col justify-between px-8 pt-4 pb-8 bg-white rounded-none border border-gray-200 border-solid max-md:px-5 max-md:max-w-full">
                  <h2 className="text-4xl text-black max-md:max-w-full">Portfolio</h2>
                  <div className="flex flex-col justify-center items-start py-1 mt-4 text-base whitespace-nowrap bg-white rounded-xl border border-gray-200 border-solid text-black text-opacity-30 max-md:pr-5 max-md:max-w-full">
                    <div className="flex gap-1">
                      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/da5e92f44389e11db432beac1329ee7700c9b87c9f24df6e6b38b529a67e04e2?apiKey=b35e116fc89a469787758b8dbef2b35f&" alt="" className="shrink-0 my-auto w-4 aspect-square" />
                      <span>Search</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-6 mt-4">
                    {coins.map((coin, index) => (
                      <CoinCard key={index} {...coin} />
                    ))}
                  </div>
                  <button className="flex gap-2 self-end px-4 py-1 mt-96 text-base text-black whitespace-nowrap bg-white rounded-xl border border-gray-200 border-solid max-md:mt-10">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/cdf83713a64c53dea8ff60315b56a6b56cd2f7ec2e6c983135e1545aa58dd7c1?apiKey=b35e116fc89a469787758b8dbef2b35f&" alt="" className="shrink-0 w-6 aspect-square" />
                    <span>Remove</span>
                  </button>
                </section>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;