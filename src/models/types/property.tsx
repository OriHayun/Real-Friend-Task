import { PropertyCoordinates } from './propertyCoordinates';
import { PropertyAddress } from './propertyAddress';
import { PropertyCategoryEnum } from '../enums/propertyCategory';

export type Property = {
    id: string,
    address: PropertyAddress,
    category: PropertyCategoryEnum
    price: number,
    status: string,
    description: string,
    agentDetails: string, // if i had this data i was create an interface type for agentDetails
    coordinates: PropertyCoordinates,
    favorite: boolean,
    images: string[]
}