import character from '../assets/svgs/character.svg';
import food from '../assets/svgs/food.svg';
import bgMesh from '../assets/svgs/bg-mesh.svg';

interface IAssets {
    character: string,
    bgMesh: string,
    food: string,
}

const assets: IAssets = {
    character: character,
    bgMesh: bgMesh,
    food: food,
}

export default assets;