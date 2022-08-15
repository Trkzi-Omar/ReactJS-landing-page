import imgCenterPerson from "../assets/img/aldo-sadewo-c8byy2s4s-c-unsplash-copie-1@1x.png";
import imgLeftEclipse from "../assets/img/ellipse-1@1x.svg";

export const BackGround = () => {
    return (
        <div className={'bg'} id={'background'}>
            <img className={'bg-img'} id={'img-center-person'} src={imgCenterPerson} alt={''}/>
            <img className={'bg-img'} id={'img-left-eclipse'} src={imgLeftEclipse} alt={''}/>
        </div>
    )
}
