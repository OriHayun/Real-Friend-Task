import { PropertyAddressDto } from "./propertyAddressDto";
import { PropertyCoordinatesDto } from "./propertyCoordinatesDto";
import { PropertyLeaseDataDto } from "./propertyLeaseDataDto";

export type PropertyDto = {
    _id: string,
    address: PropertyAddressDto,
    category: string
    originalPrice: number,
    leaseData: PropertyLeaseDataDto,
    content: string,
    coords: PropertyCoordinatesDto,
    favorite: boolean,
    photos: string[]
}