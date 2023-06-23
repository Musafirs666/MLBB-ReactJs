function Footbar() {
  return (
    <>
      <div className="h-[80px] w-full bg-neutral-800 flex items-center justify-center font-bebasNeue">
        <div className="hover:bg-neutral-700 p-2 rounded-lg">
          <button className="text-neutral-100 text-xl">Unduh Game</button>
        </div>
      </div>
      <div className="h-[350px] w-full bg-neutral-900 flex-col text-neutral-200">
        <div
          id="social media"
          className="flex justify-center items-center gap-4 p-6"
        >
          {[`fb`, `yt`, `ig`].map((source, index) => (
            <button key={index}>
              <img
                className="bg-neutral-800 p-1 rounded-full"
                src={`/img/${source}.png`}
              />
            </button>
          ))}
        </div>
        <div id="Developer" className="flex justify-center items-center mt-6">
          <img className="w-[7%]" src="/img/mlogo.png" />
          <img className="w-[15%]" src="/img/moontoon.png" />
        </div>
        <div
          id="Copyright"
          className="flex justify-center items-center p-4 mt-2 text-sm"
        >
          <p id="copyright" className="w-[615px] text-center">
            &#169; Moonton, Inc. MOBILE LEGENDS: BANG-BANG, Dan semua logo
            terkait adalah merek dagang, merek layanan, dan/atau merek terdaftar
            Montoon, Inc.
          </p>
        </div>

        <div id="Me" className="flex justify-center items-center p-4 text-lg">
          <p className=""> Developed by :</p>
          <p className="italic">@_musafirs</p>
        </div>
      </div>
    </>
  );
}

export default Footbar;
