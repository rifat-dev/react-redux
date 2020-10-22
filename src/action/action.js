import { increment_value, decrement_value } from '../type'

export function increment() {
    return {
        type: increment_value
    }
}

export function decrement() {
    return{
        type: decrement_value
    }
}