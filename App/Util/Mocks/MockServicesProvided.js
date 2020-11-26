import jason from '../../Images/professionals/jason.jpg'
import stallone from '../../Images/professionals/stallone.jpg'
import scarllet from '../../Images/professionals/scarllet.jpg'

export const historyServices = [
    {
        id: 1,
        type: 'manutencao',
        description: 'Conserto do portão',
        date: '01/01/2020',
        status: 'finalizado',
        customer: 'Jason Statham',
        customerPhoto: jason,
        address: 'Avenida Marques de Olinda, Quadra 12 Petrolândia-PE',
        value: '150,00'
    },
    {
        id: 2,
        type: 'limpeza',
        description: 'Limpeza geral na casa',
        date: '10/02/2020',
        status: 'finalizado',
        customer: 'Scarlett Johansson',
        customerPhoto: scarllet,
        address: 'Rua Monteiro Lobato, Quadra CS Petrolândia-PE',
        value: '60,00'
    },
    {
        id: 3,
        type: 'instalacao',
        description: 'Instalação ar condicionado',
        date: '20/04/2020',
        status: 'aguardando',
        customer: 'Sylvester Stallone',
        customerPhoto: stallone,
        address: 'Avenida Barreiras, Quadra 14 Petrolândia-PE',
        value: '90,00'
    }
]