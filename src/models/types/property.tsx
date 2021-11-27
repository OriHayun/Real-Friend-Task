import { PropertyCoordinates } from './propertyCoordinates';
import { PropertyAddress } from './propertyAddress';
import { AgentDetails } from './agentDetails';
import { PropertyCategoryEnum } from '../enums/propertyCategory';

export type Property = {
    id: string,
    address: PropertyAddress,
    category: PropertyCategoryEnum
    price: number,
    status: string,
    description: string,
    agentDetails: AgentDetails,
    coordinates: PropertyCoordinates,
    favorite: boolean,
    images: string[]
}