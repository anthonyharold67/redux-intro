import { DECREMENT, INCREMENT, RESET } from "../types/counterTypes";

export const increment = () => ({type: INCREMENT})

export const decrement = () => ({type: DECREMENT})

export const reset = () => ({type: RESET})

//+ useDispatch ile bu fonksiyonları dispatch edebiliriz bunu yapmamızın sebebi typeları düzgün yazabilmek type hatalarına düşmemk için