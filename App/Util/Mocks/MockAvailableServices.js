import gustavo from '../../Images/professionals/gustavo.jpg'
import igor from '../../Images/professionals/igor.jpg'
import vin from '../../Images/professionals/vin.jpg'
import jackie from '../../Images/professionals/jackie.jpg'

import diarista from '../../Images/diarista.jpg'
import eletricista from '../../Images/eletricista.jpg'
import encanador from '../../Images/encanador.jpg'
import reparos from '../../Images/reparos.jpg'
import eventos from '../../Images/eventos.jpg'
import beleza from '../../Images/beleza.jpg'


export const availableServices = [
   {
      id: 1,
      title: 'Conserto de pia',
      description: 'A pia da cozinha está entupida',
      category: 'encanamento',
      picture: encanador,
      address: 'Avenida Barreiras - Quadra 14',
      city: 'Petrolândia-PE',
      customer: 'Gustavo Nunes',
      photo: gustavo,
      rating: 4.5,
      desiredPrice: '50,00',
      isNegociable: false,
      obs: '',
      timeAvailabilityOne: '8:00',
      timeAvailabilityTwo: '11:00',
      timeAvailabilityTree: '14:00',
      timeAvailabilityFour: '18:00',
      dateAvailabilityBegin: '',
      dateAvailabilityEnd: ''
   },
   {
      id: 2,
      title: 'Faxina',
      description: 'Realizar uma faxina geral na casa',
      category: 'limpeza',
      picture: diarista,
      address: 'Rua Marquês de Olinda Siqueira Quadra 01',
      city: 'Petrolândia-PE',
      customer: 'Igor de Dal',
      photo: igor,
      rating: 2.5,
      desiredPrice: '70,00',
      isNegociable: true,
      obs: 'Levar o material de limpeza por não tenho',
      timeAvailabilityOne: '7:00',
      timeAvailabilityTwo: '11:30',
      timeAvailabilityTree: '12:30',
      timeAvailabilityFour: '19:00',
      dateAvailabilityBegin: '',
      dateAvailabilityEnd: ''
   },
   {
      id: 3,
      title: 'Instalação ar condicionado',
      description: 'Instalar um ar condicionado split em um apartamento 1 andar',
      category: 'manutencao',
      picture: reparos,
      address: 'Rua Escada - Centro',
      city: 'Petrolândia-PE',
      customer: 'Maria de Biu',
      photo: '',
      rating: 1,
      desiredPrice: '180,00',
      isNegociable: true,
      obs: '',
      timeAvailabilityOne: '6:30',
      timeAvailabilityTwo: '10:00',
      timeAvailabilityTree: '15:30',
      timeAvailabilityFour: '20:00',
      dateAvailabilityBegin: '',
      dateAvailabilityEnd: ''
   },
   {
      id: 4,
      title: 'Conserto de TV',
      description: 'Minha TV led não está ligando',
      category: 'manutencao',
      picture: reparos,
      address: 'Rua João da Silva Leal - Quadra CS',
      city: 'Petrolândia-PE',
      customer: 'Vin Diesel',
      photo: vin,
      rating: 3,
      desiredPrice: '80,00',
      isNegociable: false,
      obs: '',
      timeAvailabilityOne: '9:30',
      timeAvailabilityTwo: '11:00',
      timeAvailabilityTree: '16:30',
      timeAvailabilityFour: '22:00',
      dateAvailabilityBegin: '',
      dateAvailabilityEnd: ''
   },
   {
      id: 5,
      title: 'Serviço de beleza',
      description: 'Preciso de uma cabelereira para me arrumar para um evento',
      category: 'beleza',
      picture: beleza,
      address: 'Avenida Antonio Borba - Quadra 9',
      city: 'Petrolândia-PE',
      customer: 'Janete Borba',
      photo: jackie,
      rating: 5,
      desiredPrice: '60,00',
      isNegociable: true,
      obs: 'Levar todo o material, pois não tenho',
      timeAvailabilityOne: '10:00',
      timeAvailabilityTwo: '11:00',
      timeAvailabilityTree: '12:00',
      timeAvailabilityFour: '17:30',
      dateAvailabilityBegin: '',
      dateAvailabilityEnd: ''
   },
]