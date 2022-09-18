import AdInfo from '../AdInfo'

export interface DuoCardProps {
    hourEnd: string,
    hoursStart: string,
    id: string,
    name: string,
    useVoiceChannel: boolean,
    weekDays: string,
    yearsPlaying: number,
    discord: string
}

interface Props {
    data: DuoCardProps;
}

const AdCard = ({ data }: Props) => {
    return (
        <div className='w-60 bg-[#2A2634] rounded-lg p-5 mr-4'>
            <AdInfo
                label="Nome"
                value={data.name}
            />
            <AdInfo
                label="Tempo de Jogo"
                value={`${data.yearsPlaying} anos`}
            />
            <AdInfo
                label="Disponibilidade"
                value={`${data.weekDays.length} dias \u2022 ${data.hoursStart} - ${data.hourEnd}`}
            />
            <AdInfo
                label="Costuma entrar no canal de voz?"
                value={data.useVoiceChannel ? 'Sim' : 'Não'}
            />
            <AdInfo
                label="Discord"
                value={data.discord}
            />
        </div>
    )
}

export default AdCard