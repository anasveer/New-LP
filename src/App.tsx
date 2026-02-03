import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhySection from "./components/WhySection";
import Testimonial from "./components/testimonial";
import Video from "./components/video";
import Images from "./components/images";
import Clients from "./components/clients";
import TradingCta from "./components/trading";
import { CompareCards } from "./components/cards";
import { WhoIsSimon  } from "./components/simon";
import { FaqAccordion, type FaqItem } from "./components/faqs";
import { FinalCta } from "./components/contact";
import {  SiteFooter } from "./components/footer";

export default function App() {

  const FAQS: FaqItem[] = [
  {
    id: "profitable",
    question: "Are your signals really as profitable as you claim?",
    answer: (
      <>
        <p>
          Yes, they are! You can join our free Telegram channel and see the results of our members for yourself You’ll also find numerous customer reviews and even interviews with me and our clients on our website.
        </p>
        <p className="mt-3">
          On average, we achieve a win rate of around<b>85%</b>.
        </p>
      </>
    ),
  },
  {
    id: "free",
    question: "Are the signals really completely free?",
    answer: (
      <p>
        Yes, joining our community is 100% free. You don’t have to pay anything — our sponsor covers the costs for you.
<br />
<br />
We work with one of the world’s leading, award-winning trading platforms, which funds our service and pays for your membership. As long as you use their platform, we can offer our service completely free of charge.
<br />
<br />
It’s a true win-win situation, and that’s exactly why Fredtrading has gained massive popularity in recent years and established itself as a globally recognized trading brand.
      </p>
    ),
  },
  {
    id: "noexp",
    question: "What if I have absolutely no trading experience?",
    answer: (
      <p>
        No experience? No problem! You don’t need any prior knowledge to get started with us. Everything is designed so you can simply copy and paste our live trades and start profiting — allowing you to earn from day one.
<br />
<br />
Sit back and relax, we take care of the rest!
<br />
<br />
In fact, 95% of our members had never placed a single trade before joining The Signals Bank.
      </p>
    ),
  },
  {
    id: "start",
    question: "How can I get started?",
    answer: (
      <p>
        Simply click the “Join” button, which you’ll find in several places on our website. You’ll be redirected to our Telegram community, where my team and I will guide you step by step through the setup process.
<br />
<br />
The setup takes no more than 10 minutes, and after that you’ll only need 15–20 minutes per day.
<br />
<br />
Everything is completely free — you only need trading capital to get started.
      </p>
    ),
  },
   {
    id: "learn",
    question: "What if I want to learn how to trade on my own?",
    answer: (
      <p>
        No problem at all! After joining The Signals Bank, you’ll receive all the tools and knowledge you need to learn how to trade independently. Many of our members started by simply copying our trades — and are now successful traders themselves.
        <br />
        <br />

You’ll also get access to a free 5-hour video course and a global community of 6,000+ traders, where you can connect, learn, and exchange ideas.
      </p>
    ),
  },
];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <WhySection />
      <Testimonial/>
      <Video/>
      <Images/>
      <Clients/>
      <TradingCta/>
       <CompareCards
        leftTitle="Trade with The Signals Bank"
        rightTitle="Trading By Yourself"
        leftItems={[
          "Copy & paste our simple trade setups and signals",
          "Learn from our capital trading course + resources",
          "Connect with thousands of traders worldwide",
          "24/7 support from our team and mentors",
          "Trade together during live sessions",
        ]}
        rightItems={[
          "Spend countless hours staring at charts",
          "Make avoidable mistakes that cost money",
          "Trade without a strategy or trading plan",
          "Lose thousands before seeing your first profits",
          "Handle every challenge alone",
        ]}
      />
      <WhoIsSimon className="mt-20 mb-20"/>

       <FaqAccordion
        title="FAQ"
        subtitle="Everything you need to know before getting started."
        items={FAQS}
        defaultOpenId="profitable"
        allowMultiple={false}
      />

      <div className="py-20">
      <FinalCta
        bgImage="/src/assets/laptop.jpg"   // chart / galaxy style image
        logoImage="/src/assets/logo.png"       // end wala logo
        buttonHref="#join"
      />
    </div>

    <SiteFooter
        logoSrc="/images/logo-round.png"
        contactEmail="support@thesignalsbank.com"
        social={{
          facebook: "https://facebook.com",
          twitter: "https://twitter.com",
          youtube: "https://youtube.com",
          telegram: "https://t.me/yourgroup",
        }}
      />
    </div>
  );
}
