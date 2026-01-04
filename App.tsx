import React, { useState } from 'react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'DETAILS' | 'ABOUT'>('DETAILS');

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-slate-900/50 backdrop-blur-md sticky top-0 z-50 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight text-white">
            corlad.com
          </div>
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-400">
              <a href="#" className="hover:text-white transition-colors">Games</a>
              <a href="#" className="hover:text-white transition-colors">Apps</a>
              <a href="#" className="hover:text-white transition-colors">New</a>
            </nav>
            <button className="p-2 text-slate-400 hover:text-white">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-8">
        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: App Info & Main Sections */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* App Hero Section */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <img 
                src="https://i.postimg.cc/VvhxRtS5/IMG-20251216-041557.jpg" 
                alt="Toca Life World Icon" 
                className="w-32 h-32 md:w-40 md:h-40 rounded-3xl object-cover shadow-2xl border border-slate-800"
              />
              <div className="flex-1 space-y-4">
                <div className="space-y-1">
                  <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                    Toca Life World (MOD, Unlocked)
                  </h1>
                  <p className="text-blue-400 font-medium">Toca Boca</p>
                </div>

                {/* Rating Line - Enhanced Contrast and Weight */}
                <div className="text-slate-100 font-bold text-sm md:text-base flex items-center gap-2 flex-wrap">
                  <span className="text-yellow-400">★ 4.6</span>
                  <span className="text-slate-400 font-medium">(78,278)</span>
                  <span className="text-slate-600">—</span>
                  <span>50M+ downloads</span>
                  <span className="text-slate-600">—</span>
                  <span className="flex items-center gap-1">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3">
                      <path d="M20 6L9 17L4 12" />
                    </svg>
                    Safe & Verified
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button className="px-6 py-3 bg-[#2979ff] hover:opacity-90 text-white font-semibold rounded-xl transition-all border border-slate-700">
                    Download Android
                  </button>
                  <button className="px-6 py-3 bg-[#2ecc71] hover:opacity-90 text-white font-semibold rounded-xl transition-all border border-slate-700">
                    Download iOS / iPad
                  </button>
                </div>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="border-b border-slate-800 flex items-center gap-8">
              <button 
                onClick={() => setActiveTab('DETAILS')}
                className={`pb-4 text-sm font-bold tracking-wider transition-all ${activeTab === 'DETAILS' ? 'tab-active' : 'text-slate-500 hover:text-slate-300'}`}
              >
                DETAILS
              </button>
              <button 
                onClick={() => setActiveTab('ABOUT')}
                className={`pb-4 text-sm font-bold tracking-wider transition-all ${activeTab === 'ABOUT' ? 'tab-active' : 'text-slate-500 hover:text-slate-300'}`}
              >
                About This Mod
              </button>
            </div>

            {/* Content Body */}
            <div className="prose prose-invert max-w-none">
              {activeTab === 'DETAILS' ? (
                <div className="space-y-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-slate-900/40 p-4 rounded-2xl border border-slate-800/50">
                      <p className="text-xs text-slate-500 font-bold uppercase mb-1">Version</p>
                      <p className="text-slate-200">1.86</p>
                    </div>
                    <div className="bg-slate-900/40 p-4 rounded-2xl border border-slate-800/50">
                      <p className="text-xs text-slate-500 font-bold uppercase mb-1">Size</p>
                      <p className="text-slate-200">857.1 MB</p>
                    </div>
                    <div className="bg-slate-900/40 p-4 rounded-2xl border border-slate-800/50">
                      <p className="text-xs text-slate-500 font-bold uppercase mb-1">Updated</p>
                      <p className="text-slate-200">January 1, 2026</p>
                    </div>
                    <div className="bg-slate-900/40 p-4 rounded-2xl border border-slate-800/50">
                      <p className="text-xs text-slate-500 font-bold uppercase mb-1">OS</p>
                      <p className="text-slate-200">Android / iOS</p>
                    </div>
                  </div>

                  {/* Screenshots Repositioned Here */}
                  <div className="space-y-4 pt-4">
                    <h3 className="text-xl font-bold text-white">Screenshots</h3>
                    <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                      {[1,2,3,4].map(i => (
                        <img 
                          key={i} 
                          src={`https://picsum.photos/seed/${i + 123}/400/225`} 
                          alt="Screenshot" 
                          className="w-64 h-36 rounded-xl border border-slate-800 shadow-lg object-cover flex-shrink-0"
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white">Mod Features</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-slate-300 list-none p-0">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        All characters unlocked
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        All locations unlocked
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        No ads
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        All furniture items available
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white">About This Mod</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Toca Life World: Build stories & Create Your World (MOD, Unlocked) - a popular children's educational game from the series Toca Life, which includes a number of projects on various topics, the distinguishing feature of each of which is almost complete freedom of action, great cartoon graphics and funny characters, and here we have another game in the series called Toca Life World mod apk. In this project the developers have gone even further and combined all the games of the series in a single RPG, and you will be able to create the storyline and even build a whole world on your own. The graphical solution Toca Boca World mod apk remained the same, and so beloved characters are not ignored.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Sidebar - Empty */}
          <div className="space-y-8">
          </div>

        </div>
      </main>
    </div>
  );
};

export default App;