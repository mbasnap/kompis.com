

const state = {
    name: 'Kompis',
    adress: {
        country: 'Ukrain',
        provance: 'Donetskay',
        sity: 'Mariupol',
        srteet: "fontanna",
        house: "5"
    },
    mails: ['info@kompis.ua'],
    phones: [
        {type: 'Vodaphon', kod: '+38 (095)', number: '624 81 82'},
        {type: 'Kievstar', kod: '+38(067)', number: '624 81 82'},
    ],
    // fax: []

}
const getters = {}
const mutations = {}
const actions = {}

export default {
namespaced: true,
state,
getters,
mutations,
actions
}