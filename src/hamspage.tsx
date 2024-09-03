// import binanceLogo from './images/binance-logo.png';
import Mine from './icons/Mine';
import Friends from './icons/Friends';
import Coins from './icons/Coins';
import { hamsterCoin } from './images';

function hamspage() {
  return (
    <div className="gen">
    <h4 className="pp text-center">This is HamsPay official Page with Airdrop.</h4>
    <h5 className="pp text-center">Share the link to your friends: you will be rewarded with 5,000 $HamsPay for each referral</h5>
  
  <br></br>
  <div className="container fluid">
  <h4 className="pri text-center">https://t.me/HamsPay_bot/HamsPay_bot</h4>
     <br></br>
    <h4 className="pri text-center">Share on:</h4>
  </div>
  <br></br>
  <div className="butt text-center">
    <a href="https://t.me/share/url?url=https://t.me/HamsPay_bot" target="_blank">Telegram</a>
    <a href="https://twitter.com/intent/tweet/url?url=https://t.me/HamsPay_bot" target="_blank">Twitter</a>
      <a href="https://api.whatsapp.com/send?text=https://t.me/HamsPay_bot" target="_blank">Whatsapp</a>
    
    </div>


<div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-xl bg-[#272a2f] flex justify-around items-center z-50 rounded-3xl text-xs">

<div className="text-center text-[#85827d] w-1/5 bg-[#1c1f24] m-1 p-2 rounded 2xl">

  {/* <img src={binanceLogo} alt="Exchange" className="w-8 h-8 mx-auto" /> */}
  <p className="mt-1"><a href="/">Home</a></p>
</div>


<div className="text-center text-[#85827d] w-1/5"><Mine className="w-8 h-8 mx-auto"/>
<p className="mt-1">Mine</p>
</div>
<div className="text-center text-[#85827d] w-1/5"><Friends className="w-8 h-8 mx-auto"/>
<p className="mt-1"><a href="/hamspage">Friends</a></p>
</div>
<div className="text-center text-[#85827d] w-1/5"><Coins className="w-8 h-8 mx-auto"/>
<p className="mt-1">Earn</p>
</div>
<div className="text-center text-[#85827d] w-1/5">
  <img src={hamsterCoin} className="w-8 h-8 mx-auto"/>
<p className="mt-1">Airdrop</p>
</div>

</div>

      
    </div>
  )
}

export default hamspage
