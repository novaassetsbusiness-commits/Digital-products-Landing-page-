import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  Download, 
  RefreshCw, 
  Users, 
  ChevronRight, 
  Timer, 
  Lock, 
  Sparkles,
  ArrowRight,
  TrendingUp,
  CheckCircle2,
  Bell
} from 'lucide-react';
import { CATEGORIES, TESTIMONIALS } from './constants';

// --- Types ---
interface Category {
  name: string;
  value: string;
}

// --- Constants ---
const CPA_LINK = "https://appchecker.space/cl/i/82v326";
const GUMROAD_LINK = "https://novaassetshop.gumroad.com/l/fmnwjo";
const VAULT_IMAGE = "https://res.cloudinary.com/dmafb7518/image/upload/q_auto/f_auto/v1777561254/Untitled_600_x_600_px__20260430_172426_0000_lahou0.png";
const NEW_PREMIUM_IMAGE = "https://res.cloudinary.com/globalglaz-com/image/upload/v1777566106/file_000000000e7072079fcbf9749b8e6c87_eah14u.png";

export default function App() {
  const [timeLeft, setTimeLeft] = useState({ minutes: 29, seconds: 59 });
  const [claimedCount, setClaimedCount] = useState(83);
  const [showPopup, setShowPopup] = useState(false);
  const [recentBuyer, setRecentBuyer] = useState("");

  // Redirect Logic
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        const clicked = localStorage.getItem('nova_clicked');
        if (clicked === 'true') {
          localStorage.removeItem('nova_clicked');
          window.location.href = GUMROAD_LINK;
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  const handleCTAClick = () => {
    localStorage.setItem('nova_clicked', 'true');
    window.open(CPA_LINK, '_blank');
  };

  // Timer Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { minutes: prev.minutes - 1, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Fake Live Counter / Popups
  useEffect(() => {
    const names = ["Alex", "Sarah", "Michael", "Elena", "David", "Jessica", "Ryan", "Sophia"];
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        setRecentBuyer(names[Math.floor(Math.random() * names.length)]);
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 4000);
        if (claimedCount < 98) setClaimedCount(prev => prev + 1);
      }
    }, 8000);
    return () => clearInterval(interval);
  }, [claimedCount]);

  return (
    <div className="min-h-screen bg-nova-dark selection:bg-nova-teal selection:text-black scroll-smooth">
      {/* Background Particles Decoration */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-nova-teal/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-nova-blue/5 blur-[120px] rounded-full"></div>
      </div>

      {/* Navigation (Transparent) */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-nova-dark/20 backdrop-blur-md px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-nova-teal to-nova-blue rounded-lg flex items-center justify-center shadow-lg shadow-nova-teal/20">
            <Lock className="w-4 h-4 text-black" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight uppercase italic">Nova Assets</span>
        </div>
        <button 
          onClick={handleCTAClick}
          className="hidden md:flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium hover:bg-white/10 transition-all border-white/20"
        >
          <TrendingUp className="w-4 h-4 text-nova-teal" />
          <span>Claim Access</span>
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto z-10 overflow-hidden">
        <div className="text-center space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 glass rounded-full border-nova-teal/30 mb-4"
          >
            <Sparkles className="w-4 h-4 text-nova-teal animate-pulse" />
            <span className="text-xs font-semibold tracking-wider uppercase text-nova-teal">Exclusive Founders Access</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-5xl md:text-8xl font-black leading-[1] text-glow bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 tracking-tighter"
          >
            Unlock <span className="text-nova-teal">1M+ Digital Assets</span> <br /> in One Vault
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl text-white/60 max-w-2xl mx-auto font-light tracking-wide"
          >
            195+ Categories. Lifetime Access. No Monthly Fees. <br className="hidden md:block" />
            Everything you need to build a fortune online.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col items-center gap-4"
          >
            <button 
              onClick={handleCTAClick}
              className="group relative px-8 py-5 bg-gradient-to-r from-nova-teal to-nova-blue rounded-xl font-display font-bold text-lg md:text-xl text-black hover:scale-105 hover:shadow-[0_0_30px_rgba(0,245,255,0.4)] transition-all flex items-center gap-3 overflow-hidden"
            >
              <div className="absolute inset-0 glass-shimmer opacity-30"></div>
              <span>Get Free Access Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="flex items-center gap-2 text-nova-teal animate-pulse font-medium">
              <Users className="w-4 h-4" />
              <span>Only {100 - claimedCount} free spots left worldwide</span>
            </p>
          </motion.div>
        </div>

        {/* Premium Floating Hero Asset */}
        <motion.div
          initial={{ opacity: 0, y: -20, x: 20 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute -top-10 -right-12 md:top-24 md:-right-20 lg:-right-32 z-20 w-40 md:w-72 lg:w-96 group"
        >
          <div className="relative p-2 md:p-4">
            {/* Soft Neon Glow */}
            <div className="absolute inset-0 bg-nova-teal/20 blur-[40px] rounded-[32px] group-hover:bg-nova-teal/40 transition-all duration-700"></div>
            
            <div className="glass p-1.5 md:p-3 rounded-[24px] border-white/10 shadow-2xl overflow-hidden hover:scale-105 transition-all duration-700 animate-float cursor-pointer">
              <div className="relative">
                <img 
                  src={NEW_PREMIUM_IMAGE} 
                  alt="Done For You Products" 
                  className="rounded-2xl w-full h-auto object-cover"
                />
                
                {/* Requested Gradient: Top side → BLACK (strong) Bottom side → LIGHT (transparent fade) */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.1) 70%, transparent 100%)' }}
                ></div>

                {/* Text Overlay */}
                <div className="absolute top-4 left-4 right-4">
                  <p className="font-display font-black text-xs md:text-lg text-white leading-tight text-glow uppercase tracking-tighter">
                    1M+ Done-For-You <br /> 
                    <span className="text-nova-teal neon-text-teal text-[10px] md:text-sm">Digital Products</span>
                  </p>
                </div>

                {/* Subtle Reflection */}
                <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-white/5 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Vault Product Showcase */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="mt-24 relative max-w-4xl mx-auto group"
        >
          {/* Floating Neon Ring */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-nova-teal/10 blur-[100px] rounded-full group-hover:bg-nova-teal/20 transition-all duration-700"></div>
          
          {/* Pedestal Shadow */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-4 bg-nova-blue/30 blur-[20px] rounded-full"></div>

          <div className="relative glass p-4 md:p-8 rounded-[40px] border-white/5 overflow-hidden group-hover:scale-[1.02] transition-transform duration-700 shadow-2xl shadow-black/80">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
            <img 
              src={VAULT_IMAGE} 
              alt="Nova Assets Vault" 
              className="w-full h-auto rounded-3xl object-contain animate-float"
            />
            
            {/* Shimmer overlay */}
            <div className="absolute inset-0 glass-shimmer opacity-10 pointer-events-none"></div>
          </div>

          {/* Floating Badge */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-4 md:-right-10 glass p-4 rounded-2xl border-nova-blue/30 backdrop-blur-2xl shadow-xl shadow-nova-blue/20"
          >
            <h3 className="font-display font-bold text-2xl text-nova-blue mb-1">1M+ Assets</h3>
            <p className="text-xs text-white/50 uppercase tracking-widest">Digital Products</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Urgency + Countdown Banner */}
      <section className="bg-red-500/10 border-y border-red-500/20 py-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
              <Timer className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-display font-bold text-xl uppercase tracking-tight text-white mb-1">Free Access Ending Soon</h4>
              <p className="text-red-400 font-medium text-sm">Price Increases to $499 immediately after</p>
            </div>
          </div>

          <div className="flex gap-4">
            <TimeUnit value={timeLeft.minutes} label="MINS" />
            <div className="text-3xl font-display font-black pt-2">:</div>
            <TimeUnit value={timeLeft.seconds} label="SECS" />
          </div>

          <button 
            onClick={handleCTAClick}
            className="w-full md:w-auto px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-nova-teal hover:text-black transition-colors"
          >
            Claim My Spot
          </button>
        </div>
      </section>

      {/* Category Grid Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-display text-4xl md:text-6xl font-black italic tracking-tighter">195+ Categories Covered</h2>
          <p className="text-white/50 max-w-xl mx-auto italic">Every niche, every tool, every resource you'll ever need.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {CATEGORIES.map((cat, idx) => (
            <CategoryCard key={idx} category={cat} index={idx} />
          ))}
        </div>

        {/* View all overlay (optional effect) */}
        <div className="mt-12 text-center">
          <p className="text-nova-teal/80 font-display font-bold animate-pulse text-lg">+ 95 Other Categories Included</p>
        </div>
      </section>

      {/* Value Stack Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="bg-nova-blue/10 absolute inset-0 -skew-y-3 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="font-display text-4xl md:text-6xl font-black italic leading-tight">
              Worth $500,000+ — <br />
              <span className="text-nova-teal">Yours for FREE</span>
            </h2>
            <div className="space-y-6">
              <ValueItem text="Lifetime Access (No hidden fees)" />
              <ValueItem text="Instant Download (High-speed servers)" />
              <ValueItem text="Weekly Updates (Stay ahead of trends)" />
              <ValueItem text="Beginner to Pro Content" />
              <ValueItem text="Resell Rights Included on Multi-Assets" />
            </div>
            <button 
              onClick={handleCTAClick}
              className="w-full md:w-auto px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-nova-teal transition-all flex items-center justify-center gap-2"
            >
              <span>Unlock Everything Now</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-nova-teal/20 blur-[50px] rounded-full"></div>
            <div className="glass p-12 rounded-[40px] border-white/10 relative z-10 text-center space-y-6">
              <div className="w-20 h-20 bg-nova-teal/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-nova-teal/40">
                <ShieldCheck className="w-10 h-10 text-nova-teal" />
              </div>
              <h3 className="font-display font-bold text-3xl">Premium Guarantee</h3>
              <p className="text-white/60 leading-relaxed">
                Our team hand-curates and verifies every asset. We ensure the highest quality digital products available online. No junk, no fluff. Just pure value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vault Experience Section */}
      <section className="py-32 px-6 overflow-hidden relative">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="relative">
            <div className="absolute inset-0 bg-nova-teal/20 blur-[100px] rounded-full"></div>
            <motion.div 
              whileInView={{ scale: [0.95, 1], opacity: [0, 1] }}
              className="relative glass rounded-[50px] border-white/5 p-8 md:p-20 shadow-[0_0_100px_rgba(0,0,0,0.8)] overflow-hidden"
            >
              {/* Blur Preview of content */}
              <div className="absolute inset-0 opacity-20 contrast-125 blur-sm grayscale group-hover:grayscale-0 transition-all duration-1000">
                <div className="grid grid-cols-4 gap-2 h-full">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className="bg-white/10 rounded-lg"></div>
                  ))}
                </div>
              </div>
              
              <div className="relative z-10 space-y-6">
                <div className="p-4 bg-black/40 backdrop-blur-xl inline-block rounded-2xl border border-white/10 mb-4">
                  <Lock className="w-12 h-12 text-nova-teal mx-auto" />
                </div>
                <h2 className="font-display font-black text-3xl md:text-5xl italic">Everything You Need to Make Money Online</h2>
                <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
                  <span className="glass px-3 py-1 rounded-full border-white/10">Courses</span>
                  <span className="glass px-3 py-1 rounded-full border-white/10">Software</span>
                  <span className="glass px-3 py-1 rounded-full border-white/10">Design Kits</span>
                  <span className="glass px-3 py-1 rounded-full border-white/10">Trading Mastery</span>
                  <span className="glass px-3 py-1 rounded-full border-white/10">Automation</span>
                </div>
              </div>

              {/* Shimmering Overlay */}
              <div className="absolute inset-0 glass-shimmer opacity-20 pointer-events-none"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-4xl md:text-6xl font-black text-center mb-16 italic underline decoration-nova-teal/40 underline-offset-8">User Raving Results</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((test, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="glass p-8 rounded-3xl border-white/5 space-y-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 text-nova-teal mb-4">
                    {[...Array(5)].map((_, j) => <Sparkles key={j} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-lg italic text-white/90 font-light leading-relaxed">"{test.text}"</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-nova-teal/20 to-nova-blue/20 border border-white/10 flex items-center justify-center font-bold text-nova-teal">
                    {test.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{test.name}</h4>
                    <p className="text-xs text-white/40 uppercase tracking-widest">{test.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 text-center max-w-4xl mx-auto space-y-8 relative z-10">
        <div className="w-24 h-24 bg-gradient-to-br from-nova-teal/20 to-nova-blue/20 rounded-full flex items-center justify-center mx-auto border border-nova-teal/20 mb-8 overflow-hidden group">
          <div className="absolute inset-0 glass-shimmer opacity-30"></div>
          <Lock className="w-10 h-10 text-nova-teal group-hover:scale-110 transition-transform" />
        </div>
        <h2 className="font-display text-5xl md:text-7xl font-black italic tracking-tighter leading-none">Your Future is Inside</h2>
        <p className="text-xl text-white/50 font-light">Join the 10,000+ creators building their digital empires with Nova Assets.</p>
        
        <div className="pt-8 flex flex-col items-center">
          {/* Pre-CTA Value Visual */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 relative group max-w-md w-full px-4 md:px-0"
          >
            {/* Soft Ambient Glow */}
            <div className="absolute inset-x-0 -inset-y-4 bg-nova-teal/10 blur-[60px] rounded-full group-hover:bg-nova-teal/20 transition-all duration-700"></div>
            
            <div className="glass p-2 md:p-3 rounded-[24px] border-white/10 shadow-2xl relative overflow-hidden transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(0,245,255,0.2)]">
              <div className="relative">
                <img 
                  src={NEW_PREMIUM_IMAGE} 
                  alt="Nova Assets Collection" 
                  className="w-full h-auto rounded-[18px] opacity-90 group-hover:opacity-100 transition-opacity"
                />
                
                {/* Visual Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                {/* Text Overlay */}
                <div className="absolute bottom-4 left-0 w-full text-center px-4">
                  <p className="font-display font-black text-sm md:text-lg text-white text-glow uppercase tracking-tighter">
                    1M+ Done-For-You <br className="md:hidden" /> 
                    <span className="text-nova-teal neon-text-teal">Digital Products</span>
                  </p>
                </div>

                {/* Subtle Shimmer */}
                <div className="absolute inset-0 glass-shimmer opacity-20 pointer-events-none"></div>
              </div>
            </div>

            {/* Subtle Reflection */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-4/5 h-4 bg-nova-blue/10 blur-xl rounded-full opacity-50"></div>
          </motion.div>

          <button 
            onClick={handleCTAClick}
            className="group relative px-12 py-6 bg-white text-black font-display font-black text-2xl rounded-2xl hover:bg-nova-teal transition-all shadow-[0_0_50px_rgba(0,245,255,0.2)] flex items-center justify-center gap-4 mx-auto overflow-hidden"
          >
            <span>Unlock Nova Assets</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </button>
          <p className="mt-6 text-nova-teal/60 flex items-center justify-center gap-2 font-medium italic">
            <CheckCircle2 className="w-4 h-4" />
            Lifetime Access Guaranteed
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6 flex flex-col md:flex-row justify-between items-center gap-8 max-w-7xl mx-auto relative z-10">
        <div className="flex items-center gap-2 opacity-50 grayscale hover:grayscale-0 transition-all">
          <div className="w-6 h-6 bg-gradient-to-br from-nova-teal to-nova-blue rounded flex items-center justify-center">
            <Lock className="w-3 h-3 text-black" />
          </div>
          <span className="font-display font-bold text-sm tracking-tight uppercase italic">Nova Assets</span>
        </div>
        <div className="flex gap-12 text-xs text-white/30 uppercase tracking-[0.2em] font-medium italic">
          <a href="#" className="hover:text-nova-teal transition-colors underline decoration-white/10">Policy</a>
          <a href="#" className="hover:text-nova-teal transition-colors underline decoration-white/10">Terms</a>
          <a href="#" className="hover:text-nova-teal transition-colors underline decoration-white/10">Contact</a>
        </div>
        <p className="text-xs text-white/20 italic">© 2026 Nova Assets Shop. All rights reserved.</p>
      </footer>

      {/* Sticky Bottom CTA */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] w-full max-w-[90%] md:max-w-md hidden md:block">
        <motion.div 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="glass p-3 rounded-2xl flex items-center gap-4 border-nova-teal/20 shadow-2xl shadow-black/80"
        >
          <div className="w-12 h-12 bg-nova-teal rounded-lg flex items-center justify-center shrink-0">
            <Download className="w-6 h-6 text-black" />
          </div>
          <div className="flex-1">
            <h5 className="font-display font-bold text-sm leading-tight italic">Claim Your Digital Fortune</h5>
            <p className="text-[10px] text-white/40 uppercase tracking-widest leading-none mt-1 italic">Free spots: {100 - claimedCount} left</p>
          </div>
          <button 
            onClick={handleCTAClick}
            className="px-4 py-2 bg-nova-teal text-black font-bold text-sm rounded-lg hover:scale-105 transition-transform shrink-0"
          >
            CLAIM NOW
          </button>
        </motion.div>
      </div>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 w-full z-[60] md:hidden p-4 bg-nova-dark/80 backdrop-blur-2xl border-t border-white/5">
        <button 
          onClick={handleCTAClick}
          className="w-full py-4 bg-nova-teal text-black font-black text-lg rounded-xl flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,245,255,0.2)]"
        >
          <span>GET MY FREE ACCESS</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* Live Counter Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed bottom-24 md:bottom-10 left-6 z-[70] glass p-4 rounded-xl flex items-center gap-4 border-nova-blue/40 shadow-2xl backdrop-blur-3xl min-w-[280px]"
          >
            <div className="w-10 h-10 bg-nova-blue/20 rounded-full flex items-center justify-center border border-nova-blue/30 relative">
              <Users className="w-5 h-5 text-nova-blue" />
              <div className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-nova-dark animate-pulse"></div>
            </div>
            <div>
              <p className="text-sm font-bold italic"><span className="text-nova-blue">{recentBuyer}</span> just unlocked access</p>
              <p className="text-[10px] text-white/40 uppercase tracking-widest font-medium italic">Verified User • Seconds ago</p>
            </div>
            <div className="ml-auto">
              <Bell className="w-4 h-4 text-white/20" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// --- Subcomponents ---

function CategoryCard({ category, index }: { category: Category, index: number, key?: any }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
      whileHover={{ scale: 1.05, borderColor: 'rgba(0, 245, 255, 0.4)' }}
      className="glass p-4 rounded-2xl group transition-all cursor-crosshair border-white/5 shadow-xl"
    >
      <div className="flex justify-between items-start mb-2">
        <span className="text-[10px] text-nova-teal/60 font-mono tracking-tighter italic">#{index + 1}</span>
        <TrendingUp className="w-3 h-3 text-white/20 group-hover:text-nova-teal group-hover:animate-bounce transition-colors" />
      </div>
      <h4 className="font-display font-black text-sm md:text-base leading-tight group-hover:text-nova-teal transition-colors italic uppercase">{category.name}</h4>
      <div className="mt-3 flex items-center justify-between">
        <span className="text-[10px] text-white/30 uppercase tracking-widest italic">Core Value</span>
        <span className="text-xs font-bold text-white group-hover:scale-110 transition-transform">{category.value}</span>
      </div>
    </motion.div>
  );
}

function ValueItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-4 group">
      <div className="w-6 h-6 bg-nova-teal/10 rounded-full flex items-center justify-center border border-nova-teal/20 group-hover:bg-nova-teal group-hover:border-none transition-all">
        <CheckCircle2 className="w-4 h-4 text-nova-teal group-hover:text-black transition-colors" />
      </div>
      <span className="text-lg text-white/80 font-light group-hover:text-white transition-colors italic">{text}</span>
    </div>
  );
}

function TimeUnit({ value, label }: { value: number, label: string }) {
  return (
    <div className="text-center">
      <div className="bg-white/10 w-12 h-12 flex items-center justify-center rounded-lg border border-white/5 font-display font-black text-2xl">
        {value < 10 ? `0${value}` : value}
      </div>
      <span className="text-[8px] text-white/40 tracking-[0.2em] font-bold mt-1 block italic">{label}</span>
    </div>
  );
}
