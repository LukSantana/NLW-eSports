import { useEffect, useState } from 'react';
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'

import logo from '../assets/Logo.svg'
import AdCard from '../components/AdCard';
import Alert from '../components/Alert';

interface AdData {
    hourEnd: string,
    hoursStart: string,
    id: string,
    name: string,
    useVoiceChannel: boolean,
    weekDays: string,
    yearsPlaying: number,
    discord: string
}

export const GameAds = () => {
    const [ads, setAds] = useState<AdData[]>([])
    const [sliderRef, instanceRef] = useKeenSlider(
        {
            slideChanged() {
                console.log('slide changed')
            },
        },
    )

    const { gameId } = useParams()

    useEffect(() => {
        fetch(`https://nlw-esports-production-9bab.up.railway.app/games/${gameId}/ads`)
            .then(res => res.json())
            .then(data => setAds(data))
    }, [])

    return (
        <div className="max-w-[1344px] mx-auto flex flex-col items-center m-20 px-20">
            <Link to='/'>
                <img src={logo} alt="" />
            </Link>
            <h1 className='text-4xl text-white font-bold mt-20 mb-8 text-center'>Veja os últimos anúncios</h1>
            <div ref={sliderRef} className='flex flex-wrap gap-5 lg:flex-row'>
                {ads.length > 1 ?
                    ads.map(ad =>
                        <AdCard key={ad.id} data={ad} />
                    )
                    : <Alert/>}

            </div>
        </div>
    )
}
