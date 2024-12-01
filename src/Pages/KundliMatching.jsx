import React from 'react'
import FAQ from '../components/FAQ'
import AdKundli from '../components/AdKundli'
import KundliHero from '../components/KundliHero'


const KundliMatching = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
    <AdKundli />
    <KundliHero />
    <FAQ />
  </div>
  )
}

export default KundliMatching