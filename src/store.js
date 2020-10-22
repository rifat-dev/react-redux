import {createStore} from 'redux'

import rootreRducer from './reducer/combindreducer'

const initial={}

export const store = createStore(rootreRducer,initial)