import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#9FFFE0] text-[#072723] font-sans text-[175%]">
<Head>
  <title>NGL Sales Bot</title>
  <link rel="icon" href="/favicon.ico" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet" />

  {/* Open Graph (Discord, Facebook, etc.) */}
  <meta property="og:title" content="NGL Sales Bot" />
  <meta property="og:description" content="Track HyperEVM NFT sales across Discord in real-time." />
  <meta property="og:image" content="https://ibb.co/qLL0Hrtt" />
  <meta property="og:url" content="nglsales.info" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="NGL Sales Bot" />
  <meta name="twitter:description" content="Track HyperEVM NFT sales across Discord in real-time." />
  <meta name="twitter:image" content="https://ibb.co/qLL0Hrtt" />
</Head>


      <main className="max-w-3xl mx-auto py-20 px-6 text-center">
        <h1 className="text-6xl font-semibold tracking-tight mb-12">NGL Sales Bot</h1>
        <p className="text-1xl mb-10">
          Track your <strong>HyperEVM</strong> NFT project’s sales across Discord in real-time.
        </p>
        <a
          href="https://discord.com/oauth2/authorize?client_id=1385745188823240795&permissions=2147567616&integration_type=0&scope=bot+applications.commands"
          className="inline-block bg-black text-white px-6 py-3 rounded-full font-medium transition hover:opacity-80"
        >
          Add the Bot
        </a>

        <section className="mt-16 text-left">
          <h2 className="text-3xl font-semibold mb-4">How to Use</h2>
          <ol className="space-y-4 text-2xl">
            <li>
              <strong>1. </strong>
              <a href="https://discord.gg/XEYVfcvQ" className="underline font-bold hover:text-gray-700" target="_blank" rel="noopener noreferrer">
                Join the NGL Discord
              </a>{' '}— you need <a href="https://drip.trade/collections/niggaliquid" className="font-bold underline hover:text-gray-700" target="_blank" rel="noopener noreferrer">20 Niggaliquid NFTs</a> to access.
            </li>
            <li>
              <strong>2. </strong>
              <a href="https://discord.com/channels/1384238301065777213/1385877609228795945/1385877609916796938" className="underline font-bold hover:text-gray-700" target="_blank" rel="noopener noreferrer">
                Verify your wallet
              </a>{' '} using the drip.trade verify bot in our server to get the <strong>NGL Pass</strong> role.
            </li>
            <li>
              <strong>3. </strong>
              Add the bot to your project server using the button above.
            </li>
            <li>
              <strong>4. </strong>
              In the Discord channel where you want sales notifications, type:
              <div className="bg-white text-black px-4 py-2 mt-2 inline-block rounded font-mono text-sm">
                /register [contract address]
              </div>
            </li>
            <li>
              🎉 That’s it! Sales and bids will start appearing automatically.
            </li>
          </ol>
        </section>

        <footer className="mt-24 text-m text-gray-700">
          Niggaliquid.
        </footer>
      </main>
    </div>
  );
}
