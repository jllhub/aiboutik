import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

export default async function Home() {
  const t = await getTranslations('HomePage');

  return (
    <main className="flex min-h-screen flex-col">
 

      {/* Hero Section */}
      <section id='hero'
        style={{
          // background: "linear-gradient(90deg, #5E18EC 90%, transparent 100%)",
          background: "#5E18EC",
          position: 'relative',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center right',
        }}
        className="flex flex-col md:flex-row items-center rounded-4xl justify-between p-10"
      >
        <div className="max-w-2xl" style={{ flexBasis: '95%', height: '32em' }}>
           <h1 style={{lineHeight:'1.3'}} className="text-3xl md:text-4xl mt-25 font-bold text-white mb-6">
            Ou pa gen kat pavre !? <br />
            Ebyen kite Aiboutik komande sou <br />
             <span style={{ color: '#fdc700', position: 'relative', display: 'inline-block' }}>
               Shein, Amazon & Temu
               <span
                 style={{
                   display: 'block',
                   height: '6px',
                   width: '100%',
                   background:
                     'url("data:image/svg+xml;utf8,<svg width=\'100%25\' height=\'6\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M0,4 Q20,8 40,4 T80,4 T120,4 T160,4 T200,4 T240,4 T280,4 T320,4 T360,4 T400,4\' stroke=\'%23F0B100\' stroke-width=\'4\' fill=\'none\'/></svg>") repeat-x',
                   backgroundSize: 'auto 6px',
                   position: 'absolute',
                   left: 0,
                   bottom: '-8px',
                   pointerEvents: 'none',
                 }}
                 aria-hidden="true"
               />
             </span> pou ou!
          </h1>
        <div className="text-white text-sm italic">
        Chwazi atik ou pi renmen sou Shein, Amazon 
        oswa Temu san pwoblèm.<br/> Nou achte yo pou ou, menm si
        ou pa gen kat labank. Resevwa kòmann ou <br/> vit, an tout sekirite,san okenn tèt chaje.
        </div>
          <div className="flex gap-4 mt-6">
          <button className="bg-white text-black font-semibold px-3
           py-2 rounded-full shadow-md hover:bg-gray-100 transition"
           style={{fontSize:'1.1em',fontWeight:'bold',cursor:'pointer'}}>
            Kijan nou fonksyone?
            <span className="inline-block ml-1 align-middle" aria-hidden="true">
              {/* Thinking icon (lightbulb with a "thought" bubble) */}
              <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18h6" />
                <path d="M10 22h4" />
                <path d="M12 2a7 7 0 0 0-7 7c0 2.8 1.7 5.2 4.1 6.3.2.1.3.3.3.5v1.2c0 .6.4 1 1 1h3.2c.6 0 1-.4 1-1v-1.2c0-.2.1-.4.3-.5C17.3 14.2 19 11.8 19 9a7 7 0 0 0-7-7z" />
                <circle cx="19.5" cy="20.5" r="1.5" fill="currentColor" />
              </svg>
            </span>
          </button>
          <button className="bg-yellow-400 text-black font-semibold px-5
           py-3 rounded-full shadow-md hover:bg-yellow-500 transition"
           style={{fontSize:'1.1em',fontWeight:'bold',cursor:'pointer'}}>
            Fe premye acha'm  
            <span className="inline-block ml-2 align-middle" aria-hidden="true">
              <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
          </button>
          </div>
        </div>

        
        
      </section>

      <div className="flex flex-row items-center justify-center mt-8">
       
          <a href="#how-it-works" className="cursor-pointer group">
            <span className="block animate-bounce" style={{ animationDuration: '1.2s' }}>
            <span style={{fontSize:'1.2em',fontWeight:'bold'}}>Konnen plis </span>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" className="mx-auto text-yellow-400" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5v14M12 19l-5-5M12 19l5-5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
                    </a>
        </div>
      {/* Features */}
      {/* <section className="py-12 px-8 bg-white rounded-3xl shadow-md mx-4 md:mx-12 -mt-12 relative z-10">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-10">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-6 bg-purple-100 rounded-xl text-center">
            <div className="text-3xl mb-3">🛒</div>
            <p className="text-gray-700">Easy shopping decisions</p>
          </div>
          <div className="p-6 bg-yellow-100 rounded-xl text-center">
            <div className="text-3xl mb-3">🚚</div>
            <p className="text-gray-700">Fast shipping</p>
          </div>
          <div className="p-6 bg-orange-100 rounded-xl text-center">
            <div className="text-3xl mb-3">📦</div>
            <p className="text-gray-700">Amazon integration</p>
          </div>
          <div className="p-6 bg-pink-100 rounded-xl text-center">
            <div className="text-3xl mb-3">✨</div>
            <p className="text-gray-700">Temu support</p>
          </div>
        </div>
      </section> */}

      {/* How it works */}
      <section className="py-16 px-10 text-center">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6">Twa etap rapid pou'w fe komand ou yo... </h1>

        <div className="grid md:grid-cols-4 gap-8 max-w-8xl mx-auto w-full">
          {/* Step 1 */}
          <div className="bg-white text-gray-800 p-8 rounded-xl shadow-md flex flex-col items-center w-full md:w-[320px]">
            <div className="w-16 h-16 bg-purple-600 text-white flex items-center justify-center rounded-full font-bold text-2xl mb-4">1</div>
            <h2 className="text-lg font-bold mb-2">Chwazi pwodwi ou vle yo</h2>
            <p>Vizite Shein, Temu, oswa Amazon, epi chwazi tout pwodwi ou bezwen. Kopi lyen chak atik epi kole yo sou platfòm nou an pou kòmanse pwosesis la.</p>
          </div>
          {/* Step 2 */}
          <div className="bg-white text-gray-800 p-8 rounded-xl shadow-md flex flex-col items-center w-full md:w-[320px]">
            <div className="w-16 h-16 bg-purple-600 text-white flex items-center justify-center rounded-full font-bold text-2xl mb-4">2</div>
            <h2 className="text-lg font-bold mb-2">Nou okipe tout acha ou yo</h2>
            <p>Nou verifye epi trete demann ou a, achte pwodwi yo pou ou, epi asire tout bagay fèt san danje ak transparans. Ou pa bezwen kat kredi entènasyonal.</p>
          </div>
          {/* Step 3 */}
          <div className="bg-white text-gray-800 p-8 rounded-xl shadow-md flex flex-col items-center w-full md:w-[320px]">
            <div className="w-16 h-16 bg-purple-600 text-white flex items-center justify-center rounded-full font-bold text-2xl mb-4">3</div>
            <h2 className="text-lg font-bold mb-2">Peye fasilman</h2>
            <p>Peye ak MonCash oswa NatCash. Nou fè li fasil pou ou peye san kat kredi entènasyonal.</p>
          </div>
          {/* Step 4 */}
          <div className="bg-white text-gray-800 p-8 rounded-xl shadow-md flex flex-col items-center w-full md:w-[320px]">
            <div className="w-16 h-16 bg-purple-600 text-white flex items-center justify-center rounded-full font-bold text-2xl mb-4">4</div>
            <h2 className="text-lg font-bold mb-2">Livrezon rapid ann Ayiti</h2>
            <p>Nou voye tout atik ou yo rapidman ann Ayiti. Ou ka swiv kòmann ou epi resevwa li san estrès, dirèkteman nan men ekip nou an.</p>
          </div>
        </div>

      </section>

      <section>
        <div className="flex items-start gap-8">
          <div>
            <img src="/imgs/herov2.png" alt="Big hero v2" style={{ width: '40rem' }} />
          </div>
          <div className="bg-white shadow-md rounded-xl px-6 py-4 text-gray-800 max-w-lg text-left">
            <div className="relative flex items-start">
              <div
                className="relative flex items-center justify-center"
                style={{ minHeight: '180px', minWidth: '380px' }}
              >
                <img
                  src="/imgs/spoke.png"
                  alt="Bubble conversation"
                  className="w-full h-auto"
                  style={{
                    minWidth: '600px',
                    objectFit: 'contain',
                  }}
                />
                <div
                  className="absolute left-0 top-0 w-full h-full flex items-center justify-center px-12 py-8"
                  style={{
                    pointerEvents: 'none',
                  }}
                >
                  <span className="text-gray-800 text-base leading-relaxed font-normal text-center w-full">
                    <span className="font-semibold">Kijan li mache?</span> Si w gen nenpòt kesyon, ekri nou sou WhatsApp! Nou la pou ede w chak etap.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-purple-600 py-12 px-10 text-white rounded-t-3xl">
        <h2 className="text-2xl font-bold text-center mb-8">Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Testimonial 1 */}
          <div className="bg-white text-gray-800 p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <Image
                src="/user1.jpg"
                alt="User 1"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="ml-4">
                <p className="font-semibold">Jane Doe</p>
                <p className="text-yellow-500">★★★★★</p>
              </div>
            </div>
            <p>“This service is amazing, I got my items without hassle!”</p>
          </div>
          {/* Testimonial 2 */}
          <div className="bg-white text-gray-800 p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <Image
                src="/user2.jpg"
                alt="User 2"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="ml-4">
                <p className="font-semibold">Anna Smith</p>
                <p className="text-yellow-500">★★★★★</p>
              </div>
            </div>
            <p>“They helped me get all my Temu stuff shipped safely.”</p>
          </div>
          {/* Testimonial 3 */}
          <div className="bg-white text-gray-800 p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <Image
                src="/user3.jpg"
                alt="User 3"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="ml-4">
                <p className="font-semibold">Jean Baptiste</p>
                <p className="text-yellow-500">★★★★★</p>
              </div>
            </div>
            <p>“Mwen te panse li tap difisil pou achte sou Amazon depi Ayiti, men Aiboutik fè tout bagay fasil! Livrezon an te rapid e sèvis la te ekselan.”</p>
          </div>
          {/* Testimonial 4 */}
          <div className="bg-white text-gray-800 p-6 rounded-xl shadow-md md:col-span-1">
            <div className="flex items-center mb-4">
              <Image
                src="/user4.jpg"
                alt="User 4"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="ml-4">
                <p className="font-semibold">Marie Paul</p>
                <p className="text-yellow-500">★★★★★</p>
              </div>
            </div>
            <p>“Mwen te itilize Aiboutik pou achte rad sou Shein, epi tout bagay te rive rapid! Mèsi anpil pou sèvis la.”</p>
          </div>
          {/* Testimonial 5 */}
          <div className="bg-white text-gray-800 p-6 rounded-xl shadow-md md:col-span-1">
            <div className="flex items-center mb-4">
              <Image
                src="/user5.jpg"
                alt="User 5"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="ml-4">
                <p className="font-semibold">Ricardo Jean</p>
                <p className="text-yellow-500">★★★★★</p>
              </div>
            </div>
            <p>“Mwen te peye ak MonCash, epi tout pwosesis la te fasil. Mwen rekòmande Aiboutik bay tout zanmi mwen!”</p>
          </div>
          {/* Testimonial 6 */}
          <div className="bg-white text-gray-800 p-6 rounded-xl shadow-md md:col-span-1">
            <div className="flex items-center mb-4">
              <Image
                src="/user6.jpg"
                alt="User 6"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="ml-4">
                <p className="font-semibold">Sophia Charles</p>
                <p className="text-yellow-500">★★★★★</p>
              </div>
            </div>
            <p>“Mwen te resevwa tout atik mwen yo san pwoblèm. Sèvis kliyan an te toujou disponib pou ede m.”</p>
          </div>
        </div>
      </section>

      
    </main>
  );
}
