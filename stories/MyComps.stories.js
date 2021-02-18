//LEARN THE IMPORTANCE OF
import {Introhead} from '../comps/Intro-header';

//RECYCLING
import {IntroRecycleHeader} from '../comps/recycle-head';

//BODY TEXT MONTSERRAT
import {textbody} from '../comps/body-text';

export default {
    title: "My Components"
}

export const IntroHeader = () => Introhead

export const IntroRecycle = () => IntroRecycleHeader

export const BodyText = () => textbody