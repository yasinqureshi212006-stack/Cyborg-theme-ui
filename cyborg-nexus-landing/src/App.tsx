import { Cpu, Zap, Shield, Eye, Database, Code, Globe, Lock } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-cyber-bg text-cyber-text">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      
      {/* Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyber-accent opacity-10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-secondary opacity-10 rounded-full blur-[100px] pointer-events-none" />

      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between px-6 py-4 border-b border-cyber-border bg-cyber-bg/80 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <motion.div 
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Cpu className="w-8 h-8 text-cyber-accent" />
          </motion.div>
          <span className="font-display font-bold text-xl tracking-wider text-white">NEXUS<span className="text-cyber-accent text-glow">.CORE</span></span>
        </div>
        <div className="hidden md:flex items-center gap-8 font-mono text-sm">
          <a href="#features" className="hover:text-cyber-accent transition-colors transition-duration-300">SYSTEMS</a>
          <a href="#about" className="hover:text-cyber-accent transition-colors transition-duration-300">ARCHITECTURE</a>
          <a href="#specs" className="hover:text-cyber-accent transition-colors transition-duration-300">SPECS</a>
        </div>
        <button className="hidden md:inline-flex px-4 py-2 border border-cyber-accent text-cyber-accent font-mono text-sm hover:bg-cyber-accent hover:text-black transition-all duration-300 box-glow">
          INITIALIZE
        </button>
        <button className="md:hidden text-cyber-accent">
          <Zap />
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
         <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-cyber-border rounded-full bg-cyber-surface/80 font-mono text-xs text-cyber-muted"
         >
           <span className="w-2 h-2 rounded-full bg-cyber-accent animate-pulse" />
           SYSTEM STATUS: ONLINE
         </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-display font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight text-white mb-6 uppercase"
        >
          Transcend <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-accent to-blue-600">The Biological</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl text-lg md:text-xl text-cyber-muted font-sans mb-10"
        >
          Augment your reality with military-grade cybernetic interfaces. 
          Seamlessly integrate machine precision with human intuition.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <button className="px-8 py-4 bg-cyber-accent text-black font-display font-bold tracking-widest hover:bg-white hover:shadow-[0_0_20px_rgba(0,240,255,0.8)] transition-all duration-300 transform hover:-translate-y-1">
            DEPLOY UPGRADE
          </button>
          <button className="px-8 py-4 border border-cyber-border text-white font-mono text-sm hover:border-cyber-accent hover:text-cyber-accent transition-colors duration-300 flex items-center justify-center gap-2">
            <Eye className="w-4 h-4" /> VIEW SCHEMATICS
          </button>
        </motion.div>
      </section>

      {/* Stats Ticker */}
      <div className="relative z-10 w-full border-y border-cyber-border bg-cyber-surface/80 py-4 font-mono text-sm flex overflow-hidden">
         <motion.div 
            animate={{ x: [0, -1035] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="flex whitespace-nowrap gap-12 text-cyber-accent/80"
         >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-12">
                <span>NEURAL LINK: ESTABLISHED</span>
                <span>LATENCY: 0.04ms</span>
                <span>CORTEX SYNC: 99.8%</span>
                <span>BIOMETRICS: STABLE</span>
                <span>THREAT LEVEL: MINIMAL</span>
              </div>
            ))}
         </motion.div>
      </div>

      {/* Features Grid */}
      <section id="features" className="relative z-10 py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-wider text-white mb-4">
            <span className="text-cyber-accent">/</span> Component Architecture
          </h2>
          <p className="text-cyber-muted font-mono max-w-2xl mx-auto">Next-generation hardware modules designed for seamless cognitive integration and superior physical endurance.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Shield, title: "EXOSKELETAL ARMOR", desc: "Carbon-nanotube reinforced dermal plating for maximum kinetic resistance." },
            { icon: Eye, title: "OPTIC SENSORS", desc: "Multispectral vision targeting with real-time threat analysis overlay." },
            { icon: Zap, title: "PLASMA COIL", desc: "High-density micro-fusion reactor providing limitless operational uptime." },
            { icon: Database, title: "MEMORY CORE", desc: "Exabyte-scale neural storage with unhackable quantum encryption." },
            { icon: Code, title: "SYNAPTIC DRIVERS", desc: "Customized deep-learning algorithms for predictive motor control." },
            { icon: Lock, title: "FIREWALL PROTOCOLS", desc: "Military-grade cognitive shielding against hostile netrun attempts." }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative p-6 bg-cyber-surface/80 border border-cyber-border hover:border-cyber-accent transition-colors duration-300 backdrop-blur-sm"
            >
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyber-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyber-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <feature.icon className="w-8 h-8 text-cyber-muted group-hover:text-cyber-accent mb-4 transition-colors" />
              <h3 className="font-display font-bold text-xl text-white mb-2 tracking-wide uppercase">{feature.title}</h3>
              <p className="font-mono text-sm text-cyber-muted leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Cybernetic Display / Code Section */}
      <section className="relative z-10 py-12 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <div className="border border-cyber-border bg-cyber-surface p-4 rounded-sm font-mono text-xs text-green-400/80 shadow-[0_0_30px_rgba(0,0,0,0.5)] relative overflow-hidden h-[400px]">
               <div className="absolute top-2 left-4 text-[10px] text-cyber-muted">TERMINAL.EXE</div>
               <div className="absolute top-2 right-4 flex gap-2">
                 <div className="w-2 h-2 rounded-full bg-red-500/50" />
                 <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                 <div className="w-2 h-2 rounded-full bg-green-500/50" />
               </div>
               <div className="mt-8 space-y-2 opacity-80">
                 <p className="animate-pulse">&gt; INITIALIZING BOOT SEQUENCE...</p>
                 <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 }}
                 >
                   <p>&gt; LOADING DRIVERS: OK</p>
                   <p>&gt; CONNECTING TO NEURAL NET: ESTABLISHED</p>
                   <p>&gt; VERIFYING USER BIOMETRICS: <span className="text-cyber-accent">MATCH FOUND</span></p>
                   <p className="text-cyber-secondary mt-4">&gt; WARNING: DOPAMINE LEVELS SUB-OPTIMAL</p>
                   <p>&gt; INJECTING SYNTHETIC STIMULANTS...</p>
                   <p className="text-cyber-accent mt-4">&gt; // ENJOY THE RIDE, MEATBAG.</p>
                 </motion.div>
               </div>
               {/* Scanning line effect */}
               <motion.div 
                 animate={{ y: [0, 400, 0] }}
                 transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                 className="absolute top-0 left-0 w-full h-[1px] bg-cyber-accent/30 shadow-[0_0_10px_rgba(0,240,255,0.5)]" 
               />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
             <h2 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-wider text-white mb-6">
                Direct <span className="text-cyber-accent">Interface</span>
             </h2>
             <p className="text-cyber-muted font-sans text-lg mb-8">
               Bypass the slow biological inputs. Our proprietary deep-dive interface connects directly to your prefrontal cortex, allowing for thoughts-to-execution latency of less than 0.04ms.
             </p>
             <ul className="space-y-4 mb-8 font-mono text-sm">
                {['Direct neural mapping bridging', 'Sub-dermal optic cabling', 'Quantum-encrypted thought streams'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 border-b border-cyber-border pb-3">
                    <Globe className="text-cyber-accent w-4 h-4" />
                    <span className="text-white">{item}</span>
                  </li>
                ))}
             </ul>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-24 px-6 text-center border-t border-cyber-border mt-12 bg-gradient-to-b from-transparent to-cyber-surface">
         <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase mb-6 drop-shadow-lg text-glow">Ready to Upgrade?</h2>
         <p className="font-mono text-cyber-muted mb-10">Join the waitlist for the Mark IV Chassis. slots are highly limited.</p>
         
         <div className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto relative group">
           <div className="absolute -inset-1 bg-gradient-to-r from-cyber-accent to-blue-600 rounded-sm blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
           <input 
             type="email" 
             placeholder="ENTER COMM-LINK (EMAIL)" 
             className="relative z-10 flex-1 bg-cyber-surface border border-cyber-border p-4 text-white font-mono text-sm focus:outline-none focus:border-cyber-accent placeholder-cyber-muted"
           />
           <button className="relative z-10 px-6 py-4 bg-cyber-accent text-black font-bold font-display tracking-widest hover:bg-white transition-colors">
             SUBMIT
           </button>
         </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-cyber-border py-8 px-6 bg-cyber-bg">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
             <Cpu className="w-5 h-5 text-cyber-muted" />
             <span className="font-display font-bold text-cyber-muted tracking-wider">NEXUS.CORE &copy; 2077</span>
          </div>
          <div className="flex gap-6 font-mono text-xs text-cyber-muted">
            <a href="#" className="hover:text-cyber-accent transition-colors">TERMS OF AUGMENTATION</a>
            <a href="#" className="hover:text-cyber-accent transition-colors">PRIVACY MATRIX</a>
            <a href="#" className="hover:text-cyber-accent transition-colors">SUPPORT NODE</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
