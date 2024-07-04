import * as React from "react";

function MyComponent() {
  return (
    <div className="flex gap-5 py-8 pr-8 mt-12 w-full bg-neutral-100 max-md:flex-wrap max-md:pr-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col py-4 bg-white rounded-none border border-gray-200 border-solid">
        <div className="flex gap-4 px-4">
          <div className="flex justify-center items-center px-4 py-1 bg-white rounded-xl border border-gray-200 border-solid">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b593cab16322f39a49a399d43a4701202692fde3dc78a9e237ce4393da9984c?apiKey=b35e116fc89a469787758b8dbef2b35f&"
              className="w-6 aspect-square"
            />
          </div>
          <div className="justify-center px-4 py-1 text-base text-black bg-white rounded-xl border border-gray-200 border-solid">
            Connect wallet
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9015d9b8fc85e876b9280869c0e0d25611120f59062a0e72291a27fd2ff18df?apiKey=b35e116fc89a469787758b8dbef2b35f&"
          className="mt-4 w-full border border-gray-200 border-solid stroke-[1px] stroke-gray-200"
        />
        <div className="flex flex-col justify-between px-4 mt-4 text-base text-black whitespace-nowrap">
          <div className="flex gap-2 px-4 py-1 text-white bg-blue-500 rounded-xl">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9100a5f12c9dd9b34f7f9fd8a9c9eaa253e8a77e93db07b25b0ef2667617f4ed?apiKey=b35e116fc89a469787758b8dbef2b35f&"
              className="shrink-0 w-6 aspect-square"
            />
            <div>Exchange</div>
          </div>
          <div className="flex gap-2 px-4 py-1 mt-4 bg-white rounded-xl border border-gray-200 border-solid">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/020367563eaae9be3292b0d33bb719003e7547ad8cc12d33d7d4f1bdabdc53fb?apiKey=b35e116fc89a469787758b8dbef2b35f&"
              className="shrink-0 w-6 aspect-square"
            />
            <div>Wallets</div>
          </div>
          <div className="flex gap-2 px-4 py-1 bg-white rounded-xl border border-gray-200 border-solid mt-[808px] max-md:mt-10">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e118da4f434b02d33e6685bd5111fdb93a29e1524bdc2fb2eddeb21b1f105b7e?apiKey=b35e116fc89a469787758b8dbef2b35f&"
              className="shrink-0 my-auto w-6 aspect-[1.49] fill-gray-900"
            />
            <div>Truston</div>
          </div>
        </div>
      </div>
      <div className="justify-center pb-20 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[64%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col p-4 w-full bg-white rounded-3xl border border-gray-200 border-solid max-md:mt-8 max-md:max-w-full">
              <div className="flex gap-4 justify-between w-full text-base max-md:flex-wrap max-md:max-w-full">
                <div className="flex gap-5 justify-between px-4 py-1 my-auto text-white bg-blue-500 rounded-xl">
                  <div className="flex gap-2">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/9100a5f12c9dd9b34f7f9fd8a9c9eaa253e8a77e93db07b25b0ef2667617f4ed?apiKey=b35e116fc89a469787758b8dbef2b35f&"
                      className="shrink-0 w-6 aspect-square"
                    />
                    <div className="my-auto">Line chart</div>
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/44796cdc18d203b01dbd773f4e8025e2172948e131b3d739f45c13cbfbf7c54d?apiKey=b35e116fc89a469787758b8dbef2b35f&"
                    className="shrink-0 w-6 aspect-square"
                  />
                </div>
                <div className="flex gap-2.5 justify-center p-1 text-gray-900 whitespace-nowrap rounded-lg border border-gray-200 border-solid max-md:flex-wrap">
                  <div className="justify-center px-4 py-1 text-white bg-blue-500 rounded-md">
                    1H
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/03f92e35ef3d77d719d92e9b023bd8cb85c07b0fc8e6399fce8f4d2dc81b9d55?apiKey=b35e116fc89a469787758b8dbef2b35f&"
                    className="shrink-0 my-auto w-0.5 border-2 border-gray-200 border-solid aspect-square stroke-[2px] stroke-gray-200"
                  />
                  <div className="justify-center px-4 py-1 rounded-md bg-zinc-100">
                    24H
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/03f92e35ef3d77d719d92e9b023bd8cb85c07b0fc8e6399fce8f4d2dc81b9d55?apiKey=b35e116fc89a469787758b8dbef2b35f&"
                    className="shrink-0 my-auto w-0.5 border-2 border-gray-200 border-solid aspect-square stroke-[2px] stroke-gray-200"
                  />
                  <div className="justify-center px-4 py-1 rounded-md bg-zinc-100">
                    1W
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/03f92e35ef3d77d719d92e9b023bd8cb85c07b0fc8e6399fce8f4d2dc81b9d55?apiKey=b35e116fc89a469787758b8dbef2b35f&"
                    className="shrink-0 my-auto w-0.5 border-2 border-gray-200 border-solid aspect-square stroke-[2px] stroke-gray-200"
                  />
                  <div className="justify-center px-4 py-1 rounded-md bg-zinc-100">
                    1M
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/03f92e35ef3d77d719d92e9b023bd8cb85c07b0fc8e6399fce8f4d2dc81b9d55?apiKey=b35e116fc89a469787758b8dbef2b35f&"
                    className="shrink-0 my-auto w-0.5 border-2 border-gray-200 border-solid aspect-square stroke-[2px] stroke-gray-200"
                  />
                  <div className="justify-center px-4 py-1 rounded-md bg-zinc-100">
                    3M
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/03f92e35ef3d77d719d92e9b023bd8cb85c07b0fc8e6399fce8f4d2dc81b9d55?apiKey=b35e116fc89a469787758b8dbef2b35f&"
                    className="shrink-0 my-auto w-0.5 border-2 border-gray-200 border-solid aspect-square stroke-[2px] stroke-gray-200"
                  />
                  <div className="justify-center px-4 py-1 rounded-md bg-zinc-100">
                    6M
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/03f92e35ef3d77d719d92e9b023bd8cb85c07b0fc8e6399fce8f4d2dc81b9d55?apiKey=b35e116fc89a469787758b8dbef2b35f&"
                    className="shrink-0 my-auto w-0.5 border-2 border-gray-200 border-solid aspect-square stroke-[2px] stroke-gray-200"
                  />
                  <div className="justify-center px-4 py-1 rounded-md bg-zinc-100">
                    1Y
                  </div>
                </div>
              </div>
              <div className="text-4xl text-black max-md:max-w-full">TON</div>
              <div className="flex gap-4 self-start text-2xl">
                <div className="text-black">139.60 $</div>
                <div className="flex gap-1 text-lime-300">
                  <div>+ 23.14 $</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5eea5a9a44ac562ec00bb3b913943766c7b7fca99d36ba32080c7816be3ecdfd?apiKey=b35e116fc89a469787758b8dbef2b35f&"
                    className="shrink-0 my-auto w-6 aspect-square"
                  />
                </div>
              </div>
              <div className="flex gap-5 items-start py-0.5 mt-4 text-xs text-gray-400 whitespace-nowrap max-md:flex-wrap">
                <div className="flex flex-col">
                  <div>50.000</div>
                  <div className="mt-10">40.000</div>
                  <div className="mt-10">30.000</div>
                  <div className="mt-10">20.000</div>
                  <div className="mt-10">10.000</div>
                </div>
                <div className="flex flex-col grow shrink-0 mt-5 basis-0 leading-[133%] w-fit max-md:max-w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/060c20473c433ecc2d273164af5bb9b6d6688e0622e1432e61f9a9b92513bc6a?apiKey=b35e116fc89a469787758b8dbef2b35f&"
                    className="w-full aspect-[5] max-md:max-w-full"
                  />
                  <div className="flex gap-5 justify-between pr-2 mt-6 max-md:flex-wrap max-md:max-w-full">
                    <div>19:00</div>
                    <div>19:10</div>
                    <div>19:20</div>
                    <div>19:30</div>
                    <div>19:40</div>
                    <div>19:50</div>
                    <div>19:50</div>
                    <div>19:50</div>
                    <div>19:50</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[36%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col p-4 w-full bg-white rounded-3xl border border-gray-200 border-solid max-md:mt-8 max-md:max-w-full">
              <div className="flex flex-col justify-center p-2 text-black bg-white rounded-xl border border-gray-200 border-solid max-md:max-w-full">
                <div className="flex gap-3 justify-between w-full max-md:flex-wrap max-md:max-w-full">
                  <div className="flex gap-3">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ef0478be5c92b8f7b72aba9d49d13646acbb92b0c48de0edac50bccae5321e94?apiKey=b35e116fc89a469787758b8dbef2b35f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef0478be5c92b8f7b72aba9d49d13646acbb92b0c48de0edac50bccae5321e94?apiKey=b35e116fc89a469787758b8dbef2b35f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef0478be5c92b8f7b72aba9d49d13646acbb92b0c48de0edac50bccae5321e94?apiKey=b35e116fc89a469787758b8dbef2b35f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef0478be5c92b8f7b72aba9d49d13646acbb92b0c48de0edac50bccae5321e94?apiKey=b35e116fc89a469787758b8dbef2b35f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef0478be5c92b8f7b72aba9d49d13646acbb92b0c48de0edac50bccae5321e94?apiKey=b35e116fc89a469787758b8dbef2b35f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef0478be5c92b8f7b72aba9d49d13646acbb92b0c48de0edac50bccae5321e94?apiKey=b35e116fc89a469787758b8dbef2b35f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef0478be5c92b8f7b72aba9d49d13646acbb92b0c48de0edac50bccae5321e94?apiKey=b35e116fc89a469787758b8dbef2b35f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef0478be5c92b8f7b72aba9d49d13646acbb92b0c48de0edac50bccae5321e94?apiKey=b35e116fc89a469787758b8dbef2b35f&"
                      className="shrink-0 w-12 aspect-square"
                    />
                    <div className="flex flex-col my-auto">
                      <div className="text-xl">Main walllet</div>
                      <div className="text-xs">3,415.29 XRP</div>
                    </div>
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3c40833c0529e43f1801735b61e8563ea678b06b8b401a60e75c26baabd49f8?apiKey=b35e116fc89a469787758b8dbef2b35f&"
                    className="shrink-0 my-auto w-6 aspect-square"
                  />
                </div>
              </div>
              <div className="flex gap-2.5 justify-between p-2 mt-4 w-full bg-white rounded-xl border border-gray-200 border-solid max-md:flex-wrap max-md:max-w-full">
                <div className="flex gap-2 self-start text-base text-right whitespace-nowrap">
                  <div className="text-gray-200">0.00</div>
                  <div className="text-black">XRP</div>
                </div>
                <div className="flex justify-center items-center p-1 w-6 h-6 bg-blue-500 rounded-md">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3f77b957a4c968953215fe2eca05c9cfa1c0d4b7cfc66b2e8c5fb34b3358600?apiKey=b35e116fc89a469787758b8dbef2b35f&"
                    className="w-4 aspect-square"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-between px-4 py-2.5 mt-4 bg-white rounded-xl border border-gray-200 border-solid max-md:max-w-full">
                <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
                  <div className="flex gap-4">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ac2bcad1b81c78e508065fe12da59cf63ff67285e383e714300274d1094aec7c?apiKey=b35e116fc89a469787758b8dbef2b35f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac2bcad1b81c78e508065fe12da59cf63ff67285e383e714300274d1094aec7c?apiKey=b35e116fc89a469787758b8dbef2b35f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac2bcad1b81c78e508065fe12da59cf63ff67285e383e714300274d1094aec7c?apiKey=b35e116fc89a469787758b8dbef2b35f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac2bcad1b81c78e508065fe12da59cf63ff67285e383e714300274d1094aec7c?apiKey=b35e116fc89a469787758b8dbef2b35f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac2bcad1b81c78e508065fe12da59cf63ff67285e383e714300274d1094aec7c?apiKey=b35e116fc89a469787758b8dbef2b35f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac2bcad1b81c78e508065fe12da59cf63ff67285e383e714300274d1094aec7c?apiKey=b35e116fc89a469787758b8dbef2b35f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac2bcad1b81c78e508065fe12da59cf63ff67285e383e714300274d1094aec7c?apiKey=b35e116fc89a469787758b8dbef2b35f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac2bcad1b81c78e508065fe12da59cf63ff67285e383e714300274d1094aec7c?apiKey=b35e116fc89a469787758b8dbef2b35f&"
                      className="shrink-0 my-auto w-12 aspect-square"
                    />
                    <div className="flex flex-col">
                      <div className="text-xl text-black">XRP</div>
                      <div className="flex gap-3 text-base">
                        <div className="text-black">0.4714 $</div>
                        <div className="text-red-500">– 6,39 %</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col text-right text-black">
                    <div className="text-xl">0 XRP</div>
                    <div className="text-base">0 $</div>
                  </div>
                </div>
                <div className="flex z-10 gap-2 self-center px-4 py-1 mt-0 text-base text-white whitespace-nowrap bg-blue-500 rounded-xl">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/cec62b4b6536719115cdea892d40e8f2026a8f457b7428a65ff2c38730d971d5?apiKey=b35e116fc89a469787758b8dbef2b35f&"
                    className="shrink-0 w-6 aspect-square"
                  />
                  <div>Swap</div>
                </div>
                <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
                  <div className="flex gap-4">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d5edec38f2cd1f0d46d2906da1165488d7a9f5a1043587587767f2fd4f5f8732?apiKey=b35e116fc89a469787758b8dbef2b35f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d5edec38f2cd1f0d46d2906da1165488d7a9f5a1043587587767f2fd4f5f8732?apiKey=b35e116fc89a469787758b8dbef2b35f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d5edec38f2cd1f0d46d2906da1165488d7a9f5a1043587587767f2fd4f5f8732?apiKey=b35e116fc89a469787758b8dbef2b35f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d5edec38f2cd1f0d46d2906da1165488d7a9f5a1043587587767f2fd4f5f8732?apiKey=b35e116fc89a469787758b8dbef2b35f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d5edec38f2cd1f0d46d2906da1165488d7a9f5a1043587587767f2fd4f5f8732?apiKey=b35e116fc89a469787758b8dbef2b35f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d5edec38f2cd1f0d46d2906da1165488d7a9f5a1043587587767f2fd4f5f8732?apiKey=b35e116fc89a469787758b8dbef2b35f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d5edec38f2cd1f0d46d2906da1165488d7a9f5a1043587587767f2fd4f5f8732?apiKey=b35e116fc89a469787758b8dbef2b35f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d5edec38f2cd1f0d46d2906da1165488d7a9f5a1043587587767f2fd4f5f8732?apiKey=b35e116fc89a469787758b8dbef2b35f&"
                      className="shrink-0 my-auto w-12 aspect-square"
                    />
                    <div className="flex flex-col">
                      <div className="text-xl text-black">Toncoin</div>
                      <div className="flex gap-3 text-base">
                        <div className="text-black">7,67 $</div>
                        <div className="text-lime-300">+ 6,39 %</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col text-right text-black">
                    <div className="text-xl">0 TON</div>
                    <div className="text-base">0 $</div>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 justify-between p-4 mt-4 text-xl text-white bg-blue-500 rounded-xl max-md:flex-wrap max-md:max-w-full">
                <div>Exchange</div>
                <div>0.00 XRP</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

